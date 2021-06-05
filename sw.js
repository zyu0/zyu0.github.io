const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ebaa9bbcb3b3557441bbbee4f4f10edd","url":"./404.html"},{"revision":"23d394f9b4e8d701d84f0bc601ef30dc","url":"./about/index.html"},{"revision":"8027c5b7d6d9091c916400d1a017da47","url":"./analysis/index.html"},{"revision":"79e1b6f5c7164fb290e6af64144b308d","url":"./archives/2021/05/index.html"},{"revision":"da390a312970e4196415c00bb7595e6a","url":"./archives/2021/06/index.html"},{"revision":"0cb50e32a1b10307ba23409f662c3d4a","url":"./archives/2021/06/page/2/index.html"},{"revision":"f3ab0fa991314ed304e0119fbb886578","url":"./archives/2021/index.html"},{"revision":"b3955be4a7f65d52872c1df7dbdfac8e","url":"./archives/2021/page/2/index.html"},{"revision":"07236ffd67fa2072fd6aafec04449781","url":"./archives/index.html"},{"revision":"60c1b7975096761c1a1743024de5a7f8","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"3ac8fd9e158d66c28ba5ca0dd7f5213a","url":"./bilibili/index.html"},{"revision":"d023b5f4a297c0fd9b561219b5179af9","url":"./categories/index.html"},{"revision":"2669bbb517203599db683eaa4f0c1e06","url":"./categories/test/index.html"},{"revision":"316a1e6626aa7a33bc8ed263ef86a327","url":"./categories/博客搭建/index.html"},{"revision":"be905d5dfacd306125e131bf8981bc3c","url":"./categories/程序/index.html"},{"revision":"31be57ff70ccf7e077426d137ea0d3ef","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"ecf48259262d4c92519341c286c93fdd","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2b14b1ccd0ca0e6c3b018fe24c4d501b","url":"./gallery/me.html"},{"revision":"0b63130071489bce37bcc7f852f392d6","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"aa3add0c6823adcee1d5fed02e5c1a76","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"b5e6bb7d6b141f9900bd3d507bcde040","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"e2ba44bbb38e7e91fa4462bd5202d6b5","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"c1d0ca9e8289e5827b0b6c4075fdf655","url":"./page/2/index.html"},{"revision":"4b934953729223eabbace00dd3bbda72","url":"./post/28daef73/index.html"},{"revision":"28dd5feccd2e4830fd4958f19d593b02","url":"./post/28f332e5/index.html"},{"revision":"544295e820771b0a70997acf200e5996","url":"./post/38f64154/index.html"},{"revision":"2107f5c62150b0ada717482ac1000112","url":"./post/4271b0f6/index.html"},{"revision":"d51a6bf7b83f543396e66cfc68b9d7fa","url":"./post/8c5e4b35/index.html"},{"revision":"226507788c46b6229bb7bdb61299857b","url":"./post/8efd8d8a/index.html"},{"revision":"2e932944531775a457d99bdf94ffa27e","url":"./post/b580d7ee/index.html"},{"revision":"f15e849a800ee8c10536dc5698a2b63a","url":"./post/b6596b48/index.html"},{"revision":"22639055d1b55878f75af5a774f56cf2","url":"./post/ba71baad/index.html"},{"revision":"155ea893541e2728169a673a05573cd6","url":"./post/c66d090/index.html"},{"revision":"d9424a048289b687baeac56bd80e352d","url":"./post/c8b7dc96/index.html"},{"revision":"b15002db31cc145a7d411c76cbcf2a59","url":"./post/dc4c1419/index.html"},{"revision":"fd7dcc02388368c1b9a8ff4c929de7ac","url":"./post/de75e3e6/index.html"},{"revision":"fc1137533d6c08a73b4f91dfd1d8aa4c","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"af37a0ff62d6a34c311954298754efc5","url":"./search.xml"},{"revision":"c17dce4a970904e6598e96303e230cad","url":"./sitemap.xml"},{"revision":"00caff113b91fdc3ae4ca61b5a5c0507","url":"./tags/butterfly/index.html"},{"revision":"663a35003f41b0fdc0f2a67caac7b0d0","url":"./tags/code/index.html"},{"revision":"395f0a6c41725d4e26821915d11b2ef2","url":"./tags/hexo/index.html"},{"revision":"e00f1bc68f0380ab019956ac99c59039","url":"./tags/hexo插件/index.html"},{"revision":"5163268af1a605ee360ce6b64877e4e3","url":"./tags/index.html"},{"revision":"9264f2784ae63aac591aeab3d0c96ad5","url":"./tags/npm/index.html"},{"revision":"5db03ac32250575bb19c1996dac780a4","url":"./tags/zzz/index.html"},{"revision":"23d9dbc94014379999e0f4e7f989935f","url":"./tags/博客搭建/index.html"},{"revision":"f3c86c26292337b661d7719711b2056d","url":"./tags/图床/index.html"}],{
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