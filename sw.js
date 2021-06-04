const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2d32b0643ca7e7fe0cd0b9b1b4976b2e","url":"./404.html"},{"revision":"56d91f039424c7182ae8f6c68c5ee2d9","url":"./about/index.html"},{"revision":"7b336b73f2c0a4f6f4af36e027647f02","url":"./archives/2021/05/index.html"},{"revision":"d68f0a1d6e2a90460d1d915e86982690","url":"./archives/2021/06/index.html"},{"revision":"630b91ced3fe811302852a8c3c4cb62f","url":"./archives/2021/06/page/2/index.html"},{"revision":"f42ebc34ae5aa6c88318f6d45493de8f","url":"./archives/2021/index.html"},{"revision":"04a0efc052057033b9c90033b5deccdf","url":"./archives/2021/page/2/index.html"},{"revision":"7be3dd3dff6e00531b5dc0724a5c4ee2","url":"./archives/index.html"},{"revision":"fecdc9e7d91416f0b928b05003d5b016","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"865e5338c89e5fa0612865c2d119ee7b","url":"./categories/code/index.html"},{"revision":"56489d52acb594a8a3cf0ff3840e358c","url":"./categories/index.html"},{"revision":"35bc93822d41c43e201675bfdffc08ad","url":"./categories/test/index.html"},{"revision":"2a432bb899e2b2cc73930a5f9ada2b99","url":"./categories/test/空页面/index.html"},{"revision":"1cb2cc245d5d42a5e2e64378670ccba1","url":"./categories/博客搭建/index.html"},{"revision":"44bc2b0563e3442932faa5089a8d1b16","url":"./css/custom.css"},{"revision":"b347b5199fef901412c0f8a8abbf9d34","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aa8c2e8d746e22ee803ccbf98e97f64f","url":"./gallery/me.html"},{"revision":"e6b3455f092875588cbbab6d33d87c04","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"f4a82c15b267bcd21f919984eb51d9f7","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"03cc247a5ebd171576eb8b9a2ca04f6a","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"a8c47f73d66edb3268991faa9bf86260","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"a5e163e754107b874d3ee47b42ff497f","url":"./page/2/index.html"},{"revision":"b8b5895b588603bdd80c88d56969c541","url":"./post/28daef73/index.html"},{"revision":"0a8ec65dbd1b62bd96da07955b85781b","url":"./post/28f332e5/index.html"},{"revision":"ba1cfdd0e1231a56c8cd81f02f4a9eb9","url":"./post/38f64154/index.html"},{"revision":"3875c5b5c62830cdc28e760130ce675b","url":"./post/4271b0f6/index.html"},{"revision":"677d61720c18f4bf75cfe5c6deae49f6","url":"./post/8c5e4b35/index.html"},{"revision":"e7b26183058cdd82b0e8eb9e5a22db00","url":"./post/8efd8d8a/index.html"},{"revision":"32657a96e9393655bca733a0699ff718","url":"./post/b580d7ee/index.html"},{"revision":"3b899158da928a5833d9d3223e0448b6","url":"./post/b6596b48/index.html"},{"revision":"238da0614ed26c5fa04844819054c924","url":"./post/ba71baad/index.html"},{"revision":"bf4547e29ffa1d86dfd61e2f0a41ab40","url":"./post/c8b7dc96/index.html"},{"revision":"67d7eaf240858e66fb4ea314c0070b15","url":"./post/dc4c1419/index.html"},{"revision":"4434d02347c31288a4d6d301a68a649b","url":"./post/de75e3e6/index.html"},{"revision":"605a5e3e7f7cfcb26e5f23f6dd0f9c71","url":"./post/f8915431/index.html"},{"revision":"5ccaa08120f7a605e129a2e2d3c1e6b3","url":"./search.xml"},{"revision":"73336272a7d49ecc113b7ce892e507cc","url":"./sitemap.xml"},{"revision":"57fbc28a36335cf17c0d2f55636d436c","url":"./tags/butterfly/index.html"},{"revision":"5f287e3ec890cdd0b6f05cd5a6cb7fc4","url":"./tags/code/index.html"},{"revision":"9cd2a59b00382a51a7ee01af212ac24c","url":"./tags/hexo/index.html"},{"revision":"14a4bbe50babbde6601150099853695e","url":"./tags/hexo插件/index.html"},{"revision":"53470a06563764f0701b51e9a3c22431","url":"./tags/index.html"},{"revision":"fe52d1f94230141a5ac09a322e0412ba","url":"./tags/npm/index.html"},{"revision":"4a11c892c9b5d55f3403ea9662c22903","url":"./tags/zzz/index.html"},{"revision":"dd3d546fbe1584821afba6ac1cf6f013","url":"./tags/博客搭建/index.html"},{"revision":"7a672be67e72abc627b69a85f5d265c9","url":"./tags/图床/index.html"}],{
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