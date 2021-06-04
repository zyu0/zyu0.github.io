const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5ca13fa410a7499c639f868c8abbf1c4","url":"./404.html"},{"revision":"dcb043be666e995eb7f0324038926e9f","url":"./about/index.html"},{"revision":"2db7dc8e9c50e702421eee39596b1c56","url":"./archives/2021/05/index.html"},{"revision":"6be829b3e45db260edb7c650f52322aa","url":"./archives/2021/06/index.html"},{"revision":"62465cc913d8b8774aa3cf9b349121c1","url":"./archives/2021/06/page/2/index.html"},{"revision":"90758e4a1f63d0ef0cca2aeaf7863c1f","url":"./archives/2021/index.html"},{"revision":"81639e099bb12714d3405142f0302679","url":"./archives/2021/page/2/index.html"},{"revision":"044898bb397b1a7f7b92d41ff5380029","url":"./archives/index.html"},{"revision":"cc9be639a5a8c02b8bc4f9405bbc12e0","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"2763e4f4ea02102b5e5596301461192f","url":"./categories/index.html"},{"revision":"ccad8b984fcc7b507b0699016e793aef","url":"./categories/test/index.html"},{"revision":"b5fe2674d614086658ed6c87388766ff","url":"./categories/博客搭建/index.html"},{"revision":"dfab25c6789aedc9aa0dfeded7e8b51d","url":"./categories/程序/index.html"},{"revision":"44bc2b0563e3442932faa5089a8d1b16","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5d54630d591dcf02a3c0617ee3b9a927","url":"./gallery/me.html"},{"revision":"9fd1194f05aa7d49b5c7ffe6f84e723e","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"90607fa92541dcfe2131417d01fbf73a","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"6ad7a2a462adbe1f3e5d22811e83ae54","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"36ab99a5421502e633754f888e6bffa4","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"c15bc0f9b4ca44cb4c7da59f5d427295","url":"./page/2/index.html"},{"revision":"b7b7bcf4274816000ff8d257375dd545","url":"./post/28daef73/index.html"},{"revision":"3baa92216259a0d2af0943e7a4a78117","url":"./post/28f332e5/index.html"},{"revision":"5dd204c97b833afab7fefbee072ed4d4","url":"./post/38f64154/index.html"},{"revision":"3335b03d1ce35799d58bd05ff98bba4f","url":"./post/4271b0f6/index.html"},{"revision":"66ae4ec577d63868a8258bd171ecc209","url":"./post/8c5e4b35/index.html"},{"revision":"5eedec0b92659a35aec8a0625a463a44","url":"./post/8efd8d8a/index.html"},{"revision":"3f0dcd6adf9c68b6ce562427d74386b9","url":"./post/b580d7ee/index.html"},{"revision":"3817d580f82946ce2a54086d4c0e3d76","url":"./post/b6596b48/index.html"},{"revision":"b3b5cebe691cbc6e84c60f36c879bbab","url":"./post/ba71baad/index.html"},{"revision":"07af651ddd785f85548540cab6730dfb","url":"./post/c66d090/index.html"},{"revision":"80d70f655422bf0af5726ce182534524","url":"./post/c8b7dc96/index.html"},{"revision":"db009cac99d5df03a50fab566efbcf3a","url":"./post/dc4c1419/index.html"},{"revision":"65e028fe75b978df2a30ee180ca357b8","url":"./post/de75e3e6/index.html"},{"revision":"67c235081d2dbcfabb817c4fd4c84dce","url":"./post/f8915431/index.html"},{"revision":"e86ecfd0e131753eebe8691e75511310","url":"./random/index.html"},{"revision":"88f7ed913ed61f527d32a4608773ba5a","url":"./search.xml"},{"revision":"8cfee33f0356c714af06b3d413aa2efe","url":"./sitemap.xml"},{"revision":"43143f5ca37a7ce8845d30e9780ed3ed","url":"./tags/butterfly/index.html"},{"revision":"6000c33bdf212d5461028b87952ed19d","url":"./tags/code/index.html"},{"revision":"afbbbce6be4984c4b52d5fadbd421848","url":"./tags/hexo/index.html"},{"revision":"f02ae0f6218b431e7fd685ed13d929d2","url":"./tags/hexo插件/index.html"},{"revision":"81665c0b8c4497502834db56339f45f9","url":"./tags/index.html"},{"revision":"b3029449938686e9da554181b0c01859","url":"./tags/npm/index.html"},{"revision":"a9b51ae2e5a17e2d1531c0a154581018","url":"./tags/zzz/index.html"},{"revision":"e45de91a531cfd2fafeaa20e2dca5bad","url":"./tags/博客搭建/index.html"},{"revision":"f97854e3b080c7a6d6f20cd739bd491b","url":"./tags/图床/index.html"},{"revision":"4431cceff774a3134dc80bda282fa9f3","url":"./文章统计/index.html"},{"revision":"66f6774ca04bfc2b6b30a219357748f0","url":"./追番/index.html"}],{
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