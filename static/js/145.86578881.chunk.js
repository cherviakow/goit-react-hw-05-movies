(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[145],{776:function(n,t,e){"use strict";e.d(t,{TP:function(){return l},V0:function(){return p},au:function(){return f},kI:function(){return s},q5:function(){return x}});var r=e(861),a=e(757),c=e.n(a),u=e(294),o="d8fff794203ae9c9fd4883749cedddba",i="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 3:return 0===(e=n.sent).data.result.length&&alert("There are no movies"),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),alert("Something wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),alert("Something wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},47:function(n,t,e){"use strict";e.d(t,{e:function(){return h}});e(791);var r,a,c,u=e(689),o=e(87),i=e(168),s=e(924),p=s.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-bottom: 40px;\n  margin-top: 20px;\n"]))),l=s.ZP.li(a||(a=(0,i.Z)(["\n  list-style: none;\n  border-radius: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  transition: transform 0.3s;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    transform: scale(1.03);\n    transition: 400ms linear;\n    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.9);\n  }\n\n  > a {\n    text-decoration: none;\n  }\n\n  img {\n    width: 350px;\n  }\n"]))),f=s.ZP.h1(c||(c=(0,i.Z)(["\n  padding: 4px;\n  color: black;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n"]))),x=e(62),v=e(184),h=function(n){var t=n.movies,e=(0,u.TH)();return(0,v.jsx)(p,{children:t.map((function(n){var t=n.poster_path,r=n.title,a=n.id;return(0,v.jsx)(l,{children:(0,v.jsxs)(o.rU,{to:"/movies/".concat(a),state:{from:e},children:[(0,v.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w500/".concat(t):x,alt:r}),(0,v.jsx)(f,{children:r})]})},a)}))})}},608:function(){},145:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),i=e(608),s=e(184),p=function(n){var t=n.onSubmit,e=(0,o.useState)(""),r=(0,a.Z)(e,2),c=r[0],u=r[1],p=function(){return u("")};return(0,s.jsx)(i.Container,{children:(0,s.jsxs)(i.Form,{onSubmit:function(n){n.preventDefault(),t(c),p()},children:[(0,s.jsx)(i.Input,{type:"text",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",onChange:function(n){return u(n.target.value)}}),(0,s.jsx)(i.Btn,{type:"submit",children:"Search"})]})})},l=e(87),f=e(776),x=e(47),v=e(367),h=function(){var n,t=(0,o.useState)(null),e=(0,a.Z)(t,2),c=e[0],i=e[1],h=(0,o.useState)(!1),d=(0,a.Z)(h,2),m=d[0],g=d[1],w=(0,o.useState)(null),b=(0,a.Z)(w,2),y=b[0],Z=b[1],k=(0,l.lr)(),j=(0,a.Z)(k,2),S=j[0],_=j[1],C=null!==(n=S.get("query"))&&void 0!==n?n:"";(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(C){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,g(!0),n.next=6,(0,f.V0)(C);case 6:t=n.sent,i(t),g(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),Z(n.t0);case 14:return n.prev=14,g(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[C]);return(0,s.jsxs)("main",{children:[(0,s.jsx)(p,{onSubmit:function(n){_({query:n})}}),m&&(0,s.jsx)(v.a,{}),c&&(0,s.jsx)(x.e,{movies:c}),y&&(0,s.jsx)("p",{children:"Something wrong, try arain"})]})}},62:function(n,t,e){"use strict";n.exports=e.p+"static/media/No_image_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=145.86578881.chunk.js.map