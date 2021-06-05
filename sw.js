const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d310c5ac57acfbe4f69e1de5d306fe10","url":"./404.html"},{"revision":"b357fe3677297b9cc66e31294136a6dd","url":"./about/index.html"},{"revision":"7d9bc8334efd2a0b77cc45a642017ccb","url":"./analysis/index.html"},{"revision":"cc9cc565c384611be79cc6b839a1a97d","url":"./archives/2021/05/index.html"},{"revision":"7d7153b941489c2ee7c09f1bb1a94a27","url":"./archives/2021/06/index.html"},{"revision":"de0e75b1203dbae9b6253e0b3604c4c9","url":"./archives/2021/06/page/2/index.html"},{"revision":"3fdbe8b2692833e71a8d9d091e4b8199","url":"./archives/2021/index.html"},{"revision":"e2a6b0ce42b8806914f506233bfbb8b3","url":"./archives/2021/page/2/index.html"},{"revision":"c53060b342b9b390b90a7db657edb414","url":"./archives/index.html"},{"revision":"f8411e2c1d47d59bad162e19bc1f8e3e","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"f4e48fd815c280179460e4af6570c0d8","url":"./bilibili/index.html"},{"revision":"2839ed357062e7bb2903fa72cc10c2a0","url":"./categories/index.html"},{"revision":"0f156cb7622e0f55256584aa821558d6","url":"./categories/test/index.html"},{"revision":"5b4ba3d37bff4999c61d51e9dd86adfa","url":"./categories/博客搭建/index.html"},{"revision":"9208ec5dffff5adae0581256951de896","url":"./categories/模板/index.html"},{"revision":"5fb9c529d73481958a02234657cc2808","url":"./categories/程序/index.html"},{"revision":"58866a0acf1944a0bf2c46b4cbf53499","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3b417c26882af04410301f5d9c14e219","url":"./gallery/网站图片链接.html"},{"revision":"f3a760066f1c7cbf247c264acb0de654","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"03e74608bac72b847b2151834f0c6dc8","url":"./img/siteicon/README.html"},{"revision":"212a4f55d51906c2673a08638eb40fa9","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5e56299bbd65de65b1aecb913d76a63d","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"1b8d203f3cc9ba8141c25e545dfa666f","url":"./page/2/index.html"},{"revision":"cb6dddc57addd105b19e83b103c070ce","url":"./post/0/index.html"},{"revision":"f78b7da690fd0cc875850f50c369bed1","url":"./post/28daef73/index.html"},{"revision":"8e662615fc992e173633847175d8c123","url":"./post/28f332e5/index.html"},{"revision":"8fe052656eaecffb2cf532237ef795fe","url":"./post/38f64154/index.html"},{"revision":"97457a2b4e3d578b64155760433b1fb1","url":"./post/4271b0f6/index.html"},{"revision":"f001729babb8740c844faf3010480cc1","url":"./post/8c5e4b35/index.html"},{"revision":"211342c3133d9fed106335882cd45a45","url":"./post/8efd8d8a/index.html"},{"revision":"ba42067bf6826909a887b59b24a22229","url":"./post/b580d7ee/index.html"},{"revision":"6e2805e6bbe9038082255284841e278b","url":"./post/b6596b48/index.html"},{"revision":"7b71af993eddf7789f17eb9b812649ca","url":"./post/ba71baad/index.html"},{"revision":"79bd0a63c8a8b2cd00ce481b894d407a","url":"./post/c66d090/index.html"},{"revision":"91ba7806b4560838fe56792d095d8e15","url":"./post/c8b7dc96/index.html"},{"revision":"f03ce3bdb738fe63a6e4d982b4be1b08","url":"./post/dc4c1419/index.html"},{"revision":"3f633330f9baf33f71835ed504ccf2be","url":"./post/de75e3e6/index.html"},{"revision":"5c6ce7ad207e39d8a1d506bbbb2238e5","url":"./post/f8915431/index.html"},{"revision":"27000cdc91c22e70bc36a655602f9931","url":"./random/index.html"},{"revision":"a85e9f5fd101d5ea4c5debed024904f9","url":"./search.xml"},{"revision":"cc3f8b318d2c20a3671a04cbd2b5d1d8","url":"./sitemap.xml"},{"revision":"b5f12da170cf283763613bffb910f28e","url":"./tags/butterfly/index.html"},{"revision":"5a8588209e03476d92ed144e56dd8842","url":"./tags/code/index.html"},{"revision":"d361da1255c2616e006da9d54ee837d5","url":"./tags/hexo/index.html"},{"revision":"526632e003cc29c1672fa56a726163bb","url":"./tags/hexo插件/index.html"},{"revision":"ce388b87222c53ea66898d818df043ce","url":"./tags/index.html"},{"revision":"03bbc75e54402ec5600caf3427b7f6bf","url":"./tags/npm/index.html"},{"revision":"5414d59f80a9c4e0fedd2551096cbb29","url":"./tags/zzz/index.html"},{"revision":"e1c6b8f8c5a90a5196db7ed54fb5decf","url":"./tags/博客搭建/index.html"},{"revision":"5045e2ea0c9e798cbba36779b4cb3728","url":"./tags/图床/index.html"}],{
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