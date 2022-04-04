const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9d62beec4ed97ec762218d2a9d16cd8e","url":"./404.html"},{"revision":"42a56fc34fae44c1ac5808f60a996efb","url":"./about/index.html"},{"revision":"0fe2764dd66bb337d559d4f82b944852","url":"./analysis/index.html"},{"revision":"663061f05d9103b3e915454b3840a1f1","url":"./archives/2021/01/index.html"},{"revision":"b539de6020592e5f68c327ec3f8e8fc9","url":"./archives/2021/05/index.html"},{"revision":"ecb658d9a02c45ba5084353a9b623c75","url":"./archives/2021/06/index.html"},{"revision":"123e760d6d3d72f2a6bafb7adc8e7814","url":"./archives/2021/06/page/2/index.html"},{"revision":"8916674bbf6bc125360a43e7aa4f97b8","url":"./archives/2021/07/index.html"},{"revision":"bac31b3caf80b04c8d8133cb59f0db2f","url":"./archives/2021/11/index.html"},{"revision":"e6196bb0dd9f2d9027b2fa3045b347db","url":"./archives/2021/12/index.html"},{"revision":"35407bc15be4a9a2bcee486d08c981a7","url":"./archives/2021/index.html"},{"revision":"7b916cc2a7308282bd6819d89e85a86f","url":"./archives/2021/page/2/index.html"},{"revision":"9f2a05ceda60242c1cb3ef4ea2537c82","url":"./archives/2021/page/3/index.html"},{"revision":"a86e1218718e34b64af8df0ca927f6c8","url":"./archives/2021/page/4/index.html"},{"revision":"d55d006771b472a0c515020f500f43c3","url":"./archives/2021/page/5/index.html"},{"revision":"1a994697578a1e0f115c5b473af52dac","url":"./archives/index.html"},{"revision":"32dc870033058275297dddda5b18c48a","url":"./archives/page/2/index.html"},{"revision":"d7dac2b16af8c326d62d05a54a86576e","url":"./archives/page/3/index.html"},{"revision":"7a384f7d28e9a4b70d69b3eee54be335","url":"./archives/page/4/index.html"},{"revision":"7a1443ad61fd2e6cc7e2cbb69207ba98","url":"./archives/page/5/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"9992fb6cb66718da996e8d0727a3ed30","url":"./bilibili/index.html"},{"revision":"7dff3d7895791c5773a4bb0f40c6a91a","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"b9e1112ce81dfa92f68470ad789d84b5","url":"./categories/DCC/Houdini/index.html"},{"revision":"24a92bc7295365f6884afa4d0d88faa7","url":"./categories/DCC/index.html"},{"revision":"1edad9f8e827860eb4952ea4ed6df007","url":"./categories/DCC/Zbrush/index.html"},{"revision":"9d5da888ac7e87ecc06ca00371b45d97","url":"./categories/index.html"},{"revision":"b2da98f5fbc7523e3ac53d426e8b83cd","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"41094ba3fb55a694c8e9309f53019de3","url":"./categories/test/index.html"},{"revision":"280a2ca24d56a4b540b88cf9a58a2a3b","url":"./categories/博客搭建/index.html"},{"revision":"dc7e4330c3150244f7a24c9249fe1dde","url":"./categories/博客搭建/page/2/index.html"},{"revision":"ebaca03d8aa4c25eeb99cb2466f04b26","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"e90456320e85dd5543b82c43a1eed118","url":"./categories/引擎/index.html"},{"revision":"ac37cd926538ecb2677cf9f3b4b12d24","url":"./categories/引擎/UE4/index.html"},{"revision":"f7c31920508ea309a2e8766adb68edd2","url":"./categories/引擎/Unity/index.html"},{"revision":"e07b58e26b81337bda491590786fb5db","url":"./categories/彩画/index.html"},{"revision":"f57cdd4fba44b0bb473d3a2079698faf","url":"./categories/彩画/第一章/index.html"},{"revision":"720e01541ba56b9f65b3d71d1682efde","url":"./categories/彩画/第二章/index.html"},{"revision":"a65db9596f2513dc5a485b0ec0ed5ef6","url":"./categories/程序/index.html"},{"revision":"8a45241bba21e27025c6fc2f5d937a26","url":"./categories/程序/page/2/index.html"},{"revision":"8623f7f31941ba37112f4f3f81cbb9c9","url":"./categories/程序/python/index.html"},{"revision":"d10dfada71912d9516ef5db3358dd39c","url":"./categories/程序/python/page/2/index.html"},{"revision":"84a714ffc0797356d9bd73640dea7d39","url":"./categories/程序/python/爬虫/index.html"},{"revision":"80bc5b6f02fbd5abcad182f2976be319","url":"./categories/角色/index.html"},{"revision":"3293ab0a3ba5537a19811c81420b1cb3","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"7121c4e187f9b5b393c4fa1a73e67b45","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fd64f99386e034f7a9057229a400ed3f","url":"./gallery/网站图片链接.html"},{"revision":"0d095d932c94e7b71779568e09e821bd","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"82a4773c4dfa70e5477ba5fde814419d","url":"./img/siteicon/README.html"},{"revision":"07a9f1ba82b762c5d579101d6a393afc","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"0e7b40e3e27cf814bbd681172c1de7db","url":"./link/index.html"},{"revision":"239da4fb2c03a14821585ccbb13a049e","url":"./logo/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"17de6c79c4a2a776d9e3a28863d77cdb","url":"./page/2/index.html"},{"revision":"4532d8e1e753feec18ce46bf4cbcfddb","url":"./page/3/index.html"},{"revision":"a7c70c297025b70b158fd7d73b527f97","url":"./page/4/index.html"},{"revision":"e3e6a621429ab8531e90a71038accf5f","url":"./page/5/index.html"},{"revision":"0835725e22e0e0a2a93c0d6a848b6cd4","url":"./post/170d2fe2/index.html"},{"revision":"f3cf652a36ad2ace7e9174bdf59fe77f","url":"./post/173605b1/index.html"},{"revision":"2213c3a126856f344729595ccca78dc1","url":"./post/28daef73/index.html"},{"revision":"cf103283ff91615326bc24090fbf83c4","url":"./post/28f332e5/index.html"},{"revision":"208fc9027bab666603a3de4f84aaaf81","url":"./post/348b109c/index.html"},{"revision":"b85a30d5b75240dc63dda190dc7d09b0","url":"./post/38f64154/index.html"},{"revision":"bcfd1491c619ecdcfa89b1c64a96dc99","url":"./post/3f3c7194/index.html"},{"revision":"bb7e80c4371c5c438cdb7629de8cf3ca","url":"./post/4271b0f6/index.html"},{"revision":"7f1e31289fe07a33275c33ffe8fa0aec","url":"./post/4363013c/index.html"},{"revision":"42cf89bceb7d64f253b00cfb50abca7a","url":"./post/468b416d/index.html"},{"revision":"ac0c0f4a3f545d61bf20d18c083da1a0","url":"./post/56cff1b2/index.html"},{"revision":"81fcdc1d32eb7dcaf5d7d32bf33c23f7","url":"./post/5d253e07/index.html"},{"revision":"656753ee184a596fc640d032b1a00474","url":"./post/66c9ec0b/index.html"},{"revision":"8f3a7b7e8bef5e279f6eebcce4505573","url":"./post/6844ebc3/index.html"},{"revision":"3667bc7f485ad29049dea7eb1fe6a7f3","url":"./post/70e43cff/index.html"},{"revision":"a423804083d99d0fbee3c6fd68824cf2","url":"./post/76fd982a/index.html"},{"revision":"f4dd8ac819b76c393f0a75347895c3d6","url":"./post/7a209fd7/index.html"},{"revision":"74d7d641c562bdc31e85c5fd46609d57","url":"./post/7e6a05f4/index.html"},{"revision":"b26e3432e785a5eccc8cf9b303954329","url":"./post/8da956c3/index.html"},{"revision":"46467e3c05a1f62ecc015ef808c7ad55","url":"./post/938ce57e/index.html"},{"revision":"1d3e09b2330cfd92bf90b5b294a1ae2b","url":"./post/986feafd/index.html"},{"revision":"dd73430d9f1b9ed06c3f6dd1bcd3e656","url":"./post/9987b8b8/index.html"},{"revision":"30d83a4d6ec0f241bfe561d776e771a1","url":"./post/ac842964/index.html"},{"revision":"824e722e3a255ede1e462d92bbe22767","url":"./post/ae6cda05/index.html"},{"revision":"31ceda74e68e7f6a2ed81e6ecad372c1","url":"./post/ae9afd3e/index.html"},{"revision":"a7642cd3380e2089cdeb210c05d0d5ac","url":"./post/af3eed3c/index.html"},{"revision":"b44f1eac087295cc5d40b53abd8deb76","url":"./post/b6596b48/index.html"},{"revision":"ca828746ae52861cf223bfa15fe74237","url":"./post/b72795da/index.html"},{"revision":"d41eab673fcc8f1fb2e593242eae8678","url":"./post/b9218251/index.html"},{"revision":"198b7d429bb2de8ea8bc658d7e50407a","url":"./post/ba71baad/index.html"},{"revision":"a60218c5b4702a10b2ad0b5f23735eb9","url":"./post/bc60c27b/index.html"},{"revision":"c4e87e27aef5b9c997748d30dbbc5ab5","url":"./post/c66d090/index.html"},{"revision":"fe17da5c58231b1ea9ef1cbcd2385201","url":"./post/c8b7dc96/index.html"},{"revision":"7f965982e3d4b38db41183035c910cf2","url":"./post/cf06d04a/index.html"},{"revision":"6c3c7c833ad29ea9bc72319dced1cf4d","url":"./post/d92ccc1a/index.html"},{"revision":"f7c825872023f9b010ac42f6d0f15500","url":"./post/dc4c1419/index.html"},{"revision":"71c7a725cc127153d897ff464f2e01a4","url":"./post/e94e613d/index.html"},{"revision":"0a21ce72d9db52a29431947ce482a1b5","url":"./post/ed9d3ffc/index.html"},{"revision":"06aec0b0ed51995f28c74253f0c29f89","url":"./post/f4b7132e/index.html"},{"revision":"87088d2022762d463f801f74880dfe1b","url":"./post/f782b17c/index.html"},{"revision":"1ac64c3c98844141668ff5edb1885611","url":"./post/f82aee66/index.html"},{"revision":"fc71cab2296e9d67fafc903d9e1d894e","url":"./random/index.html"},{"revision":"65fd3375fafe9b21bd4a5e085bbac827","url":"./search.xml"},{"revision":"c17090e9ced3f53e874dddfe0c00c95a","url":"./sitemap.xml"},{"revision":"b962edd01bf56d53d99292cdff3e4782","url":"./tags/3DsMax/index.html"},{"revision":"b265e2f97dc1231944408998e2f03511","url":"./tags/butterfly/index.html"},{"revision":"d1a2ad4303fe981970a67a7af81e8142","url":"./tags/hexo/index.html"},{"revision":"ec29ccff64baffad7b75dc0357e3d27e","url":"./tags/hexo插件/index.html"},{"revision":"b0ce65a45e2b838bc215d299c913d5c7","url":"./tags/houdini/index.html"},{"revision":"c905e8fa68905945ebe03511630c1820","url":"./tags/index.html"},{"revision":"8c29bc7fb615b9001ac29edf22762180","url":"./tags/npm/index.html"},{"revision":"0232e92dedadbd0cf4301e37d948ff60","url":"./tags/PicGo/index.html"},{"revision":"353104c9527d9e5ef2dfd3a37fbf25be","url":"./tags/python/index.html"},{"revision":"61dc6ee49cd4fa7ad2f079de2a7417cc","url":"./tags/python爬虫/index.html"},{"revision":"3d55144b16d8d589521bec37d71a3a08","url":"./tags/test/index.html"},{"revision":"177477826c73d7cbd3d8d5306c99931b","url":"./tags/Unity/index.html"},{"revision":"d855738df90fe8f1ab6d2a818d82e09b","url":"./tags/Zbrush/index.html"},{"revision":"b5a544b07d16a7c400daed5d5d860a59","url":"./tags/博客搭建/index.html"},{"revision":"288707948ffe5c9d29a65cb08433dd1c","url":"./tags/图床/index.html"},{"revision":"36f105ed3461d08a5b3a8565ba351f4d","url":"./tags/引擎/index.html"},{"revision":"b5820b31bbcc72473703fff8213ab472","url":"./tags/彩画研究/index.html"},{"revision":"b4e747cd1a75f1ecd7c2d269a7f0ae7c","url":"./tags/角色/index.html"},{"revision":"ac885fc052ee6cfe38824358176abdd0","url":"./tags/语言/index.html"}],{
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