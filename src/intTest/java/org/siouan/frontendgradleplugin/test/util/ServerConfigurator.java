package org.siouan.frontendgradleplugin.test.util;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.equalTo;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlPathMatching;
import static org.siouan.frontendgradleplugin.test.util.Resources.getResourcePath;

import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.MappingBuilder;
import com.github.tomakehurst.wiremock.matching.MatchResult;

/**
 * A HTTP server configurator.
 */
public class ServerConfigurator {

    private final WireMockServer server;

    private final String proxyTargetHost;

    private boolean nodeEnabled;

    private boolean yarnEnabled;

    private String username;

    private String password;

    public ServerConfigurator(@Nonnull final WireMockServer server, @Nullable final String proxyTargetHost) {
        this.server = server;
        this.proxyTargetHost = proxyTargetHost;
        this.nodeEnabled = false;
        this.yarnEnabled = false;
    }

    public void withNodeDistribution() {
        this.nodeEnabled = true;
    }

    public void withYarnDistribution() {
        this.yarnEnabled = true;
    }

    public void withAuth(@Nonnull final String username, @Nonnull final String password) {
        this.username = username;
        this.password = password;
    }

    public void configure() throws IOException {
        MappingBuilder mappingBuilder;
        if (proxyTargetHost == null) {
            if (nodeEnabled) {
                // The distribution server is configured to return test resources to avoid network overhead.
                mappingBuilder = get(urlPathMatching("^.*/node-v[^/]+$"));
                withAuth(mappingBuilder);
                server.stubFor(mappingBuilder.willReturn(
                    aResponse().withBody(Files.readAllBytes(getResourcePath("node-v14.16.1.zip")))));

                mappingBuilder = get(urlPathMatching("^.*/SHASUMS256.txt$"));
                withAuth(mappingBuilder);
                server.stubFor(mappingBuilder.willReturn(
                    aResponse().withBody(Files.readAllBytes(getResourcePath("SHASUMS256.txt")))));
            }

            if (yarnEnabled) {
                // The distribution server is configured to return test resources to avoid network overhead.
                mappingBuilder = get(urlPathMatching("^.*/yarn-v[^/]+$"));
                withAuth(mappingBuilder);
                server.stubFor(mappingBuilder.willReturn(
                    aResponse().withBody(Files.readAllBytes(getResourcePath("yarn-v1.22.10.tar.gz")))));
            }
        } else {
            // The proxy server is configured to forward requests to the distribution server.
            mappingBuilder = get(urlPathMatching("^.*$"));
            if (username != null) {
                // Add a condition if Basic authentication is required
                mappingBuilder.withHeader("Proxy-Authorization", equalTo(buildBasicToken(username, password)));
            }
            server.stubFor(mappingBuilder.willReturn(aResponse().proxiedFrom(proxyTargetHost)));

            if (username != null) {
                // Simulate HTTP 407 responses when proxy authorization is missing or is incorrect.
                mappingBuilder = get(urlPathMatching("^.*$"));
                mappingBuilder.andMatching(request -> MatchResult.of(
                    !request.containsHeader("Proxy-Authorization") || !request
                        .getHeader("Proxy-Authorization")
                        .equals(buildBasicToken(username, password))));
                server.stubFor(mappingBuilder.willReturn(aResponse().withStatus(407)));
            }
        }
    }

    private void withAuth(@Nonnull final MappingBuilder mappingBuilder) {
        if (username != null) {
            mappingBuilder.withBasicAuth(username, password);
        }
    }

    private String buildBasicToken(@Nonnull final String username, @Nonnull final String password) {
        final String credentials = username + ':' + password;
        return "Basic " + Base64.getEncoder().encodeToString(credentials.getBytes());
    }
}
