import { defineConfig } from 'wxt';

export default defineConfig({
    manifest: {
        name: 'Twitter Location',
        description: 'Shows country flags next to Twitter usernames',
        permissions: ['storage', 'tabs'],
        host_permissions: ['*://x.com/*', '*://twitter.com/*'],
        icons: {
            16: '/icon/icon-16.png',
            32: '/icon/icon-32.png',
            48: '/icon/icon-48.png',
            96: '/icon/favicon-96x96.png',
            128: '/icon/icon-128.png',
            192: '/icon/web-app-manifest-192x192.png',
            512: '/icon/web-app-manifest-512x512.png',
        },
        web_accessible_resources: [
            {
                resources: ['page.js'],
                matches: ['*://x.com/*', '*://twitter.com/*']
            }
        ],
        browser_specific_settings: {
            gecko: {
                id: 'versedev.store@proton.me',
                strict_min_version: '109.0',
                data_collection_permissions: {
                    required: ["none"],
                    optional: []
                }
            }
        },
    },
    modules: ['@wxt-dev/module-react'],
});
