(this["webpackJsonpcute-login-form"]=this["webpackJsonpcute-login-form"]||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),s=a.n(i),r=(a(138),a(139),a(140),a(49)),l=a.n(r),o=a(64),d=a(228),j=a(65),m=a(63),b=a.n(m),u=a(11),p=a(15),h=a(215),x=a(16),O=a(2);var f=function(e){var t=Object(x.f)();function a(e){var t;return e?!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)&&e?t="Invalid email address":e.length>25&&(t="Too long"):t="Required",t}function n(e){var t;return e?e.length>25&&(t="Too long"):t="Required",t}return console.log(e),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.c,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(o.a)(l.a.mark((function e(a,n){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.resetForm,console.log(a),e.next=4,j.post("https://jsonplaceholder.typicode.com/users",{values:a});case 4:i=e.sent,i.data,t.push("/contacts"),console.log(t),c();case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.touched,e.isValidating;return Object(O.jsx)(u.b,{className:b.a.container,children:Object(O.jsx)("div",{className:b.a.holder,children:Object(O.jsx)("div",{className:b.a.card,children:Object(O.jsxs)("div",{className:b.a.card__text,children:[Object(O.jsx)(d.a.Group,{controlId:"formBasicEmail",className:b.a.classForm,children:Object(O.jsx)(u.a,{component:p.a,id:"email",name:"email",label:"Email",variant:"outlined",type:"email",validate:a,helperText:"Enter email",fullWidth:!0})}),Object(O.jsx)(d.a.Group,{controlId:"formBasicPassword",children:Object(O.jsx)(u.a,{component:p.a,id:"password",name:"password",label:"Password",variant:"outlined",type:"password",validate:n,helperText:"Enter password",fullWidth:!0})}),Object(O.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Login"}),Object(O.jsx)(h.a,{color:"primary",type:"reset",fullWidth:!0,children:"Reset"})]})})})})}})})},v=a(44),y=a(116),g=a(41),C=a(39),_=a.n(C),P=a(112),k=a(220),W=a(237),I=a(233),w=a(229),A=a(110),E=a(221),S=a(236),L=a(224),N=a(111),z=a(225),F=a(222),T=a(230),B=a(223),D=a(118),K=a(227),Z=a(32),R=a.n(Z),V=a(235),q=a(231),X=a(234),G=a(219),J=a(217),M=a(218),Q=a(216);function $(e){return Object(O.jsx)(q.a,Object(g.a)({elevation:6,variant:"filled"},e))}function H(e){var t=e.children,a=e.value,n=e.index,c=Object(y.a)(e,["children","value","index"]);return Object(O.jsx)("div",Object(g.a)(Object(g.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),{},{children:a===n&&Object(O.jsx)(K.a,{p:3,children:Object(O.jsx)(D.a,{children:t})})}))}function Y(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function U(e){var t=e.children,a=e.eventKey,n=e.onClickSideBehaviour,c=e.type,i=e.isFullWidth,s=void 0!==i&&i,r=e.variant,l=void 0===r?"outlined":r,o=e.color,d=void 0===o?"primary":o,j=e.disabled,m=void 0!==j&&j,b=Object(P.b)(a,n);return Object(O.jsx)(h.a,{fullWidth:s,type:c,variant:l,color:d,onClick:b,disabled:m,children:t})}function ee(e){13===(e.charCode||e.keyCode)&&e.preventDefault()}var te=function(e){var t=Object(x.f)(),a=Object(n.useState)(null),i=Object(v.a)(a,2),s=i[0],r=i[1],m=c.a.useState(!1),b=Object(v.a)(m,2),f=b[0],y=b[1],C=function(){y(!1)},P=c.a.useState(!1),D=Object(v.a)(P,2),K=D[0],Z=D[1],q=function(e,t){"clickaway"!==t&&Z(!1)},te=c.a.useState(0),ae=Object(v.a)(te,2),ne=ae[0],ce=ae[1],ie=function(e,t){ce(t)},se=Object(n.useState)({contacts:[]}),re=Object(v.a)(se,2),le=re[0],oe=re[1];function de(e){var t;return e?e.length>25?t="Too long":"admin"===e&&(t="Nice try!"):t="Required",t}function je(e){var t;return e?e.length>25&&(t="Too long"):t="Required",t}function me(e){var t;return!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)&&e&&(t="Invalid email address"),t}Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,a=t.data,n=a.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{isEditing:!1})})),oe({contacts:n});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var be=Object(n.useState)(!1),ue=Object(v.a)(be,2),pe=ue[0],he=ue[1];Object(n.useEffect)((function(){window.dispatchEvent(new CustomEvent("resize"))}),[pe]);var xe=c.a.useState(""),Oe=Object(v.a)(xe,2),fe=Oe[0],ve=Oe[1],ye=c.a.useState([]),ge=Object(v.a)(ye,2),Ce=ge[0],_e=ge[1];return c.a.useEffect((function(){var e=le.contacts.filter((function(e){return e.name.toLowerCase().includes(fe.toLowerCase())}));console.log(e),_e(e)}),[fe,le.contacts]),Object(O.jsxs)("div",{className:_.a.contactsContainer,children:[Object(O.jsxs)(X.a,{open:f,onClose:C,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(Q.a,{id:"alert-dialog-title",children:"Delete contact?"}),Object(O.jsx)(J.a,{children:Object(O.jsx)(M.a,{id:"alert-dialog-description",children:"Contact will be deleted"})}),Object(O.jsxs)(G.a,{children:[Object(O.jsx)(h.a,{onClick:function(){r(null),C()},color:"primary",children:"Cancel"}),Object(O.jsx)(h.a,{onClick:function(){oe({contacts:le.contacts.filter((function(e){return e.id!==s}))}),r(null),C()},color:"secondary",autoFocus:!0,children:"Delete"})]})]}),Object(O.jsx)(V.a,{open:K,autoHideDuration:6e3,onClose:q,children:Object(O.jsx)($,{onClose:q,severity:"success",children:"Success!"})}),Object(O.jsxs)(k.a,{children:[Object(O.jsxs)(W.a,{defaultActiveKey:"0",children:[Object(O.jsxs)(I.a,{bg:"dark",variant:"dark",expand:!0,sticky:!0,children:[Object(O.jsx)(I.a.Brand,{href:"#home",children:"Contacts"}),Object(O.jsx)(w.a,{className:"mr-auto",children:Object(O.jsx)(U,{eventKey:"0",variant:"contained",onClickSideBehaviour:function(){he(!pe)},children:pe?"Cancel":"Add contact"})}),Object(O.jsxs)(d.a,{inline:!0,children:[Object(O.jsx)(A.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){console.log(e.target.value),ve(e.target.value)}}),Object(O.jsx)(E.a,{variant:"outline-info",onClick:function(){t.push("/login"),console.log(t)},children:"Log out"})]})]}),Object(O.jsx)(S.a,{children:Object(O.jsx)(W.a.Collapse,{eventKey:"0",in:pe,children:Object(O.jsx)(S.a.Body,{children:Object(O.jsx)(u.c,{initialValues:{id:"id",name:"",username:"",email:"",address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"",website:"",company:{name:"",catchPhrase:"",bs:""}},onSubmit:function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.resetForm,console.log(t),e.next=4,j.post("https://jsonplaceholder.typicode.com/users",{values:t});case 4:c=e.sent,i=c.data,(s=i).values.id=le.contacts.length+1,oe({contacts:le.contacts.concat(s.values)}),n(),he(!1);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.touched,e.isValidating;return Object(O.jsxs)(u.b,{onKeyDown:ee,children:[Object(O.jsxs)(F.a,{container:!0,spacing:3,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(O.jsx)(u.a,{component:p.a,id:"name",name:"name",label:"Fullname",variant:"outlined",validate:de,helperText:"Enter name",fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(O.jsx)(u.a,{component:p.a,id:"phone",name:"phone",label:"Phone",variant:"outlined",type:"text",validate:je,helperText:"Enter phone number",fullWidth:!0})})]}),Object(O.jsxs)(T.a,{variant:"fullWidth",value:ne,indicatorColor:"primary",textColor:"primary",onChange:ie,children:[Object(O.jsx)(B.a,Object(g.a)(Object(g.a)({label:"Info"},Y(0)),{},{selected:!0})),Object(O.jsx)(B.a,Object(g.a)({label:"Address"},Y(1))),Object(O.jsx)(B.a,Object(g.a)({label:"Company"},Y(2)))]}),Object(O.jsx)(H,{value:ne,index:0,children:Object(O.jsxs)(F.a,{container:!0,spacing:3,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"username",name:"username",label:"Skype",variant:"outlined",type:"text",fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"email",name:"email",label:"Email",variant:"outlined",type:"email",validate:me,fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"website",name:"website",label:"Website",variant:"outlined",type:"text",fullWidth:!0})})]})}),Object(O.jsx)(H,{value:ne,index:1,children:Object(O.jsxs)(F.a,{container:!0,spacing:3,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"street",name:"address.street",label:"Street",variant:"outlined",type:"text",fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"zipcode",name:"c",label:"Zipcode",variant:"outlined",type:"text",fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"city",name:"address.city",label:"City",variant:"outlined",type:"text",fullWidth:!0})})]})}),Object(O.jsx)(H,{value:ne,index:2,children:Object(O.jsxs)(F.a,{container:!0,spacing:3,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"companyName",name:"company.name",label:"Company name",variant:"outlined",type:"text",fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"catchPhrase",name:"company.catchPhrase",label:"Catchphrase",variant:"outlined",type:"text",fullWidth:!0})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:Object(O.jsx)(u.a,{component:p.a,id:"bs",name:"company.bs",label:"Business",variant:"outlined",type:"text",fullWidth:!0})})]})}),Object(O.jsxs)(F.a,{container:!0,spacing:5,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(O.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Add"})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(O.jsx)(h.a,{color:"primary",type:"reset",fullWidth:!0,children:"Reset"})})]})]})}})})})})]}),Object(O.jsx)("div",{className:_.a.contactCards,children:le.contacts&&Ce.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:_.a.contactCard,children:Object(O.jsxs)(W.a,{children:[Object(O.jsxs)(L.a,{xs:1,sm:1,md:2,lg:2,children:[Object(O.jsxs)(N.a,{className:_.a.avatarAndNameCol,children:[Object(O.jsx)(z.a,{className:_.a.avatar,src:"https://picsum.photos/200?random=".concat(e.id),alt:"user_avatar_".concat(e.id),rounded:!0,fluid:!0}),Object(O.jsx)("span",{className:_.a.name,children:e.name})]}),Object(O.jsxs)(N.a,{className:_.a.cityCol,children:[Object(O.jsx)("span",{className:_.a.city,children:e.phone}),Object(O.jsx)(U,{eventKey:"1",onClickSideBehaviour:function(){oe({contacts:le.contacts.map((function(t){return t.id===e.id&&(t.isEditing=!t.isEditing),t}))})},children:"Profile"})]})]}),Object(O.jsx)(S.a,{children:Object(O.jsx)(W.a.Collapse,{eventKey:"1",in:e.isEditing,children:Object(O.jsx)(S.a.Body,{children:Object(O.jsx)(u.c,{initialValues:{id:e.id,name:e.name,username:e.username,email:e.email,address:{street:e.address.street,suite:e.address.suite,city:e.address.city,zipcode:e.address.zipcode,geo:{lat:e.address.geo.lat,lng:e.address.geo.lng}},phone:e.phone,website:e.website,company:{name:e.company.name,catchPhrase:e.company.catchPhrase,bs:e.company.bs}},onSubmit:function(t,a){a.setSubmitting(!0),oe({contacts:le.contacts.map((function(n){return n.id===e.id&&((n=t).isEditing=!n.isEditing,!0===n.isEditing&&(n.isEditing=!1)),a.resetForm({values:n}),n}))}),setTimeout((function(){a.setSubmitting(!1),Z(!0)}),1e3)},children:function(t){return Object(O.jsxs)(u.b,{children:[Object(O.jsx)(u.a,{component:p.a,name:"name",label:"Name:",validate:de,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,name:"phone",label:"Phone:",validate:je,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsxs)(F.a,{container:!0,spacing:3,children:[Object(O.jsxs)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:["Info",Object(O.jsx)(u.a,{component:p.a,name:"username",label:"Skype login:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,type:"email",name:"email",label:"Email:",validate:me,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,name:"website",label:"Website:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}})]}),Object(O.jsxs)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:["Address",Object(O.jsx)(u.a,{component:p.a,name:"address.street",label:"Street:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,name:"address.city",label:"City:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,name:"address.zipcode",label:"Zipcode:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}})]}),Object(O.jsxs)(F.a,{item:!0,xs:12,sm:12,md:4,lg:4,children:["Company",Object(O.jsx)(u.a,{component:p.a,name:"company.name",label:"Company name:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,name:"company.catchPhrase",label:"Catchphrase:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}}),Object(O.jsx)(u.a,{component:p.a,name:"company.bs",label:"Business:",fullWidth:!0,InputLabelProps:{shrink:!0},size:"small",InputProps:{readOnly:!1,endAdornment:Object(O.jsx)(h.a,{color:"primary",children:Object(O.jsx)(R.a,{})})}})]})]}),Object(O.jsxs)(F.a,{container:!0,spacing:3,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:9,lg:9,children:t.dirty&&Object(O.jsx)(U,{isFullWidth:!0,type:"submit",eventKey:"1",variant:"contained",disabled:t.isSubmitting,children:"Save"})}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:12,md:3,lg:3,children:Object(O.jsx)(h.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){var t;t=e.id,r(t),y(!0)},children:"DELETE"})})]})]})}})})})})]})},e.id)})}))})]})]})},ae=a(115);var ne=function(){return Object(O.jsx)(ae.a,{basename:"/cute-login-form-and-contacts",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x.b,{exact:!0,path:"/",children:Object(O.jsx)(x.a,{to:"/login"})}),Object(O.jsx)(x.b,{path:"/login",render:function(){return Object(O.jsx)(f,{})}}),Object(O.jsx)(x.b,{path:"/contacts",render:function(){return Object(O.jsx)(te,{})}})]})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,239)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(ne,{})}),document.getElementById("root")),ce()},39:function(e,t,a){e.exports={contactsContainer:"Contacts_contactsContainer__20qDj",addContactFormCol:"Contacts_addContactFormCol__29DRo",contactCard:"Contacts_contactCard__1iQva",contactCards:"Contacts_contactCards__2AIZT",avatarAndNameCol:"Contacts_avatarAndNameCol__zAXPk",avatar:"Contacts_avatar__3pELo",name:"Contacts_name__2BL4l",phoneCol:"Contacts_phoneCol__2IxEG",phone:"Contacts_phone__AR4eX",informationCol:"Contacts_informationCol__23jyh",email:"Contacts_email__2NBKo",cityCol:"Contacts_cityCol__-vuc3",city:"Contacts_city__1oDka",contactTab:"Contacts_contactTab__MCVoX"}},63:function(e,t,a){e.exports={container:"Login_container__2ifdT",holder:"Login_holder__3kaQ9",orbit:"Login_orbit__XDkox",card:"Login_card__1JMI5",card__text:"Login_card__text__2hYQd"}}},[[170,1,2]]]);
//# sourceMappingURL=main.d1c47180.chunk.js.map