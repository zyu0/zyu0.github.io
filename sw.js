const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"755358830edc6bb7125e01449ae186a1","url":"./404.html"},{"revision":"2b95c4b09baf912a95253c365575dc43","url":"./about/index.html"},{"revision":"658d53e0eeefb78ddf6cb8edd6931709","url":"./analysis/index.html"},{"revision":"615139858ef1a9153791d95bbe5d920a","url":"./archives/2021/05/index.html"},{"revision":"3e5cde61126b965ea5cbf9aba1c4d248","url":"./archives/2021/06/index.html"},{"revision":"b094c12dd421ef11495e3edbf4bce041","url":"./archives/2021/06/page/2/index.html"},{"revision":"5daa87aadc7444c429cbd0aedc40c93e","url":"./archives/2021/07/index.html"},{"revision":"5b1ffd590ec46dcda7ae4348c119c4bd","url":"./archives/2021/index.html"},{"revision":"768849cec67da2eb9545a34316c88d4f","url":"./archives/2021/page/2/index.html"},{"revision":"6161eea7578e5eba9c50d5ebf5bfad08","url":"./archives/index.html"},{"revision":"3b69e73814d1395026a09a31a861dbb6","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"1af4c91cbe2711cd9cd3692fc40bf8e0","url":"./bilibili/index.html"},{"revision":"4e304d20faee75a9c05dcf34ce0f527a","url":"./categories/DCC/index.html"},{"revision":"da0f6262776df23b6e00547aaf2a8b09","url":"./categories/index.html"},{"revision":"bc9925526384729895bd74349d5638d3","url":"./categories/test/index.html"},{"revision":"b905d4bdc9bf548213a98699f27bec22","url":"./categories/博客搭建/index.html"},{"revision":"78fde3b568c386b833bb4af7354e87b2","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"00faf1d147aae230e8f2f937c587d428","url":"./categories/引擎/index.html"},{"revision":"920274bdcddf2a04a56c27366b2abb51","url":"./categories/程序/index.html"},{"revision":"4a7baee66f597a5e74b731cb506aab8d","url":"./categories/程序/python爬虫/index.html"},{"revision":"c7db6720f9da4d4f56e303a924347958","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"a50f27bdda64ebcf66b9daa5339e0e9f","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"7eba3bf8b90aca15c234b552a61ad72d","url":"./gallery/网站图片链接.html"},{"revision":"8d0ee716d6e7efe3c9e8e441e70fe731","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"f14c7f0010f5668f18aa8b9c41174ad4","url":"./img/siteicon/README.html"},{"revision":"f7c0f80f26cd6112e36e57d774e38783","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5ec09bab4c1b468e409dc39aa4afae2e","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"cab1216d47827d7199839b2a5d94fa84","url":"./page/2/index.html"},{"revision":"d52c4607ce44c11cd4b743570c2f7382","url":"./post/28daef73/index.html"},{"revision":"ddda3be9890015c7b51b6e5ab4f73c07","url":"./post/28f332e5/index.html"},{"revision":"b2036ff19e1ce1aa3cd5d9eaacf6aa1d","url":"./post/38f64154/index.html"},{"revision":"c23ff5fa928ebdfa0eee4255fd18d619","url":"./post/4271b0f6/index.html"},{"revision":"23e0812e470210919b83045759edd74d","url":"./post/70e43cff/index.html"},{"revision":"b1921090dc1d5ef37127357d73b79fd0","url":"./post/7a209fd7/index.html"},{"revision":"bb39563f2b4f75e7a396cfd0c2026952","url":"./post/986feafd/index.html"},{"revision":"cf0600d72da7605def49234e68fc2cf1","url":"./post/9987b8b8/index.html"},{"revision":"113fab24fc57bb353651a472199f8111","url":"./post/a43a01f3/index.html"},{"revision":"f7ce1815a52993ad5cdbbe84a1bc68ec","url":"./post/ae6cda05/index.html"},{"revision":"07af73d39c7013b469ce66895a5a263f","url":"./post/af3eed3c/index.html"},{"revision":"ca9a66cb87557d941d99df4328f9b19c","url":"./post/b580d7ee/index.html"},{"revision":"7c900999c0bdef3e084c2a45c55f337b","url":"./post/b6596b48/index.html"},{"revision":"3c55d7c7fa94ddbe363d103286617d4d","url":"./post/b9218251/index.html"},{"revision":"3fd7892e96d18712ea35f59403ad16ea","url":"./post/ba71baad/index.html"},{"revision":"a39413f99cdb21ec6d426e74e0846185","url":"./post/c66d090/index.html"},{"revision":"a477319e6a6f95384bc9a716cea2c5f8","url":"./post/c8b7dc96/index.html"},{"revision":"821ad65e0b0b7b35bc947e197186f4d1","url":"./post/d92ccc1a/index.html"},{"revision":"c2d04569de0ca3b424273de247adcbb9","url":"./post/dc4c1419/index.html"},{"revision":"913951750e12465ad1ca0d79ef6129b5","url":"./post/f782b17c/index.html"},{"revision":"8973e38c405a12e42c3f5a49f28c7f7d","url":"./random/index.html"},{"revision":"e7b08e79486b0104ae9a0a74a51d5a33","url":"./search.xml"},{"revision":"0fb415e85ec10a754cfed02ff2292f5d","url":"./sitemap.xml"},{"revision":"83c9f62ca57ede89969d9b30b6485446","url":"./tags/butterfly/index.html"},{"revision":"4dc4f8a289ddb1eb21aa31fb17ac7e25","url":"./tags/code/index.html"},{"revision":"ef37e4363c804f1d88c481fab0f5ff52","url":"./tags/hexo/index.html"},{"revision":"1dc07173bbf02a9cad7d85cbe772a18c","url":"./tags/hexo插件/index.html"},{"revision":"3e4a2e1d42cb8ec06ec91be6f180e15b","url":"./tags/index.html"},{"revision":"47e70ec803273472bca0c28c63bcf72b","url":"./tags/npm/index.html"},{"revision":"fc3fe17b04cffc2feb31677d90fbc686","url":"./tags/python/index.html"},{"revision":"4cc80acc38c300732b21dd9bbcb4817c","url":"./tags/python爬虫/index.html"},{"revision":"7c7981b65f16427b3d9258d6681498b6","url":"./tags/test/index.html"},{"revision":"e02307d846b67c69d014a7e4f763f2f4","url":"./tags/Web/index.html"},{"revision":"2a093e3f2f91d0e5f7016d16caa0f18f","url":"./tags/博客搭建/index.html"},{"revision":"3b81f7bdf6c5dbd68df6e0b86e972833","url":"./tags/图床/index.html"},{"revision":"e3c756a471a6cac1a538e59f1c4c3eda","url":"./tags/引擎/index.html"}],{
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