if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,f)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=f(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"88f2ac947edd05bcdaa6d30d45942fd6"},{url:"about/index.html",revision:"24c2a273f9c4088ec7f6ae2651d60201"},{url:"archives/2021/05/index.html",revision:"c735388aff480e24ac2480c35ade7cdf"},{url:"archives/2021/06/index.html",revision:"d27ee0d51b9eb911e4d88f7ab8950375"},{url:"archives/2021/index.html",revision:"ae8c0b9bfd7c2f9183971a9a4ed134bb"},{url:"archives/index.html",revision:"2976715521175f21788ba863514080a3"},{url:"categories/code/index.html",revision:"7c6b290c7af6ba56ae69aff04a8ef44e"},{url:"categories/index.html",revision:"f2521be6072ba94f0db805c7b59cecdf"},{url:"css/index.css",revision:"26f429b150623ab283a66ca9b3f668dc"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/me.html",revision:"c6398e2b9756c39f7f2556c56297e40d"},{url:"gallery/me/dajeong-park-01.jpg",revision:"f4b4d31ebe865c34309b966c00f5b76b"},{url:"gallery/me/dajeong-park-02-1.jpg",revision:"2864590e972847872d95c872ab8fb881"},{url:"gallery/me/dajeong-park-03.jpg",revision:"226bf87d3bd50aa62ce6ef64882b915f"},{url:"gallery/me/dajeong-park-080-pose4-04-1.jpg",revision:"6b0cb10408d39e6055b040bd940f6745"},{url:"gallery/me/dajeong-park-080-pose4-05-1.jpg",revision:"fbbe3691e25b595e9bf8766f0963bf6d"},{url:"gallery/me/dajeong-park-080-pose4-06.jpg",revision:"695b2b94ab5466f2935c92cd1b7dbc18"},{url:"galleryGroup/index.html",revision:"59df360c8fc7f8ab2ce6ae18177e9165"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-me.png",revision:"2f750ca5804ce0b0b8418f294fd0eb0c"},{url:"img/avatar.png",revision:"b5682077b16d59a73ce70392c134a9b7"},{url:"img/favicon-16x16-me.png",revision:"61ff5d7d516e2c113739b2fff98a32f8"},{url:"img/favicon-32x32-me.png",revision:"9b6f21f3e3fe1917a6df1af4fb894cc5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo-me.svg",revision:"9d2f9f6fba43f48b00138e92a863e96e"},{url:"img/top-img/apple_via-del-corso-opens-in-rome-exterior-building.jpg",revision:"0af741d541f99b85cf8a30796d771938"},{url:"img/top-img/eddie-mendoza-the-boulevard.jpg",revision:"5a9cb53efcb02f935ce5913df346cf9e"},{url:"img/top-img/hayward-gallery-50th-anniversary-03.jpg",revision:"463c368bdf51ee5c194decf423738100"},{url:"img/top-img/lou-ll-88607719-p0.jpg",revision:"9a1b937f6f40a0a2e99b7997859792b6"},{url:"img/top-img/lou-ll-bedroom-engage-26-small.jpg",revision:"1ba45e3cf30f3291f544b6cb468f5a60"},{url:"img/top-img/lou-ll-lou-ll-princess-26-small.jpg",revision:"00291a964c739c3a5303f3aedf2256be"},{url:"img/top-img/lou-ll-maids-27.jpg",revision:"22a928fb61616a98328bc5e222656382"},{url:"img/top-img/lou-ll-maids-48-small.jpg",revision:"1f43f82f968fe74b49a22fbc39292edf"},{url:"img/top-img/lou-ll-maids-take-off-shoes-40.jpg",revision:"add6eb7fc43fb1b69895b503d97a675d"},{url:"index.html",revision:"653fd9cd5f79d483a05e12efc4dc24d8"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"a10746496b96157e7f84c30b11efc35a"},{url:"post/0/index.html",revision:"84b0f1b1889d6d3f21e5ffdff280703b"},{url:"post/8c5e4b35/index.html",revision:"9b8e14591e2afc048e0486c5dcc4a427"},{url:"post/8efd8d8a/index.html",revision:"906082b5a4b30f0fb0b8cd8b12d60bc5"},{url:"post/d87f7e0c/index.html",revision:"cd4f823893b187a76bc80cbefb3325ef"},{url:"post/dc4c1419/index.html",revision:"769343c246e32292d0f957de043face2"},{url:"post/dc4c1419/photo.png",revision:"ed8db6fedf797059f9d0c53bd7a5d5a5"},{url:"post/de75e3e6/index.html",revision:"4de7c78f86b3f766ae8d99f8ec90347c"},{url:"post/f8915431/index.html",revision:"c7b5dd74451e042da811419a4a22d4ce"},{url:"tags/code/index.html",revision:"241b0b0e7789481ec022560f401aba34"},{url:"tags/index.html",revision:"065818a399f1981fedd5887a14961744"},{url:"tags/zzz/index.html",revision:"60f52101d6ad95733227059c92cb39f5"}],{})}));
//# sourceMappingURL=service-worker.js.map
