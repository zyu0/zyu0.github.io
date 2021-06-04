const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"738f0cb37a934eb54ea5c0eebb04219b","url":"./404.html"},{"revision":"566b6028df834f5c833ff8f18beddbb1","url":"./about/index.html"},{"revision":"a847f129d66c3ef82f964e34314cb1fe","url":"./analysis/index.html"},{"revision":"009b5dbfbefb73b8cbe8658d37f4de61","url":"./archives/2021/05/index.html"},{"revision":"f433d31dd5c26777c79b4f43e8cb2500","url":"./archives/2021/06/index.html"},{"revision":"1b9f378330cdf8c0329fba94420276fd","url":"./archives/2021/06/page/2/index.html"},{"revision":"f262e2ba9a75986d334b278f2ef577da","url":"./archives/2021/index.html"},{"revision":"f22fe97bd5f55ccebb436262806cb2d0","url":"./archives/2021/page/2/index.html"},{"revision":"518964f141a0ae2b2bc22d6d0a7f9a69","url":"./archives/index.html"},{"revision":"760dd5639b332b817a0580d759e63991","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"07f017112a3d07f62f95c8488b157e73","url":"./bilibili/index.html"},{"revision":"24db8022667de39ba96c791299e2bf08","url":"./categories/index.html"},{"revision":"5c892d6bf8f1549d90447c0d42765c5a","url":"./categories/test/index.html"},{"revision":"5c3a7bc16a9b140655ba3a2578cf1ce8","url":"./categories/博客搭建/index.html"},{"revision":"ab36d07742e6954248082390a879c2f1","url":"./categories/程序/index.html"},{"revision":"7c22cab981f082088e3863f6ad2a45ff","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"0a475a3213959867eac2c6002cd2354d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a787ecee08fca44b59d488589999dec5","url":"./gallery/me.html"},{"revision":"bde8c48a8aeed56a01079dbb8f9d5bf7","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"41f8c10b411571908599c4532629c2ec","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"64608f9d9dceee28c36bd22f9334f7e0","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"44b57497a187ac9595a1569251f7a851","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"aec5916f1e2d103b2556887e15731dfa","url":"./page/2/index.html"},{"revision":"72c44bf0fa3a334dc120a6d15375a3a6","url":"./post/28daef73/index.html"},{"revision":"7019e841049914288a134c51de9283f3","url":"./post/28f332e5/index.html"},{"revision":"741fa1770e7831399948a1a94824be09","url":"./post/38f64154/index.html"},{"revision":"a727bb4af1b1191e6b50be79e73a48d8","url":"./post/4271b0f6/index.html"},{"revision":"3e5c824de3b5b83e41cb11924c667ab4","url":"./post/8c5e4b35/index.html"},{"revision":"654ca2e1024c8725eb9b3f78ebe99101","url":"./post/8efd8d8a/index.html"},{"revision":"659bf065529e35d15e540c92a715f952","url":"./post/b580d7ee/index.html"},{"revision":"bee656953afe24e99e23b77a8bb07f56","url":"./post/b6596b48/index.html"},{"revision":"bc2aad1508b5ec3d6e194f544c33a103","url":"./post/ba71baad/index.html"},{"revision":"1d40bd4f4961c5b3d709d76be193fa8c","url":"./post/c66d090/index.html"},{"revision":"62ef712a417e6fb3a40b983c9ee5a8f3","url":"./post/c8b7dc96/index.html"},{"revision":"529d6bd0f8c1ba5c2cbaac6c2c20b0d4","url":"./post/dc4c1419/index.html"},{"revision":"1d8af63446a312440d77c042f2c47df3","url":"./post/de75e3e6/index.html"},{"revision":"bdcc5cecc19d3e18b311c2e06b1a43c7","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"4f1b9d6915e600891927f6a75f6e876a","url":"./search.xml"},{"revision":"b2ec3e3e615533c7bb3d46d104e921bf","url":"./sitemap.xml"},{"revision":"374bea67d46f3df5fee2e7459ed70d5e","url":"./tags/butterfly/index.html"},{"revision":"c53e45d6fbfbdbd9c7bf3946530a0597","url":"./tags/code/index.html"},{"revision":"79b80e1e87d268e292eedf32a1da512f","url":"./tags/hexo/index.html"},{"revision":"a661ff9217d259668109230c0de2a02c","url":"./tags/hexo插件/index.html"},{"revision":"f3432f809d4fceb4ea07148227631cc8","url":"./tags/index.html"},{"revision":"c077ff8666f104f692cdac82d81c0cb7","url":"./tags/npm/index.html"},{"revision":"de7db7db780a6398f2924b5e5b2f2d87","url":"./tags/zzz/index.html"},{"revision":"2e2e3aa31076c734646cde383263eca3","url":"./tags/博客搭建/index.html"},{"revision":"14884b2ca0ef0768cd4a9aae5b4a8f2d","url":"./tags/图床/index.html"}],{
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