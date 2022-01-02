const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2d57cb568adbd01095cfa592db089a34","url":"./404.html"},{"revision":"b69b32e9999d89907a4e26d1e372ef42","url":"./about/index.html"},{"revision":"53682cc5d0d3acc4c7535c12306497d8","url":"./analysis/index.html"},{"revision":"863c53c9dfd78af816a05a1533a180be","url":"./archives/2021/05/index.html"},{"revision":"3c0bb52504df8ea3334fa0e9e72de8bf","url":"./archives/2021/06/index.html"},{"revision":"55ed9a3280246ab649488778399b13bd","url":"./archives/2021/06/page/2/index.html"},{"revision":"0b727fe3e15c04da2cd727e23a6c414b","url":"./archives/2021/07/index.html"},{"revision":"ec841be052e6076f74684b7fe589b376","url":"./archives/2021/11/index.html"},{"revision":"8ffec157ef62cb6b0e289b18798a7a29","url":"./archives/2021/12/index.html"},{"revision":"5305b614c590283748ad98c0f0712b71","url":"./archives/2021/index.html"},{"revision":"4b7986bcbca76bde6f6eed8e5f3f92f4","url":"./archives/2021/page/2/index.html"},{"revision":"7abb2bb5655130405a9c3050763a9955","url":"./archives/2021/page/3/index.html"},{"revision":"ef70652f28f9dc3accb92efa6406bc3e","url":"./archives/2021/page/4/index.html"},{"revision":"da2440d71308631f89426dff28b88d64","url":"./archives/2022/01/index.html"},{"revision":"24b5d2f53476ca335d46fc2220b43535","url":"./archives/2022/index.html"},{"revision":"1c79e31949dea1c3780a51292744e510","url":"./archives/index.html"},{"revision":"a63789993a591f8f3eff6f43706df10f","url":"./archives/page/2/index.html"},{"revision":"46bc66963f6969b47dc97808fc75cbb3","url":"./archives/page/3/index.html"},{"revision":"22f051979dc60837bd69478dc0279df2","url":"./archives/page/4/index.html"},{"revision":"690adeff3f41c5915353f4b94c32e258","url":"./archives/page/5/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"c73b469411275bf5014cf97d8d32bdb3","url":"./bilibili/index.html"},{"revision":"7b9a2973ba08e16555d6eed24e151036","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"d484929c8749634190b2b25775283a46","url":"./categories/DCC/Houdini/index.html"},{"revision":"c3817d5a7489f0abf995930ac9e455e7","url":"./categories/DCC/index.html"},{"revision":"50110de02c7e1f1b531b1c9a40a74cbe","url":"./categories/DCC/Zbrush/index.html"},{"revision":"a3b5cfb6e42f27043c9bc523eb08afbc","url":"./categories/index.html"},{"revision":"6115fbff039b93e5fb7bb99c149cac60","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"8cc01f4622cad7e9853fbfa99b9a94be","url":"./categories/test/index.html"},{"revision":"8200830edcf6afc1cba9844988e48bc3","url":"./categories/博客搭建/index.html"},{"revision":"0c89e1d762ec0e31b92c8c08ea6c52e5","url":"./categories/博客搭建/page/2/index.html"},{"revision":"a698a11e3bd38f6b365fe733eae309d2","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"9f4ce5408baa9493c1f805f9194eb95c","url":"./categories/引擎/index.html"},{"revision":"f581fc0e98c1b2d7abc65d695538b3e5","url":"./categories/引擎/UE4/index.html"},{"revision":"7539b93606efee71e3f39933526bdd63","url":"./categories/引擎/Unity/index.html"},{"revision":"fb8033948fb60857c520eb591952d6a3","url":"./categories/彩画/index.html"},{"revision":"6cd2f45a1b493c102fd09a988a6f240a","url":"./categories/彩画/第一章/index.html"},{"revision":"2cffad6d33ea8ddfd6c4dda998e7f036","url":"./categories/彩画/第二章/index.html"},{"revision":"45a55bb8638f021f629baf3329f633ab","url":"./categories/程序/index.html"},{"revision":"0481c6c38aa8ebaedd9f8fbc1f1ccd29","url":"./categories/程序/page/2/index.html"},{"revision":"f739bc1bd2c4a7787bbe97e626489554","url":"./categories/程序/python/index.html"},{"revision":"0c9c2bef594fe7cd4d070df697eda24b","url":"./categories/程序/python/page/2/index.html"},{"revision":"423a1b8400f5b393fe7897b581be53ca","url":"./categories/程序/python/爬虫/index.html"},{"revision":"d8e46ecced4211b30f8c74b44e83a62f","url":"./categories/角色/index.html"},{"revision":"b4d72c0a0c2d23e97da09fc781546c23","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"7121c4e187f9b5b393c4fa1a73e67b45","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b76ae9f49ed4a1466a82f67a9b5a6fca","url":"./gallery/网站图片链接.html"},{"revision":"e597455063f009fadf48df0ebe321e08","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"f7d4bee8805ea381999ccc30a01ee46f","url":"./img/siteicon/README.html"},{"revision":"b5ae85601b961ab8a52803812a5bd67b","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"0a4cd49f37c1bd6415d401aab3411340","url":"./link/index.html"},{"revision":"239da4fb2c03a14821585ccbb13a049e","url":"./logo/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"0a0ce54a7a8536e6bb0207b767079474","url":"./page/2/index.html"},{"revision":"5dcb5dececbc5abbe6f3bf2d569dc26d","url":"./page/3/index.html"},{"revision":"db1c724bb744b5cbbb26f510bb9ff29b","url":"./page/4/index.html"},{"revision":"ae722bd66903f706e8c256f566f39ebd","url":"./page/5/index.html"},{"revision":"efe419c5cf2c748038de5a55a4de53b5","url":"./post/170d2fe2/index.html"},{"revision":"25db2310d10f7fedfc664283ad5f037c","url":"./post/173605b1/index.html"},{"revision":"ec335dbd55d08df44d7f331d5f6f0a6c","url":"./post/28daef73/index.html"},{"revision":"9edce766b0a5aead24b33881d057db72","url":"./post/28f332e5/index.html"},{"revision":"17debb16a5ff4288121933b6b61e162d","url":"./post/348b109c/index.html"},{"revision":"9403bdecb0fd857661831ed336c2b1b2","url":"./post/38f64154/index.html"},{"revision":"3f8f0bfac5f56c24ebc4735a37704e44","url":"./post/3f3c7194/index.html"},{"revision":"d0dacb9f26cf9749002eb388ea57dda4","url":"./post/4271b0f6/index.html"},{"revision":"a0e50f6c952b8ef162d23ccd6f849ce7","url":"./post/4363013c/index.html"},{"revision":"bb5a956cf720c26cea6b36a033428684","url":"./post/468b416d/index.html"},{"revision":"b552d26c37ff32e4eb47fc450a5dc4e8","url":"./post/56cff1b2/index.html"},{"revision":"84bd4e314740d25da5d87f08c607c347","url":"./post/66c9ec0b/index.html"},{"revision":"2714e8a41189a2c5e5db706e52a181d1","url":"./post/6844ebc3/index.html"},{"revision":"9c17165f5d1ea1d90b8d4d387a03d463","url":"./post/70e43cff/index.html"},{"revision":"165d43b0355f05df28431b89044ce52b","url":"./post/76fd982a/index.html"},{"revision":"0461becee3ba436d82472f312cb1e305","url":"./post/7a209fd7/index.html"},{"revision":"955be6c69eb694161e92c409f9bc81d0","url":"./post/7e6a05f4/index.html"},{"revision":"ccaae4c98fc5dfc45ba9a782a393f0af","url":"./post/8da956c3/index.html"},{"revision":"2374441852693138069265157d11362e","url":"./post/938ce57e/index.html"},{"revision":"afb409d37445b13930be0648421054bc","url":"./post/986feafd/index.html"},{"revision":"2d30710d0b6ac3e3c0bc1552efd8da57","url":"./post/9987b8b8/index.html"},{"revision":"880112920af90de0c679f83e9b401930","url":"./post/ac842964/index.html"},{"revision":"b39697c59720dd9a50cf6fd8548978d6","url":"./post/aca041db/index.html"},{"revision":"4529400be0328130ea39ac227313baab","url":"./post/ae6cda05/index.html"},{"revision":"b84e8d90cdcf699fbc24a78e90a4d821","url":"./post/ae9afd3e/index.html"},{"revision":"3f7e29b36e20708389fa1c1733d96d02","url":"./post/af3eed3c/index.html"},{"revision":"8e837e25cf05f962e96021bd2b12cd60","url":"./post/b6596b48/index.html"},{"revision":"2293e663ec9ed746639d6dbc796703d8","url":"./post/b72795da/index.html"},{"revision":"ad8bc31973c48e6c3bfdc5cf6d8745a6","url":"./post/b9218251/index.html"},{"revision":"781d694dff9fee8044b278cbecaca9b7","url":"./post/ba71baad/index.html"},{"revision":"c6022aecff19682bbed57b38426ea587","url":"./post/bc60c27b/index.html"},{"revision":"24c77c171d24395b353c33d32fa6fe05","url":"./post/c66d090/index.html"},{"revision":"a1d064a17b5ecb867d89b15e82f1d989","url":"./post/c8b7dc96/index.html"},{"revision":"868add996e69d8c8e0490637c7fa51bf","url":"./post/cf06d04a/index.html"},{"revision":"d5abfe2a8c3b6dd161c0c3210532aa77","url":"./post/d92ccc1a/index.html"},{"revision":"84c1827e5354e15634a24abd6cf847fc","url":"./post/dc4c1419/index.html"},{"revision":"e76e364eb0f9b2760823532c16c605d4","url":"./post/e94e613d/index.html"},{"revision":"9511bc14636fa9ab9af053bec594e678","url":"./post/ed9d3ffc/index.html"},{"revision":"2dd904f26575f2df61ee6ee1216e5497","url":"./post/f4b7132e/index.html"},{"revision":"2be49f442cefcf448cbfef14f35c9dd6","url":"./post/f782b17c/index.html"},{"revision":"eb6ad0eedec8e2e0a1d957788d882dfa","url":"./post/f82aee66/index.html"},{"revision":"e2ee2422bee4dc0b027d9ef990986309","url":"./random/index.html"},{"revision":"4440070c5ab0e2ebcef26247e5d8c101","url":"./search.xml"},{"revision":"7a5886f8ce07869d6094fac523128204","url":"./sitemap.xml"},{"revision":"0bc985b9ece7d84778014e9b0e1f7b5c","url":"./tags/3DsMax/index.html"},{"revision":"92e6533356def4400187b8f30a08ddbd","url":"./tags/butterfly/index.html"},{"revision":"668a53ca43503837ad3814f7e854b427","url":"./tags/hexo/index.html"},{"revision":"96aece03c34282417821ff421872fed1","url":"./tags/hexo插件/index.html"},{"revision":"f0a7afa190b2857ed0ed3a8a4de80610","url":"./tags/houdini/index.html"},{"revision":"04f773b0624087ea018c8e374ff51e2e","url":"./tags/index.html"},{"revision":"7b64fe68e37ea5ed372e77410911d4f1","url":"./tags/npm/index.html"},{"revision":"4c63dc76ebe11bb0007b1f15fc8e45c2","url":"./tags/PicGo/index.html"},{"revision":"0234520a3ea1ad303722d97d7458bd4c","url":"./tags/python/index.html"},{"revision":"6f9373d80916302e0c594c02701308af","url":"./tags/python爬虫/index.html"},{"revision":"ad080f44e1dec0382f7a716589bac8e0","url":"./tags/test/index.html"},{"revision":"a35e1c283bfb18594ef2d036cad8bc86","url":"./tags/Unity/index.html"},{"revision":"b58b5a96e2e24a8533c9bdd6b294a1b9","url":"./tags/Zbrush/index.html"},{"revision":"ab33a06c88b16008ec4aeef1cc9a8f28","url":"./tags/博客搭建/index.html"},{"revision":"f159e4a268dd98e539f0a99945d96c97","url":"./tags/图床/index.html"},{"revision":"22b5565360a46d5a076234a508ba2998","url":"./tags/引擎/index.html"},{"revision":"399e0b8aec6113ac7ff56d356d771373","url":"./tags/彩画研究/index.html"},{"revision":"03272515d3a13019ac72652564e66323","url":"./tags/程序/index.html"},{"revision":"5cc244b0f19f39792429d3b1c7ec6c6e","url":"./tags/角色/index.html"},{"revision":"7a7840eab91470c2808c01954857a9cf","url":"./tags/语言/index.html"}],{
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