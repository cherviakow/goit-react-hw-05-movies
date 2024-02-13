"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{776:function(n,t,e){e.d(t,{TP:function(){return l},V0:function(){return p},au:function(){return f},kI:function(){return i},q5:function(){return x}});var r=e(861),a=e(757),c=e.n(a),o=e(294),u="d8fff794203ae9c9fd4883749cedddba",s="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 3:return 0===(e=n.sent).data.result.length&&alert("There are no movies"),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),alert("Something wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},47:function(n,t,e){e.d(t,{e:function(){return d}});e(791);var r,a,c,o=e(689),u=e(87),s=e(168),i=e(924),p=i.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-bottom: 40px;\n  margin-top: 20px;\n"]))),l=i.ZP.li(a||(a=(0,s.Z)(["\n  list-style: none;\n  border-radius: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  transition: transform 0.3s;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    transform: scale(1.03);\n    transition: 400ms linear;\n    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.9);\n  }\n\n  > a {\n    text-decoration: none;\n  }\n\n  img {\n    width: 350px;\n  }\n"]))),f=i.ZP.h1(c||(c=(0,s.Z)(["\n  padding: 4px;\n  color: black;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n"]))),x=e(62),v=e(184),d=function(n){var t=n.movies,e=(0,o.TH)();return(0,v.jsx)(p,{children:t.map((function(n){var t=n.poster_path,r=n.title,a=n.id;return(0,v.jsx)(l,{children:(0,v.jsxs)(u.rU,{to:"/movies/".concat(a),state:{from:e},children:[(0,v.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w500/".concat(t):x,alt:r}),(0,v.jsx)(f,{children:r})]})},a)}))})}},635:function(n,t,e){e.r(t);var r=e(433),a=e(861),c=e(439),o=e(757),u=e.n(o),s=e(791),i=e(776),p=e(47),l=e(367),f=e(184);t.default=function(){var n=(0,s.useState)(null),t=(0,c.Z)(n,2),e=t[0],o=t[1],x=(0,s.useState)(!1),v=(0,c.Z)(x,2),d=v[0],h=v[1],m=(0,s.useState)(null),g=(0,c.Z)(m,2),w=g[0],b=g[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,i.kI)();case 4:t=n.sent,o((0,r.Z)(t)),h(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),b(n.t0);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("div",{children:[d&&(0,f.jsx)(l.a,{}),e&&(0,f.jsx)(p.e,{movies:e}),w&&(0,f.jsx)("p",{children:"Something went wrong. Please, try again"})]})}},62:function(n,t,e){n.exports=e.p+"static/media/No_image_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=199.25b2de0d.chunk.js.map