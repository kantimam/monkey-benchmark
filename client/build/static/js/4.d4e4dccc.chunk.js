(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,a){"use strict";var n=a(9),r=a(0),c=a.n(r),s=a(2),o=function(e){var t=e.gameName,a=e.score,n=e.percent,r={word:{name:"Word Memory",unit:"words",path:"wordgame"},number:{name:"Number Memory",unit:"digits",path:"numbergame"},reaction:{name:"Reaction Time",unit:"ms",path:"reactiongame"}};return c.a.createElement("div",{className:"topScore textCenter card"},c.a.createElement("h3",{className:"statsHeader"},r[t].name),c.a.createElement("div",null,c.a.createElement("h1",null,a||"NO SCORE"),c.a.createElement("p",null,r[t].unit),c.a.createElement("p",null,"Top ",c.a.createElement("strong",null,n||"? ","%"))),c.a.createElement(s.b,{className:"mainButton undecoratedLink",to:"/games/".concat(r[t].path)},"PLAY"))},l=a(75),m=a(16),u=a.n(m);t.a=Object(r.memo)(function(e){var t=e.user,a=Object(r.useState)("word"),s=Object(n.a)(a,2),m=s[0],i=s[1],d=Object(r.useState)([]),E=Object(n.a)(d,2),p=E[0],f=E[1],v=Object(r.useState)({score:0,percent:0}),b=Object(n.a)(v,2),w=b[0],h=b[1];return Object(r.useEffect)(function(){u.a.get("".concat("/api","/getstats/").concat(m),{withCredentials:!0}).then(function(e){var a=[],n=t&&t.scores[m]?t.scores[m]:0,r=n?e.data[n]:null;for(var c in h({score:n,percent:r}),e.data)a.push({score:c,percent:e.data[c]});f(a)}).catch(function(e){return console.log("looks like the server is offline")})},[m]),c.a.createElement("div",{className:"userStatsWrapper"},c.a.createElement("select",{onChange:function(e){return i(e.target.value)}},c.a.createElement("option",{value:"word"},"word memory"),c.a.createElement("option",{value:"number"},"number memory"),c.a.createElement("option",{value:"reaction"},"reaction time")),c.a.createElement(o,{score:w.score,percent:w.percent,gameName:m}),c.a.createElement(l.a,{scores:p}))})},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(114);t.default=Object(n.memo)(function(e){var t=e.user;return r.a.createElement("div",{id:"guestStatsView",className:"statsView"},r.a.createElement("div",{className:"welcomeUser centerAll textUpper"},r.a.createElement("h2",null,"WELCOME ",t.name)),r.a.createElement(c.a,{user:t}))})},75:function(e,t,a){"use strict";var n=a(9),r=a(0),c=a.n(r),s=a(98),o=function(e){var t=e.data,a=e.width;return c.a.createElement(s.b,{width:a||500,height:300,data:t},c.a.createElement(s.a,{type:"monotone",dataKey:"percent",stroke:"#8884d8"}),c.a.createElement(s.c,{stroke:"#ccc"}),c.a.createElement(s.e,{dataKey:"score"}),c.a.createElement(s.f,null),c.a.createElement(s.d,null))};t.a=function(e){var t=e.scores,a=Object(r.useState)(null),s=Object(n.a)(a,2),l=s[0],m=s[1],u=Object(r.useRef)();return Object(r.useLayoutEffect)(function(){var e=function(){return m(u.current.clientWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),c.a.createElement("div",{ref:u,id:"dashboardChart",className:"statsWrapperOuter"},c.a.createElement("div",{className:"statsWrapperInner"},l&&c.a.createElement(o,{data:t,width:l})))}}}]);
//# sourceMappingURL=4.d4e4dccc.chunk.js.map