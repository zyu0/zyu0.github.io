const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"08d3f83dec8c36cd3f5ddeb7e89f3a7e","url":"./404.html"},{"revision":"2a33a7e10b326045bc758e33a30f2aad","url":"./about/index.html"},{"revision":"c45ef46fc8dcc852f62255b24984982c","url":"./analysis/index.html"},{"revision":"5fa31b4623a89f7cf92bf01ef8d9e112","url":"./archives/2021/05/index.html"},{"revision":"51cb6a6d0f92b329239411eedc60689c","url":"./archives/2021/06/index.html"},{"revision":"ddc16c29e6eed77223e8a2690a4d4f2b","url":"./archives/2021/06/page/2/index.html"},{"revision":"e960c31ddc3ae48db4eeb74796aa5fca","url":"./archives/2021/07/index.html"},{"revision":"9b66ed06dd36a6ad87803c2e6fd71ec2","url":"./archives/2021/index.html"},{"revision":"b085f8e21597c561adc239ca06963c9e","url":"./archives/2021/page/2/index.html"},{"revision":"ecd5fae0c869b12fa61e52e106d86a1f","url":"./archives/2021/page/3/index.html"},{"revision":"aabe12ccda5a5c35222fff4326641ef6","url":"./archives/index.html"},{"revision":"efb5a34d83f3339ff0126b8633b213d4","url":"./archives/page/2/index.html"},{"revision":"d0e5459365902c63bc463b2d9ad35fc9","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"1d39bd228b336762471e80b53d488da3","url":"./bilibili/index.html"},{"revision":"ec07a6d0ed58ecaa1f5a9233e4e32c3c","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"1acb87b6a1ed9f94ce7cc9318eec1edc","url":"./categories/DCC/index.html"},{"revision":"1973195255eea1deb6209fca0bba9516","url":"./categories/DCC/Zbrush/index.html"},{"revision":"4a531fd70b980c6d86611255c5b3f4b0","url":"./categories/index.html"},{"revision":"95a1794f27b3912879a0253ce3a3f172","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"4c49ea949e6f92f2deedb6543590e8d0","url":"./categories/test/index.html"},{"revision":"a57d89a4ab19a2da62e07cd778353b39","url":"./categories/博客搭建/index.html"},{"revision":"1cba68ae101ed9f581eecf7391a4b956","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"892bfa50f25413bf900f43801599bcc9","url":"./categories/引擎/index.html"},{"revision":"1d234d005171b2d51ae4e083feab1cde","url":"./categories/引擎/UE4/index.html"},{"revision":"5cd712dca3385ef48c9ffab711e87bc1","url":"./categories/程序/index.html"},{"revision":"8b72dfc342225e0d260a1ece6528f4ed","url":"./categories/程序/python爬虫/index.html"},{"revision":"356f0c3921b873dcdff8275978a98cf7","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"4139b3a91df2b0c419b1fb68fe1dada1","url":"./categories/角色/index.html"},{"revision":"028659c86526270d021fd0363c2c14c3","url":"./categories/软件学习/index.html"},{"revision":"31f95fce19888c0ee27b5b3231a3c7c2","url":"./categories/软件学习/Zbrush/index.html"},{"revision":"9f7850e1a275b1081304eb398818cb4e","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"7609988829a1dddcc3ad9fa620daf113","url":"./gallery/网站图片链接.html"},{"revision":"46cd88be1a229eb1519c77e25159fa43","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"63dac4ec54f93f9b99da4f65e579d60e","url":"./img/siteicon/README.html"},{"revision":"2872e929645b66d73c926b207ae17935","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"1fe3891495ded2b1800c34de29433ff2","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"e6843c62c71ba99368259da054a9dd75","url":"./page/2/index.html"},{"revision":"a28cd523b0c584cd9da75a65921d6198","url":"./page/3/index.html"},{"revision":"8b1131e9dfc934d79eac7dfcbd3cc6ae","url":"./post/0/index.html"},{"revision":"4ebeb433b288ceb893fe9bb6e388ca76","url":"./post/28daef73/index.html"},{"revision":"7f88a6819f38d8845cd00e36701e2571","url":"./post/28f332e5/index.html"},{"revision":"d4549537fa939641eed6471927cb0950","url":"./post/38f64154/index.html"},{"revision":"7a52278b16068c77f8304467ee0973c4","url":"./post/3f3c7194/index.html"},{"revision":"ff4b4836ac2f254fe564375376100aad","url":"./post/4271b0f6/index.html"},{"revision":"dbe52010f46b79e832ac5211fa7c57a3","url":"./post/56cff1b2/index.html"},{"revision":"64fee8c72c1e58a577bc545140e5ffd6","url":"./post/6844ebc3/index.html"},{"revision":"121b4080f5da5c040d353eeac92b4b7e","url":"./post/70e43cff/index.html"},{"revision":"5004c12f9f34f13f0fd49ad8ac148fa3","url":"./post/76fd982a/index.html"},{"revision":"2bfcbdde061d0d5da5c40c9afbac2fd6","url":"./post/7a209fd7/index.html"},{"revision":"ca4853dbdc200045fbe797ad7a1a3a2a","url":"./post/986feafd/index.html"},{"revision":"cad7fe3e97d9e47d5614e2255fac465a","url":"./post/9987b8b8/index.html"},{"revision":"259d7f14832cb5321b67f382349a0612","url":"./post/a43a01f3/index.html"},{"revision":"004db48607c7f8f3ae195a5b24784850","url":"./post/ac842964/index.html"},{"revision":"0910e00e0de18a39fefb940156f0e56c","url":"./post/ae6cda05/index.html"},{"revision":"ee1ce8acc65e8f2945459fd531e39db9","url":"./post/af3eed3c/index.html"},{"revision":"6e602009623b1eac9f05ec385a293987","url":"./post/b580d7ee/index.html"},{"revision":"07d3d022bcf875b7c62dc64fb8ee0164","url":"./post/b6596b48/index.html"},{"revision":"4f0db92c7e48512b3f0c43a24732d173","url":"./post/b9218251/index.html"},{"revision":"320522d7e9875dc9ee3bc1421e30d904","url":"./post/ba71baad/index.html"},{"revision":"1afde666238608eb54d61752b6bfe291","url":"./post/c66d090/index.html"},{"revision":"f0cd3f51a1509972fece45e44041baca","url":"./post/c8b7dc96/index.html"},{"revision":"e9cac851cec3729a13c21760279e98fe","url":"./post/d92ccc1a/index.html"},{"revision":"a4d2fe3860f17b09b7a42f51c9500ec9","url":"./post/dc4c1419/index.html"},{"revision":"9200cd30e32851bf9bc7446e541454bc","url":"./post/f782b17c/index.html"},{"revision":"3df05be283e57b3348c6b528e8f7b3dd","url":"./random/index.html"},{"revision":"9106c19cf89f91b57d7cfa627d2b6309","url":"./search.xml"},{"revision":"c99c5d2bcedb5866a0007c4978689214","url":"./sitemap.xml"},{"revision":"538732ece5b8ef1fe6b4c7f5e24c8fa4","url":"./tags/3DsMAX/index.html"},{"revision":"3bd98c5e8a2780c5b7aa8694428f51b0","url":"./tags/butterfly/index.html"},{"revision":"c8ecaacbe598a983fc9e0f2a41c7068b","url":"./tags/code/index.html"},{"revision":"611c1bab9de147494ec0e02b3de45660","url":"./tags/hexo/index.html"},{"revision":"fe80813f8485ac4202c7c76d2c612d3c","url":"./tags/hexo插件/index.html"},{"revision":"53e9c3ce71dd1f9fc163af3207a822f7","url":"./tags/index.html"},{"revision":"b26adba8de74377441f1393c74d555a6","url":"./tags/npm/index.html"},{"revision":"820a43f4a4da247f8a1b3753888b164d","url":"./tags/python/index.html"},{"revision":"40f6f3d52f6b2ba75385a4a5d07dbf14","url":"./tags/python爬虫/index.html"},{"revision":"d88dc3dd323e0aa5160129daffd198d3","url":"./tags/test/index.html"},{"revision":"c0d22e8f561de2351b313a7ca4983a1f","url":"./tags/Web/index.html"},{"revision":"30b53e06f5e78716ff2ee4de001294d0","url":"./tags/博客搭建/index.html"},{"revision":"35fbb2a6c2a0dff561b334b58b7ca12b","url":"./tags/图床/index.html"},{"revision":"f987d9e44459948f6c921a004e1129d3","url":"./tags/引擎/index.html"}],{
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