const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"6af56db4b66f720f9c5d2478de724aba","url":"./404.html"},{"revision":"fdef387e59a67eb9339e3cc02ff595ee","url":"./about/index.html"},{"revision":"3c0c79cd1aa79cbd1e13087692237c8b","url":"./analysis/index.html"},{"revision":"797a4003f983428ab9a4ebb2a3c76df6","url":"./archives/2021/05/index.html"},{"revision":"24d143562f01a9b5fc01f9fbf6ccce65","url":"./archives/2021/06/index.html"},{"revision":"bb2c5b0a74a85bb6484d42f60b44bacd","url":"./archives/2021/06/page/2/index.html"},{"revision":"a28d9eeaa1bcd498d43f5b0a95b1b6ed","url":"./archives/2021/07/index.html"},{"revision":"3fa04212abbe04811f780b3f5d1fc8cf","url":"./archives/2021/11/index.html"},{"revision":"69354ba2c22530c78e9b44d8bc4d188b","url":"./archives/2021/12/index.html"},{"revision":"862830a9874a072d55f52b651c8dc9f4","url":"./archives/2021/index.html"},{"revision":"dcc75ab3aa0ff50da16567593a70b418","url":"./archives/2021/page/2/index.html"},{"revision":"d1b599a31d0c98d02f29fab46e64acdc","url":"./archives/2021/page/3/index.html"},{"revision":"dd97f2efcc50b1410a41644e52708d39","url":"./archives/2021/page/4/index.html"},{"revision":"8cc4c409b6a34fb8708c5a3310567c3b","url":"./archives/index.html"},{"revision":"cbc1970afa33561708c672324f8a933a","url":"./archives/page/2/index.html"},{"revision":"efa0dda9b8a727e08a6ec2a820fec056","url":"./archives/page/3/index.html"},{"revision":"ecff6391f181811361df4cbf18ce864f","url":"./archives/page/4/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"65757cc219c521b9f6297f5db0f6956a","url":"./bilibili/index.html"},{"revision":"0469fd7f5174c80351d127c4e154258e","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"eb3e63e17ca9c82c87c3897883957920","url":"./categories/DCC/Houdini/index.html"},{"revision":"4ce19c60d18f98df237812d08d575a55","url":"./categories/DCC/index.html"},{"revision":"376626a05dac383ee68d850b76bcd479","url":"./categories/DCC/Zbrush/index.html"},{"revision":"e18f16273d16a79e5fb8d1b20336f719","url":"./categories/index.html"},{"revision":"2435b7a66a811d1185456185d64f0e54","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"d98946cd8dd15ed64f9b6470a7904916","url":"./categories/test/index.html"},{"revision":"9f0ddeee7fea32b83caa375eeee6fc16","url":"./categories/博客搭建/index.html"},{"revision":"bea147643064618b4ad9ade9189fa5fa","url":"./categories/博客搭建/page/2/index.html"},{"revision":"50f6419c424c5a01b977e6c22d5c2d43","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"0762accc76a56a4cc24b2652d0a02843","url":"./categories/引擎/index.html"},{"revision":"ca1602fa5fe76e805b5d28095f2d672b","url":"./categories/引擎/UE4/index.html"},{"revision":"1303dd1ae020e171877ff3cac7cf7e64","url":"./categories/彩画/index.html"},{"revision":"28622c85d46886d9783ab693718e9ff2","url":"./categories/彩画/第一章/index.html"},{"revision":"1cdf9dac8c283fd39f885b7ff1e5e7a5","url":"./categories/彩画/第二章/index.html"},{"revision":"54b53437229a07ea45cd88bec699d12e","url":"./categories/程序/index.html"},{"revision":"2c1b9373d800245fb6f95560cff427d2","url":"./categories/程序/python爬虫/index.html"},{"revision":"605669784aea49db5835211d2f4895a7","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"0201413d8bc6fb12c1aab7e881a85b2c","url":"./categories/角色/index.html"},{"revision":"6f9371f6dbffa2a87ea393c5349a744c","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"7121c4e187f9b5b393c4fa1a73e67b45","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cafc791877a4d186e1d2802fce2e1f4d","url":"./gallery/网站图片链接.html"},{"revision":"9ea299dcbb0b8810305ad1d688636a69","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"ac282c9b3016670efa003a8a70bb7ed1","url":"./img/siteicon/README.html"},{"revision":"d8ccfe4f4023999a0e7fd411ed88e898","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60f667388545117d77e3de417d0388f1","url":"./link/index.html"},{"revision":"239da4fb2c03a14821585ccbb13a049e","url":"./logo/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"6dc1430fc44583a539f6b9e7e50142cb","url":"./page/2/index.html"},{"revision":"4d272010e030d5c71c75163ef7b0b4a8","url":"./page/3/index.html"},{"revision":"1cdbcd1d407a901425f9216261d83d32","url":"./page/4/index.html"},{"revision":"3ac6922fb82b88d6ca68e8611a5f3b7d","url":"./post/170d2fe2/index.html"},{"revision":"14da354ef9fa349e6e45689672da6df9","url":"./post/173605b1/index.html"},{"revision":"834f9fe3e7426fca5f499e8bfc50878a","url":"./post/28daef73/index.html"},{"revision":"7f604e5df10a4db54a00837232c3cf7d","url":"./post/28f332e5/index.html"},{"revision":"b444794f5c551075b430672d69c19bd9","url":"./post/348b109c/index.html"},{"revision":"af505f38092514f91a6bc67b660b74e0","url":"./post/38f64154/index.html"},{"revision":"a963642acad144404557118082559ebc","url":"./post/3f3c7194/index.html"},{"revision":"3f86d7ffb68f0fc051cc7a370d562fd0","url":"./post/4271b0f6/index.html"},{"revision":"28ab6c860206cdf8d195c1681b17825d","url":"./post/4363013c/index.html"},{"revision":"876ad27603386eff1bc14ebba969cabf","url":"./post/56cff1b2/index.html"},{"revision":"4184966c27950f1fa49d24269d24c277","url":"./post/6844ebc3/index.html"},{"revision":"bd6d980804b5765ff7508d7d29bc29d5","url":"./post/70e43cff/index.html"},{"revision":"0e43089a1f555f2ffee11737bbc8cce0","url":"./post/76fd982a/index.html"},{"revision":"89d6335db5655ead85cd2ed45f80757c","url":"./post/7a209fd7/index.html"},{"revision":"f40c65d994f8c76e252de306df4fa5f6","url":"./post/7e6a05f4/index.html"},{"revision":"b25d209104f9d45501c89b152b866717","url":"./post/8da956c3/index.html"},{"revision":"b2275305cf8e666e77d0bd5e5f68cf5d","url":"./post/938ce57e/index.html"},{"revision":"40f113da5b002f0aa69ced51853af606","url":"./post/986feafd/index.html"},{"revision":"515a69d4c48ca5bca7571b61332a4be8","url":"./post/9987b8b8/index.html"},{"revision":"14fde55157c9f4b58f37c4c33c873809","url":"./post/ac842964/index.html"},{"revision":"1f376fe108eb74c0a33bb8be5b1da375","url":"./post/ae6cda05/index.html"},{"revision":"50bacc4fa25b2221ffc4472e5d3fec64","url":"./post/af3eed3c/index.html"},{"revision":"77bb80ec77526332b46dc0e002dcce57","url":"./post/b6596b48/index.html"},{"revision":"7c47e1b3f24ebe25e855aee64d62c970","url":"./post/b72795da/index.html"},{"revision":"34a1c059309bf574a9fe1068a9309f21","url":"./post/b9218251/index.html"},{"revision":"974e42abc9325fb9981ff7c318e8f9e5","url":"./post/ba71baad/index.html"},{"revision":"eb4468c37cc6959e2a9a49cd8d4b3c84","url":"./post/bc60c27b/index.html"},{"revision":"0e1bd6e356a1e5928e0e720f8a46c9be","url":"./post/c66d090/index.html"},{"revision":"518d169c89a919a208807577c75db6e4","url":"./post/c8b7dc96/index.html"},{"revision":"d25f4260de3e8437abf0fcf8c78ddc60","url":"./post/d92ccc1a/index.html"},{"revision":"a94ce028f441b674cd176efa41b9c37e","url":"./post/dc4c1419/index.html"},{"revision":"d9af03095b749886d06246b04f92fee4","url":"./post/e94e613d/index.html"},{"revision":"75e6f322cdcd678b30fe1673c37a821a","url":"./post/ed9d3ffc/index.html"},{"revision":"4eff84ef527d9f5f6255523527e8b58b","url":"./post/f4b7132e/index.html"},{"revision":"f7d8bb1698575f260b0a34372b65e613","url":"./post/f782b17c/index.html"},{"revision":"de3706974d266fb5b810622ceedac805","url":"./post/f82aee66/index.html"},{"revision":"0683dfe726f1d53c016d52a4f1f441b0","url":"./random/index.html"},{"revision":"1cf6566a0785300f6b39b7f666496975","url":"./search.xml"},{"revision":"d63ebaf31620eada8d077fe5231e9be4","url":"./sitemap.xml"},{"revision":"95ecc4c279672c0fb08b26a58f693351","url":"./tags/3DsMax/index.html"},{"revision":"e9bd0fd2fcf4f62773c6f6630a6147d9","url":"./tags/butterfly/index.html"},{"revision":"f5f8ec99da7ba1ab8c7a67151824ba22","url":"./tags/hexo/index.html"},{"revision":"e4cbece7520e9dc08e6ca63c0fb0cf08","url":"./tags/hexo插件/index.html"},{"revision":"87c7b3fbe78720261724c2dc98ec80af","url":"./tags/houdini/index.html"},{"revision":"9b9824203aec7a2b4b0aa1c6f9750101","url":"./tags/index.html"},{"revision":"724ecdafbe88ea756fb7b7714ccfd43a","url":"./tags/npm/index.html"},{"revision":"1c48c515a24c8582754a12cd60833503","url":"./tags/PicGo/index.html"},{"revision":"f0fca36ab09da8af48480663d84d9cb5","url":"./tags/python/index.html"},{"revision":"2532894c71869d426ecc30a900593a2b","url":"./tags/python爬虫/index.html"},{"revision":"15dfad9ab0a65b753426fa11661031f4","url":"./tags/test/index.html"},{"revision":"391d3b9c4dec63d6376b33ba9fd54145","url":"./tags/Zbrush/index.html"},{"revision":"d30858daeab7db50b028add897ff2dc8","url":"./tags/博客搭建/index.html"},{"revision":"3e89b2a4d8757a4c6c627d6b660f1555","url":"./tags/图床/index.html"},{"revision":"54f1f935a9f027bfc174ba7113099a7a","url":"./tags/引擎/index.html"},{"revision":"fa21888d1904d157969fdfdcf714f9b4","url":"./tags/彩画研究/index.html"},{"revision":"1443e212b546aca43a79c7395f69df44","url":"./tags/角色/index.html"},{"revision":"6f172460dd1b38576ca871ccdd3aaa43","url":"./tags/语言/index.html"}],{
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