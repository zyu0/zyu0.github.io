const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"14ffba318f4b6ded82709684599b5dca","url":"./404.html"},{"revision":"a4b00152f388a5513f6a2f984a028035","url":"./about/index.html"},{"revision":"2105218cf3f75a2e10702114fed97593","url":"./analysis/index.html"},{"revision":"905cc53b502d6e6fb154d7f8e2ce82d5","url":"./archives/2021/05/index.html"},{"revision":"02fa72d6c5d75fdd0f3b9188b675d8e4","url":"./archives/2021/06/index.html"},{"revision":"f701f8c54901ca7e899b23b9bcdf12b6","url":"./archives/2021/06/page/2/index.html"},{"revision":"7ee096c7d316d9e1bda088fbab69b9f4","url":"./archives/2021/index.html"},{"revision":"96f816faff5195ec6b067a263e230d47","url":"./archives/2021/page/2/index.html"},{"revision":"d8e17afd78fc220b40244492b5d26fe7","url":"./archives/index.html"},{"revision":"0641f6cd017f86b6eb5a125346fb65fb","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"9a386785733ce2cd354334c46fec250b","url":"./bilibili/index.html"},{"revision":"2efb61ec92bbb79b0281612319ec6883","url":"./categories/index.html"},{"revision":"eabfad1cabfcc664bf29736116033017","url":"./categories/test/index.html"},{"revision":"058af8e5ac851a430aeb3aba3017e093","url":"./categories/博客搭建/index.html"},{"revision":"f2847e3f56baa6d4dcebfed322cad0de","url":"./categories/程序/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"bf03b579b1c0e5bf74b3014c8aefc919","url":"./gallery/me.html"},{"revision":"ae869a2133b74375c9e1ccdd66da63bf","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"c8da4cfd66f25904b6140ee1536e75af","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"eef839f369a60a7f31192fadc03b83eb","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"0bb80ff5fbaa54d8c51926ee086faa3a","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"4d31f243a8fb637c8c34e7bd913e6e37","url":"./page/2/index.html"},{"revision":"baa633ff4d25421808a6205360273744","url":"./post/28daef73/index.html"},{"revision":"227868b7919e462869b1e44be59143ab","url":"./post/28f332e5/index.html"},{"revision":"cc0d1d7398adf95152959dff22223823","url":"./post/38f64154/index.html"},{"revision":"95ee38b486faf8cfcf23f78092f3c8c3","url":"./post/4271b0f6/index.html"},{"revision":"ec86aa991df51c52b88cfc885e2a6a6e","url":"./post/8c5e4b35/index.html"},{"revision":"d1979b236681e219e5141f082db5c4b3","url":"./post/8efd8d8a/index.html"},{"revision":"32e49bb6946e4d551113e6e2121ffef1","url":"./post/b580d7ee/index.html"},{"revision":"88211191991a7ddebd6aa032637e7c23","url":"./post/b6596b48/index.html"},{"revision":"f5012cfcc8db3bac07b52e26cd5c1117","url":"./post/ba71baad/index.html"},{"revision":"10ea90a64780c9969a7378efb127f1c8","url":"./post/c66d090/index.html"},{"revision":"16d34ee64046641fa28e273f44a5dc20","url":"./post/c8b7dc96/index.html"},{"revision":"6ee98fecbcaffc67f294c922a1545f31","url":"./post/dc4c1419/index.html"},{"revision":"90568cafe33e04ef2e2d33c4ade8fb07","url":"./post/de75e3e6/index.html"},{"revision":"7c9a51f283896dc6540012e1e91c809f","url":"./post/f8915431/index.html"},{"revision":"e86ecfd0e131753eebe8691e75511310","url":"./random/index.html"},{"revision":"116d302f4f27480d522a03213d1ff2c4","url":"./search.xml"},{"revision":"011df37406709f8e97f381c9c854105b","url":"./sitemap.xml"},{"revision":"62aa757346ee6a85dd67700a1932f75e","url":"./tags/butterfly/index.html"},{"revision":"2645eee2379ac4da3dc32c8494802598","url":"./tags/code/index.html"},{"revision":"5b5e59abf84777301386d4c6fac08d4f","url":"./tags/hexo/index.html"},{"revision":"22a68ace83143b4505382e77df1abe5f","url":"./tags/hexo插件/index.html"},{"revision":"3b55d6b7bfde3e50c9f91bb3d2bae985","url":"./tags/index.html"},{"revision":"2012ada6cc8fada30010c30228f30e63","url":"./tags/npm/index.html"},{"revision":"67d9a8b89afa13fe343228031e1d8d0f","url":"./tags/zzz/index.html"},{"revision":"2928302cebf4a4b9e3ae9af6e0b2827d","url":"./tags/博客搭建/index.html"},{"revision":"56958a7bc5386845b6c9cf767da181e5","url":"./tags/图床/index.html"},{"revision":"3c51ff0893afcbda20c10d9487f8facd","url":"./追番/index.html"}],{
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