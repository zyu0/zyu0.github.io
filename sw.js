const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b44d17328591ef345f36ec87246bbd0a","url":"./404.html"},{"revision":"e41db1e6a307d5d5f98c5815815e86c0","url":"./about/index.html"},{"revision":"2722ae3a633adf75db4d92dac175145b","url":"./analysis/index.html"},{"revision":"e666526629f6b0b12825065e8dd981de","url":"./archives/2021/05/index.html"},{"revision":"65919f242c0c6aadaf4b7d05d10db2ab","url":"./archives/2021/06/index.html"},{"revision":"e28dbd32e2cb05f47ccc3b79652ef27d","url":"./archives/2021/06/page/2/index.html"},{"revision":"14d62c590ed0829d2ad0016d0d417dc5","url":"./archives/2021/07/index.html"},{"revision":"179640b75c747a15e4ebf1f4485e5275","url":"./archives/2021/index.html"},{"revision":"07736e52b0fa06bc1e00eba87ae9b345","url":"./archives/2021/page/2/index.html"},{"revision":"d328088b258f5412f9d86d912bb47adc","url":"./archives/2021/page/3/index.html"},{"revision":"88559f5b4024aa5e4314a2983fb95836","url":"./archives/index.html"},{"revision":"1748180d2beed8a00c79f75a1e312671","url":"./archives/page/2/index.html"},{"revision":"67aace84e990674ddcfb5d646a155802","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"eaf67eab81108eab216dbf73955e009f","url":"./bilibili/index.html"},{"revision":"65a8f7f21577f08ee6eff27564d3d794","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"fddec8b6d3c80d7f44d0112fa71ee39d","url":"./categories/DCC/index.html"},{"revision":"4787f4b20b207ceb67c0cfa14c58c5a6","url":"./categories/index.html"},{"revision":"2ba3a0ffac4f0689807428425ae66e2e","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"6b258895436216f55fbd5c459c409df1","url":"./categories/test/index.html"},{"revision":"f2226f9909dbd1a53b87b58e4dd64b06","url":"./categories/博客搭建/index.html"},{"revision":"aaa299e7f0e9bc4208dc892eb1f38e1d","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"b25c26b9b5a2b3dc7c8e6b42dd505028","url":"./categories/引擎/index.html"},{"revision":"c4f67c0ea62fbb0fb540d71ada9dd91f","url":"./categories/引擎/UE4/index.html"},{"revision":"cc7eee1b3ae6da63b089772115b3b869","url":"./categories/程序/index.html"},{"revision":"58c352ce82b5557f04f754c7c7fa7aa8","url":"./categories/程序/python爬虫/index.html"},{"revision":"8329ea442ee2244ac1c483ed00805812","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"e2603ed4e7cbfafdc976bfca338159d6","url":"./categories/角色/index.html"},{"revision":"dcd89aafa9b4861d75f5186bde463a5d","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fdd942f029c75140a46e94d0ff72faed","url":"./gallery/网站图片链接.html"},{"revision":"bfc50a822302849f68c2e01b10e71946","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"df817a72a31acbfc85957d6ab73fc966","url":"./img/siteicon/README.html"},{"revision":"f20affcdf017299e825a65d46155a610","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"0c706d58800b8a3dc120732511482e7b","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"2563f4b789dcc80b8be18c6815da17d3","url":"./page/2/index.html"},{"revision":"2f9cc1ea7bb67e85e10884aaf1be004d","url":"./page/3/index.html"},{"revision":"7e5c7a483da9bd77a3e1c84a2458c5c1","url":"./post/28daef73/index.html"},{"revision":"13febcdf3b036e078b045489ee637c4a","url":"./post/28f332e5/index.html"},{"revision":"43be6e9eb5a3b766a7280d991aefad8d","url":"./post/38f64154/index.html"},{"revision":"4105a4f9c82edee2903cd0d9165526c5","url":"./post/3f3c7194/index.html"},{"revision":"c0f119829c09919a261547800537d770","url":"./post/4271b0f6/index.html"},{"revision":"ddc521067a457c125548adaaae348921","url":"./post/56cff1b2/index.html"},{"revision":"59ceb80b354c986810175ea2f3721cf9","url":"./post/6844ebc3/index.html"},{"revision":"6873544333f5ca276f2869638d932272","url":"./post/70e43cff/index.html"},{"revision":"21a6115ec00f13bc57577d208836b9c5","url":"./post/76fd982a/index.html"},{"revision":"5368e83d4908cc8bd0952bc99a410825","url":"./post/7a209fd7/index.html"},{"revision":"a7a03196dfe4cb3a7c1eae8152055ef1","url":"./post/986feafd/index.html"},{"revision":"a7c7dd3bf2e3971f0817637baa6262a5","url":"./post/9987b8b8/index.html"},{"revision":"5e0a66ff7670db6f167ba70f9753ec2f","url":"./post/a43a01f3/index.html"},{"revision":"df62bc1d3871a7234fe7a980c2474ac6","url":"./post/ac842964/index.html"},{"revision":"b485339bd28b56ff363201e117eb6ce3","url":"./post/ae6cda05/index.html"},{"revision":"d217a41c809d99aec7dce5e89a29c466","url":"./post/af3eed3c/index.html"},{"revision":"cb9ec061acf147447d262bfa5d1fed7e","url":"./post/b580d7ee/index.html"},{"revision":"27fce8e829f21c9c797b9bc3612ffc23","url":"./post/b6596b48/index.html"},{"revision":"246e96b0c603a2012d9f703144ee5332","url":"./post/b9218251/index.html"},{"revision":"71adf9f265c6731a73ebae62f12a2b93","url":"./post/ba71baad/index.html"},{"revision":"dab12c776f97e2d0a3219755bba1c8c4","url":"./post/c66d090/index.html"},{"revision":"5e57fb427356384bd4e907aa48466d20","url":"./post/c8b7dc96/index.html"},{"revision":"2b53bb9fa5df23be3290434b3075d001","url":"./post/d92ccc1a/index.html"},{"revision":"48055f1e17b268f6c07d82625f9084f8","url":"./post/dc4c1419/index.html"},{"revision":"54d6c4a57de20a854d357c90d44c9e4e","url":"./post/f782b17c/index.html"},{"revision":"61b15377e7e562ddd6e7d8884dbe1bdf","url":"./random/index.html"},{"revision":"2d23b38c957fb167ba6863f63f4edb85","url":"./search.xml"},{"revision":"74c3f32dbe8046e916fa62642f32f958","url":"./sitemap.xml"},{"revision":"2760f3b4bbda1f6f5950a8523bd05637","url":"./tags/3DsMAX/index.html"},{"revision":"67e29ac2119eca84ccca4454b8e7f5a5","url":"./tags/butterfly/index.html"},{"revision":"3feda2f91cfb2220c4335bf6868b11bb","url":"./tags/code/index.html"},{"revision":"a83ea72b089defb9b4627400e86e6e71","url":"./tags/hexo/index.html"},{"revision":"4306845d61ede7fa16ace1543a7d8617","url":"./tags/hexo插件/index.html"},{"revision":"b328786896a06149accb1a12e406b06e","url":"./tags/index.html"},{"revision":"2012100218424dc97a262b527573baec","url":"./tags/npm/index.html"},{"revision":"842a9ca61fea87a5856e7f50e047cbcb","url":"./tags/python/index.html"},{"revision":"cc798e2d9cc1b66dd55497bdab45eba5","url":"./tags/python爬虫/index.html"},{"revision":"218179f8555c556b4b017f4eb8badd2d","url":"./tags/test/index.html"},{"revision":"24531d672c997bbb2eacca02e2786c09","url":"./tags/Web/index.html"},{"revision":"61f77036758f64597501b191b36b69f8","url":"./tags/博客搭建/index.html"},{"revision":"6d8cdb428113c9643b951763fd04c985","url":"./tags/图床/index.html"},{"revision":"cd23a64ba4ed4c0f8ba03474c3e0dddb","url":"./tags/引擎/index.html"}],{
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