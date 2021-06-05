const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c4ae5a9eae03cbb79f06abaaa14a85ee","url":"./404.html"},{"revision":"1834959f69bd0e0042fcd035849438da","url":"./about/index.html"},{"revision":"db295c21b28a39153efd07596592f69c","url":"./analysis/index.html"},{"revision":"bcc2d45d6109b9182293833ebafac2fb","url":"./archives/2021/05/index.html"},{"revision":"d635b3b10e5062711f8d42aa5a591458","url":"./archives/2021/06/index.html"},{"revision":"f3d6e295bce37a8377e3541087f0b9dc","url":"./archives/2021/06/page/2/index.html"},{"revision":"9825d0e1324c71ab7c3097f6c3a4acb5","url":"./archives/2021/index.html"},{"revision":"1fd12375b330a983f151230d2c3173e8","url":"./archives/2021/page/2/index.html"},{"revision":"68e02276383724b0074aebd6180d363f","url":"./archives/index.html"},{"revision":"2cf3123ec0d7812fb1a532981d31058c","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"901a669397e918ae053b94418781291b","url":"./bilibili/index.html"},{"revision":"fbe8f9bc3df49db114d33bcb3d47b74a","url":"./categories/index.html"},{"revision":"214946081a112ea4007e65a7d21bf38e","url":"./categories/test/index.html"},{"revision":"0b0527f689e28667c851c32527fd04fd","url":"./categories/博客搭建/index.html"},{"revision":"cb912a681fed61d5d38161dd877e23fd","url":"./categories/程序/index.html"},{"revision":"cf4b61a4a127970296b7bb0fa3859242","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"eadf0a6fd505f0ac6da6f661a36facaf","url":"./gallery/网站图片链接.html"},{"revision":"617b1081030786b93d8df1aeeea0faa9","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"4b8ce6c8d4d1ce6d4e4a0dc8cf01b324","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"1bf9d2234645a8793ce70dcce8628700","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"d23b541b1d2e78b4032d8402056fcc74","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"f3434cd4217a10ca4b8b60371e2b0f69","url":"./page/2/index.html"},{"revision":"50eb012ac74cfb0bad89ff5603db111a","url":"./post/28daef73/index.html"},{"revision":"752b086c5175a9ed1a349ecfecfa23b8","url":"./post/28f332e5/index.html"},{"revision":"b19acead9daee7f948a5cd160c693037","url":"./post/38f64154/index.html"},{"revision":"e8c4855bc030068d826ac4b39d357c8e","url":"./post/4271b0f6/index.html"},{"revision":"9f86913406fe7067880d54ea24c3ed8b","url":"./post/8c5e4b35/index.html"},{"revision":"71f6efcd81afac86074a897e1ee62e22","url":"./post/8efd8d8a/index.html"},{"revision":"3c0afb75d2bae22ec2f662b486458b92","url":"./post/b580d7ee/index.html"},{"revision":"294196bdee57696e78665e6e2b0c3731","url":"./post/b6596b48/index.html"},{"revision":"d6a41dad3f52f3667e97ad955561a8ac","url":"./post/ba71baad/index.html"},{"revision":"05867c3c1ec9ad16affbe37d699672e9","url":"./post/c66d090/index.html"},{"revision":"f0c64cbd90e52af6e4974b9408fb69c2","url":"./post/c8b7dc96/index.html"},{"revision":"a39100993364c1b8273b617ab9e61a16","url":"./post/dc4c1419/index.html"},{"revision":"f5e47998846dddcb9b2484ec887d4584","url":"./post/de75e3e6/index.html"},{"revision":"fe2ca7daa1158be43e0d942a4b53747e","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"46a0e5198aabd688b34f42caf06f2bad","url":"./search.xml"},{"revision":"d5ca971161883ba219e5ba230cbbcb7f","url":"./sitemap.xml"},{"revision":"40a8b47329cbfbc21cd593e3d974eded","url":"./tags/butterfly/index.html"},{"revision":"6c11ef4fda377deca0f916457c28b785","url":"./tags/code/index.html"},{"revision":"d022aa1c1ed11deb95e6028f2a32fa17","url":"./tags/hexo/index.html"},{"revision":"315af58be9188e574e7f990f56fef3d8","url":"./tags/hexo插件/index.html"},{"revision":"2fa0936aed83d2537995b058e069f853","url":"./tags/index.html"},{"revision":"4aae9d05765ff4cbae6c3cbff9fab5ae","url":"./tags/npm/index.html"},{"revision":"274fbe33e8e82fd941e9cd66e8aa99d3","url":"./tags/zzz/index.html"},{"revision":"2426f1639fa8895bf740eacab0c4ebfb","url":"./tags/博客搭建/index.html"},{"revision":"e15be5d00b2b96bae0a65879eba0b7d3","url":"./tags/图床/index.html"}],{
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