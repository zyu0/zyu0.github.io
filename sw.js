const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"43748d3f126bfbad9a695957e784970a","url":"./404.html"},{"revision":"b8526b806feb4dfed5343dcad5a2b7df","url":"./about/index.html"},{"revision":"fed323ca531407ce8b36d43a0a36d846","url":"./analysis/index.html"},{"revision":"d42b8aa96b01997d5a88fc0e529c8eb7","url":"./archives/2021/05/index.html"},{"revision":"632084c738860bd22adde21b8c4b8c71","url":"./archives/2021/06/index.html"},{"revision":"5a8b643476e0c19e590df2497ccfda64","url":"./archives/2021/06/page/2/index.html"},{"revision":"2cc15d002536286581004d4b148dc622","url":"./archives/2021/07/index.html"},{"revision":"540e598053cea19857a06d6dc6bd43c6","url":"./archives/2021/11/index.html"},{"revision":"bc0c73f4c36c5c570e8a7c765f77743a","url":"./archives/2021/index.html"},{"revision":"d7afcf960ef6702e7ea65c55b7d73391","url":"./archives/2021/page/2/index.html"},{"revision":"c03188e8be3c7d40fb19b94f55250908","url":"./archives/2021/page/3/index.html"},{"revision":"9c5f88ca03023579596390fa6a891d0f","url":"./archives/2021/page/4/index.html"},{"revision":"124d6b02f2389930b0bacfefe2f0b9c0","url":"./archives/index.html"},{"revision":"16a322dcd89e16700410e10bc33d3458","url":"./archives/page/2/index.html"},{"revision":"cc3a8503ab6f649c4548a6ab2ebfb4ec","url":"./archives/page/3/index.html"},{"revision":"57f7971821b6889faff2c5f3232ec6e1","url":"./archives/page/4/index.html"},{"revision":"eb56d104cc45c8a1afc3320e7f182862","url":"./background.js"},{"revision":"37ccc1ca2e67a661acc6d30b688a3c77","url":"./bilibili/index.html"},{"revision":"cd001a965d73e9fbbf24fcfa5bb66403","url":"./categories/DCC/3DsMAX/index.html"},{"revision":"4c979ead52daa866af08d0afacad01d8","url":"./categories/DCC/Houdini/index.html"},{"revision":"fe7a209b01ce134a84760546c9c54d92","url":"./categories/DCC/index.html"},{"revision":"76e756408fe2d6effbb7c5f0486e9b60","url":"./categories/DCC/Zbrush/index.html"},{"revision":"1a03674fbf56039aded0137fb8b50b1f","url":"./categories/index.html"},{"revision":"1749082a391b64685c9d10d2397525dd","url":"./categories/MAX官方文档摘录/index.html"},{"revision":"9a869559540de5af9ed737a40fc76842","url":"./categories/test/index.html"},{"revision":"1ddd9f84462bbaf1d888e74c4ec7a93b","url":"./categories/博客搭建/index.html"},{"revision":"3261167643bfa5443732b87e437e810f","url":"./categories/博客搭建/插件测试/index.html"},{"revision":"cf9a77268d3af94d983c7e39971719c2","url":"./categories/引擎/index.html"},{"revision":"0328779bd35878ef0b016cea8022cdff","url":"./categories/引擎/UE4/index.html"},{"revision":"e00311e9db2578ad7df9fefbbcfbc870","url":"./categories/彩画/index.html"},{"revision":"5e81ebce1db514595fd085a15c3642a0","url":"./categories/彩画/第一章/index.html"},{"revision":"41fbcd4b7c3b395248fb0de7b2993276","url":"./categories/彩画/第二章/index.html"},{"revision":"523bf6b3d0ff8de1d0d06d7ccd0a93a6","url":"./categories/程序/index.html"},{"revision":"ec395f536303577ae652da2835e2a260","url":"./categories/程序/python爬虫/index.html"},{"revision":"f5b8b17048ff97621fc285cddbe04027","url":"./categories/程序/python爬虫/request/index.html"},{"revision":"7bdd0ab53f71366b5f5c6c145e718b2c","url":"./categories/角色/index.html"},{"revision":"d479e0d91122316312d73a1c965cd0b7","url":"./comments/index.html"},{"revision":"987f596794788d7b91b9e37f401172db","url":"./css/custom.css"},{"revision":"a6b24ba93de4aedef1bf736b8bb3c612","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"864dc9d6aeb72de96bbfddd6dd731d52","url":"./gallery/网站图片链接.html"},{"revision":"1af2f0dd761ca1a13509dbca517815d4","url":"./galleryGroup/index.html"},{"revision":"65603d97bb83e3e345076c4ee48fd68e","url":"./img/siteicon/browserconfig.xml"},{"revision":"440d47d6cb5cac52b3ed77f4a362b4b2","url":"./img/siteicon/manifest.json"},{"revision":"2dac7361229dbcf9c2d9c19e2ef4dff1","url":"./img/siteicon/README.html"},{"revision":"30be95c8cc04f90cd15e6e919ee6ad43","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"dcf69c07e6595a5fce5121731baf2525","url":"./js/swiper_init.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"3a7e893a510aa50e5d954710ebc4f44e","url":"./link/index.html"},{"revision":"239da4fb2c03a14821585ccbb13a049e","url":"./logo/index.html"},{"revision":"f6e5ab012242e4b211bd2260f511366a","url":"./manifest.json"},{"revision":"c96c1f874ec671a03eb4ad00e77edb3b","url":"./page/2/index.html"},{"revision":"36df3a1a30af90b58520a2e6a7b2a68f","url":"./page/3/index.html"},{"revision":"110d5bbeb54f32de8b4dfac4427f051f","url":"./page/4/index.html"},{"revision":"8d1fa6fb2a7729c9f4c601a2eddf2086","url":"./post/28daef73/index.html"},{"revision":"5a45b1c399f41cffbaf055dab76104dd","url":"./post/28f332e5/index.html"},{"revision":"afd108e5dab8ebcb10d14cc24b8971ea","url":"./post/348b109c/index.html"},{"revision":"48c1c6a7584dbd661a07ae9fe8fc9594","url":"./post/38f64154/index.html"},{"revision":"915e156999908936d731239b2913cc2b","url":"./post/3f3c7194/index.html"},{"revision":"820905c779137feb809f6c93aa112fd8","url":"./post/4271b0f6/index.html"},{"revision":"ef01faf259d2ca56452524091701dc5c","url":"./post/4363013c/index.html"},{"revision":"764cc8ba13d3b718146144ad6c4067b8","url":"./post/56cff1b2/index.html"},{"revision":"15816236d13a84bac43f12d5917b2e8b","url":"./post/6844ebc3/index.html"},{"revision":"043dfe455256dc6f9572ddf3e86fe7ba","url":"./post/70e43cff/index.html"},{"revision":"cb642ccfe0ca4a79be1b1c54e2f6f04d","url":"./post/76fd982a/index.html"},{"revision":"033424a868f3f8c63b3ffc6722d51006","url":"./post/7a209fd7/index.html"},{"revision":"333f8499b1bd3aa85d2b15e053fc4bcf","url":"./post/7e6a05f4/index.html"},{"revision":"a4914a9aba70c021b6853be6078cd2e2","url":"./post/938ce57e/index.html"},{"revision":"7f01edc9c860733bc0be579d74154903","url":"./post/986feafd/index.html"},{"revision":"681d1737e68dea140a31b44e5a1cbac3","url":"./post/9987b8b8/index.html"},{"revision":"a82aec780dc27f6f57c7f1524106d5c5","url":"./post/ac842964/index.html"},{"revision":"6acf8799caf1bb40c97410339393ef66","url":"./post/ae6cda05/index.html"},{"revision":"ef39451dff183431bdfadd8414d39b98","url":"./post/af3eed3c/index.html"},{"revision":"dd557c8764c8bbd244b71a4dbceb9859","url":"./post/b6596b48/index.html"},{"revision":"71fcdf2b0ab796ff70299a45ccc8e539","url":"./post/b9218251/index.html"},{"revision":"3ac9e21bef7897b9a06f360f9dabf6f6","url":"./post/ba71baad/index.html"},{"revision":"03025595552fae921239c8b7820c063b","url":"./post/bc60c27b/index.html"},{"revision":"97d2b46a2e1c436c1754b428715c8d87","url":"./post/c66d090/index.html"},{"revision":"96a039d182a39e9b0ef2a6b4a37c7718","url":"./post/c8b7dc96/index.html"},{"revision":"d3209ca69952a01fde40b647391948eb","url":"./post/d92ccc1a/index.html"},{"revision":"40b30abbf27bfee798fdb11f9d7dfcf6","url":"./post/dc4c1419/index.html"},{"revision":"7667758c488200898ef2874d2f6994f3","url":"./post/e94e613d/index.html"},{"revision":"af1300e8364536cf42194e9325fc24db","url":"./post/ed9d3ffc/index.html"},{"revision":"b134eb217b1a7159076522cf654c421e","url":"./post/f4b7132e/index.html"},{"revision":"e1cade1b1ebda9f26da2e8bd949522b2","url":"./post/f782b17c/index.html"},{"revision":"f07dd6bbc05b92622c5b05d7a691e812","url":"./random/index.html"},{"revision":"74a031f415a003969a48280ef04905e8","url":"./search.xml"},{"revision":"f637052aad05d0ec0b95ba73415a0305","url":"./sitemap.xml"},{"revision":"23d33d6fd808db0f85011c185ce065b8","url":"./tags/3DsMax/index.html"},{"revision":"d12a289880095abace6e6f4db39f0cc1","url":"./tags/butterfly/index.html"},{"revision":"eeda6c84f772502981ea4d971b9af1f8","url":"./tags/hexo/index.html"},{"revision":"70a00add318d3d9c14d74e209a5b0609","url":"./tags/hexo插件/index.html"},{"revision":"aaa682a92d029cf5b47a6ff1b1b2cb58","url":"./tags/houdini/index.html"},{"revision":"05431048ea250362fe74ff9cd7a164dc","url":"./tags/index.html"},{"revision":"1f361ffd49a1e1d312badde21fa778ca","url":"./tags/npm/index.html"},{"revision":"ec422bbe1cd0ae2e5341c52b4b10374a","url":"./tags/PicGo/index.html"},{"revision":"5343b16691fa0d91031d49ea1631f0e8","url":"./tags/python/index.html"},{"revision":"161a94d03fe1682c20699dfc6ae37736","url":"./tags/python爬虫/index.html"},{"revision":"18e1d4ee0b06306763facecad94c688c","url":"./tags/test/index.html"},{"revision":"51587dc5147bd74a0b9a028774c31750","url":"./tags/Zbrush/index.html"},{"revision":"40526d8a59284d7edded4d5e7b63a3de","url":"./tags/博客搭建/index.html"},{"revision":"783bfb8788fd3395eaee350eadb9c637","url":"./tags/图床/index.html"},{"revision":"fb246403d6bafab1372e61871f87a3f3","url":"./tags/引擎/index.html"},{"revision":"7eedf585d3675adda1ad0fe98652873d","url":"./tags/彩画研究/index.html"},{"revision":"083a6548ae22bc8237686c5a64341e73","url":"./tags/角色/index.html"}],{
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