const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"cd72eaacf1e434098233d24d29c3aa85","url":"./404.html"},{"revision":"0a49ed655df9b02788717b43c0f11a3e","url":"./about/index.html"},{"revision":"46aba6efdcd8c59fd1814bf6881564b9","url":"./analysis/index.html"},{"revision":"efe7466b8db54a4245a2a745033620a2","url":"./archives/2021/05/index.html"},{"revision":"892e78d0d5528693ef197c6ae5009d33","url":"./archives/2021/06/index.html"},{"revision":"222c07b784968e84f1fc86c844b93dba","url":"./archives/2021/06/page/2/index.html"},{"revision":"e0399569df9338a21d0539780125be40","url":"./archives/2021/index.html"},{"revision":"c21e626057ca631589ea2071f5ea640d","url":"./archives/2021/page/2/index.html"},{"revision":"4b50885080d94f0c20cbbadde83de1ba","url":"./archives/index.html"},{"revision":"b88b218782cfa44dc99c1e5a06714aa9","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"959268554f9a6c693d228ccbea22ed84","url":"./bilibili/index.html"},{"revision":"de5ac46e089541e12402056b679392c2","url":"./categories/index.html"},{"revision":"3be764da8b15db2d75405f684c803686","url":"./categories/test/index.html"},{"revision":"06c5224de2620278b85bdcd33813201c","url":"./categories/博客搭建/index.html"},{"revision":"6d7d23aef6306c24922fe04302afd45c","url":"./categories/程序/index.html"},{"revision":"84804152007c8dcc2136a728815c72fa","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"0a475a3213959867eac2c6002cd2354d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9a902a2b7ea3bd1321b765223e0fdbdb","url":"./gallery/me.html"},{"revision":"a8ee09591581c6471c9fd4e78433867c","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"032b63e10467c786ec6ccd4c5906ee58","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"3d37691c68b4863c44034496554c0437","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"8a570f246b63882189b6a5123f623572","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"4eefefadf5748ba81744b8b122c6519e","url":"./page/2/index.html"},{"revision":"1bdc9e304904f3297097e82d31768ede","url":"./post/28daef73/index.html"},{"revision":"7561d3e982a32952032dbe059c00ba22","url":"./post/28f332e5/index.html"},{"revision":"eef2277cd2c858c346cf934deaa3a9a8","url":"./post/38f64154/index.html"},{"revision":"dff6430f33385050dd0324aa84ad88b3","url":"./post/4271b0f6/index.html"},{"revision":"08cfb7b4f3f8e34232e07e14f50f3e6c","url":"./post/8c5e4b35/index.html"},{"revision":"d237a574674ffac9231a651e12466fd5","url":"./post/8efd8d8a/index.html"},{"revision":"ac56151e529d03fc9344f954e57b0154","url":"./post/b580d7ee/index.html"},{"revision":"5197738cbf54aee2d62f51feb116e2a6","url":"./post/b6596b48/index.html"},{"revision":"7228a7acef5fa9b0c1a529792243713f","url":"./post/ba71baad/index.html"},{"revision":"b0fbcd21e0b5df4ed461b1ce1c25d5db","url":"./post/c66d090/index.html"},{"revision":"d3d9fc98fe72dd0e42fa792adb3fb512","url":"./post/c8b7dc96/index.html"},{"revision":"7a0b1ddb4da237fa8e08ddc0497eb4f8","url":"./post/dc4c1419/index.html"},{"revision":"90193329f7a24bf83f25920addf2440e","url":"./post/de75e3e6/index.html"},{"revision":"d777b925a6d880e03ab05bea1d5cc6d1","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"4f1b9d6915e600891927f6a75f6e876a","url":"./search.xml"},{"revision":"b2ec3e3e615533c7bb3d46d104e921bf","url":"./sitemap.xml"},{"revision":"facee7e6f1c2f561290a3bb605fe6878","url":"./tags/butterfly/index.html"},{"revision":"1c15ee043e09b3465e38a5c32de62005","url":"./tags/code/index.html"},{"revision":"7f0ef20eaab5d2287601c25010b20251","url":"./tags/hexo/index.html"},{"revision":"c986345f22c679161346adea3b6b41b5","url":"./tags/hexo插件/index.html"},{"revision":"c3714627e55a1d671723ffce2e887822","url":"./tags/index.html"},{"revision":"9b9d0f00e6dccdd2d686f56dcf27a51e","url":"./tags/npm/index.html"},{"revision":"14bd2840d1e2241c802a0a1396fe1f61","url":"./tags/zzz/index.html"},{"revision":"162038f1288414b41c47497d468dfc4f","url":"./tags/博客搭建/index.html"},{"revision":"feefe4fb301aba1d72c84ffaaeee2c34","url":"./tags/图床/index.html"}],{
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