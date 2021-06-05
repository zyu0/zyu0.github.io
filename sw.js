const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a26b94a216e94308fd0329060e4fc17e","url":"./404.html"},{"revision":"90b887768d85b1e9dec623198ba7c514","url":"./about/index.html"},{"revision":"e4bd34ce0c723d1f196664138ad22f4b","url":"./analysis/index.html"},{"revision":"50503eea2da597b2a71e09cc286c1baf","url":"./archives/2021/05/index.html"},{"revision":"581bd7c05423eb7db0f594ff217ef86b","url":"./archives/2021/06/index.html"},{"revision":"f7eada202a01c7586ed5aa91f9ce8463","url":"./archives/2021/06/page/2/index.html"},{"revision":"7c05422e9dc015423395cc151e19e73d","url":"./archives/2021/index.html"},{"revision":"ea99c688d08783a1d38329a8a0a5bfeb","url":"./archives/2021/page/2/index.html"},{"revision":"9f8f6be70351dc804c5a61374f8db703","url":"./archives/index.html"},{"revision":"9d44ea2a2daaa8899446ab2ab4a2014a","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"b50df95aa2870bf839bfe12ac7448db4","url":"./bilibili/index.html"},{"revision":"bbf364b287951b08c40cea174c863d31","url":"./categories/index.html"},{"revision":"12cbf580b28bd0a0b3ef11cb1f5c880f","url":"./categories/test/index.html"},{"revision":"2b511e0d651d008d57168a2e076a67ff","url":"./categories/博客搭建/index.html"},{"revision":"1b5f15023c691c11ead9907df0ce4fae","url":"./categories/模板/index.html"},{"revision":"9e37b9d963ff8c35e12fe6017a5fe3de","url":"./categories/程序/index.html"},{"revision":"685fcc3d280dfc6c016067b86b919a0a","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f98a1137055e59850815d69e9c3538a7","url":"./gallery/网站图片链接.html"},{"revision":"5ade84e4c6031466b9766c12b6eea28a","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"87c376773ceab796bb3a97951f34fe44","url":"./img/siteicon/README.html"},{"revision":"a93e3526ef3c24a4c5158009fc35401b","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"3ecb8b08954438e938458af95ef9f232","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"dc8277a823dd2094f813782489375a79","url":"./page/2/index.html"},{"revision":"c1c9932f711adb69eab39279cfe254c6","url":"./post/0/index.html"},{"revision":"f78b7da690fd0cc875850f50c369bed1","url":"./post/28daef73/index.html"},{"revision":"629edd5d351275049d8fc6af2a92e816","url":"./post/28f332e5/index.html"},{"revision":"33991c761791bcb68a1926b226656e51","url":"./post/38f64154/index.html"},{"revision":"c7fdad563d902c30867d4281d2a0b78f","url":"./post/4271b0f6/index.html"},{"revision":"7ae87ee0cf84d60583197b3fa049061d","url":"./post/8c5e4b35/index.html"},{"revision":"0bc809452e9d3252f7f043568cb3e57b","url":"./post/8efd8d8a/index.html"},{"revision":"c90c489cc8211ba5afab669de06911a7","url":"./post/b580d7ee/index.html"},{"revision":"d00a582c0adaaacad3a10ae5f45299f8","url":"./post/b6596b48/index.html"},{"revision":"641c45ab09e77df74f0b8b84966356c7","url":"./post/ba71baad/index.html"},{"revision":"ada7c7b2d0a1f7ff2d9e9a5b855ec190","url":"./post/c66d090/index.html"},{"revision":"906afc06732284cbcd1caf44571c52df","url":"./post/c8b7dc96/index.html"},{"revision":"b52bc839cc7de648cf4c8400fdfb1299","url":"./post/dc4c1419/index.html"},{"revision":"55666e6fc39dde781c8218d8615eebb8","url":"./post/de75e3e6/index.html"},{"revision":"c3622e969f5748d0aafd3cc71cb7b161","url":"./post/f8915431/index.html"},{"revision":"27000cdc91c22e70bc36a655602f9931","url":"./random/index.html"},{"revision":"139c6d7ffb83756c82a2f591c2aff65e","url":"./search.xml"},{"revision":"cc3f8b318d2c20a3671a04cbd2b5d1d8","url":"./sitemap.xml"},{"revision":"4dfe06939bdc5b54399d9c095ebc985c","url":"./tags/butterfly/index.html"},{"revision":"a4d5b5615727339d5aeda20d617936f9","url":"./tags/code/index.html"},{"revision":"de3345075b85172a5c52e84a29901752","url":"./tags/hexo/index.html"},{"revision":"f3f80478240a7076d4ec5a8356152f08","url":"./tags/hexo插件/index.html"},{"revision":"e877327e0f6762421c9a57ef5a79581d","url":"./tags/index.html"},{"revision":"bd5de39ef5415431f268fab2c1c4324d","url":"./tags/npm/index.html"},{"revision":"5f9743c08f9adc466a9b3fe4e16da190","url":"./tags/zzz/index.html"},{"revision":"cf72efee5502f1dcd7e9c57ae9057706","url":"./tags/博客搭建/index.html"},{"revision":"9eb84db4cd789ef220864ab1c936fb45","url":"./tags/图床/index.html"}],{
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