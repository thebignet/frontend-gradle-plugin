<template>
    <section>
        <fgp-main-title>Frequently asked questions</fgp-main-title>

        <nav>
            <ul>
                <li>
                    <fgp-site-link path="#node-corepack-npm-pnpm-yarn-direct-use">
                        How to use <fgp-code>node</fgp-code>/<fgp-code>corepack</fgp-code>/<fgp-code
                        >npm</fgp-code>/<fgp-code>pnpm</fgp-code>/<fgp-code>yarn</fgp-code> executables apart from Gradle
                        when the Node.js distribution is downloaded by the plugin?
                    </fgp-site-link>
                </li>
                <li>
                    <fgp-site-link path="#unsupported-platform-exception">
                        What should I do when error <fgp-code>UnsupportedPlatformException</fgp-code> occurs?
                    </fgp-site-link>
                </li>
                <li>
                    <fgp-site-link path="#custom-nodejs-distribution-server">
                        How to configure plugin so as I can download <fgp-code>Node.js</fgp-code> distribution from a
                        customserver?
                    </fgp-site-link>
                </li>
                <li>
                    <fgp-site-link path="#cache-directory">
                        What's the purpose of the <fgp-code>.frontend-gradle-plugin</fgp-code> directory generated in
                        each project?
                    </fgp-site-link>
                </li>
            </ul>
        </nav>

        <fgp-node-corepack-npm-pnpm-yarn-direct-use-faq id="node-corepack-npm-pnpm-yarn-direct-use" />
        <fgp-unsupported-platform-exception-faq id="unsupported-platform-exception" />
        <fgp-custom-nodejs-distribution-server-faq id="custom-nodejs-distribution-server" />
        <fgp-cache-directory-faq id="cache-directory" />
    </section>
</template>

<script>
import Vue from 'vue';
import fgpCacheDirectoryFaq from '@/components/faq/cache-directory-faq';
import fgpCode from '@/components/code';
import fgpCustomNodejsDistributionServerFaq from '@/components/faq/custom-nodejs-distribution-server-faq';
import fgpMainTitle from '@/components/main-title';
import fgpNodeCorepackNpmPnpmYarnDirectUseFaq from '@/components/faq/node-corepack-npm-pnpm-yarn-direct-use-faq';
import fgpPageMeta from '@/mixin/page-meta';
import fgpSiteLink from '@/components/link/site-link';
import fgpUnsupportedPlatformExceptionFaq from '@/components/faq/unsupported-platform-exception-faq';

export default Vue.component('fgp-faqs', {
    components: {
        fgpCacheDirectoryFaq,
        fgpCode,
        fgpCustomNodejsDistributionServerFaq,
        fgpMainTitle,
        fgpNodeCorepackNpmPnpmYarnDirectUseFaq,
        fgpSiteLink,
        fgpUnsupportedPlatformExceptionFaq
    },
    mixins: [fgpPageMeta],
    data() {
        return {
            htmlTitle: 'Frequently asked questions',
            metaDescription: 'Using corepack, node, npm, pnpm, yarn executables apart from Gradle and resolving common issues.',
            linkCanonicalHref: process.env.FGP_WEBSITE_URL + 'faqs/'
        }
    }
});
</script>
