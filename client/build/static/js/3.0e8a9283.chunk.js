(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{116:function(e,t,a){"use strict";var n=a(4),r=a(0),c=a.n(r),s=a(2),l=function(e){var t=e.gameName,a=e.score,n=e.percent,r={word:{name:"Word Memory",unit:"words",path:"wordgame"},number:{name:"Number Memory",unit:"digits",path:"numbergame"},reaction:{name:"Reaction Time",unit:"ms",path:"reactiongame"}};return c.a.createElement("div",{className:"topScore textCenter card"},c.a.createElement("h3",{className:"statsHeader"},r[t].name),c.a.createElement("div",null,c.a.createElement("h1",null,a||"NO SCORE"),c.a.createElement("p",null,r[t].unit),c.a.createElement("p",null,"Top ",c.a.createElement("strong",null,n||"? ","%"))),c.a.createElement(s.b,{className:"mainButton undecoratedLink",to:"/games/".concat(r[t].path)},"PLAY"))},o=a(77),m=a(9),u=a.n(m);t.a=Object(r.memo)(function(e){var t=e.user,a=Object(r.useState)("word"),s=Object(n.a)(a,2),m=s[0],i=s[1],d=Object(r.useState)([]),E=Object(n.a)(d,2),p=E[0],v=E[1],f=Object(r.useState)({score:0,percent:0}),w=Object(n.a)(f,2),b=w[0],h=w[1];return Object(r.useEffect)(function(){u.a.get("".concat("/api","/getstats/").concat(m),{withCredentials:!0}).then(function(e){var a=[],n=t&&t.scores[m]?t.scores[m]:0,r=n?e.data[n]:null;for(var c in h({score:n,percent:r}),e.data)a.push({score:c,percent:e.data[c]});v(a)}).catch(function(e){return console.log("looks like the server is offline")})},[m]),c.a.createElement("div",{className:"userStatsWrapper"},c.a.createElement("select",{onChange:function(e){return i(e.target.value)}},c.a.createElement("option",{value:"word"},"word memory"),c.a.createElement("option",{value:"number"},"number memory"),c.a.createElement("option",{value:"reaction"},"reaction time")),c.a.createElement(l,{score:b.score,percent:b.percent,gameName:m}),c.a.createElement(o.a,{scores:p}))})},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(116);t.default=Object(n.memo)(function(e){var t=e.user;return r.a.createElement("div",{id:"guestStatsView",className:"statsView"},r.a.createElement("div",{className:"welcomeUser centerAll textUpper"},r.a.createElement("h2",null,"WELCOME ",t.name)),r.a.createElement(c.a,{user:t}))})},434:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(116),s=Object(n.memo)(function(e){var t=e.user;return r.a.createElement("div",{id:"guestStatsView",className:"statsView"},r.a.createElement("div",{className:"welcomeUser centerAll textUpper"},r.a.createElement("h2",null,"WELCOME GUEST")),r.a.createElement(c.a,{user:t}))}),l=a(200);t.default=function(e){var t=e.loggedIn,a=e.user;return r.a.createElement("div",{className:"maxWidth60 mainScreen"},t?r.a.createElement(l.default,{user:a}):r.a.createElement(s,{user:a}))}},77:function(e,t,a){"use strict";var n=a(4),r=a(0),c=a.n(r),s=a(100),l=function(e){var t=e.data,a=e.width;return c.a.createElement(s.b,{width:a||500,height:300,data:t},c.a.createElement(s.a,{type:"monotone",dataKey:"percent",stroke:"#8884d8"}),c.a.createElement(s.c,{stroke:"#ccc"}),c.a.createElement(s.e,{dataKey:"score"}),c.a.createElement(s.f,null),c.a.createElement(s.d,null))};t.a=function(e){var t=e.scores,a=Object(r.useState)(null),s=Object(n.a)(a,2),o=s[0],m=s[1],u=Object(r.useRef)();return Object(r.useLayoutEffect)(function(){var e=function(){return m(u.current.clientWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),c.a.createElement("div",{ref:u,id:"dashboardChart",className:"statsWrapperOuter"},c.a.createElement("div",{className:"statsWrapperInner"},o&&c.a.createElement(l,{data:t,width:o})))}}}]);
//# sourceMappingURL=3.0e8a9283.chunk.js.map