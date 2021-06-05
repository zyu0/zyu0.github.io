const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"094296ebc20a44deadd21998dcae5cbf","url":"./404.html"},{"revision":"c1dac293489f78b019eee2cac708ebf2","url":"./about/index.html"},{"revision":"f4032b0823ca7ea4baa2b095d74decfb","url":"./analysis/index.html"},{"revision":"f15d5f8629795900cd3519cc4c5ac058","url":"./archives/2021/05/index.html"},{"revision":"19ae0ecae19909e7574779a81247e10f","url":"./archives/2021/06/index.html"},{"revision":"5cab8edb3fb75890b41da5a7c51e7459","url":"./archives/2021/06/page/2/index.html"},{"revision":"fd7d5493f4213f8567b3967c464baafe","url":"./archives/2021/index.html"},{"revision":"3b2f89ee004f866f3551a3ac94dd1082","url":"./archives/2021/page/2/index.html"},{"revision":"9ebc11dac61daeb37d3f7aa06ee66c8c","url":"./archives/index.html"},{"revision":"1a618d9be84b6bb470d992db2bac58be","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"aa58ac969fae1a9cdbe41a71842868b2","url":"./bilibili/index.html"},{"revision":"00c4e6020fa146c5b2096f20fc34fee1","url":"./categories/index.html"},{"revision":"bd17fd3a9011090bc75f4a2f9fdd351f","url":"./categories/test/index.html"},{"revision":"889e22b88b77851051ba9fa79b766ed0","url":"./categories/博客搭建/index.html"},{"revision":"f728c6eb98ace6d4823a24771f836b40","url":"./categories/模板/index.html"},{"revision":"fbd772f0680ceb0f45a2e39c99ce8797","url":"./categories/程序/index.html"},{"revision":"11a40995416a8d886202e74ca924758b","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"f8bad2ea8545d96fccccf5f6b3ecc4d8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e3bfa657d1a91760eb7ba15311785b01","url":"./gallery/网站图片链接.html"},{"revision":"a692a9fe08d603e4f40cf439bb745a7f","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"3f1cae21b7bd14cd696344f14ebc02ea","url":"./img/siteicon/README.html"},{"revision":"ac5975c32661246f277d6c91c1154d53","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"eba477eb84089c3782323a2a3d1bf551","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"f8c00480b6fd991fc504501ace02641e","url":"./page/2/index.html"},{"revision":"da22d4f42864136a37d8e5a49686c679","url":"./post/0/index.html"},{"revision":"0e547aaa1dc21da7e15aac2789cf8172","url":"./post/28daef73/index.html"},{"revision":"27dd19a72b08e2ae4a523c5eec0d381b","url":"./post/28f332e5/index.html"},{"revision":"b74edc922680188295c5e9ab7f9194ce","url":"./post/38f64154/index.html"},{"revision":"5a096ae824687e628b0d56778bbf2182","url":"./post/4271b0f6/index.html"},{"revision":"ee825c53cc803050e9a2ab7a04a62e15","url":"./post/8c5e4b35/index.html"},{"revision":"e3db3d7bb1ba82b8f822cad9299dc20a","url":"./post/8efd8d8a/index.html"},{"revision":"a9e47d59e9130b47bc45102b799f9676","url":"./post/b580d7ee/index.html"},{"revision":"cfe87ebc1471a804f197a0848d098975","url":"./post/b6596b48/index.html"},{"revision":"45fcebad79ae7b9fc59e121047517a6a","url":"./post/ba71baad/index.html"},{"revision":"ecea35e5e1f93ef57016e691ad724e53","url":"./post/c66d090/index.html"},{"revision":"ec1118d14ecd40bf3a478990be644c62","url":"./post/c8b7dc96/index.html"},{"revision":"0fa55965b09e911b4923be4ef8691a91","url":"./post/dc4c1419/index.html"},{"revision":"ccb79ccb8d5b8a4d2c1bb65346a84ab7","url":"./post/de75e3e6/index.html"},{"revision":"12ab076c21fe4de17556d9ed68b597b7","url":"./post/f8915431/index.html"},{"revision":"27000cdc91c22e70bc36a655602f9931","url":"./random/index.html"},{"revision":"bce8782376283920e8957fd6304a8d4b","url":"./search.xml"},{"revision":"9d01230cc3c6acb581275b957cd309b8","url":"./sitemap.xml"},{"revision":"f9ead3d7078bb8d6ccb1da77803517b6","url":"./tags/butterfly/index.html"},{"revision":"339c26f77cbfb2b726b3f70ae0168992","url":"./tags/code/index.html"},{"revision":"bed51a82af28b8b0cf9a9058941633a1","url":"./tags/hexo/index.html"},{"revision":"cbd5bf50f641ba88edcd505708f79005","url":"./tags/hexo插件/index.html"},{"revision":"91a579bcffa9af79361b99a2b84e958f","url":"./tags/index.html"},{"revision":"b0f5057f00fef11d37451c0270ecdce7","url":"./tags/npm/index.html"},{"revision":"f5e16a69eb18ec3eb2cd57b916f2d7f0","url":"./tags/zzz/index.html"},{"revision":"78194837bf78c5d417b6c5de2834388b","url":"./tags/博客搭建/index.html"},{"revision":"c029eba41116403b864269c0d87527a8","url":"./tags/图床/index.html"}],{
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