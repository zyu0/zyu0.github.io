const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e09d2c71d87d378ba9b263b70f908cf6","url":"./404.html"},{"revision":"4d2ce73f81226c4ba1525ebbe66f869d","url":"./about/index.html"},{"revision":"8fed416b7d298ff1b7031d3a9878dda0","url":"./analysis/index.html"},{"revision":"43f93c0ad811fd5d0132624aaace865b","url":"./archives/2021/05/index.html"},{"revision":"b75b139ab4c7c523a38a8a1ed1130779","url":"./archives/2021/06/index.html"},{"revision":"f63b507f84a6c2a3d34845d7271e8a0b","url":"./archives/2021/06/page/2/index.html"},{"revision":"f045bf68fa2901f001938d3379485946","url":"./archives/2021/index.html"},{"revision":"745dd3750c948d99ada53c14607366d7","url":"./archives/2021/page/2/index.html"},{"revision":"438755918fd408d515b10799991d0cbd","url":"./archives/index.html"},{"revision":"c3ff1676f048e9c93c8047be80c5533d","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"0a273ed62209dad482becc9fbf56be4b","url":"./bilibili/index.html"},{"revision":"7686ef84a7ab4b32181c60a4be1420d8","url":"./categories/index.html"},{"revision":"2bdcab376011ee5f47f13ee6e05baae6","url":"./categories/test/index.html"},{"revision":"758d4be6452ddfbfa6a3814caa5f2828","url":"./categories/博客搭建/index.html"},{"revision":"a875b0a53f347679dcc8d7e57e28f5f6","url":"./categories/程序/index.html"},{"revision":"b8e3d51b645a728bb555e216a35c122d","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"91a4b60cf1c62c0fdc731b42cfdf78b5","url":"./gallery/网站图片链接.html"},{"revision":"3ca545fca29cb13df3e9e47b6064f150","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"b81512af26fb30356c300b7b17337b68","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"195003dcaaf801eaea54fec7d78263e5","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"b707ccf3799921d47b984788654176d3","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"80f6495ca228b6958eaae7dd563d36fa","url":"./page/2/index.html"},{"revision":"d0d47d87ed9fb5748fa180a433a26aa5","url":"./post/28daef73/index.html"},{"revision":"a68b211cf80de93354cca8fd70ffacc3","url":"./post/28f332e5/index.html"},{"revision":"d5cf8ed71462b2e30098d365c8506fdc","url":"./post/38f64154/index.html"},{"revision":"3e8ea43c370f9b0bf719e1be7ca6aa61","url":"./post/4271b0f6/index.html"},{"revision":"03b5e23af513332dec4e86cd50a5a996","url":"./post/8c5e4b35/index.html"},{"revision":"5cb3866de4aeb0c09fb9c917f97b390b","url":"./post/8efd8d8a/index.html"},{"revision":"c09656efe9aa60bbe4fc2d90881fab99","url":"./post/b580d7ee/index.html"},{"revision":"118b61f27f9f0fefdaafc61b6191dc36","url":"./post/b6596b48/index.html"},{"revision":"47c97f4de6ebb617b011561882459cd9","url":"./post/ba71baad/index.html"},{"revision":"4b16ac3fb148f0ad9cf7cd07f00fd050","url":"./post/c66d090/index.html"},{"revision":"4c2d6a604e98696a386ac9678669ff3f","url":"./post/c8b7dc96/index.html"},{"revision":"a6986d39954d174f8fa10774dd817035","url":"./post/dc4c1419/index.html"},{"revision":"688420b6bd91c6ce662b6838a0a47138","url":"./post/de75e3e6/index.html"},{"revision":"8040b1dc21edaedffdc502477d19c366","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"bd4ab6799eb38f25d7cd034c03b9a9a8","url":"./search.xml"},{"revision":"d5ca971161883ba219e5ba230cbbcb7f","url":"./sitemap.xml"},{"revision":"ec66ccb540cb68cda47f9b6dbe6773d5","url":"./tags/butterfly/index.html"},{"revision":"eda499cddca351bd01393934c44cbe76","url":"./tags/code/index.html"},{"revision":"b3d4369f05d0e3c7969dc49ccd97b9b4","url":"./tags/hexo/index.html"},{"revision":"7b89a7fff151e741669ed47b520842fc","url":"./tags/hexo插件/index.html"},{"revision":"0571c9573e466398fd283d4d35459489","url":"./tags/index.html"},{"revision":"99c7d824c589de2be6410226e6581ef4","url":"./tags/npm/index.html"},{"revision":"9183319954f832d70695aa6c92a8b94d","url":"./tags/zzz/index.html"},{"revision":"dd28974f58867d3a452437d8a6fe76c4","url":"./tags/博客搭建/index.html"},{"revision":"af56b0a94561dac8384460c4d4bf3e08","url":"./tags/图床/index.html"}],{
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