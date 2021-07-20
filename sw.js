const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8120311a4e1b001d2d55a5afa80780e8","url":"./404.html"},{"revision":"ff9fc6e080e19a6508454835bf6fb30c","url":"./about/index.html"},{"revision":"b563c80bc8dadf31174389284738db6e","url":"./analysis/index.html"},{"revision":"b024084610d200047776000d9306e8f0","url":"./archives/2021/05/index.html"},{"revision":"7d11c36ca8030776f1b06418e84552f2","url":"./archives/2021/06/index.html"},{"revision":"ec76c2abb40b45cef20f9c72a28cd109","url":"./archives/2021/06/page/2/index.html"},{"revision":"b7fea936e642f8cbcab56d528d480d37","url":"./archives/2021/07/index.html"},{"revision":"c76fe1a4feec1781cd3b7beefe4514e0","url":"./archives/2021/index.html"},{"revision":"24b350d7991782c13a23963a85dbfccc","url":"./archives/2021/page/2/index.html"},{"revision":"03bf55754d1b79ae110a6b8f7e7bd3ad","url":"./archives/2021/page/3/index.html"},{"revision":"2bcd5b1205ec5f652231de260f9d74a3","url":"./archives/index.html"},{"revision":"313b922f5ee7c6756bf45e0b0f383c0b","url":"./archives/page/2/index.html"},{"revision":"4e05ce9ebf76717452c38c37d2881dbb","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"76025280ae783541ce95e3fa72e570b8","url":"./bilibili/index.html"},{"revision":"6bebeddbcdbc0e1a2d861b66d6bbe68b","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"81895076e6c2b34f5381c5b768bbe5dc","url":"./categories/DCC/index.html"},{"revision":"912a5ef5c3c42c53c3f01538ccd45c0c","url":"./categories/DCC/Zbrush/index.html"},{"revision":"77ba7304d5f78b3bfb8add288105d601","url":"./categories/index.html"},{"revision":"c7fa1f80502ffd4157aa7eae529bce46","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"3a3aa7cfdf8df68487c4781f3d543507","url":"./categories/test/index.html"},{"revision":"3480ac5c68729af7467f61f1294a45bf","url":"./categories/博客搭建/index.html"},{"revision":"90d6517f8c08a1a8845af8370b24976e","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"297a5d25f7ce066f67c4f602836e7834","url":"./categories/引擎/index.html"},{"revision":"7a9fd9a4f1e0ec24281b03809b40d79d","url":"./categories/引擎/UE4/index.html"},{"revision":"cac365ed66e048fa4fbc2b84138e2119","url":"./categories/程序/index.html"},{"revision":"144237958c709670bafcb36337d6ab0e","url":"./categories/程序/python爬虫/index.html"},{"revision":"dccbfcbce1719555dd58b55a8574c4bc","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"31744df94848b999f8b39171e9d36fab","url":"./categories/角色/index.html"},{"revision":"e9b80b5fb020d1e626b8dc0292e51cbd","url":"./categories/软件学习/index.html"},{"revision":"08b9cad3a4e78c2e5d427a0474dd57aa","url":"./categories/软件学习/Zbrush/index.html"},{"revision":"f67399121043c781ce99e89e1d87f96c","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3c0d2a8005c2911f531076860a6602b6","url":"./gallery/网站图片链接.html"},{"revision":"5fd593817d8cfbb1973f4a69caa178fb","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"bcb7778eac9db0c68a0ae0280e745949","url":"./img/siteicon/README.html"},{"revision":"588ee59890c46531340443a2dcc37042","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ef55398e583a73091ed148e23fc60514","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"e6bcf930a4dc448719fd55d90204416e","url":"./page/2/index.html"},{"revision":"5706daa2e700535dfc36ef5a8329b1b4","url":"./page/3/index.html"},{"revision":"38283204fbc4c14931196d0a0e199745","url":"./post/0/index.html"},{"revision":"4ebeb433b288ceb893fe9bb6e388ca76","url":"./post/28daef73/index.html"},{"revision":"694376016a5808e93e13102ac2bf6834","url":"./post/28f332e5/index.html"},{"revision":"0190445e89fae6e89dc9ae1d067c1146","url":"./post/38f64154/index.html"},{"revision":"279e28b690734fb10c185e45fa536468","url":"./post/3f3c7194/index.html"},{"revision":"b93abe73e789ee1b6db658cb82545e50","url":"./post/4271b0f6/index.html"},{"revision":"6bbb337deb8979ce07093ad4cc046535","url":"./post/56cff1b2/index.html"},{"revision":"3128964415240fff752f022e1edfba9e","url":"./post/6844ebc3/index.html"},{"revision":"45d5e91d541b7e38d4ab4d357a0367c6","url":"./post/70e43cff/index.html"},{"revision":"b81755dec77d62cdaec1b3f69c83cf16","url":"./post/76fd982a/index.html"},{"revision":"53149beb44a139717ffc815d37c8927a","url":"./post/7a209fd7/index.html"},{"revision":"ca4853dbdc200045fbe797ad7a1a3a2a","url":"./post/986feafd/index.html"},{"revision":"9deebf83ecaad5c915b6513100163dd5","url":"./post/9987b8b8/index.html"},{"revision":"220fb5c0fcba49c6b878a63e07d744df","url":"./post/a43a01f3/index.html"},{"revision":"a9b413f11d5f3c13bed2fbd7aa9627c6","url":"./post/ac842964/index.html"},{"revision":"75c869ef9c093b4bc9b98e71fcec6e32","url":"./post/ae6cda05/index.html"},{"revision":"8b7c71236b430448a8e170f78802e167","url":"./post/af3eed3c/index.html"},{"revision":"4545f1bbc30dfcc55aa053ef7bfc3997","url":"./post/b580d7ee/index.html"},{"revision":"8c4b2a622ba3c619293d03e331a13169","url":"./post/b6596b48/index.html"},{"revision":"9ba5366917d51c7800e8d1b8b413297f","url":"./post/b9218251/index.html"},{"revision":"d9a518638102d7069727caedc3457421","url":"./post/ba71baad/index.html"},{"revision":"12f7df53539e73322408016baa238d76","url":"./post/c66d090/index.html"},{"revision":"764fedddc2608ae371b9d28c2e6eea2d","url":"./post/c8b7dc96/index.html"},{"revision":"6b7ba71330f521acce23baab18d5ff16","url":"./post/d92ccc1a/index.html"},{"revision":"7e376c9a28abc6141ee92efef396ee98","url":"./post/dc4c1419/index.html"},{"revision":"635dc4ba718c9b0cbf27c69f2a9b1a96","url":"./post/f782b17c/index.html"},{"revision":"3df05be283e57b3348c6b528e8f7b3dd","url":"./random/index.html"},{"revision":"159311bdc68e2e5db35a70b574ae3139","url":"./search.xml"},{"revision":"a43ae73ce2150478046231aed691e021","url":"./sitemap.xml"},{"revision":"709bc81755969127a0dd159952b9091c","url":"./tags/3DsMAX/index.html"},{"revision":"dcd2e9847865900ce51d52366605ce2c","url":"./tags/butterfly/index.html"},{"revision":"f3a62ae13e4629f1d3623e81d4eab54b","url":"./tags/code/index.html"},{"revision":"625f3411487eec9694a0e1ec4c6a552b","url":"./tags/hexo/index.html"},{"revision":"1484eacdce6ebd3edb143d2da475c469","url":"./tags/hexo插件/index.html"},{"revision":"81b46e74bf3b1a3887c3c7216841311f","url":"./tags/index.html"},{"revision":"685fd92d44a5002dadd9f40badeecd65","url":"./tags/npm/index.html"},{"revision":"6730718c8c8b36ffb47cdee1c3221c52","url":"./tags/python/index.html"},{"revision":"82bc4069b7e75784809251cc8ecc258a","url":"./tags/python爬虫/index.html"},{"revision":"40fb8a245b90c25b493952fb600a1863","url":"./tags/test/index.html"},{"revision":"b94b39ccb187b187ab33291d3d5e7290","url":"./tags/Web/index.html"},{"revision":"7b696357197c1df89c24f9c0502f7bc6","url":"./tags/博客搭建/index.html"},{"revision":"a9906f800779ffdacf438ca0650c26d1","url":"./tags/图床/index.html"},{"revision":"2c55869a11d1211ecc1984ab631a045a","url":"./tags/引擎/index.html"}],{
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