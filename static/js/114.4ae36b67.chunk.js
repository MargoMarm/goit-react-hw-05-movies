"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{4672:function(n,t,e){e.d(t,{Z:function(){return g}});var r,a,c,o,i=e(7689),s=e(1087),u=e(168),p=e(5706),l=p.Z.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  flex-wrap: wrap;\n  gap: 15px;\n  display: flex;\n  padding: 0;\n"]))),f=p.Z.li(a||(a=(0,u.Z)(["\n  border-radius: 10px;\n  width: 300px;\n  text-align: center;\n  :hover {\n    transform: scale(1.03)\n  }\n"]))),h=p.Z.p(c||(c=(0,u.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  margin-top: 10px;\n"]))),d=p.Z.img(o||(o=(0,u.Z)(["\n  border-radius: inherit;\n  width: 300px;\n  height: 450px;\n  border-radius: 10px;\n"]))),x=e(708),v=e(184),g=function(n){var t=n.movies,e=(0,i.TH)();return(0,v.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,v.jsx)(f,{children:(0,v.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(d,{src:a?"https://image.tmdb.org/t/p/w300".concat(a):x,alt:r}),(0,v.jsx)(h,{children:r})]})},t)}))})}},114:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,o,i=e(5861),s=e(9439),u=e(4687),p=e.n(u),l=e(4672),f=e(2791),h=e(1087),d=e(4635),x=e(168),v=e(5706),g=v.Z.p(r||(r=(0,x.Z)(["\n  text-align: center;\n  font-weight: 500;\n  font-size: 34px;\n  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),\n    1px 1px 1px rgba(0, 0, 0, 0.5);\n"]))),m=e(184),Z=function(n){var t=n.errorText;return(0,m.jsx)(g,{children:t})},w=e(6445),y=v.Z.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin: 0 auto;\n  margin-bottom: 18px;\n"]))),b=v.Z.button(c||(c=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),k=v.Z.input(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),j=e(3728),_=function(n){var t=n.setParams,e=(0,f.useState)(""),r=(0,s.Z)(e,2),a=r[0],c=r[1];return(0,m.jsxs)(y,{onSubmit:function(n){n.preventDefault(),t(a)},children:[(0,m.jsx)(k,{type:"text",name:"search",onChange:function(n){c(n.target.value.trim().toLowerCase())}}),(0,m.jsx)(b,{type:"submit",children:(0,m.jsx)(j.Vph,{size:"30"})})]})},S=function(){var n,t=(0,h.lr)(),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(null),o=(0,s.Z)(c,2),u=o[0],x=o[1],v=(0,f.useState)(null),g=(0,s.Z)(v,2),y=g[0],b=g[1],k=(0,f.useState)(null),j=(0,s.Z)(k,2),S=j[0],z=j[1],P=(0,f.useState)(!1),q=(0,s.Z)(P,2),C=q[0],T=q[1],D=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){if(""!==D){var n=function(){var n=(0,i.Z)(p().mark((function n(){var t,e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T(!0),n.prev=1,n.next=4,(0,d.Ph)(D);case 4:t=n.sent,e=t.results,r=t.total_results,x(e),b(r),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),z(n.t0.message);case 14:return n.prev=14,T(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[D]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(_,{setParams:function(n){a(""!==n?{query:n}:{})}}),C&&(0,m.jsx)(w.a,{}),u&&!C&&(0,m.jsx)(l.Z,{movies:u}),0===y&&(0,m.jsx)(Z,{errorText:"Sorry, nothing has been found at your request"}),S&&(0,m.jsx)(Z,{errorText:"Something went wrong... ".concat(S,". Please try again.")})]})}},4635:function(n,t,e){e.d(t,{Df:function(){return u},M1:function(){return h},Pg:function(){return l},Ph:function(){return g},jP:function(){return x}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),i="https://api.themoviedb.org/3",s="c9873e67c5e03bd61e79d852c2fd46a6";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"/trending/movie/day?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}},708:function(n,t,e){n.exports=e.p+"static/media/wallpaper-error.15c2a197929663920c9f.jpeg"}}]);
//# sourceMappingURL=114.4ae36b67.chunk.js.map