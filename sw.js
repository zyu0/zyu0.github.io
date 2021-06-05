const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4c3f271ddde7d9efd1840cff25f41956","url":"./404.html"},{"revision":"e805334abd3f4f945fa4f3c1e66d641b","url":"./about/index.html"},{"revision":"043dfaee01753c83b1a36746174843fe","url":"./analysis/index.html"},{"revision":"b5ae52fb429e06e96f67b46500e99a0f","url":"./archives/2021/05/index.html"},{"revision":"a6d45aced5a81d4a134f55268ba61acd","url":"./archives/2021/06/index.html"},{"revision":"6861f183f91610077cdcbb622e8a8cef","url":"./archives/2021/06/page/2/index.html"},{"revision":"b98c634405424d18f2b580d63c591870","url":"./archives/2021/index.html"},{"revision":"e94971ecc9fee69773f1d922679aa3ee","url":"./archives/2021/page/2/index.html"},{"revision":"a48de4eadb260065ed6a496d13e9e7cc","url":"./archives/index.html"},{"revision":"cb8fc1c3afa421cf4e08cce7bc81c91b","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"886f7eed5f6fb6ba35e978b079880636","url":"./bilibili/index.html"},{"revision":"c3affa6b0079d51bd28298d630a1fbdb","url":"./categories/index.html"},{"revision":"5f1ba35181f2c37d82312a58b54bdba0","url":"./categories/test/index.html"},{"revision":"ab9799506653c1ee0dbe3b6b19b08955","url":"./categories/博客搭建/index.html"},{"revision":"b0cb938bfea17d087f14fe31b0af743b","url":"./categories/程序/index.html"},{"revision":"1bfc1ea9f0b051764d7710dedc749076","url":"./comments/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"27e0d39c459d7531ff7bfd833ee29237","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"be26df013dc754f2f3a33dc2f252dcca","url":"./gallery/网站图片链接.html"},{"revision":"95db5938b7db64d8e0ffbbd4b310734d","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"fbbed11d28318f42ad39bb00c4aeda6c","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"2e24a68a65db1459860dafbdff79a808","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ac47feb42372b9bd78c9077ee1115d5b","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"92ba89ff9338746cc12950a2a4368ff8","url":"./page/2/index.html"},{"revision":"1c3e1f937b35185a3a5600f08efb3c48","url":"./post/28daef73/index.html"},{"revision":"09cc5a39d9a845e4c875bf4fc8135a3c","url":"./post/28f332e5/index.html"},{"revision":"6b0a7f64d6c58faa833e878e918921a4","url":"./post/38f64154/index.html"},{"revision":"2e5d0eb5dc6308df0413b8c75da40944","url":"./post/4271b0f6/index.html"},{"revision":"57718bbdc1768710342b196cc344f1a8","url":"./post/8c5e4b35/index.html"},{"revision":"56d728ee3d7be441564e2e8c62f9c519","url":"./post/8efd8d8a/index.html"},{"revision":"5bfb2e636c7c61cc7e26938953602c0f","url":"./post/b580d7ee/index.html"},{"revision":"cc1ac7eb92c22147bf95ccebe032b510","url":"./post/b6596b48/index.html"},{"revision":"d422b5096bb5cce9d98a9105a5adcc3d","url":"./post/ba71baad/index.html"},{"revision":"ce022465f4d2ab47dd70829584cf1d0d","url":"./post/c66d090/index.html"},{"revision":"6b46dec03331bb1a34552220d8def5ce","url":"./post/c8b7dc96/index.html"},{"revision":"97c46348763c550dabbc8380ec14a8a2","url":"./post/dc4c1419/index.html"},{"revision":"2322842cc66ffa06a1ed311b10ca2e02","url":"./post/de75e3e6/index.html"},{"revision":"52b2a684a2d9a0b127f7e5d0f7c1e640","url":"./post/f8915431/index.html"},{"revision":"de2d9b3015e35ceff1e3205a6a4ef3f7","url":"./random/index.html"},{"revision":"46a0e5198aabd688b34f42caf06f2bad","url":"./search.xml"},{"revision":"7257b7669e8ef943befce6098630a725","url":"./sitemap.xml"},{"revision":"43e1951782d57d899cd5c2d6683a7056","url":"./tags/butterfly/index.html"},{"revision":"51c577b96ec507c009a1b0f642ce328b","url":"./tags/code/index.html"},{"revision":"70baad86f31d2a4cc874dc00c88398fb","url":"./tags/hexo/index.html"},{"revision":"63c182a8b3a01910eaebe527e42de5fd","url":"./tags/hexo插件/index.html"},{"revision":"49c5e5b42711cd53b8d3ba26af0e2534","url":"./tags/index.html"},{"revision":"43f02e8a88ed4335991596b0665f9bac","url":"./tags/npm/index.html"},{"revision":"e3fe6c857ba0063e367575c247f09716","url":"./tags/zzz/index.html"},{"revision":"bcf2a6699e799ca3021d5de2060125a6","url":"./tags/博客搭建/index.html"},{"revision":"7988592ded0c96722c104286f841864e","url":"./tags/图床/index.html"}],{
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