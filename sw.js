const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1cde7243d99058139767103a34502f41","url":"./404.html"},{"revision":"75dadaa4022ffa389857bb4887bffbbf","url":"./about/index.html"},{"revision":"0784039ceec5552c580b19d6be362b40","url":"./archives/2021/05/index.html"},{"revision":"4521e5cecf08f06b226365d7c3c8ae37","url":"./archives/2021/06/index.html"},{"revision":"796ce24f7aefb8d9c26b9273f1e0109b","url":"./archives/2021/06/page/2/index.html"},{"revision":"ee3c504397773fca7976458fbe9b006c","url":"./archives/2021/index.html"},{"revision":"51e4bc4e51c9f275cc27abf3f9d1e986","url":"./archives/2021/page/2/index.html"},{"revision":"af817558b13fb67cd3b54a94f1472101","url":"./archives/index.html"},{"revision":"9ce8c9b1b4140d27ea8063a4f7f571b4","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"8ec01dbef63ed6afea591acf1a9e4360","url":"./categories/index.html"},{"revision":"762cf16806001b2220cf715f17277b5b","url":"./categories/test/index.html"},{"revision":"7e2d327f5d53b8d76811eaf78d8d36b9","url":"./categories/博客搭建/index.html"},{"revision":"799c0c55d1162b5cad93f8d6f7e18d5e","url":"./categories/模板/index.html"},{"revision":"d2fb46a714a6809e895c080f334f0340","url":"./categories/程序/index.html"},{"revision":"44bc2b0563e3442932faa5089a8d1b16","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b1e2531b391d8e33c70c7a068feb4e10","url":"./gallery/me.html"},{"revision":"0418ceba009f9ea68d4a8dc0d19c33c4","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"0c37495d9856cf1d34c24cd851d290fb","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"d3b681a72fd8669cf1cfa4ace72d9035","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5e8498ef0b4cb58bef43e959b258204a","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"fae77b3951bdfb97b1801ac3310d1463","url":"./page/2/index.html"},{"revision":"99db8d8d9ff98dea68128b5d6c909e74","url":"./post/0/index.html"},{"revision":"9bc2d8084eb19f34c02474327b48c1cc","url":"./post/28daef73/index.html"},{"revision":"034b6a981be171f0182f940c713633a0","url":"./post/28f332e5/index.html"},{"revision":"92b8c9093625287f5185d69beae1b750","url":"./post/38f64154/index.html"},{"revision":"f9354ea894810203878de4d99067c534","url":"./post/4271b0f6/index.html"},{"revision":"1dd84ad99abf5e5e10b6b39789edb371","url":"./post/8c5e4b35/index.html"},{"revision":"890274223d5c28b023b9247c0e089b1a","url":"./post/8efd8d8a/index.html"},{"revision":"14d3a6f6a9a95a26d61ba702416e7d0a","url":"./post/b580d7ee/index.html"},{"revision":"93fc55cda2f81b7ce35a531cd6f4a32e","url":"./post/b6596b48/index.html"},{"revision":"37a1e8d9b9c811b4db18e61c925390c8","url":"./post/ba71baad/index.html"},{"revision":"907d3096fc5e18ab5327c87328260abb","url":"./post/c8b7dc96/index.html"},{"revision":"49668411e176f3b43c2685a1924e982e","url":"./post/dc4c1419/index.html"},{"revision":"e6ecd083c0160925a70629ee3d61541a","url":"./post/de75e3e6/index.html"},{"revision":"7e50852a922856613468914ee5f558af","url":"./post/f8915431/index.html"},{"revision":"d93c8829f59f583daa7a22d221e085a1","url":"./random/index.html"},{"revision":"9ba1c1a4d76fd5b03217a23d25ad2dcc","url":"./search.xml"},{"revision":"9802defaf9f67872e8eea3fb8a6922f8","url":"./sitemap.xml"},{"revision":"cbca284c99ef8002c59f43bdb53959e3","url":"./tags/butterfly/index.html"},{"revision":"758e68d69463595db12af1d591fc6122","url":"./tags/code/index.html"},{"revision":"2d666643b5890d6e8f4d2542f4349d4c","url":"./tags/hexo/index.html"},{"revision":"462ca04af080b98ec728b94428a17f58","url":"./tags/hexo插件/index.html"},{"revision":"caa7a6cb11646b88f4ec47c1c288137a","url":"./tags/index.html"},{"revision":"ef29cdd347c282b920c397015ecb4acf","url":"./tags/npm/index.html"},{"revision":"0f4adfb2e8c4e78c62714e1744679173","url":"./tags/zzz/index.html"},{"revision":"9210ec04134b3383e32ffb326dff62bb","url":"./tags/博客搭建/index.html"},{"revision":"7b623ca18c3f7156bacbb7bd469eb5b7","url":"./tags/图床/index.html"},{"revision":"cc6510495fd75c79e0169c5151db9686","url":"./文章统计/index.html"},{"revision":"9abf7499a1063bf78af8cafb50c6bf2f","url":"./追番/index.html"}],{
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