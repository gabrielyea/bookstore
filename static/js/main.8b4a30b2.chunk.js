(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(16),a=n.n(i),o=n(10),s=n(13),u=n(3),l=n(1),d=["#FF008C","#D309E1","#9C1AFF","#7700FF","#4400FF"],b=function(e){var t=e.index,n=e.to,r=e.text,c={border:"2px solid ".concat(d[t])};return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:n,exact:!0,children:Object(l.jsx)("button",{type:"button",className:"btn",style:c,children:r})})},t)},j=function(){var e;return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("h1",{children:"Bookstore"})}),Object(l.jsx)("ul",{children:(e=[{id:1,path:"/",text:"Books"},{id:2,path:"/categories",text:"Categories"}],e.map((function(e){return Object(l.jsx)(b,{index:e.id,to:e.path,text:e.text},e.id)})))})]})},p=n(4),f=n.n(p),h=n(8),O=n(15),x=n(17),v=new function e(){var t=this;Object(x.a)(this,e),this.requestApi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=e,c={Accept:"*/*","Content-Type":"application/json"},i={method:n,headersList:c};return"GET"===n?r+="?".concat(new URLSearchParams(t).toString()):"DELETE"===n&&(r+="/".concat(t.item_id)),fetch(r,i)},this.getApi=function(){var e=Object(h.a)(f.a.mark((function e(n,r,c){var i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.requestApi(n,r,"GET");case 2:if(!(i=e.sent).ok){e.next=6;break}return void 0!==c&&c(),e.abrupt("return",i.json());case 6:return e.abrupt("return","");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.postApi=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,r,c,i,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r={Accept:"*/*","Content-Type":"application/json"},c=n,e.next=5,fetch(t,{method:"POST",body:JSON.stringify(c),headers:r});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteApi=function(){var e=Object(h.a)(f.a.mark((function e(n,r){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.requestApi(n,r,"DELETE");case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},m=new function e(){Object(x.a)(this,e),this.MAIN="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OMlwiHaSBLEL62sFo84R/books"},y=n(11),k=Object(y.b)("books/fetchAllBooks",function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getApi(m.MAIN);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(y.b)("books/createBook",function(){var e=Object(h.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.item_id,r=t.category,c=t.title,e.next=3,v.postApi(m.MAIN,{item_id:n,category:r,title:c});case 3:if(!e.sent.ok){e.next=6;break}return e.abrupt("return",{item_id:n,category:r,title:c});case 6:return e.abrupt("return","");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(y.b)("books/deleteBook",function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,v.deleteApi(m.MAIN,{item_id:n});case 3:if(!e.sent.ok){e.next=6;break}return e.abrupt("return",n);case 6:return e.abrupt("return","");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(y.c)({name:"books",initialState:{entities:[],loading:"idle"},reducers:{},extraReducers:function(e){e.addCase(k.pending,(function(e,t){e.loading="pending"})).addCase(k.fulfilled,(function(e,t){Object.entries(t.payload).forEach((function(t){var n=t[1][0],r=n.category,c=n.title,i={item_id:t[0],title:c,category:r};e.entities=[].concat(Object(O.a)(e.entities),[i])})),e.loading="idle"})),e.addCase(g.fulfilled,(function(e,t){e.entities=[].concat(Object(O.a)(e.entities),[t.payload])})),e.addCase(A.fulfilled,(function(e,t){var n=e.entities.filter((function(e){return e.item_id!==t.payload}));e.entities=n}))}}).reducer,C=function(e){var t=Object(o.b)(),n=e.id,r=e.title,c=e.category;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["I am a book, my title is:"," ",r]}),Object(l.jsxs)("p",{children:["And my category is:"," ",c]}),Object(l.jsx)("button",{onClick:function(){t(A({id:n}))},type:"button",children:"Remove me"})]})},E=function(){var e=Object(o.c)((function(e){return e.books})),t=Object(o.b)();Object(r.useEffect)((function(){t(k())}),[]);var n;return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:(n=e.entities,n.map((function(e){return Object(l.jsx)(C,{id:e.item_id,category:e.category,title:e.title},e.item_id)})))})})},N=n(41),T=function(){var e=Object(o.b)(),t=Object(r.useRef)(null),n=Object(r.useRef)(null);return Object(l.jsxs)("form",{onSubmit:function(r){r.preventDefault(),function(){var r,c,i={item_id:Object(N.a)(),title:null===t||void 0===t||null===(r=t.current)||void 0===r?void 0:r.value,category:null===n||void 0===n||null===(c=n.current)||void 0===c?void 0:c.value};e(g(i))}(),t.current.value="",n.current.value=""},children:[Object(l.jsx)("input",{ref:t,type:"text",name:"title",placeholder:"Title"}),Object(l.jsx)("input",{ref:n,type:"text",name:"category",placeholder:"Category"}),Object(l.jsx)("input",{label:"Create",type:"submit",name:"create",value:"Create"})]})},F=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)(E,{})]})},_=function(){return Object(l.jsx)("div",{children:"UNDER CONSTRUCTION!"})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Nothing here..."})})};var R=function(){var e=Object(u.f)();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(u.c,{location:e,children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(F,{})}),Object(l.jsx)(u.a,{path:"/categories",children:Object(l.jsx)(_,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(S,{})})]},e.pathname)]})},B=(n(18),Object(y.a)({reducer:{books:w}}));a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:B,children:Object(l.jsx)(s.a,{basename:"/bookstore",children:Object(l.jsx)(R,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8b4a30b2.chunk.js.map