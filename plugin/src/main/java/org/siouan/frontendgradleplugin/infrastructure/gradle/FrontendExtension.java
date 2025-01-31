package org.siouan.frontendgradleplugin.infrastructure.gradle;

import lombok.Getter;
import org.gradle.api.file.DirectoryProperty;
import org.gradle.api.file.RegularFileProperty;
import org.gradle.api.model.ObjectFactory;
import org.gradle.api.provider.Property;

/**
 * Extension providing configuration properties for frontend tasks.
 */
@Getter
public class FrontendExtension {

    /**
     * Whether a Node distribution is provided.
     *
     * @since 2.0.0
     */
    private final Property<Boolean> nodeDistributionProvided;

    /**
     * Version of the Node distribution to download.
     */
    private final Property<String> nodeVersion;

    /**
     * Directory where the Node distribution shall be installed.
     */
    private final DirectoryProperty nodeInstallDirectory;

    /**
     * URL root part to build the exact URL to download the Node.js distribution.
     *
     * @since 3.0.0
     */
    private final Property<String> nodeDistributionUrlRoot;

    /**
     * Trailing path pattern to build the exact URL to download the Node.js distribution.
     *
     * @since 3.0.0
     */
    private final Property<String> nodeDistributionUrlPathPattern;

    /**
     * Username to authenticate on the server providing Node.js distributions.
     *
     * @since 3.0.0
     */
    private final Property<String> nodeDistributionServerUsername;

    /**
     * Password to authenticate on the server providing Node.js distributions.
     *
     * @since 3.0.0
     */
    private final Property<String> nodeDistributionServerPassword;

    /**
     * Script provided as argument of the package manager executable to install frontend dependencies.
     */
    private final Property<String> installScript;

    /**
     * Script provided as argument of the package manager executable to clean frontend artifacts.
     */
    private final Property<String> cleanScript;

    /**
     * Script provided as argument of the package manager executable to assemble frontend artifacts.
     */
    private final Property<String> assembleScript;

    /**
     * Script provided as argument of the package manager executable to check frontend project.
     */
    private final Property<String> checkScript;

    /**
     * Script provided as argument of the package manager executable to publish frontend artifacts.
     */
    private final Property<String> publishScript;

    /**
     * Directory where the {@code package.json} file is located.
     */
    private final DirectoryProperty packageJsonDirectory;

    /**
     * Proxy host used to download resources with HTTP protocol.
     *
     * @since 5.0.0
     */
    private final Property<String> httpProxyHost;

    /**
     * Proxy port used to download resources with HTTP protocol.
     *
     * @since 5.0.0
     */
    private final Property<Integer> httpProxyPort;

    /**
     * Username to authenticate on the proxy server for HTTP requests.
     *
     * @since 5.0.0
     */
    private final Property<String> httpProxyUsername;

    /**
     * Password to authenticate on the proxy server for HTTP requests.
     *
     * @since 5.0.0
     */
    private final Property<String> httpProxyPassword;

    /**
     * Proxy host used to download resources with HTTPS protocol.
     *
     * @since 2.1.0
     */
    private final Property<String> httpsProxyHost;

    /**
     * Proxy port used to download resources with HTTPS protocol.
     *
     * @since 2.1.0
     */
    private final Property<Integer> httpsProxyPort;

    /**
     * Username to authenticate on the proxy server for HTTPS requests.
     *
     * @since 3.0.0
     */
    private final Property<String> httpsProxyUsername;

    /**
     * Password to authenticate on the proxy server for HTTPS requests.
     *
     * @since 3.0.0
     */
    private final Property<String> httpsProxyPassword;

    /**
     * Directory where the plugin caches some common files for multiple tasks.
     *
     * @since 7.0.0
     */
    private final DirectoryProperty cacheDirectory;

    /**
     * WARNING: THIS IS AN INTERNAL PROPERTY, WHICH MUST NOT BE USED/OVERRIDDEN IN GRADLE BUILD FILES.
     * <p>The {@code package.json} file derived from the {@link #packageJsonDirectory} property.</p>
     *
     * @since 7.0.0
     */
    private final RegularFileProperty internalPackageJsonFile;

    /**
     * WARNING: THIS IS AN INTERNAL PROPERTY, WHICH MUST NOT BE USED/OVERRIDDEN IN GRADLE BUILD FILES.
     * <p>File derived from the {@link #cacheDirectory} property where task "resolvePackageManager" stores the name and
     * the version of the package manager.</p>
     *
     * @since 7.0.0
     */
    private final RegularFileProperty internalPackageManagerSpecificationFile;

    /**
     * WARNING: THIS IS AN INTERNAL PROPERTY, WHICH MUST NOT BE USED/OVERRIDDEN IN GRADLE BUILD FILES.
     * <p>File derived from the {@link #cacheDirectory} property where task "resolvePackageManager" stores the path of
     * the package manager executable.</p>
     *
     * @since 7.0.0
     */
    private final RegularFileProperty internalPackageManagerExecutablePathFile;

    /**
     * Whether verbose mode is enabled.
     *
     * @since 2.0.0
     */
    private final Property<Boolean> verboseModeEnabled;

    public FrontendExtension(final ObjectFactory objectFactory) {
        nodeDistributionProvided = objectFactory.property(Boolean.class);
        nodeVersion = objectFactory.property(String.class);
        nodeInstallDirectory = objectFactory.directoryProperty();
        nodeDistributionUrlRoot = objectFactory.property(String.class);
        nodeDistributionUrlPathPattern = objectFactory.property(String.class);
        nodeDistributionServerUsername = objectFactory.property(String.class);
        nodeDistributionServerPassword = objectFactory.property(String.class);
        installScript = objectFactory.property(String.class);
        cleanScript = objectFactory.property(String.class);
        assembleScript = objectFactory.property(String.class);
        checkScript = objectFactory.property(String.class);
        publishScript = objectFactory.property(String.class);
        packageJsonDirectory = objectFactory.directoryProperty();
        httpProxyHost = objectFactory.property(String.class);
        httpProxyPort = objectFactory.property(Integer.class);
        httpProxyUsername = objectFactory.property(String.class);
        httpProxyPassword = objectFactory.property(String.class);
        httpsProxyHost = objectFactory.property(String.class);
        httpsProxyPort = objectFactory.property(Integer.class);
        httpsProxyUsername = objectFactory.property(String.class);
        httpsProxyPassword = objectFactory.property(String.class);
        cacheDirectory = objectFactory.directoryProperty();
        internalPackageJsonFile = objectFactory.fileProperty();
        internalPackageManagerSpecificationFile = objectFactory.fileProperty();
        internalPackageManagerExecutablePathFile = objectFactory.fileProperty();
        verboseModeEnabled = objectFactory.property(Boolean.class);
    }
}
