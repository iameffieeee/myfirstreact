(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),l=(n(30),n(11),n.p,n(0)),o=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Hello ",e.name," a.k.a ",e.heroName]}),e.children]})},i=function(){return Object(l.jsx)("p",{children:"this is children props"})},j=n(21),d=n(22),b=n(25),h=n(24),m=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,children:"click me!!!"}),Object(l.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(a.a.Component),u=n(3),O=n(23),p=n.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),x=function(){return p.get("/hello")},f=function(){var e=Object(c.useState)("ERRO.ORR! PLS WAIT ^.^V"),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){x().then((function(e){a(e.data)})).catch((function(e){console.log("Something went wrong!")}))})),n},v=n(6),g=function(){return p.get("/employees")},y=function(e){return p.post("/employees",e)},N=function(e){return p.put("/employees",e)},k=function(e){return p.get("/employees/".concat(e))},w=function(e){return p.delete("/employees/".concat(e))},C=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}));var r=function(){g().then((function(e){a(e.data)})).catch((function(){console.log("Erroar. mamaya na lang ulit ^.^V")}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"List of Employees "}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{class:"table-danger",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(l.jsx)(v.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void w(t).then((function(e){console.log("successfully deleted employee!"),r()})).catch((function(e){console.error("something went wrong!",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/add",children:"Add employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})};var A=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{src:"https://i.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.webp",className:"App-logo",alt:"logo"}),Object(l.jsx)("p",{children:"\u3053\u3093\u306b\u3061\u308f ------ Joanaaaa"}),Object(l.jsx)("p",{children:f()}),Object(l.jsxs)(o,{name:"Peter",heroName:"spiderman",children:[Object(l.jsx)(i,{}),Object(l.jsx)("p",{children:"this is children props"})]}),Object(l.jsx)(o,{name:"Tony",heroName:"iron man",children:Object(l.jsx)(m,{})}),Object(l.jsx)(o,{name:"Thor",heroName:"Thor"}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(l.jsx)("br",{})]})})},E=n(2),F=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],i=s[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),b=d[0],h=d[1],m=Object(E.f)(),O=Object(E.g)().employeeId;Object(c.useEffect)((function(){O&&k(O).then((function(e){a(e.data.name),i(e.data.location),h(e.data.department)})).catch((function(e){console.error("something went wrong!",e)}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"nameField",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"nameField",placeholder:"Add Employee Name",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"locationField",className:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"locationField",placeholder:"Add Employee location",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"departmentField",className:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"departmentField",placeholder:"Add Employee Department",onChange:function(e){return h(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),O?N({employeeId:O,name:n,location:o,department:b}).then((function(e){console.log("updated employee",e.data),m("/employees")})).catch((function(e){console.error("Something went wrong!")})):y({name:n,location:o,department:b}).then((function(e){console.log("added new employee",e.data),m("/employees")})).catch((function(e){console.error("Something went wrong!")}))}(e)},children:"Save"})]})]})},I=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page Not Found!"})})},L=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(v.a,{children:Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{exact:!0,path:"/",element:Object(l.jsx)(A,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(A,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/employees",element:Object(l.jsx)(C,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/add",element:Object(l.jsx)(F,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/edit/:employeeId",element:Object(l.jsx)(F,{})}),Object(l.jsx)(E.a,{exact:!0,path:"*",element:Object(l.jsx)(I,{})})]})})})};var D=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(S,{}),Object(l.jsx)(L,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(50);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.0f3ed0d0.chunk.js.map