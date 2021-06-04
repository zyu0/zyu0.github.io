const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3cfb070ddd1ad71758389095a841263f","url":"./404.html"},{"revision":"d9937d40b76a2083c2877c93cea74db3","url":"./about/index.html"},{"revision":"16ae7876b6f8ba9fbd373b975314328a","url":"./analysis/index.html"},{"revision":"6fcc57697b7759c6ec4829875ec6e439","url":"./archives/2021/05/index.html"},{"revision":"210026d3c800db723e8d3dbca2248bd6","url":"./archives/2021/06/index.html"},{"revision":"7bca3428f75353733353560ddc7b31ba","url":"./archives/2021/06/page/2/index.html"},{"revision":"9656dd87f10a5261b6668e21513ed89e","url":"./archives/2021/index.html"},{"revision":"4a4541068e6d6fcd29782a1f59e651b9","url":"./archives/2021/page/2/index.html"},{"revision":"31b896f0f91764b7e61623655c33c45d","url":"./archives/index.html"},{"revision":"2d4fdad2918a3a5dc6ea404aa06d68c4","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"47c46581981be738466e3b0535cc9c02","url":"./bilibili/index.html"},{"revision":"635c128354d4141ae3e8ad01c728e482","url":"./categories/index.html"},{"revision":"f725dc156fd8ea3d842bcf6696075d86","url":"./categories/test/index.html"},{"revision":"23dfb4a611ecc328dd944e7cebe03108","url":"./categories/博客搭建/index.html"},{"revision":"d077e53ff021de8f9b1ce7ec247592d7","url":"./categories/程序/index.html"},{"revision":"44bc2b0563e3442932faa5089a8d1b16","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"00ed2b503c21bbd9f9273c1ce1b5f3e4","url":"./gallery/me.html"},{"revision":"ce372caffcbd835bd04d436edb9310d4","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"9cefeb0c5b8c193484e107718f60066e","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"77221939345f8102caf82c9ffe1cb651","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"8aaadbf2c49c78d81fb0e1cfc640c935","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"05220e34a64de9aebeacfad6e498def5","url":"./page/2/index.html"},{"revision":"50bbb6b17710809b75ffbf2259be647d","url":"./post/28daef73/index.html"},{"revision":"8f43062039b97829f187cbab52a95307","url":"./post/28f332e5/index.html"},{"revision":"b690bacdb5e445ff58b63456988d265c","url":"./post/38f64154/index.html"},{"revision":"747bb3c374691dfe459884d6f9c82033","url":"./post/4271b0f6/index.html"},{"revision":"cea6fb50e5fd0cf122046e519be7a76d","url":"./post/8c5e4b35/index.html"},{"revision":"4b0616c4684750315d49a779a649775e","url":"./post/8efd8d8a/index.html"},{"revision":"feea4451c98a5eafd9e2cdb5d3a39118","url":"./post/b580d7ee/index.html"},{"revision":"96f5b958edd4bdfe1bf91717902d5ddf","url":"./post/b6596b48/index.html"},{"revision":"8803294a6d3c4f90ab9d465174ae1fd7","url":"./post/ba71baad/index.html"},{"revision":"f6dd4fa4e608cbc279342a7ca54dd77f","url":"./post/c66d090/index.html"},{"revision":"42678e616a65da53eb5a3783909e725b","url":"./post/c8b7dc96/index.html"},{"revision":"9b17c4d2e2c705516ba0ba8a9f4bb50b","url":"./post/dc4c1419/index.html"},{"revision":"35cba974de956a014f9345f679ad7936","url":"./post/de75e3e6/index.html"},{"revision":"9df7229eba2e8ceaa85b056b0f7507f7","url":"./post/f8915431/index.html"},{"revision":"e86ecfd0e131753eebe8691e75511310","url":"./random/index.html"},{"revision":"9f4c5e87f47b56ba422d7e8faa43ef0a","url":"./search.xml"},{"revision":"e9639e51be3a016a0593083c8f9d88a8","url":"./sitemap.xml"},{"revision":"4c574874607998a031c11c5fe86fc2a6","url":"./tags/butterfly/index.html"},{"revision":"c6dbbf3ad847db436b66caa3e8fc891c","url":"./tags/code/index.html"},{"revision":"75363f0e30a500dffb3078e5477c0de6","url":"./tags/hexo/index.html"},{"revision":"a8fbb84b657e00712867446646f4b085","url":"./tags/hexo插件/index.html"},{"revision":"f2823c25540609c3f421cfb668404b66","url":"./tags/index.html"},{"revision":"8c077e6676aeca6a7e2978c7fe5e9b83","url":"./tags/npm/index.html"},{"revision":"caad6bcec374b0cec9536c0ea7d35127","url":"./tags/zzz/index.html"},{"revision":"d932e30f277596f3308e3093b0423893","url":"./tags/博客搭建/index.html"},{"revision":"d0aa81d904253a7fb8430271ee0709ed","url":"./tags/图床/index.html"},{"revision":"5cb3e91269eef133b6502864e66659b0","url":"./追番/index.html"}],{
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