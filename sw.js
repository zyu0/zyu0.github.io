const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"836409dfe278a9f87c28833632986fea","url":"./404.html"},{"revision":"0906fabba1661e39e31040ddb888b32a","url":"./about/index.html"},{"revision":"b564ebeee60fb73d9ad5266ff47db6a7","url":"./archives/2021/05/index.html"},{"revision":"f14ca9e89d2000b96b02c2857f7e38d4","url":"./archives/2021/06/index.html"},{"revision":"c599591d3138af16a652d53a4eca8e6f","url":"./archives/2021/06/page/2/index.html"},{"revision":"847f83a8e0c0576a70b2774677e11b5b","url":"./archives/2021/index.html"},{"revision":"33f89befe2fe78656536fb3477206e77","url":"./archives/2021/page/2/index.html"},{"revision":"81aafd81b51b60814025d48259269544","url":"./archives/index.html"},{"revision":"6307f59266bcea0e8895e802290e3429","url":"./archives/page/2/index.html"},{"revision":"ed671e5f548b12235aa5ab9375648b94","url":"./categories/code/index.html"},{"revision":"d7faaab621ff53d2ac35ecab07b2482c","url":"./categories/index.html"},{"revision":"442c30705d297c90be3831d2f30f9ec2","url":"./categories/test/index.html"},{"revision":"547ee463ba93dd3b9b948d17c3510070","url":"./categories/test/空页面/index.html"},{"revision":"319f962b594cabfdf82915345b7d33b8","url":"./categories/博客搭建/index.html"},{"revision":"bf5b15511ec84ad73477b849d3e75d2c","url":"./css/custom.css"},{"revision":"4b0653abc6bbb1f33fe6a12b3ef782df","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f741852b9cf1f9264d83a40e5a0242c5","url":"./gallery/me.html"},{"revision":"3c6e25db84016a8c2328101ade01373c","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"3326400154a59780cde8083b237a7e65","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"592fb748b1bec1744076d3b2574f4cdb","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"754cc3d36152db808f972f8994d54d2a","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"b5ff930d8520ee1b9e1ac57f01292aca","url":"./page/2/index.html"},{"revision":"b7e6ff52c2e1f115604f008e94c91150","url":"./post/28daef73/index.html"},{"revision":"dcc2cea88dbc3ac6b767ea5c52ea7545","url":"./post/28f332e5/index.html"},{"revision":"5b2fe8b1015298d5b7afdc724a613764","url":"./post/38f64154/index.html"},{"revision":"b9c62c154e76c279e7b4930515a31683","url":"./post/4271b0f6/index.html"},{"revision":"9512cedd96de0135b82b82af14eb224d","url":"./post/50a2b841/index.html"},{"revision":"971c18ead0c0bb251f942c36c379475e","url":"./post/8c5e4b35/index.html"},{"revision":"2e3d029de1a29efe08a997ae8fbe4086","url":"./post/8efd8d8a/index.html"},{"revision":"8197a7b70bfefbd818b48c80a48a5f63","url":"./post/b6596b48/index.html"},{"revision":"756abdeef5d15e20689d9f4e40ccdade","url":"./post/c8b7dc96/index.html"},{"revision":"1d61d787f6d24284a8273b1435e15079","url":"./post/d87f7e0c/index.html"},{"revision":"e1ba6e43f3c9142b4e04638a51795e85","url":"./post/dc4c1419/index.html"},{"revision":"a166c053304482613dcbef2efc8f89d5","url":"./post/de75e3e6/index.html"},{"revision":"46a1abad224d68ace2493e71e39e44b8","url":"./post/f8915431/index.html"},{"revision":"e139bd82bd3129afcc7e7a55e9702e81","url":"./search.xml"},{"revision":"ceceab7d23295718d546e71ddd40b5ba","url":"./sitemap.xml"},{"revision":"619fb4624b44be20657b7345557eee87","url":"./tags/butterfly/index.html"},{"revision":"14f5fbba7f8f5011bc7a1d9273109a64","url":"./tags/code/index.html"},{"revision":"dfdbf575b15185def2cfa186255bdd8d","url":"./tags/hexo/index.html"},{"revision":"14481914b9e97c9e0c51e3f98c4a037e","url":"./tags/hexo插件/index.html"},{"revision":"3c6c489494016c0dacf3993fb68021ea","url":"./tags/index.html"},{"revision":"f608fa3b1a7f4581f93ddbf662ca0ac3","url":"./tags/npm/index.html"},{"revision":"c0e1a875f0f8264f3c22ca2270a359d2","url":"./tags/zzz/index.html"},{"revision":"28be3f2901b4e53f42d3d28a086ef58d","url":"./tags/博客搭建/index.html"},{"revision":"fc690c6dcf22e0ce3eaafc24931f762d","url":"./tags/图床/index.html"}],{
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