(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(20),s=c.n(r),l=(c(30),c(11),c.p,c(0)),i=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:['"',e.name," a.k.a ",e.heroName,'"']}),e.children]})},o=function(){return Object(l.jsx)("h3",{children:"Profile:"})},j=c(21),d=c(22),b=c(25),h=c(24),u=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,children:"click me!!!"}),Object(l.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),c}(a.a.Component),m=c(3),O=c(23),p=c.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),x=function(){return p.get("/hello")},f=function(){var e=Object(n.useState)("ERRO.ORR! PLS WAIT ^.^V"),t=Object(m.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x().then((function(e){a(e.data)})).catch((function(e){console.log("Something went wrong!")}))})),c},v=c(6),g=function(){return p.get("/employees")},y=function(e){return p.post("/employees",e)},N=function(e){return p.put("/employees",e)},w=function(e){return p.get("/employees/".concat(e))},A=function(e){return p.delete("/employees/".concat(e))},S=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){r()}));var r=function(){g().then((function(e){a(e.data)})).catch((function(){console.log("Erroar. mamaya na lang ulit ^.^V")}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"List of Employees "}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{class:"table-danger",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(l.jsx)(v.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void A(t).then((function(e){console.log("successfully deleted employee!"),r()})).catch((function(e){console.error("something went wrong!",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},k=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/#/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/#/add",children:"Add employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})};var C=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{src:"https://c.tenor.com/UpRSWvHOzhAAAAAi/squidward-handsome.gif",className:"App-logo",alt:"logo"}),Object(l.jsx)("p",{children:"\u3053\u3093\u306b\u3061\u308f ------ Joanaaaa"}),Object(l.jsx)("p",{children:f()}),Object(l.jsxs)(i,{name:"Squidward",heroName:"Grumpy",children:[Object(l.jsx)(o,{}),Object(l.jsx)("img",{src:"https://c.tenor.com/coy85skcAxsAAAAC/spongebob-squidward.gif"}),Object(l.jsx)("p",{children:"Full Name: Squidward Q. Tentacles"}),Object(l.jsx)("p",{children:"Species: Giant octopus"}),Object(l.jsx)("p",{children:"Gender: Male"}),Object(l.jsx)("p",{children:"Birth date: October 9"}),Object(l.jsx)("p",{children:"Education: Bikini Bottom School"}),Object(l.jsx)("p",{children:"Relatives: Mrs. Tentacles (mother)"}),Object(l.jsx)("p",{children:"Residence: 122 Conch Street, Bikini Bottom, Pacific Ocean"}),Object(l.jsx)("p",{children:"Occupation: Cashier at the Krusty Krab"})]}),Object(l.jsx)(u,{}),Object(l.jsx)("a",{className:"App-link",href:"https://www.youtube.com/watch?v=E5BzhG_sKUw",target:"_blank",rel:"noopener noreferrer",children:"Squiddy Tentacles"}),Object(l.jsx)("br",{})]})})},E=c(2),F=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(""),d=Object(m.a)(j,2),b=d[0],h=d[1],u=Object(E.f)(),O=Object(E.g)().employeeId;Object(n.useEffect)((function(){O&&w(O).then((function(e){a(e.data.name),o(e.data.location),h(e.data.department)})).catch((function(e){console.error("something went wrong!",e)}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"nameField",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"nameField",placeholder:"Add Employee Name",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"locationField",className:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"locationField",placeholder:"Add Employee location",onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"departmentField",className:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"departmentField",placeholder:"Add Employee Department",onChange:function(e){return h(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),O?N({employeeId:O,name:c,location:i,department:b}).then((function(e){console.log("updated employee",e.data),u("/employees")})).catch((function(e){console.error("Something went wrong!")})):y({name:c,location:i,department:b}).then((function(e){console.log("added new employee",e.data),u("/employees")})).catch((function(e){console.error("Something went wrong!")}))}(e)},children:"Save"})]})]})},I=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page Not Found!"})})},B=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(v.a,{basename:"/",children:Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{exact:!0,path:"/",element:Object(l.jsx)(C,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(C,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/employees",element:Object(l.jsx)(S,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/add",element:Object(l.jsx)(F,{})}),Object(l.jsx)(E.a,{exact:!0,path:"/edit/:employeeId",element:Object(l.jsx)(F,{})}),Object(l.jsx)(E.a,{exact:!0,path:"*",element:Object(l.jsx)(I,{})})]})})})};var R=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(k,{}),Object(l.jsx)(B,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(50);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),D()}},[[51,1,2]]]);
//# sourceMappingURL=main.f96564c1.chunk.js.map