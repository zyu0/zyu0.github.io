const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1b4fbb29d6f126831f18c98f682f7620","url":"./404.html"},{"revision":"db4d7bc4848d9204e158842f3a49874c","url":"./about/index.html"},{"revision":"ca566de056cf7905187c46a1fba79c5e","url":"./analysis/index.html"},{"revision":"573a6c6de0960c009f6afd8ec4c529e8","url":"./archives/2021/05/index.html"},{"revision":"1d16f3b8548e0decbc1cc7d7b4e89b0a","url":"./archives/2021/06/index.html"},{"revision":"d14d43674614925cb97ed85e66e17325","url":"./archives/2021/06/page/2/index.html"},{"revision":"bef7d6d7542da3211cddd173b173f7f7","url":"./archives/2021/index.html"},{"revision":"3efffbb998cb730f3ab9d3c4a8b7bfbe","url":"./archives/2021/page/2/index.html"},{"revision":"e4bf3fb7a2631d26641b4630d4044369","url":"./archives/index.html"},{"revision":"ebeb1b7762fae705f5e398099c95301b","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"5fd8c2e652b1467abad95a263298f2e1","url":"./bilibili/index.html"},{"revision":"c8899a2bafc5254733bd005085f36d96","url":"./categories/index.html"},{"revision":"7cc326f948d4eb9e93c25eaede243cac","url":"./categories/test/index.html"},{"revision":"bd365c7fad2b1ad2de8e6c43fb090497","url":"./categories/博客搭建/index.html"},{"revision":"95be60d815790ea51614e4a05d3da454","url":"./categories/程序/index.html"},{"revision":"7efa532efa76fe58dd35947e7452c9f2","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"082e5e4536b3a8fd6b2516d0da4d2a38","url":"./gallery/网站图片链接.html"},{"revision":"103b3d8aede67e6d9acb54b693d8752a","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"62653c02c78143228d4437dc990a7059","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"cb5e75e2ec86450d61c06a8cb39df6dd","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./page/2/index.html"},{"revision":"dc9e9d26c612d0c047159d7693810e29","url":"./post/28daef73/index.html"},{"revision":"b232a909420621819b7c682b479ef9fd","url":"./post/28f332e5/index.html"},{"revision":"b3bfac1a04f09bfccee315c5de700f19","url":"./post/38f64154/index.html"},{"revision":"61be2b2de8e44ceda2e587f398f9c2cd","url":"./post/4271b0f6/index.html"},{"revision":"500300a74a0a178962612509c5b6c077","url":"./post/8c5e4b35/index.html"},{"revision":"78743798fa7ec1391c3b68fe3a88b610","url":"./post/8efd8d8a/index.html"},{"revision":"68b1af98c913d34ff1c9ee4939138242","url":"./post/b580d7ee/index.html"},{"revision":"514d1e13866a3391acb5d155c7125b71","url":"./post/b6596b48/index.html"},{"revision":"4ed3c46d50d1d44fe2a02c064bf146a2","url":"./post/ba71baad/index.html"},{"revision":"7a2c245b40f1f756fa202c02f213e393","url":"./post/c66d090/index.html"},{"revision":"4a63179d8f08593712477abde67be9ed","url":"./post/c8b7dc96/index.html"},{"revision":"8246318e445f7e38cc07b6efcb9d7330","url":"./post/dc4c1419/index.html"},{"revision":"f7c7977f6011a936b77e2b9469f79b4c","url":"./post/de75e3e6/index.html"},{"revision":"535d8fef73d887da0a5bc1ccccaefb77","url":"./post/f8915431/index.html"},{"revision":"381f7421607b14cc58bb45592b58a04d","url":"./random/index.html"},{"revision":"dd2d810d506132a1e047443a4a6d33bf","url":"./search.xml"},{"revision":"3c60f907a846e08275e3514e83d9920f","url":"./sitemap.xml"},{"revision":"8189aaee54d7ee8e2f110c228680d3cd","url":"./tags/butterfly/index.html"},{"revision":"2c38f1c575fac5ec9917d5be70cd0a43","url":"./tags/code/index.html"},{"revision":"08c55c9e6f4907aa1f1f139761ca72e2","url":"./tags/hexo/index.html"},{"revision":"1d76d5746dfb649006aaea1f08e23139","url":"./tags/hexo插件/index.html"},{"revision":"3f37a01f06a9acda85b800759758862c","url":"./tags/index.html"},{"revision":"7344b38496d2325d647acecbe6d16ac4","url":"./tags/npm/index.html"},{"revision":"870a7d09e486f2e1eb6ad7dfb0139f09","url":"./tags/zzz/index.html"},{"revision":"ef110b948104f3e4d65aa000edc21af8","url":"./tags/博客搭建/index.html"},{"revision":"6f48bb2e5f8f43f358161903d4b09091","url":"./tags/图床/index.html"}],{
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