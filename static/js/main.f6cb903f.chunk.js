(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),i=n(18),a=n.n(i),o=n(10),s=n(14),u=n(3),l=n(1),j=["#FF008C","#D309E1","#9C1AFF","#7700FF","#4400FF"],b=function(t){var e=t.index,n=t.to,r=t.text,c={border:"2px solid ".concat(j[e])};return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:n,exact:!0,children:Object(l.jsx)("button",{type:"button",className:"btn",style:c,children:r})})},e)},d=function(){var t;return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("h1",{children:"Bookstore"})}),Object(l.jsx)("ul",{children:(t=[{id:1,path:"/",text:"Books"},{id:2,path:"/categories",text:"Categories"}],t.map((function(t){return Object(l.jsx)(b,{index:t.id,to:t.path,text:t.text},t.id)})))})]})},p=n(4),f=n.n(p),h=n(8),O=n(17),x=n(20),v=new function t(){var e=this;Object(x.a)(this,t),this.requestApi=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=t,c={Accept:"*/*","Content-Type":"application/json"},i={method:n,headersList:c};return"GET"===n?r+="?".concat(new URLSearchParams(e).toString()):"DELETE"===n&&(r+="/".concat(e.item_id)),fetch(r,i)},this.getApi=function(){var t=Object(h.a)(f.a.mark((function t(n,r,c){var i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.requestApi(n,r,"GET");case 2:if(!(i=t.sent).ok){t.next=6;break}return void 0!==c&&c(),t.abrupt("return",i.json());case 6:return t.abrupt("return","");case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),this.postApi=function(){var t=Object(h.a)(f.a.mark((function t(e){var n,r,c,i,a=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r={Accept:"*/*","Content-Type":"application/json"},c=n,t.next=5,fetch(e,{method:"POST",body:JSON.stringify(c),headers:r});case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.deleteApi=function(){var t=Object(h.a)(f.a.mark((function t(n,r){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.requestApi(n,r,"DELETE");case 2:return c=t.sent,t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},m=new function t(){Object(x.a)(this,t),this.MAIN="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OMlwiHaSBLEL62sFo84R/books"},y=n(11),g=Object(y.b)("books/fetchAllBooks",function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getApi(m.MAIN);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k=Object(y.b)("books/createBook",function(){var t=Object(h.a)(f.a.mark((function t(e){var n,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.item_id,r=e.category,c=e.title,t.next=3,v.postApi(m.MAIN,{item_id:n,category:r,title:c});case 3:if(!t.sent.ok){t.next=6;break}return t.abrupt("return",{item_id:n,category:r,title:c});case 6:return t.abrupt("return","");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(y.b)("books/deleteBook",function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,v.deleteApi(m.MAIN,{item_id:n});case 3:if(!t.sent.ok){t.next=6;break}return t.abrupt("return",n);case 6:return t.abrupt("return","");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w=Object(y.c)({name:"books",initialState:{entities:[],loading:"idle"},reducers:{},extraReducers:function(t){t.addCase(g.pending,(function(t,e){t.loading="pending"})).addCase(g.fulfilled,(function(t,e){Object.entries(e.payload).forEach((function(e){var n=e[1][0],r=n.category,c=n.title,i={item_id:e[0],title:c,category:r};t.entities=[].concat(Object(O.a)(t.entities),[i])})),t.loading="idle"})),t.addCase(k.fulfilled,(function(t,e){t.entities=[].concat(Object(O.a)(t.entities),[e.payload])})),t.addCase(A.fulfilled,(function(t,e){var n=t.entities.filter((function(t){return t.item_id!==e.payload}));t.entities=n}))}}).reducer,C=n(13),E=function(t){var e=t.percent,n=Object(r.useState)(0),c=Object(C.a)(n,2),i=c[0],a=c[1],o=function(t){return[Math.cos(2*Math.PI*t),Math.sin(2*Math.PI*t)]},s=o(0),u=Object(C.a)(s,2),j=u[0],b=u[1],d=o(i),p=Object(C.a)(d,2),f=p[0],h=p[1],O=i>.5?1:0,x=["M ".concat(j," ").concat(b),"A 1 1 0 ".concat(O," 1 ").concat(f," ").concat(h),"L 0 0"].join(" ");Object(r.useEffect)((function(){a(e)}),[e]);return Object(l.jsx)("div",{children:Object(l.jsx)("svg",{viewBox:"-1 -1 2 2",style:{transform:"rotate(-0.25turn) scale(0.25)",fill:"blue"},children:Object(l.jsx)("path",{d:x})})})},N=function(t){var e=Object(o.b)(),n=Object(r.useState)(0),c=Object(C.a)(n,2),i=c[0],a=c[1],s=t.id,u=t.title,j=t.category;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{onChange:function(t){a(t.target.value/100)},type:"text",name:"value",placeholder:"circle"}),Object(l.jsx)("p",{}),Object(l.jsxs)("p",{children:["I am a book, my title is:",u]}),Object(l.jsxs)("p",{children:["And my category is:"," ",j]}),Object(l.jsx)("button",{onClick:function(){e(A({id:s}))},type:"button",children:"Remove me"}),Object(l.jsx)(E,{percent:i})]})},M=function(){var t=Object(o.c)((function(t){return t.books})),e=Object(o.b)();Object(r.useEffect)((function(){e(g())}),[]);var n;return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:(n=t.entities,n.map((function(t){return Object(l.jsx)(N,{id:t.item_id,category:t.category,title:t.title},t.item_id)})))})})},S=n(44),T=function(){var t=Object(o.b)(),e=Object(r.useRef)(null),n=Object(r.useRef)(null);return Object(l.jsxs)("form",{onSubmit:function(r){r.preventDefault(),function(){var r,c,i={item_id:Object(S.a)(),title:null===e||void 0===e||null===(r=e.current)||void 0===r?void 0:r.value,category:null===n||void 0===n||null===(c=n.current)||void 0===c?void 0:c.value};t(k(i))}(),e.current.value="",n.current.value=""},children:[Object(l.jsx)("input",{ref:e,type:"text",name:"title",placeholder:"Title"}),Object(l.jsx)("input",{ref:n,type:"text",name:"category",placeholder:"Category"}),Object(l.jsx)("input",{label:"Create",type:"submit",name:"create",value:"Create"})]})},F=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)(M,{})]})},_=function(){return Object(l.jsx)("div",{children:"UNDER CONSTRUCTION!"})},I=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Nothing here..."})})};var B=function(){var t=Object(u.f)();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(u.c,{location:t,children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(F,{})}),Object(l.jsx)(u.a,{path:"/categories",children:Object(l.jsx)(_,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(I,{})})]},t.pathname)]})},R=(n(21),Object(y.a)({reducer:{books:w}}));a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:R,children:Object(l.jsx)(s.a,{basename:"/bookstore",children:Object(l.jsx)(B,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f6cb903f.chunk.js.map