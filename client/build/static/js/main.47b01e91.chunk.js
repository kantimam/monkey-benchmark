(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),c=Object(n.createContext)(),o=function(e){var t=e.reducer,a=e.initialState,o=e.children;return r.a.createElement(c.Provider,{value:Object(n.useReducer)(t,a)},o)},l=function(){return Object(n.useContext)(c)}},20:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/brainLogo.8e02dfbf.svg"},32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(37),a(7)),i=a(10),s=a(9),u=a(113),m=(a(39),a(2)),d=function(e){e.hover,e.iconClass;return r.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",flexWrap:"wrap"}},r.a.createElement("i",{style:{margin:"0 auto",fontSize:"6rem"},className:"hoverPushAnimation "+e.iconSrc}),e.descText&&r.a.createElement("p",{style:{display:"block",textAlign:"center",width:"100%",margin:"0"}},e.descText))},f=(a(20),function(e){var t=e.children;return r.a.createElement("div",{className:"fullPageContainer gradientBackground"},t,r.a.createElement("div",{id:"GameOverview",className:"fullContainer maxWidth60"},r.a.createElement("div",{className:"fourPartGrid"},r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/wordgame"},r.a.createElement(d,{hover:!0,iconSrc:"fas fa-language",descText:"WORD GAME"})),r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/reactiongame"},r.a.createElement(d,{hover:!0,iconSrc:"fas fa-language",descText:"CLICK FAST"})),r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/numbergame"},r.a.createElement(d,{hover:!0,iconSrc:"fas fa-sort-numeric-up",descText:"NUMBER GAME"})),r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/wordgame"},r.a.createElement("p",null,"COMING SOON")))))}),g=a(16),E=a.n(g),p=function(){var e=Object(u.g)().pathname,t=Object(i.b)(),a=Object(s.a)(t,2),n=a[0],c=n.user,o=n.loggedIn,l=a[1];return r.a.createElement("div",{className:"centerAll userInfo"},o?r.a.createElement("div",{className:"somePadding undecoratedLink centerAll"},r.a.createElement("p",{onClick:function(){E()("".concat("/api","/logout")).then(function(e){return l({type:"logOut"})}).catch(function(e){console.log(e),l({type:"logOut"})})},style:{margin:"0 1rem"}},"LOG OUT"),r.a.createElement("p",{id:"userInfoWelcome"},"welcome ",c.name)):r.a.createElement(m.b,{className:"somePadding undecoratedLink",to:"/"===e?"/account/login":"".concat(e,"/account/login")},"LOG IN"))},v=function(){return r.a.createElement("nav",{className:"topNav"},r.a.createElement("ul",{className:"navList"},r.a.createElement(m.b,{className:"somePadding undecoratedLink",to:"/"},"HOME"),r.a.createElement(m.b,{className:"somePadding undecoratedLink",to:"/dashboard"},"DASHBOARD"),r.a.createElement(p,null)))},b=(a(63),function(e){var t=e.close,a=e.customStyle;return r.a.createElement("div",{className:"centerAll pointer closeButton",style:a,onClick:t},r.a.createElement("i",{className:"fas fa-times noMargin"}))}),h=function(e){var t=e.children,a=e.close;return r.a.createElement("div",{style:{position:"absolute",top:"5rem",width:"100%",display:"flex",zIndex:4}},r.a.createElement("div",{style:{margin:"0 auto",position:"relative",maxWidth:"90%"}},r.a.createElement(b,{close:a,customStyle:{position:"absolute",right:"-1rem",top:"-1rem"}}),t))},O=a(29),y=a.n(O),N=function(){return r.a.createElement("div",{id:"welcomeBanner",className:"centerAll"},r.a.createElement("div",{className:"callToAction"},r.a.createElement("div",{className:"centerAll logo"},r.a.createElement("img",{src:y.a,alt:"brain logo"})),r.a.createElement("h1",null,"ARE YOU A GOOD MONKEY?!"),r.a.createElement(m.b,{id:"enterButton",className:"mainButton",to:"/dashboard"},"ENTER")))},w=r.a.lazy(function(){return a.e(2).then(a.bind(null,428))}),S=r.a.lazy(function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,430))}),k=r.a.lazy(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,198))}),I=r.a.lazy(function(){return a.e(5).then(a.bind(null,429))}),x=function(){var e=Object(i.b)(),t=Object(s.a)(e,2),a=t[0],c=a.user,o=a.loggedIn,l=a.overflowHidden,m=t[1];Object(n.useEffect)(function(){var e=localStorage.getItem("monkeyGameSession");if(e&&"{}"!==e)m({type:"logIn",payload:JSON.parse(e)});else{var t=localStorage.getItem("monkeyGameGuestSession");m(t&&"{}"!==t?{type:"createGuest",payload:JSON.parse(t)}:{type:"createGuest",payload:{type:"guest",name:"Guest",email:null,scores:{word:0,react:0,number:0}}})}},[]);var d=function(e){e.preventDefault(),c&&(o&&c.email?localStorage.setItem("monkeyGameSession",JSON.stringify(c)):localStorage.setItem("monkeyGameGuestSession",JSON.stringify(c)))};Object(n.useEffect)(function(){return window.addEventListener("beforeunload",d),function(){window.removeEventListener("beforeunload",d)}},[c]);var g=function(e){var t=e.location.pathname.split("/account");e.push(t[0]||"/")};return r.a.createElement("div",{className:l?"App overflowHidden":"App"},r.a.createElement(u.a,{component:v}),r.a.createElement(u.a,{path:"*/account",render:function(e){var t=e.history;return e.match,r.a.createElement(h,{close:function(){return g(t)}},r.a.createElement(I,{history:t,close:function(){return g(t)}}))}}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/user:id",component:k}),r.a.createElement(u.a,{path:"/games",component:w}),r.a.createElement(u.a,{path:"/dashboard",render:function(){return r.a.createElement(S,{loggedIn:o,user:c})}}),r.a.createElement(u.a,{path:"/welcome",render:function(){return r.a.createElement(f,null,r.a.createElement(N,null))}}),r.a.createElement(u.a,{path:"/",render:function(){return r.a.createElement(f,null,r.a.createElement(N,null))}})))},G=function(){return r.a.createElement(i.a,{initialState:{loggedIn:!1,guestUser:!1,overflowHidden:!1,user:{}},reducer:function(e,t){switch(t.type){case"logIn":return Object(l.a)({},e,{user:t.payload,loggedIn:!0,guestUser:!1});case"logOut":return localStorage.removeItem("monkeyGameSession"),Object(l.a)({},e,{user:{},loggedIn:!1});case"createGuest":return Object(l.a)({},e,{user:t.payload,loggedIn:!1,guestUser:!0});case"setScore":var a=Object(l.a)({},e);return a.user.scores[t.target]=t.payload,a;case"blockScroll":return Object(l.a)({},e,{overflowHidden:!0});case"unblockScroll":return Object(l.a)({},e,{overflowHidden:!1});default:return e}}},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){return c(!0)},800);return function(){clearTimeout(e)}},[]),a&&r.a.createElement("div",{id:"loadingScreen",className:"centerAll"},"LOADING...")};o.a.render(r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(L,null)},r.a.createElement(m.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,10,9]]]);
//# sourceMappingURL=main.47b01e91.chunk.js.map