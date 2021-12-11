const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5f0dd3e5227cb11f3925135c7b740e15","url":"./404.html"},{"revision":"70ed834a0d24b872c36a147e0d935937","url":"./about/index.html"},{"revision":"abf6d61cf08c73e7416d41cf40dc93f8","url":"./analysis/index.html"},{"revision":"42e7acbf31bf1893429c43561ab9dd18","url":"./archives/2021/05/index.html"},{"revision":"3941da5b0858cb7bd3bbc69099eeaff0","url":"./archives/2021/06/index.html"},{"revision":"6b0e6fe30219283ab2495c9e64055697","url":"./archives/2021/06/page/2/index.html"},{"revision":"e00a30f5c4201c9dd24d0eee5519d1dd","url":"./archives/2021/07/index.html"},{"revision":"daf8fd997969fc12f0a81acd7d4b023f","url":"./archives/2021/11/index.html"},{"revision":"8bd25a22e19a9e4c8fc80ed7d9bce0fd","url":"./archives/2021/12/index.html"},{"revision":"9903630f2a625623de1057e2f542cd1a","url":"./archives/2021/index.html"},{"revision":"08f65c3b571a8dcdf88872aeddecf457","url":"./archives/2021/page/2/index.html"},{"revision":"613c3b6c7536daf563dfabd6fcc38d2b","url":"./archives/2021/page/3/index.html"},{"revision":"dc78f6ef33a4dbaf75e1c80272fe7dd7","url":"./archives/2021/page/4/index.html"},{"revision":"e82cae2221be54ca16c8d65f29b68c94","url":"./archives/index.html"},{"revision":"b4dec513b069a6660b6e5a7dec552fae","url":"./archives/page/2/index.html"},{"revision":"e2932f03257a98cbd6a66574503f230d","url":"./archives/page/3/index.html"},{"revision":"8ff2678a97bd5d247a43d4ee0a9eef5a","url":"./archives/page/4/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"4d323ab3307346069f00507628f5f560","url":"./bilibili/index.html"},{"revision":"98027a764ec4ff03165473bb89da1c91","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"e4cab77777215ff9a8b5ca49cc9a6505","url":"./categories/DCC/Houdini/index.html"},{"revision":"e87fcfe9c9d11a82953a972198070078","url":"./categories/DCC/index.html"},{"revision":"089628918707dad9e532b1c448728601","url":"./categories/DCC/Zbrush/index.html"},{"revision":"11c1e805560f73ee0387051ade324193","url":"./categories/index.html"},{"revision":"9527898a1309a41530092cfa79df717a","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"874fc114f413fc27be9cf48389a1a020","url":"./categories/test/index.html"},{"revision":"3b16563ef38a595baa38f1bc0719e0bc","url":"./categories/博客搭建/index.html"},{"revision":"259f335f7c1853b5c4331102e842512e","url":"./categories/博客搭建/page/2/index.html"},{"revision":"f56cca2d7a33f6f64ad99456fd83703a","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"ffa7be025a4be260e7ff9725aa724594","url":"./categories/引擎/index.html"},{"revision":"3a411b04eae1229129ae753ab307071a","url":"./categories/引擎/UE4/index.html"},{"revision":"4cbe931acd765e7a10671f95962f0d36","url":"./categories/彩画/index.html"},{"revision":"e213d9d76e5e1b08262d90e642b13c11","url":"./categories/彩画/第一章/index.html"},{"revision":"e7c50091d63a689d8c6a6b93b8cacaae","url":"./categories/彩画/第二章/index.html"},{"revision":"00ba16c87a4c3d95b5471f44942e4de8","url":"./categories/程序/index.html"},{"revision":"03407e7f8d1fc44122d8224b9b3f511c","url":"./categories/程序/python爬虫/index.html"},{"revision":"87cac92e81be737dda92c1f8d11a5c7a","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"9e0d6c09882fcc1933a2294af588eded","url":"./categories/角色/index.html"},{"revision":"22786b3e6e1c4b36671bfcf75f7dbc2d","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"7121c4e187f9b5b393c4fa1a73e67b45","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d8ef1722e28d06a96c80f8b5bef0c61d","url":"./gallery/网站图片链接.html"},{"revision":"1a1f44c27614aebe799ed6824b338350","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"94f572ac5ee9dd3f5120253d30d11947","url":"./img/siteicon/README.html"},{"revision":"46494f3b32c5233186559aecc36c242b","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"9672fcb71709bbcbbaf134117e0655e9","url":"./link/index.html"},{"revision":"239da4fb2c03a14821585ccbb13a049e","url":"./logo/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"aec1974ef628e9a7782a4fc14007e038","url":"./page/2/index.html"},{"revision":"1960f2013a17e5df0c101f66ceee5212","url":"./page/3/index.html"},{"revision":"3f6c218256589408dc26bf0bebae8f2e","url":"./page/4/index.html"},{"revision":"59bdbc8de83e8549cbdce65107532ae6","url":"./post/170d2fe2/index.html"},{"revision":"30f5e5e2918527f9ca7e9d40f8b16c80","url":"./post/28daef73/index.html"},{"revision":"de8a23b483ba8ce956eafcebbda093df","url":"./post/28f332e5/index.html"},{"revision":"1a876cdf7536da149ae5453a6fbbe094","url":"./post/348b109c/index.html"},{"revision":"eabb85a28359abf85fd15058191e074f","url":"./post/38f64154/index.html"},{"revision":"e6e3b73df939ef9e047802688c010029","url":"./post/3f3c7194/index.html"},{"revision":"5225ec07621dfbcdecabc7308afe8deb","url":"./post/4271b0f6/index.html"},{"revision":"7808b58b51bb929ad7100657a49cf15b","url":"./post/4363013c/index.html"},{"revision":"fd05f1d5e21b2ec503dcfd043429de35","url":"./post/56cff1b2/index.html"},{"revision":"4c984584622c722dcc5679b2c5845658","url":"./post/6844ebc3/index.html"},{"revision":"192a7b22fa98bb7e408d26b4510aa9a9","url":"./post/70e43cff/index.html"},{"revision":"5aebb8551d665d29172c8defc0b2e019","url":"./post/76fd982a/index.html"},{"revision":"7d4ccaa8167884c5ee7d3debd1aeea72","url":"./post/7a209fd7/index.html"},{"revision":"7c912f22355e71267a598130eb416956","url":"./post/7e6a05f4/index.html"},{"revision":"c2302a23bb17cc63ccf895cf8d6f3278","url":"./post/938ce57e/index.html"},{"revision":"5fb5613200063988ff0294a83011ca43","url":"./post/986feafd/index.html"},{"revision":"4a69d6602c48c0fb031bcd9f306db98f","url":"./post/9987b8b8/index.html"},{"revision":"81c54c45e9650603bedcaa024d30c033","url":"./post/ac842964/index.html"},{"revision":"05c6729d6164147a0ece3ec7555537ee","url":"./post/ae6cda05/index.html"},{"revision":"4d9445486549d2c8ef3dd980513abd8d","url":"./post/af3eed3c/index.html"},{"revision":"88da37c36bf8f60466a3c049bcf5a230","url":"./post/b6596b48/index.html"},{"revision":"7bb066ce45876896943ea3e74dec4779","url":"./post/b9218251/index.html"},{"revision":"c61ce0b4322220ded0a18a4e8ae392b3","url":"./post/ba71baad/index.html"},{"revision":"7e66c9e4e3b749dffd298809b154b44c","url":"./post/bc60c27b/index.html"},{"revision":"1dcdf3c0e64daefcd6599b39abd2a9c1","url":"./post/c66d090/index.html"},{"revision":"82f83d44f4024af7cf637a34581772c8","url":"./post/c8b7dc96/index.html"},{"revision":"fbc52181803699987d61d08bc7974df8","url":"./post/d92ccc1a/index.html"},{"revision":"423e36d121d795a02e282b52a8f1af4b","url":"./post/dc4c1419/index.html"},{"revision":"44c9f6389bfd64c8ca2b8e8a8e53b021","url":"./post/e94e613d/index.html"},{"revision":"69a48ac194997efcaeb6ccb15cb2888e","url":"./post/ed9d3ffc/index.html"},{"revision":"f9f473a6fd291548073d70c709771b0b","url":"./post/f4b7132e/index.html"},{"revision":"e4e4af62072fbd8fcc36570deb0fb3b0","url":"./post/f782b17c/index.html"},{"revision":"cd8d6b2a1a28fe9aab5f42b79d9d7fa6","url":"./random/index.html"},{"revision":"71f626946e7c0aff5d4e5c5692025035","url":"./search.xml"},{"revision":"ac63b5ead4aea64a9ccf53eaa752ca8b","url":"./sitemap.xml"},{"revision":"a169666b4e424ca7fe08ca7c560d90f5","url":"./tags/3DsMax/index.html"},{"revision":"2ad2b07ea0c729506a41584f2629c17e","url":"./tags/butterfly/index.html"},{"revision":"bd4303c4b0dd29e2e1a0ca9a3ec297c4","url":"./tags/hexo/index.html"},{"revision":"a06aa39546ba5d957aac73530f801061","url":"./tags/hexo插件/index.html"},{"revision":"a62687d75efdf64d9815c41f34fa1cda","url":"./tags/houdini/index.html"},{"revision":"a1f99ffbcce464cc00137cf239d58712","url":"./tags/index.html"},{"revision":"7b79d1506227cf6ff8f0e04624edb12a","url":"./tags/npm/index.html"},{"revision":"e5880dd1cb180546531e4dc1d497bcae","url":"./tags/PicGo/index.html"},{"revision":"2eb65d94640885ff5c3fdd45dc66acd8","url":"./tags/python/index.html"},{"revision":"9d4f37691c6ff6e4050ab1a217821a7b","url":"./tags/python爬虫/index.html"},{"revision":"8625e4e99316358579adf1ff23f24ab1","url":"./tags/test/index.html"},{"revision":"72d6be7360de138d70bedc2015db6eef","url":"./tags/Zbrush/index.html"},{"revision":"53f3aedd930f37c325f0c5f0c4f38b9b","url":"./tags/博客搭建/index.html"},{"revision":"6427ea81384a3d3d2de13f81f597a040","url":"./tags/图床/index.html"},{"revision":"a269f64665aed155e3daaa444f3f53c2","url":"./tags/引擎/index.html"},{"revision":"7526ab4478c7fec4be5020370e752e62","url":"./tags/彩画研究/index.html"},{"revision":"948627b7f7fccd46244c1fd4254cf8fa","url":"./tags/角色/index.html"}],{
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