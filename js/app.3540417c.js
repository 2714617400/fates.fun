(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],h=0,s=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-13910e6e":"68c86bf3","chunk-22c10971":"74c2b557","chunk-53fc72c9":"81044295","chunk-56e948c8":"e0b7260d","chunk-706bed28":"ebdf81ab","chunk-a7bb351c":"4d94b33a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-13910e6e":1,"chunk-22c10971":1,"chunk-53fc72c9":1,"chunk-56e948c8":1,"chunk-706bed28":1,"chunk-a7bb351c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-13910e6e":"013fe8ef","chunk-22c10971":"a58eba32","chunk-53fc72c9":"839732b9","chunk-56e948c8":"3b2e3bf3","chunk-706bed28":"d144383e","chunk-a7bb351c":"3e08423d"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===r||h===c))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){l=s[a],h=l.getAttribute("data-href");if(h===r||h===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=a(e);var s=new Error;l=function(t){h.onerror=h.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=h;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b1a":function(e,t,n){"use strict";n("5400")},"1dc0":function(e,t,n){"use strict";n("c404")},5400:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view"),t("RCMenu")],1)},c=[],u=function(){var e=this,t=e._self._c;return e.show?t("div",{ref:"RCMenu",staticClass:"right_click_menu glass",style:e.pst,on:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}},e._l(e.menus,(function(n,r){return t("router-link",{key:r,attrs:{to:n.path,tag:"div"}},[e._v(e._s(n.label))])})),1):e._e()},a=[],i={data(){return{show:!1,menus:[],pst:{top:"0px",left:"0px"}}},watch:{show(e){e?document.addEventListener("click",this.close):document.removeEventListener("click",this.close)}},mounted(){document.addEventListener("contextmenu",e=>{this.pst.top=e.y+"px",this.pst.left=e.x+"px",this.show=!0,e.preventDefault()});const e=this.$router.options.routes;e.forEach(e=>{var t;null!==(t=e.meta)&&void 0!==t&&t.title&&this.menus.push({label:null===e||void 0===e?void 0:e.meta.title,path:e.path})})},methods:{close(){this.show=!1}}},l=i,h=(n("eb68"),n("2877")),s=Object(h["a"])(l,u,a,!1,null,"12d19db4",null),p=s.exports,d={name:"App",components:{RCMenu:p}},f=d,b=(n("1b1a"),n("1dc0"),Object(h["a"])(f,o,c,!1,null,null,null)),m=b.exports,v=n("1f94"),k=n.n(v),g=n("8c4f");r["a"].use(g["a"]);const y=[{path:"/",meta:{title:"导航"},component:()=>n.e("chunk-53fc72c9").then(n.bind(null,"9261"))},{path:"/photo_wall",meta:{title:"图片"},component:()=>n.e("chunk-a7bb351c").then(n.bind(null,"38fe"))},{path:"/octopath_traveler",name:"ot",meta:{title:"八方旅人"},component:()=>n.e("chunk-706bed28").then(n.bind(null,"5849")),children:[{path:"/",name:"otIndex",component:()=>n.e("chunk-56e948c8").then(n.bind(null,"6373"))}]},{path:"/home",meta:{title:"首页"},component:()=>n.e("chunk-706bed28").then(n.bind(null,"5849")),children:[{path:"/",name:"home",component:()=>n.e("chunk-22c10971").then(n.bind(null,"eea6"))}]},{path:"*",component:e=>n.e("chunk-13910e6e").then(function(){var t=[n("ee5d")];e.apply(null,t)}.bind(this)).catch(n.oe)}],w=new g["a"]({routes:y});var _=w;r["a"].use(k.a),r["a"].config.productionTip=!1,new r["a"]({render:e=>e(m),router:_}).$mount("#app")},a383:function(e,t,n){var r={"./":["9261","chunk-53fc72c9"],"./404":["ee5d","chunk-13910e6e"],"./404.vue":["ee5d","chunk-13910e6e"],"./home":["eea6","chunk-22c10971"],"./home.vue":["eea6","chunk-22c10971"],"./index":["9261","chunk-53fc72c9"],"./index.vue":["9261","chunk-53fc72c9"],"./octopathTraveler":["6373","chunk-56e948c8"],"./octopathTraveler/":["6373","chunk-56e948c8"],"./octopathTraveler/index":["6373","chunk-56e948c8"],"./octopathTraveler/index.vue":["6373","chunk-56e948c8"],"./photoWall":["38fe","chunk-a7bb351c"],"./photoWall.vue":["38fe","chunk-a7bb351c"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="a383",e.exports=o},a8f1:function(e,t,n){},c404:function(e,t,n){},eb68:function(e,t,n){"use strict";n("a8f1")}});
//# sourceMappingURL=app.3540417c.js.map