const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bc4cf854da9d9f83d13ef3558893ca4b","url":"./404.html"},{"revision":"e10d85df19beb9eeb8115e6c78398d13","url":"./about/index.html"},{"revision":"ee586be8fe71658e5779440759f18589","url":"./analysis/index.html"},{"revision":"2e297f715fd9b60547cdaa466802ab93","url":"./archives/2021/05/index.html"},{"revision":"8158108768aef78f3397a7076260ea93","url":"./archives/2021/06/index.html"},{"revision":"e77d8b24cfe68ab202ee45f097e0e510","url":"./archives/2021/06/page/2/index.html"},{"revision":"d879bf04f8084e973ccd3eb4c7591fd4","url":"./archives/2021/06/page/3/index.html"},{"revision":"da7224350db6167eee20fbd953236463","url":"./archives/2021/index.html"},{"revision":"66d8c6882a9777912302ab0b03e0eaad","url":"./archives/2021/page/2/index.html"},{"revision":"910009754ecbbd830d7bd9c4ede94642","url":"./archives/2021/page/3/index.html"},{"revision":"ff67c66ddca08326e19fd9a734dde012","url":"./archives/index.html"},{"revision":"e29fd9c445d4163ae51cf730f32dea63","url":"./archives/page/2/index.html"},{"revision":"bff1fd0197346e9de1da524689b2bf05","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"0131ca815806fbdae19387f2b31bcfba","url":"./bilibili/index.html"},{"revision":"9512b822a474181a3998a3b8506ca518","url":"./categories/DCC/index.html"},{"revision":"25834259b2cb2222e3a4ff923c5d9f99","url":"./categories/index.html"},{"revision":"9473235f1a6ee58df6600d116ae4a4e4","url":"./categories/test/index.html"},{"revision":"abc4f476606a1e20a9427f4ef29ee67a","url":"./categories/博客搭建/index.html"},{"revision":"70ac58ff7af3bfb9613e2a9124417e30","url":"./categories/博客搭建/page/2/index.html"},{"revision":"0ddb2ca12017fe717790974e21f56bc1","url":"./categories/明清彩画研究/index.html"},{"revision":"f8f366bf5aac856c0ec851ddbbe746c0","url":"./categories/沙发/index.html"},{"revision":"ace0ced6cc3ed531b4a3a57fd5e0dd75","url":"./categories/程序/index.html"},{"revision":"62aba598e1ac686ce534178dc37219ea","url":"./categories/程序/python爬虫/index.html"},{"revision":"70dd54d44fafa28d91ba5c129269269c","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"585c90ef1f0c07f0b88bdf8d8cc2a3f8","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b12ff90fdd34a2f202a8ce82afc32f19","url":"./gallery/网站图片链接.html"},{"revision":"68308b9a377680ff529eafa4d2d56b86","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"7859834d07e400bd35d44226103f1e1a","url":"./img/siteicon/README.html"},{"revision":"78d4663a2006b6e5b08da660468f6821","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ac2fd7c4a7e75a94011c3e6aa86c3c7e","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"8668987c026df7fe15f60d0f2ab20915","url":"./page/2/index.html"},{"revision":"03ff166946a58e92d4b9356b8a458cca","url":"./page/3/index.html"},{"revision":"286321fbbe569f3b8594ff9ec496914c","url":"./post/0/index.html"},{"revision":"d4ca233844314f8e25d6d4dd22b8fa35","url":"./post/28daef73/index.html"},{"revision":"a04f9024d09de1a078c501f9adf80b30","url":"./post/28f332e5/index.html"},{"revision":"602e86f17bce999cc279d2c13571c5c7","url":"./post/38f64154/index.html"},{"revision":"eac4cbdd9c0c822ea1a1ac9f70db179b","url":"./post/4271b0f6/index.html"},{"revision":"a7b896cee05fd434c9e6fe8d4448c8bb","url":"./post/4faa997b/index.html"},{"revision":"8ed36dd2733201947fb980da9a98c62c","url":"./post/70e43cff/index.html"},{"revision":"67d89fb75b3faded1d9e8c8bad7060ab","url":"./post/8c5e4b35/index.html"},{"revision":"d816d265107f29b704d31c6813f4157d","url":"./post/8efd8d8a/index.html"},{"revision":"fb4474da9abe98d7fd3717f3a85196c7","url":"./post/9987b8b8/index.html"},{"revision":"aa30c44aecd4f2719668320d21998e97","url":"./post/ae6cda05/index.html"},{"revision":"37b42c174c47dfd069882d7b0501b0e1","url":"./post/af3eed3c/index.html"},{"revision":"06916d2c3798f0c5522c6d91624991f9","url":"./post/b580d7ee/index.html"},{"revision":"cd698be5706cb0023490ab2319717a83","url":"./post/b6596b48/index.html"},{"revision":"e2974fa179c012d26454e64064d00283","url":"./post/b9218251/index.html"},{"revision":"19855db69ba1660ef3b70fccf4892b90","url":"./post/ba71baad/index.html"},{"revision":"500f70b858edbe81cb98e0e2064b08a8","url":"./post/c66d090/index.html"},{"revision":"d72e9f3180370057f55bdc4550b1edf1","url":"./post/c8b7dc96/index.html"},{"revision":"0a5febe74a5ea46b021216bfa5e0d00e","url":"./post/ca4c5287/index.html"},{"revision":"7020f8bb79aa20dd83c87a2376d08b9d","url":"./post/d92ccc1a/index.html"},{"revision":"6e41fbc44318199fd1418fa7b2a944cf","url":"./post/dc4c1419/index.html"},{"revision":"234e25c8b9931e55ac05e7e6e3a52523","url":"./post/de75e3e6/index.html"},{"revision":"6623cf131c42219b8d75ba4d69fb12dc","url":"./post/f782b17c/index.html"},{"revision":"1bc662424bfc9174a693dd13e86e3036","url":"./post/f8915431/index.html"},{"revision":"e679303688b2b1b8855890ebce98fc37","url":"./random/index.html"},{"revision":"756dced1d597c6c54b3ae252c390b30e","url":"./search.xml"},{"revision":"fb016732c9ec21ad635fefc70f4e7220","url":"./sitemap.xml"},{"revision":"fe6faf2a16cdd04f0e12a66b591e7a49","url":"./tags/butterfly/index.html"},{"revision":"80cb15d7a2570b15669bb79f76a0a519","url":"./tags/code/index.html"},{"revision":"b625fb8a215cc7b178bcdf03aa1c503e","url":"./tags/hexo/index.html"},{"revision":"ec07e8aa7bbe489b99192555c6cefc81","url":"./tags/hexo插件/index.html"},{"revision":"427646f99aa1700585f09d73d97ddfbb","url":"./tags/index.html"},{"revision":"3292d2a611c270496b2ad812b1010c26","url":"./tags/npm/index.html"},{"revision":"f89da25e10a94c0f3b3697f4e15c5359","url":"./tags/python/index.html"},{"revision":"be657085f4c442acf70de5eec1c7e79c","url":"./tags/python爬虫/index.html"},{"revision":"7f26e6fa0ca7ea57017dd462f3149e2e","url":"./tags/Web/index.html"},{"revision":"084f589d63d43d0ee43af8dcb310a474","url":"./tags/zzz/index.html"},{"revision":"592b8755173b7b508b5e12cc05307d36","url":"./tags/博客搭建/index.html"},{"revision":"138cdaffe77dccfe53aef2a3b34bfaac","url":"./tags/图床/index.html"}],{
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