if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return f;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"dc61a4bded0d418515e344f0f77e5ab5"},{url:"about/index.html",revision:"c4782c06f3c09f8e2725aabd377e518a"},{url:"archives/2021/05/index.html",revision:"aa877d42bdf897dc207d8f8994477933"},{url:"archives/2021/06/index.html",revision:"34941bc2d598e285256b148cc646ff91"},{url:"archives/2021/index.html",revision:"4692fb5a23244dc4e8eb94587973b30c"},{url:"archives/index.html",revision:"9ca74108814b7a5a69596acd1e42a59c"},{url:"categories/code/index.html",revision:"c9e0e32677f1140dcc3473dcbf6d503a"},{url:"categories/index.html",revision:"b3dde368d40a8d7ccd0f335143a7c130"},{url:"css/index.css",revision:"26f429b150623ab283a66ca9b3f668dc"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/me.html",revision:"a4b07a2587e6a0143716be38e55685cb"},{url:"gallery/me/dajeong-park-01.jpg",revision:"f4b4d31ebe865c34309b966c00f5b76b"},{url:"gallery/me/dajeong-park-02-1.jpg",revision:"2864590e972847872d95c872ab8fb881"},{url:"gallery/me/dajeong-park-03.jpg",revision:"226bf87d3bd50aa62ce6ef64882b915f"},{url:"gallery/me/dajeong-park-080-pose4-04-1.jpg",revision:"6b0cb10408d39e6055b040bd940f6745"},{url:"gallery/me/dajeong-park-080-pose4-05-1.jpg",revision:"fbbe3691e25b595e9bf8766f0963bf6d"},{url:"gallery/me/dajeong-park-080-pose4-06.jpg",revision:"695b2b94ab5466f2935c92cd1b7dbc18"},{url:"galleryGroup/index.html",revision:"87401ff45603db16d085fd2b1b1c59a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-me.png",revision:"2f750ca5804ce0b0b8418f294fd0eb0c"},{url:"img/avatar.png",revision:"b5682077b16d59a73ce70392c134a9b7"},{url:"img/favicon-16x16-me.png",revision:"61ff5d7d516e2c113739b2fff98a32f8"},{url:"img/favicon-32x32-me.png",revision:"9b6f21f3e3fe1917a6df1af4fb894cc5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo-me.svg",revision:"9d2f9f6fba43f48b00138e92a863e96e"},{url:"img/top-img/apple_via-del-corso-opens-in-rome-exterior-building.jpg",revision:"0af741d541f99b85cf8a30796d771938"},{url:"img/top-img/eddie-mendoza-the-boulevard.jpg",revision:"5a9cb53efcb02f935ce5913df346cf9e"},{url:"img/top-img/hayward-gallery-50th-anniversary-03.jpg",revision:"463c368bdf51ee5c194decf423738100"},{url:"img/top-img/lou-ll-88607719-p0.jpg",revision:"9a1b937f6f40a0a2e99b7997859792b6"},{url:"img/top-img/lou-ll-bedroom-engage-26-small.jpg",revision:"1ba45e3cf30f3291f544b6cb468f5a60"},{url:"img/top-img/lou-ll-lou-ll-princess-26-small.jpg",revision:"00291a964c739c3a5303f3aedf2256be"},{url:"img/top-img/lou-ll-maids-27.jpg",revision:"22a928fb61616a98328bc5e222656382"},{url:"img/top-img/lou-ll-maids-48-small.jpg",revision:"1f43f82f968fe74b49a22fbc39292edf"},{url:"img/top-img/lou-ll-maids-take-off-shoes-40.jpg",revision:"add6eb7fc43fb1b69895b503d97a675d"},{url:"index.html",revision:"ed7c60858ea23e9f5fc6dcfe3b93be1d"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"f54a7bb55dfc426ad2de315ede51d841"},{url:"post/0/index.html",revision:"d4f0474d23a586fbf5e6934f0a52ccc4"},{url:"post/8c5e4b35/index.html",revision:"ea56cbedb46a5ffd03b4da9ba51e8cc7"},{url:"post/8efd8d8a/index.html",revision:"5eebea34f7395f561440924a8541e133"},{url:"post/d87f7e0c/index.html",revision:"705927e5740fd36bb0295918a551ea4b"},{url:"post/dc4c1419/index.html",revision:"e2c6e8d44445390f4e24143932e4172a"},{url:"post/dc4c1419/photo.png",revision:"ed8db6fedf797059f9d0c53bd7a5d5a5"},{url:"post/de75e3e6/index.html",revision:"006f705b2fed7b9dd9609637cf8604e4"},{url:"post/f8915431/index.html",revision:"4b61b49583c2396545a91018e48b0e22"},{url:"tags/code/index.html",revision:"e435ad2920745ec822c2bc0b2b0b74e7"},{url:"tags/index.html",revision:"4435fbbd14125920850e103e38fd5de2"},{url:"tags/zzz/index.html",revision:"2fa6f2573d53669fd14cf2ae7fff706a"}],{})}));
//# sourceMappingURL=service-worker.js.map
