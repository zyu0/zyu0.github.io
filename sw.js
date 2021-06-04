const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a0d6bc3354099d6830212b7a996d3810","url":"./404.html"},{"revision":"7bc3d1d58df1cf5d765689de4bcfa845","url":"./about/index.html"},{"revision":"860edcfb72902800a014697c6a17c957","url":"./analysis/index.html"},{"revision":"107c63a1ed321d15247b9055b3279131","url":"./archives/2021/05/index.html"},{"revision":"7854ffbb804446b6b0f595411c9131f5","url":"./archives/2021/06/index.html"},{"revision":"50b6a96101fa75e723a927f5249435a0","url":"./archives/2021/06/page/2/index.html"},{"revision":"4306635688f919633895ad556c8a370c","url":"./archives/2021/index.html"},{"revision":"8d9eddc843545fb383ec7f15a0cfe677","url":"./archives/2021/page/2/index.html"},{"revision":"f4fd6529e158be95593a58ecacdcf7cb","url":"./archives/index.html"},{"revision":"421cdf5ff507f86019d606c0a295c1df","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"ef4285a4c66d7a609f73cf32df10e6f6","url":"./bilibili/index.html"},{"revision":"f6d074ebdf69639c03da26afa213f65d","url":"./categories/index.html"},{"revision":"9ece400c08673694e616e57dbf4c7901","url":"./categories/test/index.html"},{"revision":"9ab9221e66d9abad77473884d421ad36","url":"./categories/博客搭建/index.html"},{"revision":"c14358236ac9b2743f250a495c04b51c","url":"./categories/程序/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b11c3baa63c67d782d179130c6d327fd","url":"./gallery/me.html"},{"revision":"692f6067002a3e9c1a2aeddddcda8aab","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"9a1912bce0352f81ad5685d543d031b7","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"ed6ab8dc0609ed2281a0f706e0516fe7","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"f504bd40977b9ea57181f4247032d196","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"1b97119cb58e49dee94266c4f1d17b0a","url":"./page/2/index.html"},{"revision":"d5842cca559dc210a74234211ffb486d","url":"./post/28daef73/index.html"},{"revision":"e8613069e77d05e3cffe8dfad8432917","url":"./post/28f332e5/index.html"},{"revision":"464155e5117bfcefabcf9ce05e40c26a","url":"./post/38f64154/index.html"},{"revision":"5dfbe3f52dadef2d9acdc2d025719388","url":"./post/4271b0f6/index.html"},{"revision":"160c4e0bd2fb02708e2f52d645807ff4","url":"./post/8c5e4b35/index.html"},{"revision":"704c5387300c11dfccf1a899f0645385","url":"./post/8efd8d8a/index.html"},{"revision":"ab2e1d97af7db1d07fc4736f66e4b53e","url":"./post/b580d7ee/index.html"},{"revision":"ca2f306947e94be0cbbe6fcae887f9c3","url":"./post/b6596b48/index.html"},{"revision":"68b8d0c9016e472a3feef62e57c0f3b4","url":"./post/ba71baad/index.html"},{"revision":"b083d0ab118a75c9abedb78004ec1618","url":"./post/c66d090/index.html"},{"revision":"a3985f1a53252d3ab8d7620364177eda","url":"./post/c8b7dc96/index.html"},{"revision":"27efd4e188a84234d8fa15b39812bdb8","url":"./post/dc4c1419/index.html"},{"revision":"9bcb24d79164ed8073e9ac3a02b9da13","url":"./post/de75e3e6/index.html"},{"revision":"f7536621255ca8f6d09c30b2a88fdbf8","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"4f1b9d6915e600891927f6a75f6e876a","url":"./search.xml"},{"revision":"b2ec3e3e615533c7bb3d46d104e921bf","url":"./sitemap.xml"},{"revision":"c0ac74b2af38a19bb6d2557540bd2030","url":"./tags/butterfly/index.html"},{"revision":"8e83658bf281cb4e38bcda45b0696445","url":"./tags/code/index.html"},{"revision":"e38cc7b7597a7c2da1be87a40dcdd2f7","url":"./tags/hexo/index.html"},{"revision":"33ccfcb1d1907716c9b287b83e911433","url":"./tags/hexo插件/index.html"},{"revision":"bf9d434f9819f1b62b063bb63b605673","url":"./tags/index.html"},{"revision":"1fd86e2cb83b4e3daa7c84a9d7be2523","url":"./tags/npm/index.html"},{"revision":"62621cea99cb61dada6a7103c857f2c6","url":"./tags/zzz/index.html"},{"revision":"5a0f3272dcfbe560dd49caf073efda91","url":"./tags/博客搭建/index.html"},{"revision":"f80d64a0c24b328bc0650115878c2947","url":"./tags/图床/index.html"},{"revision":"4de97a5c8adedd003fa3e1c3cbccaae4","url":"./追番/index.html"}],{
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