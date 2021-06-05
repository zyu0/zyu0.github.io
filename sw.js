const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"275aeafa86ebe3a472cde8df69e65a3e","url":"./404.html"},{"revision":"1778e5c5d5973233d0dc51eef9d25790","url":"./about/index.html"},{"revision":"2cd54f2d7623d40ba2f6764f84bc5bcf","url":"./analysis/index.html"},{"revision":"1193e33bf0f2917f006c9905b437563d","url":"./archives/2021/05/index.html"},{"revision":"4b995bb9a7a72284c2059794d92c5df8","url":"./archives/2021/06/index.html"},{"revision":"74f59aa64d516db2e575715ebe17ba4c","url":"./archives/2021/06/page/2/index.html"},{"revision":"aab3e5bc62eb3d41fc6b02add83e4e21","url":"./archives/2021/index.html"},{"revision":"0321311ffaab50953916e0b197adac86","url":"./archives/2021/page/2/index.html"},{"revision":"543584680a1a6caa9f3de835d3b734c7","url":"./archives/index.html"},{"revision":"c6c29a94244f280c3b1d7f653c7c6d2e","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"59ed8c2b40a3e900ebfce486031de865","url":"./bilibili/index.html"},{"revision":"bf3408fcb18e3642e96cdc47a527df8e","url":"./categories/index.html"},{"revision":"910f5a4d82bc72a4e1aa40a9fc7a038b","url":"./categories/test/index.html"},{"revision":"8133cd28a448c2a221978fec87b4dd63","url":"./categories/博客搭建/index.html"},{"revision":"23058eeaedcf56662dad091c3cd11918","url":"./categories/程序/index.html"},{"revision":"9cea13bdc57fe7bccd6345e26bb825fd","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0443033d778ff42543ca4ae16117077b","url":"./gallery/网站图片链接.html"},{"revision":"16a79b888aa2bd3a82afa4f5e7144283","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"e3e78ab9b80b4d8ef5f416d958da96b2","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"2955992e074d9688737c0c3f5cfab894","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"d93889ea249ce0ed635b77438ab23f01","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"53f3544c4bb71fd1954190accf7789e3","url":"./page/2/index.html"},{"revision":"37a6f5fee20a423ad245127b6895e0a1","url":"./post/28daef73/index.html"},{"revision":"63b1d28492b4c282634411ad9d45b56e","url":"./post/28f332e5/index.html"},{"revision":"6b097b61dfea3933eb20c912a5c0740a","url":"./post/38f64154/index.html"},{"revision":"104e8620540cfd30061372b7f62f3040","url":"./post/4271b0f6/index.html"},{"revision":"088864e98f5b13de2fc1e9f69d8632b5","url":"./post/8c5e4b35/index.html"},{"revision":"981b8b881c124cdb1dd16986b008ea7d","url":"./post/8efd8d8a/index.html"},{"revision":"a547c221e1ed78652b2d2c422139101e","url":"./post/b580d7ee/index.html"},{"revision":"ff8d9218dde3e97117471d13e595ed87","url":"./post/b6596b48/index.html"},{"revision":"1392b884f1fe5c9ffe04ee98b44b1a4b","url":"./post/ba71baad/index.html"},{"revision":"047e87cd2788de1d792f4e1bbee50fd8","url":"./post/c66d090/index.html"},{"revision":"1e7e90b2b268d2f5f055c589cf4e90f1","url":"./post/c8b7dc96/index.html"},{"revision":"31ebf1569175a0dc02e453aeaccda52b","url":"./post/dc4c1419/index.html"},{"revision":"b6b6d09a1477fd62a0d7452d93c73478","url":"./post/de75e3e6/index.html"},{"revision":"5ac574e39881fdadbeb92c03e9cdbeef","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"bd4ab6799eb38f25d7cd034c03b9a9a8","url":"./search.xml"},{"revision":"915e4324045ac2b09579027465f51e39","url":"./sitemap.xml"},{"revision":"cfb2c8ae3bc6a25bccf7c07037a2687a","url":"./tags/butterfly/index.html"},{"revision":"cfe1fa54f18408159ea7ba9dbf753fec","url":"./tags/code/index.html"},{"revision":"1eded2a94f215754e29c5312a4b936d2","url":"./tags/hexo/index.html"},{"revision":"b0640f562268644068bdfffe416b79de","url":"./tags/hexo插件/index.html"},{"revision":"b58eba8e1c825dc73ebe9881b7a0502b","url":"./tags/index.html"},{"revision":"0d5c7e1cf16a0b50c929b02d67c8f097","url":"./tags/npm/index.html"},{"revision":"36e489005e4d2bf544c2dd2f20d5a4e9","url":"./tags/zzz/index.html"},{"revision":"b911c276a6effc7c25d658accb026901","url":"./tags/博客搭建/index.html"},{"revision":"1c88f566798ac0b2c8ddb82e4fd8afe4","url":"./tags/图床/index.html"}],{
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