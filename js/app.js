(function(){"use strict";var n={69:function(n,t,i){var r=i(963),o=i(252),e=i(577);const a=["id"],u=["src"],c={class:"address"},s={class:"visit_hours"},f={class:"traffic_guideline"},l={class:"parking_information"};function d(n,t,i,r,d,v){return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.data,(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.id,id:n.id},[(0,o._)("h2",null,(0,e.zw)(n.title),1),(0,o._)("img",{src:n.cover_image,width:"600",height:"300"},null,8,u),(0,o._)("div",c,(0,e.zw)(n.address),1),(0,o._)("div",s,(0,e.zw)(n.visit_hours),1),(0,o._)("div",f,(0,e.zw)(n.traffic_guideline),1),(0,o._)("div",l,(0,e.zw)(n.parking_information),1)],8,a)))),128))])}var v={name:"App",components:{},data(){return{data:[],uri:""}},mounted(){this.uri="api/attractions.json",console.log(this.uri),this.axios.get(`${this.uri}`,{crossdomain:!0}).then((n=>{this.data=n.data.attractions})).catch((n=>{console.log(n)}))},methods:{}},h=i(744);const p=(0,h.Z)(v,[["render",d]]);var g=p,w=i(669),_=i.n(w);const m=(0,r.ri)(g);m.config.globalProperties.axios=_(),_().defaults.withCredentials=!0,m.mount("#app")}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var e=t[r]={exports:{}};return n[r](e,e.exports,i),e.exports}i.m=n,function(){var n=[];i.O=function(t,r,o,e){if(!r){var a=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],e=n[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&e||a>=e)&&Object.keys(i.O).every((function(n){return i.O[n](r[c])}))?r.splice(c--,1):(u=!1,e<a&&(a=e));if(u){n.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}e=e||0;for(var f=n.length;f>0&&n[f-1][2]>e;f--)n[f]=n[f-1];n[f]=[r,o,e]}}(),function(){i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,{a:t}),t}}(),function(){i.d=function(n,t){for(var r in t)i.o(t,r)&&!i.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};i.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,e,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(o in u)i.o(u,o)&&(i.m[o]=u[o]);if(c)var f=c(i)}for(t&&t(r);s<a.length;s++)e=a[s],i.o(n,e)&&n[e]&&n[e][0](),n[e]=0;return i.O(f)},r=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(69)}));r=i.O(r)})();
//# sourceMappingURL=app.js.map