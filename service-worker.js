if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,f)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=f(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"aa4b70ee08387c57f2e0070d9dd02e89"},{url:"about/index.html",revision:"0fd5ecf1d035ff3912d109ffc6626ba9"},{url:"archives/2021/05/index.html",revision:"e5470e5a49b9dd2cae307ee6837f74ab"},{url:"archives/2021/06/index.html",revision:"b2561af95e7824f39bb4a329026cb327"},{url:"archives/2021/index.html",revision:"66d4e5a583ceeed8ca66c35b77274d62"},{url:"archives/index.html",revision:"296438455d779f70a796d64ea42d67ec"},{url:"categories/code/index.html",revision:"998eb2fced0fc747abb08fafa1946c6e"},{url:"categories/index.html",revision:"f46ccfa66fd91e72375920099f167f30"},{url:"css/index.css",revision:"26f429b150623ab283a66ca9b3f668dc"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/me.html",revision:"f7a77d9faa65ceb3d774225c24627ff9"},{url:"gallery/me/dajeong-park-01.jpg",revision:"f4b4d31ebe865c34309b966c00f5b76b"},{url:"gallery/me/dajeong-park-02-1.jpg",revision:"2864590e972847872d95c872ab8fb881"},{url:"gallery/me/dajeong-park-03.jpg",revision:"226bf87d3bd50aa62ce6ef64882b915f"},{url:"gallery/me/dajeong-park-080-pose4-04-1.jpg",revision:"6b0cb10408d39e6055b040bd940f6745"},{url:"gallery/me/dajeong-park-080-pose4-05-1.jpg",revision:"fbbe3691e25b595e9bf8766f0963bf6d"},{url:"gallery/me/dajeong-park-080-pose4-06.jpg",revision:"695b2b94ab5466f2935c92cd1b7dbc18"},{url:"galleryGroup/index.html",revision:"69296ca738d3634c38360733677daaa6"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-me.png",revision:"2f750ca5804ce0b0b8418f294fd0eb0c"},{url:"img/avatar.png",revision:"b5682077b16d59a73ce70392c134a9b7"},{url:"img/favicon-16x16-me.png",revision:"61ff5d7d516e2c113739b2fff98a32f8"},{url:"img/favicon-32x32-me.png",revision:"9b6f21f3e3fe1917a6df1af4fb894cc5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo-me.svg",revision:"9d2f9f6fba43f48b00138e92a863e96e"},{url:"img/top-img/apple_via-del-corso-opens-in-rome-exterior-building.jpg",revision:"0af741d541f99b85cf8a30796d771938"},{url:"img/top-img/eddie-mendoza-the-boulevard.jpg",revision:"5a9cb53efcb02f935ce5913df346cf9e"},{url:"img/top-img/hayward-gallery-50th-anniversary-03.jpg",revision:"463c368bdf51ee5c194decf423738100"},{url:"img/top-img/lou-ll-88607719-p0.jpg",revision:"9a1b937f6f40a0a2e99b7997859792b6"},{url:"img/top-img/lou-ll-bedroom-engage-26-small.jpg",revision:"1ba45e3cf30f3291f544b6cb468f5a60"},{url:"img/top-img/lou-ll-lou-ll-princess-26-small.jpg",revision:"00291a964c739c3a5303f3aedf2256be"},{url:"img/top-img/lou-ll-maids-27.jpg",revision:"22a928fb61616a98328bc5e222656382"},{url:"img/top-img/lou-ll-maids-48-small.jpg",revision:"1f43f82f968fe74b49a22fbc39292edf"},{url:"img/top-img/lou-ll-maids-take-off-shoes-40.jpg",revision:"add6eb7fc43fb1b69895b503d97a675d"},{url:"index.html",revision:"079340fa6157ac439a597624656daac9"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"8548f699780f223be20c0fb3fa7a999e"},{url:"post/8c5e4b35/index.html",revision:"5a03742454db2cc20c00007675560bb2"},{url:"post/8efd8d8a/index.html",revision:"35d2a936133b3a90ea020bb98e011c34"},{url:"post/d87f7e0c/index.html",revision:"cf94f835e4bcc78f5289390045555938"},{url:"post/dc4c1419/index.html",revision:"1a0ff4dfead1edf262727a3022311a7e"},{url:"post/dc4c1419/photo.png",revision:"ed8db6fedf797059f9d0c53bd7a5d5a5"},{url:"post/de75e3e6/index.html",revision:"44b5da76a4a2fb5f304dcb2d24c0a263"},{url:"post/f8915431/index.html",revision:"7a653c60de2b66d9628f98509fc27e4f"},{url:"tags/code/index.html",revision:"20792536d17b7e55431b02e54f913a0c"},{url:"tags/index.html",revision:"dc87d56325f87faabd11d92c8979af42"},{url:"tags/zzz/index.html",revision:"699fa63ca9bad72e607bd74619efaddc"}],{})}));
//# sourceMappingURL=service-worker.js.map
