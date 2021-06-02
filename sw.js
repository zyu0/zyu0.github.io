const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5639bcfbbb06de18bbf090a67259bfa4","url":"./404.html"},{"revision":"1301c478139f32bec28f361b09394bec","url":"./about/index.html"},{"revision":"90b3c670259d39f466379e2caf2a1a44","url":"./archives/2021/05/index.html"},{"revision":"5e1a42cc923f32c85c40a303253222c2","url":"./archives/2021/06/index.html"},{"revision":"f4f490cac6e193d9c12f6501f16ecb95","url":"./archives/2021/index.html"},{"revision":"3e6e1cd5a9db49bf3dca6efd2f104381","url":"./archives/2021/page/2/index.html"},{"revision":"c17b6cd071a78b3c77ddb9e08a493cd1","url":"./archives/index.html"},{"revision":"a7a20a734a158c1aaf24ce96595b0659","url":"./archives/page/2/index.html"},{"revision":"ffe535f7dc266f0272b4930f1cc70b1b","url":"./categories/code/index.html"},{"revision":"9057146f09cbd67aa46f68962dbbfbf1","url":"./categories/index.html"},{"revision":"c31f53347776e14942cff5eebebcfbfa","url":"./categories/test/index.html"},{"revision":"1cd065398a043cc2ffba076406fb32d6","url":"./categories/test/空页面/index.html"},{"revision":"d7333e190209005d0b43de1ce81c33c9","url":"./categories/博客搭建/index.html"},{"revision":"4b0653abc6bbb1f33fe6a12b3ef782df","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1fc60d38ddb70efc4206b9aca36847a5","url":"./gallery/me.html"},{"revision":"721ea832d6547d3a25443e5ca3d95ff7","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"93a68d27a0462ace7fffd0a9a83eb63c","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"04f9e5334e89a70c6db618926a5fedd6","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"9eaa5eb95900d7323a98694e8257fc37","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"e2e1ee8d4f36be002726376c10c9dd25","url":"./page/2/index.html"},{"revision":"12f37e4c7ca3f1c5ef19dd997e425fa0","url":"./post/28daef73/index.html"},{"revision":"067928d87d959de4b3e711027318ab6d","url":"./post/28f332e5/index.html"},{"revision":"73944aa0c9a9c191648ea82fd87c97dc","url":"./post/38f64154/index.html"},{"revision":"79c1c1f895da9840478ef5a8d3b9389b","url":"./post/8c5e4b35/index.html"},{"revision":"cde35e6e0b13fb5c5c81715b04e7e7d2","url":"./post/8efd8d8a/index.html"},{"revision":"8b90159fe20b121e4500910cd60bdcff","url":"./post/b6596b48/index.html"},{"revision":"18f75ba54dd11ccba27fe4c83302cadd","url":"./post/c8b7dc96/index.html"},{"revision":"72bc819918d65b359d93093ee6ccb897","url":"./post/d87f7e0c/index.html"},{"revision":"12d1eb12ee1ffe805ee5d9c2daa52d57","url":"./post/dc4c1419/index.html"},{"revision":"ef8b1c47997c52082b5e033db9bfc2f5","url":"./post/de75e3e6/index.html"},{"revision":"ba6b1dd26780f5469bf04890a01675fe","url":"./post/f8915431/index.html"},{"revision":"92f874d1dd5ca00df6f6c71b3ae005d3","url":"./search.xml"},{"revision":"df506cd741256d4d01fe268704b774a2","url":"./sitemap.xml"},{"revision":"496a60e854e8616a642ff94cf69bf988","url":"./tags/butterfly/index.html"},{"revision":"a04c274654a94e2d938d80c99e6e7d49","url":"./tags/code/index.html"},{"revision":"9b969270ab2cdb6cef41d136b3eea05f","url":"./tags/hexo/index.html"},{"revision":"18a0a84aafbd4afed62a38d486a1738e","url":"./tags/hexo插件/index.html"},{"revision":"9be0a7ba1659d24baab76c50b2d0f40f","url":"./tags/index.html"},{"revision":"63acc67de363e158451d8fee44170897","url":"./tags/npm/index.html"},{"revision":"cf042195b3d31a9f67251bc5c2b35cf7","url":"./tags/zzz/index.html"},{"revision":"6e642e42877491371e05b66415388642","url":"./tags/博客搭建/index.html"},{"revision":"27ca980086c0bc45eeaf96b3f9597a14","url":"./tags/图床/index.html"}],{
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