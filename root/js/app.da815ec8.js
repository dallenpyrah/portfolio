(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"7b0339c7","chunk-645d5f2e":"b1e3f0a7","chunk-409cd1d2":"3dd8ee8e","chunk-6d70633a":"b7c1d139","chunk-d450d606":"9ff9698e"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-645d5f2e":1,"chunk-409cd1d2":1,"chunk-6d70633a":1,"chunk-d450d606":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"31d6cfe0","chunk-645d5f2e":"f3d15144","chunk-409cd1d2":"6d11a0e1","chunk-6d70633a":"7ab9b04e","chunk-d450d606":"e030fb2e"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3a94":function(e,t,n){"use strict";n("9072")},"41cb":function(e,t,n){"use strict";var a=n("6c02"),r=n("8816");function o(e){return()=>n("a2f9")(`./${e}.vue`)}const c=[{path:"/",name:"Home",component:o("HomePage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:r["a"]}],u=Object(a["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(a["b"])(),routes:c});t["a"]=u},"482a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r=Object(a["f"])("header",null,null,-1),o=Object(a["f"])("footer",null,null,-1);function c(e,t,n,c,u,s){const i=Object(a["u"])("router-view");return Object(a["o"])(),Object(a["d"])(a["a"],null,[r,Object(a["f"])("main",null,[Object(a["f"])(i)]),o],64)}var u=n("83fc"),s={name:"App",setup(){return{appState:Object(a["b"])(()=>u["a"])}}};n("6903");s.render=c;var i=s;function l(e){const t=n("ccc2");t.keys().forEach(n=>{const a=t(n),r=a.default||a,o=r.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,r)})}var d=n("41cb"),f=n("4989"),b=n.n(f),p=n("1157"),v=n.n(p),h=n("f0bd"),g=n("f5af"),m=n.n(g);n("77ed"),n("e829");m.a.init({disable:!1});const O=Object(a["c"])(i);l(O),O.use(d["a"],b.a,v.a,h["default"]).mount("#app")},6903:function(e,t,n){"use strict";n("482a")},"83fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("7a23");const r=Object(a["s"])({user:{},account:{}})},9072:function(e,t,n){},"9d8d":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=n("c974"),o=n.n(r);const c=Object(a["z"])("data-v-5ccb1d12");Object(a["r"])("data-v-5ccb1d12");const u={class:"navbar navbar-expand-lg navbar-dark bg-dark"},s=Object(a["f"])("div",{class:"d-flex flex-column align-items-center"},[Object(a["f"])("img",{alt:"logo",src:o.a,height:"45"})],-1),i=Object(a["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["f"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav mr-auto"},f={class:"nav-item"},b=Object(a["e"])(" Home "),p={class:"nav-item"},v=Object(a["e"])(" About "),h={class:"navbar-text"},g={key:1,class:"dropdown"},m={class:"mx-3"},O=Object(a["f"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(a["p"])();const j=c((e,t,n,r,o,j)=>{const k=Object(a["u"])("router-link");return Object(a["o"])(),Object(a["d"])("nav",u,[Object(a["f"])(k,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:c(()=>[s]),_:1}),i,Object(a["f"])("div",l,[Object(a["f"])("ul",d,[Object(a["f"])("li",f,[Object(a["f"])(k,{to:{name:"Home"},class:"nav-link"},{default:c(()=>[b]),_:1})]),Object(a["f"])("li",p,[Object(a["f"])(k,{to:{name:"About"},class:"nav-link"},{default:c(()=>[v]),_:1})])]),Object(a["f"])("span",h,[r.user.isAuthenticated?(Object(a["o"])(),Object(a["d"])("div",g,[Object(a["f"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>r.state.dropOpen=!r.state.dropOpen)},[Object(a["f"])("img",{src:r.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(a["f"])("span",m,Object(a["w"])(r.user.name),1)]),Object(a["f"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:r.state.dropOpen}],onClick:t[4]||(t[4]=e=>r.state.dropOpen=!1)},[Object(a["f"])(k,{to:{name:"Account"}},{default:c(()=>[O]),_:1}),Object(a["f"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>r.logout&&r.logout(...e))}," logout ")],2)])):(Object(a["o"])(),Object(a["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>r.login&&r.login(...e))}," Login "))])])])});var k=n("8816"),w=n("83fc");const y=window.location.origin.includes("localhost"),A=y?"http://localhost:3000":"",E="",T="",x="";var _=n("41cb");function P(e,t){if(y)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const C={log(){P("log",arguments)},error(){P("error",arguments)},warn(){P("warn",arguments)},assert(){P("assert",arguments)},trace(){P("trace",arguments)}};var S=n("bc3a"),N=n.n(S);const U=N.a.create({baseURL:A,timeout:8e3}),D=function(e){U.defaults.headers.authorization=e};class L{async getAccount(){try{const e=await U.get("/account");w["a"].account=e.data}catch(e){C.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const H=new L,M=Object(k["b"])({domain:E,clientId:x,audience:T,onRedirectCallback:e=>{_["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});M.on(M.AUTH_EVENTS.AUTHENTICATED,(async function(){D(M.bearer),w["a"].user=M.user,await H.getAccount()}));var R={name:"Navbar",setup(){const e=Object(a["s"])({dropOpen:!1});return{state:e,user:Object(a["b"])(()=>w["a"].user),async login(){M.loginWithPopup()},async logout(){await M.logout({returnTo:window.location.origin})}}}};n("3a94");R.render=j,R.__scopeId="data-v-5ccb1d12";t["default"]=R},a2f9:function(e,t,n){var a={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-d450d606"],"./Desktop.vue":["cc15","chunk-645d5f2e"],"./HomePage.vue":["78a7","chunk-645d5f2e","chunk-409cd1d2"],"./MobileTablet.vue":["0a7d","chunk-6d70633a"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="a2f9",e.exports=r},c974:function(e,t,n){e.exports=n.p+"img/cw-logo.5a19e7f9.png"},ccc2:function(e,t,n){var a={"./navbar.vue":"9d8d"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="ccc2"}});