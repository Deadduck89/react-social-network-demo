(this["webpackJsonpreact-kamasutra-01"]=this["webpackJsonpreact-kamasutra-01"]||[]).push([[6],{251:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return b}));var n=a(2),r=a(63),c=a(0),o=a.n(c),l=a(95),i=a.n(l),u=a(116),m=["input","meta"];function s(e){return function(t){var a=t.input,c=t.meta,l=c.touched,u=c.error,s=Object(r.a)(t,m),p=l&&u;return o.a.createElement("div",{className:i.a.formControl+" "+(p?i.a.error:"")},o.a.createElement("div",null,o.a.createElement(e,Object(n.a)(Object(n.a)(Object(n.a)({},a),s),{},{style:{marginTop:"5px",borderStyle:"solid",borderColor:"#ff9133",borderRadius:"3px"}}))),o.a.createElement("div",null,p&&o.a.createElement("span",null,u)))}}var p=s("textarea"),d=s("input"),b=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",{className:i.a.loginField},o.a.createElement(u.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r)),o.a.createElement("span",null,c))}},253:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is requred"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},329:function(e,t,a){e.exports={login:"Login_login__1zeTA",loginForm:"Login_loginForm__IZKsy",loginButton:"Login_loginButton__2sP8a",captcha:"Login_captcha__16C6P"}},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(117),o=a(251),l=a(253),i=a(27),u=a(32),m=a(7),s=a(95),p=a.n(s),d=a(329),b=a.n(d),f=a(37),h=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return r.a.createElement("form",{className:b.a.loginForm,onSubmit:t},Object(o.c)("Email","email",o.a,[l.b]),Object(o.c)("Password","password",o.a,[l.b],{type:"password"}),Object(o.c)(null,"rememberMe",o.a,null,{type:"checkbox"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),n&&r.a.createElement("img",{src:n,className:b.a.captcha,alt:"captcha"}),n&&Object(o.c)("Symbols from image","captcha",o.a,[l.b]),a&&r.a.createElement("div",{className:p.a.formSummaryError},a),r.a.createElement("div",{className:b.a.loginButton},r.a.createElement(f.a,{type:"login"})))}));t.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:u.c})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",{className:b.a.login},r.a.createElement("h3",null,"\u0412\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"),r.a.createElement(h,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}))}}]);
//# sourceMappingURL=6.65c800fb.chunk.js.map