const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f720bcf5a95e94d053ad36c359e14fb6","url":"./404.html"},{"revision":"4e3ecb9bfe2b290db7c7f00231695176","url":"./about/index.html"},{"revision":"6ddce56e733693869e659993f9a26a60","url":"./analysis/index.html"},{"revision":"e53920b14c375635ed34dfb920a93f16","url":"./archives/2021/05/index.html"},{"revision":"fd62e3fcd76b38993b41ec7827818b06","url":"./archives/2021/06/index.html"},{"revision":"82481a8db1e1369296058e25d3604c4d","url":"./archives/2021/06/page/2/index.html"},{"revision":"33267a352931b12634aa229ddd7ea053","url":"./archives/2021/index.html"},{"revision":"20a8a972d33d75442546df7eb929a714","url":"./archives/2021/page/2/index.html"},{"revision":"6057e70cfa99a7f77aa99bad0c3d02ad","url":"./archives/index.html"},{"revision":"dfcd4aac7e8dddb86ff8ba0a3b190524","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"114f182282df472f1034a6c6f766994f","url":"./bilibili/index.html"},{"revision":"fce579ea5e53b4cd83b4b756084a9a71","url":"./categories/index.html"},{"revision":"76e89ecc4d886faa3f9a0527f2eef8a5","url":"./categories/test/index.html"},{"revision":"6c16a2c5311db5078ba8f9d9d55474e0","url":"./categories/博客搭建/index.html"},{"revision":"85879c1dd2e810705e0194e8a27ae7a1","url":"./categories/程序/index.html"},{"revision":"649c536acf0a1e602c384d0d8d93d3dc","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"66b59220e6bc07a28f393fe610004409","url":"./gallery/网站图片链接.html"},{"revision":"0c15c69e1f46541bc5dfeeaf3f7394f3","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"ea869f04222b63782cf4fd89497bcd13","url":"./img/siteicon/README.html"},{"revision":"1c84014f30a5b2a3d4f7e3b8289d4aa4","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"98e23786cbb7f125786e0e5608d71706","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"04c97558ff96b75017ae722c79a3d610","url":"./page/2/index.html"},{"revision":"a7da3de9735f00d6ec6d2568b39f78cc","url":"./post/28daef73/index.html"},{"revision":"a4f637840522adbff2f5e863ffc61ce1","url":"./post/28f332e5/index.html"},{"revision":"068530200840c8ddae598d1fcd98425f","url":"./post/38f64154/index.html"},{"revision":"0ca5ddf63e2ef9177fd556904be50741","url":"./post/4271b0f6/index.html"},{"revision":"f0b49aa616336ccff2db8c176ed12776","url":"./post/8c5e4b35/index.html"},{"revision":"7de06da83f688093e013b2cf3e3507ee","url":"./post/8efd8d8a/index.html"},{"revision":"289f216a89a2d1585629803beff555d8","url":"./post/b580d7ee/index.html"},{"revision":"9a0f1c5a824f652a514018b03d198c82","url":"./post/b6596b48/index.html"},{"revision":"b70f3a037d1ede56ebae4fdd311c11a7","url":"./post/ba71baad/index.html"},{"revision":"54376a519baa4a90891984c4d222b992","url":"./post/c66d090/index.html"},{"revision":"0456f6176aadefcd50d2220b579f0600","url":"./post/c8b7dc96/index.html"},{"revision":"c2c96b8f7767d20cee26bfe97dd2c52d","url":"./post/dc4c1419/index.html"},{"revision":"e04f02d16bb6c08f0e9b9cfb0e99e64a","url":"./post/de75e3e6/index.html"},{"revision":"664b86041ded57c2179e583e7374fd44","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"46a0e5198aabd688b34f42caf06f2bad","url":"./search.xml"},{"revision":"27448d1115f5f371ecb34c95a9ef8f4c","url":"./sitemap.xml"},{"revision":"868ac52be23f788c47a222da89e55681","url":"./tags/butterfly/index.html"},{"revision":"dd7ce48371df6416ccfc95a2ec096e8b","url":"./tags/code/index.html"},{"revision":"6ef0dee2eff71fb63cc13d9b569e7b42","url":"./tags/hexo/index.html"},{"revision":"ffd8a00f12642ec0e390f46ac9f8cbfe","url":"./tags/hexo插件/index.html"},{"revision":"4d9982263b6437ce1fb86ab4c642e4b9","url":"./tags/index.html"},{"revision":"dfbe51d7fa9ca586a33758a9625906bc","url":"./tags/npm/index.html"},{"revision":"497a67d7c1a7c9dd4e6e507ec3cf84a6","url":"./tags/zzz/index.html"},{"revision":"195bebd5fdebb62ed4bb1b6167a66fb5","url":"./tags/博客搭建/index.html"},{"revision":"bb5b25f4b1c04858b88ec05178ce98b5","url":"./tags/图床/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();