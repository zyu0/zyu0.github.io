const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"dd9aefa2e433d074d69c594774af78b2","url":"./404.html"},{"revision":"a759ef6579cae83b0c389d3d96d8c85a","url":"./about/index.html"},{"revision":"0c411298bc7060a193201d8a7db6bed7","url":"./analysis/index.html"},{"revision":"f08351c87e5566cf02a1921e43272846","url":"./archives/2021/05/index.html"},{"revision":"6ff08d83b96ed961d3759a286a316086","url":"./archives/2021/06/index.html"},{"revision":"1af80cf0c245e8d7d49c7f35234b74fb","url":"./archives/2021/06/page/2/index.html"},{"revision":"b0f3fd00e7046c021f5b0f042da3d82b","url":"./archives/2021/index.html"},{"revision":"7543abffc65ffac1981aac44b217b72b","url":"./archives/2021/page/2/index.html"},{"revision":"b64cc5f234ebce0cc20ffb6c7d81dc28","url":"./archives/index.html"},{"revision":"d416a75face14bbfa0372b9efd014369","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"29c1f2bbf99236a44bba0cb4a8493847","url":"./bilibili/index.html"},{"revision":"f10fdd4a07d3c9019ccb3a403b7986db","url":"./categories/index.html"},{"revision":"ebf196fe44a3adec18f4519c1aee48e9","url":"./categories/test/index.html"},{"revision":"55df9f45c88aeb85307ff5d451a6dab4","url":"./categories/博客搭建/index.html"},{"revision":"0c88dea4eb91b38861161f6eef75e247","url":"./categories/程序/index.html"},{"revision":"8d4d38691a06a5a2be83beb396272a31","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fd67acae8dab49f1aa56de8b3b3c3a04","url":"./gallery/网站图片链接.html"},{"revision":"28b616093e42ea638880c544ecdf5acc","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"6a3022ce575eec703b4348f8766c9a15","url":"./img/siteicon/README.html"},{"revision":"8c8426a170595148fa77daa12ac396ea","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ec5f3c40672dc95cce66c2273c18c612","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"6bac463b6e15c9d57cc82b101fe7079d","url":"./page/2/index.html"},{"revision":"1ecec57ddca882502318ec7250fcdad9","url":"./post/28daef73/index.html"},{"revision":"ce32b1c403427a5604c9d854b75497c5","url":"./post/28f332e5/index.html"},{"revision":"897f0802c6ad74119df902cd5efe0aa4","url":"./post/38f64154/index.html"},{"revision":"442cabffe388f9ec56510d0c6049be0c","url":"./post/4271b0f6/index.html"},{"revision":"b74aab4c4c2790835470a9613a6d8c43","url":"./post/8c5e4b35/index.html"},{"revision":"fba721e47b9ce5fca666666a5d7b0308","url":"./post/8efd8d8a/index.html"},{"revision":"c565cfcea27a9f29f16f2464f34526e1","url":"./post/b580d7ee/index.html"},{"revision":"d90f880c0cdb31e64a18287c55eacfec","url":"./post/b6596b48/index.html"},{"revision":"1f48aa58be1c4677561b7ca4e7a58bbd","url":"./post/ba71baad/index.html"},{"revision":"8c822a57f04e71a16aa1fe6eae15f04e","url":"./post/c66d090/index.html"},{"revision":"a9b69e78ff802d35b8edf5487f597972","url":"./post/c8b7dc96/index.html"},{"revision":"9d0e1dc4caa79226312e7280ae5316c5","url":"./post/dc4c1419/index.html"},{"revision":"715dbaf93c05f56c004360c682bc0042","url":"./post/de75e3e6/index.html"},{"revision":"761735258a6c620c165b65e5dddf8d42","url":"./post/f8915431/index.html"},{"revision":"dde6dd270a4d53d4ad75ea2e43a4452b","url":"./random/index.html"},{"revision":"cfaa538dfed6e39379f621bb9020e3b0","url":"./search.xml"},{"revision":"9f23fc9fb4de22693ba9eacee6bac45b","url":"./sitemap.xml"},{"revision":"72751cac939845b69ad6404eb1527640","url":"./tags/butterfly/index.html"},{"revision":"0b1d71332dd84cfc22ca7e28c4963c89","url":"./tags/code/index.html"},{"revision":"f3694525cad2eff5f3fe0702a7a978dd","url":"./tags/hexo/index.html"},{"revision":"c8bd48c6565863401e512f161440d09e","url":"./tags/hexo插件/index.html"},{"revision":"74bfa3845975a3ce8a7de63d44c4932f","url":"./tags/index.html"},{"revision":"f5b583a102b6c006a3b551f8bc0e704b","url":"./tags/npm/index.html"},{"revision":"09034162c936597936313396185c0762","url":"./tags/zzz/index.html"},{"revision":"0b5187987adb179c8fe9afd2c22617ae","url":"./tags/博客搭建/index.html"},{"revision":"00e807c386665853d55225332f817e42","url":"./tags/图床/index.html"}],{
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