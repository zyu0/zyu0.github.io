const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8f9464560c23fbcc7f411cfc5b589300","url":"./404.html"},{"revision":"27471778ad76cc35becc006386146ae4","url":"./about/index.html"},{"revision":"da3e56fd8fc8f699bde6f88588c83205","url":"./analysis/index.html"},{"revision":"62c7c07e79a0bc7d7834c557411151ff","url":"./archives/2021/05/index.html"},{"revision":"4d3571eacce50e0d302136389ed45934","url":"./archives/2021/06/index.html"},{"revision":"b5f5f2c9d8229a0c9bc4574ba8f62eb5","url":"./archives/2021/06/page/2/index.html"},{"revision":"3e50bd6599789599fb381852d89a1948","url":"./archives/2021/index.html"},{"revision":"35e5a00d934efcef744a44f5542f97fa","url":"./archives/2021/page/2/index.html"},{"revision":"02406849fff6f16218200d04da899f0d","url":"./archives/index.html"},{"revision":"da0054ec5d0fa59779e7e250834290c3","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"8464dc1ae1dd321468bf4c6130c0ecb8","url":"./bilibili/index.html"},{"revision":"0fdeb8914eaab9878d5f82d8554bb6ec","url":"./categories/index.html"},{"revision":"b2523383f13adfb4887c3068f2a1562e","url":"./categories/test/index.html"},{"revision":"e3ecfe67b2f96c5c274b88aeb6126e04","url":"./categories/博客搭建/index.html"},{"revision":"a753ec4dd13c1c90c9b93e2af810ab80","url":"./categories/程序/index.html"},{"revision":"e97980167a0e77c1d0f4077aeb837980","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e4ac6ab98e5de23f57c17091ae49e36a","url":"./gallery/me.html"},{"revision":"70cc8a18947ff5aeae0f83c91a36d428","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"aca27bcace04d6c02f512d86a9d902e5","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"622c0611d18d7edc828d638ea6de8979","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ca71e9a4c518e30266ab094b821a9fd2","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"e47bba3da5ff31380554d543418eefcb","url":"./page/2/index.html"},{"revision":"913466f107117d26bc2197eb5e36b177","url":"./post/28daef73/index.html"},{"revision":"a3e148a7ebf9369fd34804b06ea64dc1","url":"./post/28f332e5/index.html"},{"revision":"1e66f521ba4ec0478fa2f6b3aca96a45","url":"./post/38f64154/index.html"},{"revision":"8da17f58ff5d6e80de1d2b8cac1096f9","url":"./post/4271b0f6/index.html"},{"revision":"b1ac9ee55e95f36fa9936ca62c52064e","url":"./post/8c5e4b35/index.html"},{"revision":"263a132599d9ffcedfff12bdf469e026","url":"./post/8efd8d8a/index.html"},{"revision":"430a06cde284fb242a135fc6dddb6945","url":"./post/b580d7ee/index.html"},{"revision":"c105f7d3ada0ba42c1be0ccd581c771d","url":"./post/b6596b48/index.html"},{"revision":"16d0b0631f9c7a453b7fd44b38e0e489","url":"./post/ba71baad/index.html"},{"revision":"e6422c6391ed674201d5116b53db8309","url":"./post/c66d090/index.html"},{"revision":"f886b62adef0613d1a7efc9a13a3d740","url":"./post/c8b7dc96/index.html"},{"revision":"657c4bcd2de5ef8ccf2cbf702edbd541","url":"./post/dc4c1419/index.html"},{"revision":"b07fef3418054537821938c8bb4b8257","url":"./post/de75e3e6/index.html"},{"revision":"afb49b7f3384994a3013809f7966565e","url":"./post/f8915431/index.html"},{"revision":"86cbce9fc51e38c7eaa6da1ccd421ae9","url":"./random/index.html"},{"revision":"95af402858fb6a22a96d846b2bcf6b99","url":"./search.xml"},{"revision":"d8c0584452b971f34eade88644b5b7b0","url":"./sitemap.xml"},{"revision":"8b3531e6a2ec9c4b82a3bcf467bede9c","url":"./tags/butterfly/index.html"},{"revision":"d5959429c02a1accab1f8e0e72048bdf","url":"./tags/code/index.html"},{"revision":"c740d784eac008212d2503b644219398","url":"./tags/hexo/index.html"},{"revision":"3473a34295f8496ba4cfc35dfb0555e7","url":"./tags/hexo插件/index.html"},{"revision":"4347eb2bce3618cde63defc78e8b9676","url":"./tags/index.html"},{"revision":"7d4cbd883a0daa465c0dab3332db9fc4","url":"./tags/npm/index.html"},{"revision":"df290461d1e4c776b692dc7a7124f847","url":"./tags/zzz/index.html"},{"revision":"253d79c3eacc4647dd13986d78e38f65","url":"./tags/博客搭建/index.html"},{"revision":"47b006f64d101f63bc15ab8df3eb0216","url":"./tags/图床/index.html"},{"revision":"c649a3c35a27e2019c05fefa1a315adf","url":"./追番/index.html"}],{
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