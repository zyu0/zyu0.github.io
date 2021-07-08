const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3691d81d35ffb793ae433cbc7ca92bcb","url":"./404.html"},{"revision":"770bc09bf934a0d7ee63ddbb5060a120","url":"./about/index.html"},{"revision":"10d8e2a057438004baf75382809c6b59","url":"./analysis/index.html"},{"revision":"913f495262781239f625b8840b6e49dc","url":"./archives/2021/05/index.html"},{"revision":"eb951aecfa0a482448cd04f3a782538d","url":"./archives/2021/06/index.html"},{"revision":"b9df33a322329180211ba210a5155aac","url":"./archives/2021/06/page/2/index.html"},{"revision":"effc3914e0cd69ffc794b708740cdf45","url":"./archives/2021/07/index.html"},{"revision":"44a71c7d49f06a16ef81fe8ef430b551","url":"./archives/2021/index.html"},{"revision":"5184add8c12304765fc4c51883da7a00","url":"./archives/2021/page/2/index.html"},{"revision":"abda0e17bd99d44ad6bdf10d7bfd2c05","url":"./archives/2021/page/3/index.html"},{"revision":"c066685a194d108963d50951384f1076","url":"./archives/index.html"},{"revision":"fd6114de3734a9db1a5f331f4384a0df","url":"./archives/page/2/index.html"},{"revision":"2cf1756e144ca19bb3f927735e964522","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"5783c0809e488d6d2e657566432f9e0e","url":"./bilibili/index.html"},{"revision":"8ba1eb31223d7b664f5a6e547debd9f5","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"827af1ec9ae8ba8ef9b2a1288887d99c","url":"./categories/DCC/index.html"},{"revision":"9d52ec5f2e70068b80a9ff68a183b951","url":"./categories/index.html"},{"revision":"d9b356b1655f0e8c3edae424f9166d31","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"3988850a28b5b87b60ccc03f8c0a805a","url":"./categories/test/index.html"},{"revision":"0637a621bfcb457945dcca9d58e45f9e","url":"./categories/博客搭建/index.html"},{"revision":"230bf4255f20d5cb1916fa07e153766e","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"2cbb2efde68c2b6da00f0602e4506d76","url":"./categories/引擎/index.html"},{"revision":"13ce970632f28e9537c00a929914b7a7","url":"./categories/引擎/UE4/index.html"},{"revision":"19e97691aeaad7744efcd3bbec51d80a","url":"./categories/程序/index.html"},{"revision":"686d9fd49e47256139a9329c348ee5e9","url":"./categories/程序/python爬虫/index.html"},{"revision":"cc9aefd94807034b9b04c69fdb4a8734","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"6a618b1e10174b7a1187bae5728881b3","url":"./categories/角色/index.html"},{"revision":"a5657ea8c608c186ca21c22da3c70593","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fd685d1ece4870c24be7048b733ba334","url":"./gallery/网站图片链接.html"},{"revision":"2b1acc2c8c30974957d63bdaab97ad17","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"076e92f70f27e19d11dae784ec95d327","url":"./img/siteicon/README.html"},{"revision":"10190f59e3f7364c3b7e5f4db1675163","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"2f85ee878d248c4318e5d1713570483c","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"dcc318fe71bd342421d23565d2d742a8","url":"./page/2/index.html"},{"revision":"b24b874e7435c740750189ce80342519","url":"./page/3/index.html"},{"revision":"7e5c7a483da9bd77a3e1c84a2458c5c1","url":"./post/28daef73/index.html"},{"revision":"f11cd4e89675ab87e23f922f17840df2","url":"./post/28f332e5/index.html"},{"revision":"bc1e2a2d704fa99d976a362c7767eacf","url":"./post/38f64154/index.html"},{"revision":"bc319ecc46e40073caf4dd05a0464875","url":"./post/3f3c7194/index.html"},{"revision":"f3f8d7e6160d681bdc8c668eefaba06c","url":"./post/4271b0f6/index.html"},{"revision":"85abe5e691c30b17aee692ea379f2b8e","url":"./post/56cff1b2/index.html"},{"revision":"d67794a210d1b183787318c5255aa565","url":"./post/6844ebc3/index.html"},{"revision":"3eb467121ca1bfb23a660410435d9d78","url":"./post/70e43cff/index.html"},{"revision":"588d09e457d456515dfa1feba1556d7e","url":"./post/76fd982a/index.html"},{"revision":"de7572ae1ec33c9c2b6ab92f36e55170","url":"./post/7a209fd7/index.html"},{"revision":"a7a03196dfe4cb3a7c1eae8152055ef1","url":"./post/986feafd/index.html"},{"revision":"120823808df09b978d3ccf0d7219d511","url":"./post/9987b8b8/index.html"},{"revision":"fc0d023247ea912f88891b3f0515fe56","url":"./post/a43a01f3/index.html"},{"revision":"e122935ce33052df6f62599d7af06a57","url":"./post/ac842964/index.html"},{"revision":"5eafa7e97e99b91b41950f2b8fe57593","url":"./post/ae6cda05/index.html"},{"revision":"0146dab05dda11594d10b911db8af20f","url":"./post/af3eed3c/index.html"},{"revision":"5c65361e58cf463ebc2dc5c0e7e10f5c","url":"./post/b580d7ee/index.html"},{"revision":"e44337e9672de7a0b2c855d7548761a2","url":"./post/b6596b48/index.html"},{"revision":"a176f9a46a130941b1c8893357646af0","url":"./post/b9218251/index.html"},{"revision":"fec098497e907434895bb025c82123dc","url":"./post/ba71baad/index.html"},{"revision":"68e51fccf5f03e52036a2d9b8974e085","url":"./post/c66d090/index.html"},{"revision":"3b2fd90565c25c4813be9edded356106","url":"./post/c8b7dc96/index.html"},{"revision":"f13a428c8d5fd76b3318f9e3491c74e1","url":"./post/d92ccc1a/index.html"},{"revision":"c7595b9277f311637c8caee461b36615","url":"./post/dc4c1419/index.html"},{"revision":"4328baed5a40972433c6bd4d54442f2a","url":"./post/f782b17c/index.html"},{"revision":"61b15377e7e562ddd6e7d8884dbe1bdf","url":"./random/index.html"},{"revision":"75480431c1515a929c192e18ced600e5","url":"./search.xml"},{"revision":"e6fe690dc9b4914f373ab7dc2d2c0cef","url":"./sitemap.xml"},{"revision":"bf70b05f825074f87647b393caf5fe36","url":"./tags/3DsMAX/index.html"},{"revision":"e25cd19571314cbeb1de27e1293f3bb5","url":"./tags/butterfly/index.html"},{"revision":"e0cbe68a12b6ea17abacf0fde9807ebc","url":"./tags/code/index.html"},{"revision":"55a5d2898fe298311f7ee0de9fc990e2","url":"./tags/hexo/index.html"},{"revision":"6545cf6f22668a7098948f6c531a87be","url":"./tags/hexo插件/index.html"},{"revision":"a21dd6d8a16899bf6002fec8b482b6d5","url":"./tags/index.html"},{"revision":"00d7ed7c50b8ec7cf1045ed34896325e","url":"./tags/npm/index.html"},{"revision":"1cb3ce158259dc4fbecba99684522f3b","url":"./tags/python/index.html"},{"revision":"5f37694828f9eedeb9a22fbb73a64c8d","url":"./tags/python爬虫/index.html"},{"revision":"6d8ea33e84224c442f7483bafc6af7c2","url":"./tags/test/index.html"},{"revision":"39bff9c9bb8acb10f017b34a897dca10","url":"./tags/Web/index.html"},{"revision":"080c9292833be405ae3b11f968b72b1c","url":"./tags/博客搭建/index.html"},{"revision":"aa27277c8d37b5c5c57837218ddd161a","url":"./tags/图床/index.html"},{"revision":"7aa8aa31b90f0633790ec82838b33651","url":"./tags/引擎/index.html"}],{
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