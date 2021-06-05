const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b7082e8543a8b0d0d609c4fffad89378","url":"./404.html"},{"revision":"1397343bb5dbaeb1e66c3557fb74b003","url":"./about/index.html"},{"revision":"5480c7511dbffe6b908b4e3c6b55496a","url":"./analysis/index.html"},{"revision":"d8dad94eacfe5e60d04c4da17269c4d7","url":"./archives/2021/05/index.html"},{"revision":"56d673058dbad9b60e741a0775cc0320","url":"./archives/2021/06/index.html"},{"revision":"aba05efca89daee2757f5b7430ea4fe8","url":"./archives/2021/06/page/2/index.html"},{"revision":"88901bd6bb044f4f2a1c1c1571577277","url":"./archives/2021/index.html"},{"revision":"991a0d267145f1dccbc9de2ae1325b95","url":"./archives/2021/page/2/index.html"},{"revision":"6ef32e7c65356dcdb3a564d23e5eb03b","url":"./archives/index.html"},{"revision":"67852824165adf9c9a1edcf55730ca36","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"7e241a88bfed60e7059185f037c13c0d","url":"./bilibili/index.html"},{"revision":"b46463a5d978c37f419ac2297a756426","url":"./categories/index.html"},{"revision":"0f898da3a0764234a1cc5e6123423366","url":"./categories/test/index.html"},{"revision":"c42588cbb9b45c100afb0433d61a0e14","url":"./categories/博客搭建/index.html"},{"revision":"8f3e8e32609b9b55f70ea2ab2ed6b495","url":"./categories/程序/index.html"},{"revision":"47e1a84708dc5c7e96a4a2d956dbae82","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1e9b3cfea47579265e04620017550713","url":"./gallery/网站图片链接.html"},{"revision":"fd5ac0eab2518c831460f38b368a4368","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"53c044ad41aea9cbfc55b857473218a1","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"e734bdb3457c60d2474e2c837ead5c35","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"8657ff83c2c84610f8d147e74850515c","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"c3e59f9a5f700c846b8bfd58a2a759ab","url":"./page/2/index.html"},{"revision":"aff6df7a5b5cee312bc45fcfcbb90018","url":"./post/28daef73/index.html"},{"revision":"0a137fdd950caf51e139332a863a7baf","url":"./post/28f332e5/index.html"},{"revision":"fb8fdac50bc635072146a35df393f987","url":"./post/38f64154/index.html"},{"revision":"c370a435a871e157d9cd24626b635ee0","url":"./post/4271b0f6/index.html"},{"revision":"16f436a183c378acc1e08f56900387e2","url":"./post/8c5e4b35/index.html"},{"revision":"ed37995bbefb39a9dae67cfc5b7c3a4a","url":"./post/8efd8d8a/index.html"},{"revision":"f251b75cc817e78db74db30d0d3341e0","url":"./post/b580d7ee/index.html"},{"revision":"001dd118476d61d9bafe34842876dd0f","url":"./post/b6596b48/index.html"},{"revision":"236a17694f99ec03a9b6e7407b7a2d61","url":"./post/ba71baad/index.html"},{"revision":"d0e6370ae5b9bc7c61e66b7076fc5487","url":"./post/c66d090/index.html"},{"revision":"a9080798f494c358fe5fdab6c4996fe3","url":"./post/c8b7dc96/index.html"},{"revision":"7ebb9bcd8efad6da09202fd0d3caddbe","url":"./post/dc4c1419/index.html"},{"revision":"6b7a330171f92dd73778f9e381175766","url":"./post/de75e3e6/index.html"},{"revision":"a84c1bfbd6c597ed9ee30393719949d0","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"46a0e5198aabd688b34f42caf06f2bad","url":"./search.xml"},{"revision":"d5ca971161883ba219e5ba230cbbcb7f","url":"./sitemap.xml"},{"revision":"6a0d6da192592a674270bee8c37af940","url":"./tags/butterfly/index.html"},{"revision":"784a0076260aa0674231e6327713638c","url":"./tags/code/index.html"},{"revision":"079741e222202e57ea7e92e530aeaafe","url":"./tags/hexo/index.html"},{"revision":"63afc6e0d726384a7b0fc5f9296a0f5e","url":"./tags/hexo插件/index.html"},{"revision":"3f77db5ae94d4a09fbb5947a8fc6ad98","url":"./tags/index.html"},{"revision":"354611f5f7d0ddf3327e3890867cd629","url":"./tags/npm/index.html"},{"revision":"75a5cc3c41cdeada9a1fd1ac18c6fcf4","url":"./tags/zzz/index.html"},{"revision":"942377dc1d33c9f79868d6566ebe1a1c","url":"./tags/博客搭建/index.html"},{"revision":"5967d0814f14f1925a4ca3c947ec00b8","url":"./tags/图床/index.html"}],{
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