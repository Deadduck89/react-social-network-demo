(this["webpackJsonpreact-kamasutra-01"]=this["webpackJsonpreact-kamasutra-01"]||[]).push([[6],{255:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var a=n(2),r=n(64),o=n(0),i=n.n(o),c=n(96),l=n.n(c),u=n(117);function m(e){return function(t){var n=t.input,o=t.meta,c=o.touched,u=o.error,m=Object(r.a)(t,["input","meta"]),s=c&&u;return i.a.createElement("div",{className:l.a.formControl+" "+(s?l.a.error:"")},i.a.createElement("div",{className:l.a.form},i.a.createElement(e,Object(a.a)(Object(a.a)({},n),m))),i.a.createElement("div",null,s&&i.a.createElement("span",null,u)))}}var s=m("textarea"),f=m("input"),d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",{className:l.a.loginField},i.a.createElement(u.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r)),o)}},257:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is requred"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},332:function(e,t,n){e.exports={login:"Login_login__1zeTA",loginForm:"Login_loginForm__IZKsy",loginButton:"Login_loginButton__2sP8a"}},333:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(118),i=n(255),c=n(257),l=n(22),u=n(32),m=n(7),s=n(96),f=n.n(s),d=n(332),b=n.n(d),g=n(39),p=Object(o.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{className:b.a.loginForm,onSubmit:t},Object(i.c)("Email","email",i.a,[c.b]),Object(i.c)("Password","password",i.a,[c.b],{type:"password"}),Object(i.c)(null,"rememberMe",i.a,null,{type:"checkbox"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),n&&r.a.createElement("div",{className:f.a.formSummaryError},n),r.a.createElement("div",{className:b.a.loginButton},r.a.createElement(g.a,{type:"login"})))}));t.default=Object(l.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:u.c})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",{className:b.a.login},r.a.createElement("h3",null,"\u0412\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"),r.a.createElement(p,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=6.a8132b7f.chunk.js.map