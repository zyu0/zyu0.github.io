const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"aa06d082b283b3d2596aaf3813619081","url":"./404.html"},{"revision":"e4977ca0a9994942ef3d208981e939e2","url":"./about/index.html"},{"revision":"ae8cac506433361ad07c4e6a5bf77eb1","url":"./archives/2021/05/index.html"},{"revision":"73e018964b44bc206b93ec46de5ba018","url":"./archives/2021/06/index.html"},{"revision":"2b0e35ec9a0df9f78d10496115e25dc9","url":"./archives/2021/06/page/2/index.html"},{"revision":"d9efcb4640c22596ba2eac165b4f3d8d","url":"./archives/2021/index.html"},{"revision":"08ecdba7de1251f63d77ae9525d5e182","url":"./archives/2021/page/2/index.html"},{"revision":"9158c73db815aa457fae6b8ad1898fcb","url":"./archives/index.html"},{"revision":"688116b13bfee19dc8974bfca3c4c594","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"ee67006bbdfc7d1880ade66d19117805","url":"./categories/index.html"},{"revision":"b70a918c09dadbda445e3cf4610884bc","url":"./categories/test/index.html"},{"revision":"eefa098537e1bed5a561d31330802bea","url":"./categories/博客搭建/index.html"},{"revision":"f48feb2635d74ed85be2144c42e30d70","url":"./categories/程序/index.html"},{"revision":"44bc2b0563e3442932faa5089a8d1b16","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f828b20081a511a16489829908b4eb74","url":"./gallery/me.html"},{"revision":"7685c0c4aafb7983f723dc4e60c12dd0","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"938969eec568e910369995eae0ee11b2","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"a4abe862e139694433b19f74885078ba","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ea6275fdd44ca13652182be029897112","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"a959b9d59a337379272dc63fba6767e6","url":"./page/2/index.html"},{"revision":"218b0f29b7aa6c082507325e4ace82a8","url":"./post/0/index.html"},{"revision":"e09e838a5709025233eaade28106cfd6","url":"./post/28daef73/index.html"},{"revision":"6d5d0d4813c53cf7386c5d41dcbd9a54","url":"./post/28f332e5/index.html"},{"revision":"175726c077ffb6180846095d91706aa6","url":"./post/38f64154/index.html"},{"revision":"1bc9015c3923479f6624210056cb2051","url":"./post/4271b0f6/index.html"},{"revision":"fc29ae129fbd4a57eca66c69e73328d2","url":"./post/8c5e4b35/index.html"},{"revision":"ce910b2fb137f57966580934997a53a4","url":"./post/8efd8d8a/index.html"},{"revision":"7cab7d652e570351f1b4c49117675acc","url":"./post/b580d7ee/index.html"},{"revision":"1ce576c2a4496a7c2eb2bdd4370fe205","url":"./post/b6596b48/index.html"},{"revision":"f8aeb047a8f3bb52cd984989a34d0f0f","url":"./post/ba71baad/index.html"},{"revision":"9dffca85541166810a23c45a02a65303","url":"./post/c8b7dc96/index.html"},{"revision":"2a09f261e96855717361130955fd395f","url":"./post/dc4c1419/index.html"},{"revision":"7c3ff3d832b6f1e4b3ccee58abd96af4","url":"./post/de75e3e6/index.html"},{"revision":"a9014c9304e84b6eab7b997c210ffe23","url":"./post/f8915431/index.html"},{"revision":"4f3901a16c72dff1bcb353dded9077a7","url":"./random/index.html"},{"revision":"4b180bf1d7a62f80ab2782508744c517","url":"./search.xml"},{"revision":"7d7c603b4c20f668184a57d4d3900cd7","url":"./sitemap.xml"},{"revision":"85fb77c73af4aecf584bfbe4bed3cf70","url":"./tags/butterfly/index.html"},{"revision":"466ef06c5c3c1ed0de6bb8eb27dbd4f2","url":"./tags/code/index.html"},{"revision":"b3c81f89db6625a9a28f9e4fb0f40f6b","url":"./tags/hexo/index.html"},{"revision":"0478e09f339eb0dabd49dfa407a3ec6e","url":"./tags/hexo插件/index.html"},{"revision":"9a7d73a356df84933c80ff46cd067391","url":"./tags/index.html"},{"revision":"bf4944905ba6d3ddc4c93bbaf05f4e57","url":"./tags/npm/index.html"},{"revision":"a0b063bfdd1f62654752537ec0edf589","url":"./tags/zzz/index.html"},{"revision":"e9ca4387a56aae1181f272be3b572e1e","url":"./tags/博客搭建/index.html"},{"revision":"1877837513b2269ca06d21625d128578","url":"./tags/图床/index.html"},{"revision":"974f6c4f79a896797f449cd4551e72af","url":"./追番/index.html"}],{
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