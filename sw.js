const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"489d691bed96830ca2109486e45fd01a","url":"./404.html"},{"revision":"3cdd1333f132b5952c6c84f112fc347e","url":"./about/index.html"},{"revision":"764da08a45f37a11fb371afaad39b086","url":"./archives/2021/05/index.html"},{"revision":"0567c4a67b1b63680afeb5f157830272","url":"./archives/2021/06/index.html"},{"revision":"9ac5977d01e39294129fd96dde97ee1e","url":"./archives/2021/06/page/2/index.html"},{"revision":"5799ac8065c51974f061911d0fd20b36","url":"./archives/2021/index.html"},{"revision":"79b8f80592a191be8f23fe5ef1a297da","url":"./archives/2021/page/2/index.html"},{"revision":"3449bd2c6c7a9c2eb8711989e68cdaf2","url":"./archives/index.html"},{"revision":"6ff6e2bc5f97e93e25a54e0874cefa20","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"3d6aa3dab3199d7814c99640a40c7922","url":"./categories/index.html"},{"revision":"d3e2fba72db8da077389f096155741c0","url":"./categories/test/index.html"},{"revision":"466d6aba88d35b76eb6bde0254698a7f","url":"./categories/博客搭建/index.html"},{"revision":"ebad9e30b50c92eb54b46943bc4d2c6f","url":"./categories/程序/index.html"},{"revision":"44bc2b0563e3442932faa5089a8d1b16","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3c5acfa0af9539b19bfc1fa27259b76b","url":"./gallery/me.html"},{"revision":"82c00758e9d33f507c197e9fc8bc7d21","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"f97527e9a732ff06229a785035b64470","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"3fec3b9809de6af597f3051143f510b6","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"8176966a8c8b5c7f15febcba543cc2d3","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"ae1064aefc80af89de8115131643e571","url":"./page/2/index.html"},{"revision":"5485fc14f409a9df7c754e57a518b55b","url":"./post/28daef73/index.html"},{"revision":"22cc91900eabca6c1a1ddc845d60705e","url":"./post/28f332e5/index.html"},{"revision":"03d2c973319a80185ff4b3b25f720a3d","url":"./post/38f64154/index.html"},{"revision":"80d5d769b9d6d2bf6be78133e6bc2dc8","url":"./post/4271b0f6/index.html"},{"revision":"28c8959972e732d31622a0c44e6dd1a0","url":"./post/8c5e4b35/index.html"},{"revision":"b1c668c1294429dd4751cdce7a7f6efe","url":"./post/8efd8d8a/index.html"},{"revision":"27972d9557d865ea1b6c89b384a5adf1","url":"./post/b580d7ee/index.html"},{"revision":"0adbe6ede1d925668fc484d783191063","url":"./post/b6596b48/index.html"},{"revision":"b8768e31c44b2f5fade11ea78b843184","url":"./post/ba71baad/index.html"},{"revision":"16a36dbdc15302c169d9d5a4b95acac4","url":"./post/c66d090/index.html"},{"revision":"a408f9d1d451b425541831ae65f63fee","url":"./post/c8b7dc96/index.html"},{"revision":"b1a5fe2780e67020baab9c88f447a46b","url":"./post/dc4c1419/index.html"},{"revision":"90ab1a87834bc5ff35402c44630414f2","url":"./post/de75e3e6/index.html"},{"revision":"dd573a3aac0fea669fe3d191b6bf3033","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"81ea7cb6b95165f615fc4109777b0062","url":"./search.xml"},{"revision":"96f3acb1d598aa7c35c8d4cac5d9ea21","url":"./sitemap.xml"},{"revision":"e1064781418a7f52175ca6c66aa45812","url":"./tags/butterfly/index.html"},{"revision":"b5d00393ffab3102a960d8ed601d5cfb","url":"./tags/code/index.html"},{"revision":"f8c759823b694e9bb340dc5883bda9f8","url":"./tags/hexo/index.html"},{"revision":"4da0b7de45776ea3d0dd87e65f93f92a","url":"./tags/hexo插件/index.html"},{"revision":"2b032ffd00eac0e26225a90fdeed40db","url":"./tags/index.html"},{"revision":"bdaf20a9b93a0fc3cfc4b5ab756981ec","url":"./tags/npm/index.html"},{"revision":"74ce44f390f9b692afd14ca0e8fbff7c","url":"./tags/zzz/index.html"},{"revision":"5c2404a910253a5f57d79e3c717bf66a","url":"./tags/博客搭建/index.html"},{"revision":"a7aaac54e5986301c02473c57ed29db8","url":"./tags/图床/index.html"},{"revision":"87cf0c98f419c63d7e19a4b111ce8d82","url":"./文章统计/index.html"},{"revision":"1837bbd46de8f20fabb5f7be13380bf2","url":"./追番/index.html"}],{
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