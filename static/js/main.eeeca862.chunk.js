(this["webpackJsonpresponsive-react-media-query"]=this["webpackJsonpresponsive-react-media-query"]||[]).push([[0],{101:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(32),a=c.n(i),r=(c(84),c(85),c(129)),j=c.p+"static/media/car1.8d88881a.jpg",l=c.p+"static/media/car2.729e4b80.jpg",d=c.p+"static/media/car3.0beab96d.jpg",o=c(2),b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsxs)(r.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100",src:j,alt:"First slide"}),Object(o.jsxs)(r.a.Caption,{children:[Object(o.jsx)("h3",{children:"First slide label"}),Object(o.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(o.jsxs)(r.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100",src:l,alt:"Second slide"}),Object(o.jsxs)(r.a.Caption,{children:[Object(o.jsx)("h3",{children:"Second slide label"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(o.jsxs)(r.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100",src:d,alt:"Third slide"}),Object(o.jsxs)(r.a.Caption,{children:[Object(o.jsx)("h3",{children:"Third slide label"}),Object(o.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})},h=(c.p,c.p,c.p,c.p,c(131)),O=(c(89),function(){return Object(o.jsxs)("div",{className:"row",style:{backgroundColor:"#020f24",color:"whitesmoke",margin:"auto",width:"100%"},children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3 my-auto mx-auto",style:{margin:"auto"},children:Object(o.jsx)("h2",{children:"CarHub"})}),Object(o.jsxs)("div",{className:"col-md-3   mt-5",style:{margin:"auto"},children:[Object(o.jsx)("h4",{className:"fw-bolder",children:"Company"}),Object(o.jsx)("h6",{children:"About"}),Object(o.jsx)("h6",{children:"Project"}),Object(o.jsx)("h6",{children:"Our Team"}),Object(o.jsx)("h6",{children:"Terms Condition"}),Object(o.jsx)("h6",{children:"Submit Listing"})]}),Object(o.jsxs)("div",{className:"col-md-3 mt-5",style:{margin:"auto"},children:[Object(o.jsx)("h4",{children:"Quick Links"}),Object(o.jsx)("h6",{children:"Quick links"}),Object(o.jsx)("h6",{children:"Rentals"}),Object(o.jsx)("h6",{children:"Sales"}),Object(o.jsx)("h6",{children:"Contarct"}),Object(o.jsx)("h6",{children:"Our Blogs"})]}),Object(o.jsxs)("div",{className:"col-md-3   mt-5",style:{margin:"auto"},children:[Object(o.jsx)("h4",{children:"About Us"}),Object(o.jsx)("h6",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorum?"})]})]}),Object(o.jsx)("h6",{className:"text-center col-12 mx-auto my-5",children:" COPYRIGHT carHub 2021"})]})}),x=c(9),m=(c(90),c(12)),u=function(e){var t=e.service,c=t._id,s=t.name,n=t.price,i=t.description,a=t.img;return Object(o.jsxs)(h.a,{className:"services-card my-5",style:{width:"18rem",marginLeft:"60px"},children:[Object(o.jsx)(h.a.Img,{variant:"top",src:a}),Object(o.jsxs)(h.a.Body,{children:[Object(o.jsx)(h.a.Title,{className:"text-info fw-bold",children:s}),Object(o.jsx)(h.a.Text,{children:i}),Object(o.jsx)(h.a.Text,{children:Object(o.jsxs)("p",{className:"fw-bold",children:["Price:  ",n]})}),Object(o.jsx)(m.b,{to:"/booking/".concat(c),children:Object(o.jsxs)("button",{className:"btn btn-warning",children:["Rent ",s.toLowerCase()]})})]})]})},g=(c(96),function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("https://car-hab.onrender.com/services").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(o.jsxs)("div",{id:"services",children:[Object(o.jsx)("h2",{className:"text-primary text-dark fw-bold mt-5",children:"Available Cars"}),Object(o.jsx)("div",{className:"service-container",children:c.map((function(e){return Object(o.jsx)(u,{service:e},e.id)}))})]})}),f=function(){return Object(o.jsxs)("div",{id:"home",children:[Object(o.jsx)(b,{}),Object(o.jsx)(g,{}),Object(o.jsx)(O,{})]})},p=c(17),v=c.p+"static/media/404.3fb1b585.png",N=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{style:{width:"100%"},src:v,alt:""}),Object(o.jsx)(m.b,{to:"/",children:Object(o.jsx)("button",{children:"Go Back"})})]})},w=function(){var e=Object(p.g)().serviceId,t=Object(s.useState)({}),c=Object(x.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){fetch("https://car-hab.onrender.com/services/".concat(e)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Service Name: ",n.name]}),Object(o.jsxs)("h2",{children:["this is booking: ",e]})]})},S=c(43),E=c(76);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCvag01tD5F2LVLZhKe9YYhJVHm4KKBT94",REACT_APP_FIREBASE_APP_ID:"1:858355696966:web:e5034ba63b158a6fde1147",REACT_APP_FIREBASE_AUTH_DOMAIN:"genius-car-mechanics-7a6ec.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"858355696966",REACT_APP_FIREBASE_PROJECT_ID:"genius-car-mechanics-7a6ec",REACT_APP_FIREBASE_STORAGE_BUCKET:"genius-car-mechanics-7a6ec.appspot.com"}));var A={apiKey:"AIzaSyCvag01tD5F2LVLZhKe9YYhJVHm4KKBT94",authDomain:"genius-car-mechanics-7a6ec.firebaseapp.com",projectId:"genius-car-mechanics-7a6ec",storageBucket:"genius-car-mechanics-7a6ec.appspot.com",messagingSenderId:"858355696966",appId:"1:858355696966:web:e5034ba63b158a6fde1147"};(function(){Object(E.a)(A)})();var y=function(){var e=Object(s.useState)({}),t=Object(x.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!0),a=Object(x.a)(i,2),r=a[0],j=a[1],l=Object(S.b)();Object(s.useEffect)((function(){var e=Object(S.c)(l,(function(e){n(e||{}),j(!1)}));return function(){return e}}),[]);return{user:c,isLoading:r,signInUsingGoogle:function(){j(!0);var e=new S.a;Object(S.d)(l,e).then((function(e){n(e.user)})).finally((function(){return j(!1)}))},logOut:function(){j(!0),Object(S.e)(l).then((function(){})).finally((function(){return j(!1)}))}}},C=Object(s.createContext)(),I=function(e){var t=e.children,c=y();return Object(o.jsx)(C.Provider,{value:c,children:t})},_=function(){return Object(s.useContext)(C)},P=(c(98),function(){var e=_().signInUsingGoogle;return Object(o.jsx)("div",{className:"login-page d-flex justify-content-center align-items-center",children:Object(o.jsxs)("div",{className:"login-box rounded shadow",children:[Object(o.jsxs)("h2",{className:"text-center mt-3",children:[Object(o.jsx)("span",{className:"text-warning",children:"Login"})," Page"]}),Object(o.jsxs)("div",{className:"m-5",children:[Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"Your Email"}),Object(o.jsx)("label",{htmlFor:"flotingInput",children:"Email Address"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"password",className:"form-control",id:"floatingInput",placeholder:"Your Password"}),Object(o.jsx)("label",{htmlFor:"flotingInput",children:"Password"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-warning w-100 rounded",children:"Login"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("button",{onClick:function(){return e()},className:"btn btn-lg btn-google w-100 shadow btn-block btn-outline",href:"#",children:[Object(o.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Google Sign-in"]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(m.b,{to:"/register",className:"btn btn-white w-100 rounded",children:["New User? ",Object(o.jsx)("span",{className:"text-primary",children:"Please Register First"})," "]})]})]})})}),L=c(130),T=c(125),k=c(128),R=c(126),F=c(56),B=function(){var e=_(),t=e.user,c=e.logOut;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(L.a,{bg:"dark",variant:"dark",sticky:"top",collapseOnSelect:!0,expand:"lg",children:Object(o.jsxs)(T.a,{children:[Object(o.jsxs)(L.a.Brand,{href:"#home",className:"fw-bold",children:["car",Object(o.jsx)("span",{className:"text-info",children:"Hub"})]}),Object(o.jsx)(L.a.Toggle,{}),Object(o.jsxs)(L.a.Collapse,{className:"justify-content-end",children:[Object(o.jsx)(k.a.Link,{as:F.a,to:"/home#home",className:"text-white fw-bold",children:"Home"}),Object(o.jsx)(k.a.Link,{as:F.a,to:"/home#services",className:"text-white fw-bold",children:"Cars"}),Object(o.jsx)(k.a.Link,{as:F.a,to:"/addService",className:"text-white fw-bold",children:"Dashboard"}),(null===t||void 0===t?void 0:t.email)?Object(o.jsx)(R.a,{onClick:c,variant:"light",children:"Logout"}):Object(o.jsx)(k.a.Link,{as:m.b,to:"/login",className:"text-white fw-bold",children:"Login"}),Object(o.jsxs)(L.a.Text,{children:["Signed in as: ",Object(o.jsx)("a",{href:"#login",children:null===t||void 0===t?void 0:t.displayName})]})]})]})})})},D=c(7),K=c(10),H=c(127),Y=["children"],G=function(e){var t=e.children,c=Object(K.a)(e,Y),s=_(),n=s.user;return s.isLoading?Object(o.jsx)(H.a,{animation:"border",variant:"danger"}):Object(o.jsx)(p.b,Object(D.a)(Object(D.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(o.jsx)(p.a,{to:{pathname:"/login",state:{from:c}}})}}))},U=(c(101),function(){return Object(o.jsx)("div",{className:"registration-page d-flex justify-content-center align-items-center",children:Object(o.jsxs)("div",{className:"registration-box rounded shadow",children:[Object(o.jsxs)("h2",{className:"text-center mt-3",children:[Object(o.jsx)("span",{className:"text-warning",children:"Registration"})," Page"]}),Object(o.jsxs)("div",{className:"m-5",children:[Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"Your Email"}),Object(o.jsx)("label",{htmlFor:"flotingInput",children:"Email Address"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"password",className:"form-control",id:"floatingInput",placeholder:"Your Password"}),Object(o.jsx)("label",{htmlFor:"flotingInput",children:"Password"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-warning w-100 rounded",children:"Register"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(m.b,{to:"/login",className:"btn btn-white w-100 rounded",children:["Already Registerd? ",Object(o.jsx)("span",{className:"text-primary",children:"Please Login"})]})]})]})})}),M=(c(77),c(78),c(120),function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),c=(t[0],t[1]);Object(s.useEffect)((function(){fetch("https://car-hab.onrender.com/services").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);return Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsxs)("div",{class:"sidebar me-4",children:[Object(o.jsx)(m.b,{className:"anchor",to:"/addService",children:"AddService"}),Object(o.jsx)(m.b,{className:"anchor",to:"/orderList",children:"Order Listed"}),Object(o.jsx)(m.b,{className:"anchor",to:"/manageService",children:"Manage Orders"}),Object(o.jsx)(m.b,{className:"anchor",to:"",children:"Contact"})]}),Object(o.jsx)("div",{style:{height:"600px"},className:"vr"}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Manage service"})})]})}),J=(c(121),function(){return Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsxs)("div",{class:"sidebar me-4",children:[Object(o.jsx)(m.b,{className:"anchor",to:"/addService",children:"AddService"}),Object(o.jsx)(m.b,{className:"anchor",to:"/orderList",children:"Order Listed"}),Object(o.jsx)(m.b,{className:"anchor",to:"/manageService",children:"Manage Orders"}),Object(o.jsx)(m.b,{className:"anchor",to:"",children:"Contact"})]}),Object(o.jsx)("div",{style:{height:"600px"},className:"vr"}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Add service"})})]})}),V=function(){return Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsxs)("div",{class:"sidebar me-4",children:[Object(o.jsx)(m.b,{className:"anchor",to:"/addService",children:"AddService"}),Object(o.jsx)(m.b,{className:"anchor",to:"/orderList",children:"Order Listed"}),Object(o.jsx)(m.b,{className:"anchor",to:"/manageService",children:"Manage Orders"}),Object(o.jsx)(m.b,{className:"anchor",to:"",children:"Contact"})]}),Object(o.jsx)("div",{style:{height:"600px"},className:"vr"}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Order list"})})]})};var q=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(I,{children:Object(o.jsxs)(m.a,{children:[Object(o.jsx)(B,{}),Object(o.jsxs)(p.d,{children:[Object(o.jsx)(p.b,{exact:!0,path:"/",children:Object(o.jsx)(f,{})}),Object(o.jsx)(p.b,{path:"/home",children:Object(o.jsx)(f,{})}),Object(o.jsx)(p.b,{path:"/login",children:Object(o.jsx)(P,{})}),Object(o.jsx)(p.b,{path:"/dashboard",children:Object(o.jsx)(J,{})}),Object(o.jsx)(p.b,{path:"/register",children:Object(o.jsx)(U,{})}),Object(o.jsx)(p.b,{path:"/addService",children:Object(o.jsx)(J,{})}),Object(o.jsx)(p.b,{path:"/manageService",children:Object(o.jsx)(M,{})}),Object(o.jsx)(p.b,{path:"/orderList",children:Object(o.jsx)(V,{})}),Object(o.jsx)(G,{path:"/booking/:serviceId",children:Object(o.jsx)(w,{})}),Object(o.jsx)(p.b,{path:"*",children:Object(o.jsx)(N,{})})]})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,132)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root")),W()},84:function(e,t,c){},85:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},96:function(e,t,c){},98:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.eeeca862.chunk.js.map