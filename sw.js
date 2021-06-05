const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"6ed7556dcb102f92464b408dd7353854","url":"./404.html"},{"revision":"16373e494e454ad1ad189a12268e39e0","url":"./about/index.html"},{"revision":"188496b3f02614da492559e37061400c","url":"./analysis/index.html"},{"revision":"5c3aa4fadf3f98eb2d4c09a283f8aebb","url":"./archives/2021/05/index.html"},{"revision":"f4292db133ad3c0b71a1508d98f1a777","url":"./archives/2021/06/index.html"},{"revision":"619a461230289e95143fd4b3cf5c63a9","url":"./archives/2021/06/page/2/index.html"},{"revision":"32a4a3c4899639f8713f2e64f2e46102","url":"./archives/2021/index.html"},{"revision":"c07e48ba01326d3e4a0e3878b506c691","url":"./archives/2021/page/2/index.html"},{"revision":"413f6f92a264e0f9b5157142b945eb0f","url":"./archives/index.html"},{"revision":"dd10f8c50a0e9dd4ad7a21b4426ecbf5","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"00b7659a72283b24374b49e24ae94eed","url":"./bilibili/index.html"},{"revision":"f38f98320dca85c70eae904da3a8d17b","url":"./categories/index.html"},{"revision":"984be40ca635abbfb3ce3c834224d722","url":"./categories/test/index.html"},{"revision":"ef75c37474382ca2a906e03b8d4a3c8a","url":"./categories/博客搭建/index.html"},{"revision":"b76946536ee3dea48f950e8fa1616c8e","url":"./categories/程序/index.html"},{"revision":"7c2f0d8f531b4a09efb7d361c4210b8d","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"ecf48259262d4c92519341c286c93fdd","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af6a72b4aafa29ddf817dcb5d17fc378","url":"./gallery/网站图片链接.html"},{"revision":"59567739b32a542db3c7df5548c8e845","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"e68b5cfc993be727e7b987fc1a7b3e83","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"dc84988a75d981050dc5091ddb801a5f","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"db672c3bcf40af6cb639b529474f0b46","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"f6e86a6395c1e03fce12170229c0b847","url":"./page/2/index.html"},{"revision":"1cf098fdbc30106d47fa007a7784891b","url":"./post/28daef73/index.html"},{"revision":"4ea7873a1580409925809cba85489772","url":"./post/28f332e5/index.html"},{"revision":"9e766a00061117b377d0d980466933d1","url":"./post/38f64154/index.html"},{"revision":"1accf15bc93ed6729fe0a4f2e92bf82d","url":"./post/4271b0f6/index.html"},{"revision":"0755f297abe0583b86b2e1b21a58067e","url":"./post/8c5e4b35/index.html"},{"revision":"b9b0e3a8e8af4d4380db51496d86b7ff","url":"./post/8efd8d8a/index.html"},{"revision":"34137894d247f38a7ad31c57ca60e558","url":"./post/b580d7ee/index.html"},{"revision":"1c8a4980db33d50d879146a67c7b7cbf","url":"./post/b6596b48/index.html"},{"revision":"f4ac912e864c5bbd147cb7f82d0c4ef7","url":"./post/ba71baad/index.html"},{"revision":"bc924a085fe7a7f34d1fc092e365a4be","url":"./post/c66d090/index.html"},{"revision":"016d5a983e9b9b3fb2912d8de2cb5d4b","url":"./post/c8b7dc96/index.html"},{"revision":"24e850ec127cd040c9f31b475776cb3d","url":"./post/dc4c1419/index.html"},{"revision":"d53c0dadb69ddbb9dee9249bd89f75a7","url":"./post/de75e3e6/index.html"},{"revision":"d3b97d44bb500e94cfd79027df6c64b0","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"bd4ab6799eb38f25d7cd034c03b9a9a8","url":"./search.xml"},{"revision":"67aa30f6546c63c5d54b1975e475895a","url":"./sitemap.xml"},{"revision":"0c5874fe59830e5bea1cf1e3a9f74a34","url":"./tags/butterfly/index.html"},{"revision":"bae9179708d1958223c4dea9b2adc543","url":"./tags/code/index.html"},{"revision":"308b67ccecc27add28a31354cb1c3df8","url":"./tags/hexo/index.html"},{"revision":"8c921265fa1db143012568988c409d35","url":"./tags/hexo插件/index.html"},{"revision":"8f65afb9b95c2b1e206f4eb6119f0aff","url":"./tags/index.html"},{"revision":"05e2b761b394e8e5cb2fe3bef0a9326e","url":"./tags/npm/index.html"},{"revision":"714f907559f537943aabbb54d1f391c7","url":"./tags/zzz/index.html"},{"revision":"6ee809bfa01934bae8bea3c238c2a73a","url":"./tags/博客搭建/index.html"},{"revision":"dd34fa33400cf6250bac9425a81f90c1","url":"./tags/图床/index.html"}],{
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