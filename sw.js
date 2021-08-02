const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"290b603cf0e7e69dbf6ad061703c13dd","url":"./404.html"},{"revision":"a4b2ea442629d25b4723cd6301a94712","url":"./about/index.html"},{"revision":"40d9012dc393a60b39659e950226ea1d","url":"./analysis/index.html"},{"revision":"2f3e272ad155004d80ea925e63abf50e","url":"./archives/2021/05/index.html"},{"revision":"7780bdd90ac2cfe7b30fe1d8b2251310","url":"./archives/2021/06/index.html"},{"revision":"86a2f95673a0fd2e860b156db00fadc9","url":"./archives/2021/06/page/2/index.html"},{"revision":"070d71c65558c002fb37eff90dde858c","url":"./archives/2021/07/index.html"},{"revision":"e0e839be8fcc5198ce6d48ddbaaa32cc","url":"./archives/2021/08/index.html"},{"revision":"0809776a4175516d23f5569653fc150b","url":"./archives/2021/index.html"},{"revision":"a47903c0a39f5bf7f75611605d88beb0","url":"./archives/2021/page/2/index.html"},{"revision":"d0eb630dee96c69bb64b03e3d5af05fb","url":"./archives/2021/page/3/index.html"},{"revision":"93e9b844d7207bdb2b407042f7568264","url":"./archives/index.html"},{"revision":"278a6048cc5e8f9e28c867af193bd234","url":"./archives/page/2/index.html"},{"revision":"19f851c792eaaa4efad70b90536d2a82","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"071322db246fad85964be68f425bfdae","url":"./bilibili/index.html"},{"revision":"bf5091340f61f1304e7a4c2ea536bb68","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"8444d75002acbac1df9792e525cd54fd","url":"./categories/DCC/index.html"},{"revision":"07eaa65404d0c5f8ddc0ab9a6f442f03","url":"./categories/DCC/Zbrush/index.html"},{"revision":"a73905788b8f1c871ba57213db78925f","url":"./categories/index.html"},{"revision":"211d1ed74f9b38389a1047d82f5f7614","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"b244f2918a968cd8924439ac36c20f17","url":"./categories/test/index.html"},{"revision":"34b1e3f4e37abc11c7e936e5a027cd2c","url":"./categories/博客搭建/index.html"},{"revision":"a141fc05ab84773c7421bad4b13e22a7","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"84f9399e1a2b9c2c03dc4ab7d0928a72","url":"./categories/引擎/index.html"},{"revision":"b7c45c6037122d552b29c219e5e8497d","url":"./categories/引擎/UE4/index.html"},{"revision":"090144f9cb957d4184b16ab138356556","url":"./categories/程序/index.html"},{"revision":"bfba0394f575dc575ea4010e6fae1cbc","url":"./categories/程序/python爬虫/index.html"},{"revision":"09ccae4e72f18152dd02ca94807396c0","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"977e5331e1a1d91ef1cb79629c91ef51","url":"./categories/角色/index.html"},{"revision":"a195271482c6f7b1f4029145e94b07de","url":"./categories/软件学习/index.html"},{"revision":"39fb973ff477626a2fd4aa71baa36a52","url":"./categories/软件学习/Zbrush/index.html"},{"revision":"50bfd6c407125b5af5b95ac9df42ceba","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"6bcf66aa1c33c3f6ca823283ccd77bba","url":"./gallery/网站图片链接.html"},{"revision":"6228709252ccfd1a0850a210c622be6d","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"e23dee4ff50fa4cbe76a54efa6fa0000","url":"./img/siteicon/README.html"},{"revision":"35d7162f2a77714ce46f194315e77c24","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"a9467d982b76cf4fd72c0d1010506956","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"0c733eee62775c01e0d44cde34e382fb","url":"./page/2/index.html"},{"revision":"20db82553603e8f6e1f1bcfba8e40a7d","url":"./page/3/index.html"},{"revision":"985498067fb0b00cfbb2217ddd5a69a5","url":"./post/0/index.html"},{"revision":"4ebeb433b288ceb893fe9bb6e388ca76","url":"./post/28daef73/index.html"},{"revision":"38d07a2e03bc05ade3c8b699b0dcf5f9","url":"./post/28f332e5/index.html"},{"revision":"c2681d798658853190f12ef3bd877a48","url":"./post/38f64154/index.html"},{"revision":"75002dde5ebfda65dddb58b8e3feeb64","url":"./post/3f3c7194/index.html"},{"revision":"d7e9a14de9a90cd14f4ec04854c995e6","url":"./post/4271b0f6/index.html"},{"revision":"459db0b2949e32ca97b8ca33c310beb5","url":"./post/56cff1b2/index.html"},{"revision":"3705eae31031c22ee466278674bcae69","url":"./post/6844ebc3/index.html"},{"revision":"ac3e2f25c3a14780294581c9b59f9a29","url":"./post/70e43cff/index.html"},{"revision":"60f01ca0b391768222ba53b6f4ec4d77","url":"./post/76fd982a/index.html"},{"revision":"7fd376e9f7a124e13af741bd59a0e9f2","url":"./post/7a209fd7/index.html"},{"revision":"ca4853dbdc200045fbe797ad7a1a3a2a","url":"./post/986feafd/index.html"},{"revision":"bbfd6db005612dbb6d094d383644a9aa","url":"./post/9987b8b8/index.html"},{"revision":"9d13b361d7ab8102406d0059176c6d68","url":"./post/a43a01f3/index.html"},{"revision":"3a9860859240ec5fff516bba893f87f8","url":"./post/ac842964/index.html"},{"revision":"e501d7721b41d31de61a2652d440f86f","url":"./post/ae6cda05/index.html"},{"revision":"d2e1dba4338593d2d1b2ed9aab79e1f8","url":"./post/af3eed3c/index.html"},{"revision":"69386f1e1f2ca09ec561abc7b056fd40","url":"./post/b580d7ee/index.html"},{"revision":"ff797a3ee01e6aa827c1f2fe3fa9b9f5","url":"./post/b6596b48/index.html"},{"revision":"7b4620ed7cb6c670e9f93d69f0a3ff11","url":"./post/b9218251/index.html"},{"revision":"d679c8ad627443eca8df0fdd2ff23e5c","url":"./post/ba71baad/index.html"},{"revision":"19ec32484ee7486b2dfaf30b85f89965","url":"./post/c66d090/index.html"},{"revision":"1082ba7752e9f0db9c6e1b2e57e6582f","url":"./post/c8b7dc96/index.html"},{"revision":"50538907ab94bc193f4b253d8bdd9c23","url":"./post/d92ccc1a/index.html"},{"revision":"86011f35f97de41ec96e26ca4b346948","url":"./post/dc4c1419/index.html"},{"revision":"bc89e501dbb92c560d8c417910de8d00","url":"./post/f782b17c/index.html"},{"revision":"3df05be283e57b3348c6b528e8f7b3dd","url":"./random/index.html"},{"revision":"159311bdc68e2e5db35a70b574ae3139","url":"./search.xml"},{"revision":"593136b1668aaa760dd51aacd520b16e","url":"./sitemap.xml"},{"revision":"31df53016624c8d1d76aada3f60a7da5","url":"./tags/3DsMAX/index.html"},{"revision":"eb552113d2b4f96869a14ea8a3e68c84","url":"./tags/butterfly/index.html"},{"revision":"43ab9cc82225a1ed7f40229554a1f24e","url":"./tags/code/index.html"},{"revision":"e580cffb8fe4cf8fbd1475cbbe926b09","url":"./tags/hexo/index.html"},{"revision":"a7a5a41d425b52f7b8ee5fd1a31d89b7","url":"./tags/hexo插件/index.html"},{"revision":"2c922abe2f256d87bb2de92c3c044e79","url":"./tags/index.html"},{"revision":"369497b64e142d357329452a48ad6be4","url":"./tags/npm/index.html"},{"revision":"e9a8b46078262449f5c3d135a994780c","url":"./tags/python/index.html"},{"revision":"45ecfadf3997dc69afdb4e87ef6b2b73","url":"./tags/python爬虫/index.html"},{"revision":"b5c71dbd3bd39de843a00156ba1cfb28","url":"./tags/test/index.html"},{"revision":"c6f9fc194643cdb47fb62736bd54e0d7","url":"./tags/Web/index.html"},{"revision":"02774d08a09a5f77d5baf8dda718f4b4","url":"./tags/博客搭建/index.html"},{"revision":"44914f1a67d12146d14ff22d9ab5dfc5","url":"./tags/图床/index.html"},{"revision":"24e2f76f2ea5f6548d1497c40173383a","url":"./tags/引擎/index.html"}],{
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