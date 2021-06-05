const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"cb5bb82f5fd8eef031b6d8c81469384a","url":"./404.html"},{"revision":"aa581fe645fbe2bc5199e367518f30a9","url":"./about/index.html"},{"revision":"0981f03ff0bf81dcc17e560e9bb95466","url":"./analysis/index.html"},{"revision":"76083da851bdb3bcbbe2f178637e9511","url":"./archives/2021/05/index.html"},{"revision":"a5e23f485599356356c5070e5a9d89c2","url":"./archives/2021/06/index.html"},{"revision":"94a8289970daa720416beb25502bdc66","url":"./archives/2021/06/page/2/index.html"},{"revision":"3e24030af12617168b5c9c795d4621f8","url":"./archives/2021/index.html"},{"revision":"2821c32eeabff61ea90811e36d2c0272","url":"./archives/2021/page/2/index.html"},{"revision":"845de69cc31028d34c81927e4a40115e","url":"./archives/index.html"},{"revision":"9ee1298f755e41b126eda4fd2d4a5d4f","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"dfc9b532a41b1fa4b28c4072d0c332bf","url":"./bilibili/index.html"},{"revision":"d1ca5d91f052f4fd64794878cc84067d","url":"./categories/index.html"},{"revision":"16ec6e55a560027cb9fb2932876a5787","url":"./categories/test/index.html"},{"revision":"99c4e60451e557f8033a15fa1234dc5c","url":"./categories/博客搭建/index.html"},{"revision":"39872f4088f420603eb7852c8af926f7","url":"./categories/程序/index.html"},{"revision":"4d33e29a86a0021a98c112a429410d26","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9aa50b7d2871643b6d9685df626038e7","url":"./gallery/网站图片链接.html"},{"revision":"31fe344ec43018e795c98ce35fef0e17","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"101a5312abcdbcb3e7213cf0b6273ecf","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"c03c20671bdf9c2bfaf30fdac6f37d86","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ce7e1287b97fece274b1b7708b84d4bd","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"ddffa1977c2be3cc5c4eb1942fa6a2c3","url":"./page/2/index.html"},{"revision":"5dae9c3e3b3ec930d539c0c173bcbedf","url":"./post/28daef73/index.html"},{"revision":"5b188d6ad2c1229096e24657a53e7775","url":"./post/28f332e5/index.html"},{"revision":"604629b7439a8a15d25b402668d19f0a","url":"./post/38f64154/index.html"},{"revision":"356eeee0b370296335625a2366f4a92a","url":"./post/4271b0f6/index.html"},{"revision":"e8874f55879f09ee4ba086d02b7fcdb1","url":"./post/8c5e4b35/index.html"},{"revision":"44905c36505c57e8a3dea80ffc0f197a","url":"./post/8efd8d8a/index.html"},{"revision":"a4ddd3de9d8050b5d3c3a7faea3ff344","url":"./post/b580d7ee/index.html"},{"revision":"56ddcda1c2832be21d5cc111a8db558b","url":"./post/b6596b48/index.html"},{"revision":"4ae2ad7efa8de332863b38f55d8c443b","url":"./post/ba71baad/index.html"},{"revision":"9042a626d9cf844f79da4fef2f30e13b","url":"./post/c66d090/index.html"},{"revision":"4eba71ac845830d56911287cffd5f423","url":"./post/c8b7dc96/index.html"},{"revision":"bb86d271b8acd194806b67a8080649f7","url":"./post/dc4c1419/index.html"},{"revision":"036567f56a1056c415860247b8aa9e35","url":"./post/de75e3e6/index.html"},{"revision":"19e7c59838915664c82ae6e95192aff3","url":"./post/f8915431/index.html"},{"revision":"e86ecfd0e131753eebe8691e75511310","url":"./random/index.html"},{"revision":"00dfc34f4f49c31d74b67bd28cdbf048","url":"./search.xml"},{"revision":"f67f3cc94d82516bec4811f3d35d586f","url":"./sitemap.xml"},{"revision":"381cec8a7589a368781d7fa53a8cd0a6","url":"./tags/butterfly/index.html"},{"revision":"c4754ac5a2c6fc23418d57158e2e24d5","url":"./tags/code/index.html"},{"revision":"18866986e78d341ce4a7434e309dc20f","url":"./tags/hexo/index.html"},{"revision":"08de54d2831b28ada5f76480009b637d","url":"./tags/hexo插件/index.html"},{"revision":"333d99d49b27bbb659242267ceae1b35","url":"./tags/index.html"},{"revision":"e5505077b7f23688904a6abae7d8e2d3","url":"./tags/npm/index.html"},{"revision":"04a44c3aca0453c9b05b5af0f1b3c3de","url":"./tags/zzz/index.html"},{"revision":"b6a6453db42f2996c4c3871ff5981ed2","url":"./tags/博客搭建/index.html"},{"revision":"5443f710b07c4c37cecb3979cf35808c","url":"./tags/图床/index.html"}],{
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