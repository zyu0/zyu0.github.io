const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"558b420938c7c8c2cb64446cc755aa6e","url":"./404.html"},{"revision":"805b7b8971b3d809f31b67c7ef4706a0","url":"./about/index.html"},{"revision":"9fd2b7052235c64f594e73824e590475","url":"./analysis/index.html"},{"revision":"ddea0ca8d8e5698c63d69653634d6595","url":"./archives/2021/05/index.html"},{"revision":"7f7a8a3a38de9f5acf9d0c5160828f33","url":"./archives/2021/06/index.html"},{"revision":"28f9f32917b0704d6a9b8df6596f9bbd","url":"./archives/2021/06/page/2/index.html"},{"revision":"8ce1486e672338bc96090ca9f48c0ddd","url":"./archives/2021/06/page/3/index.html"},{"revision":"b9bffd1fb1628802042f272737bdcaaf","url":"./archives/2021/index.html"},{"revision":"46f51b56aafe01e6d3221be7fe75e620","url":"./archives/2021/page/2/index.html"},{"revision":"b7ccc8478904a99e724dbf355d252069","url":"./archives/2021/page/3/index.html"},{"revision":"3a3133555e6b9ea692830249230f5db5","url":"./archives/index.html"},{"revision":"b96ca048dcb417bc9413138083585005","url":"./archives/page/2/index.html"},{"revision":"cd7ab7faddc0316efc6b9db61c0f9394","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"1e1110418757e7b4b150b13b3eff6abe","url":"./bilibili/index.html"},{"revision":"7d933f4734adb7f7cc3358d3ba43c04d","url":"./categories/DCC/index.html"},{"revision":"9b05c01757be0a8a744eeb878837f742","url":"./categories/index.html"},{"revision":"066983e65e08c633deee4532b25cac28","url":"./categories/test/index.html"},{"revision":"fd3b983bd99c8b5040e1a1b7540757da","url":"./categories/博客搭建/index.html"},{"revision":"48a2022120de77d91a4109e7a9515f83","url":"./categories/博客搭建/page/2/index.html"},{"revision":"da05a1c680f9ea2f12de0ffb4d1e0e53","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"672f4b3f7c687596a7bec3e9d113b4dc","url":"./categories/明清彩画研究/index.html"},{"revision":"7d014f983f775e3ebb6ce637bb7ecdfb","url":"./categories/程序/index.html"},{"revision":"91d9ce197cb43363eb6dad8664b26d20","url":"./categories/程序/python爬虫/index.html"},{"revision":"5846176528c1207fc07475cd31a1cead","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"80b40b80d05f1410284ef039bb7d2b9d","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aaed7773fee7709bad22e3ee0b7e05cb","url":"./gallery/网站图片链接.html"},{"revision":"34d401ac4fe1a322c2c7c194f77a6c0f","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"dc03552721bb4698d9a654dcd20ef584","url":"./img/siteicon/README.html"},{"revision":"05b366638292108a370aa086ce4d306c","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"f6ec1a6c6ba31dc666de0e8a355a0e69","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"4d7646dbf20bd761f6764383313bbb09","url":"./page/2/index.html"},{"revision":"9681dba9140abf1bd02e6b936d2129c1","url":"./page/3/index.html"},{"revision":"6b400bb811bcf6e0cde215039fd6a9a0","url":"./post/0/index.html"},{"revision":"d4ca233844314f8e25d6d4dd22b8fa35","url":"./post/28daef73/index.html"},{"revision":"ef48ae1c12ad3c21c1c81566818d273d","url":"./post/28f332e5/index.html"},{"revision":"60f8b319432f6c02644487b5c4d694b1","url":"./post/38f64154/index.html"},{"revision":"1f447bd51e3364ce5a157be77ed0cd4e","url":"./post/4271b0f6/index.html"},{"revision":"176a95c34f430cc3878576391e47fab0","url":"./post/70e43cff/index.html"},{"revision":"e42cbfed8cd998304248a760448eba23","url":"./post/8c5e4b35/index.html"},{"revision":"270a619621b1f1eff0049171edb34cd8","url":"./post/8efd8d8a/index.html"},{"revision":"a4ec63361f64c1ca72163e54512efaf1","url":"./post/986feafd/index.html"},{"revision":"bc3d8ea8b0b395dfc2d6d6ecc008ac7b","url":"./post/9987b8b8/index.html"},{"revision":"fff651a84508b12eb1a58d4350a3866c","url":"./post/ae6cda05/index.html"},{"revision":"f7eaaa1c0cf092145979560d7d90749a","url":"./post/af3eed3c/index.html"},{"revision":"458b30385d63bdb6af9a683ecd1e12ea","url":"./post/b580d7ee/index.html"},{"revision":"ae9ca3e22f9a5bbb90fb90f174673523","url":"./post/b6596b48/index.html"},{"revision":"6372e5d5427a406cfe28c8d958060e7d","url":"./post/b9218251/index.html"},{"revision":"ef8375a022b10435627b13f7fdac5b76","url":"./post/ba71baad/index.html"},{"revision":"302bfcd871a5eb3f43632d235ff18d47","url":"./post/c66d090/index.html"},{"revision":"3bc96b8725847de9911aafdff2595a6c","url":"./post/c8b7dc96/index.html"},{"revision":"3a45cf86ecc5f94c3f2eb925d2b26ca4","url":"./post/ca4c5287/index.html"},{"revision":"beb5832d1aa1c3044ce270a9a07cf784","url":"./post/d92ccc1a/index.html"},{"revision":"ec897144269c5c9b021de29b5d4693e9","url":"./post/dc4c1419/index.html"},{"revision":"4742101a4b43e452b4e624e130e4248f","url":"./post/de75e3e6/index.html"},{"revision":"ccf3f11ccbfe9079c968d3036b989817","url":"./post/f782b17c/index.html"},{"revision":"e934b42eedfb2bc8b2c8b693a4b00bf0","url":"./post/f8915431/index.html"},{"revision":"13d2726d22a750fa6208d5356786d3d2","url":"./random/index.html"},{"revision":"1be2a4851b272f045a91d0bd4c285405","url":"./search.xml"},{"revision":"02c306bb1905161ea4af6752143c5503","url":"./sitemap.xml"},{"revision":"96880c62a8accb8db961ddefb562f24c","url":"./tags/butterfly/index.html"},{"revision":"050c28cd93932fe83e13a3594b5ee105","url":"./tags/code/index.html"},{"revision":"6ca8a2f38776c800be4c887bcce60a22","url":"./tags/hexo/index.html"},{"revision":"a3ab51e514300f78a51c31a72ca6b9ad","url":"./tags/hexo插件/index.html"},{"revision":"f5136faa55aed67a0f2766231e39cdd9","url":"./tags/index.html"},{"revision":"e23f87ba12e9c57912e53b8c8561d651","url":"./tags/npm/index.html"},{"revision":"bdd336daf13d40638cd854bd7e15604c","url":"./tags/python/index.html"},{"revision":"417a4b9c11702776614a69ea24674fbf","url":"./tags/python爬虫/index.html"},{"revision":"ea724d63448e6af7337b8921a36fef2a","url":"./tags/Web/index.html"},{"revision":"b32210c66f17fe26c15b76a4b15f4213","url":"./tags/zzz/index.html"},{"revision":"e2403fd019e5329bfcd9395b3c1f8f3a","url":"./tags/博客搭建/index.html"},{"revision":"68a4b08b5964a9b3511b658eee1dd22c","url":"./tags/图床/index.html"}],{
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