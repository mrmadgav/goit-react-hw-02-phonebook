(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),i=n(22),o=n(6),u=n(54),l=n(15),b=n(16),j=n(18),d=n(17),p=(n(79),n(4)),h=n(3),m=Object(h.b)("contact/addRequest"),g=Object(h.b)("contact/addSuccess"),O=Object(h.b)("contact/addError"),v=Object(h.b)("contact/getRequest"),f=Object(h.b)("contact/getSuccess"),_=Object(h.b)("contact/getError"),x=Object(h.b)("contact/deleteRequest"),N=Object(h.b)("contact/deleteSuccess"),L=Object(h.b)("contact/deleteError"),C=Object(h.b)("phone/filter"),k={addRequest:m,addSuccess:g,addError:O,getRequest:v,getSuccess:f,getError:_,deleteRequest:x,deleteSuccess:N,deleteError:L,onFilter:C},y=n(12),S=n.n(y);S.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var R=n(33),E=n.n(R),A=function(e){return e.contacts.items},B=function(e){return e.contacts.items.name},F=function(e){return e.contacts.items.number},T=function(e){return e.contacts.filter},I=n.p+"static/media/deleteIcon.3ef1c6cb.svg",w=n(1);var q=Object(o.b)((function(e){return{contacts:A(e),filter:T(e)}}),{deleteContact:function(e){return function(t){t(k.deleteRequest()),S.a.delete("/contacts/".concat(e)).then((function(){return t(k.deleteSuccess(e))})).catch((function(e){return t(k.deleteError(e))}))}}})((function(e){var t=e.contacts,n=e.filter,a=e.deleteContact,r=function(e){console.log("\u0410\u0439\u0434\u0438\u0448\u043d\u0438\u043a",e.target.id),a(e.target.id)};return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{className:E.a.contactList,children:t.map((function(e){return!!e.name.toLowerCase().includes(n.toLowerCase())&&Object(w.jsxs)("li",{className:E.a.contactElem,children:[e.name,": ",e.number,Object(w.jsx)("button",{className:E.a.deleteBtn,onClick:r,children:Object(w.jsx)("img",{src:I,alt:"",className:E.a.deleteImg,id:e.id})})]},e.id)}))})})})),M=n(38),U=n.n(M);var W=Object(o.b)((function(e){return{filter:T(e)}}),{onFilter:C})((function(e){var t=e.onFilter;return Object(w.jsxs)("label",{className:U.a.label,children:["Find Contacts by name",Object(w.jsx)("input",{type:"text",placeholder:"\u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",onChange:function(e){t(e.target.value)},className:U.a.filterInput})]})})),P=n(32),D=n.n(P),J=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.number,a=e.handleSubmit,r=e.handleChange;return Object(w.jsxs)("form",{onSubmit:a,children:[Object(w.jsxs)("label",{className:D.a.contactFormTitle,children:["Name",Object(w.jsx)("input",{name:"name",type:"text",placeholder:"Ilon Mask",value:t,onChange:r,className:D.a.contactInput,required:!0})]}),Object(w.jsxs)("label",{className:D.a.contactFormTitle,children:["Phone Number",Object(w.jsx)("input",{name:"number",type:"tel",placeholder:"777-888-99-00",value:n,onChange:r,className:D.a.contactInput})]}),Object(w.jsx)("button",{type:"submit",className:D.a.contactBtn,children:"add contact"})]})}}]),n}(a.Component),H=n(39),G=n.n(H),Y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.contacts.some((function(t){return t.name===e.state.name}))?alert("".concat(e.state.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435")):e.props.addContact({name:e.state.name,number:e.state.number})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getContact()}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:G.a.PhoneWrapper,children:[Object(w.jsx)("h1",{className:G.a.PhoneTitle,children:"Phone Book"}),Object(w.jsx)(J,{name:this.state.name,number:this.state.number,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(W,{}),Object(w.jsx)(q,{})]})}}]),n}(a.Component),Z=Object(o.b)((function(e){return{name:B(e),number:F(e),contacts:A(e)}}),{addContact:function(e){return function(t){t(k.addRequest()),S.a.post("/contacts",e).then((function(e){var n=e.data;return t(k.addSuccess(n))})).catch((function(e){return t(k.addError(e.message))}))}},getContact:function(){return function(e){e(k.getRequest()),S.a.get("/contacts").then((function(t){var n=t.data;return e(k.getSuccess(n))})).catch((function(t){return e(k.getError(t))}))}}})(Y),z=n(5),X=n(25),V=n.n(X),K=n(34),Q={registerRequest:Object(h.b)("auth/registerRequest"),registerSuccess:Object(h.b)("auth/registerSuccess"),registerError:Object(h.b)("auth/registerError"),LoginRequest:Object(h.b)("auth/LoginRequest"),LoginSuccess:Object(h.b)("auth/LoginSuccess"),LoginError:Object(h.b)("auth/LoginError"),LogoutRequest:Object(h.b)("auth/LogoutRequest"),LogoutSuccess:Object(h.b)("auth/LogoutSuccess"),LogoutError:Object(h.b)("auth/LogoutError"),getCurrentUserRequest:Object(h.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(h.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(h.b)("auth/getCurrentUserError")};S.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var $,ee,te,ne,ae=function(e){S.a.defaults.headers.common.Authorization="Bearer ".concat(e)},re=function(){S.a.defaults.headers.common.Authorization=""},ce=n(26),se=n.n(ce),ie=n.p+"static/media/animation.46a38fcd.gif",oe=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({email:"",password:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:se.a.loginWrapper,children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:ie,alt:"",className:se.a.mainAnimation})}),Object(w.jsx)("div",{className:se.a.registerWrapper,children:Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("span",{className:se.a.registerFormTitle,children:"Email"}),Object(w.jsx)("input",{name:"email",type:"email",placeholder:"",onChange:this.handleChange,className:se.a.regInput,required:!0})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("span",{className:se.a.registerFormTitle,children:"Password"}),Object(w.jsx)("input",{name:"password",type:"text",placeholder:"",onChange:this.handleChange,className:se.a.regInput,required:!0})]}),Object(w.jsx)("button",{type:"submit",className:se.a.regBtn,children:"Log In"})]})})]})}}]),n}(a.Component),ue={onLogin:function(e){return function(){var t=Object(K.a)(V.a.mark((function t(n){var a;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q.LoginRequest()),t.prev=1,t.next=4,S.a.post("/users/login",e);case 4:a=t.sent,ae(a.data.token),n(Q.LoginSuccess(a.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Q.LoginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},le=Object(o.b)(null,ue)(oe),be=n(23),je=n.n(be),de=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:je.a.registerWrapper,children:[Object(w.jsx)("h2",{className:je.a.regMainTitle,children:"Sign Up"}),Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsx)("label",{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{className:je.a.registerFormTitle,children:"Username"}),Object(w.jsx)("input",{name:"name",type:"text",placeholder:"Jesus",onChange:this.handleChange,className:je.a.regInput,required:!0})]})}),Object(w.jsx)("label",{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{className:je.a.registerFormTitle,children:"Email "}),Object(w.jsx)("input",{name:"email",type:"text",placeholder:"IlonMask@mail.ru",onChange:this.handleChange,className:je.a.regInput,required:!0})]})}),Object(w.jsx)("label",{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{className:je.a.registerFormTitle,children:"Password"}),Object(w.jsx)("input",{name:"password",type:"text",placeholder:"123",onChange:this.handleChange,className:je.a.regInput})]})}),Object(w.jsx)("button",{type:"submit",className:je.a.regBtn,children:"Create an account"})]})]})}}]),n}(a.Component),pe={onRegister:function(e){return function(){var t=Object(K.a)(V.a.mark((function t(n){var a;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q.registerRequest()),t.prev=1,t.next=4,S.a.post("/users/signup",e);case 4:a=t.sent,ae(a.data.token),n(Q.registerSuccess(a.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Q.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},he=Object(o.b)(null,pe)(de),me=function(e){return!!e.authReducer.token},ge=n.p+"static/media/ava-octocat.3ad91461.png",Oe=n(14),ve=n.n(Oe),fe=n(56),_e=n.n(fe),xe={onLogout:function(){return function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q.LogoutRequest()),e.prev=1,e.next=4,S.a.post("/users/logout");case 4:re(),t(Q.LogoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(Q.LogoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},Ne=Object(o.b)((function(e){return{isAuthenticated:me(e),name:e.authReducer.user.name,avatar:ge}}),xe)((function(e){var t=e.isAuthenticated,n=e.name,a=e.avatar,r=e.onLogout;return Object(w.jsx)("div",{children:t?Object(w.jsxs)("ul",{className:ve.a.loginNav,children:[Object(w.jsx)("li",{children:Object(w.jsx)("span",{className:ve.a.loginTitle,children:"Hello, ".concat(n)})}),Object(w.jsx)("li",{children:Object(w.jsx)("img",{src:a,alt:"",className:ve.a.loginAvatar})}),Object(w.jsx)("button",{type:"button",className:ve.a.logoutBtn,onClick:r,children:Object(w.jsx)(_e.a,{color:"primary",className:ve.a.logoutBtn})})]}):Object(w.jsxs)("ul",{className:ve.a.NavBar,children:[Object(w.jsx)("li",{className:ve.a.navLi,children:Object(w.jsx)(i.b,{exact:!0,to:"/register",className:ve.a.NavLink,activeClassName:ve.a.NavLinkActive,children:"Register"})}),Object(w.jsx)("li",{className:ve.a.navLink,children:Object(w.jsx)(i.b,{exact:!0,to:"/login",className:ve.a.NavLink,activeClassName:ve.a.NavLinkActive,children:"Login"})})]})})})),Le=n(13),Ce=n(67),ke=Object(o.b)((function(e){return{isAuthenticated:me(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,a=e.redirectTo,r=Object(Ce.a)(e,["component","isAuthenticated","redirectTo"]);return Object(w.jsx)(z.b,Object(Le.a)(Object(Le.a)({},r),{},{render:function(e){return n?Object(w.jsx)(t,Object(Le.a)({},e)):Object(w.jsx)(z.a,{to:a})}}))})),ye=n(64),Se=n.n(ye),Re=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{className:Se.a.container,children:Object(w.jsx)(w.Fragment,{children:this.props.children})})}}]),n}(a.Component),Ee=n(28),Ae=n.n(Ee),Be=function(){return Object(w.jsx)("div",{children:Object(w.jsxs)("ul",{className:Ae.a.MainBar,children:[Object(w.jsx)("li",{className:Ae.a.navLi,children:Object(w.jsx)(i.b,{exact:!0,to:"/",className:Ae.a.NavLink,activeClassName:Ae.a.NavLinkActive,children:"Main"})}),Object(w.jsx)("li",{className:Ae.a.navLink,children:Object(w.jsx)(i.b,{exact:!0,to:"/contacts",className:Ae.a.NavLink,activeClassName:Ae.a.NavLinkActive,children:"Contacts"})})]})})},Fe=n(65),Te=n.n(Fe),Ie=n.p+"static/media/phoneBookTitleImg.70dbc878.jpg",we=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:Ie,alt:""})})},qe=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(w.jsxs)(Re,{children:[Object(w.jsx)(z.b,{path:"/",component:Ne}),Object(w.jsxs)("div",{className:Te.a.mainWrapper,children:[Object(w.jsx)(z.b,{path:"/",component:Be}),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(z.d,{children:[Object(w.jsx)(z.b,{path:"/",exact:!0,component:we}),!this.props.isAuthenticated&&Object(w.jsx)(z.b,{path:"/login",exact:!0,component:le}),!this.props.isAuthenticated&&Object(w.jsx)(z.b,{path:"/register",exact:!0,component:he}),Object(w.jsx)(ke,{path:"/contacts",component:Z,redirectTo:"/login"})]})})]})]})}}]),n}(a.Component),Me={onGetCurrentUser:function(){return function(){var e=Object(K.a)(V.a.mark((function e(t,n){var a,r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),r=a.authReducer.token){e.next=3;break}return e.abrupt("return");case 3:return ae(r),t(Q.getCurrentUserRequest()),e.prev=5,e.next=8,S.a.get("/users/current");case 8:c=e.sent,t(Q.getCurrentUserSuccess(c.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(Q.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},Ue=Object(o.b)((function(e){return{isAuthenticated:me(e)}}),Me)(qe),We=n(30),Pe=Object(h.c)({items:[],filter:""},($={},Object(p.a)($,k.getSuccess,(function(e,t){var n=t.payload;return Object(Le.a)(Object(Le.a)({},e),{},{items:[].concat(Object(We.a)(e.items),Object(We.a)(n))})})),Object(p.a)($,k.addSuccess,(function(e,t){var n=t.payload;return Object(Le.a)(Object(Le.a)({},e),{},{items:[].concat(Object(We.a)(e.items),[{name:n.name,number:n.number,id:n.id}])})})),Object(p.a)($,k.deleteSuccess,(function(e,t){var n=t.payload;return Object(Le.a)(Object(Le.a)({},e),{},{items:Object(We.a)(e.items.filter((function(e){return e.id!==n})))})})),Object(p.a)($,k.onFilter,(function(e,t){var n=t.payload;return Object(Le.a)(Object(Le.a)({},e),{},{filter:n})})),$)),De=n(7),Je={name:null,email:null},He=Object(h.c)(Je,(ee={},Object(p.a)(ee,Q.registerSuccess,(function(e,t){return t.payload.user})),Object(p.a)(ee,Q.LoginSuccess,(function(e,t){return t.payload.user})),Object(p.a)(ee,Q.LogoutSuccess,(function(){return Je})),Object(p.a)(ee,Q.getCurrentUserSuccess,(function(e,t){return t.payload})),ee)),Ge=Object(h.c)(null,(te={},Object(p.a)(te,Q.registerSuccess,(function(e,t){return t.payload.token})),Object(p.a)(te,Q.LoginSuccess,(function(e,t){return t.payload.token})),Object(p.a)(te,Q.LogoutSuccess,(function(){return null})),te)),Ye=Object(h.c)(null,(ne={},Object(p.a)(ne,Q.registerError,(function(e,t){return t.payload})),Object(p.a)(ne,Q.LoginError,(function(e,t){return t.payload})),Object(p.a)(ne,Q.LogoutError,(function(e,t){return t.payload})),Object(p.a)(ne,Q.getCurrentUserError,(function(e,t){return t.payload})),ne)),Ze=Object(De.c)({user:He,token:Ge,error:Ye}),ze=n(27),Xe=n(66),Ve=n.n(Xe),Ke=[].concat(Object(We.a)(Object(h.d)({serializableCheck:{ignoredActions:[ze.a,ze.f,ze.b,ze.c,ze.d,ze.e]}})),[function(e){return function(e){return function(t){return console.group(t.type),console.info("dispatching",t),console.groupEnd(t.type),e(t)}}}]),Qe={key:"auth",storage:Ve.a,whitelist:["token"]},$e=Object(h.a)({reducer:{contacts:Pe,authReducer:Object(ze.g)(Qe,Ze)},middleware:Ke}),et={store:$e,persistor:Object(ze.h)($e)};n(109);s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(o.a,{store:et.store,children:Object(w.jsx)(u.a,{loading:null,persistor:et.persistor,children:Object(w.jsx)(i.a,{children:Object(w.jsx)(Ue,{})})})})}),document.getElementById("root"))},14:function(e,t,n){e.exports={loginNav:"Navbar_loginNav__2DEYW",loginAvatar:"Navbar_loginAvatar__15yIi",logoutBtn:"Navbar_logoutBtn__1rbvm",loginTitle:"Navbar_loginTitle__2MBL8",NavBar:"Navbar_NavBar__8FveY",navLi:"Navbar_navLi__2EFUl",NavLinkActive:"Navbar_NavLinkActive__2HeSa",NavLink:"Navbar_NavLink__1t7It"}},23:function(e,t,n){e.exports={registerWrapper:"Register_registerWrapper__1E35a",registerFormTitle:"Register_registerFormTitle__HL5aa",regBtn:"Register_regBtn__2T53n",regMainTitle:"Register_regMainTitle__7xJE9",regInput:"Register_regInput__DGPPi"}},26:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__38eiR",registerWrapper:"Login_registerWrapper__3A1HG",registerFormTitle:"Login_registerFormTitle__Xxwvq",regBtn:"Login_regBtn__3oL3f",regMainTitle:"Login_regMainTitle__3SGTb",regInput:"Login_regInput__2HuYY",mainAnimation:"Login_mainAnimation__1_iPo"}},28:function(e,t,n){e.exports={loginNav:"MainNav_loginNav__JaimC",loginAvatar:"MainNav_loginAvatar__1lg-F",logoutBtn:"MainNav_logoutBtn__1yQpI",loginTitle:"MainNav_loginTitle__1_E8u",NavBar:"MainNav_NavBar__3xbwJ",navLi:"MainNav_navLi__1XlFF",NavLinkActive:"MainNav_NavLinkActive__1Rcoh",NavLink:"MainNav_NavLink__3edkl",MainBar:"MainNav_MainBar__Cck9W"}},32:function(e,t,n){e.exports={formLabel:"ContactForm_formLabel__IFDx6",contactInput:"ContactForm_contactInput__3p629",contactAddBtn:"ContactForm_contactAddBtn__3RkSO",contactFormTitle:"ContactForm_contactFormTitle__5JvJl",contactBtn:"ContactForm_contactBtn__2ZI4R"}},33:function(e,t,n){e.exports={deleteBtn:"Contacts_deleteBtn__26V_A",contactList:"Contacts_contactList__2Oo8h",contactElem:"Contacts_contactElem__3A_-3",deleteImg:"Contacts_deleteImg__PWLZ0"}},38:function(e,t,n){e.exports={label:"Filter_label__6pZgT",filterInput:"Filter_filterInput__ljOXD"}},39:function(e,t,n){e.exports={PhoneWrapper:"Phone_PhoneWrapper__36EK3",PhoneTitle:"Phone_PhoneTitle__2uuHf"}},64:function(e,t,n){e.exports={container:"Section_container__35b-j"}},65:function(e,t,n){e.exports={mainWrapper:"App_mainWrapper__3VCZH"}}},[[111,1,2]]]);
//# sourceMappingURL=main.d35098a9.chunk.js.map