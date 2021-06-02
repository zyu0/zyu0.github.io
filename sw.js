const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"63387152a7d2243742c714fda2812429","url":"./404.html"},{"revision":"35db5122b7d4a194524cd45fa17a2267","url":"./about/index.html"},{"revision":"4586d4976a929bd6727ab2245d826853","url":"./archives/2021/05/index.html"},{"revision":"74a7b54115b32b7bb73927c61f402f31","url":"./archives/2021/06/index.html"},{"revision":"3bbd966d8e227cf27052515e85ccce16","url":"./archives/2021/index.html"},{"revision":"31aeba66e5ff144b48337f67fe2823a7","url":"./archives/2021/page/2/index.html"},{"revision":"d189f624a60f07b6ccb9cb4eb45b537d","url":"./archives/index.html"},{"revision":"ec57c38fc31478bfb23a6b0885bd2f33","url":"./archives/page/2/index.html"},{"revision":"37a5855e38cca5a4613fd7b4bd684c13","url":"./categories/code/index.html"},{"revision":"6cb4876b15d7be6f23045240c1986d7a","url":"./categories/index.html"},{"revision":"a2c36568374391ecd03b2b5f513d7f09","url":"./categories/test/index.html"},{"revision":"e61824b30a2307b7bf79fd2816a445ef","url":"./categories/test/空页面/index.html"},{"revision":"52917cd5527cfc3561450aa9a7d39cac","url":"./categories/博客搭建/index.html"},{"revision":"4b0653abc6bbb1f33fe6a12b3ef782df","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8bb6fb7247d62dc0726f26948a1471d3","url":"./gallery/me.html"},{"revision":"bd9e4986e7eaf2f4bac83383eb2ff5ea","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"1e21ba40f64ff4c11212f25d08f3707f","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"90a8d4233ff4962856a42e6e24b6338d","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"c38307ef00224df301b4f19749a50a54","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"deae4286233a98afe2c6f20e04162069","url":"./page/2/index.html"},{"revision":"1cc40caedec56a7c4c314d0d6b42e55a","url":"./post/28daef73/index.html"},{"revision":"86bbfec3402770865a47535e7c8bc268","url":"./post/28f332e5/index.html"},{"revision":"3c7e0fe3a619cbbca20e62cbc9d67bfc","url":"./post/38f64154/index.html"},{"revision":"185164ecbd5a2b2199dad76e10e917ff","url":"./post/8c5e4b35/index.html"},{"revision":"4110cae3e53bd09de1e0e2d244b030b0","url":"./post/8efd8d8a/index.html"},{"revision":"88537f3ebbe024802b4429b9dcf015e1","url":"./post/b6596b48/index.html"},{"revision":"671159cd1a8198e0d4aed282d120844c","url":"./post/c8b7dc96/index.html"},{"revision":"785c269f6231fe40ebb80c945936d7d8","url":"./post/d87f7e0c/index.html"},{"revision":"2f411a3320aa26841b685ba4e17f96fe","url":"./post/dc4c1419/index.html"},{"revision":"78266a6531e5c7a1274cbf37f550f19e","url":"./post/de75e3e6/index.html"},{"revision":"66028585fc6cd235c1f5416eef7cc4d3","url":"./post/f8915431/index.html"},{"revision":"d54b8fabd17a7d2cb6c5f9e90b61b25f","url":"./search.xml"},{"revision":"46ee9756f47e8bfba371cab3789652e3","url":"./sitemap.xml"},{"revision":"93d5eec451e391b4ecae585b1357f3ac","url":"./tags/butterfly/index.html"},{"revision":"c2520e28729e8c0bd49cb43a632a95b8","url":"./tags/code/index.html"},{"revision":"1bda8a6a0d83ae74f43fdd6a7d2ceb40","url":"./tags/hexo/index.html"},{"revision":"d2836de8548e7d2e637d0a18fbccd8a4","url":"./tags/hexo插件/index.html"},{"revision":"be277fee1cd0093a67e681fd947aaf29","url":"./tags/index.html"},{"revision":"68878ceb9453beb6ddce5b52877b5bb9","url":"./tags/npm/index.html"},{"revision":"0586c0f2a1f7f0513ed8e1b2962262f9","url":"./tags/zzz/index.html"},{"revision":"a7057802d4f6db5a9f74624f02aeb764","url":"./tags/博客搭建/index.html"},{"revision":"b9c807da5b5627fd4645ac95dadd0297","url":"./tags/图床/index.html"}],{
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