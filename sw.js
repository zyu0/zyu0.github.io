const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"36874c2959ca966a517626a7e324ccc7","url":"./404.html"},{"revision":"ab9b7de21fed3e822668bdbe079c035c","url":"./about/index.html"},{"revision":"ceb5e4c51c7c24fa82c9b251076d8540","url":"./analysis/index.html"},{"revision":"226660f374124150b9ea4055f94ebe89","url":"./archives/2021/05/index.html"},{"revision":"a5abe2174cbfda597e01729eacc26d84","url":"./archives/2021/06/index.html"},{"revision":"d3371bb7cd34b7925e55d980eac9b267","url":"./archives/2021/07/index.html"},{"revision":"fa5ed4e426736db141702328b44fb46d","url":"./archives/2021/08/index.html"},{"revision":"1c7f0e21a2097df5d800b269f5db8e80","url":"./archives/2021/11/index.html"},{"revision":"8a1c4e60558001edf6d4e26a38d47fda","url":"./archives/2021/index.html"},{"revision":"5cfb65018007c150d4c909de13eb27a6","url":"./archives/2021/page/2/index.html"},{"revision":"2f316fd26d022584624c2d59e528b453","url":"./archives/2021/page/3/index.html"},{"revision":"937db316c4baf32cf0396e66bc219ad0","url":"./archives/index.html"},{"revision":"4a832b0271b44c76fe6eae1f7b5cb233","url":"./archives/page/2/index.html"},{"revision":"7a4855930baa561cbf2e7ccd74ea9d07","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"7de07b1e1177d7870413ff53f03f6e35","url":"./bilibili/index.html"},{"revision":"66cdf8a1f207f35025eb087121890a66","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"43445179abd55c5e4923936d1dab3479","url":"./categories/DCC/index.html"},{"revision":"e1a9fdf8acdaa24fe6368ba45e3b0a67","url":"./categories/DCC/Zbrush/index.html"},{"revision":"de4facaed0c17db69f2066c6d5e1feef","url":"./categories/index.html"},{"revision":"c7c1e710816aee1e174f91db677eca56","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"413ba53bbb5172a913b6f32e0f781cf9","url":"./categories/test/index.html"},{"revision":"5bb0f8d4ece32a7cda7ed30d1b78e9fe","url":"./categories/博客搭建/index.html"},{"revision":"07498f060b83fa0664c66c06d4d80ab9","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"dcfbf386ec8ff539e0ebf6fc0e6087f6","url":"./categories/引擎/index.html"},{"revision":"1ef2642e3ef990b8628dd78399fd8de1","url":"./categories/引擎/UE4/index.html"},{"revision":"1e9a958e1088250d9feb0a05314eda27","url":"./categories/模板1/index.html"},{"revision":"4680aa234c004088f1e2191ae861da2a","url":"./categories/程序/index.html"},{"revision":"972d955a2ae3a9331f710767f8e6a8bd","url":"./categories/程序/python爬虫/index.html"},{"revision":"3705da0a64715d9e33065f1df044093d","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"94f378677036de9038fb16c3a3d0fc65","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"db93d6a1a947740bd45443f8f56b7fad","url":"./gallery/网站图片链接.html"},{"revision":"0fa9c00c4db7c18e84f253aa490c5a87","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"2aeb5c436c56df6a9fac9dad7f025b73","url":"./img/siteicon/README.html"},{"revision":"883bef0ad10baab356804c466f4838e7","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5a9d7cffdfbba5566722f3392854cb31","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"acb37881a1077e1613a1de204fa8d8ec","url":"./page/2/index.html"},{"revision":"48cd60b25ebf9af89e71eddf9d74f6e4","url":"./page/3/index.html"},{"revision":"231e0fd8b2875b8c2311ad2e4b1140f5","url":"./post/0/index.html"},{"revision":"08b84399cd706e8c36c5a7241898dafc","url":"./post/28daef73/index.html"},{"revision":"31ab20762470debab35cad48bf4238c4","url":"./post/28f332e5/index.html"},{"revision":"3bd61da2a7e45cef4ab3d2bd4d9cd581","url":"./post/38f64154/index.html"},{"revision":"20d01f9831200406adcc7747ce8ff1c4","url":"./post/3f3c7194/index.html"},{"revision":"5b0688ffbd7c8bda3cbeff89a836bf01","url":"./post/4271b0f6/index.html"},{"revision":"bf049404c78a4b4c19c00d3c534af102","url":"./post/7a209fd7/index.html"},{"revision":"c6e84c3e2c3356bbcfa63ec8ace5877a","url":"./post/986feafd/index.html"},{"revision":"81be2589c9be5a171cfbe68207a79a3a","url":"./post/9987b8b8/index.html"},{"revision":"d18f85ea29bb4aeea33fd2c83a6e9bab","url":"./post/ac842964/index.html"},{"revision":"6d877c9e35ed509f1e2b808fdd8b5f6e","url":"./post/ae6cda05/index.html"},{"revision":"03c999eb0423fe1be5b827dc9fb47ffa","url":"./post/af3eed3c/index.html"},{"revision":"5c19a268942302658ecfd9fdef46c8c9","url":"./post/b6596b48/index.html"},{"revision":"0895c8feb20424768dbc21eafc799b03","url":"./post/b9218251/index.html"},{"revision":"30b77010a05e2f84cbcffb39e79eb629","url":"./post/ba71baad/index.html"},{"revision":"fe43bce257f11e694ff0257ddfde9163","url":"./post/bc60c27b/index.html"},{"revision":"55d59801cf38a12cfef71525d65350ee","url":"./post/c3498269/index.html"},{"revision":"02207c947e73dde32c3cfbf0786c9a80","url":"./post/c8b7dc96/index.html"},{"revision":"f037f2cc3485478e14ee91ab9f759694","url":"./post/d92ccc1a/index.html"},{"revision":"13419cc0381fe27fc521e37d7331baed","url":"./post/dc4c1419/index.html"},{"revision":"be723436d0cba6b02b6d0ab3864ae132","url":"./post/f4b7132e/index.html"},{"revision":"b1c8ff72d1087ad3c6d995a1d8ea2734","url":"./post/f782b17c/index.html"},{"revision":"b717380e91ea6a2e66cad45cbcf18caa","url":"./random/index.html"},{"revision":"c1533410c88c2198eb916589212f25d2","url":"./search.xml"},{"revision":"ca61ad23b52415472c47955c7306ab62","url":"./sitemap.xml"},{"revision":"0d48a43ece644b1a905d1983d6140fc5","url":"./tags/3DsMax/index.html"},{"revision":"be60fc2387e4aec035c2d1257ae38f13","url":"./tags/3DsMAx/index.html"},{"revision":"2eb683d14ce2570e9e56ca71112dc548","url":"./tags/butterfly/index.html"},{"revision":"727640dad34437c50f7aa27d94697915","url":"./tags/hexo/index.html"},{"revision":"2112167b8f7ce973d5d3d7b3888bb498","url":"./tags/hexo插件/index.html"},{"revision":"0734536dc9508a8f984518228b1b0b37","url":"./tags/index.html"},{"revision":"5e9074f0736c6e1dd22a40243ead6032","url":"./tags/npm/index.html"},{"revision":"a4a13fc16fdbc170a3f7f3f1bdbb2b90","url":"./tags/PicGo/index.html"},{"revision":"27c2e4c83c0ad733fe8c1dcfddc41ced","url":"./tags/python爬虫/index.html"},{"revision":"420a5b3bfd5e7658cf11ab945eca1a73","url":"./tags/test/index.html"},{"revision":"3ad88f74438ef36b30437b3136abdecf","url":"./tags/Zbrush/index.html"},{"revision":"51365656afae30348c67ec57e96b3f3b","url":"./tags/博客搭建/index.html"},{"revision":"9eed53041aa0cc1e1b01de78d384d426","url":"./tags/图床/index.html"},{"revision":"c1e953661c65e783db5e10b12337701e","url":"./tags/引擎/index.html"}],{
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