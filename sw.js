const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"853ce994e336e662f638d06eee7755cd","url":"./404.html"},{"revision":"660b12eed7548eb25f1809f042ad60bf","url":"./about/index.html"},{"revision":"a80308bee3f3bcbe60565bcd8138afa7","url":"./analysis/index.html"},{"revision":"da57430bc811c8a442875763ade04ca6","url":"./archives/2021/05/index.html"},{"revision":"d1d24fc4f7985edb4f9569d2a0751d96","url":"./archives/2021/06/index.html"},{"revision":"e1257c1cb8c0dad48b6af2c343b3a8a5","url":"./archives/2021/06/page/2/index.html"},{"revision":"9ba3e1e701d2b8fba9d40f0f753d0da7","url":"./archives/2021/index.html"},{"revision":"3c9940865587ffe4fad6d1a9ce4bd3c6","url":"./archives/2021/page/2/index.html"},{"revision":"aa924c6a23605b4e8716cda6cadf583c","url":"./archives/index.html"},{"revision":"2d9dbedd82a515ee4476506cd56dea65","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"4105ef89c081d4b125cbb90db3e0d428","url":"./bilibili/index.html"},{"revision":"a60e3338e5a8dd8326879ef989a4e475","url":"./categories/index.html"},{"revision":"fb3cdb569297380f6362d08ee869d540","url":"./categories/test/index.html"},{"revision":"cdac658806235112800fc9534a6b4eee","url":"./categories/博客搭建/index.html"},{"revision":"599909f2b5dc74172304dfd2842f3509","url":"./categories/模板/index.html"},{"revision":"1668da388fc77ba9a07e59eb88369fb3","url":"./categories/程序/index.html"},{"revision":"8224fb6ff8505074a7cb62f1b154774c","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d8f74674f20cdf011b4d9865810d4e9f","url":"./gallery/网站图片链接.html"},{"revision":"b449fcfd45f30dde269a93dae2761ea6","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"9ae1e13d47a0aa4f7dbcf265090b6609","url":"./img/siteicon/README.html"},{"revision":"2953ba118f21b32971ca316a45c0f1da","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5b7bdcc1a384d7ff856f613f308624c4","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"7d0f6d43c1cc22cbd4dc5f1d9c9e2c05","url":"./page/2/index.html"},{"revision":"f6af82ab099e4605f0723d5b8fde5130","url":"./post/0/index.html"},{"revision":"efd62313c9344993a2484292766c0e86","url":"./post/28daef73/index.html"},{"revision":"800934264b38467c5b91c5223c0c7d54","url":"./post/28f332e5/index.html"},{"revision":"40b8e8bda2015d2a74d6ff63274e3c35","url":"./post/38f64154/index.html"},{"revision":"e370b62c06707e540087ce61ebce439a","url":"./post/4271b0f6/index.html"},{"revision":"02d21598a71238d0c8b18c4631d369a2","url":"./post/8c5e4b35/index.html"},{"revision":"f131e4506d33d343b166df81d8c9398e","url":"./post/8efd8d8a/index.html"},{"revision":"a6b12eb2ce4c5ea86112a1f9d8d89f8f","url":"./post/b580d7ee/index.html"},{"revision":"f069b0c1f2bfede2048bf94fde0ac5a6","url":"./post/b6596b48/index.html"},{"revision":"0df7aead94223e8e109b3d499a14d35e","url":"./post/ba71baad/index.html"},{"revision":"6d7f3e9398cefcef9819b45063d8598a","url":"./post/c66d090/index.html"},{"revision":"4d36d5e115a6f8628d3bf1355ee5efdc","url":"./post/c8b7dc96/index.html"},{"revision":"c19aea4b971194321ccf31df07458230","url":"./post/dc4c1419/index.html"},{"revision":"0e94072d5889491e1a51de735f56caf2","url":"./post/de75e3e6/index.html"},{"revision":"1482ad2e250b7f1215a03df908d1a55f","url":"./post/f8915431/index.html"},{"revision":"004e2ce11c8a3cf2cbc9a76c71f79c92","url":"./random/index.html"},{"revision":"c4a4b1b29f16b45a3379f35eb482e491","url":"./search.xml"},{"revision":"104a4462bf621de7d63908e30109f611","url":"./sitemap.xml"},{"revision":"17df182404b62c067a1f5f7ec85a2e65","url":"./tags/butterfly/index.html"},{"revision":"5d78af59efc54b367150fd3fb2baeca7","url":"./tags/code/index.html"},{"revision":"8b20501d25034c389db2fa86f46e7ac2","url":"./tags/hexo/index.html"},{"revision":"e0f17ef2004ad91bcbb95e94d3f7f2a7","url":"./tags/hexo插件/index.html"},{"revision":"cee0d23fd55b5ee396c0cf0d08af59eb","url":"./tags/index.html"},{"revision":"e4a19ceb6aa01e51cd75e0a746dc9244","url":"./tags/npm/index.html"},{"revision":"09647ab7df8ed8270f2f682382a83769","url":"./tags/zzz/index.html"},{"revision":"9ee804430f88cf54e0a604f1c19cd502","url":"./tags/博客搭建/index.html"},{"revision":"442164773c5d377f8174f0c81ee1a847","url":"./tags/图床/index.html"}],{
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