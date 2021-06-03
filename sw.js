const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"813b2d1792b56e7cc222a45c476f888d","url":"./404.html"},{"revision":"b5a059f8f116c1eaf57710e1fd56a2d6","url":"./about/index.html"},{"revision":"dbb313f69db6f97bd50c06bf0f8516c0","url":"./archives/2021/05/index.html"},{"revision":"376cc99c18092537586efc096ae4c519","url":"./archives/2021/06/index.html"},{"revision":"a9c4cc728bda434c4502ebbacc4c2d67","url":"./archives/2021/06/page/2/index.html"},{"revision":"c8e995c6a61d15c0deeed5d4b0da9270","url":"./archives/2021/index.html"},{"revision":"e75c4ccabced87ac2a7a4a1981f3fd4d","url":"./archives/2021/page/2/index.html"},{"revision":"ef73084e73107c87287069f143760bf7","url":"./archives/index.html"},{"revision":"8781726bb3120415e0ed1cb29f09713c","url":"./archives/page/2/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"df16d170c34c6f235e4c15f5f4872d4f","url":"./categories/code/index.html"},{"revision":"d921b88761feed1ba326d78b2e637a69","url":"./categories/index.html"},{"revision":"126d9b46cb6122ee37a939d6ce47b44c","url":"./categories/test/index.html"},{"revision":"81a7ad795c9d5d8b90f7592b79b3fbfb","url":"./categories/test/空页面/index.html"},{"revision":"512f2bf981a2d649a44858ffa73b269d","url":"./categories/博客搭建/index.html"},{"revision":"52478021cc73fdd197fe9074026a2d09","url":"./css/custom.css"},{"revision":"b347b5199fef901412c0f8a8abbf9d34","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"7e34a063b9767d11c9be344c5ffcafa4","url":"./gallery/me.html"},{"revision":"33f1f2bdedafcc24640896383e9b53c3","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/favicon_package_v0.16_2/browserconfig.xml"},{"revision":"1a5b2335ab2248f9721b08534a6e77e9","url":"./img/siteicon/favicon_package_v0.16_2/README.html"},{"revision":"765aae40249a37cf067edb27ac4e9e4e","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"bb84e85f93419109a5c6f2740dee6e32","url":"./link/index.html"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./manifest.json"},{"revision":"8d164f1aec3126d28c2f94960800dd9d","url":"./page/2/index.html"},{"revision":"7ca76ead9983398d9b87b020fb5864da","url":"./post/28daef73/index.html"},{"revision":"231befd41bb3c96421198687e0dfd442","url":"./post/28f332e5/index.html"},{"revision":"76709f3af4c0f28e935bd73f578becff","url":"./post/38f64154/index.html"},{"revision":"d1ce1d2a5221fc1180179a5f09737b4f","url":"./post/4271b0f6/index.html"},{"revision":"feaebadd70efefd1868de9186a8e0ee2","url":"./post/50a2b841/index.html"},{"revision":"2e0136320f2f2513cf67a625fd17c047","url":"./post/8c5e4b35/index.html"},{"revision":"ba9b5395ce24b5b8bec2270bd954fa85","url":"./post/8efd8d8a/index.html"},{"revision":"475a0ac3ba920feff99c863e4ba0f641","url":"./post/b6596b48/index.html"},{"revision":"d9c935b3fc55fe3452d6f00105c7a8c0","url":"./post/c8b7dc96/index.html"},{"revision":"7846587b7a2d985da63e6a94f34ae345","url":"./post/d87f7e0c/index.html"},{"revision":"7a95d93b895040fb43d1823feea8b468","url":"./post/dc4c1419/index.html"},{"revision":"afa169c47282e949aefa5953e58f1a1c","url":"./post/de75e3e6/index.html"},{"revision":"4ea34b2192a63c4489f2cd6ad1f7faee","url":"./post/f8915431/index.html"},{"revision":"50a3a364ec76fddc1291042429685ad7","url":"./search.xml"},{"revision":"6e6698f5eba6ef005c361209f49a4c17","url":"./sitemap.xml"},{"revision":"d7ebb77be722180d2309069dcb57c7d5","url":"./tags/butterfly/index.html"},{"revision":"857d8fcb2a84eced4bee81743ea4a041","url":"./tags/code/index.html"},{"revision":"bc47fa15454ff395511d2905c1b5b031","url":"./tags/hexo/index.html"},{"revision":"d3c50501f1db5d12a6e0c4e833c9b5a9","url":"./tags/hexo插件/index.html"},{"revision":"be47e9e61644590a90215b48a3133ddb","url":"./tags/index.html"},{"revision":"a9d6cb7dca88260400a9269bba86a32d","url":"./tags/npm/index.html"},{"revision":"4b0f34a8819ad56739f50f87f471063e","url":"./tags/zzz/index.html"},{"revision":"47d247ebc7dfd956b6a4039d7101a9c5","url":"./tags/博客搭建/index.html"},{"revision":"2de54c4475527e3e6842fa3e7f67d33d","url":"./tags/图床/index.html"}],{
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