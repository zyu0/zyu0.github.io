const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5b583426726a654c98d1f5837c1d8b8d","url":"./404.html"},{"revision":"a24ca5f80071743a55763af14aa9b133","url":"./about/index.html"},{"revision":"1693bfa7efdae8dccaeba757bfae3ec5","url":"./analysis/index.html"},{"revision":"ff658f2a585a42d134cfdb55075b7fca","url":"./archives/2021/05/index.html"},{"revision":"757917159bc88f65854303f1fb217653","url":"./archives/2021/06/index.html"},{"revision":"d3f21966b122f63e79f26ecb910ea4a1","url":"./archives/2021/07/index.html"},{"revision":"980f8be955c9d03ccbd65b1510119853","url":"./archives/2021/07/page/2/index.html"},{"revision":"bc8868dbda32f509c3f0c30b9f448f53","url":"./archives/2021/index.html"},{"revision":"3244659fb3389eafa546892a81d5d6f8","url":"./archives/2021/page/2/index.html"},{"revision":"3815acd7f5e9cec7cec333bb6bfa84b6","url":"./archives/2021/page/3/index.html"},{"revision":"bf39904939840e885bf4a93aa4f960e9","url":"./archives/index.html"},{"revision":"91d423b79d5b7e0e92b6dec5260f35b7","url":"./archives/page/2/index.html"},{"revision":"b0ccfadff1e9c12fea0f59447052cbc1","url":"./archives/page/3/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"adad6b035d7ec90df336cbc032027a41","url":"./bilibili/index.html"},{"revision":"af56a0c98bceda0684310104cd5d85f1","url":"./categories/DCC/index.html"},{"revision":"fc273f239f46753fe95fe7c0da682723","url":"./categories/index.html"},{"revision":"a1ee865cc65d1d0d0fc32f0cbf5dc5d8","url":"./categories/test/index.html"},{"revision":"a27723a69d9b45410edd6c5badb5edc8","url":"./categories/博客搭建/index.html"},{"revision":"123a235de826276dfcd6b47fd7596685","url":"./categories/博客搭建/page/2/index.html"},{"revision":"4a528e068187b58db985c382568d0746","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"cb20f3b606308f1c45dff93a32b40ba9","url":"./categories/程序/index.html"},{"revision":"b69a3bc29f52187bfe576727928521ba","url":"./categories/程序/python爬虫/index.html"},{"revision":"cb318469587d85044fe3bc00d2161d30","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"e34bf655275819925535864e9231dc14","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"be4e0a66ad831397bb27c6b233a97c40","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"31d3eca431d632ca4889e64d85e3073e","url":"./gallery/网站图片链接.html"},{"revision":"a90d531d1b732eaed49b79e298ddb98e","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"413af5e0711e84ca29b1c4cc8bbaf332","url":"./img/siteicon/README.html"},{"revision":"e2f3e868cb3ad21dabaa928d2f47ed04","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5b05cdea085a0ca64ad07bb29daf2f0b","url":"./link/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"7460156c1491e7afba4ad31ad4616b21","url":"./page/2/index.html"},{"revision":"f0f8dfc8d8caf661f353080b534df6ce","url":"./page/3/index.html"},{"revision":"bd021812616db538802918725efe9926","url":"./post/0/index.html"},{"revision":"7032ae201cf1dffa2b5a6deeeb1f9f5d","url":"./post/28daef73/index.html"},{"revision":"4d2d220e11a80e22a9de68afce5a6342","url":"./post/28f332e5/index.html"},{"revision":"765a8efca36337633120ea5422bc5f03","url":"./post/38f64154/index.html"},{"revision":"579b7ec9d6e9466ee6316a97006a8a8b","url":"./post/4271b0f6/index.html"},{"revision":"e3238cb6f01a2bbb6321f577396b235b","url":"./post/70e43cff/index.html"},{"revision":"da9f5eaf8b5867d06158577e1cb31fc2","url":"./post/8c5e4b35/index.html"},{"revision":"e21d9eb8a0a93719ddaedf6284b53d59","url":"./post/8efd8d8a/index.html"},{"revision":"5b1468167067d8cb4e8e8271cd7cbb25","url":"./post/986feafd/index.html"},{"revision":"004385d4cbdf8e000fed841bbee0d5f2","url":"./post/9987b8b8/index.html"},{"revision":"4e41907c381a1361b91de320efb766f3","url":"./post/ae6cda05/index.html"},{"revision":"7ff1ca4e95d3155968991a9e08c625e8","url":"./post/af3eed3c/index.html"},{"revision":"5768165405a584156328acdd1ff20855","url":"./post/b580d7ee/index.html"},{"revision":"bd4fd32f7c627bcc9f5fe455edb01c3b","url":"./post/b6596b48/index.html"},{"revision":"a6ec0049985ef6420c42cc3a056c481f","url":"./post/b9218251/index.html"},{"revision":"f1412ae51bc87ba1ccfb7055c8d75234","url":"./post/ba71baad/index.html"},{"revision":"ec4b06ce9f104aea75b8b8fc62d36f62","url":"./post/c66d090/index.html"},{"revision":"833583633a32eaaf300554ac7b1ade27","url":"./post/c8b7dc96/index.html"},{"revision":"55e9aa797f909524d1784ff5644667fd","url":"./post/d92ccc1a/index.html"},{"revision":"36428c44430e2f9f1f04baf6c624f3db","url":"./post/dc4c1419/index.html"},{"revision":"6bde15a476e2a14a60d9fc0c873a5f4f","url":"./post/de75e3e6/index.html"},{"revision":"f99f6ef24f054c5bd9876d90d260b5a3","url":"./post/f782b17c/index.html"},{"revision":"4163def4c6a7db78bfea1e8d2a97fad8","url":"./post/f8915431/index.html"},{"revision":"01679158f0491ad17aedabe80f2e6847","url":"./random/index.html"},{"revision":"1d49ab35407b150de728d35a4a36770b","url":"./search.xml"},{"revision":"8c542462d9290f93ad64aff53bf4600e","url":"./sitemap.xml"},{"revision":"cdaebe739997dac607db358e7a9c4582","url":"./tags/butterfly/index.html"},{"revision":"82d374ca67441b5af7853a43b3e9077a","url":"./tags/code/index.html"},{"revision":"a810461cc29922835080dc141746c8ef","url":"./tags/hexo/index.html"},{"revision":"f00d6cdfb35a9d1e1b9b235a0672782c","url":"./tags/hexo插件/index.html"},{"revision":"d3932ad25465222ab8ac02c9b68f8353","url":"./tags/index.html"},{"revision":"7382cc133e603ef4a2f62800fa83b66a","url":"./tags/npm/index.html"},{"revision":"46d5b9788e96772c9f7d21f3bb18b4da","url":"./tags/python/index.html"},{"revision":"647279fdd0a69277a2c2d3aae6a79d46","url":"./tags/python爬虫/index.html"},{"revision":"d7df33bab02fb0bfb504aab9a225ca6b","url":"./tags/Web/index.html"},{"revision":"822b84e92ce8177e679a1df62c5c72ef","url":"./tags/zzz/index.html"},{"revision":"7f28cd3064ec36b96d770d3c06533fb8","url":"./tags/博客搭建/index.html"},{"revision":"861d08dd4e9745d96b531b18e4432c89","url":"./tags/图床/index.html"}],{
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