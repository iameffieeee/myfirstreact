(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),a=n.n(s),i=(n(25),n.p,n(26),n(0)),o=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["Hello ",e.name," a.k.a ",e.heroName]}),e.children]})},j=function(){return Object(i.jsx)("p",{children:"this is children props"})},d=n(16),l=n(17),h=n(20),b=n(19),u=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:this.addCounter,children:"click me!!!"}),Object(i.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(r.a.Component),O=n(5),p=n(18),x=n.n(p).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),f=function(){return x.get("/hello")},m=function(){var e=Object(c.useState)("ERRO.ORR! PLS WAIT ^.^V"),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){f().then((function(e){r(e.data)})).catch((function(e){console.log("Something went wrong!")}))})),n},g=function(){return x.get("/employees")},v=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){g().then((function(e){r(e.data)})).catch((function(){console.log("Erroar. mamaya na lang ulit ^.^V")}))})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"List of Employees "}),Object(i.jsx)("div",{children:Object(i.jsxs)("table",{border:"1",children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Name"}),Object(i.jsx)("td",{children:"Location"}),Object(i.jsx)("td",{children:"Department"})]}),n.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.department}),Object(i.jsx)("td",{children:e.location})]})}))]})})]})};var y=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:"https://i.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.webp",className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload. ------ Joanaaaa"]}),Object(i.jsx)("p",{children:m()}),Object(i.jsx)(v,{}),Object(i.jsxs)(o,{name:"Peter",heroName:"spiderman",children:[Object(i.jsx)(j,{}),Object(i.jsx)("p",{children:"this is children props"})]}),Object(i.jsx)(o,{name:"Tony",heroName:"iron man",children:Object(i.jsx)(u,{})}),Object(i.jsx)(o,{name:"Thor",heroName:"Thor"}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(i.jsx)("br",{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.5404c876.chunk.js.map