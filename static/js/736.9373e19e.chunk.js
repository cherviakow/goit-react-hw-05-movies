"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{776:function(n,e,t){t.d(e,{TP:function(){return l},V0:function(){return p},au:function(){return f},kI:function(){return i},q5:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(294),o="d8fff794203ae9c9fd4883749cedddba",s="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e));case 3:return 0===(t=n.sent).data.result.length&&alert("There are no movies"),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),alert("Something wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},736:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u,o=t(861),s=t(439),i=t(757),p=t.n(i),l=t(689),f=t(791),v=t(776),h=t(168),d=t(924),x=d.ZP.ul(r||(r=(0,h.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  padding: 0;\n"]))),g=d.ZP.li(a||(a=(0,h.Z)(["\n  border: 1px solid teal;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),w=d.ZP.p(c||(c=(0,h.Z)(["\n  font-weight: 700;\n  padding: 0 10px;\n"]))),m=d.ZP.p(u||(u=(0,h.Z)(["\n  padding: 0 10px;\n"]))),Z=t(184),k=function(n){var e=n.reviews;return e&&e.length?(0,Z.jsx)(x,{children:e.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(w,{children:["Author: ",t]}),(0,Z.jsx)(m,{children:r})]},e)}))}):(0,Z.jsx)("p",{children:"No information about reviews is avaliable"})},b=t(367),y=function(){var n=(0,l.UO)().movieId,e=(0,f.useState)(),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,f.useState)(null),u=(0,s.Z)(c,2),i=u[0],h=u[1],d=(0,f.useState)(!1),x=(0,s.Z)(d,2),g=x[0],w=x[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,o.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,v.q5)(n);case 4:t=e.sent,a(t),w(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(e.t0);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[g&&(0,Z.jsx)(b.a,{}),r&&(0,Z.jsx)(k,{reviews:r}),i&&(0,Z.jsx)("p",{children:"Something went wrong. Please, try again"})]})}}}]);
//# sourceMappingURL=736.9373e19e.chunk.js.map