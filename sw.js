const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"51033b877eb0fa05640c123426ee6155","url":"./404.html"},{"revision":"ee294d48256656dfa9e46c38b814e397","url":"./about/index.html"},{"revision":"f1f737bce4055d2b7e541ad86b41507c","url":"./archives/2021/05/index.html"},{"revision":"019d755e7607d9ba6ac73157a0f48d8e","url":"./archives/2021/06/index.html"},{"revision":"9ea1b5a15623f5d325f308bd31c8137e","url":"./archives/2021/index.html"},{"revision":"ae6934717798f969b8090d0bae187787","url":"./archives/2021/page/2/index.html"},{"revision":"ffe6a37c82488b69ddcd7f6c367c31d6","url":"./archives/index.html"},{"revision":"35bb080af062ea285f04c754415d8494","url":"./archives/page/2/index.html"},{"revision":"d457fa8862f42a9dc57f4ded01c4d38d","url":"./categories/code/index.html"},{"revision":"e2212d642f9ff318c5b3d33ddae4d338","url":"./categories/index.html"},{"revision":"654659c96e50f332efdd4fb35f89e003","url":"./categories/test/index.html"},{"revision":"d0ba6ba5d8b5cde65bf76fd1e674c0af","url":"./categories/test/空页面/index.html"},{"revision":"4fca3381bbd04dfc3fc46650361a8b6c","url":"./categories/博客搭建/index.html"},{"revision":"4b0653abc6bbb1f33fe6a12b3ef782df","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"34997cd5f462c95fd9c392e03a5a1f94","url":"./gallery/me.html"},{"revision":"50177109f0b4428a51ab2819a79d9e6f","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"49fe74ccb32e5fc302e18d79b07158bc","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"324e1a1d8b6f6d82373861baabc176a4","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"4ad699994366ef1f7e5cb305b89b0825","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"1c22bf26cc21b6a916866f58368fd261","url":"./page/2/index.html"},{"revision":"c0598eea96a180bdc67a11f67e4c6209","url":"./post/28daef73/index.html"},{"revision":"c1ece814ffdae2a8c75f976bd21267c3","url":"./post/28f332e5/index.html"},{"revision":"32536e4c36d2f9e251372645970be279","url":"./post/38f64154/index.html"},{"revision":"7c7c270c70098934c41c52766e8e596c","url":"./post/50a2b841/index.html"},{"revision":"63ad6519fa572d2225c69c44912b4357","url":"./post/8c5e4b35/index.html"},{"revision":"0f9689b3fff42f23e307f89603daf942","url":"./post/8efd8d8a/index.html"},{"revision":"a65e83a4694fdff6acf9a5cd6a1a817a","url":"./post/b6596b48/index.html"},{"revision":"e88e5eadebcce5555fe81a026587a869","url":"./post/c8b7dc96/index.html"},{"revision":"d1a4068c7e4c137e3fc8124ece9e64b2","url":"./post/d87f7e0c/index.html"},{"revision":"eb7eb39e5222d980b45f5949f98d0d5f","url":"./post/dc4c1419/index.html"},{"revision":"22a9660eb1a5df8c4414874fdf3265ec","url":"./post/de75e3e6/index.html"},{"revision":"d0e1b34d70f088975ff587a1cfaae840","url":"./post/f8915431/index.html"},{"revision":"cc186ad199449d79d4f7df9c0be72d35","url":"./search.xml"},{"revision":"1c28a5147ba89b636aa4dac92adee4bb","url":"./sitemap.xml"},{"revision":"06f533a1086f8ee8932d1718158e3929","url":"./tags/butterfly/index.html"},{"revision":"a9e75a9c943ccc94bbd7aedbe42daa71","url":"./tags/code/index.html"},{"revision":"ce3a10f712f28e66d0a86af6c0023dfa","url":"./tags/hexo/index.html"},{"revision":"1083c9e57aa0a799cd65928167f9bcc8","url":"./tags/hexo插件/index.html"},{"revision":"bcff0157633d8ba774c42eaaaa33736e","url":"./tags/index.html"},{"revision":"7cea3d1da7430dbd01ae0d7e376d088e","url":"./tags/npm/index.html"},{"revision":"a6cba78f040d32f115c5f2810ba5715d","url":"./tags/zzz/index.html"},{"revision":"c0ad7f74cefecbb6f89253ff392830db","url":"./tags/博客搭建/index.html"},{"revision":"dd95afaa2a62f2c43a97298f10fe9e2c","url":"./tags/图床/index.html"}],{
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