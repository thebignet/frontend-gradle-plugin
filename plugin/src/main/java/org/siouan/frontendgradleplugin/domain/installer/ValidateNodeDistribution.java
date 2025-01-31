package org.siouan.frontendgradleplugin.domain.installer;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Path;

import lombok.RequiredArgsConstructor;
import org.siouan.frontendgradleplugin.domain.FileManager;
import org.siouan.frontendgradleplugin.domain.Logger;

/**
 * Validates a Node distribution by comparing its SHA-256 hash against the one officially published.
 */
@RequiredArgsConstructor
public class ValidateNodeDistribution {

    public static final String SHASUMS_FILE_NAME = "SHASUMS256.txt";

    private final FileManager fileManager;

    private final BuildTemporaryFileName buildTemporaryFileName;

    private final DownloadResource downloadResource;

    private final ReadNodeDistributionShasum readNodeDistributionShasum;

    private final HashFile hashFile;

    private final Logger logger;

    /**
     * Validates a downloaded distribution: implementation downloads the Node official file providing shasums - one for
     * each supported platform, resolves the expected shasum matching the distribution file name, and verifies the
     * actual shasum of the distribution file matches this expected shasum.
     *
     * @param validateNodeDistributionCommand Command providing parameters to validate the distribution.
     * @throws ResourceDownloadException If downloading the file providing shasums fails.
     * @throws InvalidNodeDistributionException If the distribution is invalid.
     * @throws NodeDistributionShasumNotFoundException If validation cannot be done for other reason.
     * @throws IOException If an I/O error occurs.
     */
    public void execute(final ValidateNodeDistributionCommand validateNodeDistributionCommand)
        throws InvalidNodeDistributionException, IOException, NodeDistributionShasumNotFoundException,
        ResourceDownloadException {
        final Path shasumsFilePath = validateNodeDistributionCommand
            .getTemporaryDirectoryPath()
            .resolve(SHASUMS_FILE_NAME);
        // Resolve the URL to download the shasum file
        final String expectedShasum;
        try {
            final URL shasumsFileUrl = new URL(validateNodeDistributionCommand.getDistributionUrl(), SHASUMS_FILE_NAME);

            // Download the shasum file
            logger.debug("Downloading shasums at '{}'", shasumsFileUrl);
            final Path temporaryFilePath = validateNodeDistributionCommand
                .getTemporaryDirectoryPath()
                .resolve(buildTemporaryFileName.execute(shasumsFilePath.getFileName().toString()));
            downloadResource.execute(DownloadResourceCommand
                .builder()
                .resourceUrl(shasumsFileUrl)
                .serverCredentials(validateNodeDistributionCommand.getDistributionServerCredentials())
                .proxySettings(validateNodeDistributionCommand.getProxySettings())
                .temporaryFilePath(temporaryFilePath)
                .destinationFilePath(shasumsFilePath)
                .build());

            // Verify the distribution integrity
            logger.info("Verifying distribution integrity");
            final String distributionFileName = validateNodeDistributionCommand
                .getDistributionFilePath()
                .getFileName()
                .toString();
            expectedShasum = readNodeDistributionShasum
                .execute(ReadNodeDistributionShasumCommand
                    .builder()
                    .distributionFileName(distributionFileName)
                    .nodeDistributionShasumFilePath(shasumsFilePath)
                    .build())
                .orElseThrow(() -> new NodeDistributionShasumNotFoundException(distributionFileName));
        } finally {
            fileManager.deleteIfExists(shasumsFilePath);
        }

        if (!hashFile.execute(validateNodeDistributionCommand.getDistributionFilePath()).equals(expectedShasum)) {
            throw new InvalidNodeDistributionException();
        }
    }
}
