const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b443d87633a4802fd1c67e155dd630c9","url":"./404.html"},{"revision":"d14b8f8b6a6452d42750663729b492d1","url":"./about/index.html"},{"revision":"cd99a87e81955be8bca18b52a9ccda84","url":"./analysis/index.html"},{"revision":"e2febec323c37b94230fbb4360c5c6cb","url":"./archives/2021/05/index.html"},{"revision":"ef619af719c6e415e2fe148288c6a45b","url":"./archives/2021/06/index.html"},{"revision":"ec8a7344c3f980b43aa86c57bfd7a1cf","url":"./archives/2021/06/page/2/index.html"},{"revision":"52ecb63bc50f5212e9b3517fdd2a55b8","url":"./archives/2021/index.html"},{"revision":"fa53a6e0b9a9d65f57184b0d555a1f61","url":"./archives/2021/page/2/index.html"},{"revision":"d731ad848dff9a06084a96eac6136283","url":"./archives/index.html"},{"revision":"4683fa35ceec7905ec9fc01f7313ed94","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"9c300f5a273954a7d364edb511e37013","url":"./bilibili/index.html"},{"revision":"1a6bcd2d01e8decf0e88a169f68bd4f8","url":"./categories/index.html"},{"revision":"94234195a4541560b230a8ebbb667d22","url":"./categories/test/index.html"},{"revision":"ca12c8e07d14754c89e812eaf9a1d3cf","url":"./categories/博客搭建/index.html"},{"revision":"00cf262db38e9766e44f436ba9a14124","url":"./categories/程序/index.html"},{"revision":"c5d3e6fd261bcdae0c94d181b449fc5f","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"ecf48259262d4c92519341c286c93fdd","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9d4a673d7cbec0c50615bbae3bce91de","url":"./gallery/网站图片链接.html"},{"revision":"b8fc5bce4919461d7e9872ed87f707dc","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"d214052daa7cabf5c53e22bb421b957b","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"3e3527fb0bdc3eeeeafbfcb03c820ecc","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"910097b75c6ef089e30bbc8a1d50c860","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"b348954761c19eae1b3e41bf0de3b21d","url":"./page/2/index.html"},{"revision":"237181b71f7d29d08f137e5306078389","url":"./post/28daef73/index.html"},{"revision":"dc20a8a1be1d3172ff906eab8382c2a7","url":"./post/28f332e5/index.html"},{"revision":"3254f127c6017a947b0dc32fa8083eb4","url":"./post/38f64154/index.html"},{"revision":"4a368ece06fcc968e83ef184d96c4140","url":"./post/4271b0f6/index.html"},{"revision":"239e2a874a14c00c119c587cd4e87bde","url":"./post/8c5e4b35/index.html"},{"revision":"48dd30738bbaf70ae0f475ec77a44a93","url":"./post/8efd8d8a/index.html"},{"revision":"536b944560c3f1fe8d085a6f999b9d3b","url":"./post/b580d7ee/index.html"},{"revision":"7accc7139cc87d3b955b5eee634aa403","url":"./post/b6596b48/index.html"},{"revision":"f92c1c8e9cdd9ff725c1060dd3e01ec7","url":"./post/ba71baad/index.html"},{"revision":"0e301620698d0241a72c5075aed8ee0c","url":"./post/c66d090/index.html"},{"revision":"fc6b9b3ebc04d69a97906d15ad0174b0","url":"./post/c8b7dc96/index.html"},{"revision":"817c7e22c26a8b4a595cd4c28c2603bd","url":"./post/dc4c1419/index.html"},{"revision":"83aea352457b76ed7c8946f447c989eb","url":"./post/de75e3e6/index.html"},{"revision":"fca29710be3527327b1f4afaa0029787","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"34c390685a1e040b9fd1da629b355808","url":"./search.xml"},{"revision":"67aa30f6546c63c5d54b1975e475895a","url":"./sitemap.xml"},{"revision":"2339b88fc7338d233fe5f622062510c5","url":"./tags/butterfly/index.html"},{"revision":"300f3f60407e152574c5dc0a091f99c0","url":"./tags/code/index.html"},{"revision":"c0a794e59b924f2d35dcb0b52bc865b1","url":"./tags/hexo/index.html"},{"revision":"86c1f5ab64f47b8fc4a3ccb4cff94482","url":"./tags/hexo插件/index.html"},{"revision":"2b571cf29d2e9fa9e72a97c7a0798e9b","url":"./tags/index.html"},{"revision":"e6f75bcb3788524aedd1d2944e2386af","url":"./tags/npm/index.html"},{"revision":"4de02216451795130dec1f202bf8cb74","url":"./tags/zzz/index.html"},{"revision":"0f190688d7461ab837ab00ea77a646c4","url":"./tags/博客搭建/index.html"},{"revision":"d9058243e994e95c39b71a81254d9d68","url":"./tags/图床/index.html"}],{
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