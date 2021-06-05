const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e27eb304cb097c127b5f22a0aafd6d52","url":"./404.html"},{"revision":"5d7b6533f9065526118111f399ed0b06","url":"./about/index.html"},{"revision":"24aa3b01a98d88235bac42d9ce7a6ded","url":"./analysis/index.html"},{"revision":"3b156e39e65d5a0d42ada9318e923762","url":"./archives/2021/05/index.html"},{"revision":"40853a22f9c90fdff7032c0758dc35de","url":"./archives/2021/06/index.html"},{"revision":"8e64e5f9cf4c5e06c324448a8506b51f","url":"./archives/2021/06/page/2/index.html"},{"revision":"31c5200aa8e4fa18fb849a85e952407c","url":"./archives/2021/index.html"},{"revision":"d6b8ddae4a4865046f1b798aa2701979","url":"./archives/2021/page/2/index.html"},{"revision":"c276eeadee24d544c7fb47e58f535f5c","url":"./archives/index.html"},{"revision":"2bb802af5847149696299408e4d43d9a","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"5bc45010f9311487293e10bde03f88e4","url":"./bilibili/index.html"},{"revision":"28fcf00da8a22c377daba5046b8cd853","url":"./categories/index.html"},{"revision":"2dd6cb5487d54a9517aedcbe08149ae7","url":"./categories/test/index.html"},{"revision":"b2e5dd3a9528e38e92b1b057bc71bf84","url":"./categories/博客搭建/index.html"},{"revision":"85927e495692326021caf643fdc78f53","url":"./categories/程序/index.html"},{"revision":"c441a9b6fc1b5f3eee6037213d486029","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3a59b0bd5718d2386fad3fb5e7384bd1","url":"./gallery/网站图片链接.html"},{"revision":"0acae192487ad3c507c010d0b2e3c9a4","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"1d4abe2b25ffcf31a3d7ae43fa48eb91","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"2cfc59a06d3baa2996a93a1aaf063e78","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"12ed2bf93aac69461b7060848a19a16f","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"6e67389cb46acbf41409f594fdf617fc","url":"./page/2/index.html"},{"revision":"30f7d910cb500948251322585c42a782","url":"./post/28daef73/index.html"},{"revision":"3b050a1e48a63b828104f652114f838a","url":"./post/28f332e5/index.html"},{"revision":"8ad7fa9b11a96272dbdd8bb523485ab9","url":"./post/38f64154/index.html"},{"revision":"873cc38eabcdd5fc0e557010ea1db1dc","url":"./post/4271b0f6/index.html"},{"revision":"1fd20dba0167225ef4ddc4ec755d7395","url":"./post/8c5e4b35/index.html"},{"revision":"57d51fdaf1eb5683620ed014ce121616","url":"./post/8efd8d8a/index.html"},{"revision":"d242cf5b664b91f2baca8dbe1cc46ad2","url":"./post/b580d7ee/index.html"},{"revision":"1027378c2f3834d79c260c31325521d7","url":"./post/b6596b48/index.html"},{"revision":"d1727e69a89efbc962617143f128a7e2","url":"./post/ba71baad/index.html"},{"revision":"ef85ac3500a6369f1ccec79b17cfbc71","url":"./post/c66d090/index.html"},{"revision":"f6fcb0233f48e360d04bd4c49e0b6a2a","url":"./post/c8b7dc96/index.html"},{"revision":"5bd0a2a9d44f33da711ef8f11e4f3d01","url":"./post/dc4c1419/index.html"},{"revision":"c12e125d58712455bba82a5d24a3e7f9","url":"./post/de75e3e6/index.html"},{"revision":"95d2764553310467d86933f5fdafe429","url":"./post/f8915431/index.html"},{"revision":"e86ecfd0e131753eebe8691e75511310","url":"./random/index.html"},{"revision":"88ef999a06b6beef3c96e4a4032ecc31","url":"./search.xml"},{"revision":"f67f3cc94d82516bec4811f3d35d586f","url":"./sitemap.xml"},{"revision":"38193da80acf1eece12e74ebe7b376ed","url":"./tags/butterfly/index.html"},{"revision":"4d46126821b4ab42721090c057fa3843","url":"./tags/code/index.html"},{"revision":"c7b93665874394d46d76b6b2e40cdc24","url":"./tags/hexo/index.html"},{"revision":"c1e2b31d6368bdecbe75900f1ee7d9d4","url":"./tags/hexo插件/index.html"},{"revision":"5c6fc1c9b62eacd084ca063ca10936c0","url":"./tags/index.html"},{"revision":"c3872bc0b7aa1c8595f36ae53ac0558c","url":"./tags/npm/index.html"},{"revision":"17d27ef89c27268fb32aba147aebe946","url":"./tags/zzz/index.html"},{"revision":"14928b80aac7a9130747d8b2c7a32908","url":"./tags/博客搭建/index.html"},{"revision":"95f5e4028f70325d4deae1426664a5c9","url":"./tags/图床/index.html"}],{
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