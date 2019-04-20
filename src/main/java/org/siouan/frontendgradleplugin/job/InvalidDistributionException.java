package org.siouan.frontendgradleplugin.job;

import org.siouan.frontendgradleplugin.FrontendException;

/**
 * Exception thrown when a downloaded distribution is invalid.
 */
public class InvalidDistributionException extends FrontendException {

    public InvalidDistributionException(final String message) {
        super(message);
    }

    public InvalidDistributionException(final Throwable cause) {
        super(cause);
    }
}
