const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"645ee3d15d578b9e96fc605e74ce871e","url":"./404.html"},{"revision":"a9f18358a2595f1b62ea732b4eb38697","url":"./about/index.html"},{"revision":"9738b3cf01373025d2f3d59f10b14948","url":"./analysis/index.html"},{"revision":"b68ba1a199780499d7b95ae8fd40fdc3","url":"./archives/2021/05/index.html"},{"revision":"0ddd0b524c0143344a45bd623452c91b","url":"./archives/2021/06/index.html"},{"revision":"0431a4ee4a802c6a4561c1d9991b448b","url":"./archives/2021/06/page/2/index.html"},{"revision":"0b7beab46809bb44051ed65a59f7ad32","url":"./archives/2021/index.html"},{"revision":"6750fae0bbcd0a0d2b23e094b7bb39b7","url":"./archives/2021/page/2/index.html"},{"revision":"8e468bed9bf7445d2fdef4412c2bb0b0","url":"./archives/index.html"},{"revision":"645272a8c75f81b7399e037a39e9c47d","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"f941eb62ff184bc9805d4dc88ecbd2b0","url":"./bilibili/index.html"},{"revision":"35894c43e89d406b3e88b0c2459cc498","url":"./categories/index.html"},{"revision":"df751993fd2ac16113bac5d3f908d3ce","url":"./categories/test/index.html"},{"revision":"0fe6f7c33cdc5de1f23953ded488a940","url":"./categories/博客搭建/index.html"},{"revision":"53daa4adf0443d8b6079067d910da63f","url":"./categories/程序/index.html"},{"revision":"162dc913ff6a09acee1a6f48f1074b6c","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"ecf48259262d4c92519341c286c93fdd","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b71efa3c546c4c0d091ac6e323cf621d","url":"./gallery/me.html"},{"revision":"03a7e0fc0fe27fa6e1609396ccb21448","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"e44f3d9b8a5bde2c8f51d25a672ef7ed","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"38da43844123cbbeb800d233a580f161","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"f0054ba2e48eb9f7dca6c9b807b91830","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"6012d5bfcfeb04dba8b08425ff297974","url":"./page/2/index.html"},{"revision":"bb4433925ab8ad19692640bfb02d6599","url":"./post/28daef73/index.html"},{"revision":"b299721d68cac00edbdf8f80fc9783f2","url":"./post/28f332e5/index.html"},{"revision":"53b933ea3cfaf2c9bc7a04a7de048953","url":"./post/38f64154/index.html"},{"revision":"38385136dc6be2ea9cfe347e24ed777a","url":"./post/4271b0f6/index.html"},{"revision":"f4a767276bb81688f02a0e5e4da97e5c","url":"./post/8c5e4b35/index.html"},{"revision":"5af53fa1e6066b8864ab0d19d21aad02","url":"./post/8efd8d8a/index.html"},{"revision":"2c4f00b17c6aadbb75624b62213309e6","url":"./post/b580d7ee/index.html"},{"revision":"b8846ab334fc22b2961fb84864b1b244","url":"./post/b6596b48/index.html"},{"revision":"ab89497895c3a73d6afa1bc70ea6d1db","url":"./post/ba71baad/index.html"},{"revision":"53fef06581a549ab13e0aa1a52cdc396","url":"./post/c66d090/index.html"},{"revision":"640016e8c6e9bdece17eeb0b935526f8","url":"./post/c8b7dc96/index.html"},{"revision":"b700da504f33b385b981ce3a5e7a4ecd","url":"./post/dc4c1419/index.html"},{"revision":"0b50603dd8a00261c5f01671d3f874fc","url":"./post/de75e3e6/index.html"},{"revision":"d1ea5a9a30dfd46ec4ea736f90252a7a","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"af37a0ff62d6a34c311954298754efc5","url":"./search.xml"},{"revision":"b2ec3e3e615533c7bb3d46d104e921bf","url":"./sitemap.xml"},{"revision":"ede5e713c589a1d60b3df42003c222c7","url":"./tags/butterfly/index.html"},{"revision":"7ee5a0326b641c9826e8b2266d2238a6","url":"./tags/code/index.html"},{"revision":"f2a146b2e70ad6fc75a2bd0d42073cd4","url":"./tags/hexo/index.html"},{"revision":"8976fc1fc2e3076afd58bbeedfd8c397","url":"./tags/hexo插件/index.html"},{"revision":"502a869e54dd6bfadd6730d00bfdebe9","url":"./tags/index.html"},{"revision":"0729937aa21e3b2068bd1ba24cc29b15","url":"./tags/npm/index.html"},{"revision":"c21015a6c53dd58b634db4e79aea0217","url":"./tags/zzz/index.html"},{"revision":"c1a0e7b7d07f651d1382735e77de7180","url":"./tags/博客搭建/index.html"},{"revision":"6cca3f06e2f06497d28d03d4e0dc9040","url":"./tags/图床/index.html"}],{
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