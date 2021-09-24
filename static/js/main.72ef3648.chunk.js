(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{13:function(e,a,t){e.exports={app_Container:"App_app_Container__2NJSL"}},23:function(e,a,t){},3:function(e,a,t){e.exports={board:"Board_board__3FNMR",cards:"Board_cards__ZlLkF",hide:"Board_hide__1Q3y9",results:"Board_results__3vg6K",resultsTimes:"Board_resultsTimes__20iYC",resetResultsButton:"Board_resetResultsButton__3iG-a",noResultsCase:"Board_noResultsCase__1J9mq"}},31:function(e,a,t){"use strict";t.r(a);var r=t(9),n=t.n(r),c=(t(23),t(13)),s=t.n(c),i=t(2),d=t(17),o=t(0),u=t(4),l=t.n(u),O=t(1),b=function(e){var a=e.id,t=e.isOpen,r=e.value,n=e.isOnBoard,c=e.isInterfaceBlocked,s=e.isGameStarted,i=e.setCardOpenCallback;return Object(O.jsxs)("button",{disabled:c||!n||!s||t,className:"".concat(l.a.card," ").concat(t&&l.a.active," ").concat(!n&&l.a.hide," ").concat(!s&&l.a.disabled),onClick:function(){return function(e,a){i(e,a)}(a,r)},children:[Object(O.jsx)("div",{className:l.a.front}),Object(O.jsx)("div",{className:l.a.back,children:r})]})},p=Object(o.memo)(b),_=t(5),j=t.n(_),m=function(e){return e<=9?"00:0".concat(e):e>9&&e<60?"00:".concat(e):e>=60?"0".concat(Math.floor(e/60),":").concat(e%60<9?"0"+e%60:e%60):void 0},f=function(e){var a=e.cardsGuessed,t=e.isGameStarted,r=e.timer,n=e.startGameCallback;return Object(O.jsxs)("div",{className:j.a.header,children:[Object(O.jsx)("div",{className:j.a.timer,children:m(r)}),Object(O.jsxs)("div",{className:j.a.counter,children:[a,Object(O.jsx)("span",{children:"/16"})]}),Object(O.jsx)("button",{disabled:t,className:"".concat(j.a.button," ").concat(t&&j.a.hide),onClick:n,children:"Start"})]})},v=Object(o.memo)(f),h=t(3),C=t.n(h),y=t(7),B=t(18),S=function(e){for(var a=e,t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[r];e[r]=e[t],e[t]=n}return a},R="SET_CARD_OPEN",T="SET_LOCAL_TIMER",g="ADD_CARD_TO_OPEN_CARDS",E="CLOSE_ALL_CARDS",x="TOOGLE_BLOCKED_INTERFACE",k="TOOGLE_GAME_STARTED",I="ADD_CARD_TO_GUESSED_CARD",G="SET_TIMER_ID",N="SET_INTERVAL_ID",D="RESET_GAME",A="SET_GAME_TIME",L={timer:0,isInterfaceBlocked:!1,openedCards:[],cardsGuessed:0,isGameStarted:!1,isLocalTimer:!1,timerId:void 0,intervalId:void 0,cards:[{id:1,isOpen:!1,value:"cat",isOnBoard:!0},{id:2,isOpen:!1,value:"cat",isOnBoard:!0},{id:3,isOpen:!1,value:"dog",isOnBoard:!0},{id:4,isOpen:!1,value:"dog",isOnBoard:!0},{id:5,isOpen:!1,value:"fish",isOnBoard:!0},{id:6,isOpen:!1,value:"fish",isOnBoard:!0},{id:7,isOpen:!1,value:"pig",isOnBoard:!0},{id:8,isOpen:!1,value:"pig",isOnBoard:!0},{id:9,isOpen:!1,value:"mouse",isOnBoard:!0},{id:10,isOpen:!1,value:"mouse",isOnBoard:!0},{id:11,isOpen:!1,value:"bird",isOnBoard:!0},{id:12,isOpen:!1,value:"bird",isOnBoard:!0},{id:13,isOpen:!1,value:"snake",isOnBoard:!0},{id:14,isOpen:!1,value:"snake",isOnBoard:!0},{id:15,isOpen:!1,value:"monkey",isOnBoard:!0},{id:16,isOpen:!1,value:"monkey",isOnBoard:!0}]},M=function(e){return{type:T,payload:e}},w=function(){return{type:E}},J=function(e){return{type:x,payload:e}},H=function(e){return{type:k,payload:e}},F=function(e,a){return function(t){t(J(!0)),setTimeout((function(){t(function(e,a){return{type:I,payload:[e,a]}}(e,a)),t(J(!1))}),1e3)}},Y=function(e,a){return function(t,r){t(function(e){return{type:R,payload:e}}(e));var n=r().gameReducer,c=n.openedCards,s=n.isLocalTimer,i=n.cardsGuessed;if(!s){t(M(!0));var d=setTimeout((function(){t(M(!1)),t(w())}),3e3);t(function(e){return{type:G,payload:e}}(d))}1===c.length?(c[0].value===a&&(t(F(c[0].id,e)),14===i&&t((function(e,a){var t=a().gameReducer,r=t.intervalId,n=t.timer;e(H(!1)),clearInterval(r);var c=JSON.parse(localStorage.getItem("scores"))||[];c.push(n),localStorage.setItem("scores",JSON.stringify(c))}))),t((function(e){e(J(!0)),setTimeout((function(){e(w()),e(J(!1))}),1e3)})),t(M(!1)),window.clearTimeout(r().gameReducer.timerId)):t({type:g,payload:{id:e,value:a}})}},K=function(){return function(e,a){e(H(!0)),e({type:D});var t=a().gameReducer.timer,r=setInterval((function(){t++,e({type:A,payload:t})}),1e3);e({type:N,payload:r})}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R:return Object(i.a)(Object(i.a)({},e),{},{cards:e.cards.map((function(e){return e.id===a.payload&&(e.isOpen=!0),e}))});case T:return Object(i.a)(Object(i.a)({},e),{},{isLocalTimer:a.payload});case g:return Object(i.a)(Object(i.a)({},e),{},{openedCards:[].concat(Object(B.a)(e.openedCards),[a.payload])});case E:return Object(i.a)(Object(i.a)({},e),{},{cards:e.cards.map((function(e){return e.isOpen=!1,e})),openedCards:[]});case x:return Object(i.a)(Object(i.a)({},e),{},{isInterfaceBlocked:a.payload});case k:return Object(i.a)(Object(i.a)({},e),{},{isGameStarted:a.payload});case I:return Object(i.a)(Object(i.a)({},e),{},{cardsGuessed:e.cardsGuessed+2,cards:e.cards.map((function(e){return a.payload.some((function(a){return a===e.id}))&&(e.isOnBoard=!1),e}))});case A:return Object(i.a)(Object(i.a)({},e),{},{timer:a.payload});case G:return Object(i.a)(Object(i.a)({},e),{},{timerId:a.payload});case N:return Object(i.a)(Object(i.a)({},e),{},{intervalId:a.payload});case D:return Object(i.a)(Object(i.a)({},e),{},{cardsGuessed:0,timer:0,cards:S(e.cards.map((function(e){return e.isOnBoard=!0,e})))});default:return e}},P=function(){var e=Object(y.c)((function(e){return e.gameReducer})),a=e.cards,t=e.isGameStarted,r=e.cardsGuessed,n=e.timer,c=e.isInterfaceBlocked,s=Object(o.useState)([]),u=Object(d.a)(s,2),l=u[0],b=u[1];Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("scores"))||[];e.sort((function(e,a){return e-a})),b(e.slice(0,10))}),[t]);var _=Object(y.b)(),j=Object(o.useCallback)((function(){_(K())}),[]),f=Object(o.useCallback)((function(e,a){_(Y(e,a))}),[]);return Object(O.jsxs)("div",{className:C.a.board,children:[Object(O.jsx)(v,{cardsGuessed:r,isGameStarted:t,timer:n,startGameCallback:j}),Object(O.jsx)("div",{className:"".concat(C.a.cards," ").concat(!t&&C.a.hide),children:a.map((function(e){return Object(O.jsx)(p,Object(i.a)(Object(i.a)({},e),{},{isInterfaceBlocked:c,isGameStarted:t,setCardOpenCallback:f}),e.id)}))}),Object(O.jsxs)("div",{className:"".concat(C.a.results," ").concat(t&&C.a.hide),children:[Object(O.jsx)("div",{className:C.a.resultsTimes,children:"Best results:"}),0===l.length&&Object(O.jsx)("span",{className:C.a.noResultsCase,children:"You don't have any results yet :("}),l.map((function(e,a){return Object(O.jsxs)("div",{className:C.a.time,children:[a+1+") ",m(e)]},a)})),0!==l.length&&Object(O.jsx)("button",{onClick:function(){localStorage.clear(),b([])},className:C.a.resetResultsButton,children:"Reset results"})]})]})},Q=Object(o.memo)(P),z=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:s.a.app_Container,children:Object(O.jsx)(Q,{})})})},U=t(8),V=t(15),W=t(16),X=Object(U.combineReducers)({gameReducer:q}),Z=Object(U.createStore)(X,Object(V.composeWithDevTools)(Object(U.applyMiddleware)(W.a)));n.a.render(Object(O.jsx)(y.a,{store:Z,children:Object(O.jsx)(z,{})}),document.getElementById("root"))},4:function(e,a,t){e.exports={card:"Card_card__2O5Y1",front:"Card_front__12DC-",back:"Card_back__2owrI",active:"Card_active__3vsQ8",hide:"Card_hide__1b6Kz",disabled:"Card_disabled__2Rq2M"}},5:function(e,a,t){e.exports={header:"Header_header__1CSBk",counter:"Header_counter__34jyD",timer:"Header_timer__3bSY4",button:"Header_button__-nX4t",hide:"Header_hide__2F3ur"}}},[[31,1,2]]]);
//# sourceMappingURL=main.72ef3648.chunk.js.map