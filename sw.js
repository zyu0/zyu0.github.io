const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"38ce85780840b1c6bc3340cb92b425a3","url":"./404.html"},{"revision":"ed9a2eb7b76d8f8f9cacd51a5d94afcf","url":"./about/index.html"},{"revision":"380337e7a83dde3ed28f15ccc85ceff7","url":"./analysis/index.html"},{"revision":"5df6de280c479c28c2cf5d061214f2a7","url":"./archives/2021/05/index.html"},{"revision":"c97618dcd5319aad87472382fe670a76","url":"./archives/2021/06/index.html"},{"revision":"0e595b36e71f62923ecc79e9c7b1c1a9","url":"./archives/2021/06/page/2/index.html"},{"revision":"d2fc8959c8d8f1412e2458ed6afff518","url":"./archives/2021/index.html"},{"revision":"550c554ca37f107b97fd64510c583336","url":"./archives/2021/page/2/index.html"},{"revision":"38624624a6f405f9902d71d2e558dff2","url":"./archives/index.html"},{"revision":"0b9aa7a4898a00b8b4870a83e83af8e7","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"0edda83c17bd3ba0d094ca9c33befa77","url":"./bilibili/index.html"},{"revision":"5a50a61b19eed31e39f8a6d2b7eaff39","url":"./categories/index.html"},{"revision":"df977d090d7a9778387dedc3b486b590","url":"./categories/test/index.html"},{"revision":"003edefa0b0da5fa54293104a882371e","url":"./categories/博客搭建/index.html"},{"revision":"467d31ef2ec7b803147fe268c472c580","url":"./categories/程序/index.html"},{"revision":"6eb1a865aa743bde95abc361256936c7","url":"./css/custom.css"},{"revision":"fae64e016016fd662d233175a571b7bf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e75aa9416ea80cfa20866ef4bfe6d52b","url":"./gallery/me.html"},{"revision":"f30d3c5bde48e3259014b0a9b1b8f8de","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"7f1e619f8837076738baef87dbeb7ed7","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"58e4a9ce162e0a312ffe39410fa76bd2","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"942b7c0b522f7fb1342f2259d8a30cf8","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"179c6873c5b1de748686cd3ea7f8889b","url":"./page/2/index.html"},{"revision":"2008cacf493a957760ed19d1ae508fd2","url":"./post/28daef73/index.html"},{"revision":"7e216de03ddf90b009abbe8f8216a929","url":"./post/28f332e5/index.html"},{"revision":"f117eca1aba4bac4f5c5a5f92343c161","url":"./post/38f64154/index.html"},{"revision":"bd78d7a51000abf1ba1c754aa107a205","url":"./post/4271b0f6/index.html"},{"revision":"0243e168b5cf6b9b81f16373c932630c","url":"./post/8c5e4b35/index.html"},{"revision":"b037dd29fc87d33a07f6b114c5b32fc3","url":"./post/8efd8d8a/index.html"},{"revision":"076e532726a261fda0308cec4d58e3c9","url":"./post/b580d7ee/index.html"},{"revision":"db0103ca8645a25d033919df61bd5e4c","url":"./post/b6596b48/index.html"},{"revision":"da6458363b01b2b187d0563e97ef4a7a","url":"./post/ba71baad/index.html"},{"revision":"e5854eb3d9520b3afe0aaa19863e5417","url":"./post/c66d090/index.html"},{"revision":"79ff2f5dd24de836b188241840cd0b34","url":"./post/c8b7dc96/index.html"},{"revision":"b80a8f2f29ccc96890bb7facfb544052","url":"./post/dc4c1419/index.html"},{"revision":"54bd63479df0a4be53ab283084f51c5c","url":"./post/de75e3e6/index.html"},{"revision":"d61b43eef74a34b3e36d89593b413d21","url":"./post/f8915431/index.html"},{"revision":"86cbce9fc51e38c7eaa6da1ccd421ae9","url":"./random/index.html"},{"revision":"4507332e6dce6f20c7dad97b35cf6a82","url":"./search.xml"},{"revision":"f3be46be62294f50b66f21fad0a4506f","url":"./sitemap.xml"},{"revision":"b6f54eba1271581cdec18551027d9e32","url":"./tags/butterfly/index.html"},{"revision":"6ede8d361173cdeae72037a72a0a1715","url":"./tags/code/index.html"},{"revision":"06fac08069afe1a2bb5623eb612c8ba1","url":"./tags/hexo/index.html"},{"revision":"61a4136ca7e2050857085f556965b77f","url":"./tags/hexo插件/index.html"},{"revision":"ca72e81f564db72dad5bad194c97adf2","url":"./tags/index.html"},{"revision":"302432829e0c8122d72925a7774566ce","url":"./tags/npm/index.html"},{"revision":"b488a474e1ebf01abf777991db230225","url":"./tags/zzz/index.html"},{"revision":"2003bb8ceab7037341b89dcbc09de92c","url":"./tags/博客搭建/index.html"},{"revision":"3812a2f71a4a518aa13b5f8b7124f900","url":"./tags/图床/index.html"}],{
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