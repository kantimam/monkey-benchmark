(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},168:function(e,t,a){e.exports=a.p+"static/media/brainLogo.8e02dfbf.svg"},198:function(e,t,a){e.exports=a(421)},203:function(e,t,a){},205:function(e,t,a){},225:function(e,t,a){},232:function(e,t,a){},408:function(e,t,a){},411:function(e,t,a){},413:function(e,t,a){},416:function(e,t,a){},418:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(62),s=a.n(o),c=(a(203),a(28)),i=Object(n.createContext)(),l=function(e){var t=e.reducer,a=e.initialState,o=e.children;return r.a.createElement(i.Provider,{value:Object(n.useReducer)(t,a)},o)},m=function(){return Object(n.useContext)(i)},u=a(8),d=a(19),h=(a(205),a(14)),p=a(15),g=a(17),f=a(16),E=a(18),v=(a(68),function(e){return r.a.createElement("div",{className:"fullWidthFlex"},r.a.createElement("div",{id:"maxLivesDiv",className:"halfWidth"},e.lifes," : LIVES"),r.a.createElement("div",{className:"verticalLine"}),r.a.createElement("div",{id:"maxScoreDiv",className:"halfWidth"},"SCORE : ",e.score))}),b=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).animationClass="",a.state={playAnimation:!0},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"displayContainer"},this.props.roundOne&&r.a.createElement("h1",{className:"wordEnter"},this.props.word),this.props.roundOne&&r.a.createElement("h1",{className:"wordLeave"},this.props.prevWord),this.props.roundTwo&&r.a.createElement("h1",{className:"wordEnter"},this.props.word),this.props.roundTwo&&r.a.createElement("h1",{className:"wordLeave"},this.props.prevWord),r.a.createElement("div",{className:"fullWidthBlock"},this.props.displayButton&&r.a.createElement("div",{onClick:function(t){return e.props.getNewWord(t,Math.round(Math.random()))},className:"roundedDiv fadeInAnimation centerText"},r.a.createElement("i",{class:"fas fa-plus"}))))}}]),t}(n.Component),N=a(11),w=a.n(N),S=a(7),O=(a(225),function(e){e.currentPath;var t=Object(d.g)().pathname;return r.a.createElement(S.b,{className:"textCenter undecoratedLink logInLink",to:"/"===t?"/account/login":"".concat(t,"/account/login")},"log in to publish your performance")}),y=(a(108),function(e){var t=e.gameName,a=e.gameScore,o=e.unit,s=e.currentPath,c=e.restart,i=m(),l=Object(u.a)(i,2),d=l[0],h=d.user,p=d.loggedIn,g=l[1],f=Object(n.useState)(0),E=Object(u.a)(f,2),v=E[0],b=E[1],N=function(){return!!h&&(!h.scores[t]||("reaction"===t?h.scores[t]>a:h.scores[t]<a))},S=h.scores&&h.scores[t]?h.scores[t]:0;return r.a.createElement("div",{className:"saveScore"},v?r.a.createElement("h1",{className:"fadeIn saveScoreAnim3"},v>1?"SUCESFULLY SEND YOUR SCORE":"SOMETHING WENT WRONG"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"fadeIn saveScoreAnim1"},"score: "+a,o),r.a.createElement("h1",{style:{marginBottom:"1.4rem"},className:"fadeIn saveScoreAnim2"},"your current high score: ",S,o),N()&&r.a.createElement("button",{className:"fadeIn saveScoreAnim3 mainButton hoverPush",onClick:p?function(e){if(e.preventDefault(),N()){var n=new FormData;n.set("game",t),n.set("score",a),w.a.post("".concat("api","/setscore"),n,{withCredentials:!0}).then(function(e){g({type:"setScore",target:t,payload:a}),b(2)}).catch(function(e){b(1)})}else console.log("your current score is higher")}:function(e){e.preventDefault(),g({type:"setScore",target:t,payload:a}),b(2)}},"SEND")),r.a.createElement("button",{onClick:c,style:{marginTop:"2rem"},className:"mainButton hoverPush fadeIn saveScoreAnim4"},"TRY AGAIN"),!p&&r.a.createElement(O,{currentPath:s}))}),C=(a(232),a(37)),j=function(e){var t=e.data,a=e.width;return r.a.createElement(C.b,{width:a||500,height:300,data:t},r.a.createElement(C.a,{type:"monotone",dataKey:"percent",stroke:"#8884d8"}),r.a.createElement(C.c,{stroke:"#ccc"}),r.a.createElement(C.e,{dataKey:"score"}),r.a.createElement(C.f,null),r.a.createElement(C.d,null))},k=function(e){var t=e.scores,a=Object(n.useState)(null),o=Object(u.a)(a,2),s=o[0],c=o[1],i=Object(n.useRef)();return Object(n.useLayoutEffect)(function(){var e=function(){return c(i.current.clientWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),r.a.createElement("div",{ref:i,id:"dashboardChart",className:"statsWrapperOuter"},r.a.createElement("div",{className:"statsWrapperInner"},s&&r.a.createElement(j,{data:t,width:s})))},W=function(e){var t=e.header,a=e.text,o=e.gameName,s=Object(n.useState)([]),c=Object(u.a)(s,2),i=c[0],l=c[1];return Object(n.useEffect)(function(){w.a.get("".concat("api","/getstats/").concat(o)).then(function(e){var t=[];for(var a in e.data)t.push({score:a,percent:e.data[a]});l(t)})},[]),r.a.createElement("div",{id:"descriptionBox",className:"inner margin0Auto"},r.a.createElement("section",{id:"descStatsSection"},r.a.createElement("h1",null,"STATS"),r.a.createElement(k,{scores:i})),r.a.createElement("section",{id:"descInfoSection"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a)))},I="http://localhost:5000",A=["friendship","hell"],L=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).wordFromAPI=function(){var e=a.state.currentWord;w.a.get("".concat(I,"/randomword")).then(function(t){return a.setState({prevWord:e,currentWord:t.data}),t.data}).catch(function(e){console.log(e)})},a.newWord=function(e){var t=a.state.currentWord;a.currentMode=e,1===e?a.wordFromAPI():a.setState({prevWord:t,currentWord:a.seenWords[Math.floor(Math.random()*a.seenWords.length)]})},a.seenNew=function(e){1===parseInt(e.target.value)&&!a.seenWords.includes(a.state.currentWord)||0===parseInt(e.target.value)&&a.seenWords.includes(a.state.currentWord)?a.setState({score:a.state.score+a.scoreValue,animated:!a.state.animated}):a.state.lifes>0?a.setState({lifes:a.state.lifes-1,animated:!a.state.animated}):a.setState({gameOver:!0}),a.wordHistory.push(a.state.currentWord),a.seenWords.includes(a.state.currentWord)||a.seenWords.push(a.state.currentWord),a.newWord(Math.round(Math.random()))},a.restartGame=function(){a.seenWords=[],a.currentMode=1,a.setState({gameOver:!1,lifes:5,score:0})},a.seenWords=[],a.wordHistory=[],a.currentMode=1,a.scoreValue=1,a.state={currentWord:A[Math.floor(Math.random()*A.length)],prevWord:"",response:"",lifes:5,score:0,animated:!0,gameOver:!1,getNewWord:!1},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"wordGameContainer",className:"fullContainer inner gradientBackground noUserSelect flexColumnCenter"},this.state.gameOver?r.a.createElement(y,{currentPath:this.props.location.pathname,gameName:"word",gameScore:this.state.score,restart:this.restartGame}):r.a.createElement("div",null,r.a.createElement(v,{score:this.state.score,lifes:this.state.lifes}),r.a.createElement(b,{roundOne:this.state.animated,roundTwo:!this.state.animated,word:this.state.currentWord,prevWord:this.state.prevWord,displayButton:!1,getNewWord:this.newWord}),r.a.createElement("div",{id:"gameButtonContainer"},r.a.createElement("button",{onClick:this.seenNew,value:1,className:"mainButton hoverPush"},"NEW"),r.a.createElement("button",{onClick:this.seenNew,value:0,className:"mainButton hoverPush"},"SEEN")))),r.a.createElement(W,{gameName:"word",header:"word memory game",text:"a game to test your word memory"}))}}]),t}(n.Component),T=(a(408),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).changeColor=function(e){a.setState({message:"click when the color changes to green",gameState:0,resetWait:!1,playing:!0});var t=e[0]||0,n=e[1]||5,r=1e3*(Math.random()*(n-t)+t);a.timeOutRef=setTimeout(function(){0===a.state.gameState&&a.setState({gameState:1},function(){return a.startTime=Date.now()})},r)},a.checkReaction=function(){if(a.state.resetWait)a.changeColor([2,6]);else if(1===a.state.gameState){var e=Date.now()-a.startTime;a.setState({resetWait:!0,reactionTime:e,message:"good job! your time is: ".concat(e," ms"),playing:!1})}else 0===a.state.gameState&&a.setState({resetWait:!0,message:"you clicked to early try again! :)",gameState:2})},a.colors=["lightblue","green","red"],a.startTime=0,a.timeOutRef=0,a.state={message:"click when the color changes to green",gameState:0,resetWait:!1,playing:!0,reactionTime:0},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.changeColor([2,6])}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOutRef)}},{key:"render",value:function(){var e=this,t=this.state,a=t.message,n=t.gameState,o=t.playing,s=t.reactionTime;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("div",{onClick:this.checkReaction,style:{backgroundColor:this.colors[n]},className:"clickFastComp centerAll"},r.a.createElement("h1",null,a)):r.a.createElement("div",{style:{backgroundColor:this.colors[n]},className:"clickFastComp centerAll"},r.a.createElement(y,{restart:function(){return e.changeColor([2,6])},currentPath:this.props.location.pathname,gameName:"reaction",gameScore:s,unit:"ms"})),r.a.createElement(W,{header:"",text:"",gameName:"reaction"}))}}]),t}(n.Component)),x=(a(155),a(411),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).updateProgress=function(){if(a._isMounted){if(a.state.progress>100)return clearInterval(a.progressInterval),a.props.finished();a.setState({progress:(Date.now()-a.startTime)/(10*a.props.time)})}},a.progressInterval=0,a._isMounted=!1,a.startTime=0,a.state={progress:0},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.startTime=Date.now(),this.progressInterval=setInterval(this.updateProgress,.06)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,clearInterval(this.progressInterval)}},{key:"render",value:function(){return r.a.createElement("div",{style:{maxWidth:this.props.maxWidth+"rem"},id:"progressBarCont"},r.a.createElement("div",{id:"progressWrap"},r.a.createElement("div",{style:{width:this.state.progress+"%"}})))}}]),t}(n.Component)),D=function(e){var t=e.onSubmit,a=e.onChange,n=e.inputVal;return r.a.createElement("form",{className:"margin0Auto",onSubmit:t},r.a.createElement("input",{className:"numInput",value:n,onChange:a,type:"number"}),r.a.createElement("input",{id:"numSubmit",className:"mainButton hoverPush",type:"submit",value:"SEND"}))},R=function(e){var t=e.number,a=e.numberEntered,n=e.lifes,o=e.nextRound,s=e.saveScore;return r.a.createElement("div",{className:"saveScore"},r.a.createElement("h1",{className:"fadeIn saveScoreAnim1 realNumber"},t),r.a.createElement("h2",{style:t===a?{textDecorationLine:"none"}:{textDecorationLine:"line-through"},className:"fadeIn saveScoreAnim2 inputNumber"},a),r.a.createElement("button",{onClick:function(){return n?o():s()},style:{marginTop:"2rem"},className:"mainButton hoverPush"},"NEXT"))},M=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){a._isMounted=!0,a.startRound()},a.componentWillUnmount=function(){a._isMounted=!1,clearInterval(a.numTimeOut)},a.startRound=function(){if(!a.state.showNum){for(var e=[],t=0;t<a.currentRound;t++)e.push(Math.ceil(9*Math.random()));var n=e.join("");a._isMounted&&a.setState({number:n,showNum:1,numberEntered:""}),a.currentRound++}},a.resetGame=function(){a.currentRound=1,a._isMounted&&a.setState({roundOver:!1,saveScore:!1,number:"",showNum:0,numberEntered:"",lifes:1,score:0},function(){a.startRound()})},a.showNum=function(e){a.numTimeOut=setTimeout(function(){a._isMounted&&a.setState({showNum:0})},e)},a.enterNumber=function(e){e.preventDefault(),a.state.numberEntered!==a.state.number?a.setState({lifes:a.state.lifes-1,showNum:0,roundOver:{number:a.state.number,numberEntered:a.state.numberEntered}}):a.setState({score:a.state.score+1,showNum:0,roundOver:{number:a.state.number,numberEntered:a.state.numberEntered}}),a.startRound()},a.displayLifes=function(){for(var e=[],t=0;t<a.state.lifes;t++)e.push(r.a.createElement("i",{key:"life".concat(t),className:"fas fa-heart marginRight"}));return e},a.currentRound=1,a.numTimeOut=null,a._isMounted=!1,a.state={number:"",showNum:0,numberEntered:"",lifes:1,score:0,roundOver:!1,saveScore:!1},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return this.state.saveScore?r.a.createElement(y,{currentPath:this.props.location.pathname,gameName:"number",gameScore:this.state.score,restart:this.resetGame}):r.a.createElement("div",{id:"numGameDisp"},r.a.createElement("div",{className:"wordGameUi"},r.a.createElement("div",null,this.displayLifes()),r.a.createElement("div",null,"SCORE: ",this.state.score)),this.state.roundOver?r.a.createElement(R,{number:this.state.roundOver.number,numberEntered:this.state.roundOver.numberEntered,lifes:this.state.lifes,nextRound:function(){return e.setState({roundOver:!1})},saveScore:function(){return e.setState({saveScore:!0})}}):this.state.showNum?r.a.createElement("div",null,r.a.createElement("h1",{className:"wordEnter"},this.state.number),r.a.createElement(x,{finished:function(){return e.setState({showNum:0})},maxWidth:10,time:4})):r.a.createElement(D,{onChange:function(t){return e.setState({numberEntered:t.target.value})},inputVal:this.state.numberEntered,onSubmit:this.enterNumber}))}}]),t}(n.Component),G=function(e){var t=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"numGameContainer",className:"inner gradientBackground noUserSelect margin0Auto"},r.a.createElement(M,{location:t})),r.a.createElement(W,{header:"",text:"",gameName:"number"}))},B=(a(413),function(){return r.a.createElement("div",{className:"gamesContainer"},r.a.createElement("main",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/games/wordgame",component:L}),r.a.createElement(d.a,{path:"/games/numbergame",component:G}),r.a.createElement(d.a,{path:"/games/reactiongame",component:T}))))}),P=function(e){e.hover,e.iconClass;return r.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",flexWrap:"wrap"}},r.a.createElement("i",{style:{margin:"0 auto",fontSize:"6rem"},className:"hoverPushAnimation "+e.iconSrc}),e.descText&&r.a.createElement("p",{style:{display:"block",textAlign:"center",width:"100%",margin:"0"}},e.descText))},U=(a(156),function(e){var t=e.children;return r.a.createElement("div",{className:"fullPageContainer gradientBackground"},t,r.a.createElement("div",{id:"GameOverview",className:"fullContainer maxWidth60"},r.a.createElement("div",{className:"fourPartGrid"},r.a.createElement(S.b,{className:"boxLink undecoratedLink",to:"./games/wordgame"},r.a.createElement(P,{hover:!0,iconSrc:"fas fa-language",descText:"WORD GAME"})),r.a.createElement(S.b,{className:"boxLink undecoratedLink",to:"./games/reactiongame"},r.a.createElement(P,{hover:!0,iconSrc:"fas fa-language",descText:"CLICK FAST"})),r.a.createElement(S.b,{className:"boxLink undecoratedLink",to:"./games/numbergame"},r.a.createElement(P,{hover:!0,iconSrc:"fas fa-sort-numeric-up",descText:"NUMBER GAME"})),r.a.createElement(S.b,{className:"boxLink undecoratedLink",to:"./games/wordgame"},r.a.createElement("p",null,"COMING SOON")))))}),F=function(e){var t=e.gameName,a=e.score,n=e.percent,o={word:{name:"Word Memory",unit:"words",path:"wordgame"},number:{name:"number memory",unit:"digits",path:"reactiongame"},reaction:{name:"Reaction Time",unit:"ms",path:"numbergame"}};return r.a.createElement("div",{className:"topScore textCenter card"},r.a.createElement("h3",{className:"statsHeader"},o[t].name),r.a.createElement("div",null,r.a.createElement("h1",null,a||"NO SCORE"),r.a.createElement("p",null,o[t].unit),r.a.createElement("p",null,"Top ",r.a.createElement("strong",null,n||"? ","%"))),r.a.createElement(S.b,{className:"mainButton undecoratedLink",to:"/games/".concat(o[t].path)},"PLAY"))},V=Object(n.memo)(function(e){var t=e.user,a=Object(n.useState)("word"),o=Object(u.a)(a,2),s=o[0],c=o[1],i=Object(n.useState)([]),l=Object(u.a)(i,2),m=l[0],d=l[1],h=Object(n.useState)({score:0,percent:0}),p=Object(u.a)(h,2),g=p[0],f=p[1];return Object(n.useEffect)(function(){w.a.get("".concat("api","/getstats/").concat(s),{withCredentials:!0}).then(function(e){var a=[],n=t&&t.scores[s]?t.scores[s]:0,r=n?e.data[n]:null;for(var o in f({score:n,percent:r}),e.data)a.push({score:o,percent:e.data[o]});d(a)}).catch(function(e){return console.log("looks like the server is offline")})},[s]),r.a.createElement("div",{className:"userStatsWrapper"},r.a.createElement("select",{onChange:function(e){return c(e.target.value)}},r.a.createElement("option",{value:"word"},"word memory"),r.a.createElement("option",{value:"number"},"number memory"),r.a.createElement("option",{value:"reaction"},"reaction time")),r.a.createElement(F,{score:g.score,percent:g.percent,gameName:s}),r.a.createElement(k,{scores:m}))}),_=Object(n.memo)(function(e){var t=e.user;return r.a.createElement("div",{id:"guestStatsView",className:"statsView"},r.a.createElement("div",{className:"welcomeUser centerAll textUpper"},r.a.createElement("h2",null,"WELCOME ",t.name)),r.a.createElement(V,{user:t}))}),q=function(){var e=Object(d.g)().pathname,t=m(),a=Object(u.a)(t,2),n=a[0],o=n.user,s=n.loggedIn,c=a[1];return r.a.createElement("div",{className:"centerAll userInfo"},s?r.a.createElement("div",{className:"somePadding undecoratedLink centerAll"},r.a.createElement("p",{onClick:function(){w()("".concat("api","/logout")).then(function(e){return c({type:"logOut"})}).catch(function(e){console.log(e),c({type:"logOut"})})},style:{margin:"0 1rem"}},"LOG OUT"),"welcome ",o.name):r.a.createElement(S.b,{className:"somePadding undecoratedLink",to:"/"===e?"/account/login":"".concat(e,"/account/login")},"LOG IN"))},Y=function(){return r.a.createElement("nav",{className:"topNav"},r.a.createElement("ul",{className:"navList"},r.a.createElement(S.b,{className:"somePadding undecoratedLink",to:"/"},"HOME"),r.a.createElement(S.b,{className:"somePadding undecoratedLink",to:"/dashboard"},"DASHBOARD"),r.a.createElement(q,null)))},H=(a(416),n.Component,a(418),function(e){var t=e.close,a=e.customStyle;return r.a.createElement("div",{className:"centerAll pointer closeButton",style:a,onClick:t},r.a.createElement("i",{className:"fas fa-times noMargin"}))}),J=function(e){var t=e.children,a=e.close;return r.a.createElement("div",{style:{position:"absolute",top:"5rem",width:"100%",display:"flex",zIndex:4}},r.a.createElement("div",{style:{margin:"0 auto",position:"relative",maxWidth:"90%"}},r.a.createElement(H,{close:a,customStyle:{position:"absolute",right:"-1rem",top:"-1rem"}}),t))},K=a(63),z=(a(157),function(e){var t=e.onChange,a=e.onSubmit,n=e.confirm,o=Object(d.f)().push;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a,className:"logInForm"},r.a.createElement("h3",null,n||"LOG IN"),r.a.createElement("input",{onChange:t,name:"email",placeholder:"email or username",type:"email",minLength:"2",required:!0}),r.a.createElement("input",{onChange:t,name:"password",placeholder:"password",type:"password",minLength:"6",required:!0}),r.a.createElement("div",{onClick:function(){return o("resetpassword")},className:"resetPassword pointer"},"reset password"),r.a.createElement("input",{className:"submitButton",type:"submit"})),r.a.createElement("div",{className:"logSignSwitch",onClick:function(){return o("signup")}},"NO ACCOUNT? ",r.a.createElement("strong",{className:"customLink"},"SIGN UP")))}),X=function(e){var t=e.onChange,a=e.onSubmit,n=(e.logIn,Object(d.f)().push);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a,className:"logInForm"},r.a.createElement("h3",null,"SIGN UP"),r.a.createElement("input",{onChange:t,name:"userName",placeholder:"username",type:"text",minLength:"2",required:!0}),r.a.createElement("input",{onChange:t,name:"email",placeholder:"email",type:"email",minLength:"2",required:!0}),r.a.createElement("input",{onChange:t,name:"password",placeholder:"password",type:"password",minLength:"6",required:!0}),r.a.createElement("input",{onChange:t,name:"passwordRe",placeholder:"repeat password",type:"password",minLength:"6",required:!0}),r.a.createElement("input",{className:"submitButton",type:"submit"})),r.a.createElement("div",{className:"logSignSwitch",onClick:function(){return n("login")}},"ALREADY HAVE AN ACCOUNT? ",r.a.createElement("strong",{className:"customLink"},"LOG IN!")))},$=function(e){var t=e.sendAgain,a=e.confirm;return r.a.createElement("div",{className:"logSignContainer confirmMail gradientBackground"},r.a.createElement("h3",null,a.message),r.a.createElement("div",{className:"sendAgain"},"nothing received?",a.sent?r.a.createElement("div",{id:"sendAgainButton",className:"submitButton"},a.sent):r.a.createElement("div",{onClick:t,id:"sendAgainButton",className:"submitButton"},"SEND AGAIN")))},Q=function(e){var t=e.onChange,a=e.onSubmit,n=e.confirm;return r.a.createElement("form",{onSubmit:a,className:"logInForm"},r.a.createElement("h3",null,n||"SEND RESET LINK TO"),r.a.createElement("input",{onChange:t,name:"email",placeholder:"email or username",type:"email",minLength:"2",required:!0}),r.a.createElement("input",{className:"submitButton",type:"submit",value:"SEND"}))},Z=function(e){var t=e.onSubmit,a=e.onChange,n=Object(d.h)().params;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n.key,n.email)},className:"logInForm"},r.a.createElement("h3",null,"CREATE NEW PASSWORD"),r.a.createElement("input",{onChange:a,name:"password",placeholder:"password",type:"password",minLength:"6",required:!0}),r.a.createElement("input",{onChange:a,name:"passwordRe",placeholder:"repeat password",type:"password",minLength:"6",required:!0}),r.a.createElement("input",{className:"submitButton",type:"submit"}))},ee=function(e){var t=e.close,a=Object(d.f)().push,o=Object(n.useState)({userName:"",password:"",passwordRe:"",email:""}),s=Object(u.a)(o,2),i=s[0],l=s[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),g=p[0],f=p[1],E=Object(n.useState)({message:""}),v=Object(u.a)(E,2),b=v[0],N=v[1],S=m(),O=Object(u.a)(S,2)[1],y=Object(n.useState)(""),C=Object(u.a)(y,2),j=C[0],k=C[1],W=function(e){var t=Object(c.a)({},i,Object(K.a)({},e.target.name,e.target.value));l(t)},I=function(e){if(e.preventDefault(),i.password===i.passwordRe){var t=new FormData;t.set("userName",i.userName),t.set("email",i.email),t.set("password",i.password),w.a.post("".concat("api","/signup"),t).then(function(e){f(!0),N(e.data)}).catch(function(e){k("something went wrong"),setTimeout(function(){return k("")},4e3)})}else k("please check your password"),setTimeout(function(){return k("")},4e3)},A=function(e){if(e.preventDefault(),i.email.length>2&&i.password.length>5){var a=new FormData;a.set("email",i.email),a.set("password",i.password),w.a.post("".concat("api","/login"),a,{withCredentials:!0}).then(function(e){e.data.user&&(O({type:"logIn",payload:e.data.user}),t())}).catch(function(e){e.response&&403===e.response.status?(f(!0),N(e.response.data)):(k("wrong email or password"),setTimeout(function(){return k("")},4e3))})}},L=function(e){e.preventDefault();var t=new FormData;t.set("email",i.email),w.a.post("".concat("api","/resetpassword"),t,{withCredentials:!0}).then(function(e){N({message:"succesfully sent"}),setTimeout(function(){return N({message:""})},1e4)}).catch(function(e){k("email not found"),setTimeout(function(){return k("")},4e3)})},T=function(e,t){if(e&&t&&i.password&&i.password===i.passwordRe){var n=new FormData;n.set("password",i.password),n.set("key",e),n.set("email",t),w.a.post("".concat("api","/createnewpassword"),n).then(function(e){N({message:"SUCCESFULLY CREATED"}),setTimeout(function(){return N({message:""})},5e3),a("login")}).catch(function(e){k("failed"),setTimeout(function(){return k("")},4e3)})}};return g?r.a.createElement($,{sendAgain:function(e,t){e.preventDefault(),w.a.get("".concat("api","/").concat(t)).then(function(e){N(Object(c.a)({},b,{sent:"WAS SENT"})),setTimeout(function(){var e=b.message,t=b.sendAgainPath;N({message:e,sendAgainPath:t})},3e3)}).catch(function(e){N(Object(c.a)({},b,{sent:"FAILED"})),setTimeout(function(){var e=b.message,t=b.sendAgainPath;N({message:e,sendAgainPath:t})},3e3)})},confirm:b}):r.a.createElement("div",{className:"logSignContainer gradientBackground ".concat(j?"animationShake":"")},j&&r.a.createElement("p",{className:"errorMessage"},j),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"*/login",render:function(){return r.a.createElement(z,{onSubmit:A,onChange:W,confirm:b.message})}}),r.a.createElement(d.a,{path:"*/signup",render:function(){return r.a.createElement(X,{onSubmit:I,onChange:W})}}),r.a.createElement(d.a,{path:"*/resetpassword",render:function(){return r.a.createElement(Q,{onSubmit:L,onChange:W,confirm:b.message})}}),r.a.createElement(d.a,{path:"*/createnewpassword/:key/:email",render:function(){return r.a.createElement(Z,{onChange:W,onSubmit:T})}})))},te=Object(n.memo)(function(){return r.a.createElement("div",{id:"guestStatsView",className:"statsView"},r.a.createElement("div",{className:"welcomeUser centerAll textUpper"},r.a.createElement("h2",null,"WELCOME GUEST")),r.a.createElement(V,{loggedIn:!1}))}),ae=function(e){var t=e.loggedIn,a=e.user;return r.a.createElement("div",{className:"maxWidth60 mainScreen"},t?r.a.createElement(_,{user:a}):r.a.createElement(te,null))},ne=a(168),re=a.n(ne),oe=function(){return r.a.createElement("div",{id:"welcomeBanner",className:"centerAll"},r.a.createElement("div",{className:"callToAction"},r.a.createElement("div",{className:"centerAll logo"},r.a.createElement("img",{src:re.a,alt:"brain logo"})),r.a.createElement("h1",null,"ARE YOU A GOOD MONKEY?!"),r.a.createElement(S.b,{id:"enterButton",className:"mainButton",to:"/dashboard"},"ENTER")))},se=function(){var e=m(),t=Object(u.a)(e,2),a=t[0],o=a.user,s=a.loggedIn,c=t[1];Object(n.useEffect)(function(){var e=localStorage.getItem("monkeyGameSession");if(e&&"{}"!==e)c({type:"logIn",payload:JSON.parse(e)});else{var t=localStorage.getItem("monkeyGameGuestSession");c(t&&"{}"!==t?{type:"createGuest",payload:JSON.parse(t)}:{type:"createGuest",payload:{type:"guest",name:"Guest",email:null,scores:{word:0,react:0,number:0}}})}},[]);var i=function(e){e.preventDefault(),o&&(s&&o.email?localStorage.setItem("monkeyGameSession",JSON.stringify(o)):localStorage.setItem("monkeyGameGuestSession",JSON.stringify(o)))};Object(n.useEffect)(function(){return window.addEventListener("beforeunload",i),function(){window.removeEventListener("beforeunload",i)}},[o]);var l=function(e){var t=e.location.pathname.split("/account");e.push(t[0]||"/")};return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{component:Y}),!1,r.a.createElement(d.a,{path:"*/account",render:function(e){var t=e.history;return e.match,r.a.createElement(J,{close:function(){return l(t)}},r.a.createElement(ee,{history:t,close:function(){return l(t)}}))}}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/user:id",component:_}),r.a.createElement(d.a,{path:"/games",component:B}),r.a.createElement(d.a,{path:"/dashboard",render:function(){return r.a.createElement(ae,{loggedIn:s,user:o})}}),r.a.createElement(d.a,{path:"/welcome",render:function(){return r.a.createElement(U,null,r.a.createElement(oe,null))}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(U,null,r.a.createElement(oe,null))}})))},ce=function(){return r.a.createElement(l,{initialState:{loggedIn:!1,guestUser:!1,user:{}},reducer:function(e,t){switch(t.type){case"logIn":return Object(c.a)({},e,{user:t.payload,loggedIn:!0,guestUser:!1});case"logOut":return localStorage.removeItem("monkeyGameSession"),Object(c.a)({},e,{user:{},loggedIn:!1});case"createGuest":return Object(c.a)({},e,{user:t.payload,loggedIn:!1,guestUser:!0});case"setScore":var a=Object(c.a)({},e);return a.user.scores[t.target]=t.payload,a;default:return e}}},r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S.a,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){}},[[198,2,1]]]);
//# sourceMappingURL=main.2eea9855.chunk.js.map