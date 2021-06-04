const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a8e27ef1e22ee3799cb21adddea6af1b","url":"./404.html"},{"revision":"c074fef6f20e78534308cf5599021278","url":"./about/index.html"},{"revision":"479be971402124a8f8696461aad89e05","url":"./analysis/index.html"},{"revision":"e970219575e2f45cf05896d42363693c","url":"./archives/2021/05/index.html"},{"revision":"1b6a58ecbb999e669cee29c17008346d","url":"./archives/2021/06/index.html"},{"revision":"5e5808de60c6c76238aced2209bbe92f","url":"./archives/2021/06/page/2/index.html"},{"revision":"d6cdbf61822420f35e3069e142466335","url":"./archives/2021/index.html"},{"revision":"6c040b467c1b4a6a1ea84d7ec5eade27","url":"./archives/2021/page/2/index.html"},{"revision":"d6153ecf147541954a09d2ab58465664","url":"./archives/index.html"},{"revision":"daf27e32313699b4648f67f021b4f04c","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"4538c4d975d09ac41d5a375eaf77c90c","url":"./bilibili/index.html"},{"revision":"e37c42ead6a1c8b2e4bc8aa72e051bc0","url":"./categories/index.html"},{"revision":"005c39d02883285055b6c34358dc1340","url":"./categories/test/index.html"},{"revision":"1226329c37e782ea52a7ddf70743688d","url":"./categories/博客搭建/index.html"},{"revision":"7111b327a9084a14dfcf7ae2b079281d","url":"./categories/程序/index.html"},{"revision":"dd884a8bb14b113a08768a4b188b6566","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"ecf48259262d4c92519341c286c93fdd","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e038cd044a5f2f77c4e078e17588fc49","url":"./gallery/me.html"},{"revision":"dee6de6eb2b2a4f5eedf79d3123a7385","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"61e7aa10d12a031ad11ce0dbd87efa91","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"4c790a6984aaccad40864b12165ca47e","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5d1e2f0f1b8b0a72bde90aa3e28e224c","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"7839117ee97c6d0507af454b449c037c","url":"./page/2/index.html"},{"revision":"cc30a611b39e7864f5f78320f4be63e2","url":"./post/28daef73/index.html"},{"revision":"36cd8a97288f0767bab87b4c3249ec8c","url":"./post/28f332e5/index.html"},{"revision":"9889b2d5e8887387ec7fd889c0ca99c8","url":"./post/38f64154/index.html"},{"revision":"79772cf5dde89f991d2324d33c28de00","url":"./post/4271b0f6/index.html"},{"revision":"e1064d7ee340c54824f99df9ac4afbec","url":"./post/8c5e4b35/index.html"},{"revision":"ed5fd58fa117b6e1380ed213363a5ef5","url":"./post/8efd8d8a/index.html"},{"revision":"95d536affbe0d7cb9732c6128883d592","url":"./post/b580d7ee/index.html"},{"revision":"4ebafe63181027e93edb6e5cbc3c3b58","url":"./post/b6596b48/index.html"},{"revision":"872033950a093e7dda1c19e85ec6ec40","url":"./post/ba71baad/index.html"},{"revision":"474f282b1d15b23481770911b47c467e","url":"./post/c66d090/index.html"},{"revision":"eea097e5f9f79c9c8a5ebca855a6a5e9","url":"./post/c8b7dc96/index.html"},{"revision":"0b4cfca33330fdecbcde08091831cfd3","url":"./post/dc4c1419/index.html"},{"revision":"3fc115fdc0f198f67164e67db68994e7","url":"./post/de75e3e6/index.html"},{"revision":"ba2d5a673849fa4269521fa3531a3433","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"af37a0ff62d6a34c311954298754efc5","url":"./search.xml"},{"revision":"b2ec3e3e615533c7bb3d46d104e921bf","url":"./sitemap.xml"},{"revision":"000f8f1c3111126362d328cf3a73c74b","url":"./tags/butterfly/index.html"},{"revision":"a4ae24e312cbdad67224eb83ef4c2dbc","url":"./tags/code/index.html"},{"revision":"e682965739c12f7e787a95a80472abbc","url":"./tags/hexo/index.html"},{"revision":"bc267b825d18adadf427a04837168deb","url":"./tags/hexo插件/index.html"},{"revision":"4ea4a32e3e958860d7e71d3f0941db5e","url":"./tags/index.html"},{"revision":"67451498f6ab12d102b166384f0e41a1","url":"./tags/npm/index.html"},{"revision":"511711c1f1c5377a30d3a7b06f0afb17","url":"./tags/zzz/index.html"},{"revision":"dea6435273c79740e1a1393a0a1592f2","url":"./tags/博客搭建/index.html"},{"revision":"32d35c6d107e50cb685b6ca8e78725dc","url":"./tags/图床/index.html"}],{
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