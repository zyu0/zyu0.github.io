const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1d919497ab1543b832d841c9e582e1bf","url":"./404.html"},{"revision":"cbbad2623b8468a57b13ba4523bf5458","url":"./about/index.html"},{"revision":"22378bb6e3bd7a3e355603b9c58dcb0b","url":"./analysis/index.html"},{"revision":"2009d0ab1e7a96efcc6032383138bcdb","url":"./archives/2021/05/index.html"},{"revision":"32768bb9d72bf6414260b937d3aa5fdc","url":"./archives/2021/06/index.html"},{"revision":"b7eadb0a9e103cf94430d2f50e696aec","url":"./archives/2021/06/page/2/index.html"},{"revision":"467f5ea077b93cd5ef15794678eab7a9","url":"./archives/2021/index.html"},{"revision":"076ac361ee90b473e5eb13eab82f179d","url":"./archives/2021/page/2/index.html"},{"revision":"ac2f4e0d7cbcc15707aafd6d098937d5","url":"./archives/index.html"},{"revision":"c8a6801af032a21f5b6d1566358e7899","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"9d499ed975366b52b50d945ad5c25ca5","url":"./bilibili/index.html"},{"revision":"5fb16046bc4abc9328ede791860595f3","url":"./categories/index.html"},{"revision":"ac3cc6df34111606095ed52d6bec2d69","url":"./categories/test/index.html"},{"revision":"0ad501cfe21bae22972689e3907b98a1","url":"./categories/博客搭建/index.html"},{"revision":"3bba60318bd297eeb5019572fae27e8a","url":"./categories/程序/index.html"},{"revision":"4c7877b9964cc9d471035c034afb9010","url":"./comments/index.html"},{"revision":"3e417777a26dc4232e02cd44dc165044","url":"./css/custom.css"},{"revision":"23843a5741921a160d7020d8c51b4f13","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3600194bca472fe029c10a2a4e8924f4","url":"./gallery/网站图片链接.html"},{"revision":"c1d5f131666c394ab3f0d38bbca26624","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"14c7f7934681cbc877239cc519033c00","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"f4aeea0c23cefd24e6c9fe88dec63fff","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"d7bdf2a91f4ea243c331ef3548f924e3","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"6ee0390c9ef91af7f38589c959eb0339","url":"./page/2/index.html"},{"revision":"505a5c5f100681b271e1d891c89d08c7","url":"./post/28daef73/index.html"},{"revision":"ac9040fe1a952b1c936da3cbd7b33900","url":"./post/28f332e5/index.html"},{"revision":"a1d11b19ad420630cb2e92d4dc498ef7","url":"./post/38f64154/index.html"},{"revision":"bf0e95dbac3a764afa646df0d1193e8c","url":"./post/4271b0f6/index.html"},{"revision":"ba5f049bafd5015c95a8112e2fbe0291","url":"./post/8c5e4b35/index.html"},{"revision":"87fa01868cf37ea87c12d69e3ad87cde","url":"./post/8efd8d8a/index.html"},{"revision":"4476e47c1e15c8d6640a97095572b657","url":"./post/b580d7ee/index.html"},{"revision":"e8f4b9f9f731713dd06d9b252d0332e6","url":"./post/b6596b48/index.html"},{"revision":"b7c3fd37239480fc29b2400c43515a86","url":"./post/ba71baad/index.html"},{"revision":"e9818f9d4ec512c51e33a18ad417f50e","url":"./post/c66d090/index.html"},{"revision":"aaabf04134657334daec337c88d4f16e","url":"./post/c8b7dc96/index.html"},{"revision":"c159ce1d80a52c2ec8e1894e8af0e69a","url":"./post/dc4c1419/index.html"},{"revision":"2fe77842b6379c092ebf0a6cb3cff9d4","url":"./post/de75e3e6/index.html"},{"revision":"8c3f8747c410cdc07d713a6bdb0d2b83","url":"./post/f8915431/index.html"},{"revision":"455b011cbc05cfbc719728f2b3504536","url":"./random/index.html"},{"revision":"283666c209ce8307d25f60307f5777d4","url":"./search.xml"},{"revision":"8b82b7491b421ff044b1ff12a9bfd630","url":"./sitemap.xml"},{"revision":"1a80565b7a168c8f0686a014bcc3295f","url":"./tags/butterfly/index.html"},{"revision":"ca714e71eadde71947d4557331ca48cf","url":"./tags/code/index.html"},{"revision":"282894bb9505e3a3373f2265c0032192","url":"./tags/hexo/index.html"},{"revision":"e64aad7e645aa92004d078be0b4133d8","url":"./tags/hexo插件/index.html"},{"revision":"d9b7b7c578c299a9ee7ce4fd4530408d","url":"./tags/index.html"},{"revision":"ceeac2ee2f08dd9aed22495ffd4341a8","url":"./tags/npm/index.html"},{"revision":"d4f8df474426dfa4eb846b644930148d","url":"./tags/zzz/index.html"},{"revision":"828f6c0885ee245c504d2226b8ceaf1d","url":"./tags/博客搭建/index.html"},{"revision":"6d7267cbbbeb58d90f8a2422bd165225","url":"./tags/图床/index.html"}],{
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