const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"78aeffd8d88cf692a19537daecf18416","url":"./404.html"},{"revision":"5d11a3e8b9d5020b2fbeaeb68d34e563","url":"./about/index.html"},{"revision":"64c611c463eda35765a755bf6ad0efe6","url":"./analysis/index.html"},{"revision":"1f0f50285961f4e1483e88a22ec0c25f","url":"./archives/2021/05/index.html"},{"revision":"d65ce5e1983df2d1852dcc0e2ed40d4c","url":"./archives/2021/06/index.html"},{"revision":"643e069caa9c3b1a9c98eff6bb5c9715","url":"./archives/2021/06/page/2/index.html"},{"revision":"6d9f0dcce6149cee47c5ad2e4de2e7a2","url":"./archives/2021/index.html"},{"revision":"96f12257135b939ca2bd3605802fada0","url":"./archives/2021/page/2/index.html"},{"revision":"798fb1f055f9db2b1268f8e5d854e4ee","url":"./archives/index.html"},{"revision":"6a6f5d15ef475ecc7001bf9c3cd03b75","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"997358843c0bbae119969790dfaba022","url":"./bilibili/index.html"},{"revision":"ccc6cc15ba837dd5f01a33500afe7a2c","url":"./categories/index.html"},{"revision":"6fb9c85a6098e8963df6d619becd166f","url":"./categories/test/index.html"},{"revision":"048cd811519d933c0bb7b0ed5d8da81b","url":"./categories/博客搭建/index.html"},{"revision":"c1ddc36fbfb32e9bb07d2a480122df20","url":"./categories/程序/index.html"},{"revision":"a3472c6471c90b0452b6c1a43d00ef47","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"a8acce306d3d400d4f8919caba2fa03e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2d751a06b778c1673d6e61984ff65ce2","url":"./gallery/me.html"},{"revision":"cc5f7121a496c39733f9037beabdac21","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"4dad453534357587c0cbce52c1fecce2","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"c63c7c8e06f6ec9673b8391451665e3c","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"623522d2f086082fcf3e79194fc8e408","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"8a725144b641226dd56ec699b2707ab1","url":"./page/2/index.html"},{"revision":"5e4a1ed29337349e29aab615300e8950","url":"./post/28daef73/index.html"},{"revision":"95cec60eec052343e23cf3de7b65267a","url":"./post/28f332e5/index.html"},{"revision":"5b640e0959e61a0f5bf350f454982013","url":"./post/38f64154/index.html"},{"revision":"e55422cef29ed6e9dcc535039453f7e4","url":"./post/4271b0f6/index.html"},{"revision":"c7544e3355bfefd7417ee8afbaedd26d","url":"./post/8c5e4b35/index.html"},{"revision":"fc93fe92eb76037416ffc3f18dc8e60a","url":"./post/8efd8d8a/index.html"},{"revision":"b6952b67647ba1a5c643cf6d9fdb90f1","url":"./post/b580d7ee/index.html"},{"revision":"d4ed23bad5fd94acfe170ef94198551d","url":"./post/b6596b48/index.html"},{"revision":"630dbbe66231ccf80b01cc0478c6f959","url":"./post/ba71baad/index.html"},{"revision":"b3ac7383d90d224cdccde8f81f18f238","url":"./post/c66d090/index.html"},{"revision":"e398e4b1d5869e0d73f6402ee2fd24c7","url":"./post/c8b7dc96/index.html"},{"revision":"a8c7d509779514c9e05b5b3eaf7fbfb2","url":"./post/dc4c1419/index.html"},{"revision":"7f79b77168c614dbbc4836c2a7148561","url":"./post/de75e3e6/index.html"},{"revision":"d9c4ce8b43d68f7b3fabd14c4cb7a247","url":"./post/f8915431/index.html"},{"revision":"86cbce9fc51e38c7eaa6da1ccd421ae9","url":"./random/index.html"},{"revision":"4507332e6dce6f20c7dad97b35cf6a82","url":"./search.xml"},{"revision":"e3ee46d0644b483dc6b821a266eeff49","url":"./sitemap.xml"},{"revision":"557ad5a1160eb92f838bd0ca0b5eaf1c","url":"./tags/butterfly/index.html"},{"revision":"5eef68d07530ac516c0d498a668d4121","url":"./tags/code/index.html"},{"revision":"566813b5557f8ce4bbf5c7e54e192eb4","url":"./tags/hexo/index.html"},{"revision":"11a4be140e12cbc930cd859d80244d1f","url":"./tags/hexo插件/index.html"},{"revision":"3e18689c8a4165c0bc80e1e44153fce4","url":"./tags/index.html"},{"revision":"ca7539138c88868d141ee385e4900690","url":"./tags/npm/index.html"},{"revision":"edbb85307cc5ca62d49255ea82f2dd14","url":"./tags/zzz/index.html"},{"revision":"12be5cd57e7cc9dd2296c0727d54789d","url":"./tags/博客搭建/index.html"},{"revision":"6f369bf73360179c1ef5aff78245f604","url":"./tags/图床/index.html"}],{
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