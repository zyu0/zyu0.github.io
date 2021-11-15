const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"6d2c2cbd596b527a6df3c07c6fe0b00d","url":"./404.html"},{"revision":"fa048806abc9b12473eea087e12b7500","url":"./about/index.html"},{"revision":"d00fe9fa5a2c4bf77cd391a82517b0fe","url":"./analysis/index.html"},{"revision":"f6f85d2d00e14e5e16d8e1d91cf7497c","url":"./archives/2021/05/index.html"},{"revision":"2a328875e242ba3f908ae01015f10d3f","url":"./archives/2021/06/index.html"},{"revision":"2f27c3605ec3d28f993a4f685f3283c4","url":"./archives/2021/06/page/2/index.html"},{"revision":"fac7d4dc5577dcec88546541d1896802","url":"./archives/2021/07/index.html"},{"revision":"f5995788a2ae623dd437412975436ce9","url":"./archives/2021/11/index.html"},{"revision":"5677426ca7474534e2f4419236dbc382","url":"./archives/2021/index.html"},{"revision":"57b553a0d4e431c8bd0158a964c89e42","url":"./archives/2021/page/2/index.html"},{"revision":"237fbeb21499440d576e48a2a44ac23a","url":"./archives/2021/page/3/index.html"},{"revision":"728e0f6cfc1642eeb2347949a0fddc77","url":"./archives/index.html"},{"revision":"6b8067c43044a1696e035f7cd9afa2ed","url":"./archives/page/2/index.html"},{"revision":"e2e7a718a485fdc1fb00027ade39e35d","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"f745372594309ad2c58897caaf07c592","url":"./bilibili/index.html"},{"revision":"580e5eba5f55c9c13cfdd9103c63a6f8","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"03c0bd04c12110170aa88782034768a0","url":"./categories/DCC/index.html"},{"revision":"8fc13b55e48ba5c116d08a9fa412c124","url":"./categories/DCC/Zbrush/index.html"},{"revision":"87babbcaf9480cc51447def3426b09a5","url":"./categories/index.html"},{"revision":"3bee942d7fb1e727ea048d21f794f674","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"ef99f4651fb0c72425932a780eea9e67","url":"./categories/test/index.html"},{"revision":"764149182df1b9dddb88a56c373fef56","url":"./categories/博客搭建/index.html"},{"revision":"b66dff8855ecb34923b74458938c1f9e","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"7ed5299b637d52e2bc65b4fdc68bc8e2","url":"./categories/引擎/index.html"},{"revision":"81e4ea7a0c2a08723619c50fa098cebb","url":"./categories/引擎/UE4/index.html"},{"revision":"919cba206bce77bb2b4bde637920149d","url":"./categories/彩画/index.html"},{"revision":"35dd553eda2fb42175f5530da097a653","url":"./categories/彩画/第一章/index.html"},{"revision":"5a3a2181e35eaa8ef0782064834bf20e","url":"./categories/彩画/第二章/index.html"},{"revision":"3df25de32ea9e8a99b62af9abcd57ddd","url":"./categories/程序/index.html"},{"revision":"a897b713482afa13967662d8e0418e48","url":"./categories/程序/python爬虫/index.html"},{"revision":"bc32ce842ce5a8ba817c2239df853c26","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"c8333550d5bc33be275f42b437805d2f","url":"./categories/角色/index.html"},{"revision":"6ff0ebde829d0c041fbed4d9725bb236","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"a6b24ba93de4aedef1bf736b8bb3c612","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9a13bb79c2042c8d70469ad7d0d4c6bb","url":"./gallery/网站图片链接.html"},{"revision":"fea11aa234798bd37633023d023f442f","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"0a75b3c8e39cc09970e8fc02909af535","url":"./img/siteicon/README.html"},{"revision":"921b805a8b78b244067192bd8052513e","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"4a39f72b33c423deccbf14b6795305f0","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"6f9a44fa7fc80c13998eb1c787b9eab6","url":"./page/2/index.html"},{"revision":"19d6402df17a1369f6f6674d3290d5ef","url":"./page/3/index.html"},{"revision":"a57d0ff28f590cac9c85ac49bcfdf640","url":"./post/28daef73/index.html"},{"revision":"ac37c263db832c23abfd75c3a12dbeb7","url":"./post/28f332e5/index.html"},{"revision":"cb59e98954bd28316b3d0fa9285ca612","url":"./post/348b109c/index.html"},{"revision":"ec995d798bb791674d2839ac406d133a","url":"./post/38f64154/index.html"},{"revision":"3983240b56ab30249c133827d3f517f6","url":"./post/3f3c7194/index.html"},{"revision":"548dca53ae46a9be0ebe9aa5aeb743c6","url":"./post/4271b0f6/index.html"},{"revision":"9d3c3b7cdee44216ba87f18d2b49e70d","url":"./post/4363013c/index.html"},{"revision":"6a887a5e0e674d911d409c4a1c664cee","url":"./post/56cff1b2/index.html"},{"revision":"68af1fa84be20a5af06d460b650e6f0f","url":"./post/6844ebc3/index.html"},{"revision":"a24998c44fa6bc12c724226acb0c5403","url":"./post/70e43cff/index.html"},{"revision":"ac2f3f423f1f445c8b0dd686aaad7901","url":"./post/76fd982a/index.html"},{"revision":"05f316ff08f9a60b4a95521d268fa7c8","url":"./post/7a209fd7/index.html"},{"revision":"a9c703a6c59add0f488581ee3ac70532","url":"./post/938ce57e/index.html"},{"revision":"5471e783d49ca39c77ad620fbf828f71","url":"./post/986feafd/index.html"},{"revision":"26e5e2cbafd1d7debdba146eeadd2b83","url":"./post/9987b8b8/index.html"},{"revision":"6083af0a498f5997d12fedbb048511b7","url":"./post/ac842964/index.html"},{"revision":"8bba599c98e871f534c23ccd0251b4fc","url":"./post/ae6cda05/index.html"},{"revision":"4fe5e6ea286b5e2b033d276b6d2cce4e","url":"./post/af3eed3c/index.html"},{"revision":"0c301c04af3de35a18af5405e6d011f3","url":"./post/b6596b48/index.html"},{"revision":"5e7c3c0e2a5940f50b0a4513e16e4124","url":"./post/b9218251/index.html"},{"revision":"a1a6d2a804de979d65700c1a667fb005","url":"./post/ba71baad/index.html"},{"revision":"1431643594c8485f99c3f693fb7fddc0","url":"./post/bc60c27b/index.html"},{"revision":"00907bce59548cb654261b9f18377617","url":"./post/c66d090/index.html"},{"revision":"5fc88ce0584734a19cad03618952d75b","url":"./post/c8b7dc96/index.html"},{"revision":"ee14f626482d53179549dc8319614b3a","url":"./post/d92ccc1a/index.html"},{"revision":"1525d8d37e73e43d530d16632b71f137","url":"./post/dc4c1419/index.html"},{"revision":"a1f5cfe77a6b8a4cd721839963ea4b0d","url":"./post/e94e613d/index.html"},{"revision":"0fa3ebb3af07e75492adb7cd7341a7ae","url":"./post/ed9d3ffc/index.html"},{"revision":"a41ae99759e3afafcd2d5d3050c69cd3","url":"./post/f4b7132e/index.html"},{"revision":"c3c58f9fe415d3f1ad1a72d3777b98b9","url":"./post/f782b17c/index.html"},{"revision":"557b8c9c6ad8e2b6d31655f182c40657","url":"./random/index.html"},{"revision":"29e526101f4157193f163ad893c2d2bf","url":"./search.xml"},{"revision":"7ec5eac04238b43c9cb0312751e5fde7","url":"./sitemap.xml"},{"revision":"d123dbb8fb8bf85255a05c79b7e72311","url":"./tags/3DsMax/index.html"},{"revision":"6887481604127e2128200c2b6f57f413","url":"./tags/butterfly/index.html"},{"revision":"83b5fbc99a0c92c5a99dbce0a812213f","url":"./tags/hexo/index.html"},{"revision":"5877e0204bbe57a18ce2ad08abe32432","url":"./tags/hexo插件/index.html"},{"revision":"97efba6d6d2f2cf05a5785b5ec5f4d37","url":"./tags/index.html"},{"revision":"a8a852d92361e802080ed584827d62a0","url":"./tags/npm/index.html"},{"revision":"32e4e7f56453bbe45c9492f19de252fe","url":"./tags/PicGo/index.html"},{"revision":"f881e7d3b1322099dac39448b101f82b","url":"./tags/python/index.html"},{"revision":"ee52ee87ed6bd5bb1a018200526a3470","url":"./tags/python爬虫/index.html"},{"revision":"44b404a2b01bb97fdd7b8a1fb3ed4639","url":"./tags/test/index.html"},{"revision":"1b11de0bc01f7abcf26fa8219cc3153d","url":"./tags/Zbrush/index.html"},{"revision":"f02eee867d763a0082c919bfe9ccc597","url":"./tags/博客搭建/index.html"},{"revision":"e941bb97ef5f41912fd31cfc4b8591e2","url":"./tags/图床/index.html"},{"revision":"0397b24510e966d30d54a8882d484474","url":"./tags/引擎/index.html"},{"revision":"66591005694cd38231d8fe3e9dfb4497","url":"./tags/彩画研究/index.html"},{"revision":"4dc6d8dae9d347d5311a569730bb2996","url":"./tags/角色/index.html"}],{
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