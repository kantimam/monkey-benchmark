(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,n){"use strict";var r=n(4),a=n(0),o=n.n(a),s=n(9),u=n.n(s),c=n(78);t.a=function(e){var t=e.header,n=e.text,s=e.gameName,i=Object(a.useState)([]),m=Object(r.a)(i,2),l=m[0],f=m[1];return Object(a.useEffect)(function(){u.a.get("".concat("/api","/getstats/").concat(s)).then(function(e){var t=[];for(var n in e.data)t.push({score:n,percent:e.data[n]});f(t)})},[]),o.a.createElement("div",{id:"descriptionBox",className:"inner margin0Auto"},o.a.createElement("section",{id:"descStatsSection"},o.a.createElement("h1",null,"STATS"),o.a.createElement(c.a,{scores:l})),o.a.createElement("section",{id:"descInfoSection"},o.a.createElement("h1",null,t),o.a.createElement("p",null,n)))}},102:function(e,t,n){"use strict";var r=n(4),a=n(0),o=n.n(a),s=n(10),u=n(9),c=n.n(u),i=n(13),m=n(2),l=(n(97),function(e){e.currentPath;var t=Object(i.g)().pathname;return o.a.createElement(m.b,{className:"textCenter undecoratedLink logInLink",to:"/"===t?"/account/login":"".concat(t,"/account/login")},"log in to publish your performance")});n(93),t.a=function(e){var t=e.gameName,n=e.gameScore,u=e.unit,i=e.currentPath,m=e.restart,f=Object(s.b)(),d=Object(r.a)(f,2),h=d[0],p=h.user,b=h.loggedIn,v=d[1],E=Object(a.useState)(0),y=Object(r.a)(E,2),S=y[0],g=y[1],O=function(){return!!p&&(!p.scores[t]||("reaction"===t?p.scores[t]>n:p.scores[t]<n))},N=p.scores&&p.scores[t]?p.scores[t]:0;return o.a.createElement("div",{className:"saveScore textCenter"},S?o.a.createElement("h1",{className:"fadeIn saveScoreAnim3"},S>1?"SUCESFULLY SEND YOUR SCORE":"SOMETHING WENT WRONG"):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"fadeIn saveScoreAnim1"},"score: "+n,u),o.a.createElement("h1",{style:{marginBottom:"1.4rem"},className:"fadeIn saveScoreAnim2"},"your current high score: ",N,u),O()&&o.a.createElement("button",{className:"fadeIn saveScoreAnim3 mainButton hoverPush",onClick:b?function(e){if(e.preventDefault(),O()){var r=new FormData;r.set("game",t),r.set("score",n),c.a.post("".concat("/api","/setscore"),r,{withCredentials:!0}).then(function(e){v({type:"setScore",target:t,payload:n}),g(2)}).catch(function(e){g(1)})}else console.log("your current score is higher")}:function(e){e.preventDefault(),v({type:"setScore",target:t,payload:n}),g(2)}},"SEND")),o.a.createElement("button",{onClick:m,style:{marginTop:"2rem"},className:"mainButton hoverPush fadeIn saveScoreAnim4"},"TRY AGAIN"),!b&&o.a.createElement(l,{currentPath:i}))}},115:function(e,t,n){},201:function(e,t,n){},426:function(e,t,n){},429:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(83),s=n(84),u=n(86),c=n(85),i=n(87),m=(n(115),n(201),n(426),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).updateProgress=function(){if(n._isMounted){if(n.state.progress>100)return clearInterval(n.progressInterval),n.props.finished();n.setState({progress:(Date.now()-n.startTime)/(10*n.props.time)})}},n.progressInterval=0,n._isMounted=!1,n.startTime=0,n.state={progress:0},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.startTime=Date.now(),this.progressInterval=setInterval(this.updateProgress,.06)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,clearInterval(this.progressInterval)}},{key:"render",value:function(){return a.a.createElement("div",{style:{maxWidth:this.props.maxWidth+"rem"},id:"progressBarCont"},a.a.createElement("div",{id:"progressWrap"},a.a.createElement("div",{style:{width:this.state.progress+"%"}})))}}]),t}(r.Component)),l=n(102),f=function(e){var t=e.onSubmit,n=e.onChange,r=e.inputVal;return a.a.createElement("form",{className:"margin0Auto",onSubmit:t},a.a.createElement("input",{className:"numInput",value:r,onChange:n,type:"number"}),a.a.createElement("input",{id:"numSubmit",className:"mainButton hoverPush",type:"submit",value:"SEND"}))},d=(n(93),function(e){var t=e.number,n=e.numberEntered,r=e.lifes,o=e.nextRound,s=e.saveScore;return a.a.createElement("div",{className:"saveScore"},a.a.createElement("h1",{className:"fadeIn saveScoreAnim1 realNumber"},t),a.a.createElement("h2",{style:t===n?{textDecorationLine:"none"}:{textDecorationLine:"line-through"},className:"fadeIn saveScoreAnim2 inputNumber"},n),a.a.createElement("button",{onClick:function(){return r?o():s()},style:{marginTop:"2rem"},className:"mainButton hoverPush"},"NEXT"))}),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).componentDidMount=function(){n._isMounted=!0,n.startRound()},n.componentWillUnmount=function(){n._isMounted=!1,clearInterval(n.numTimeOut)},n.startRound=function(){if(!n.state.showNum){for(var e=[],t=0;t<n.currentRound;t++)e.push(Math.ceil(9*Math.random()));var r=e.join("");n._isMounted&&n.setState({number:r,showNum:1,numberEntered:""}),n.currentRound++}},n.resetGame=function(){n.currentRound=1,n._isMounted&&n.setState({roundOver:!1,saveScore:!1,number:"",showNum:0,numberEntered:"",lifes:1,score:0},function(){n.startRound()})},n.showNum=function(e){n.numTimeOut=setTimeout(function(){n._isMounted&&n.setState({showNum:0})},e)},n.enterNumber=function(e){e.preventDefault(),n.state.numberEntered!==n.state.number?n.setState({lifes:n.state.lifes-1,showNum:0,roundOver:{number:n.state.number,numberEntered:n.state.numberEntered}}):n.setState({score:n.state.score+1,showNum:0,roundOver:{number:n.state.number,numberEntered:n.state.numberEntered}}),n.startRound()},n.displayLifes=function(){for(var e=[],t=0;t<n.state.lifes;t++)e.push(a.a.createElement("i",{key:"life".concat(t),className:"fas fa-heart marginRight"}));return e},n.currentRound=1,n.numTimeOut=null,n._isMounted=!1,n.state={number:"",showNum:0,numberEntered:"",lifes:1,score:0,roundOver:!1,saveScore:!1},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.saveScore?a.a.createElement(l.a,{currentPath:this.props.location.pathname,gameName:"number",gameScore:this.state.score,restart:this.resetGame}):a.a.createElement("div",{id:"numGameDisp"},a.a.createElement("div",{className:"wordGameUi"},a.a.createElement("div",null,this.displayLifes()),a.a.createElement("div",null,"SCORE: ",this.state.score)),this.state.roundOver?a.a.createElement(d,{number:this.state.roundOver.number,numberEntered:this.state.roundOver.numberEntered,lifes:this.state.lifes,nextRound:function(){return e.setState({roundOver:!1})},saveScore:function(){return e.setState({saveScore:!0})}}):this.state.showNum?a.a.createElement("div",null,a.a.createElement("h1",{className:"wordEnter"},this.state.number),a.a.createElement(m,{finished:function(){return e.setState({showNum:0})},maxWidth:10,time:4})):a.a.createElement(f,{onChange:function(t){return e.setState({numberEntered:t.target.value})},inputVal:this.state.numberEntered,onSubmit:this.enterNumber}))}}]),t}(r.Component),p=n(100);t.default=function(e){var t=e.location;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"numGameContainer",className:"inner gradientBackground noUserSelect margin0Auto"},a.a.createElement(h,{location:t})),a.a.createElement(p.a,{header:"",text:"",gameName:"number"}))}},78:function(e,t,n){"use strict";var r=n(4),a=n(0),o=n.n(a),s=n(101),u=function(e){var t=e.data,n=e.width;return o.a.createElement(s.b,{width:n||500,height:300,data:t},o.a.createElement(s.a,{type:"monotone",dataKey:"percent",stroke:"#8884d8"}),o.a.createElement(s.c,{stroke:"#ccc"}),o.a.createElement(s.e,{dataKey:"score"}),o.a.createElement(s.f,null),o.a.createElement(s.d,null))};t.a=function(e){var t=e.scores,n=Object(a.useState)(null),s=Object(r.a)(n,2),c=s[0],i=s[1],m=Object(a.useRef)();return Object(a.useLayoutEffect)(function(){var e=function(){return i(m.current.clientWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),o.a.createElement("div",{ref:m,id:"dashboardChart",className:"statsWrapperOuter"},o.a.createElement("div",{className:"statsWrapperInner"},c&&o.a.createElement(u,{data:t,width:c})))}},83:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},84:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return a})},85:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},86:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function o(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return o})},87:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return a})},93:function(e,t,n){},97:function(e,t,n){}}]);
//# sourceMappingURL=12.a0f867aa.chunk.js.map