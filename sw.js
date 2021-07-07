const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c8696a9ed08dbd0f9c398c7233c01474","url":"./404.html"},{"revision":"4e032e3c78eb5fff569407c508727754","url":"./about/index.html"},{"revision":"9e4cdf39ef99bafcb4675145cc72efdb","url":"./analysis/index.html"},{"revision":"aad6ae8a640c0701238ec864abd863b2","url":"./archives/2021/05/index.html"},{"revision":"c42d0e0dee16d4ceb7fff954c221f368","url":"./archives/2021/06/index.html"},{"revision":"9bcf334c273487aa710c56c97a155601","url":"./archives/2021/07/index.html"},{"revision":"07de25156a4e298fc2d2aee32d382f37","url":"./archives/2021/07/page/2/index.html"},{"revision":"ef511997f41564bed3311bde4e4736fa","url":"./archives/2021/index.html"},{"revision":"fd37ea0c2275b2d12a33f850e2a40dd1","url":"./archives/2021/page/2/index.html"},{"revision":"d252dd0f6a1bc62c600a59d3f7e5cf01","url":"./archives/2021/page/3/index.html"},{"revision":"e10f49f90255be13795c76cf36e61afd","url":"./archives/index.html"},{"revision":"c8a95940d689bb75859b4c2eec2545b3","url":"./archives/page/2/index.html"},{"revision":"3ea0c263dce54f4440d0534134d73215","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"80d3c27a098cd21578c86e72ddb13724","url":"./bilibili/index.html"},{"revision":"f2343285831894b216113f1ca5e474eb","url":"./categories/DCC/index.html"},{"revision":"c1c6c3b792ce2011dd69fb589f63cdd8","url":"./categories/index.html"},{"revision":"78be837ba4f84c308ac9d0fcbf4b8a02","url":"./categories/test/index.html"},{"revision":"95b64a01679330f47e8cf25a7efcb381","url":"./categories/博客搭建/index.html"},{"revision":"8c536ec93d35650dfedeb50d308798fe","url":"./categories/博客搭建/page/2/index.html"},{"revision":"fb41be1e25df500fdc6275587652336e","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"49be0c0fcba18f5cd544cffc72f52d3e","url":"./categories/引擎/index.html"},{"revision":"dadbcb383fe014fde93c2d52534942d8","url":"./categories/程序/index.html"},{"revision":"5c49923b66f626dfc42291521c1e136b","url":"./categories/程序/python爬虫/index.html"},{"revision":"d278ef5a61eac33e8ef77e9aa58cd8dd","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"8df8e73a55869fe5d4a64d78bbf1382c","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b412ef13b11eda52027040eac58d7e09","url":"./gallery/网站图片链接.html"},{"revision":"77806fabc45a9308db7d48afca65c641","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"8ddc21aaa8431e00ccf919aeadd14d44","url":"./img/siteicon/README.html"},{"revision":"42b193a20b2d244f2f8bfb587b8c2e2f","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"d264b16e5908918fd248a4bf8bc2f463","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"afc969b71a8502862ccc537a30fe9c06","url":"./page/2/index.html"},{"revision":"f978f25c574a48bd5f410592585373a1","url":"./page/3/index.html"},{"revision":"3f3ef9e02ed88911746f6dadd27e4059","url":"./post/0/index.html"},{"revision":"768a2a1038b3a8de49f49e2423281efc","url":"./post/28daef73/index.html"},{"revision":"aac476e008d34f5761654066fd7f5e1d","url":"./post/28f332e5/index.html"},{"revision":"9c2b717542a4f9b83a8113a37844dedf","url":"./post/38f64154/index.html"},{"revision":"08d8df0384f1b484f9aa88f674ebdf93","url":"./post/4271b0f6/index.html"},{"revision":"4698b7bd083f7cbf915be01fda11ccb4","url":"./post/70e43cff/index.html"},{"revision":"c4e610254c045614b084a3306a452027","url":"./post/7a209fd7/index.html"},{"revision":"14183c0b99998401a8f65cdc91631b16","url":"./post/8c5e4b35/index.html"},{"revision":"b6416e8bf1f1b623e791af38f9d48692","url":"./post/8efd8d8a/index.html"},{"revision":"d160ed9f5c20fc3262bf47c7d00c0af0","url":"./post/986feafd/index.html"},{"revision":"b6768dbf69cc24b2e6b265238ff41364","url":"./post/9987b8b8/index.html"},{"revision":"e3ceef43de85238b7618645c8bca2ea6","url":"./post/ae6cda05/index.html"},{"revision":"4b0a171f121ad33c59f67e666f12c682","url":"./post/af3eed3c/index.html"},{"revision":"d84b05ec9e88721244638914b6dddd2c","url":"./post/b580d7ee/index.html"},{"revision":"1402899de696b32c5b461cf4d5a48f78","url":"./post/b6596b48/index.html"},{"revision":"9b39332f5b32bebf4811a00382d32e70","url":"./post/b9218251/index.html"},{"revision":"10af9e2b9da27cc3f058d22a7d899e53","url":"./post/ba71baad/index.html"},{"revision":"00de14297acbfc81116d59ac95495304","url":"./post/c66d090/index.html"},{"revision":"0973318135d1fcd9a257d608d23a2714","url":"./post/c8b7dc96/index.html"},{"revision":"f519c87cad43394394bd53df1fc2b03f","url":"./post/d92ccc1a/index.html"},{"revision":"bc560caa97e017cbbb9118ff74edba44","url":"./post/dc4c1419/index.html"},{"revision":"91cb649051245c643c022e89d9925715","url":"./post/de75e3e6/index.html"},{"revision":"474c8a18158138b4a35e764503cab9dc","url":"./post/f782b17c/index.html"},{"revision":"ac07bf8a5c6dbf17681738e568053397","url":"./post/f8915431/index.html"},{"revision":"c16a99fa0f5ddeeb2335ede02a7199f5","url":"./random/index.html"},{"revision":"9eb163c706689d0a542df45b114b3665","url":"./search.xml"},{"revision":"686ce668a1bd5dc113d5f9c6c929aae4","url":"./sitemap.xml"},{"revision":"8994aaba3cc89ad3883c19dbde871ae8","url":"./tags/butterfly/index.html"},{"revision":"b362878a12bc5cb8b5971ce242b52d46","url":"./tags/code/index.html"},{"revision":"f703a27c2e952ccc85788c9396c1403d","url":"./tags/hexo/index.html"},{"revision":"d5a255aab6582ad0900d8bb5dcc9e4ce","url":"./tags/hexo插件/index.html"},{"revision":"7fe47c07889a3f17eebbf2ed4b3a47f4","url":"./tags/index.html"},{"revision":"17e9adbb2576b2dcc91e7458ea0a0b6a","url":"./tags/npm/index.html"},{"revision":"8e730f246c05473fae1e6a9136b29b10","url":"./tags/python/index.html"},{"revision":"718d16921983eb4dbd671ae731b86bd8","url":"./tags/python爬虫/index.html"},{"revision":"9dae49cbc9394f60a50a5fb057d0eb05","url":"./tags/Web/index.html"},{"revision":"044f20c7b60c326770aec9969aaae449","url":"./tags/zzz/index.html"},{"revision":"ae83291b918bd0fad71465082db7dd75","url":"./tags/博客搭建/index.html"},{"revision":"1defe1e457920e876b190d5a8611cef7","url":"./tags/图床/index.html"},{"revision":"5981c6378bfc94e433653a540d225cc5","url":"./tags/引擎/index.html"}],{
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