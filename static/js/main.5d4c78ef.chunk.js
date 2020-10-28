(this["webpackJsonpbibooking-react"]=this["webpackJsonpbibooking-react"]||[]).push([[0],{62:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),i=n.n(a),o=n(29),c=n.n(o),s=n(23),l=(n(59),n(60),n(61),n(62),n(3)),u=n(4),d=n(6),b=n.n(d),f=n(10),h=n(15),p=n(9),m=n(5),v=n(13),j=n(8),g=function(e){return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().slice(0,10)},O=function(e){return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().slice(11,16)},y=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date;return"".concat(n,"-").concat(t,"-").concat(e)===g(r)},w=function(e,t){return Number(e/t*100).toFixed(2)},x=n(19),k=n(49);function E(){var e=Object(u.a)(["\n  padding: 8rem 10rem;\n  background-color: var(--text);\n  color: var(--white);\n  border: 0;\n  border-radius: 5rem;\n"]);return E=function(){return e},e}function S(){var e=Object(u.a)(["\n  border-bottom: 2rem solid var(--main);\n  outline: none;\n  background-color: var(--white);\n  padding: 0 3rem;\n  width: ",";\n  height: ",";\n"]);return S=function(){return e},e}function C(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  width: ",";\n  height: ",";\n  padding: ",";\n"]);return C=function(){return e},e}var R=m.a.div(C(),(function(e){var t=e.flexDirection;return void 0===t?"row":t}),(function(e){var t=e.justifyContent;return void 0===t?"center":t}),(function(e){var t=e.alignItems;return void 0===t?"center":t}),(function(e){var t=e.width;return t||"auto"}),(function(e){var t=e.height;return t||"auto"}),(function(e){var t=e.padding;return t||"0"})),z=m.a.input(S(),(function(e){var t=e.width;return t||"auto"}),(function(e){var t=e.height;return t||"auto"})),I=Object(m.a)(k.a)(E());function P(){var e=Object(u.a)(["\n  justify-content: flex-start;\n  svg {\n    height: 25rem;\n    margin-right: 10rem;\n  }\n"]);return P=function(){return e},e}function A(){var e=Object(u.a)(["\n  background-color: var(--white);\n  justify-content: space-between;\n  user-select: none;\n  padding: 8rem 20rem;\n  color: var(--text);\n  width: var(--resourceWidth);\n  cursor: pointer;\n  font-weight: 400;\n  border-radius: 6rem;\n  svg {\n    height: 22rem;\n    transition: all 0.3s ease;\n  }\n  :hover svg {\n    transform: scale(1.3);\n  }\n"]);return A=function(){return e},e}function _(){var e=Object(u.a)(["\n  margin-top: 5rem;\n  [data-reach-menu-item] { width: var(--resourceWidth) }\n"]);return _=function(){return e},e}function W(){var e=Object(u.a)(["\n  border-radius: 3rem;\n  border: 0;\n  box-shadow: var(--shadow-2);\n  padding: 5rem 0;\n  [data-reach-menu-item] {\n    padding: 10rem 20rem;\n    transition: all 0.3s ease;\n    :hover {\n      background: var(--main);\n      color: var(--white);\n    }\n  }\n"]);return W=function(){return e},e}function D(){var e=Object(u.a)(["\n  justify-content: flex-end;\n  width: calc(var(--resourceWidth) + var(--lateral-padding));\n"]);return D=function(){return e},e}function M(){var e=Object(u.a)(["\n  height: 100%;\n  font-size: 22rem;\n  line-height: 22rem;\n  button {\n    margin-left: var(--lateral-padding);\n    outline: none;\n  }\n"]);return M=function(){return e},e}function L(){var e=Object(u.a)(["\n  height: var(--header-height);\n  background-color: var(--main);\n  box-shadow: var(--shadow-2);\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 300;\n  padding: 0 var(--lateral-padding);\n  position: sticky;\n  top: 0;\n  button:last-child > svg {\n    height: calc(var(--header-height) * 0.7);\n  }\n"]);return L=function(){return e},e}var q=m.a.header(L()),B=Object(m.a)(R)(M()),N=Object(m.a)(R)(D()),Z=Object(m.a)(x.e)(W()),T=Object(m.a)(Z)(_()),F=Object(m.a)(R)(A()),H=Object(m.a)(R)(P()),V=n(31),U=n.n(V);n(67),n(69);U.a.initializeApp({apiKey:"AIzaSyC4vRrAFqZm8r1plYtPLYJZm2IY2AR9d9w",authDomain:"bibooking.firebaseapp.com",databaseURL:"https://bibooking.firebaseio.com",projectId:"bibooking",storageBucket:"bibooking.appspot.com",messagingSenderId:"48933584913",appId:"1:48933584913:web:bfbd2076ad4118821a31b0"});var Y=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Q.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=16;break}return a=t.email,i=t.displayName,e.prev=8,e.next=11,r.set(Object(l.a)({displayName:i,email:a},n));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",G(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,Q.doc("users/".concat(t)).get();case 5:return n=e.sent,e.abrupt("return",Object(l.a)({uid:t},n.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),J=U.a.auth(),Q=U.a.firestore();function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $=a.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"});function ee(e,t){var n=e.title,r=e.titleId,i=K(e,["title","titleId"]);return a.createElement("svg",X({className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,$)}var te=a.forwardRef(ee);n.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae=a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"});function ie(e,t){var n=e.title,r=e.titleId,i=re(e,["title","titleId"]);return a.createElement("svg",ne({className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ae)}var oe=a.forwardRef(ie);n.p;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var le=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"});function ue(e,t){var n=e.title,r=e.titleId,i=se(e,["title","titleId"]);return a.createElement("svg",ce({className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,le)}var de=a.forwardRef(ue);n.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var he=a.createElement("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"});function pe(e,t){var n=e.title,r=e.titleId,i=fe(e,["title","titleId"]);return a.createElement("svg",be({className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,he)}var me=a.forwardRef(pe);n.p;function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ge=a.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"});function Oe(e,t){var n=e.title,r=e.titleId,i=je(e,["title","titleId"]);return a.createElement("svg",ve({className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ge)}var ye=a.forwardRef(Oe);n.p;function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ke=a.createElement("path",{fillRule:"evenodd",d:"M100,400H25A24.978,24.978,0,0,1,0,375V25A24.98,24.98,0,0,1,25,0h75a29.8,29.8,0,0,0,8.8,21.2A29.8,29.8,0,0,0,130,30,30.035,30.035,0,0,0,160,0h75a24.98,24.98,0,0,1,25,25V375a24.977,24.977,0,0,1-25,25H160a30,30,0,0,0-60,0ZM220,274a8,8,0,1,0,8,8A8.009,8.009,0,0,0,220,274Zm-45,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,175,274Zm-45,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,130,274Zm-45,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,85,274Zm-45,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,40,274Z",clipRule:"evenodd"});function Ee(e,t){var n=e.title,r=e.titleId,i=xe(e,["title","titleId"]);return a.createElement("svg",we({fill:"currentColor",viewBox:"0 0 260 400",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ke)}var Se=a.forwardRef(Ee);n.p;function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ze=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"});function Ie(e,t){var n=e.title,r=e.titleId,i=Re(e,["title","titleId"]);return a.createElement("svg",Ce({className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ze)}var Pe=a.forwardRef(Ie);n.p;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _e(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var We=a.createElement("path",{opacity:.2,fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}),De=a.createElement("path",{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"});function Me(e,t){var n=e.title,r=e.titleId,i=_e(e,["title","titleId"]);return a.createElement("svg",Ae({viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,We,De)}var Le=a.forwardRef(Me);n.p;function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ne=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}),Ze=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"});function Te(e,t){var n=e.title,r=e.titleId,i=Be(e,["title","titleId"]);return a.createElement("svg",qe({className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,Ne,Ze)}var Fe=a.forwardRef(Te);n.p;function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ue=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"});function Ye(e,t){var n=e.title,r=e.titleId,i=Ve(e,["title","titleId"]);return a.createElement("svg",He({className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,Ue)}var Ge=a.forwardRef(Ye);n.p;n.p;var Je=te,Qe=oe,Xe=de,Ke=me,$e=ye,et=Se,tt=Pe,nt=Le,rt=Fe,at=Ge,it=Object(a.memo)((function(e){var t,n=e.resources,a=e.selectedResource,i=e.handleResourceSelect,o=e.children;return Object(r.jsxs)(q,{children:[Object(r.jsxs)(B,{children:[Object(r.jsx)(s.b,{to:"/",children:"BiBooking"}),n&&n.length>0&&void 0!==a&&Object(r.jsxs)(x.a,{children:[Object(r.jsx)(x.b,{children:Object(r.jsxs)(F,{children:[Object(r.jsx)("span",{children:n&&(null===(t=n[a])||void 0===t?void 0:t.name)}),Object(r.jsx)(Xe,{})]})}),Object(r.jsx)(T,{children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(r.jsx)(x.c,{onSelect:function(){return null===i||void 0===i?void 0:i(t)},children:e.name},"menu_".concat(t,"_").concat(e.id))}))})]})]}),o,Object(r.jsx)(N,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(x.b,{children:Object(r.jsx)(Ke,{})}),Object(r.jsxs)(Z,{children:[Object(r.jsx)(x.d,{as:s.b,to:"/stats",children:Object(r.jsxs)(H,{children:[Object(r.jsx)(rt,{}),"Statistiche"]})}),Object(r.jsx)(x.c,{onSelect:function(){return J.signOut()},children:Object(r.jsxs)(H,{children:[Object(r.jsx)(at,{}),"Esci"]})})]})]})})]})})),ot={slots:new Map,isOpen:!1,selectedSlot:void 0,selectedWeek:0},ct=function(e,t){var n=t.type,r=t.data,a=e.slots,i=e.selectedWeek;switch(n){case"loadSlots":return Object(l.a)(Object(l.a)({},e),{},{slots:r});case"open":return Object(l.a)(Object(l.a)({},e),{},{isOpen:!0,selectedSlot:r});case"close":return Object(l.a)(Object(l.a)({},ot),{},{slots:a,selectedWeek:i});case"previousWeek":return Object(l.a)(Object(l.a)({},e),{},{selectedWeek:i-1});case"nextWeek":return Object(l.a)(Object(l.a)({},e),{},{selectedWeek:i+1});case"today":return Object(l.a)(Object(l.a)({},e),{},{selectedWeek:0});default:return e}},st=n(47),lt=["Luned\xec","Marted\xec","Mercoled\xec","Gioved\xec","Venerd\xec","Sabato","Domenica"],ut={"01":"Gennaio","02":"Febbraio","03":"Marzo","04":"Aprile","05":"Maggio","06":"Giugno","07":"Luglio","08":"Agosto","09":"Settembre",10:"Ottobre",11:"Novembre",12:"Dicembre"},dt=n(48);function bt(){var e=Object(u.a)(["\n  border-right: 1rem solid var(--border-gray);\n  width: 100%;\n  position: relative;\n  span {\n    position: absolute;\n    top: calc(0rem - var(--hour-size) / 2);\n    right: 10rem;\n    font-size: var(--hour-size);\n  }\n"]);return bt=function(){return e},e}function ft(){var e=Object(u.a)(["\n  :not(:nth-of-type(8n)) { border-right: 1rem solid var(--border-gray); }\n  border-top: 1rem solid var(--border-gray);\n  width: 100%;\n  height: 100%;\n  min-height: 30rem;\n  ","\n"]);return ft=function(){return e},e}function ht(){var e=Object(u.a)(["\n  flex-direction: column;\n  height: var(--day-header-height);\n  font-size: 18rem;\n  user-select: none;\n  span:last-child { font-size: 13rem; font-weight: 300; }\n\n  ","\n"]);return ht=function(){return e},e}function pt(){var e=Object(u.a)(["\n  --day-header-height: 60rem;\n  --rows: ",";\n  --hour-size: 10rem;\n  display: grid;\n  grid-template-columns: 70rem repeat(7, 1fr);\n  grid-template-rows: repeat(var(--rows), 1fr);\n  overflow-y: auto;\n  height: calc(100vh - var(--header-height) - var(--day-header-height));\n  padding: calc(var(--hour-size) / 4) 0;\n"]);return pt=function(){return e},e}function mt(){var e=Object(u.a)(["\n  --day-header-height: 60rem;\n  display: grid;\n  grid-template-columns: 70rem repeat(7, 1fr);\n  grid-template-rows: 1fr;\n"]);return mt=function(){return e},e}function vt(){var e=Object(u.a)(["\n  & > div {\n    cursor: pointer;\n    border-radius: 50%;\n    height: calc(var(--header-height) * 0.7);\n    width: calc(var(--header-height) * 0.7);\n    :hover { background-color: var(--main-light); color: var(--main-dark) }\n    svg {\n      height: 30rem;\n    }\n  }\n  & > button {\n    border: 1rem solid var(--white);\n    border-radius: 6rem;\n    padding: 10rem 20rem;\n    margin-right: 25rem;\n    user-select: none;\n    outline: none;\n    transition: all 0.3s ease;\n    :hover { background-color: var(--white); color: var(--main); }\n  }\n"]);return vt=function(){return e},e}var jt=Object(m.a)(R)(vt()),gt=m.a.div(mt()),Ot=m.a.div(pt(),(function(e){return e.rows})),yt=Object(m.a)(R)(ht(),(function(e){return e.today&&"\n    border-radius: 50rem;\n    background-color: var(--main);\n    height: calc(var(--day-header-height) - 13rem);\n    margin: auto 20rem;\n    color: var(--white);\n  "})),wt=function(e){return"\n  --fillColor: ".concat(e<50?"var(--success-light)":e<80?"var(--warning-light)":"var(--error-light)",";\n  background: linear-gradient(to right, var(--fillColor) ").concat(e,"%, var(--white) ").concat(e,"%);\n")},xt=Object(m.a)(R)(ft(),(function(e){var t=e.percentage;return t?"\n      cursor: pointer;\n      :hover { box-shadow: var(--shadow-1); border-radius: 2rem; transition: box-shadow 0.3s ease; }\n      ".concat(wt(t),"\n    "):"background-color: var(--background-gray);"})),kt=Object(m.a)(R)(bt());function Et(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  outline: none;\n  border: 2rem solid var(--border-gray);\n  border-radius: 10rem;\n  padding: 12rem 18rem;\n  color: var(--text);\n  transition: all 0.3s ease;\n  svg { margin-right: 10rem; height: 20rem; }\n  :hover {\n    background-color: var(--main);\n    color: var(--white);\n    border-color: var(--main);\n  }\n"]);return Et=function(){return e},e}function St(){var e=Object(u.a)(["\n  position: relative;\n  height: 100rem;\n  margin-top: 20rem;\n  & > * { transition: all 0.3s ease }\n  :not(:last-child) { margin-right: 20rem }\n  svg:first-of-type {\n    cursor: pointer;\n    height: 100%;\n    color: var(--main-light);\n  }\n  span {\n    pointer-events: none;\n    font-size: 18rem;\n    color: var(--white);\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n  }\n  svg:last-of-type {\n    pointer-events: none;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateY(-50%) translateX(-50%);\n    height: 50rem;\n    color: var(--error);\n    z-index: 2;\n  }\n  :hover {\n    svg:first-of-type { opacity: 0.5 }\n    svg:last-of-type { opacity: 1 }\n  }\n"]);return St=function(){return e},e}function Ct(){var e=Object(u.a)(["\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  max-height: 270rem;\n  overflow-y: auto;\n  width: calc(100% - 30rem);\n  margin: 25rem auto 25rem;\n  overflow-x: auto;\n  padding: 10rem 0;\n"]);return Ct=function(){return e},e}function Rt(){var e=Object(u.a)(["\n  width: 100%;\n  height: 30rem;\n  border: 1rem solid var(--border-gray);\n  border-radius: 50rem;\n  ","\n"]);return Rt=function(){return e},e}function zt(){var e=Object(u.a)(["\n  font-size: 26rem;\n  flex-direction: column;\n  margin-bottom: 35rem;\n  div {\n    margin-top: 5rem;\n    font-size: 16rem;\n    color: var(--main-light);\n    svg { height: 18rem }\n  }\n"]);return zt=function(){return e},e}function It(){var e=Object(u.a)(["\nwidth: 70vw;\nbox-shadow: var(--shadow-2);\nborder-radius: 7rem;\npadding: 20rem;\nposition: relative;\n& > svg {\n  width: 20rem;\n  position: absolute;\n  top: 20rem;\n  right: 20rem;\n  cursor: pointer;\n}\n"]);return It=function(){return e},e}var Pt=Object(m.a)(dt.a)(It()),At=Object(m.a)(R)(zt()),_t=Object(m.a)(R)(Rt(),(function(e){var t=e.percentage;return t&&wt(t)})),Wt=Object(m.a)(R)(Ct()),Dt=m.a.div(St()),Mt=m.a.button(Et()),Lt=Object(a.memo)((function(e){var t=e.resource,n=e.slot,i=Object(st.a)(e,["resource","slot"]),o=Object(a.useMemo)((function(){var e=function(e){return{weekDay:lt[e.getDay()-1],day:g(e).slice(8,10),month:ut[g(e).slice(5,7)],hour:O(e)}},t=e(new Date(n.starts_at.datetime)),a=e(new Date(n.ends_at.datetime)),i=function(e){var t=e.weekDay,n=e.day,r=e.month,a=e.hour;return"".concat(t," ").concat(n," ").concat(r," - ").concat(a)};return Object(r.jsxs)(R,{children:[i(t),Object(r.jsx)(Qe,{}),i(a)]})}),[n.starts_at.datetime,n.ends_at.datetime]);return Object(r.jsxs)(Pt,Object(l.a)(Object(l.a)({},i),{},{"aria-label":"Booking Detail",children:[Object(r.jsxs)(At,{children:[Object(r.jsx)("strong",{children:t.name}),o]}),Object(r.jsx)(_t,{percentage:w(n.bookings,n.capacity),children:"".concat(n.bookings," prenotazioni su ").concat(n.capacity)}),Object(r.jsx)(Wt,{children:Object(j.a)(Array(n.bookings)).map((function(e,t){return Object(r.jsx)(qt,{code:"AA".concat((n=t,n<10?"0".concat(n):n))},"tickets_".concat(t));var n}))}),Object(r.jsx)(R,{children:Object(r.jsxs)(Mt,{children:[Object(r.jsx)(tt,{}),"Aggiungi prenotazione"]})}),Object(r.jsx)($e,{onClick:i.onDismiss})]}))})),qt=function(e){var t=e.code;return Object(r.jsxs)(Dt,{children:[Object(r.jsx)("span",{children:t}),Object(r.jsx)(et,{}),Object(r.jsx)($e,{})]})},Bt=Lt,Nt=[{id:0,starts_at:{datetime:"2020-10-26T10:00:00.000Z",timezone:"string"},ends_at:{datetime:"2020-10-26T10:30:00.000Z",timezone:"string"},capacity:50,bookings:25,promotion:{id:0,name:"string",code:"string",image:"string",description:"string"}},{id:1,starts_at:{datetime:"2020-10-26T09:00:00.000Z",timezone:"string"},ends_at:{datetime:"2020-10-26T09:30:00.000Z",timezone:"string"},capacity:50,bookings:6,promotion:{id:1,name:"string",code:"string",image:"string",description:"string"}},{id:2,starts_at:{datetime:"2020-10-28T13:00:00.000Z",timezone:"string"},ends_at:{datetime:"2020-10-28T13:30:00.000Z",timezone:"string"},capacity:50,bookings:41,promotion:{id:1,name:"string",code:"string",image:"string",description:"string"}}],Zt=[{booking_limit:30,days_between_bookings:6,description:"Et enim mollitia molestiae consequuntur illo cum esse ipsum. Sunt dolor rerum iste excepturi nam dignissimos. Eum in eligendi excepturi et reiciendis. A dolorem velit nemo quas laboriosam omnis perferendis at. Qui est possimus deserunt itaque perspiciatis eos sunt. Harum perferendis vel ducimus itaque et. Veniam quibusdam quas quibusdam repellendus et impedit vel. Eum maxime cum sed voluptatem in voluptates.",id:3,image:"https://api.qb.bitapp.dev/storage/resources/placeholder.jpg",latitude:-33.856908,longitude:151.215155,name:"FILCOM",penalty_duration:1,radius:229,slot_capacity:50,slot_duration:30,timezone:"Europe/Rome"},{booking_limit:15,days_between_bookings:1,description:"Aut earum odio consequatur aut suscipit veniam. Et sequi harum enim ab est. Rem atque voluptatem deserunt velit dignissimos et. Reiciendis voluptas incidunt atque nesciunt sit id quisquam. Commodi voluptates natus quia minima. Delectus perspiciatis delectus autem suscipit est omnis dignissimos. Nesciunt quia veniam suscipit. Quia sint earum perferendis dolorem. Ex impedit voluptate sequi sequi alias. Et numquam nisi qui et rerum. Aliquam sunt enim ut consequatur recusandae illo deleniti.",id:4,image:"https://api.qb.bitapp.dev/storage/resources/placeholder.jpg",latitude:44.558258,longitude:11.30655,name:"Sartori SPA",penalty_duration:3,radius:186,slot_capacity:50,slot_duration:60,timezone:"Europe/Rome"}],Tt={loading:!1,user:null,resources:[],selectedResource:0},Ft=Object(a.createContext)({state:Tt,dispatch:function(){return null}}),Ht=Ft.Provider,Vt=function(e,t){var n=t.data;switch(t.type){case"toggleLoading":return Object(l.a)(Object(l.a)({},e),{},{loading:!e.loading});case"setUser":return Object(l.a)(Object(l.a)({},e),{},{user:n});case"loadResources":return Object(l.a)(Object(l.a)({},e),{},{resources:n});case"selectResource":return Object(l.a)(Object(l.a)({},e),{},{selectedResource:n});default:return e}},Ut=function(){var e=Object(a.useContext)(Ft);return[e.state,e.dispatch]};var Yt=function(e){var t=e.handlePreviousWeek,n=e.handleNextWeek,a=e.handleToday;return Object(r.jsxs)(jt,{children:[Object(r.jsx)("button",{onClick:a,children:"Oggi"}),Object(r.jsx)(I,{label:"Settimana precedente",children:Object(r.jsx)(R,{onClick:t,children:Object(r.jsx)(Je,{})})}),Object(r.jsx)(I,{label:"Prossima settimana",children:Object(r.jsx)(R,{onClick:n,children:Object(r.jsx)(Qe,{})})})]})},Gt=function(e){var t=e.day,n=e.month,a=e.date,i=e.year;return Object(r.jsxs)(yt,{today:y(a,n,i),children:[Object(r.jsx)("span",{children:t}),Object(r.jsxs)("span",{children:[ut[n]," ",a]})]})},Jt=Object(a.memo)((function(e){var t=e.onClick,n=e.slot;return n?Object(r.jsxs)(xt,{onClick:function(){return t(n)},percentage:w(n.bookings,n.capacity),children:[n.bookings," prenotazioni"]}):Object(r.jsx)(xt,{})})),Qt=function(){var e=Object(a.useReducer)(ct,ot),t=Object(h.a)(e,2),n=t[0],o=t[1],c=n.slots,s=n.selectedWeek,u=n.isOpen,d=n.selectedSlot,p=Ut(),m=Object(h.a)(p,2),y=m[0],w=y.resources,x=y.selectedResource,k=m[1],E=Object(a.useMemo)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e.setDate(e.getDate()+7*s),[1,2,3,4,5,6,7].map((function(t){return g(new Date(e.setDate(e.getDate()-e.getDay()+t)))}))}),[s]),S=Object(a.useCallback)((function(e){return o({type:"open",data:e})}),[]),C=Object(a.useCallback)((function(e){return k({type:"selectResource",data:e})}),[k]),R=Object(a.useCallback)(Object(f.a)(b.a.mark((function e(){var t,n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,w.length){e.next=3;break}return e.abrupt("return");case 3:t=w[x].slot_duration,8,13,n=function(e,t){return O(new Date(Date.UTC(0,0,0,e,t,0,0)))},r=Object(j.a)(Array(Math.ceil(300/t))).map((function(e,n){return n*t})).reduce((function(e,t){return e.set(n(8,t),{})}),new Map),(a=Nt)instanceof Error||(a.forEach((function(e){var t=g(new Date(e.starts_at.datetime)),n=O(new Date(e.starts_at.datetime));r.set(n,Object(l.a)(Object(l.a)({},r.get(n)),{},Object(v.a)({},t,e)))})),o({type:"loadSlots",data:r})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[w,x]);Object(a.useEffect)((function(){R()}),[R]);var z=Object(a.useCallback)((function(e){return(null===w||void 0===w?void 0:w.length)?"grid_".concat(w[x].id,"_").concat(e):e}),[w,x]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(it,Object(l.a)(Object(l.a)({},{resources:w,selectedResource:x,handleResourceSelect:C}),{},{children:Object(r.jsx)(Yt,Object(l.a)({},{handlePreviousWeek:function(){return o({type:"previousWeek"})},handleNextWeek:function(){return o({type:"nextWeek"})},handleToday:function(){return o({type:"today"})}}))})),Object(r.jsxs)(gt,{children:[Object(r.jsx)("span",{}),lt.map((function(e,t){return Object(r.jsx)(Gt,{day:e,month:E[t].slice(5,7),date:E[t].slice(8,10),year:E[t].slice(0,4)},"day_header_".concat(e))}))]}),Object(r.jsx)(Ot,{rows:c.size,children:Array.from(c).map((function(e){return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(kt,{children:Object(r.jsx)("span",{children:e[0]})}),E.map((function(t){return Object(r.jsx)(Jt,{onClick:S,slot:e[1][t]},"".concat(z(e[0]),"_").concat(t))}))]},z(e[0]))}))}),w.length>0&&d&&Object(r.jsx)(Bt,Object(l.a)({},{isOpen:u,onDismiss:function(){return o({type:"close"})},slot:d,resource:w[x]}))]})},Xt=n(50);function Kt(){var e=Object(u.a)(["\n  border-radius: 30rem;\n  background-color: var(--main);\n  height: 48rem;\n  margin-top: 30rem;\n  width: 100%;\n  color: var(--white);\n"]);return Kt=function(){return e},e}function $t(){var e=Object(u.a)(["\n  color: var(--error);\n  font-size: 12rem;\n"]);return $t=function(){return e},e}function en(){var e=Object(u.a)(["\n  border: 2rem solid var(--border-gray);\n  height: 38rem;\n  width: 100%;\n  border-radius: 7rem;\n  padding-left: 15rem;\n  margin-top: 20rem;\n  font-size: 15rem;\n  :hover, :focus {\n    border-color: var(--main-light);\n    transition: border-color 0.5s ease;\n  }\n  ","\n"]);return en=function(){return e},e}function tn(){var e=Object(u.a)(["\n  background-color: var(--white);\n  width: 28vw;\n  box-shadow: var(--shadow-1);\n  border-radius: 10rem;\n  flex-direction: column;\n  padding: 20rem 28rem;\n  h1 { font-size: 25rem; font-weight: 300; margin-bottom: 20rem; }\n  & > form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n"]);return tn=function(){return e},e}function nn(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--main);\n"]);return nn=function(){return e},e}var rn=Object(m.a)(R)(nn()),an=Object(m.a)(R)(tn()),on=Object(m.a)(z)(en(),(function(e){return e.error&&"\n    border-color: var(--error);\n    :hover, :focus {\n      border-color: var(--error);\n    }\n  "})),cn=m.a.span($t()),sn=m.a.button(Kt()),ln={required:!0};var un=function(){var e=Object(Xt.a)(),t=e.register,n=e.handleSubmit,a=e.errors;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(rn,{children:Object(r.jsxs)(an,{children:[Object(r.jsx)(R,{flexDirection:"column",children:Object(r.jsx)("h1",{children:"BiBooking"})}),Object(r.jsxs)("form",{onSubmit:n((function(e){var t=e.email,n=e.password;J.signInWithEmailAndPassword(t,n).catch((function(e){return console.log("Error Signing in with email and password")}))})),children:[Object(r.jsx)(on,{name:"email",ref:t(ln),placeholder:"Email",error:a.email}),a.email&&Object(r.jsx)(cn,{children:"Inserisci un indirizzo email valido"}),Object(r.jsx)(on,{name:"password",ref:t(ln),placeholder:"Password",error:a.password}),a.password&&Object(r.jsx)(cn,{children:"La password non pu\xf2 essere vuota"}),Object(r.jsx)(sn,{type:"submit",children:"Log in"})]})]})})})},dn=n.p+"static/media/andamento.9e859486.jpg",bn=n.p+"static/media/occupazione.6e9e0900.jpg";function fn(){var e=Ut(),t=Object(h.a)(e,2),n=t[0],i=n.resources,o=n.selectedResource,c=t[1],s=Object(a.useCallback)((function(e){return c({type:"selectResource",data:e})}),[c]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(it,Object(l.a)({},{resources:i,selectedResource:o,handleResourceSelect:s})),Object(r.jsxs)(R,{style:{backgroundColor:"white",height:"calc(100vh - var(--header-height))"},justifyContent:"space-around",children:[Object(r.jsx)("img",{src:dn,alt:"Andamento settimanale",style:{width:"45vw"}}),Object(r.jsx)("img",{src:bn,alt:"Occupazione settimanale",style:{width:"45vw"}})]})]})}function hn(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(it,{})})}function pn(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: var(--black);\n  opacity: 0.8;\n  z-index: 100;\n  color: var(--white);\n  svg {\n    height: 60rem;\n    @keyframes spinner {\n      0% { transform: rotate(0deg) }\n      to { transform: rotate(359deg) }\n    }\n    animation: spinner 1.2s cubic-bezier(.6,0,.4,1) infinite;\n  }\n"]);return pn=function(){return e},e}var mn=Object(m.a)((function(e){return Object(r.jsx)(R,Object(l.a)(Object(l.a)({},e),{},{children:Object(r.jsx)(nt,{})}))}))(pn()),vn=function(){return Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{path:"/users",children:Object(r.jsx)(hn,{})}),Object(r.jsx)(p.a,{path:"/stats",children:Object(r.jsx)(fn,{})}),Object(r.jsx)(p.a,{path:"/",children:Object(r.jsx)(Qt,{})})]})},jn=function(){return Object(r.jsx)(p.c,{children:Object(r.jsx)(p.a,{path:"/",children:Object(r.jsx)(un,{})})})},gn=function(){var e=Object(a.useReducer)(Vt,Tt),t=Object(h.a)(e,2),n=t[0],i=t[1],o=n.user,c=n.loading,s=Object(a.useMemo)((function(){return{state:n,dispatch:i}}),[n,i]);Object(a.useEffect)((function(){J.onAuthStateChanged(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:n=e.sent,i({type:"setUser",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var l=Object(a.useCallback)(Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((t=Zt)instanceof Error)){e.next=4;break}return e.abrupt("return");case 4:i({type:"loadResources",data:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);return Object(a.useEffect)((function(){l()}),[l]),o?Object(r.jsxs)(Ht,{value:s,children:[c&&Object(r.jsx)(mn,{}),Object(r.jsx)(vn,{})]}):Object(r.jsx)(jn,{})},On=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function yn(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(gn,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bibooking-react-pages",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bibooking-react-pages","/service-worker.js");On?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):yn(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):yn(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.5d4c78ef.chunk.js.map