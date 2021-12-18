const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4ce1cc08c903a0e92d7151fe32841824","url":"./404.html"},{"revision":"a15ef4c4cdcb9c6f1ac710bfe09fc9d3","url":"./about/index.html"},{"revision":"fab042a9522eaf1edbd584744d2a9146","url":"./analysis/index.html"},{"revision":"2f93e28d84c7407f2dd1aee1cd50e122","url":"./archives/2021/05/index.html"},{"revision":"711d348deff70fe5113972ad7cd60e13","url":"./archives/2021/06/index.html"},{"revision":"ba79e51066e12537161344843f0b3705","url":"./archives/2021/06/page/2/index.html"},{"revision":"6d7bee35cb69377e59d5f1c3f9319b67","url":"./archives/2021/07/index.html"},{"revision":"7fb70dc2127f30e5eff60fc54dceefd5","url":"./archives/2021/11/index.html"},{"revision":"20f626ecb21a4329729162bbf0b1be4f","url":"./archives/2021/12/index.html"},{"revision":"e46fe53f8d702794b1df415533931fb2","url":"./archives/2021/index.html"},{"revision":"165c26500740eaf3f9cb3edb592c21d5","url":"./archives/2021/page/2/index.html"},{"revision":"146462d72bd1ebe182d130d28e82417c","url":"./archives/2021/page/3/index.html"},{"revision":"813d5538568567623e9888cf8bdacafd","url":"./archives/2021/page/4/index.html"},{"revision":"a5d855a87392b39b1e42698435e57179","url":"./archives/index.html"},{"revision":"816fa8f4061300686f30cebf6a8faad2","url":"./archives/page/2/index.html"},{"revision":"eff64f5fa1f731b75744cdc7de89a72d","url":"./archives/page/3/index.html"},{"revision":"7149169e32494623e3eed7895e11bc4f","url":"./archives/page/4/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"c067e69f29e3f340fe885f965fc8e0cc","url":"./bilibili/index.html"},{"revision":"b5cf4d0f6111e6ce30d6fbb5087ce030","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"f296aa9fcdd53e44758f628a6587f489","url":"./categories/DCC/Houdini/index.html"},{"revision":"00457268dfa3af839d851e232a9ee04d","url":"./categories/DCC/index.html"},{"revision":"07b6dd1a0a8cf1ed9205c74437c0965b","url":"./categories/DCC/Zbrush/index.html"},{"revision":"dab334b936b42292e838670d166ef3ff","url":"./categories/index.html"},{"revision":"1b24a2bb910e793ba9e193a4ccb04306","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"9390c43029cde083398ad366f03d688f","url":"./categories/test/index.html"},{"revision":"fca66df76f61d872f69fefb0942fb9a4","url":"./categories/博客搭建/index.html"},{"revision":"9685c97643bfcc58c59ceae1cb91ddb8","url":"./categories/博客搭建/page/2/index.html"},{"revision":"f18d7b3242b76efe4b9f9abcc3a278c9","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"c0aa5c0d08d7ce4a16dbec4389415a55","url":"./categories/引擎/index.html"},{"revision":"c1d870cd6d6c722e9c4ad8f671bc7751","url":"./categories/引擎/UE4/index.html"},{"revision":"a6b87521caf3cb81e96f59648863d098","url":"./categories/彩画/index.html"},{"revision":"7bf3f0e87acb623868c80ab1a7a390de","url":"./categories/彩画/第一章/index.html"},{"revision":"9354a73e4eb673db9af8036089b2c72a","url":"./categories/彩画/第二章/index.html"},{"revision":"0af3c1ba11e4d084182a62df3d99d0b1","url":"./categories/程序/index.html"},{"revision":"25b61c5855cb01b41d080b25ea1a4d06","url":"./categories/程序/page/2/index.html"},{"revision":"6aa4c1f66a92cdef7755fb9a8a619a4c","url":"./categories/程序/python/index.html"},{"revision":"742f8943414b80d537fde85aa522ba03","url":"./categories/程序/python/爬虫/index.html"},{"revision":"83bef57916764ffbd87af366c67545b6","url":"./categories/角色/index.html"},{"revision":"5c9dad0dd7e725f4a9dd9763676a831f","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"7121c4e187f9b5b393c4fa1a73e67b45","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cf709d73d485d61c4844aef37c842fea","url":"./gallery/网站图片链接.html"},{"revision":"745a86c5e5fd44630b1521685a0ce660","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"125de89cc5df1cc0ca5304f8d225fe77","url":"./img/siteicon/README.html"},{"revision":"8501f5bf34bfd9350193c28f3fe76a51","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"69307deb71bebd39b4631a05b89c18b6","url":"./link/index.html"},{"revision":"239da4fb2c03a14821585ccbb13a049e","url":"./logo/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"d056cc008878ccbaef4580060c1cb7c6","url":"./page/2/index.html"},{"revision":"b68fc8e32aa49041f7741828204b3657","url":"./page/3/index.html"},{"revision":"70e1acb15ba47c77f6b7164f621e4584","url":"./page/4/index.html"},{"revision":"ee0dd00f62d4053f1d9b8acbf4956b88","url":"./post/170d2fe2/index.html"},{"revision":"395ef34f107015782832553cbc12fdb7","url":"./post/173605b1/index.html"},{"revision":"fbb56e015eb9217317d8c27e2cfeac6c","url":"./post/28daef73/index.html"},{"revision":"8c4bfee52e66d0252d877d043eba01d8","url":"./post/28f332e5/index.html"},{"revision":"bb7193096d2f0efeccdc0aef2a435660","url":"./post/348b109c/index.html"},{"revision":"52be5e59dd9bb32d286b901eaf65d96f","url":"./post/38f64154/index.html"},{"revision":"9f2310db413b3f376597356da3a04c8d","url":"./post/3f3c7194/index.html"},{"revision":"83c3d96a7f73a32b7ef634dda064ca4b","url":"./post/4271b0f6/index.html"},{"revision":"dd85ba1de097135bbe1f55dd93618f9b","url":"./post/4363013c/index.html"},{"revision":"12f75977117fc5639efbcc3ee14f648a","url":"./post/56cff1b2/index.html"},{"revision":"a175a0aab139ec2dd0878b0e2d511198","url":"./post/66c9ec0b/index.html"},{"revision":"0dca78ee4c37d193a74f4add89d66df9","url":"./post/6844ebc3/index.html"},{"revision":"3b7a79608b0a3f5975247d3b8c547061","url":"./post/70e43cff/index.html"},{"revision":"ced066414e15b60a1996eea175d99a41","url":"./post/76fd982a/index.html"},{"revision":"607dd2e129e3fa19fc3353f832328e01","url":"./post/7a209fd7/index.html"},{"revision":"07a8637d218387c5dc71c27c5831529f","url":"./post/7e6a05f4/index.html"},{"revision":"c2f825b807b5c9883c258b78222f07b9","url":"./post/8da956c3/index.html"},{"revision":"9fd0ff10434242646b078ff04f970042","url":"./post/938ce57e/index.html"},{"revision":"0f8e983c779f7db5a42d6aa4d113be68","url":"./post/986feafd/index.html"},{"revision":"e466207a4a183147b1cd8aa8b00b301a","url":"./post/9987b8b8/index.html"},{"revision":"1dc8eced16244e7909c28ca1b49bb71a","url":"./post/ac842964/index.html"},{"revision":"b5df23b438feb2560258cb7995d789e6","url":"./post/ae6cda05/index.html"},{"revision":"f8c8ac95d19f4fcd7c89053460a88cab","url":"./post/ae9afd3e/index.html"},{"revision":"9cc42a21ed33e58b3fc45e570fae345a","url":"./post/af3eed3c/index.html"},{"revision":"04b9bf574a6143b363d8106b5a92ce1f","url":"./post/b6596b48/index.html"},{"revision":"69a12fd37c7c00d540198811d841ac8e","url":"./post/b72795da/index.html"},{"revision":"1b5bf573fb6eb81a580d9fd275af9c3d","url":"./post/b9218251/index.html"},{"revision":"74de2560805d41abd7ae728bd18623a6","url":"./post/ba71baad/index.html"},{"revision":"6af8a4bdf58d8e64cd14355b16233525","url":"./post/bc60c27b/index.html"},{"revision":"1fdcc372ea1bf30e186ad56187d9e733","url":"./post/c66d090/index.html"},{"revision":"380e0dc5485c8a2c3dcfc49053bc8373","url":"./post/c8b7dc96/index.html"},{"revision":"0d8fd626fcea6d36ae616a78a2bb5e8a","url":"./post/d92ccc1a/index.html"},{"revision":"61ae339f75639a8c13f776e9f621a924","url":"./post/dc4c1419/index.html"},{"revision":"f80140c26a3137c8230bc8ea5aafc82c","url":"./post/e94e613d/index.html"},{"revision":"27b763d190b407dd556cd9d58d4c9427","url":"./post/ed9d3ffc/index.html"},{"revision":"481472404ed1d5e774b7d3c0718e5ef3","url":"./post/f4b7132e/index.html"},{"revision":"9b8880cd93ab003ff9c299da1fc9e6e3","url":"./post/f782b17c/index.html"},{"revision":"80a69ae9bd7291a333ee8511563997ad","url":"./post/f82aee66/index.html"},{"revision":"0567c34c68637f4e176e7c59689f2372","url":"./random/index.html"},{"revision":"2f81307689e0d3888e731cf68cd09ab8","url":"./search.xml"},{"revision":"2d4abb4d828748ba5e931e0db79edf90","url":"./sitemap.xml"},{"revision":"67e056e0bc73c869f13379a14c027047","url":"./tags/3DsMax/index.html"},{"revision":"ccc50ec395e74361feaf42c6962b1256","url":"./tags/butterfly/index.html"},{"revision":"20d1da3b3e041385c26422fdea96b165","url":"./tags/hexo/index.html"},{"revision":"0253d84d7b0786d2895aa45795ebe939","url":"./tags/hexo插件/index.html"},{"revision":"bf493babc87e340f60dd49e3f6760647","url":"./tags/houdini/index.html"},{"revision":"05198018dc7dd90ed8f68fc92175056e","url":"./tags/index.html"},{"revision":"fc7599678f12ec3109cdf69a34efb409","url":"./tags/npm/index.html"},{"revision":"5e45d337e4a1b1011c43ad3527114c67","url":"./tags/PicGo/index.html"},{"revision":"50006201dcda1417c21535e720fc7270","url":"./tags/python/index.html"},{"revision":"81393ded59bb1e15217f6919e94ec117","url":"./tags/python爬虫/index.html"},{"revision":"60151737897041dd67ecb2aec92b94b3","url":"./tags/test/index.html"},{"revision":"be73d4e53217223b06509df7600c9b0e","url":"./tags/Zbrush/index.html"},{"revision":"8218b880f0130b83e725b0e7648a5dde","url":"./tags/博客搭建/index.html"},{"revision":"0456d5cb9ee12dda985bb350a2e5762a","url":"./tags/图床/index.html"},{"revision":"e3c79beb6647690cc2344fdf6e6b7007","url":"./tags/引擎/index.html"},{"revision":"639f1de8bf60090564593203c37495ad","url":"./tags/彩画研究/index.html"},{"revision":"129d8f4bfa9481a0e4aae5e99121fc7e","url":"./tags/角色/index.html"},{"revision":"44ec228caba1ede6a94e657230ade505","url":"./tags/语言/index.html"}],{
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