const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8ae86186a4018f61d004dff686647aa2","url":"./404.html"},{"revision":"022ba0cd74b238ed9775ab2d6c476eaa","url":"./about/index.html"},{"revision":"c597912fc0eb87c7cc0e2c90b2511f8e","url":"./analysis/index.html"},{"revision":"b2975d6596ff205dacefd7aed402caac","url":"./archives/2021/05/index.html"},{"revision":"bc6d7c7c61c7f52880105328f3abe134","url":"./archives/2021/06/index.html"},{"revision":"2630a335b347678efa475ef91cd7ac1c","url":"./archives/2021/06/page/2/index.html"},{"revision":"7686f033102435d7c7a28ef3c444ba04","url":"./archives/2021/07/index.html"},{"revision":"94818d0f54f14df62689d57b0a4b5589","url":"./archives/2021/index.html"},{"revision":"142a92cba9d37502ce6c25fec2db9d15","url":"./archives/2021/page/2/index.html"},{"revision":"07350f2b2114644909836e43b74500d9","url":"./archives/2021/page/3/index.html"},{"revision":"a4f2596e102177a7ecc676a56cd41fcd","url":"./archives/index.html"},{"revision":"f2d52453cc4d120a22833bc5f40ef290","url":"./archives/page/2/index.html"},{"revision":"af3b85e213da5e25d576b09ce7e8550b","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"d686e3812fdcd1557047ef19f32c5df0","url":"./bilibili/index.html"},{"revision":"8f9b066cf31c668849d5ca442e38f60a","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"2f219ef262b93bf9745434107ad67285","url":"./categories/DCC/index.html"},{"revision":"fc93c5f3679548c413ec6249cc3b289b","url":"./categories/DCC/Zbrush/index.html"},{"revision":"36293081a98299479000019ecd0a728f","url":"./categories/index.html"},{"revision":"c11178111527ec2826cc89df9507c3f9","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"cd15c85319922cc3e8a1aedbf287aea6","url":"./categories/test/index.html"},{"revision":"dcdfe9cec0f34b4cc176399f9b95c1ea","url":"./categories/博客搭建/index.html"},{"revision":"5d3074f83ec0a37ba618a3d40be90aae","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"7377347563e850784e2729d1b4bba1cb","url":"./categories/引擎/index.html"},{"revision":"248c97c5d33eb8495a40171bd9b1296f","url":"./categories/引擎/UE4/index.html"},{"revision":"f195d794ed748479bde76599adbf0379","url":"./categories/程序/index.html"},{"revision":"a531394e8dadb1698cc4fc7d0f8661cc","url":"./categories/程序/python爬虫/index.html"},{"revision":"59cbdb840fb65b82b0291d74fee945c8","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"f704b023933211b8f0d2190351dc3a8f","url":"./categories/角色/index.html"},{"revision":"010395f9c681b40934f3685ea23287ce","url":"./categories/软件学习/index.html"},{"revision":"310b224e1a30f512a8d06ac9a330d8f6","url":"./categories/软件学习/Zbrush/index.html"},{"revision":"573d8fb829b89ea9e2755352472ac65f","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5a9cb78444bb5fa11292c4b475f8a966","url":"./gallery/网站图片链接.html"},{"revision":"fd5f8cd2eacf5672cad1af3e41e5e88c","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"50bd9656cbda76c5dd8be791e69f64d1","url":"./img/siteicon/README.html"},{"revision":"c722232b0a738cb0178c1c7b3c656aa9","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"6adeb51a2471b2530cf7333d80da52ae","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"a7ebfe44dff4b643a8cad9db5e51a901","url":"./page/2/index.html"},{"revision":"2f231da07b35ce7d2e0d6da7cf462bbc","url":"./page/3/index.html"},{"revision":"235070f6c4e8c43313f5d85ce95daa7a","url":"./post/0/index.html"},{"revision":"4ebeb433b288ceb893fe9bb6e388ca76","url":"./post/28daef73/index.html"},{"revision":"ac7d170533dbd906adee39a330d6bcab","url":"./post/28f332e5/index.html"},{"revision":"5966476dc2596c62bea2d096b7e4c138","url":"./post/38f64154/index.html"},{"revision":"300e0fa9597087af7768285f9fcd5479","url":"./post/3f3c7194/index.html"},{"revision":"8a1076cf739dc24c590b8251584193ef","url":"./post/4271b0f6/index.html"},{"revision":"4e47dfc7d67a00ed500ad8ce918374a1","url":"./post/56cff1b2/index.html"},{"revision":"56b9bb6c4c50cde56a3401cde44df4ea","url":"./post/6844ebc3/index.html"},{"revision":"c43b5b5d169d2458038513002f13a5c9","url":"./post/70e43cff/index.html"},{"revision":"326f0c5bef993b4a83ade19503d0639b","url":"./post/76fd982a/index.html"},{"revision":"ff326f2946e1742e59096b50300236da","url":"./post/7a209fd7/index.html"},{"revision":"ca4853dbdc200045fbe797ad7a1a3a2a","url":"./post/986feafd/index.html"},{"revision":"675e664b700bd181abaa359e0433691d","url":"./post/9987b8b8/index.html"},{"revision":"96f8682d00b2d2e6631d9481df084bd5","url":"./post/a43a01f3/index.html"},{"revision":"bbba04351071e200c9781a0b1013f049","url":"./post/ac842964/index.html"},{"revision":"cec9111caf93a13501f8a71e93109a16","url":"./post/ae6cda05/index.html"},{"revision":"60dc80e94ae3d34530081791e167d1f3","url":"./post/af3eed3c/index.html"},{"revision":"d80a56051bffe636fc74fb7b58c0d78a","url":"./post/b580d7ee/index.html"},{"revision":"8225fb955807530b2a35967e788f8ff0","url":"./post/b6596b48/index.html"},{"revision":"d45a5949c74ee5d1d26d09cbe8654364","url":"./post/b9218251/index.html"},{"revision":"b132457a7e1763cd4798f73f461627e0","url":"./post/ba71baad/index.html"},{"revision":"99674630f8146d6c29bcf5748cb8d88d","url":"./post/c66d090/index.html"},{"revision":"6564bdd198d2195845b4578f043ae774","url":"./post/c8b7dc96/index.html"},{"revision":"319257c585fdbf2a8d69611a0b38fbe3","url":"./post/d92ccc1a/index.html"},{"revision":"cb3f01029c153f1ecf4b2e75a29ed347","url":"./post/dc4c1419/index.html"},{"revision":"12cb76a3bb91f9af6810d83351e9ead4","url":"./post/f782b17c/index.html"},{"revision":"3df05be283e57b3348c6b528e8f7b3dd","url":"./random/index.html"},{"revision":"5892fa87f601ba1e505cc1bbc29f8d9a","url":"./search.xml"},{"revision":"d2e34d12886fb09beaa28588cd97cebd","url":"./sitemap.xml"},{"revision":"c7198958936357698a5ac19f8b22cbf8","url":"./tags/3DsMAX/index.html"},{"revision":"67e10af8086224ab8533e19b7f2da4d7","url":"./tags/butterfly/index.html"},{"revision":"68d8dc710d6f2cd43fe6f276d11f298e","url":"./tags/code/index.html"},{"revision":"5faecb8be98cb84dddd001a6e286fd18","url":"./tags/hexo/index.html"},{"revision":"80371d823f07e207989f4ccf3ae835a9","url":"./tags/hexo插件/index.html"},{"revision":"7d1edf2062424d986cebbcd96057454c","url":"./tags/index.html"},{"revision":"7a6b23c0e17847e2731665a187e8b6a7","url":"./tags/npm/index.html"},{"revision":"b824fc11fe929b36f94c10bf919984cb","url":"./tags/python/index.html"},{"revision":"bf8aff0f74bf749cda2cd3dd590dd398","url":"./tags/python爬虫/index.html"},{"revision":"2c408e9a6cea645e68456e3433d916db","url":"./tags/test/index.html"},{"revision":"df5fd3cdc50e25dad19f55897a36cad9","url":"./tags/Web/index.html"},{"revision":"698e6806e4ad0d50fc77696096411a6c","url":"./tags/博客搭建/index.html"},{"revision":"f24791fc04cc4bcf4c5c9348025e2e49","url":"./tags/图床/index.html"},{"revision":"66e7ab7ad740dafcb345ade2380aad9d","url":"./tags/引擎/index.html"}],{
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