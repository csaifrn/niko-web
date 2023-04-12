function TC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var xC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function th(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bu={exports:{}},Ht={},A={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),kC=Symbol.for("react.portal"),RC=Symbol.for("react.fragment"),PC=Symbol.for("react.strict_mode"),AC=Symbol.for("react.profiler"),DC=Symbol.for("react.provider"),OC=Symbol.for("react.context"),NC=Symbol.for("react.forward_ref"),MC=Symbol.for("react.suspense"),LC=Symbol.for("react.memo"),FC=Symbol.for("react.lazy"),Om=Symbol.iterator;function BC(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var O_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N_=Object.assign,M_={};function So(t,e,n){this.props=t,this.context=e,this.refs=M_,this.updater=n||O_}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L_(){}L_.prototype=So.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=M_,this.updater=n||O_}var rh=nh.prototype=new L_;rh.constructor=nh;N_(rh,So.prototype);rh.isPureReactComponent=!0;var Nm=Array.isArray,F_=Object.prototype.hasOwnProperty,ih={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)F_.call(e,r)&&!B_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:aa,type:t,key:o,ref:s,props:i,_owner:ih.current}}function UC(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function $C(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$C(""+t.key):e.toString(36)}function gl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case aa:case kC:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Zc(s,0):r,Nm(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),gl(i,e,n,"",function(u){return u})):i!=null&&(oh(i)&&(i=UC(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Nm(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Zc(o,a);s+=gl(o,e,n,l,i)}else if(l=BC(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Zc(o,a++),s+=gl(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return gl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function zC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},ml={transition:null},jC={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:ml,ReactCurrentOwner:ih};le.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=So;le.Fragment=RC;le.Profiler=AC;le.PureComponent=nh;le.StrictMode=PC;le.Suspense=MC;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jC;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N_({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ih.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F_.call(e,l)&&!B_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:aa,type:t.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(t){return t={$$typeof:OC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DC,_context:t},t.Consumer=t};le.createElement=U_;le.createFactory=function(t){var e=U_.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:NC,render:t}};le.isValidElement=oh;le.lazy=function(t){return{$$typeof:FC,_payload:{_status:-1,_result:t},_init:zC}};le.memo=function(t,e){return{$$typeof:LC,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return _t.current.useCallback(t,e)};le.useContext=function(t){return _t.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};le.useEffect=function(t,e){return _t.current.useEffect(t,e)};le.useId=function(){return _t.current.useId()};le.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return _t.current.useMemo(t,e)};le.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};le.useRef=function(t){return _t.current.useRef(t)};le.useState=function(t){return _t.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return _t.current.useTransition()};le.version="18.2.0";(function(t){t.exports=le})(A);const Le=th(A.exports),mf=TC({__proto__:null,default:Le},[A.exports]);var $_={exports:{}},z_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,V){var G=N.length;N.push(V);e:for(;0<G;){var ie=G-1>>>1,C=N[ie];if(0<i(C,V))N[ie]=V,N[G]=C,G=ie;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],G=N.pop();if(G!==V){N[0]=G;e:for(var ie=0,C=N.length,R=C>>>1;ie<R;){var O=2*(ie+1)-1,B=N[O],I=O+1,b=N[I];if(0>i(B,G))I<C&&0>i(b,B)?(N[ie]=b,N[I]=G,ie=I):(N[ie]=B,N[O]=G,ie=O);else if(I<C&&0>i(b,G))N[ie]=b,N[I]=G,ie=I;else break e}}return V}function i(N,V){var G=N.sortIndex-V.sortIndex;return G!==0?G:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,h=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=N)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function _(N){if(v=!1,y(N),!h)if(n(l)!==null)h=!0,ge(S);else{var V=n(u);V!==null&&Ee(_,V.startTime-N)}}function S(N,V){h=!1,v&&(v=!1,m(P),P=-1),p=!0;var G=f;try{for(y(V),c=n(l);c!==null&&(!(c.expirationTime>V)||N&&!q());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,f=c.priorityLevel;var C=ie(c.expirationTime<=V);V=t.unstable_now(),typeof C=="function"?c.callback=C:c===n(l)&&r(l),y(V)}else r(l);c=n(l)}if(c!==null)var R=!0;else{var O=n(u);O!==null&&Ee(_,O.startTime-V),R=!1}return R}finally{c=null,f=G,p=!1}}var T=!1,k=null,P=-1,U=5,z=-1;function q(){return!(t.unstable_now()-z<U)}function Z(){if(k!==null){var N=t.unstable_now();z=N;var V=!0;try{V=k(!0,N)}finally{V?oe():(T=!1,k=null)}}else T=!1}var oe;if(typeof g=="function")oe=function(){g(Z)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,se=ne.port2;ne.port1.onmessage=Z,oe=function(){se.postMessage(null)}}else oe=function(){w(Z,0)};function ge(N){k=N,T||(T=!0,oe())}function Ee(N,V){P=w(function(){N(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){h||p||(h=!0,ge(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return N()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=f;f=N;try{return V()}finally{f=G}},t.unstable_scheduleCallback=function(N,V,G){var ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,N){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=G+C,N={id:d++,callback:V,priorityLevel:N,startTime:G,expirationTime:C,sortIndex:-1},G>ie?(N.sortIndex=G,e(u,N),n(l)===null&&N===n(u)&&(v?(m(P),P=-1):v=!0,Ee(_,G-ie))):(N.sortIndex=C,e(l,N),h||p||(h=!0,ge(S))),N},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(N){var V=f;return function(){var G=f;f=V;try{return N.apply(this,arguments)}finally{f=G}}}})(z_);(function(t){t.exports=z_})($_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=A.exports,zt=$_.exports;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W_=new Set,Cs={};function Ii(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(Cs[t]=e,t=0;t<e.length;t++)W_.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vf=Object.prototype.hasOwnProperty,WC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Fm={};function HC(t){return vf.call(Fm,t)?!0:vf.call(Lm,t)?!1:WC.test(t)?Fm[t]=!0:(Lm[t]=!0,!1)}function VC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GC(t,e,n,r){if(e===null||typeof e>"u"||VC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sh=/[\-:]([a-z])/g;function ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sh,ah);at[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sh,ah);at[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sh,ah);at[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lh(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GC(e,n,i,r)&&(n=null),r||i===null?HC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Ai=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),V_=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),G_=Symbol.for("react.offscreen"),Bm=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,ed;function ts(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ts(t):""}function qC(t){switch(t.tag){case 5:return ts(t.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case Ai:return"Portal";case yf:return"Profiler";case uh:return"StrictMode";case _f:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V_:return(t.displayName||"Context")+".Consumer";case H_:return(t._context.displayName||"Context")+".Provider";case ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function KC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YC(t){var e=q_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=YC(t))}function K_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=q_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y_(t,e){e=e.checked,e!=null&&lh(t,"checked",e,!1)}function Ef(t,e){Y_(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?If(t,e.type,n):e.hasOwnProperty("defaultValue")&&If(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function If(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ns=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ns(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Q_(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,J_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QC=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(t){QC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ls[e]=ls[t]})});function Z_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ls.hasOwnProperty(t)&&ls[t]?(""+e).trim():e+"px"}function ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XC=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(XC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rf=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pf=null,qi=null,Ki=null;function Wm(t){if(t=ca(t)){if(typeof Pf!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Wu(e),Pf(t.stateNode,t.type,e))}}function tw(t){qi?Ki?Ki.push(t):Ki=[t]:qi=t}function nw(){if(qi){var t=qi,e=Ki;if(Ki=qi=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function rw(t,e){return t(e)}function iw(){}var rd=!1;function ow(t,e,n){if(rd)return t(e,n);rd=!0;try{return rw(t,e,n)}finally{rd=!1,(qi!==null||Ki!==null)&&(iw(),nw())}}function xs(t,e){var n=t.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Af=!1;if(Qn)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Af=!1}function JC(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var us=!1,Ll=null,Fl=!1,Df=null,ZC={onError:function(t){us=!0,Ll=t}};function eT(t,e,n,r,i,o,s,a,l){us=!1,Ll=null,JC.apply(ZC,arguments)}function tT(t,e,n,r,i,o,s,a,l){if(eT.apply(this,arguments),us){if(us){var u=Ll;us=!1,Ll=null}else throw Error(L(198));Fl||(Fl=!0,Df=u)}}function Ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(Ci(t)!==t)throw Error(L(188))}function nT(t){var e=t.alternate;if(!e){if(e=Ci(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hm(i),t;if(o===r)return Hm(i),e;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function aw(t){return t=nT(t),t!==null?lw(t):null}function lw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lw(t);if(e!==null)return e;t=t.sibling}return null}var uw=zt.unstable_scheduleCallback,Vm=zt.unstable_cancelCallback,rT=zt.unstable_shouldYield,iT=zt.unstable_requestPaint,Ue=zt.unstable_now,oT=zt.unstable_getCurrentPriorityLevel,ph=zt.unstable_ImmediatePriority,cw=zt.unstable_UserBlockingPriority,Bl=zt.unstable_NormalPriority,sT=zt.unstable_LowPriority,dw=zt.unstable_IdlePriority,Uu=null,On=null;function aT(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:cT,lT=Math.log,uT=Math.LN2;function cT(t){return t>>>=0,t===0?32:31-(lT(t)/uT|0)|0}var ja=64,Wa=4194304;function rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rs(a):(o&=s,o!==0&&(r=rs(o)))}else s=n&~i,s!==0?r=rs(s):o!==0&&(r=rs(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function dT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-_n(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=dT(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fw(){var t=ja;return ja<<=1,(ja&4194240)===0&&(ja=64),t}function id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function pT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function pw(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hw,gh,gw,mw,vw,Nf=!1,Ha=[],_r=null,wr=null,br=null,ks=new Map,Rs=new Map,cr=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function jo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gT(t,e,n,r,i){switch(e){case"focusin":return _r=jo(_r,t,e,n,r,i),!0;case"dragenter":return wr=jo(wr,t,e,n,r,i),!0;case"mouseover":return br=jo(br,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ks.set(o,jo(ks.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rs.set(o,jo(Rs.get(o)||null,t,e,n,r,i)),!0}return!1}function yw(t){var e=Jr(t.target);if(e!==null){var n=Ci(e);if(n!==null){if(e=n.tag,e===13){if(e=sw(n),e!==null){t.blockedOn=e,vw(t.priority,function(){gw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rf=r,n.target.dispatchEvent(r),Rf=null}else return e=ca(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){vl(t)&&n.delete(e)}function mT(){Nf=!1,_r!==null&&vl(_r)&&(_r=null),wr!==null&&vl(wr)&&(wr=null),br!==null&&vl(br)&&(br=null),ks.forEach(qm),Rs.forEach(qm)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,mT)))}function Ps(t){function e(i){return Wo(i,t)}if(0<Ha.length){Wo(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&Wo(_r,t),wr!==null&&Wo(wr,t),br!==null&&Wo(br,t),ks.forEach(e),Rs.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)yw(n),n.blockedOn===null&&cr.shift()}var Yi=rr.ReactCurrentBatchConfig,$l=!0;function vT(t,e,n,r){var i=ye,o=Yi.transition;Yi.transition=null;try{ye=1,mh(t,e,n,r)}finally{ye=i,Yi.transition=o}}function yT(t,e,n,r){var i=ye,o=Yi.transition;Yi.transition=null;try{ye=4,mh(t,e,n,r)}finally{ye=i,Yi.transition=o}}function mh(t,e,n,r){if($l){var i=Mf(t,e,n,r);if(i===null)hd(t,e,r,zl,n),Gm(t,r);else if(gT(i,t,e,n,r))r.stopPropagation();else if(Gm(t,r),e&4&&-1<hT.indexOf(t)){for(;i!==null;){var o=ca(i);if(o!==null&&hw(o),o=Mf(t,e,n,r),o===null&&hd(t,e,r,zl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hd(t,e,r,null,n)}}var zl=null;function Mf(t,e,n,r){if(zl=null,t=fh(r),t=Jr(t),t!==null)if(e=Ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function _w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oT()){case ph:return 1;case cw:return 4;case Bl:case sT:return 16;case dw:return 536870912;default:return 16}default:return 16}}var mr=null,vh=null,yl=null;function ww(){if(yl)return yl;var t,e=vh,n=e.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function Km(){return!1}function Vt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Va:Km,this.isPropagationStopped=Km,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yh=Vt(Eo),ua=Ne({},Eo,{view:0,detail:0}),_T=Vt(ua),od,sd,Ho,$u=Ne({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_h,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(od=t.screenX-Ho.screenX,sd=t.screenY-Ho.screenY):sd=od=0,Ho=t),od)},movementY:function(t){return"movementY"in t?t.movementY:sd}}),Ym=Vt($u),wT=Ne({},$u,{dataTransfer:0}),bT=Vt(wT),ST=Ne({},ua,{relatedTarget:0}),ad=Vt(ST),ET=Ne({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),IT=Vt(ET),CT=Ne({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TT=Vt(CT),xT=Ne({},Eo,{data:0}),Qm=Vt(xT),kT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PT[t])?!!e[t]:!1}function _h(){return AT}var DT=Ne({},ua,{key:function(t){if(t.key){var e=kT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_h,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OT=Vt(DT),NT=Ne({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=Vt(NT),MT=Ne({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_h}),LT=Vt(MT),FT=Ne({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BT=Vt(FT),UT=Ne({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$T=Vt(UT),zT=[9,13,27,32],wh=Qn&&"CompositionEvent"in window,cs=null;Qn&&"documentMode"in document&&(cs=document.documentMode);var jT=Qn&&"TextEvent"in window&&!cs,bw=Qn&&(!wh||cs&&8<cs&&11>=cs),Jm=String.fromCharCode(32),Zm=!1;function Sw(t,e){switch(t){case"keyup":return zT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ew(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function WT(t,e){switch(t){case"compositionend":return Ew(e);case"keypress":return e.which!==32?null:(Zm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Zm?null:t;default:return null}}function HT(t,e){if(Oi)return t==="compositionend"||!wh&&Sw(t,e)?(t=ww(),yl=vh=mr=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bw&&e.locale!=="ko"?null:e.data;default:return null}}var VT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VT[t.type]:e==="textarea"}function Iw(t,e,n,r){tw(r),e=jl(e,"onChange"),0<e.length&&(n=new yh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ds=null,As=null;function GT(t){Mw(t,0)}function zu(t){var e=Li(t);if(K_(e))return t}function qT(t,e){if(t==="change")return e}var Cw=!1;if(Qn){var ld;if(Qn){var ud="oninput"in document;if(!ud){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),ud=typeof tv.oninput=="function"}ld=ud}else ld=!1;Cw=ld&&(!document.documentMode||9<document.documentMode)}function nv(){ds&&(ds.detachEvent("onpropertychange",Tw),As=ds=null)}function Tw(t){if(t.propertyName==="value"&&zu(As)){var e=[];Iw(e,As,t,fh(t)),ow(GT,e)}}function KT(t,e,n){t==="focusin"?(nv(),ds=e,As=n,ds.attachEvent("onpropertychange",Tw)):t==="focusout"&&nv()}function YT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(As)}function QT(t,e){if(t==="click")return zu(e)}function XT(t,e){if(t==="input"||t==="change")return zu(e)}function JT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:JT;function Ds(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vf.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rv(n)}}function xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kw(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZT(t){var e=kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xw(n.ownerDocument.documentElement,n)){if(r!==null&&bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=iv(n,o);var s=iv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=Qn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Lf=null,fs=null,Ff=!1;function ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ff||Ni==null||Ni!==Ml(r)||(r=Ni,"selectionStart"in r&&bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fs&&Ds(fs,r)||(fs=r,r=jl(Lf,"onSelect"),0<r.length&&(e=new yh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},cd={},Rw={};Qn&&(Rw=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function ju(t){if(cd[t])return cd[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rw)return cd[t]=e[n];return t}var Pw=ju("animationend"),Aw=ju("animationiteration"),Dw=ju("animationstart"),Ow=ju("transitionend"),Nw=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){Nw.set(t,e),Ii(e,[t])}for(var dd=0;dd<sv.length;dd++){var fd=sv[dd],tx=fd.toLowerCase(),nx=fd[0].toUpperCase()+fd.slice(1);Ur(tx,"on"+nx)}Ur(Pw,"onAnimationEnd");Ur(Aw,"onAnimationIteration");Ur(Dw,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Ow,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function av(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tT(r,e,void 0,t),t.currentTarget=null}function Mw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;av(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;av(i,a,u),o=l}}}if(Fl)throw t=Df,Fl=!1,Df=null,t}function Te(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(Lw(e,t,2,!1),n.add(r))}function pd(t,e,n){var r=0;e&&(r|=4),Lw(n,t,r,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Os(t){if(!t[qa]){t[qa]=!0,W_.forEach(function(n){n!=="selectionchange"&&(rx.has(n)||pd(n,!1,t),pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,pd("selectionchange",!1,e))}}function Lw(t,e,n,r){switch(_w(e)){case 1:var i=vT;break;case 4:i=yT;break;default:i=mh}n=i.bind(null,e,n,t),i=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hd(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}ow(function(){var u=o,d=fh(n),c=[];e:{var f=Nw.get(t);if(f!==void 0){var p=yh,h=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":p=OT;break;case"focusin":h="focus",p=ad;break;case"focusout":h="blur",p=ad;break;case"beforeblur":case"afterblur":p=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LT;break;case Pw:case Aw:case Dw:p=IT;break;case Ow:p=BT;break;case"scroll":p=_T;break;case"wheel":p=$T;break;case"copy":case"cut":case"paste":p=TT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xm}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var g=u,y;g!==null;){y=g;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,m!==null&&(_=xs(g,m),_!=null&&v.push(Ns(g,_,y)))),w)break;g=g.return}0<v.length&&(f=new p(f,h,null,n,d),c.push({event:f,listeners:v}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Rf&&(h=n.relatedTarget||n.fromElement)&&(Jr(h)||h[Xn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=u,h=h?Jr(h):null,h!==null&&(w=Ci(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=u),p!==h)){if(v=Ym,_="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Xm,_="onPointerLeave",m="onPointerEnter",g="pointer"),w=p==null?f:Li(p),y=h==null?f:Li(h),f=new v(_,g+"leave",p,n,d),f.target=w,f.relatedTarget=y,_=null,Jr(d)===u&&(v=new v(m,g+"enter",h,n,d),v.target=y,v.relatedTarget=w,_=v),w=_,p&&h)t:{for(v=p,m=h,g=0,y=v;y;y=ki(y))g++;for(y=0,_=m;_;_=ki(_))y++;for(;0<g-y;)v=ki(v),g--;for(;0<y-g;)m=ki(m),y--;for(;g--;){if(v===m||m!==null&&v===m.alternate)break t;v=ki(v),m=ki(m)}v=null}else v=null;p!==null&&lv(c,f,p,v,!1),h!==null&&w!==null&&lv(c,w,h,v,!0)}}e:{if(f=u?Li(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=qT;else if(ev(f))if(Cw)S=XT;else{S=YT;var T=KT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=QT);if(S&&(S=S(t,u))){Iw(c,S,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&If(f,"number",f.value)}switch(T=u?Li(u):window,t){case"focusin":(ev(T)||T.contentEditable==="true")&&(Ni=T,Lf=u,fs=null);break;case"focusout":fs=Lf=Ni=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,ov(c,n,d);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":ov(c,n,d)}var k;if(wh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Oi?Sw(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(bw&&n.locale!=="ko"&&(Oi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Oi&&(k=ww()):(mr=d,vh="value"in mr?mr.value:mr.textContent,Oi=!0)),T=jl(u,P),0<T.length&&(P=new Qm(P,t,null,n,d),c.push({event:P,listeners:T}),k?P.data=k:(k=Ew(n),k!==null&&(P.data=k)))),(k=jT?WT(t,n):HT(t,n))&&(u=jl(u,"onBeforeInput"),0<u.length&&(d=new Qm("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}Mw(c,e)})}function Ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xs(t,n),o!=null&&r.unshift(Ns(t,o,i)),o=xs(t,e),o!=null&&r.push(Ns(t,o,i))),t=t.return}return r}function ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xs(n,o),l!=null&&s.unshift(Ns(n,l,a))):i||(l=xs(n,o),l!=null&&s.push(Ns(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ix=/\r\n?/g,ox=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(ox,"")}function Ka(t,e,n){if(e=uv(e),uv(t)!==e&&n)throw Error(L(425))}function Wl(){}var Bf=null,Uf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(t){return cv.resolve(null).then(t).catch(lx)}:zf;function lx(t){setTimeout(function(){throw t})}function gd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Io,Ms="__reactProps$"+Io,Xn="__reactContainer$"+Io,jf="__reactEvents$"+Io,ux="__reactListeners$"+Io,cx="__reactHandles$"+Io;function Jr(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dv(t);t!==null;){if(n=t[Pn])return n;t=dv(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[Pn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Wu(t){return t[Ms]||null}var Wf=[],Fi=-1;function $r(t){return{current:t}}function Re(t){0>Fi||(t.current=Wf[Fi],Wf[Fi]=null,Fi--)}function Ce(t,e){Fi++,Wf[Fi]=t.current,t.current=e}var Lr={},ht=$r(Lr),xt=$r(!1),ci=Lr;function oo(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Hl(){Re(xt),Re(ht)}function fv(t,e,n){if(ht.current!==Lr)throw Error(L(168));Ce(ht,e),Ce(xt,n)}function Fw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,KC(t)||"Unknown",i));return Ne({},n,r)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ci=ht.current,Ce(ht,t),Ce(xt,xt.current),!0}function pv(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Fw(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,Re(xt),Re(ht),Ce(ht,t)):Re(xt),Ce(xt,n)}var zn=null,Hu=!1,md=!1;function Bw(t){zn===null?zn=[t]:zn.push(t)}function dx(t){Hu=!0,Bw(t)}function zr(){if(!md&&zn!==null){md=!0;var t=0,e=ye;try{var n=zn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,Hu=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),uw(ph,zr),i}finally{ye=e,md=!1}}return null}var Bi=[],Ui=0,Gl=null,ql=0,Kt=[],Yt=0,di=null,jn=1,Wn="";function Gr(t,e){Bi[Ui++]=ql,Bi[Ui++]=Gl,Gl=t,ql=e}function Uw(t,e,n){Kt[Yt++]=jn,Kt[Yt++]=Wn,Kt[Yt++]=di,di=t;var r=jn;t=Wn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var o=32-_n(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,jn=1<<32-_n(e)+i|n<<i|r,Wn=o+t}else jn=1<<o|n<<i|r,Wn=t}function Sh(t){t.return!==null&&(Gr(t,1),Uw(t,1,0))}function Eh(t){for(;t===Gl;)Gl=Bi[--Ui],Bi[Ui]=null,ql=Bi[--Ui],Bi[Ui]=null;for(;t===di;)di=Kt[--Yt],Kt[Yt]=null,Wn=Kt[--Yt],Kt[Yt]=null,jn=Kt[--Yt],Kt[Yt]=null}var Ft=null,Nt=null,Ae=!1,hn=null;function $w(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Nt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:jn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Nt=null,!0):!1;default:return!1}}function Hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(Ae){var e=Nt;if(e){var n=e;if(!hv(t,e)){if(Hf(t))throw Error(L(418));e=Sr(n.nextSibling);var r=Ft;e&&hv(t,e)?$w(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Ft=t)}}else{if(Hf(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ae=!1,Ft=t}}}function gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Ya(t){if(t!==Ft)return!1;if(!Ae)return gv(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=Nt)){if(Hf(t))throw zw(),Error(L(418));for(;e;)$w(t,e),e=Sr(e.nextSibling)}if(gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Ft?Sr(t.stateNode.nextSibling):null;return!0}function zw(){for(var t=Nt;t;)t=Sr(t.nextSibling)}function so(){Nt=Ft=null,Ae=!1}function Ih(t){hn===null?hn=[t]:hn.push(t)}var fx=rr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Kl=$r(null),Yl=null,$i=null,Ch=null;function Th(){Ch=$i=Yl=null}function xh(t){var e=Kl.current;Re(Kl),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){Yl=t,Ch=$i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ct=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(Ch!==t)if(t={context:t,memoizedValue:e,next:null},$i===null){if(Yl===null)throw Error(L(308));$i=t,Yl.dependencies={lanes:0,firstContext:t}}else $i=$i.next=t;return e}var Zr=null;function kh(t){Zr===null?Zr=[t]:Zr.push(t)}function jw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ww(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,kh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hh(t,n)}}function mv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var i=t.updateQueue;ur=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,d=u=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=t,v=a;switch(f=e,p=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){c=h.call(p,c,f);break e}c=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,f=typeof h=="function"?h.call(p,c,f):h,f==null)break e;c=Ne({},c,f);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);pi|=s,t.lanes=s,t.memoizedState=c}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Hw=new j_.Component().refs;function qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?Ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Cr(t),o=Kn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Er(t,o,i),e!==null&&(wn(e,t,i,r),wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Cr(t),o=Kn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Er(t,o,i),e!==null&&(wn(e,t,i,r),wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Cr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(wn(e,t,r,n),wl(e,t,r))}};function yv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,r)||!Ds(i,o):!0}function Vw(t,e,n){var r=!1,i=Lr,o=e.contextType;return typeof o=="object"&&o!==null?o=tn(o):(i=kt(e)?ci:ht.current,r=e.contextTypes,o=(r=r!=null)?oo(t,i):Lr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function _v(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Hw,Rh(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=tn(o):(o=kt(e)?ci:ht.current,i.context=oo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(qf(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vu.enqueueReplaceState(i,i.state,null),Ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Hw&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wv(t){var e=t._init;return e(t._payload)}function Gw(t){function e(m,g){if(t){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Tr(m,g),m.index=0,m.sibling=null,m}function o(m,g,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,g,y,_){return g===null||g.tag!==6?(g=Ed(y,m.mode,_),g.return=m,g):(g=i(g,y),g.return=m,g)}function l(m,g,y,_){var S=y.type;return S===Di?d(m,g,y.props.children,_,y.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lr&&wv(S)===g.type)?(_=i(g,y.props),_.ref=Vo(m,g,y),_.return=m,_):(_=Tl(y.type,y.key,y.props,null,m.mode,_),_.ref=Vo(m,g,y),_.return=m,_)}function u(m,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Id(y,m.mode,_),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function d(m,g,y,_,S){return g===null||g.tag!==7?(g=oi(y,m.mode,_,S),g.return=m,g):(g=i(g,y),g.return=m,g)}function c(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ed(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ua:return y=Tl(g.type,g.key,g.props,null,m.mode,y),y.ref=Vo(m,null,g),y.return=m,y;case Ai:return g=Id(g,m.mode,y),g.return=m,g;case lr:var _=g._init;return c(m,_(g._payload),y)}if(ns(g)||$o(g))return g=oi(g,m.mode,y,null),g.return=m,g;Qa(m,g)}return null}function f(m,g,y,_){var S=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(m,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ua:return y.key===S?l(m,g,y,_):null;case Ai:return y.key===S?u(m,g,y,_):null;case lr:return S=y._init,f(m,g,S(y._payload),_)}if(ns(y)||$o(y))return S!==null?null:d(m,g,y,_,null);Qa(m,y)}return null}function p(m,g,y,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(y)||null,a(g,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ua:return m=m.get(_.key===null?y:_.key)||null,l(g,m,_,S);case Ai:return m=m.get(_.key===null?y:_.key)||null,u(g,m,_,S);case lr:var T=_._init;return p(m,g,y,T(_._payload),S)}if(ns(_)||$o(_))return m=m.get(y)||null,d(g,m,_,S,null);Qa(g,_)}return null}function h(m,g,y,_){for(var S=null,T=null,k=g,P=g=0,U=null;k!==null&&P<y.length;P++){k.index>P?(U=k,k=null):U=k.sibling;var z=f(m,k,y[P],_);if(z===null){k===null&&(k=U);break}t&&k&&z.alternate===null&&e(m,k),g=o(z,g,P),T===null?S=z:T.sibling=z,T=z,k=U}if(P===y.length)return n(m,k),Ae&&Gr(m,P),S;if(k===null){for(;P<y.length;P++)k=c(m,y[P],_),k!==null&&(g=o(k,g,P),T===null?S=k:T.sibling=k,T=k);return Ae&&Gr(m,P),S}for(k=r(m,k);P<y.length;P++)U=p(k,m,P,y[P],_),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?P:U.key),g=o(U,g,P),T===null?S=U:T.sibling=U,T=U);return t&&k.forEach(function(q){return e(m,q)}),Ae&&Gr(m,P),S}function v(m,g,y,_){var S=$o(y);if(typeof S!="function")throw Error(L(150));if(y=S.call(y),y==null)throw Error(L(151));for(var T=S=null,k=g,P=g=0,U=null,z=y.next();k!==null&&!z.done;P++,z=y.next()){k.index>P?(U=k,k=null):U=k.sibling;var q=f(m,k,z.value,_);if(q===null){k===null&&(k=U);break}t&&k&&q.alternate===null&&e(m,k),g=o(q,g,P),T===null?S=q:T.sibling=q,T=q,k=U}if(z.done)return n(m,k),Ae&&Gr(m,P),S;if(k===null){for(;!z.done;P++,z=y.next())z=c(m,z.value,_),z!==null&&(g=o(z,g,P),T===null?S=z:T.sibling=z,T=z);return Ae&&Gr(m,P),S}for(k=r(m,k);!z.done;P++,z=y.next())z=p(k,m,P,z.value,_),z!==null&&(t&&z.alternate!==null&&k.delete(z.key===null?P:z.key),g=o(z,g,P),T===null?S=z:T.sibling=z,T=z);return t&&k.forEach(function(Z){return e(m,Z)}),Ae&&Gr(m,P),S}function w(m,g,y,_){if(typeof y=="object"&&y!==null&&y.type===Di&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ua:e:{for(var S=y.key,T=g;T!==null;){if(T.key===S){if(S=y.type,S===Di){if(T.tag===7){n(m,T.sibling),g=i(T,y.props.children),g.return=m,m=g;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lr&&wv(S)===T.type){n(m,T.sibling),g=i(T,y.props),g.ref=Vo(m,T,y),g.return=m,m=g;break e}n(m,T);break}else e(m,T);T=T.sibling}y.type===Di?(g=oi(y.props.children,m.mode,_,y.key),g.return=m,m=g):(_=Tl(y.type,y.key,y.props,null,m.mode,_),_.ref=Vo(m,g,y),_.return=m,m=_)}return s(m);case Ai:e:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(m,g.sibling),g=i(g,y.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=Id(y,m.mode,_),g.return=m,m=g}return s(m);case lr:return T=y._init,w(m,g,T(y._payload),_)}if(ns(y))return h(m,g,y,_);if($o(y))return v(m,g,y,_);Qa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,y),g.return=m,m=g):(n(m,g),g=Ed(y,m.mode,_),g.return=m,m=g),s(m)):n(m,g)}return w}var ao=Gw(!0),qw=Gw(!1),da={},Nn=$r(da),Ls=$r(da),Fs=$r(da);function ei(t){if(t===da)throw Error(L(174));return t}function Ph(t,e){switch(Ce(Fs,e),Ce(Ls,t),Ce(Nn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tf(e,t)}Re(Nn),Ce(Nn,e)}function lo(){Re(Nn),Re(Ls),Re(Fs)}function Kw(t){ei(Fs.current);var e=ei(Nn.current),n=Tf(e,t.type);e!==n&&(Ce(Ls,t),Ce(Nn,n))}function Ah(t){Ls.current===t&&(Re(Nn),Re(Ls))}var De=$r(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function Dh(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var bl=rr.ReactCurrentDispatcher,yd=rr.ReactCurrentBatchConfig,fi=0,Oe=null,je=null,Ge=null,Jl=!1,ps=!1,Bs=0,px=0;function lt(){throw Error(L(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function Nh(t,e,n,r,i,o){if(fi=o,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?vx:yx,t=n(r,i),ps){o=0;do{if(ps=!1,Bs=0,25<=o)throw Error(L(301));o+=1,Ge=je=null,e.updateQueue=null,bl.current=_x,t=n(r,i)}while(ps)}if(bl.current=Zl,e=je!==null&&je.next!==null,fi=0,Ge=je=Oe=null,Jl=!1,e)throw Error(L(300));return t}function Mh(){var t=Bs!==0;return Bs=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Oe.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function nn(){if(je===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ge===null?Oe.memoizedState:Ge.next;if(e!==null)Ge=e,je=t;else{if(t===null)throw Error(L(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ge===null?Oe.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Us(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=nn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((fi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,Oe.lanes|=d,pi|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Sn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Oe.lanes|=o,pi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=nn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Sn(o,e.memoizedState)||(Ct=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Yw(){}function Qw(t,e){var n=Oe,r=nn(),i=e(),o=!Sn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ct=!0),r=r.queue,Lh(Zw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,$s(9,Jw.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(L(349));(fi&30)!==0||Xw(n,e,i)}return i}function Xw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jw(t,e,n,r){e.value=n,e.getSnapshot=r,eb(e)&&tb(t)}function Zw(t,e,n){return n(function(){eb(e)&&tb(t)})}function eb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function tb(t){var e=Jn(t,1);e!==null&&wn(e,t,1,-1)}function bv(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,Oe,t),[e.memoizedState,t]}function $s(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nb(){return nn().memoizedState}function Sl(t,e,n,r){var i=Rn();Oe.flags|=t,i.memoizedState=$s(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var i=nn();r=r===void 0?null:r;var o=void 0;if(je!==null){var s=je.memoizedState;if(o=s.destroy,r!==null&&Oh(r,s.deps)){i.memoizedState=$s(e,n,o,r);return}}Oe.flags|=t,i.memoizedState=$s(1|e,n,o,r)}function Sv(t,e){return Sl(8390656,8,t,e)}function Lh(t,e){return Gu(2048,8,t,e)}function rb(t,e){return Gu(4,2,t,e)}function ib(t,e){return Gu(4,4,t,e)}function ob(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sb(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,ob.bind(null,e,t),n)}function Fh(){}function ab(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lb(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ub(t,e,n){return(fi&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n):(Sn(n,e)||(n=fw(),Oe.lanes|=n,pi|=n,t.baseState=!0),e)}function hx(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=yd.transition;yd.transition={};try{t(!1),e()}finally{ye=n,yd.transition=r}}function cb(){return nn().memoizedState}function gx(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},db(t))fb(e,n);else if(n=jw(t,e,n,r),n!==null){var i=yt();wn(n,t,r,i),pb(n,e,r)}}function mx(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(db(t))fb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,s)){var l=e.interleaved;l===null?(i.next=i,kh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jw(t,e,i,r),n!==null&&(i=yt(),wn(n,t,r,i),pb(n,e,r))}}function db(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function fb(t,e){ps=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pb(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hh(t,n)}}var Zl={readContext:tn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},vx={readContext:tn,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:Sv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,ob.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gx.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:bv,useDebugValue:Fh,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=bv(!1),e=t[0];return t=hx.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=Rn();if(Ae){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Ke===null)throw Error(L(349));(fi&30)!==0||Xw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Sv(Zw.bind(null,r,o,t),[t]),r.flags|=2048,$s(9,Jw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Rn(),e=Ke.identifierPrefix;if(Ae){var n=Wn,r=jn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yx={readContext:tn,useCallback:ab,useContext:tn,useEffect:Lh,useImperativeHandle:sb,useInsertionEffect:rb,useLayoutEffect:ib,useMemo:lb,useReducer:_d,useRef:nb,useState:function(){return _d(Us)},useDebugValue:Fh,useDeferredValue:function(t){var e=nn();return ub(e,je.memoizedState,t)},useTransition:function(){var t=_d(Us)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Qw,useId:cb,unstable_isNewReconciler:!1},_x={readContext:tn,useCallback:ab,useContext:tn,useEffect:Lh,useImperativeHandle:sb,useInsertionEffect:rb,useLayoutEffect:ib,useMemo:lb,useReducer:wd,useRef:nb,useState:function(){return wd(Us)},useDebugValue:Fh,useDeferredValue:function(t){var e=nn();return je===null?e.memoizedState=t:ub(e,je.memoizedState,t)},useTransition:function(){var t=wd(Us)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Qw,useId:cb,unstable_isNewReconciler:!1};function uo(t,e){try{var n="",r=e;do n+=qC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function hb(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,op=r),Yf(t,e)},n}function gb(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yf(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ev(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function Iv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cv(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var bx=rr.ReactCurrentOwner,Ct=!1;function vt(t,e,n,r){e.child=t===null?qw(e,null,n,r):ao(e,t.child,n,r)}function Tv(t,e,n,r,i){n=n.render;var o=e.ref;return Qi(e,i),r=Nh(t,e,n,r,o,i),n=Mh(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ae&&n&&Sh(e),e.flags|=1,vt(t,e,r,i),e.child)}function xv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Vh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,mb(t,e,o,r,i)):(t=Tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(s,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Tr(o,r),t.ref=e.ref,t.return=e,e.child=t}function mb(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ds(o,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return Qf(t,e,n,r,i)}function vb(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ji,Ot),Ot|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(ji,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(ji,Ot),Ot|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ce(ji,Ot),Ot|=r;return vt(t,e,i,n),e.child}function yb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,r,i){var o=kt(n)?ci:ht.current;return o=oo(e,o),Qi(e,i),n=Nh(t,e,n,r,o,i),r=Mh(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ae&&r&&Sh(e),e.flags|=1,vt(t,e,n,i),e.child)}function kv(t,e,n,r,i){if(kt(n)){var o=!0;Vl(e)}else o=!1;if(Qi(e,i),e.stateNode===null)El(t,e),Vw(e,n,r),Kf(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=kt(n)?ci:ht.current,u=oo(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_v(e,s,r,u),ur=!1;var f=e.memoizedState;s.state=f,Ql(e,r,s,i),l=e.memoizedState,a!==r||f!==l||xt.current||ur?(typeof d=="function"&&(qf(e,n,d,r),l=e.memoizedState),(a=ur||yv(e,n,a,r,f,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Ww(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),s.props=u,c=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=kt(n)?ci:ht.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||f!==l)&&_v(e,s,r,l),ur=!1,f=e.memoizedState,s.state=f,Ql(e,r,s,i);var h=e.memoizedState;a!==c||f!==h||xt.current||ur?(typeof p=="function"&&(qf(e,n,p,r),h=e.memoizedState),(u=ur||yv(e,n,u,r,f,h,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=h),s.props=r,s.state=h,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Xf(t,e,n,r,o,i)}function Xf(t,e,n,r,i,o){yb(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&pv(e,n,!1),Zn(t,e,o);r=e.stateNode,bx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ao(e,t.child,null,o),e.child=ao(e,null,a,o)):vt(t,e,a,o),e.memoizedState=r.state,i&&pv(e,n,!0),e.child}function _b(t){var e=t.stateNode;e.pendingContext?fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(t,e.context,!1),Ph(t,e.containerInfo)}function Rv(t,e,n,r,i){return so(),Ih(i),e.flags|=256,vt(t,e,n,r),e.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function wb(t,e,n){var r=e.pendingProps,i=De.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(De,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yu(s,r,0,null),t=oi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Zf(n),e.memoizedState=Jf,t):Bh(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sx(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tr(a,o):(o=oi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Zf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Jf,r}return o=t.child,t=o.sibling,r=Tr(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bh(t,e){return e=Yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,r){return r!==null&&Ih(r),ao(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sx(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=bd(Error(L(422))),Xa(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Yu({mode:"visible",children:r.children},i,0,null),o=oi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&ao(e,t.child,null,s),e.child.memoizedState=Zf(s),e.memoizedState=Jf,o);if((e.mode&1)===0)return Xa(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=bd(o,r,void 0),Xa(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ct||a){if(r=Ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jn(t,i),wn(r,t,i,-1))}return Hh(),r=bd(Error(L(421))),Xa(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Mx.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Nt=Sr(i.nextSibling),Ft=e,Ae=!0,hn=null,t!==null&&(Kt[Yt++]=jn,Kt[Yt++]=Wn,Kt[Yt++]=di,jn=t.id,Wn=t.overflow,di=e),e=Bh(e,r.children),e.flags|=4096,e)}function Pv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function Sd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bb(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(vt(t,e,r.children,n),r=De.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pv(t,n,e);else if(t.tag===19)Pv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(De,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sd(e,!0,n,null,o);break;case"together":Sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:_b(e),so();break;case 5:Kw(e);break;case 1:kt(e.type)&&Vl(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(Kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(De,De.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?wb(t,e,n):(Ce(De,De.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);Ce(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return bb(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,vb(t,e,n)}return Zn(t,e,n)}var Sb,ep,Eb,Ib;Sb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};Eb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ei(Nn.current);var o=null;switch(n){case"input":i=Sf(t,i),r=Sf(t,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=Cf(t,i),r=Cf(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wl)}xf(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Ib=function(t,e,n,r){n!==r&&(e.flags|=4)};function Go(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ix(t,e,n){var r=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return kt(e.type)&&Hl(),ut(e),null;case 3:return r=e.stateNode,lo(),Re(xt),Re(ht),Dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,hn!==null&&(lp(hn),hn=null))),ep(t,e),ut(e),null;case 5:Ah(e);var i=ei(Fs.current);if(n=e.type,t!==null&&e.stateNode!=null)Eb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ut(e),null}if(t=ei(Nn.current),Ya(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Pn]=e,r[Ms]=o,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)Te(is[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Um(r,o),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Te("invalid",r);break;case"textarea":zm(r,o),Te("invalid",r)}xf(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ka(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ka(r.textContent,a,t),i=["children",""+a]):Cs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Te("scroll",r)}switch(n){case"input":$a(r),$m(r,o,!0);break;case"textarea":$a(r),jm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Pn]=e,t[Ms]=r,Sb(t,e,!1,!1),e.stateNode=t;e:{switch(s=kf(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)Te(is[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Um(t,r),i=Sf(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Te("invalid",t);break;case"textarea":zm(t,r),i=Cf(t,r),Te("invalid",t);break;default:i=r}xf(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ew(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&J_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Te("scroll",t):l!=null&&lh(t,o,l,s))}switch(n){case"input":$a(t),$m(t,r,!1);break;case"textarea":$a(t),jm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Gi(t,!!r.multiple,o,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)Ib(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=ei(Fs.current),ei(Nn.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(o=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return ut(e),null;case 13:if(Re(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Nt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)zw(),so(),e.flags|=98560,o=!1;else if(o=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(L(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Pn]=e}else so(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ut(e),o=!1}else hn!==null&&(lp(hn),hn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(De.current&1)!==0?He===0&&(He=3):Hh())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return lo(),ep(t,e),t===null&&Os(e.stateNode.containerInfo),ut(e),null;case 10:return xh(e.type._context),ut(e),null;case 17:return kt(e.type)&&Hl(),ut(e),null;case 19:if(Re(De),o=e.memoizedState,o===null)return ut(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Go(o,!1);else{if(He!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Xl(t),s!==null){for(e.flags|=128,Go(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(De,De.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ue()>co&&(e.flags|=128,r=!0,Go(o,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ae)return ut(e),null}else 2*Ue()-o.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,r=!0,Go(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ue(),e.sibling=null,n=De.current,Ce(De,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Wh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ot&1073741824)!==0&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function Cx(t,e){switch(Eh(e),e.tag){case 1:return kt(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Re(xt),Re(ht),Dh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ah(e),null;case 13:if(Re(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(De),null;case 4:return lo(),null;case 10:return xh(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Ja=!1,dt=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,H=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Av=!1;function xx(t,e){if(Bf=$l,t=kw(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=s),f===o&&++d===r&&(l=s),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},$l=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var h=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,w=h.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:fn(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(_){Me(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return h=Av,Av=!1,h}function hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&tp(e,n,o)}i=i.next}while(i!==r)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cb(t){var e=t.alternate;e!==null&&(t.alternate=null,Cb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Ms],delete e[jf],delete e[ux],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tb(t){return t.tag===5||t.tag===3||t.tag===4}function Dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var nt=null,pn=!1;function sr(t,e,n){for(n=n.child;n!==null;)xb(t,e,n),n=n.sibling}function xb(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:dt||zi(n,e);case 6:var r=nt,i=pn;nt=null,sr(t,e,n),nt=r,pn=i,nt!==null&&(pn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(pn?(t=nt,n=n.stateNode,t.nodeType===8?gd(t.parentNode,n):t.nodeType===1&&gd(t,n),Ps(t)):gd(nt,n.stateNode));break;case 4:r=nt,i=pn,nt=n.stateNode.containerInfo,pn=!0,sr(t,e,n),nt=r,pn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&tp(n,e,s),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!dt&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,sr(t,e,n),dt=r):sr(t,e,n);break;default:sr(t,e,n)}}function Ov(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(r){var i=Lx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,pn=!1;break e;case 3:nt=a.stateNode.containerInfo,pn=!0;break e;case 4:nt=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(nt===null)throw Error(L(160));xb(o,s,i),nt=null,pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kb(e,t),e=e.sibling}function kb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),xn(t),r&4){try{hs(3,t,t.return),qu(3,t)}catch(v){Me(t,t.return,v)}try{hs(5,t,t.return)}catch(v){Me(t,t.return,v)}}break;case 1:un(e,t),xn(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(un(e,t),xn(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{Ts(i,"")}catch(v){Me(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Y_(i,o),kf(a,s);var u=kf(a,o);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?ew(i,c):d==="dangerouslySetInnerHTML"?J_(i,c):d==="children"?Ts(i,c):lh(i,d,c,u)}switch(a){case"input":Ef(i,o);break;case"textarea":Q_(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Gi(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Gi(i,!!o.multiple,o.defaultValue,!0):Gi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ms]=o}catch(v){Me(t,t.return,v)}}break;case 6:if(un(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){Me(t,t.return,v)}}break;case 3:if(un(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(v){Me(t,t.return,v)}break;case 4:un(e,t),xn(t);break;case 13:un(e,t),xn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zh=Ue())),r&4&&Ov(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||d,un(e,t),dt=u):un(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(H=t,d=t.child;d!==null;){for(c=H=d;H!==null;){switch(f=H,p=f.child,f.tag){case 0:case 11:case 14:case 15:hs(4,f,f.return);break;case 1:zi(f,f.return);var h=f.stateNode;if(typeof h.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,h.props=e.memoizedProps,h.state=e.memoizedState,h.componentWillUnmount()}catch(v){Me(r,n,v)}}break;case 5:zi(f,f.return);break;case 22:if(f.memoizedState!==null){Mv(c);continue}}p!==null?(p.return=f,H=p):Mv(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Z_("display",s))}catch(v){Me(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Me(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:un(e,t),xn(t),r&4&&Ov(t);break;case 21:break;default:un(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tb(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ts(i,""),r.flags&=-33);var o=Dv(t);ip(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Dv(t);rp(t,a,s);break;default:throw Error(L(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kx(t,e,n){H=t,Rb(t)}function Rb(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ja;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=Ja;var u=dt;if(Ja=s,(dt=l)&&!u)for(H=i;H!==null;)s=H,l=s.child,s.tag===22&&s.memoizedState!==null?Lv(i):l!==null?(l.return=s,H=l):Lv(i);for(;o!==null;)H=o,Rb(o),o=o.sibling;H=i,Ja=a,dt=u}Nv(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,H=o):Nv(t)}}function Nv(t){for(;H!==null;){var e=H;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:dt||qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&vv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ps(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}dt||e.flags&512&&np(e)}catch(f){Me(e,e.return,f)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Mv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Lv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(l){Me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Me(e,i,l)}}var o=e.return;try{np(e)}catch(l){Me(e,o,l)}break;case 5:var s=e.return;try{np(e)}catch(l){Me(e,s,l)}}}catch(l){Me(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var Rx=Math.ceil,eu=rr.ReactCurrentDispatcher,Uh=rr.ReactCurrentOwner,Zt=rr.ReactCurrentBatchConfig,he=0,Ke=null,$e=null,st=0,Ot=0,ji=$r(0),He=0,zs=null,pi=0,Ku=0,$h=0,gs=null,It=null,zh=0,co=1/0,$n=null,tu=!1,op=null,Ir=null,Za=!1,vr=null,nu=0,ms=0,sp=null,Il=-1,Cl=0;function yt(){return(he&6)!==0?Ue():Il!==-1?Il:Il=Ue()}function Cr(t){return(t.mode&1)===0?1:(he&2)!==0&&st!==0?st&-st:fx.transition!==null?(Cl===0&&(Cl=fw()),Cl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:_w(t.type)),t)}function wn(t,e,n,r){if(50<ms)throw ms=0,sp=null,Error(L(185));la(t,n,r),((he&2)===0||t!==Ke)&&(t===Ke&&((he&2)===0&&(Ku|=n),He===4&&dr(t,st)),Rt(t,r),n===1&&he===0&&(e.mode&1)===0&&(co=Ue()+500,Hu&&zr()))}function Rt(t,e){var n=t.callbackNode;fT(t,e);var r=Ul(t,t===Ke?st:0);if(r===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?dx(Fv.bind(null,t)):Bw(Fv.bind(null,t)),ax(function(){(he&6)===0&&zr()}),n=null;else{switch(pw(r)){case 1:n=ph;break;case 4:n=cw;break;case 16:n=Bl;break;case 536870912:n=dw;break;default:n=Bl}n=Fb(n,Pb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pb(t,e){if(Il=-1,Cl=0,(he&6)!==0)throw Error(L(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Ul(t,t===Ke?st:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ru(t,r);else{e=r;var i=he;he|=2;var o=Db();(Ke!==t||st!==e)&&($n=null,co=Ue()+500,ii(t,e));do try{Dx();break}catch(a){Ab(t,a)}while(1);Th(),eu.current=o,he=i,$e!==null?e=0:(Ke=null,st=0,e=He)}if(e!==0){if(e===2&&(i=Of(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=zs,ii(t,0),dr(t,r),Rt(t,Ue()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Px(i)&&(e=ru(t,r),e===2&&(o=Of(t),o!==0&&(r=o,e=ap(t,o))),e===1))throw n=zs,ii(t,0),dr(t,r),Rt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:qr(t,It,$n);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=zh+500-Ue(),10<e)){if(Ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zf(qr.bind(null,t,It,$n),e);break}qr(t,It,$n);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-_n(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rx(r/1960))-r,10<r){t.timeoutHandle=zf(qr.bind(null,t,It,$n),r);break}qr(t,It,$n);break;case 5:qr(t,It,$n);break;default:throw Error(L(329))}}}return Rt(t,Ue()),t.callbackNode===n?Pb.bind(null,t):null}function ap(t,e){var n=gs;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=ru(t,e),t!==2&&(e=It,It=n,e!==null&&lp(e)),t}function lp(t){It===null?It=t:It.push.apply(It,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Sn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~$h,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function Fv(t){if((he&6)!==0)throw Error(L(327));Xi();var e=Ul(t,0);if((e&1)===0)return Rt(t,Ue()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=Of(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=zs,ii(t,0),dr(t,e),Rt(t,Ue()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,It,$n),Rt(t,Ue()),null}function jh(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(co=Ue()+500,Hu&&zr())}}function hi(t){vr!==null&&vr.tag===0&&(he&6)===0&&Xi();var e=he;he|=1;var n=Zt.transition,r=ye;try{if(Zt.transition=null,ye=1,t)return t()}finally{ye=r,Zt.transition=n,he=e,(he&6)===0&&zr()}}function Wh(){Ot=ji.current,Re(ji)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Eh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:lo(),Re(xt),Re(ht),Dh();break;case 5:Ah(r);break;case 4:lo();break;case 13:Re(De);break;case 19:Re(De);break;case 10:xh(r.type._context);break;case 22:case 23:Wh()}n=n.return}if(Ke=t,$e=t=Tr(t.current,null),st=Ot=e,He=0,zs=null,$h=Ku=pi=0,It=gs=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Zr=null}return t}function Ab(t,e){do{var n=$e;try{if(Th(),bl.current=Zl,Jl){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jl=!1}if(fi=0,Ge=je=Oe=null,ps=!1,Bs=0,Uh.current=null,n===null||n.return===null){He=1,zs=e,$e=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=st,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Iv(s);if(p!==null){p.flags&=-257,Cv(p,s,a,o,e),p.mode&1&&Ev(o,u,e),e=p,l=u;var h=e.updateQueue;if(h===null){var v=new Set;v.add(l),e.updateQueue=v}else h.add(l);break e}else{if((e&1)===0){Ev(o,u,e),Hh();break e}l=Error(L(426))}}else if(Ae&&a.mode&1){var w=Iv(s);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Cv(w,s,a,o,e),Ih(uo(l,a));break e}}o=l=uo(l,a),He!==4&&(He=2),gs===null?gs=[o]:gs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=hb(o,l,e);mv(o,m);break e;case 1:a=l;var g=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ir===null||!Ir.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=gb(o,a,e);mv(o,_);break e}}o=o.return}while(o!==null)}Nb(n)}catch(S){e=S,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Db(){var t=eu.current;return eu.current=Zl,t===null?Zl:t}function Hh(){(He===0||He===3||He===2)&&(He=4),Ke===null||(pi&268435455)===0&&(Ku&268435455)===0||dr(Ke,st)}function ru(t,e){var n=he;he|=2;var r=Db();(Ke!==t||st!==e)&&($n=null,ii(t,e));do try{Ax();break}catch(i){Ab(t,i)}while(1);if(Th(),he=n,eu.current=r,$e!==null)throw Error(L(261));return Ke=null,st=0,He}function Ax(){for(;$e!==null;)Ob($e)}function Dx(){for(;$e!==null&&!rT();)Ob($e)}function Ob(t){var e=Lb(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?Nb(t):$e=e,Uh.current=null}function Nb(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Ix(n,e,Ot),n!==null){$e=n;return}}else{if(n=Cx(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function qr(t,e,n){var r=ye,i=Zt.transition;try{Zt.transition=null,ye=1,Ox(t,e,n,r)}finally{Zt.transition=i,ye=r}return null}function Ox(t,e,n,r){do Xi();while(vr!==null);if((he&6)!==0)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(pT(t,o),t===Ke&&($e=Ke=null,st=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Za||(Za=!0,Fb(Bl,function(){return Xi(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Zt.transition,Zt.transition=null;var s=ye;ye=1;var a=he;he|=4,Uh.current=null,xx(t,n),kb(n,t),ZT(Uf),$l=!!Bf,Uf=Bf=null,t.current=n,kx(n),iT(),he=a,ye=s,Zt.transition=o}else t.current=n;if(Za&&(Za=!1,vr=t,nu=i),o=t.pendingLanes,o===0&&(Ir=null),aT(n.stateNode),Rt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tu)throw tu=!1,t=op,op=null,t;return(nu&1)!==0&&t.tag!==0&&Xi(),o=t.pendingLanes,(o&1)!==0?t===sp?ms++:(ms=0,sp=t):ms=0,zr(),null}function Xi(){if(vr!==null){var t=pw(nu),e=Zt.transition,n=ye;try{if(Zt.transition=null,ye=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,nu=0,(he&6)!==0)throw Error(L(331));var i=he;for(he|=4,H=t.current;H!==null;){var o=H,s=o.child;if((H.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:hs(8,d,o)}var c=d.child;if(c!==null)c.return=d,H=c;else for(;H!==null;){d=H;var f=d.sibling,p=d.return;if(Cb(d),d===u){H=null;break}if(f!==null){f.return=p,H=f;break}H=p}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:hs(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,H=m;break e}H=o.return}}var g=t.current;for(H=g;H!==null;){s=H;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,H=y;else e:for(s=g;H!==null;){if(a=H,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:qu(9,a)}}catch(S){Me(a,a.return,S)}if(a===s){H=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,H=_;break e}H=a.return}}if(he=i,zr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{ye=n,Zt.transition=e}}return!1}function Bv(t,e,n){e=uo(n,e),e=hb(t,e,1),t=Er(t,e,1),e=yt(),t!==null&&(la(t,1,e),Rt(t,e))}function Me(t,e,n){if(t.tag===3)Bv(t,t,n);else for(;e!==null;){if(e.tag===3){Bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=uo(n,t),t=gb(e,t,1),e=Er(e,t,1),t=yt(),e!==null&&(la(e,1,t),Rt(e,t));break}}e=e.return}}function Nx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(st&n)===n&&(He===4||He===3&&(st&130023424)===st&&500>Ue()-zh?ii(t,0):$h|=n),Rt(t,e)}function Mb(t,e){e===0&&((t.mode&1)===0?e=1:(e=Wa,Wa<<=1,(Wa&130023424)===0&&(Wa=4194304)));var n=yt();t=Jn(t,e),t!==null&&(la(t,e,n),Rt(t,n))}function Mx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mb(t,n)}function Lx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),Mb(t,n)}var Lb;Lb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Ct=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ct=!1,Ex(t,e,n);Ct=(t.flags&131072)!==0}else Ct=!1,Ae&&(e.flags&1048576)!==0&&Uw(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var i=oo(e,ht.current);Qi(e,n),i=Nh(null,e,r,t,i,n);var o=Mh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(o=!0,Vl(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rh(e),i.updater=Vu,e.stateNode=i,i._reactInternals=e,Kf(e,r,t,n),e=Xf(null,e,r,!0,o,n)):(e.tag=0,Ae&&o&&Sh(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Bx(r),t=fn(r,t),i){case 0:e=Qf(null,e,r,t,n);break e;case 1:e=kv(null,e,r,t,n);break e;case 11:e=Tv(null,e,r,t,n);break e;case 14:e=xv(null,e,r,fn(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),kv(t,e,r,i,n);case 3:e:{if(_b(e),t===null)throw Error(L(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Ww(t,e),Ql(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=uo(Error(L(423)),e),e=Rv(t,e,r,n,i);break e}else if(r!==i){i=uo(Error(L(424)),e),e=Rv(t,e,r,n,i);break e}else for(Nt=Sr(e.stateNode.containerInfo.firstChild),Ft=e,Ae=!0,hn=null,n=qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=Zn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Kw(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,$f(r,i)?s=null:o!==null&&$f(r,o)&&(e.flags|=32),yb(t,e),vt(t,e,s,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return wb(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ao(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Tv(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ce(Kl,r._currentValue),r._currentValue=s,o!==null)if(Sn(o.value,s)){if(o.children===i.children&&!xt.current){e=Zn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Kn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Gf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qi(e,n),i=tn(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),xv(t,e,r,i,n);case 15:return mb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),El(t,e),e.tag=1,kt(r)?(t=!0,Vl(e)):t=!1,Qi(e,n),Vw(e,r,i),Kf(e,r,i,n),Xf(null,e,r,!0,t,n);case 19:return bb(t,e,n);case 22:return vb(t,e,n)}throw Error(L(156,e.tag))};function Fb(t,e){return uw(t,e)}function Fx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new Fx(t,e,n,r)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bx(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ch)return 11;if(t===dh)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Vh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Di:return oi(n.children,i,o,e);case uh:s=8,i|=8;break;case yf:return t=Qt(12,n,e,i|2),t.elementType=yf,t.lanes=o,t;case _f:return t=Qt(13,n,e,i),t.elementType=_f,t.lanes=o,t;case wf:return t=Qt(19,n,e,i),t.elementType=wf,t.lanes=o,t;case G_:return Yu(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H_:s=10;break e;case V_:s=9;break e;case ch:s=11;break e;case dh:s=14;break e;case lr:s=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Qt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function oi(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Yu(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=G_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ed(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Id(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ux(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,r,i,o,s,a,l){return t=new Ux(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Qt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(o),t}function $x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bb(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ci(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(kt(n))return Fw(t,n,e)}return e}function Ub(t,e,n,r,i,o,s,a,l){return t=Gh(n,r,!0,t,i,o,s,a,l),t.context=Bb(null),n=t.current,r=yt(),i=Cr(n),o=Kn(r,i),o.callback=e!=null?e:null,Er(n,o,i),t.current.lanes=i,la(t,i,r),Rt(t,r),t}function Qu(t,e,n,r){var i=e.current,o=yt(),s=Cr(i);return n=Bb(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,s),t!==null&&(wn(t,i,s,o),wl(t,i,s)),s}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qh(t,e){Uv(t,e),(t=t.alternate)&&Uv(t,e)}function zx(){return null}var $b=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kh(t){this._internalRoot=t}Xu.prototype.render=Kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Qu(t,e,null,null)};Xu.prototype.unmount=Kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){Qu(null,t,null,null)}),e[Xn]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&yw(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $v(){}function jx(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=iu(s);o.call(u)}}var s=Ub(e,r,t,0,null,!1,!1,"",$v);return t._reactRootContainer=s,t[Xn]=s.current,Os(t.nodeType===8?t.parentNode:t),hi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=iu(l);a.call(u)}}var l=Gh(t,0,!1,null,null,!1,!1,"",$v);return t._reactRootContainer=l,t[Xn]=l.current,Os(t.nodeType===8?t.parentNode:t),hi(function(){Qu(e,l,n,r)}),l}function Zu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=iu(s);a.call(l)}}Qu(e,s,t,i)}else s=jx(n,e,t,i,r);return iu(s)}hw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rs(e.pendingLanes);n!==0&&(hh(e,n|1),Rt(e,Ue()),(he&6)===0&&(co=Ue()+500,zr()))}break;case 13:hi(function(){var r=Jn(t,1);if(r!==null){var i=yt();wn(r,t,1,i)}}),qh(t,1)}};gh=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=yt();wn(e,t,134217728,n)}qh(t,134217728)}};gw=function(t){if(t.tag===13){var e=Cr(t),n=Jn(t,e);if(n!==null){var r=yt();wn(n,t,e,r)}qh(t,e)}};mw=function(){return ye};vw=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Pf=function(t,e,n){switch(e){case"input":if(Ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wu(r);if(!i)throw Error(L(90));K_(r),Ef(r,i)}}}break;case"textarea":Q_(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};rw=jh;iw=hi;var Wx={usingClientEntryPoint:!1,Events:[ca,Li,Wu,tw,nw,jh]},qo={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hx={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aw(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Uu=el.inject(Hx),On=el}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(L(200));return $x(t,e,null,n)};Ht.createRoot=function(t,e){if(!Yh(t))throw Error(L(299));var n=!1,r="",i=$b;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Os(t.nodeType===8?t.parentNode:t),new Kh(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=aw(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return hi(t)};Ht.hydrate=function(t,e,n){if(!Ju(e))throw Error(L(200));return Zu(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=$b;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Ub(e,null,t,1,n!=null?n:null,i,!1,o,s),t[Xn]=e.current,Os(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xu(e)};Ht.render=function(t,e,n){if(!Ju(e))throw Error(L(200));return Zu(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(L(40));return t._reactRootContainer?(hi(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Ht.unstable_batchedUpdates=jh;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Zu(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ht})(Bu);const Vx=th(Bu.exports);var zb,zv=Bu.exports;zb=zv.createRoot,zv.hydrateRoot;const Gx="modulepreload",qx=function(t){return"/"+t},jv={},Kx=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=qx(o),o in jv)return;jv[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const c=i[d];if(c.href===o&&(!s||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Gx,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,c)=>{u.addEventListener("load",d),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},js.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const Wv="popstate";function Yx(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return up("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jb(i)}return Xx(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Qx(){return Math.random().toString(36).substr(2,8)}function Hv(t,e){return{usr:t.state,key:t.key,idx:e}}function up(t,e,n,r){return n===void 0&&(n=null),js({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Co(e):e,{state:n,key:e&&e.key||r||Qx()})}function jb(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Xx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=yr.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(js({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=yr.Pop;let w=d(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function f(w,m){a=yr.Push;let g=up(v.location,w,m);n&&n(g,w),u=d()+1;let y=Hv(g,u),_=v.createHref(g);try{s.pushState(y,"",_)}catch{i.location.assign(_)}o&&l&&l({action:a,location:v.location,delta:1})}function p(w,m){a=yr.Replace;let g=up(v.location,w,m);n&&n(g,w),u=d();let y=Hv(g,u),_=v.createHref(g);s.replaceState(y,"",_),o&&l&&l({action:a,location:v.location,delta:0})}function h(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:jb(w);return Ye(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let v={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wv,c),l=w,()=>{i.removeEventListener(Wv,c),l=null}},createHref(w){return e(i,w)},createURL:h,encodeLocation(w){let m=h(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(w){return s.go(w)}};return v}var Vv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vv||(Vv={}));function Jx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Co(e):e,i=Vb(r.pathname||"/",n);if(i==null)return null;let o=Wb(t);Zx(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=lk(o[a],dk(i));return s}function Wb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=si([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wb(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:sk(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Hb(o.path))i(o,s,l)}),e}function Hb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Hb(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Zx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ak(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ek=/^:\w+$/,tk=3,nk=2,rk=1,ik=10,ok=-2,Gv=t=>t==="*";function sk(t,e){let n=t.split("/"),r=n.length;return n.some(Gv)&&(r+=ok),e&&(r+=nk),n.filter(i=>!Gv(i)).reduce((i,o)=>i+(ek.test(o)?tk:o===""?rk:ik),r)}function ak(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lk(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=uk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:si([i,d.pathname]),pathnameBase:vk(si([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=si([i,d.pathnameBase]))}return o}function uk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ck(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";s=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=fk(a[c]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function ck(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dk(t){try{return decodeURI(t)}catch(e){return Qh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fk(t,e){try{return decodeURIComponent(t)}catch(n){return Qh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Vb(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Co(t):t;return{pathname:n?n.startsWith("/")?n:hk(n,e):e,search:yk(r),hash:_k(i)}}function hk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Co(t):(i=js({},t),Ye(!i.pathname||!i.pathname.includes("?"),Cd("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Cd("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Cd("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let c=e.length-1;if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=pk(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const si=t=>t.join("/").replace(/\/\/+/g,"/"),vk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_k=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bk=["post","put","patch","delete"];[...bk];var ec={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=A.exports,Ek=Symbol.for("react.element"),Ik=Symbol.for("react.fragment"),Ck=Object.prototype.hasOwnProperty,Tk=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xk={key:!0,ref:!0,__self:!0,__source:!0};function Gb(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Ck.call(e,r)&&!xk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ek,type:t,key:o,ref:s,props:i,_owner:Tk.current}}tc.Fragment=Ik;tc.jsx=Gb;tc.jsxs=Gb;(function(t){t.exports=tc})(ec);const En=ec.exports.Fragment,x=ec.exports.jsx,ue=ec.exports.jsxs;/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Rk=typeof Object.is=="function"?Object.is:kk,{useState:Pk,useEffect:Ak,useLayoutEffect:Dk,useDebugValue:Ok}=mf;function Nk(t,e,n){const r=e(),[{inst:i},o]=Pk({inst:{value:r,getSnapshot:e}});return Dk(()=>{i.value=r,i.getSnapshot=e,Td(i)&&o({inst:i})},[t,r,e]),Ak(()=>(Td(i)&&o({inst:i}),t(()=>{Td(i)&&o({inst:i})})),[t]),Ok(r),r}function Td(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Rk(n,r)}catch{return!0}}function Mk(t,e,n){return e()}const Lk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fk=!Lk,Bk=Fk?Mk:Nk;"useSyncExternalStore"in mf&&(t=>t.useSyncExternalStore)(mf);const qb=A.exports.createContext(null),Kb=A.exports.createContext(null),Xh=A.exports.createContext(null),nc=A.exports.createContext(null),fa=A.exports.createContext({outlet:null,matches:[]}),Yb=A.exports.createContext(null);function cp(){return cp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cp.apply(this,arguments)}function rc(){return A.exports.useContext(nc)!=null}function Qb(){return rc()||Ye(!1),A.exports.useContext(nc).location}function Uk(){rc()||Ye(!1);let{basename:t,navigator:e}=A.exports.useContext(Xh),{matches:n}=A.exports.useContext(fa),{pathname:r}=Qb(),i=JSON.stringify(gk(n).map(a=>a.pathnameBase)),o=A.exports.useRef(!1);return A.exports.useEffect(()=>{o.current=!0}),A.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=mk(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:si([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function $k(t,e){rc()||Ye(!1);let{navigator:n}=A.exports.useContext(Xh),r=A.exports.useContext(Kb),{matches:i}=A.exports.useContext(fa),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Qb(),u;if(e){var d;let v=typeof e=="string"?Co(e):e;a==="/"||((d=v.pathname)==null?void 0:d.startsWith(a))||Ye(!1),u=v}else u=l;let c=u.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",p=Jx(t,{pathname:f}),h=Hk(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:si([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:si([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&h?x(nc.Provider,{value:{location:cp({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:yr.Pop},children:h}):h}function zk(){let t=Kk(),e=wk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return ue(En,{children:[x("h2",{children:"Unexpected Application Error!"}),x("h3",{style:{fontStyle:"italic"},children:e}),n?x("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class jk extends A.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x(fa.Provider,{value:this.props.routeContext,children:x(Yb.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Wk(t){let{routeContext:e,match:n,children:r}=t,i=A.exports.useContext(qb);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x(fa.Provider,{value:e,children:r})}function Hk(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Ye(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=null;n&&(s.route.ErrorBoundary?u=A.exports.createElement(s.route.ErrorBoundary,null):s.route.errorElement?u=s.route.errorElement:u=x(zk,{}));let d=e.concat(r.slice(0,a+1)),c=()=>{let f=o;return l?f=u:s.route.Component?f=A.exports.createElement(s.route.Component,null):s.route.element&&(f=s.route.element),x(Wk,{match:s,routeContext:{outlet:o,matches:d},children:f})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?x(jk,{location:n.location,component:u,error:l,children:c(),routeContext:{outlet:null,matches:d}}):c()},null)}var qv;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(qv||(qv={}));var ou;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ou||(ou={}));function Vk(t){let e=A.exports.useContext(Kb);return e||Ye(!1),e}function Gk(t){let e=A.exports.useContext(fa);return e||Ye(!1),e}function qk(t){let e=Gk(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function Kk(){var t;let e=A.exports.useContext(Yb),n=Vk(ou.UseRouteError),r=qk(ou.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function kn(t){Ye(!1)}function Yk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:o,static:s=!1}=t;rc()&&Ye(!1);let a=e.replace(/^\/*/,"/"),l=A.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Co(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:p="default"}=r,h=A.exports.useMemo(()=>{let v=Vb(u,a);return v==null?null:{location:{pathname:v,search:d,hash:c,state:f,key:p},navigationType:i}},[a,u,d,c,f,p,i]);return h==null?null:x(Xh.Provider,{value:l,children:x(nc.Provider,{children:n,value:h})})}function Qk(t){let{children:e,location:n}=t,r=A.exports.useContext(qb),i=r&&!e?r.router.routes:dp(e);return $k(i,n)}var Kv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Kv||(Kv={}));new Promise(()=>{});function dp(t,e){e===void 0&&(e=[]);let n=[];return A.exports.Children.forEach(t,(r,i)=>{if(!A.exports.isValidElement(r))return;let o=[...e,i];if(r.type===A.exports.Fragment){n.push.apply(n,dp(r.props.children,o));return}r.type!==kn&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=dp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xk(t){let{basename:e,children:n,window:r}=t,i=A.exports.useRef();i.current==null&&(i.current=Yx({window:r,v5Compat:!0}));let o=i.current,[s,a]=A.exports.useState({action:o.action,location:o.location});return A.exports.useLayoutEffect(()=>o.listen(a),[o]),x(Yk,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}var Yv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Yv||(Yv={}));var Qv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qv||(Qv={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw To(e)},To=function(t){return new Error("Firebase Database ("+Xb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,c=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,s||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||c==null)throw new Zk;const f=o<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const h=u<<6&192|c;r.push(h)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zb=function(t){const e=Jb(t);return Jh.encodeByteArray(e,!0)},su=function(t){return Zb(t).replace(/\./g,"")},au=function(t){try{return Jh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){return eS(void 0,t)}function eS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tR(n)||(t[n]=eS(t[n],e[n]));return t}function tR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=()=>nR().__FIREBASE_DEFAULTS__,iR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&au(t[1]);return e&&JSON.parse(e)},Zh=()=>{try{return rR()||iR()||oR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tS=t=>{var e,n;return(n=(e=Zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sR=t=>{const e=tS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aR=()=>{var t;return(t=Zh())===null||t===void 0?void 0:t.config},nS=t=>{var e;return(e=Zh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[su(JSON.stringify(n)),su(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function rS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uR(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oS(){return Xb.NODE_ADMIN===!0}function tg(){try{return typeof indexedDB=="object"}catch{return!1}}function ng(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function sS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cR,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?dR(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Un(i,a,r)}}function dR(t,e){return t.replace(fR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=Ws(au(o[0])||""),n=Ws(au(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},pR=function(t){const e=aS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hR=function(t){const e=aS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Hs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Xv(o)&&Xv(s)){if(!Hs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^o&(s^a),d=1518500249):(u=o^s^a,d=1859775393):c<60?(u=o&s|a&(o|s),d=2400959708):(u=o^s^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=e[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}function mR(t,e){const n=new vR(t,e);return n.subscribe.bind(n)}class vR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xd),i.error===void 0&&(i.error=xd),i.complete===void 0&&(i.complete=xd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xd(){}function rg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,W(r<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=1e3,bR=2,SR=4*60*60*1e3,ER=.5;function Jv(t,e=wR,n=bR){const r=e*Math.pow(n,t),i=Math.round(ER*r*(Math.random()-.5)*2);return Math.min(SR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ic;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TR(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CR(t){return t===Kr?void 0:t}function TR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const kR={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},RR=be.INFO,PR={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},AR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=RR,this._logHandler=AR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const DR=(t,e)=>e.some(n=>t instanceof n);let Zv,ey;function OR(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NR(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lS=new WeakMap,pp=new WeakMap,uS=new WeakMap,kd=new WeakMap,ig=new WeakMap;function MR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(xr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&lS.set(n,t)}).catch(()=>{}),ig.set(e,t),e}function LR(t){if(pp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});pp.set(t,e)}let hp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FR(t){hp=t(hp)}function BR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rd(this),e,...n);return uS.set(r,e.sort?e.sort():[e]),xr(r)}:NR().includes(t)?function(...e){return t.apply(Rd(this),e),xr(lS.get(this))}:function(...e){return xr(t.apply(Rd(this),e))}}function UR(t){return typeof t=="function"?BR(t):(t instanceof IDBTransaction&&LR(t),DR(t,OR())?new Proxy(t,hp):t)}function xr(t){if(t instanceof IDBRequest)return MR(t);if(kd.has(t))return kd.get(t);const e=UR(t);return e!==t&&(kd.set(t,e),ig.set(e,t)),e}const Rd=t=>ig.get(t);function cS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=xr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(xr(s.result),l.oldVersion,l.newVersion,xr(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const $R=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],Pd=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$R.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pd.set(e,o),o}FR(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gp="@firebase/app",ny="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new pa("@firebase/app"),HR="@firebase/app-compat",VR="@firebase/analytics-compat",GR="@firebase/analytics",qR="@firebase/app-check-compat",KR="@firebase/app-check",YR="@firebase/auth",QR="@firebase/auth-compat",XR="@firebase/database",JR="@firebase/database-compat",ZR="@firebase/functions",eP="@firebase/functions-compat",tP="@firebase/installations",nP="@firebase/installations-compat",rP="@firebase/messaging",iP="@firebase/messaging-compat",oP="@firebase/performance",sP="@firebase/performance-compat",aP="@firebase/remote-config",lP="@firebase/remote-config-compat",uP="@firebase/storage",cP="@firebase/storage-compat",dP="@firebase/firestore",fP="@firebase/firestore-compat",pP="firebase",hP="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="[DEFAULT]",gP={[gp]:"fire-core",[HR]:"fire-core-compat",[GR]:"fire-analytics",[VR]:"fire-analytics-compat",[KR]:"fire-app-check",[qR]:"fire-app-check-compat",[YR]:"fire-auth",[QR]:"fire-auth-compat",[XR]:"fire-rtdb",[JR]:"fire-rtdb-compat",[ZR]:"fire-fn",[eP]:"fire-fn-compat",[tP]:"fire-iid",[nP]:"fire-iid-compat",[rP]:"fire-fcm",[iP]:"fire-fcm-compat",[oP]:"fire-perf",[sP]:"fire-perf-compat",[aP]:"fire-rc",[lP]:"fire-rc-compat",[uP]:"fire-gcs",[cP]:"fire-gcs-compat",[dP]:"fire-fst",[fP]:"fire-fst-compat","fire-js":"fire-js",[pP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Map,vp=new Map;function mP(t,e){try{t.container.addComponent(e)}catch(n){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(vp.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;vp.set(e,t);for(const n of Vs.values())mP(n,t);return!0}function Wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new jr("app","Firebase",vP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=hP;function dS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=aR()),!n)throw kr.create("no-options");const o=Vs.get(i);if(o){if(Hs(n,o.options)&&Hs(r,o.config))return o;throw kr.create("duplicate-app",{appName:i})}const s=new xR(i);for(const l of vp.values())s.addComponent(l);const a=new yP(n,r,s);return Vs.set(i,a),a}function sc(t=mp){const e=Vs.get(t);if(!e&&t===mp)return dS();if(!e)throw kr.create("no-app",{appName:t});return e}function _P(){return Array.from(Vs.values())}function Pt(t,e,n){var r;let i=(r=gP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(a.join(" "));return}In(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="firebase-heartbeat-database",bP=1,Gs="firebase-heartbeat-store";let Ad=null;function fS(){return Ad||(Ad=cS(wP,bP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gs)}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Ad}async function SP(t){try{return(await fS()).transaction(Gs).objectStore(Gs).get(pS(t))}catch(e){if(e instanceof Un)gi.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gi.warn(n.message)}}}async function ry(t,e){try{const r=(await fS()).transaction(Gs,"readwrite");return await r.objectStore(Gs).put(e,pS(t)),r.done}catch(n){if(n instanceof Un)gi.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gi.warn(r.message)}}}function pS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=1024,IP=30*24*60*60*1e3;class CP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=IP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iy(),{heartbeatsToSend:n,unsentEntries:r}=TP(this._heartbeatsCache.heartbeats),i=su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iy(){return new Date().toISOString().substring(0,10)}function TP(t,e=EP){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),oy(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tg()?ng().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oy(t){return su(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){In(new rn("platform-logger",e=>new jR(e),"PRIVATE")),In(new rn("heartbeat",e=>new CP(e),"PRIVATE")),Pt(gp,ny,t),Pt(gp,ny,"esm2017"),Pt("fire-js","")}kP("");function og(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RP=hS,gS=new jr("auth","Firebase",hS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new pa("@firebase/auth");function xl(t,...e){sy.logLevel<=be.ERROR&&sy.error(`Auth (${ha}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw sg(t,...e)}function Mn(t,...e){return sg(t,...e)}function PP(t,e,n){const r=Object.assign(Object.assign({},RP()),{[e]:n});return new jr("auth","Firebase",r).create(e,{appName:t.name})}function sg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gS.create(t,...e)}function Q(t,e,...n){if(!t)throw sg(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function er(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;function Vn(t){er(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){const n=Wr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Hs(o,e!=null?e:{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function DP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OP(){return ly()==="http:"||ly()==="https:"}function ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||rS()||"connection"in navigator)?navigator.onLine:!0}function MP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=eg()||iS()}get(){return NP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=new ga(3e4,6e4);function ac(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ma(t,e,n,r,i={}){return vS(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=xo(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mS.fetch()(yS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function vS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LP),e);try{const i=new BP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw tl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw tl(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw PP(t,d,u);Cn(t,d)}}catch(i){if(i instanceof Un)throw i;Cn(t,"network-request-failed",{message:String(i)})}}async function lc(t,e,n,r,i={}){const o=await ma(t,e,n,r,i);return"mfaPendingCredential"in o&&Cn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function yS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ag(t.config,i):`${t.config.apiScheme}://${i}`}class BP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),FP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return ma(t,"POST","/v1/accounts:delete",e)}async function $P(t,e){return ma(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zP(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=lg(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:vs(Dd(i.auth_time)),issuedAtTime:vs(Dd(i.iat)),expirationTime:vs(Dd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Dd(t){return Number(t)*1e3}function lg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=au(n);return i?JSON.parse(i):(xl("Failed to decode base64 JWT payload"),null)}catch(i){return xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jP(t){const e=lg(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&WP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qs(t,$P(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?qP(o.providerUserInfo):[],a=GP(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new _S(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function VP(t){const e=bt(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qP(t){return t.map(e=>{var{providerId:n}=e,r=og(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e){const n=await vS(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=yS(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mS.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await KP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ks;return r&&(Q(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=og(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _S(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zP(this,e)}reload(){return VP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qs(this,UP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,h=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:_,isAnonymous:S,providerData:T,stsTokenManager:k}=n;Q(y&&k,e,"internal-error");const P=Ks.fromJSON(this.name,k);Q(typeof y=="string",e,"internal-error"),ar(c,e.name),ar(f,e.name),Q(typeof _=="boolean",e,"internal-error"),Q(typeof S=="boolean",e,"internal-error"),ar(p,e.name),ar(h,e.name),ar(v,e.name),ar(w,e.name),ar(m,e.name),ar(g,e.name);const U=new ai({uid:y,auth:e,email:f,emailVerified:_,displayName:c,isAnonymous:S,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:P,createdAt:m,lastLoginAt:g});return T&&Array.isArray(T)&&(U.providerData=T.map(z=>Object.assign({},z))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ks;i.updateFromServerResponse(n);const o=new ai({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wS.type="NONE";const uy=wS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=kl(this.userKey,i.apiKey,o),this.fullPersistenceKey=kl("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(Vn(uy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Vn(uy);const s=kl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const c=ai._fromJSON(e,d);u!==o&&(a=c),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ji(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Ji(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ES(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CS(e))return"Blackberry";if(TS(e))return"Webos";if(ug(e))return"Safari";if((e.includes("chrome/")||SS(e))&&!e.includes("edge/"))return"Chrome";if(IS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bS(t=gt()){return/firefox\//i.test(t)}function ug(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SS(t=gt()){return/crios\//i.test(t)}function ES(t=gt()){return/iemobile/i.test(t)}function IS(t=gt()){return/android/i.test(t)}function CS(t=gt()){return/blackberry/i.test(t)}function TS(t=gt()){return/webos/i.test(t)}function uc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YP(t=gt()){var e;return uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QP(){return uR()&&document.documentMode===10}function xS(t=gt()){return uc(t)||IS(t)||TS(t)||CS(t)||/windows phone/i.test(t)||ES(t)}function XP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e=[]){let n;switch(t){case"Browser":n=cy(gt());break;case"Worker":n=`${cy(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ha}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new JP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function cc(t){return bt(t)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eA(t,e,n){const r=cc(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=RS(e),{host:s,port:a}=tA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nA()}function RS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tA(t){const e=RS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:fy(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:fy(s)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function rA(t,e){return ma(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return lc(t,"POST","/v1/accounts:signInWithPassword",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return lc(t,"POST","/v1/accounts:signInWithEmailLink",ac(t,e))}async function sA(t,e){return lc(t,"POST","/v1/accounts:signInWithEmailLink",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends cg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ys(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ys(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oA(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sA(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e){return lc(t,"POST","/v1/accounts:signInWithIdp",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class mi extends cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=og(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new mi(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zi(e,n)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uA(t){const e=os(ss(t)).link,n=e?os(ss(e)).deep_link_id:null,r=os(ss(t)).deep_link_id;return(r?os(ss(r)).link:null)||r||n||e||t}class dg{constructor(e){var n,r,i,o,s,a;const l=os(ss(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=lA((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uA(e);try{return new dg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return Ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dg.parseLink(n);return Q(r,"argument-error"),Ys._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends PS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends va{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends va{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends va{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await ai._fromIdTokenResponse(e,r,i),s=py(r);return new po({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=py(r);return new po({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends Un{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cu(e,n,r,i)}}function AS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,o,e,r):o})}async function cA(t,e,n=!1){const r=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return po._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await qs(t,AS(r,i,e,t),n);Q(o.idToken,r,"internal-error");const s=lg(o.idToken);Q(s,r,"internal-error");const{sub:a}=s;return Q(t.uid===a,r,"user-mismatch"),po._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e,n=!1){const r="signIn",i=await AS(t,r,e),o=await po._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function fA(t,e){return DS(cc(t),e)}function pA(t,e,n){return fA(bt(t),ko.credential(e,n))}function hA(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function gA(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(du,"1"),this.storage.removeItem(du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){const t=gt();return ug(t)||uc(t)}const vA=1e3,yA=10;class NS extends OS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mA()&&XP(),this.fallbackToPolling=xS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);QP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NS.type="LOCAL";const _A=NS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS extends OS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MS.type="SESSION";const LS=MS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await wA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=fg("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function SA(t){Ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function EA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CA(){return FS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="firebaseLocalStorageDb",TA=1,fu="firebaseLocalStorage",US="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function xA(){const t=indexedDB.deleteDatabase(BS);return new ya(t).toPromise()}function _p(){const t=indexedDB.open(BS,TA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fu,{keyPath:US})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await xA(),e(await _p()))})})}async function hy(t,e,n){const r=fc(t,!0).put({[US]:e,value:n});return new ya(r).toPromise()}async function kA(t,e){const n=fc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=fc(t,!0).delete(e);return new ya(n).toPromise()}const RA=800,PA=3;class $S{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(CA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EA(),!this.activeServiceWorker)return;this.sender=new bA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _p();return await hy(e,du,"1"),await gy(e,du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=fc(i,!1).getAll();return new ya(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$S.type="LOCAL";const AA=$S;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function OA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Mn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",DA().appendChild(r)})}function NA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t,e){return e?Vn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LA(t){return DS(t.auth,new pg(t),t.bypassAuthState)}function FA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),dA(n,new pg(t),t.bypassAuthState)}async function BA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),cA(n,new pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LA;case"linkViaPopup":case"linkViaRedirect":return BA;case"reauthViaPopup":case"reauthViaRedirect":return FA;default:Cn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new ga(2e3,1e4);class Wi extends zS{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,UA.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="pendingRedirect",Rl=new Map;class zA extends zS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const r=await jA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jA(t,e){const n=VA(e),r=HA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WA(t,e){Rl.set(t._key(),e)}function HA(t){return Vn(t._redirectPersistence)}function VA(t){return kl($A,t.config.apiKey,t.name)}async function GA(t,e,n=!1){const r=cc(t),i=MA(r,e),s=await new zA(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qA&&this.cachedEventUids.clear(),this.cachedEventUids.has(my(e))}saveEventToCache(e){this.cachedEventUids.add(my(e)),this.lastProcessedEventTime=Date.now()}}function my(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e={}){return ma(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JA=/^https?/;async function ZA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QA(t);for(const n of e)try{if(eD(n))return}catch{}Cn(t,"unauthorized-domain")}function eD(t){const e=yp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!JA.test(n))return!1;if(XA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new ga(3e4,6e4);function vy(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nD(t){return new Promise((e,n)=>{var r,i,o;function s(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(Mn(t,"network-request-failed"))},timeout:tD.get()})}if(!((i=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ln().gapi)===null||o===void 0)&&o.load)s();else{const a=NA("iframefcb");return Ln()[a]=()=>{gapi.load?s():n(Mn(t,"network-request-failed"))},OA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function rD(t){return Pl=Pl||nD(t),Pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new ga(5e3,15e3),oD="__/auth/iframe",sD="emulator/auth/iframe",aD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ag(e,sD):`https://${t.config.authDomain}/${oD}`,r={apiKey:e.apiKey,appName:t.name,v:ha},i=lD.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${xo(r).slice(1)}`}async function cD(t){const e=await rD(t),n=Ln().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:uD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aD,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Mn(t,"network-request-failed"),a=Ln().setTimeout(()=>{o(s)},iD.get());function l(){Ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fD=500,pD=600,hD="_blank",gD="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mD(t,e,n,r=fD,i=pD){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dD),{width:r.toString(),height:i.toString(),top:o,left:s}),u=gt().toLowerCase();n&&(a=SS(u)?hD:n),bS(u)&&(e=e||gD,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,h])=>`${f}${p}=${h},`,"");if(YP(u)&&a!=="_self")return vD(e||"",a),new yy(null);const c=window.open(e||"",a,d);Q(c,t,"popup-blocked");try{c.focus()}catch{}return new yy(c)}function vD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="__/auth/handler",_D="emulator/auth/handler";function _y(t,e,n,r,i,o){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ha,eventId:i};if(e instanceof PS){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",fp(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof va){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${wD(t)}?${xo(a).slice(1)}`}function wD({config:t}){return t.emulator?ag(t,_D):`https://${t.authDomain}/${yD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="webStorageSupport";class bD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LS,this._completeRedirectFn=GA,this._overrideRedirectResult=WA}async _openPopup(e,n,r,i){var o;er((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=_y(e,n,r,yp(),i);return mD(e,s,fg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),SA(_y(e,n,r,yp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(er(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cD(e),r=new KA(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Od,{type:Od},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Od];s!==void 0&&n(!!s),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xS()||ug()||uc()}}const SD=bD;var wy="@firebase/auth",by="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CD(t){In(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{Q(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kS(t)},d=new ZP(a,l,u);return DP(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new rn("auth-internal",e=>{const n=cc(e.getProvider("auth").getImmediate());return(r=>new ED(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(wy,by,ID(t)),Pt(wy,by,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=5*60,xD=nS("authIdTokenMaxAge")||TD;let Sy=null;const kD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xD)return;const i=n==null?void 0:n.token;Sy!==i&&(Sy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WS(t=sc()){const e=Wr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AP(t,{popupRedirectResolver:SD,persistence:[AA,_A,LS]}),r=nS("authTokenSyncURL");if(r){const o=kD(r);gA(n,o,()=>o(n.currentUser)),hA(n,s=>o(s))}const i=tS("auth");return i&&eA(n,`http://${i}`),n}CD("Browser");var hg={exports:{}},_e={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg=Symbol.for("react.element"),mg=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),RD=Symbol.for("react.server_context"),yc=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),PD=Symbol.for("react.offscreen"),HS;HS=Symbol.for("react.module.reference");function sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case gg:switch(t=t.type,t){case pc:case gc:case hc:case _c:case wc:return t;default:switch(t=t&&t.$$typeof,t){case RD:case vc:case yc:case Sc:case bc:case mc:return t;default:return e}}case mg:return e}}}_e.ContextConsumer=vc;_e.ContextProvider=mc;_e.Element=gg;_e.ForwardRef=yc;_e.Fragment=pc;_e.Lazy=Sc;_e.Memo=bc;_e.Portal=mg;_e.Profiler=gc;_e.StrictMode=hc;_e.Suspense=_c;_e.SuspenseList=wc;_e.isAsyncMode=function(){return!1};_e.isConcurrentMode=function(){return!1};_e.isContextConsumer=function(t){return sn(t)===vc};_e.isContextProvider=function(t){return sn(t)===mc};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===gg};_e.isForwardRef=function(t){return sn(t)===yc};_e.isFragment=function(t){return sn(t)===pc};_e.isLazy=function(t){return sn(t)===Sc};_e.isMemo=function(t){return sn(t)===bc};_e.isPortal=function(t){return sn(t)===mg};_e.isProfiler=function(t){return sn(t)===gc};_e.isStrictMode=function(t){return sn(t)===hc};_e.isSuspense=function(t){return sn(t)===_c};_e.isSuspenseList=function(t){return sn(t)===wc};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===pc||t===gc||t===hc||t===_c||t===wc||t===PD||typeof t=="object"&&t!==null&&(t.$$typeof===Sc||t.$$typeof===bc||t.$$typeof===mc||t.$$typeof===vc||t.$$typeof===yc||t.$$typeof===HS||t.getModuleId!==void 0)};_e.typeOf=sn;(function(t){t.exports=_e})(hg);function AD(t){function e(C,R,O,B,I){for(var b=0,E=0,F=0,D=0,M,j,re=0,ee=0,X,me=X=M=0,de=0,ze=0,an=0,Fe=0,Fa=O.length,Uo=Fa-1,ln,te="",Be="",Xc="",Jc="",or;de<Fa;){if(j=O.charCodeAt(de),de===Uo&&E+D+F+b!==0&&(E!==0&&(j=E===47?10:47),D=F=b=0,Fa++,Uo++),E+D+F+b===0){if(de===Uo&&(0<ze&&(te=te.replace(f,"")),0<te.trim().length)){switch(j){case 32:case 9:case 59:case 13:case 10:break;default:te+=O.charAt(de)}j=59}switch(j){case 123:for(te=te.trim(),M=te.charCodeAt(0),X=1,Fe=++de;de<Fa;){switch(j=O.charCodeAt(de)){case 123:X++;break;case 125:X--;break;case 47:switch(j=O.charCodeAt(de+1)){case 42:case 47:e:{for(me=de+1;me<Uo;++me)switch(O.charCodeAt(me)){case 47:if(j===42&&O.charCodeAt(me-1)===42&&de+2!==me){de=me+1;break e}break;case 10:if(j===47){de=me+1;break e}}de=me}}break;case 91:j++;case 40:j++;case 34:case 39:for(;de++<Uo&&O.charCodeAt(de)!==j;);}if(X===0)break;de++}switch(X=O.substring(Fe,de),M===0&&(M=(te=te.replace(c,"").trim()).charCodeAt(0)),M){case 64:switch(0<ze&&(te=te.replace(f,"")),j=te.charCodeAt(1),j){case 100:case 109:case 115:case 45:ze=R;break;default:ze=ge}if(X=e(R,ze,X,j,I+1),Fe=X.length,0<N&&(ze=n(ge,te,an),or=a(3,X,ze,R,oe,Z,Fe,j,I,B),te=ze.join(""),or!==void 0&&(Fe=(X=or.trim()).length)===0&&(j=0,X="")),0<Fe)switch(j){case 115:te=te.replace(T,s);case 100:case 109:case 45:X=te+"{"+X+"}";break;case 107:te=te.replace(g,"$1 $2"),X=te+"{"+X+"}",X=se===1||se===2&&o("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=te+X,B===112&&(X=(Be+=X,""))}else X="";break;default:X=e(R,n(R,te,an),X,B,I+1)}Xc+=X,X=an=ze=me=M=0,te="",j=O.charCodeAt(++de);break;case 125:case 59:if(te=(0<ze?te.replace(f,""):te).trim(),1<(Fe=te.length))switch(me===0&&(M=te.charCodeAt(0),M===45||96<M&&123>M)&&(Fe=(te=te.replace(" ",":")).length),0<N&&(or=a(1,te,R,C,oe,Z,Be.length,B,I,B))!==void 0&&(Fe=(te=or.trim()).length)===0&&(te="\0\0"),M=te.charCodeAt(0),j=te.charCodeAt(1),M){case 0:break;case 64:if(j===105||j===99){Jc+=te+O.charAt(de);break}default:te.charCodeAt(Fe-1)!==58&&(Be+=i(te,M,j,te.charCodeAt(2)))}an=ze=me=M=0,te="",j=O.charCodeAt(++de)}}switch(j){case 13:case 10:E===47?E=0:1+M===0&&B!==107&&0<te.length&&(ze=1,te+="\0"),0<N*G&&a(0,te,R,C,oe,Z,Be.length,B,I,B),Z=1,oe++;break;case 59:case 125:if(E+D+F+b===0){Z++;break}default:switch(Z++,ln=O.charAt(de),j){case 9:case 32:if(D+b+E===0)switch(re){case 44:case 58:case 9:case 32:ln="";break;default:j!==32&&(ln=" ")}break;case 0:ln="\\0";break;case 12:ln="\\f";break;case 11:ln="\\v";break;case 38:D+E+b===0&&(ze=an=1,ln="\f"+ln);break;case 108:if(D+E+b+ne===0&&0<me)switch(de-me){case 2:re===112&&O.charCodeAt(de-3)===58&&(ne=re);case 8:ee===111&&(ne=ee)}break;case 58:D+E+b===0&&(me=de);break;case 44:E+F+D+b===0&&(ze=1,ln+="\r");break;case 34:case 39:E===0&&(D=D===j?0:D===0?j:D);break;case 91:D+E+F===0&&b++;break;case 93:D+E+F===0&&b--;break;case 41:D+E+b===0&&F--;break;case 40:if(D+E+b===0){if(M===0)switch(2*re+3*ee){case 533:break;default:M=1}F++}break;case 64:E+F+D+b+me+X===0&&(X=1);break;case 42:case 47:if(!(0<D+b+F))switch(E){case 0:switch(2*j+3*O.charCodeAt(de+1)){case 235:E=47;break;case 220:Fe=de,E=42}break;case 42:j===47&&re===42&&Fe+2!==de&&(O.charCodeAt(Fe+2)===33&&(Be+=O.substring(Fe,de+1)),ln="",E=0)}}E===0&&(te+=ln)}ee=re,re=j,de++}if(Fe=Be.length,0<Fe){if(ze=R,0<N&&(or=a(2,Be,ze,C,oe,Z,Fe,B,I,B),or!==void 0&&(Be=or).length===0))return Jc+Be+Xc;if(Be=ze.join(",")+"{"+Be+"}",se*ne!==0){switch(se!==2||o(Be,2)||(ne=0),ne){case 111:Be=Be.replace(_,":-moz-$1")+Be;break;case 112:Be=Be.replace(y,"::-webkit-input-$1")+Be.replace(y,"::-moz-$1")+Be.replace(y,":-ms-input-$1")+Be}ne=0}}return Jc+Be+Xc}function n(C,R,O){var B=R.trim().split(w);R=B;var I=B.length,b=C.length;switch(b){case 0:case 1:var E=0;for(C=b===0?"":C[0]+" ";E<I;++E)R[E]=r(C,R[E],O).trim();break;default:var F=E=0;for(R=[];E<I;++E)for(var D=0;D<b;++D)R[F++]=r(C[D]+" ",B[E],O).trim()}return R}function r(C,R,O){var B=R.charCodeAt(0);switch(33>B&&(B=(R=R.trim()).charCodeAt(0)),B){case 38:return R.replace(m,"$1"+C.trim());case 58:return C.trim()+R.replace(m,"$1"+C.trim());default:if(0<1*O&&0<R.indexOf("\f"))return R.replace(m,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+R}function i(C,R,O,B){var I=C+";",b=2*R+3*O+4*B;if(b===944){C=I.indexOf(":",9)+1;var E=I.substring(C,I.length-1).trim();return E=I.substring(0,C).trim()+E+";",se===1||se===2&&o(E,1)?"-webkit-"+E+E:E}if(se===0||se===2&&!o(I,1))return I;switch(b){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(q,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return E=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+E+"-webkit-"+I+"-ms-flex-pack"+E+I;case 1005:return h.test(I)?I.replace(p,":-webkit-")+I.replace(p,":-moz-")+I:I;case 1e3:switch(E=I.substring(13).trim(),R=E.indexOf("-")+1,E.charCodeAt(0)+E.charCodeAt(R)){case 226:E=I.replace(S,"tb");break;case 232:E=I.replace(S,"tb-rl");break;case 220:E=I.replace(S,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+E+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(R=(I=C).length-10,E=(I.charCodeAt(R)===33?I.substring(0,R):I).substring(C.indexOf(":",7)+1).trim(),b=E.charCodeAt(0)+(E.charCodeAt(7)|0)){case 203:if(111>E.charCodeAt(8))break;case 115:I=I.replace(E,"-webkit-"+E)+";"+I;break;case 207:case 102:I=I.replace(E,"-webkit-"+(102<b?"inline-":"")+"box")+";"+I.replace(E,"-webkit-"+E)+";"+I.replace(E,"-ms-"+E+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return E=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+E+"-ms-flex-"+E+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(P,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(P,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(z.test(C)===!0)return(E=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?i(C.replace("stretch","fill-available"),R,O,B).replace(":fill-available",":stretch"):I.replace(E,"-webkit-"+E)+I.replace(E,"-moz-"+E.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,O+B===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+I}return I}function o(C,R){var O=C.indexOf(R===1?":":"{"),B=C.substring(0,R!==3?O:10);return O=C.substring(O+1,C.length-1),V(R!==2?B:B.replace(U,"$1"),O,R)}function s(C,R){var O=i(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return O!==R+";"?O.replace(k," or ($1)").substring(4):"("+R+")"}function a(C,R,O,B,I,b,E,F,D,M){for(var j=0,re=R,ee;j<N;++j)switch(ee=Ee[j].call(d,C,re,O,B,I,b,E,F,D,M)){case void 0:case!1:case!0:case null:break;default:re=ee}if(re!==R)return re}function l(C){switch(C){case void 0:case null:N=Ee.length=0;break;default:if(typeof C=="function")Ee[N++]=C;else if(typeof C=="object")for(var R=0,O=C.length;R<O;++R)l(C[R]);else G=!!C|0}return l}function u(C){return C=C.prefix,C!==void 0&&(V=null,C?typeof C!="function"?se=1:(se=2,V=C):se=0),u}function d(C,R){var O=C;if(33>O.charCodeAt(0)&&(O=O.trim()),ie=O,O=[ie],0<N){var B=a(-1,R,O,O,oe,Z,0,0,0,0);B!==void 0&&typeof B=="string"&&(R=B)}var I=e(ge,O,R,0,0);return 0<N&&(B=a(-2,I,O,O,oe,Z,I.length,0,0,0),B!==void 0&&(I=B)),ie="",ne=0,Z=oe=1,I}var c=/^\0+/g,f=/[\0\r\f]/g,p=/: */g,h=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,_=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,P=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,Z=1,oe=1,ne=0,se=1,ge=[],Ee=[],N=0,V=null,G=0,ie="";return d.use=l,d.set=u,t!==void 0&&u(t),d}var DD={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function OD(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var ND=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ey=OD(function(t){return ND.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),VS={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,vg=Ze?Symbol.for("react.element"):60103,yg=Ze?Symbol.for("react.portal"):60106,Ec=Ze?Symbol.for("react.fragment"):60107,Ic=Ze?Symbol.for("react.strict_mode"):60108,Cc=Ze?Symbol.for("react.profiler"):60114,Tc=Ze?Symbol.for("react.provider"):60109,xc=Ze?Symbol.for("react.context"):60110,_g=Ze?Symbol.for("react.async_mode"):60111,kc=Ze?Symbol.for("react.concurrent_mode"):60111,Rc=Ze?Symbol.for("react.forward_ref"):60112,Pc=Ze?Symbol.for("react.suspense"):60113,MD=Ze?Symbol.for("react.suspense_list"):60120,Ac=Ze?Symbol.for("react.memo"):60115,Dc=Ze?Symbol.for("react.lazy"):60116,LD=Ze?Symbol.for("react.block"):60121,FD=Ze?Symbol.for("react.fundamental"):60117,BD=Ze?Symbol.for("react.responder"):60118,UD=Ze?Symbol.for("react.scope"):60119;function Gt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case vg:switch(t=t.type,t){case _g:case kc:case Ec:case Cc:case Ic:case Pc:return t;default:switch(t=t&&t.$$typeof,t){case xc:case Rc:case Dc:case Ac:case Tc:return t;default:return e}}case yg:return e}}}function GS(t){return Gt(t)===kc}we.AsyncMode=_g;we.ConcurrentMode=kc;we.ContextConsumer=xc;we.ContextProvider=Tc;we.Element=vg;we.ForwardRef=Rc;we.Fragment=Ec;we.Lazy=Dc;we.Memo=Ac;we.Portal=yg;we.Profiler=Cc;we.StrictMode=Ic;we.Suspense=Pc;we.isAsyncMode=function(t){return GS(t)||Gt(t)===_g};we.isConcurrentMode=GS;we.isContextConsumer=function(t){return Gt(t)===xc};we.isContextProvider=function(t){return Gt(t)===Tc};we.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===vg};we.isForwardRef=function(t){return Gt(t)===Rc};we.isFragment=function(t){return Gt(t)===Ec};we.isLazy=function(t){return Gt(t)===Dc};we.isMemo=function(t){return Gt(t)===Ac};we.isPortal=function(t){return Gt(t)===yg};we.isProfiler=function(t){return Gt(t)===Cc};we.isStrictMode=function(t){return Gt(t)===Ic};we.isSuspense=function(t){return Gt(t)===Pc};we.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ec||t===kc||t===Cc||t===Ic||t===Pc||t===MD||typeof t=="object"&&t!==null&&(t.$$typeof===Dc||t.$$typeof===Ac||t.$$typeof===Tc||t.$$typeof===xc||t.$$typeof===Rc||t.$$typeof===FD||t.$$typeof===BD||t.$$typeof===UD||t.$$typeof===LD)};we.typeOf=Gt;(function(t){t.exports=we})(VS);var wg=VS.exports,$D={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bg={};bg[wg.ForwardRef]=jD;bg[wg.Memo]=qS;function Iy(t){return wg.isMemo(t)?qS:bg[t.$$typeof]||$D}var WD=Object.defineProperty,HD=Object.getOwnPropertyNames,Cy=Object.getOwnPropertySymbols,VD=Object.getOwnPropertyDescriptor,GD=Object.getPrototypeOf,Ty=Object.prototype;function KS(t,e,n){if(typeof e!="string"){if(Ty){var r=GD(e);r&&r!==Ty&&KS(t,r,n)}var i=HD(e);Cy&&(i=i.concat(Cy(e)));for(var o=Iy(t),s=Iy(e),a=0;a<i.length;++a){var l=i[a];if(!zD[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=VD(e,l);try{WD(t,l,u)}catch{}}}}return t}var wp=KS;function Gn(){return(Gn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var xy=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},bp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!hg.exports.typeOf(t)},pu=Object.freeze([]),Rr=Object.freeze({});function Qs(t){return typeof t=="function"}function ky(t){return t.displayName||t.name||"Component"}function Sg(t){return t&&typeof t.styledComponentId=="string"}var ho=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Eg=typeof window<"u"&&"HTMLElement"in window,qD=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function _a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var KD=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&_a(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Al=new Map,hu=new Map,ys=1,nl=function(t){if(Al.has(t))return Al.get(t);for(;hu.has(ys);)ys++;var e=ys++;return Al.set(t,e),hu.set(e,t),e},YD=function(t){return hu.get(t)},QD=function(t,e){e>=ys&&(ys=e+1),Al.set(t,e),hu.set(e,t)},XD="style["+ho+'][data-styled-version="5.3.9"]',JD=new RegExp("^"+ho+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ZD=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},eO=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(JD);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(QD(u,l),ZD(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},tO=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},YS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(ho))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ho,"active"),r.setAttribute("data-styled-version","5.3.9");var s=tO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},nO=function(){function t(n){var r=this.element=YS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}_a(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),rO=function(){function t(n){var r=this.element=YS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),iO=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Ry=Eg,oO={isServer:!Eg,useCSSOMInjection:!qD},QS=function(){function t(n,r,i){n===void 0&&(n=Rr),r===void 0&&(r={}),this.options=Gn({},oO,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Eg&&Ry&&(Ry=!1,function(o){for(var s=document.querySelectorAll(XD),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ho)!=="active"&&(eO(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return nl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Gn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new iO(s):o?new nO(s):new rO(s),new KD(n)));var n,r,i,o,s},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(nl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(nl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(nl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=YD(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var d=ho+".g"+s+'[id="'+a+'"]',c="";l!==void 0&&l.forEach(function(f){f.length>0&&(c+=f+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},t}(),sO=/(a)(d)/gi,Py=function(t){return String.fromCharCode(t+(t>25?39:97))};function Sp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Py(e%52)+n;return(Py(e%52)+n).replace(sO,"$1-$2")}var Hi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},XS=function(t){return Hi(5381,t)};function aO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Qs(n)&&!Sg(n))return!1}return!0}var lO=XS("5.3.9"),uO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&aO(e),this.componentId=n,this.baseHash=Hi(lO,n),this.baseStyle=r,QS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=go(this.rules,e,n,r).join(""),a=Sp(Hi(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=Hi(this.baseHash,r.hash),c="",f=0;f<u;f++){var p=this.rules[f];if(typeof p=="string")c+=p;else if(p){var h=go(p,e,n,r),v=Array.isArray(h)?h.join(""):h;d=Hi(d,v+f),c+=v}}if(c){var w=Sp(d>>>0);if(!n.hasNameForId(i,w)){var m=r(c,"."+w,void 0,i);n.insertRules(i,w,m)}o.push(w)}}return o.join(" ")},t}(),cO=/^\s*\/\/.*$/gm,dO=[":","[",".","#"];function fO(t){var e,n,r,i,o=t===void 0?Rr:t,s=o.options,a=s===void 0?Rr:s,l=o.plugins,u=l===void 0?pu:l,d=new AD(a),c=[],f=function(v){function w(m){if(m)try{v(m+"}")}catch{}}return function(m,g,y,_,S,T,k,P,U,z){switch(m){case 1:if(U===0&&g.charCodeAt(0)===64)return v(g+";"),"";break;case 2:if(P===0)return g+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(y[0]+g),"";default:return g+(z===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(w)}}}(function(v){c.push(v)}),p=function(v,w,m){return w===0&&dO.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function h(v,w,m,g){g===void 0&&(g="&");var y=v.replace(cO,""),_=w&&m?m+" "+w+" { "+y+" }":y;return e=g,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(m||!w?"":w,_)}return d.use([].concat(u,[function(v,w,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},f,function(v){if(v===-2){var w=c;return c=[],w}}])),h.hash=u.length?u.reduce(function(v,w){return w.name||_a(15),Hi(v,w.name)},5381).toString():"",h}var JS=Le.createContext();JS.Consumer;var ZS=Le.createContext(),pO=(ZS.Consumer,new QS),Ep=fO();function hO(){return A.exports.useContext(JS)||pO}function gO(){return A.exports.useContext(ZS)||Ep}var mO=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ep);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return _a(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Ep),this.name+e.hash},t}(),vO=/([A-Z])/,yO=/([A-Z])/g,_O=/^ms-/,wO=function(t){return"-"+t.toLowerCase()};function Ay(t){return vO.test(t)?t.replace(yO,wO).replace(_O,"-ms-"):t}var Dy=function(t){return t==null||t===!1||t===""};function go(t,e,n,r){if(Array.isArray(t)){for(var i,o=[],s=0,a=t.length;s<a;s+=1)(i=go(t[s],e,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Dy(t))return"";if(Sg(t))return"."+t.styledComponentId;if(Qs(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return go(l,e,n,r)}var u;return t instanceof mO?n?(t.inject(n,r),t.getName(r)):t:bp(t)?function d(c,f){var p,h,v=[];for(var w in c)c.hasOwnProperty(w)&&!Dy(c[w])&&(Array.isArray(c[w])&&c[w].isCss||Qs(c[w])?v.push(Ay(w)+":",c[w],";"):bp(c[w])?v.push.apply(v,d(c[w],w)):v.push(Ay(w)+": "+(p=w,(h=c[w])==null||typeof h=="boolean"||h===""?"":typeof h!="number"||h===0||p in DD?String(h).trim():h+"px")+";"));return f?[f+" {"].concat(v,["}"]):v}(t):t.toString()}var Oy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function dn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Qs(t)||bp(t)?Oy(go(xy(pu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Oy(go(xy(t,n)))}var bO=function(t,e,n){return n===void 0&&(n=Rr),t.theme!==n.theme&&t.theme||e||n.theme},SO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,EO=/(^-|-$)/g;function Nd(t){return t.replace(SO,"-").replace(EO,"")}var IO=function(t){return Sp(XS(t)>>>0)};function rl(t){return typeof t=="string"&&!0}var Ip=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CO=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function TO(t,e,n){var r=t[n];Ip(e)&&Ip(r)?eE(r,e):t[n]=e}function eE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Ip(s))for(var a in s)CO(a)&&TO(t,s[a],a)}return t}var tE=Le.createContext();tE.Consumer;var Md={};function nE(t,e,n){var r=Sg(t),i=!rl(t),o=e.attrs,s=o===void 0?pu:o,a=e.componentId,l=a===void 0?function(g,y){var _=typeof g!="string"?"sc":Nd(g);Md[_]=(Md[_]||0)+1;var S=_+"-"+IO("5.3.9"+_+Md[_]);return y?y+"-"+S:S}(e.displayName,e.parentComponentId):a,u=e.displayName,d=u===void 0?function(g){return rl(g)?"styled."+g:"Styled("+ky(g)+")"}(t):u,c=e.displayName&&e.componentId?Nd(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(g,y,_){return t.shouldForwardProp(g,y,_)&&e.shouldForwardProp(g,y,_)}:t.shouldForwardProp);var h,v=new uO(n,c,r?t.componentStyle:void 0),w=v.isStatic&&s.length===0,m=function(g,y){return function(_,S,T,k){var P=_.attrs,U=_.componentStyle,z=_.defaultProps,q=_.foldedComponentIds,Z=_.shouldForwardProp,oe=_.styledComponentId,ne=_.target,se=function(B,I,b){B===void 0&&(B=Rr);var E=Gn({},I,{theme:B}),F={};return b.forEach(function(D){var M,j,re,ee=D;for(M in Qs(ee)&&(ee=ee(E)),ee)E[M]=F[M]=M==="className"?(j=F[M],re=ee[M],j&&re?j+" "+re:j||re):ee[M]}),[E,F]}(bO(S,A.exports.useContext(tE),z)||Rr,S,P),ge=se[0],Ee=se[1],N=function(B,I,b,E){var F=hO(),D=gO(),M=I?B.generateAndInjectStyles(Rr,F,D):B.generateAndInjectStyles(b,F,D);return M}(U,k,ge),V=T,G=Ee.$as||S.$as||Ee.as||S.as||ne,ie=rl(G),C=Ee!==S?Gn({},S,{},Ee):S,R={};for(var O in C)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?R.as=C[O]:(Z?Z(O,Ey,G):!ie||Ey(O))&&(R[O]=C[O]));return S.style&&Ee.style!==S.style&&(R.style=Gn({},S.style,{},Ee.style)),R.className=Array.prototype.concat(q,oe,N!==oe?N:null,S.className,Ee.className).filter(Boolean).join(" "),R.ref=V,A.exports.createElement(G,R)}(h,g,y,w)};return m.displayName=d,(h=Le.forwardRef(m)).attrs=f,h.componentStyle=v,h.displayName=d,h.shouldForwardProp=p,h.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):pu,h.styledComponentId=c,h.target=r?t.target:t,h.withComponent=function(g){var y=e.componentId,_=function(T,k){if(T==null)return{};var P,U,z={},q=Object.keys(T);for(U=0;U<q.length;U++)P=q[U],k.indexOf(P)>=0||(z[P]=T[P]);return z}(e,["componentId"]),S=y&&y+"-"+(rl(g)?g:Nd(ky(g)));return nE(g,Gn({},_,{attrs:f,componentId:S}),n)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?eE({},t.defaultProps,g):g}}),Object.defineProperty(h,"toString",{value:function(){return"."+h.styledComponentId}}),i&&wp(h,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var Cp=function(t){return function e(n,r,i){if(i===void 0&&(i=Rr),!hg.exports.isValidElementType(r))return _a(1,String(r));var o=function(){return n(r,i,dn.apply(void 0,arguments))};return o.withConfig=function(s){return e(n,r,Gn({},i,{},s))},o.attrs=function(s){return e(n,r,Gn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(nE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Cp[t]=Cp(t)});const J=Cp,xO=J.main`
  width: 100VW;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0A090E;
  color: white;
  font-family: 'Rubik';
`,kO=J.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #191C24;
  padding: 4em 4em;
  border-radius: 2em;
  gap: 2em;
`,RO=J.img`
  width: 4rem;
`,PO=J.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`,Ny=J.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`,My=J.input`
  padding: 0.5em;
  background-color: #393E4B;
  border-radius: 0.5em;
  border: 1px solid #393E4B;
  color: white;
  :hover {
    border: 1px solid #B1B1B1;
  }
`,Ly=J.label`
  font-size: 16px;
`,AO=J.a`
  color: #E76464;
  font-size: 10px;
  :hover {
    color: white;
  }
`,DO=J.button`
  padding: 0.5em;
  width: 40%;
  background-color: #F3802D;
  border-radius: 0.5em;
  border: 1px solid #F3802D;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #B1B1B1;
  }
`,OO=()=>{const[t,e]=A.exports.useState(""),[n,r]=A.exports.useState(""),i=WS(),o=Uk();return x(En,{children:x(xO,{children:ue(kO,{children:[x(RO,{alt:"Logo",src:"Logo_Niko.svg"}),ue(PO,{children:[ue(Ny,{children:[x(Ly,{children:"Email"}),x(My,{placeholder:"Email",onChange:a=>{e(a.target.value)}})]}),ue(Ny,{children:[x(Ly,{children:"Senha"}),x(My,{type:"password",placeholder:"Senha",onChange:a=>{r(a.target.value)}}),x(AO,{children:"Esqueceu a senha?"})]})]}),x(DO,{onClick:async()=>{try{const a=await pA(i,t,n);console.log("Created",a),a!=null&&o("/")}catch(a){console.log(a)}},children:"Entrar"})]})})})};var NO="firebase",MO="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(NO,MO,"app");const rE="@firebase/installations",Ig="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=1e4,oE=`w:${Ig}`,sE="FIS_v2",LO="https://firebaseinstallations.googleapis.com/v1",FO=60*60*1e3,BO="installations",UO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},vi=new jr(BO,UO,$O);function aE(t){return t instanceof Un&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE({projectId:t}){return`${LO}/projects/${t}/installations`}function uE(t){return{token:t.token,requestStatus:2,expiresIn:jO(t.expiresIn),creationTime:Date.now()}}async function cE(t,e){const r=(await e.json()).error;return vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zO(t,{refreshToken:e}){const n=dE(t);return n.append("Authorization",WO(e)),n}async function fE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jO(t){return Number(t.replace("s","000"))}function WO(t){return`${sE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lE(t),i=dE(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:sE,appId:t.appId,sdkVersion:oE},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await fE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:uE(u.authToken)}}else throw await cE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=/^[cdef][\w-]{21}$/,Tp="";function qO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=KO(t);return GO.test(n)?n:Tp}catch{return Tp}}function KO(t){return VO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function gE(t,e){const n=Oc(t);mE(n,e),YO(n,e)}function mE(t,e){const n=hE.get(t);if(!!n)for(const r of n)r(e)}function YO(t,e){const n=QO();n&&n.postMessage({key:t,fid:e}),XO()}let ti=null;function QO(){return!ti&&"BroadcastChannel"in self&&(ti=new BroadcastChannel("[Firebase] FID Change"),ti.onmessage=t=>{mE(t.data.key,t.data.fid)}),ti}function XO(){hE.size===0&&ti&&(ti.close(),ti=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO="firebase-installations-database",ZO=1,yi="firebase-installations-store";let Ld=null;function Cg(){return Ld||(Ld=cS(JO,ZO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yi)}}})),Ld}async function gu(t,e){const n=Oc(t),i=(await Cg()).transaction(yi,"readwrite"),o=i.objectStore(yi),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&gE(t,e.fid),e}async function vE(t){const e=Oc(t),r=(await Cg()).transaction(yi,"readwrite");await r.objectStore(yi).delete(e),await r.done}async function Nc(t,e){const n=Oc(t),i=(await Cg()).transaction(yi,"readwrite"),o=i.objectStore(yi),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&gE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t){let e;const n=await Nc(t.appConfig,r=>{const i=eN(r),o=tN(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Tp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eN(t){const e=t||{fid:qO(),registrationStatus:0};return yE(e)}function tN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=nN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rN(t)}:{installationEntry:e}}async function nN(t,e){try{const n=await HO(t,e);return gu(t.appConfig,n)}catch(n){throw aE(n)&&n.customData.serverCode===409?await vE(t.appConfig):await gu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rN(t){let e=await Fy(t.appConfig);for(;e.registrationStatus===1;)await pE(100),e=await Fy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tg(t);return r||n}return e}function Fy(t){return Nc(t,e=>{if(!e)throw vi.create("installation-not-found");return yE(e)})}function yE(t){return iN(t)?{fid:t.fid,registrationStatus:0}:t}function iN(t){return t.registrationStatus===1&&t.registrationTime+iE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN({appConfig:t,heartbeatServiceProvider:e},n){const r=sN(t,n),i=zO(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:oE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await fE(()=>fetch(r,a));if(l.ok){const u=await l.json();return uE(u)}else throw await cE("Generate Auth Token",l)}function sN(t,{fid:e}){return`${lE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e=!1){let n;const r=await Nc(t.appConfig,o=>{if(!_E(o))throw vi.create("not-registered");const s=o.authToken;if(!e&&uN(s))return o;if(s.requestStatus===1)return n=aN(t,e),o;{if(!navigator.onLine)throw vi.create("app-offline");const a=dN(o);return n=lN(t,a),a}});return n?await n:r.authToken}async function aN(t,e){let n=await By(t.appConfig);for(;n.authToken.requestStatus===1;)await pE(100),n=await By(t.appConfig);const r=n.authToken;return r.requestStatus===0?xg(t,e):r}function By(t){return Nc(t,e=>{if(!_E(e))throw vi.create("not-registered");const n=e.authToken;return fN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lN(t,e){try{const n=await oN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await gu(t.appConfig,r),n}catch(n){if(aE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gu(t.appConfig,r)}throw n}}function _E(t){return t!==void 0&&t.registrationStatus===2}function uN(t){return t.requestStatus===2&&!cN(t)}function cN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+FO}function dN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fN(t){return t.requestStatus===1&&t.requestTime+iE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tg(e);return r?r.catch(console.error):xg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e=!1){const n=t;return await gN(n),(await xg(n,e)).token}async function gN(t){const{registrationPromise:e}=await Tg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){if(!t||!t.options)throw Fd("App Configuration");if(!t.name)throw Fd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fd(t){return vi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="installations",vN="installations-internal",yN=t=>{const e=t.getProvider("app").getImmediate(),n=mN(e),r=Wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_N=t=>{const e=t.getProvider("app").getImmediate(),n=Wr(e,wE).getImmediate();return{getId:()=>pN(n),getToken:i=>hN(n,i)}};function wN(){In(new rn(wE,yN,"PUBLIC")),In(new rn(vN,_N,"PRIVATE"))}wN();Pt(rE,Ig);Pt(rE,Ig,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="analytics",bN="firebase_id",SN="origin",EN=60*1e3,IN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new pa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new jr("analytics","Analytics",CN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){if(!t.startsWith(kg)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return At.warn(e.message),""}return t}function bE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kN(t,e){const n=xN("firebase-js-sdk-policy",{createScriptURL:TN}),r=document.createElement("script"),i=`${kg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function RN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function PN(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await bE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){At.error(a)}t("config",i,o)}async function AN(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await bE(n);for(const l of s){const u=a.find(c=>c.measurementId===l),d=u&&e[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){At.error(o)}}function DN(t,e,n,r){async function i(o,s,a){try{o==="event"?await AN(t,e,n,s,a):o==="config"?await PN(t,e,n,r,s,a):o==="consent"?t("consent","update",a):t("set",s)}catch(l){At.error(l)}}return i}function ON(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=DN(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function NN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=30,LN=1e3;class FN{constructor(e={},n=LN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const SE=new FN;function BN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:BN(r)},o=IN.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function $N(t,e=SE,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Bt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Bt.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new WN;return setTimeout(async()=>{a.abort()},n!==void 0?n:EN),EE({appId:r,apiKey:i,measurementId:o},s,a,e)}async function EE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=SE){var o;const{appId:s,measurementId:a}=t;try{await zN(r,e)}catch(l){if(a)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await UN(t);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!jN(u)){if(i.deleteThrottleMetadata(s),a)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Jv(n,i.intervalMillis,MN):Jv(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,c),At.debug(`Calling attemptFetch again in ${d} millis`),EE(t,c,r,i)}}function zN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jN(t){if(!(t instanceof Un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(){if(tg())try{await ng()}catch(t){return At.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GN(t,e,n,r,i,o,s){var a;const l=$N(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>At.error(p)),e.push(l);const u=VN().then(p=>{if(p)return r.getId()}),[d,c]=await Promise.all([l,u]);NN(o)||kN(o,d.measurementId),i("js",new Date);const f=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return f[SN]="firebase",f.update=!0,c!=null&&(f[bN]=c),i("config",d.measurementId,f),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.app=e}_delete(){return delete _s[this.app.options.appId],Promise.resolve()}}let _s={},Uy=[];const $y={};let Bd="dataLayer",KN="gtag",zy,IE,jy=!1;function YN(){const t=[];if(rS()&&t.push("This is a browser extension environment."),sS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function QN(t,e,n){YN();const r=t.options.appId;if(!r)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(_s[r]!=null)throw Bt.create("already-exists",{id:r});if(!jy){RN(Bd);const{wrappedGtag:o,gtagCore:s}=ON(_s,Uy,$y,Bd,KN);IE=o,zy=s,jy=!0}return _s[r]=GN(t,Uy,$y,e,zy,Bd,n),new qN(t)}function XN(t=sc()){t=bt(t);const e=Wr(t,mu);return e.isInitialized()?e.getImmediate():JN(t)}function JN(t,e={}){const n=Wr(t,mu);if(n.isInitialized()){const i=n.getImmediate();if(Hs(e,n.getOptions()))return i;throw Bt.create("already-initialized")}return n.initialize({options:e})}function ZN(t,e,n,r){t=bt(t),HN(IE,_s[t.app.options.appId],e,n,r).catch(i=>At.error(i))}const Wy="@firebase/analytics",Hy="0.9.5";function eM(){In(new rn(mu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return QN(r,i,n)},"PUBLIC")),In(new rn("analytics-internal",t,"PRIVATE")),Pt(Wy,Hy),Pt(Wy,Hy,"esm2017");function t(e){try{const n=e.getProvider(mu).getImmediate();return{logEvent:(r,i,o)=>ZN(n,r,i,o)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}eM();const Vy="@firebase/performance",xp="0.6.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=xp,tM="FB-PERF-TRACE-START",nM="FB-PERF-TRACE-STOP",kp="FB-PERF-TRACE-MEASURE",TE="_wt_",xE="_fp",kE="_fcp",RE="_fid",PE="@firebase/performance/config",AE="@firebase/performance/configexpire",rM="performance",DE="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},ct=new jr(rM,DE,iM);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new pa(DE);Bn.logLevel=be.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud,OE;class Qe{constructor(e){if(this.window=e,!e)throw ct.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,r){!this.performance||!this.performance.measure||this.performance.measure(e,n,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!sS()?(Bn.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):tg()?!0:(Bn.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const o of i.getEntries())n(o)}).observe({entryTypes:[e]})}static getInstance(){return Ud===void 0&&(Ud=new Qe(OE)),Ud}}function oM(t){OE=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NE;function sM(t){const e=t.getId();return e.then(n=>{NE=n}),e}function Rg(){return NE}function aM(t){const e=t.getToken();return e.then(n=>{}),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t,e){const n=t.length-e.length;if(n<0||n>1)throw ct.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d;class Mt{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Gy("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Gy("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return $d===void 0&&($d=new Mt),$d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(eo||(eo={}));const lM=["firebase_","google_","ga_"],uM=new RegExp("^[a-zA-Z]\\w*$"),cM=40,dM=100;function fM(){const t=Qe.getInstance().navigator;return t!=null&&t.serviceWorker?t.serviceWorker.controller?2:3:1}function ME(){switch(Qe.getInstance().document.visibilityState){case"visible":return eo.VISIBLE;case"hidden":return eo.HIDDEN;default:return eo.UNKNOWN}}function pM(){const e=Qe.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function hM(t){return t.length===0||t.length>cM?!1:!lM.some(n=>t.startsWith(n))&&!!t.match(uM)}function gM(t){return t.length!==0&&t.length<=dM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.appId;if(!n)throw ct.create("no app id");return n}function mM(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.projectId;if(!n)throw ct.create("no project id");return n}function vM(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.apiKey;if(!n)throw ct.create("no api key");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM="0.0.1",cn={loggingEnabled:!0},_M="FIREBASE_INSTALLATIONS_AUTH";function wM(t,e){const n=bM();return n?(qy(n),Promise.resolve()):IM(t,e).then(qy).then(r=>SM(r),()=>{})}function bM(){const t=Qe.getInstance().localStorage;if(!t)return;const e=t.getItem(AE);if(!e||!CM(e))return;const n=t.getItem(PE);if(!!n)try{return JSON.parse(n)}catch{return}}function SM(t){const e=Qe.getInstance().localStorage;!t||!e||(e.setItem(PE,JSON.stringify(t)),e.setItem(AE,String(Date.now()+Mt.getInstance().configTimeToLive*60*60*1e3)))}const EM="Could not fetch config, will use default configs";function IM(t,e){return aM(t.installations).then(n=>{const r=mM(t.app),i=vM(t.app),o=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,s=new Request(o,{method:"POST",headers:{Authorization:`${_M} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:LE(t.app),app_version:CE,sdk_version:yM})});return fetch(s).then(a=>{if(a.ok)return a.json();throw ct.create("RC response not ok")})}).catch(()=>{Bn.info(EM)})}function qy(t){if(!t)return t;const e=Mt.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=cn.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):cn.logSource&&(e.logSource=cn.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:cn.logEndPointUrl&&(e.logEndPointUrl=cn.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:cn.transportKey&&(e.transportKey=cn.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):cn.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=cn.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):cn.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=cn.tracesSamplingRate),e.logTraceAfterSampling=Ky(e.tracesSamplingRate),e.logNetworkAfterSampling=Ky(e.networkRequestsSamplingRate),t}function CM(t){return Number(t)>Date.now()}function Ky(t){return Math.random()<=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pg=1,zd;function FE(t){return Pg=2,zd=zd||xM(t),zd}function TM(){return Pg===3}function xM(t){return kM().then(()=>sM(t.installations)).then(e=>wM(t,e)).then(()=>Yy(),()=>Yy())}function kM(){const t=Qe.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function Yy(){Pg=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=10*1e3,RM=5.5*1e3,BE=3,PM=1e3;let vu=BE,Pr=[],Qy=!1;function AM(){Qy||(Mc(RM),Qy=!0)}function Mc(t){setTimeout(()=>{if(vu!==0){if(!Pr.length)return Mc(Ag);DM()}},t)}function DM(){const t=Pr.splice(0,PM),e=t.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Mt.getInstance().logSource,log_event:e};OM(n,t).catch(()=>{Pr=[...t,...Pr],vu--,Bn.info(`Tries left: ${vu}.`),Mc(Ag)})}function OM(t,e){return NM(t).then(n=>(n.ok||Bn.info("Call to Firebase backend failed."),n.json())).then(n=>{const r=Number(n.nextRequestWaitMillis);let i=Ag;isNaN(r)||(i=Math.max(r,i));const o=n.logResponseDetails;Array.isArray(o)&&o.length>0&&o[0].responseAction==="RETRY_REQUEST_LATER"&&(Pr=[...e,...Pr],Bn.info("Retry transport request later.")),vu=BE,Mc(i)})}function NM(t){const e=Mt.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function MM(t){if(!t.eventTime||!t.message)throw ct.create("invalid cc log");Pr=[...Pr,t]}function LM(t){return(...e)=>{const n=t(...e);MM({message:n,eventTime:Date.now()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;function UE(t,e){jd||(jd=LM(BM)),jd(t,e)}function il(t){const e=Mt.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||!Qe.getInstance().requiredApisAvailable()||t.isAuto&&ME()!==eo.VISIBLE||(TM()?Wd(t):FE(t.performanceController).then(()=>Wd(t),()=>Wd(t)))}function Wd(t){if(!Rg())return;const e=Mt.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||setTimeout(()=>UE(t,1),0)}function FM(t){const e=Mt.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n===r||n===i||!e.loggingEnabled||!e.logNetworkAfterSampling||setTimeout(()=>UE(t,0),0)}function BM(t,e){return e===0?UM(t):$M(t)}function UM(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:$E(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function $M(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const r={application_info:$E(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function $E(t){return{google_app_id:LE(t),app_instance_id:Rg(),web_app_info:{sdk_version:CE,page_url:Qe.getInstance().getUrl(),service_worker_status:fM(),visibility_state:ME(),effective_connection_type:pM()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=100,jM="_",WM=[xE,kE,RE];function HM(t,e){return t.length===0||t.length>zM?!1:e&&e.startsWith(TE)&&WM.indexOf(t)>-1||!t.startsWith(jM)}function VM(t){const e=Math.floor(t);return e<t&&Bn.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r=!1,i){this.performanceController=e,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=Qe.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${tM}-${this.randomId}-${this.name}`,this.traceStopMark=`${nM}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${kp}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw ct.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw ct.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),il(this)}record(e,n,r){if(e<=0)throw ct.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw ct.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));il(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(HM(e,this.name))this.counters[e]=VM(n!=null?n:0);else throw ct.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const r=hM(e),i=gM(n);if(r&&i){this.customAttributes[e]=n;return}if(!r)throw ct.create("invalid attribute name",{attributeName:e});if(!i)throw ct.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,r,i){const o=Qe.getInstance().getUrl();if(!o)return;const s=new li(e,TE+o,!0),a=Math.floor(Qe.getInstance().getTimeOrigin()*1e3);s.setStartTime(a),n&&n[0]&&(s.setDuration(Math.floor(n[0].duration*1e3)),s.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),s.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),s.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const l="first-paint",u="first-contentful-paint";if(r){const d=r.find(f=>f.name===l);d&&d.startTime&&s.putMetric(xE,Math.floor(d.startTime*1e3));const c=r.find(f=>f.name===u);c&&c.startTime&&s.putMetric(kE,Math.floor(c.startTime*1e3)),i&&s.putMetric(RE,Math.floor(i*1e3))}il(s)}static createUserTimingTrace(e,n){const r=new li(e,n,!1,n);il(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e){const n=e;if(!n||n.responseStart===void 0)return;const r=Qe.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),o=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,s=Math.floor((n.responseEnd-n.startTime)*1e3),a=n.name&&n.name.split("?")[0],l={performanceController:t,url:a,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:s};FM(l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=5e3;function Jy(t){!Rg()||(setTimeout(()=>KM(t),0),setTimeout(()=>qM(t),0),setTimeout(()=>YM(t),0))}function qM(t){const e=Qe.getInstance(),n=e.getEntriesByType("resource");for(const r of n)Xy(t,r);e.setupObserver("resource",r=>Xy(t,r))}function KM(t){const e=Qe.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");if(e.onFirstInputDelay){let i=setTimeout(()=>{li.createOobTrace(t,n,r),i=void 0},GM);e.onFirstInputDelay(o=>{i&&(clearTimeout(i),li.createOobTrace(t,n,r,o))})}else li.createOobTrace(t,n,r)}function YM(t){const e=Qe.getInstance(),n=e.getEntriesByType("measure");for(const r of n)Zy(t,r);e.setupObserver("measure",r=>Zy(t,r))}function Zy(t,e){const n=e.name;n.substring(0,kp.length)!==kp&&li.createUserTimingTrace(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||((e==null?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(e==null?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),Qe.getInstance().requiredApisAvailable()?ng().then(n=>{n&&(AM(),FE(this).then(()=>Jy(this),()=>Jy(this)),this.initialized=!0)}).catch(n=>{Bn.info(`Environment doesn't support IndexedDB: ${n}`)}):Bn.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){Mt.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return Mt.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){Mt.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return Mt.getInstance().dataCollectionEnabled}}const XM="[DEFAULT]";function JM(t=sc()){return t=bt(t),Wr(t,"performance").getImmediate()}const ZM=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==XM)throw ct.create("FB not default");if(typeof window>"u")throw ct.create("no window");oM(window);const i=new QM(n,r);return i._init(e),i};function e2(){In(new rn("performance",ZM,"PUBLIC")),Pt(Vy,xp),Pt(Vy,xp,"esm2017")}e2();const e0="@firebase/database",t0="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE="";function t2(t){zE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ir(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new n2(e)}}catch{}return new r2},ni=jE("localStorage"),Rp=jE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new pa("@firebase/database"),i2=function(){let t=1;return function(){return t++}}(),WE=function(t){const e=_R(t),n=new gR;n.update(e);const r=n.digest();return Jh.encodeByteArray(r)},wa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=wa.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let ui=null,n0=!0;const o2=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(to.logLevel=be.VERBOSE,ui=to.log.bind(to),e&&Rp.set("logging_enabled",!0)):typeof t=="function"?ui=t:(ui=null,Rp.remove("logging_enabled"))},ft=function(...t){if(n0===!0&&(n0=!1,ui===null&&Rp.get("logging_enabled")===!0&&o2(!0)),ui){const e=wa.apply(null,t);ui(e)}},ba=function(t){return function(...e){ft(t,...e)}},Pp=function(...t){const e="FIREBASE INTERNAL ERROR: "+wa(...t);to.error(e)},tr=function(...t){const e=`FIREBASE FATAL ERROR: ${wa(...t)}`;throw to.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+wa(...t);to.warn(e)},s2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},HE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},a2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mo="[MIN_NAME]",_i="[MAX_NAME]",Ro=function(t,e){if(t===e)return 0;if(t===mo||e===_i)return-1;if(e===mo||t===_i)return 1;{const n=r0(t),r=r0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},l2=function(t,e){return t===e?0:t<e?-1:1},Ko=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},Dg=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=Dg(t[e[r]]);return n+="}",n},VE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function on(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const GE=function(t){W(!HE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,s,a,l;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},u2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},c2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},d2=new RegExp("^-?(0*)\\d{1,10}$"),f2=-2147483648,p2=2147483647,r0=function(t){if(d2.test(t)){const e=Number(t);if(e>=f2&&e<=p2)return e}return null},Po=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},h2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class no{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}no.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="5",qE="v",KE="s",YE="r",QE="f",XE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,JE="ls",ZE="p",Ap="ac",eI="websocket",tI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function v2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rI(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let r;if(e===eI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);v2(t)&&(n.ns=t.namespace);const i=[];return on(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.counters_={}}incrementCounter(e,n=1){ir(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd={},Vd={};function Ng(t){const e=t.toString();return Hd[e]||(Hd[e]=new y2),Hd[e]}function _2(t,e){const n=t.toString();return Vd[n]||(Vd[n]=e()),Vd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Po(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="start",b2="close",S2="pLPCommand",E2="pRTLPCB",iI="id",oI="pw",sI="ser",I2="cb",C2="seg",T2="ts",x2="d",k2="dframe",aI=1870,lI=30,R2=aI-lI,P2=25e3,A2=3e4;class Vi{constructor(e,n,r,i,o,s,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ba(e),this.stats_=Ng(n),this.urlFn=l=>(this.appCheckToken&&(l[Ap]=this.appCheckToken),rI(n,tI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new w2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(A2)),a2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mg((...o)=>{const[s,a,l,u,d]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===i0)this.id=a,this.password=l;else if(s===b2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[i0]="t",r[sI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[I2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[qE]=Og,this.transportSessionId&&(r[KE]=this.transportSessionId),this.lastSessionId&&(r[JE]=this.lastSessionId),this.applicationId&&(r[ZE]=this.applicationId),this.appCheckToken&&(r[Ap]=this.appCheckToken),typeof location<"u"&&location.hostname&&XE.test(location.hostname)&&(r[YE]=QE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vi.forceAllow_=!0}static forceDisallow(){Vi.forceDisallow_=!0}static isAvailable(){return Vi.forceAllow_?!0:!Vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!u2()&&!c2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zb(n),i=VE(r,R2);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[k2]="t",r[iI]=e,r[oI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=i2(),window[S2+this.uniqueCallbackIdentifier]=e,window[E2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mg.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iI]=this.myID,e[oI]=this.myPW,e[sI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lI+r.length<=aI;){const s=this.pendingSegs.shift();r=r+"&"+C2+i+"="+s.seg+"&"+T2+i+"="+s.ts+"&"+x2+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(P2)),o=()=>{clearTimeout(i),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=16384,O2=45e3;let yu=null;typeof MozWebSocket<"u"?yu=MozWebSocket:typeof WebSocket<"u"&&(yu=WebSocket);class gn{constructor(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ba(this.connId),this.stats_=Ng(n),this.connURL=gn.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,o){const s={};return s[qE]=Og,typeof location<"u"&&location.hostname&&XE.test(location.hostname)&&(s[YE]=QE),n&&(s[KE]=n),r&&(s[JE]=r),i&&(s[Ap]=i),o&&(s[ZE]=o),rI(e,eI,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let r;oS(),this.mySock=new yu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yu!==null&&!gn.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ws(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=VE(n,D2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(O2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gn.responsesRequiredToBeHealthy=2;gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vi,gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=gn&&gn.isAvailable();let r=n&&!gn.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gn];else{const i=this.transports_=[];for(const o of Xs.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=6e4,M2=5e3,L2=10*1024,F2=100*1024,Gd="t",o0="d",B2="s",s0="r",U2="e",a0="o",l0="a",u0="n",c0="p",$2="h";class z2{constructor(e,n,r,i,o,s,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ba("c:"+this.id+":"),this.transportManager_=new Xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>F2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>L2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gd in e){const n=e[Gd];n===l0?this.upgradeIfSecondaryHealthy_():n===s0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===a0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ko("t",e),r=Ko("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:c0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:l0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:u0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ko("t",e),r=Ko("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ko(Gd,e);if(o0 in e){const r=e[o0];if(n===$2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===u0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===B2?this.onConnectionShutdown_(r):n===s0?this.onReset_(r):n===U2?Pp("Server Error: "+r):n===a0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Og!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(N2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(M2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:c0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends cI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _u}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=32,f0=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Pe("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function dI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function j2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Pe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Pe(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Xt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return Xt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hI(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function vn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class W2{constructor(e,n){this.errorPrefix_=n,this.parts_=fI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=oc(this.parts_[r]);gI(this)}}function H2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oc(e),gI(t)}function V2(t){const e=t.parts_.pop();t.byteLength_-=oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function gI(t){if(t.byteLength_>f0)throw new Error(t.errorPrefix_+"has a key path longer than "+f0+" bytes ("+t.byteLength_+").");if(t.parts_.length>d0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d0+") or object contains a cycle "+Yr(t))}function Yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends cI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Lg}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1e3,G2=60*5*1e3,p0=30*1e3,q2=1.3,K2=3e4,Y2="server_kill",h0=3;class Yn extends uI{constructor(e,n,r,i,o,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yn.nextPersistentConnectionId_++,this.log_=ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yo,this.maxReconnectDelay_=G2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!oS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_u.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,o={r:i,a:e,b:n};this.log_(it(o)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ic,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,i){this.initConnection_();const o=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;Yn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ir(e,"w")){const r=fo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=p0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const o={p:e},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pp("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>K2&&(this.reconnectDelay_=Yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*q2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yn.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(c){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);s?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new z2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Dt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Y2)},o))}catch(c){this.log_("Failed to get token: "+c),s||(this.repoInfo_.nodeAdmin&&Dt(c),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fp(this.interruptReasons_)&&(this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>Dg(o)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Pe(e).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=h0&&(this.reconnectDelay_=p0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=h0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zE.replace(/\./g,"-")]=1,eg()?e["framework.cordova"]=1:iS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_u.getInstance().currentlyOnline();return fp(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new fe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new fe(mo,e),i=new fe(mo,n);return this.compare(r,i)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;class mI extends Lc{static get __EMPTY_NODE(){return ol}static set __EMPTY_NODE(e){ol=e}compare(e,n){return Ro(e.name,n.name)}isDefinedOn(e){throw To("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return fe.MIN}maxPost(){return new fe(_i,ol)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,ol)}toString(){return".key"}}const ro=new mI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:qe.RED,this.left=i!=null?i:Tt.EMPTY_NODE,this.right=o!=null?o:Tt.EMPTY_NODE}copy(e,n,r,i,o){return new qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class Q2{copy(e,n,r,i,o){return this}insert(e,n,r){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(e,n=Tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new Tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}}Tt.EMPTY_NODE=new Q2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t,e){return Ro(t.name,e.name)}function Fg(t,e){return Ro(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp;function J2(t){Dp=t}const vI=function(t){return typeof t=="number"?"number:"+GE(t):"string:"+t},yI=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ir(e,".sv"),"Priority must be a string or number.")}else W(t===Dp||t.isEmpty(),"priority of unexpected type.");W(t===Dp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g0;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yI(this.priorityNode_)}static set __childrenNodeConstructor(e){g0=e}static get __childrenNodeConstructor(){return g0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ae(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(W(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=GE(this.value_):e+=this.value_,this.lazyHash_=WE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(n),o=Ve.VALUE_TYPE_ORDER.indexOf(r);return W(i>=0,"Unknown leaf type: "+n),W(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _I,wI;function Z2(t){_I=t}function eL(t){wI=t}class tL extends Lc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Ro(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(_i,new Ve("[PRIORITY-POST]",wI))}makePost(e,n){const r=_I(e);return new fe(n,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const pt=new tL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=Math.log(2);class rL{constructor(e){const n=o=>parseInt(Math.log(o)/nL,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new qe(f,c.node,qe.BLACK,null,null);{const p=parseInt(d/2,10)+l,h=i(l,p),v=i(p+1,u);return c=t[p],f=n?n(c):c,new qe(f,c.node,qe.BLACK,h,v)}},o=function(l){let u=null,d=null,c=t.length;const f=function(h,v){const w=c-h,m=c;c-=h;const g=i(w+1,m),y=t[w],_=n?n(y):y;p(new qe(_,y.node,v,null,g))},p=function(h){u?(u.left=h,u=h):(d=h,u=h)};for(let h=0;h<l.count;++h){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(h+1));v?f(w,qe.BLACK):(f(w,qe.BLACK),f(w,qe.RED))}return d},s=new rL(t.length),a=o(s);return new Tt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd;const Ri={};class qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Ri&&pt,"ChildrenNode.ts has not been loaded"),qd=qd||new qn({".priority":Ri},{".priority":pt}),qd}get(e){const n=fo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tt?n:null}hasIndex(e){return ir(this.indexSet_,e.toString())}addIndex(e,n){W(e!==ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(fe.Wrap);let s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=wu(r,e.getCompare()):a=Ri;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new qn(d,u)}addToIndexes(e,n){const r=lu(this.indexes_,(i,o)=>{const s=fo(this.indexSet_,o);if(W(s,"Missing index implementation for "+o),i===Ri)if(s.isDefinedOn(e.node)){const a=[],l=n.getIterator(fe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),wu(a,s.getCompare())}else return Ri;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new fe(e.name,a))),l.insert(e,e.node)}});return new qn(r,this.indexSet_)}removeFromIndexes(e,n){const r=lu(this.indexes_,i=>{if(i===Ri)return i;{const o=n.get(e.name);return o?i.remove(new fe(e.name,o)):i}});return new qn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class ve{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yI(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qo||(Qo=new ve(new Tt(Fg),null,qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qo}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qo:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new fe(e,n);let i,o;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Qo:this.priorityNode_;return new ve(i,s,o)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{W(ae(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(pt,(s,a)=>{n[s]=a.val(e),r++,o&&ve.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vI(this.getPriority().val())+":"),this.forEachChild(pt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":WE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new fe(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new fe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new fe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,fe.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sa?-1:0}withIndex(e){if(e===ro||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pt),i=n.getIterator(pt);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===ro?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iL extends ve{constructor(){super(new Tt(Fg),ve.EMPTY_NODE,qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const Sa=new iL;Object.defineProperties(fe,{MIN:{value:new fe(mo,ve.EMPTY_NODE)},MAX:{value:new fe(_i,Sa)}});mI.__EMPTY_NODE=ve.EMPTY_NODE;Ve.__childrenNodeConstructor=ve;J2(Sa);eL(Sa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=!0;function rt(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,rt(e))}if(!(t instanceof Array)&&oL){const n=[];let r=!1;if(on(t,(s,a)=>{if(s.substring(0,1)!=="."){const l=rt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new fe(s,l)))}}),n.length===0)return ve.EMPTY_NODE;const o=wu(n,X2,s=>s.name,Fg);if(r){const s=wu(n,pt.getCompare());return new ve(o,rt(e),new qn({".priority":s},{".priority":pt}))}else return new ve(o,rt(e),qn.Default)}else{let n=ve.EMPTY_NODE;return on(t,(r,i)=>{if(ir(t,r)&&r.substring(0,1)!=="."){const o=rt(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(rt(e))}}Z2(rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL extends Lc{constructor(e){super(),this.indexPath_=e,W(!ce(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Ro(e.name,n.name):o}makePost(e,n){const r=rt(e),i=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new fe(n,i)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,Sa);return new fe(_i,e)}toString(){return fI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL extends Lc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ro(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,n){const r=rt(e);return new fe(n,r)}toString(){return".value"}}const lL=new aL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t){return{type:"value",snapshotNode:t}}function cL(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dL(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function m0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mo}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_i}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new Bg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function v0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pt?n="$priority":t.index_===lL?n="$value":t.index_===ro?n="$key":(W(t.index_ instanceof sL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function y0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends uI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ba("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const s=bu.getListenId_(e,r),a={};this.listens_[s]=a;const l=v0(e._queryParams);this.restRequest_(o+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(o,c,!1,r),fo(this.listens_,s)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=bu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=v0(e._queryParams),r=e._path.toString(),i=new ic;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xo(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ws(a.responseText)}catch{Dt("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(){return{value:null,children:new Map}}function bI(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Su());const i=t.children.get(r);e=ke(e),bI(i,e,n)}}function Op(t,e,n){t.value!==null?n(e,t.value):hL(t,(r,i)=>{const o=new Pe(e.toString()+"/"+r);Op(i,o,n)})}function hL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&on(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=10*1e3,mL=30*1e3,vL=5*60*1e3;class yL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gL(e);const r=_0+(mL-_0)*Math.random();ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;on(e,(i,o)=>{o>0&&ir(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*vL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dn||(Dn={}));function SI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function EI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function II(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dn.ACK_USER_WRITE,this.source=SI()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new Eu(Se(),n,this.revert)}}else return W(ae(this.path)===e,"operationForChild called for unrelated child."),new Eu(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dn.OVERWRITE}operationForChild(e){return ce(this.path)?new wi(this.source,Se(),this.snap.getImmediateChild(e)):new wi(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new wi(this.source,Se(),n.value):new Js(this.source,Se(),n)}else return W(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Js(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function _L(t,e,n,r){const i=[],o=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(fL(s.childName,s.snapshotNode))}),Xo(t,i,"child_removed",e,r,n),Xo(t,i,"child_added",e,r,n),Xo(t,i,"child_moved",o,r,n),Xo(t,i,"child_changed",e,r,n),Xo(t,i,"value",e,r,n),i}function Xo(t,e,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>bL(t,a,l)),s.forEach(a=>{const l=wL(t,a,o);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function wL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bL(t,e,n){if(e.childName==null||n.childName==null)throw To("Should only compare child_ events.");const r=new fe(e.childName,e.snapshotNode),i=new fe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){return{eventCache:t,serverCache:e}}function bs(t,e,n,r){return CI(new Ug(e,n,r),t.serverCache)}function TI(t,e,n,r){return CI(t.eventCache,new Ug(e,n,r))}function Np(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd;const SL=()=>(Kd||(Kd=new Tt(l2)),Kd);class xe{constructor(e,n=SL()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return on(e,(r,i)=>{n=n.set(new Pe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(ce(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(ke(e),n);return o!=null?{path:We(new Pe(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new xe(null)}}set(e,n){if(ce(e))return new xe(n,this.children);{const r=ae(e),o=(this.children.get(r)||new xe(null)).set(ke(e),n),s=this.children.insert(r,o);return new xe(this.value,s)}}remove(e){if(ce(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(ke(e));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new xe(null):new xe(this.value,o)}else return this}}get(e){if(ce(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(ce(e))return n;{const r=ae(e),o=(this.children.get(r)||new xe(null)).setTree(ke(e),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new xe(this.value,s)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const o=ae(e),s=this.children.get(o);return s?s.findOnPath_(ke(e),We(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=ae(e),o=this.children.get(i);return o?o.foreachOnPath_(ke(e),We(n,i),r):new xe(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.writeTree_=e}static empty(){return new bn(new xe(null))}}function Ss(t,e,n){if(ce(e))return new bn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let o=r.value;const s=Xt(i,e);return o=o.updateChild(s,n),new bn(t.writeTree_.set(i,o))}else{const i=new xe(n),o=t.writeTree_.setTree(e,i);return new bn(o)}}}function w0(t,e,n){let r=t;return on(n,(i,o)=>{r=Ss(r,We(e,i),o)}),r}function b0(t,e){if(ce(e))return bn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new bn(n)}}function Mp(t,e){return Ti(t,e)!=null}function Ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xt(n.path,e)):null}function S0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pt,(r,i)=>{e.push(new fe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new fe(r,i.value))}),e}function Ar(t,e){if(ce(e))return t;{const n=Ti(t,e);return n!=null?new bn(new xe(n)):new bn(t.writeTree_.subtree(e))}}function Lp(t){return t.writeTree_.isEmpty()}function vo(t,e){return xI(Se(),t.writeTree_,e)}function xI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(W(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=xI(We(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){return OI(e,t)}function EL(t,e,n,r,i){W(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ss(t.visibleWrites,e,n)),t.lastWriteId=r}function IL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function CL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,s=t.allWrites.length-1;for(;i&&s>=0;){const a=t.allWrites[s];a.visible&&(s>=n&&TL(a,r.path)?i=!1:vn(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return xL(t),!0;if(r.snap)t.visibleWrites=b0(t.visibleWrites,r.path);else{const a=r.children;on(a,l=>{t.visibleWrites=b0(t.visibleWrites,We(r.path,l))})}return!0}else return!1}function TL(t,e){if(t.snap)return vn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vn(We(t.path,n),e))return!0;return!1}function xL(t){t.visibleWrites=RI(t.allWrites,kL,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kL(t){return t.visible}function RI(t,e,n){let r=bn.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const s=o.path;let a;if(o.snap)vn(n,s)?(a=Xt(n,s),r=Ss(r,a,o.snap)):vn(s,n)&&(a=Xt(s,n),r=Ss(r,Se(),o.snap.getChild(a)));else if(o.children){if(vn(n,s))a=Xt(n,s),r=w0(r,a,o.children);else if(vn(s,n))if(a=Xt(s,n),ce(a))r=w0(r,Se(),o.children);else{const l=fo(o.children,ae(a));if(l){const u=l.getChild(ke(a));r=Ss(r,Se(),u)}}}else throw To("WriteRecord should have .snap or .children")}}return r}function PI(t,e,n,r,i){if(!r&&!i){const o=Ti(t.visibleWrites,e);if(o!=null)return o;{const s=Ar(t.visibleWrites,e);if(Lp(s))return n;if(n==null&&!Mp(s,Se()))return null;{const a=n||ve.EMPTY_NODE;return vo(s,a)}}}else{const o=Ar(t.visibleWrites,e);if(!i&&Lp(o))return n;if(!i&&n==null&&!Mp(o,Se()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(vn(u.path,e)||vn(e,u.path))},a=RI(t.allWrites,s,e),l=n||ve.EMPTY_NODE;return vo(a,l)}}}function RL(t,e,n){let r=ve.EMPTY_NODE;const i=Ti(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pt,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=Ar(t.visibleWrites,e);return n.forEachChild(pt,(s,a)=>{const l=vo(Ar(o,new Pe(s)),a);r=r.updateImmediateChild(s,l)}),S0(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=Ar(t.visibleWrites,e);return S0(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function PL(t,e,n,r,i){W(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=We(e,n);if(Mp(t.visibleWrites,o))return null;{const s=Ar(t.visibleWrites,o);return Lp(s)?i.getChild(n):vo(s,i.getChild(n))}}function AL(t,e,n,r){const i=We(e,n),o=Ti(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=Ar(t.visibleWrites,i);return vo(s,r.getNode().getImmediateChild(n))}else return null}function DL(t,e){return Ti(t.visibleWrites,e)}function OL(t,e,n,r,i,o,s){let a;const l=Ar(t.visibleWrites,e),u=Ti(l,Se());if(u!=null)a=u;else if(n!=null)a=vo(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function NL(){return{visibleWrites:bn.empty(),allWrites:[],lastWriteId:-1}}function Fp(t,e,n,r){return PI(t.writeTree,t.treePath,e,n,r)}function AI(t,e){return RL(t.writeTree,t.treePath,e)}function E0(t,e,n,r){return PL(t.writeTree,t.treePath,e,n,r)}function Iu(t,e){return DL(t.writeTree,We(t.treePath,e))}function ML(t,e,n,r,i,o){return OL(t.writeTree,t.treePath,e,n,r,i,o)}function $g(t,e,n){return AL(t.writeTree,t.treePath,e,n)}function DI(t,e){return OI(We(t.treePath,e),t.writeTree)}function OI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,m0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,dL(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,cL(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,m0(r,e.snapshotNode,i.oldSnap));else throw To("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const NI=new FL;class zg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ug(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $g(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),o=ML(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]}}function BL(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UL(t,e,n,r,i){const o=new LL;let s,a;if(n.type===Dn.OVERWRITE){const u=n;u.source.fromUser?s=Bp(t,e,u.path,u.snap,r,i,o):(W(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),s=Cu(t,e,u.path,u.snap,r,i,a,o))}else if(n.type===Dn.MERGE){const u=n;u.source.fromUser?s=zL(t,e,u.path,u.children,r,i,o):(W(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),s=Up(t,e,u.path,u.children,r,i,a,o))}else if(n.type===Dn.ACK_USER_WRITE){const u=n;u.revert?s=HL(t,e,u.path,r,i,o):s=jL(t,e,u.path,u.affectedTree,r,i,o)}else if(n.type===Dn.LISTEN_COMPLETE)s=WL(t,e,n.path,r,o);else throw To("Unknown operation type: "+n.type);const l=o.getChanges();return $L(e,s,l),{viewCache:s,changes:l}}function $L(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Np(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(uL(Np(e)))}}function MI(t,e,n,r,i,o){const s=e.eventCache;if(Iu(r,n)!=null)return e;{let a,l;if(ce(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=bi(e),d=u instanceof ve?u:ve.EMPTY_NODE,c=AI(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const u=Fp(r,bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=ae(n);if(u===".priority"){W(Fr(n)===1,"Can't have a priority with additional path components");const d=s.getNode();l=e.serverCache.getNode();const c=E0(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=s.getNode()}else{const d=ke(n);let c;if(s.isCompleteForChild(u)){l=e.serverCache.getNode();const f=E0(r,n,s.getNode(),l);f!=null?c=s.getNode().getImmediateChild(u).updateChild(d,f):c=s.getNode().getImmediateChild(u)}else c=$g(r,u,e.serverCache);c!=null?a=t.filter.updateChild(s.getNode(),u,c,d,i,o):a=s.getNode()}}return bs(e,a,s.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Cu(t,e,n,r,i,o,s,a){const l=e.serverCache;let u;const d=s?t.filter:t.filter.getIndexedFilter();if(ce(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=ae(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const h=ke(n),w=l.getNode().getImmediateChild(p).updateChild(h,r);p===".priority"?u=d.updatePriority(l.getNode(),w):u=d.updateChild(l.getNode(),p,w,h,NI,null)}const c=TI(e,u,l.isFullyInitialized()||ce(n),d.filtersNodes()),f=new zg(i,c,o);return MI(t,c,n,i,f,a)}function Bp(t,e,n,r,i,o,s){const a=e.eventCache;let l,u;const d=new zg(i,e,o);if(ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,s),l=bs(e,u,!0,t.filter.filtersNodes());else{const c=ae(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=bs(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ke(n),p=a.getNode().getImmediateChild(c);let h;if(ce(f))h=r;else{const v=d.getCompleteChild(c);v!=null?dI(f)===".priority"&&v.getChild(pI(f)).isEmpty()?h=v:h=v.updateChild(f,r):h=ve.EMPTY_NODE}if(p.equals(h))l=e;else{const v=t.filter.updateChild(a.getNode(),c,h,f,d,s);l=bs(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function I0(t,e){return t.eventCache.isCompleteForChild(e)}function zL(t,e,n,r,i,o,s){let a=e;return r.foreach((l,u)=>{const d=We(n,l);I0(e,ae(d))&&(a=Bp(t,a,d,u,i,o,s))}),r.foreach((l,u)=>{const d=We(n,l);I0(e,ae(d))||(a=Bp(t,a,d,u,i,o,s))}),a}function C0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Up(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ce(n)?u=r:u=new xe(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),h=C0(t,p,f);l=Cu(t,l,new Pe(c),h,i,o,s,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const h=e.serverCache.getNode().getImmediateChild(c),v=C0(t,h,f);l=Cu(t,l,new Pe(c),v,i,o,s,a)}}),l}function jL(t,e,n,r,i,o,s){if(Iu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cu(t,e,n,l.getNode().getChild(n),i,o,a,s);if(ce(n)){let u=new xe(null);return l.getNode().forEachChild(ro,(d,c)=>{u=u.set(new Pe(d),c)}),Up(t,e,n,u,i,o,a,s)}else return e}else{let u=new xe(null);return r.foreach((d,c)=>{const f=We(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),Up(t,e,n,u,i,o,a,s)}}function WL(t,e,n,r,i){const o=e.serverCache,s=TI(e,o.getNode(),o.isFullyInitialized()||ce(n),o.isFiltered());return MI(t,s,n,r,NI,i)}function HL(t,e,n,r,i,o){let s;if(Iu(r,n)!=null)return e;{const a=new zg(r,e,i),l=e.eventCache.getNode();let u;if(ce(n)||ae(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Fp(r,bi(e));else{const c=e.serverCache.getNode();W(c instanceof ve,"serverChildren would be complete if leaf node"),d=AI(r,c)}d=d,u=t.filter.updateFullNode(l,d,o)}else{const d=ae(n);let c=$g(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ke(n),a,o):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,ve.EMPTY_NODE,ke(n),a,o):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Fp(r,bi(e)),s.isLeafNode()&&(u=t.filter.updateFullNode(u,s,o)))}return s=e.serverCache.isFullyInitialized()||Iu(r,Se())!=null,bs(e,u,s,t.filter.filtersNodes())}}function VL(t,e){const n=bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function T0(t,e,n,r){e.type===Dn.MERGE&&e.source.queryId!==null&&(W(bi(t.viewCache_),"We should always have a full cache before handling merges"),W(Np(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=UL(t.processor_,i,e,n,r);return BL(t.processor_,o.viewCache),W(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,GL(t,o.changes,o.viewCache.eventCache.getNode(),null)}function GL(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return _L(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x0;function qL(t){W(!x0,"__referenceConstructor has already been defined"),x0=t}function jg(t,e,n,r){const i=e.source.queryId;if(i!==null){const o=t.views.get(i);return W(o!=null,"SyncTree gave us an op for an invalid query."),T0(o,e,n,r)}else{let o=[];for(const s of t.views.values())o=o.concat(T0(s,e,n,r));return o}}function Wg(t,e){let n=null;for(const r of t.views.values())n=n||VL(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k0;function KL(t){W(!k0,"__referenceConstructor has already been defined"),k0=t}class R0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=NL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LI(t,e,n,r,i){return EL(t.pendingWriteTree_,e,n,r,i),i?Bc(t,new wi(SI(),e,n)):[]}function ri(t,e,n=!1){const r=IL(t.pendingWriteTree_,e);if(CL(t.pendingWriteTree_,e)){let o=new xe(null);return r.snap!=null?o=o.set(Se(),!0):on(r.children,s=>{o=o.set(new Pe(s),!0)}),Bc(t,new Eu(r.path,o,n))}else return[]}function Fc(t,e,n){return Bc(t,new wi(EI(),e,n))}function YL(t,e,n){const r=xe.fromObject(n);return Bc(t,new Js(EI(),e,r))}function QL(t,e,n,r){const i=UI(t,r);if(i!=null){const o=$I(i),s=o.path,a=o.queryId,l=Xt(s,e),u=new wi(II(a),l,n);return zI(t,s,u)}else return[]}function XL(t,e,n,r){const i=UI(t,r);if(i){const o=$I(i),s=o.path,a=o.queryId,l=Xt(s,e),u=xe.fromObject(n),d=new Js(II(a),l,u);return zI(t,s,d)}else return[]}function Hg(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(s,a)=>{const l=Xt(s,e),u=Wg(a,l);if(u)return u});return PI(i,e,o,n,!0)}function Bc(t,e){return FI(e,t.syncPointTree_,null,kI(t.pendingWriteTree_,Se()))}function FI(t,e,n,r){if(ce(t.path))return BI(t,e,n,r);{const i=e.get(Se());n==null&&i!=null&&(n=Wg(i,Se()));let o=[];const s=ae(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,d=DI(r,s);o=o.concat(FI(a,l,u,d))}return i&&(o=o.concat(jg(i,t,r,n))),o}}function BI(t,e,n,r){const i=e.get(Se());n==null&&i!=null&&(n=Wg(i,Se()));let o=[];return e.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=DI(r,s),d=t.operationForChild(s);d&&(o=o.concat(BI(d,a,l,u)))}),i&&(o=o.concat(jg(i,t,r,n))),o}function UI(t,e){return t.tagToQueryMap.get(e)}function $I(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function zI(t,e,n){const r=t.syncPointTree_.get(e);W(r,"Missing sync point for query tag that we're tracking");const i=kI(t.pendingWriteTree_,e);return jg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vg(n)}node(){return this.node_}}class Gg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new Gg(this.syncTree_,n)}node(){return Hg(this.syncTree_,this.path_)}}const JL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},P0=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ZL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eF(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ZL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},eF=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&W(!1,"Unexpected increment value: "+r);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},tF=function(t,e,n,r){return qg(e,new Gg(n,t),r)},jI=function(t,e,n){return qg(t,new Vg(e),n)};function qg(t,e,n){const r=t.getPriority().val(),i=P0(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const s=t,a=P0(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new Ve(a,rt(i)):t}else{const s=t;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new Ve(i))),s.forEachChild(pt,(a,l)=>{const u=qg(l,e.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yg(t,e){let n=e instanceof Pe?e:new Pe(e),r=t,i=ae(n);for(;i!==null;){const o=fo(r.node.children,i)||{children:{},childCount:0};r=new Kg(i,r,o),n=ke(n),i=ae(n)}return r}function Ao(t){return t.node.value}function WI(t,e){t.node.value=e,$p(t)}function HI(t){return t.node.childCount>0}function nF(t){return Ao(t)===void 0&&!HI(t)}function Uc(t,e){on(t.node.children,(n,r)=>{e(new Kg(n,t,r))})}function VI(t,e,n,r){n&&!r&&e(t),Uc(t,i=>{VI(i,e,!0,r)}),n&&r&&e(t)}function rF(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ea(t){return new Pe(t.parent===null?t.name:Ea(t.parent)+"/"+t.name)}function $p(t){t.parent!==null&&iF(t.parent,t.name,t)}function iF(t,e,n){const r=nF(n),i=ir(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,$p(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$p(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF=/[\[\].#$\/\u0000-\u001F\u007F]/,sF=/[\[\].#$\u0000-\u001F\u007F]/,Yd=10*1024*1024,GI=function(t){return typeof t=="string"&&t.length!==0&&!oF.test(t)},qI=function(t){return typeof t=="string"&&t.length!==0&&!sF.test(t)},aF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qI(t)},lF=function(t,e,n,r){r&&e===void 0||Qg(rg(t,"value"),e,n)},Qg=function(t,e,n){const r=n instanceof Pe?new W2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Yr(r)+" with contents = "+e.toString());if(HE(e))throw new Error(t+"contains "+e.toString()+" "+Yr(r));if(typeof e=="string"&&e.length>Yd/3&&oc(e)>Yd)throw new Error(t+"contains a string greater than "+Yd+" utf8 bytes "+Yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(on(e,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!GI(s)))throw new Error(t+" contains an invalid key ("+s+") "+Yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);H2(r,s),Qg(t,a,r),V2(r)}),i&&o)throw new Error(t+' contains ".value" child '+Yr(r)+" in addition to actual children.")}},KI=function(t,e,n,r){if(!(r&&n===void 0)&&!qI(n))throw new Error(rg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),KI(t,e,n,r)},cF=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!GI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aF(n))throw new Error(rg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function YI(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();n!==null&&!hI(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function nr(t,e,n){YI(t,n),pF(t,r=>vn(r,e)||vn(e,r))}function pF(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(hF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ui&&ft("event: "+n.toString()),Po(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF="repo_interrupt",mF=25;class vF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Su(),this.transactionQueueTree_=new Kg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yF(t,e,n){if(t.stats_=Ng(t.repoInfo_),t.forceRestClient_||h2())t.server_=new bu(t.repoInfo_,(r,i,o,s)=>{A0(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>D0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yn(t.repoInfo_,e,(r,i,o,s)=>{A0(t,r,i,o,s)},r=>{D0(t,r)},r=>{wF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_2(t.repoInfo_,()=>new yL(t.stats_,t.server_)),t.infoData_=new pL,t.infoSyncTree_=new R0({startListening:(r,i,o,s)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Fc(t.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Jg(t,"connected",!1),t.serverSyncTree_=new R0({startListening:(r,i,o,s)=>(t.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);nr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function _F(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xg(t){return JL({timestamp:_F(t)})}function A0(t,e,n,r,i){t.dataUpdateCount++;const o=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(i)if(r){const l=lu(n,u=>rt(u));s=XL(t.serverSyncTree_,o,l,i)}else{const l=rt(n);s=QL(t.serverSyncTree_,o,l,i)}else if(r){const l=lu(n,u=>rt(u));s=YL(t.serverSyncTree_,o,l)}else{const l=rt(n);s=Fc(t.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=$c(t,o)),nr(t.eventQueue_,a,s)}function D0(t,e){Jg(t,"connected",e),e===!1&&SF(t)}function wF(t,e){on(e,(n,r)=>{Jg(t,n,r)})}function Jg(t,e,n){const r=new Pe("/.info/"+e),i=rt(n);t.infoData_.updateSnapshot(r,i);const o=Fc(t.infoSyncTree_,r,i);nr(t.eventQueue_,r,o)}function QI(t){return t.nextWriteId_++}function bF(t,e,n,r,i){Zg(t,"set",{path:e.toString(),value:n,priority:r});const o=Xg(t),s=rt(n,r),a=Hg(t.serverSyncTree_,e),l=jI(s,a,o),u=QI(t),d=LI(t.serverSyncTree_,e,l,u,!0);YI(t.eventQueue_,d),t.server_.put(e.toString(),s.val(!0),(f,p)=>{const h=f==="ok";h||Dt("set at "+e+" failed: "+f);const v=ri(t.serverSyncTree_,u,!h);nr(t.eventQueue_,e,v),IF(t,i,f,p)});const c=t1(t,e);$c(t,c),nr(t.eventQueue_,c,[])}function SF(t){Zg(t,"onDisconnectEvents");const e=Xg(t),n=Su();Op(t.onDisconnect_,Se(),(i,o)=>{const s=tF(i,o,t.serverSyncTree_,e);bI(n,i,s)});let r=[];Op(n,Se(),(i,o)=>{r=r.concat(Fc(t.serverSyncTree_,i,o));const s=t1(t,i);$c(t,s)}),t.onDisconnect_=Su(),nr(t.eventQueue_,Se(),r)}function EF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gF)}function Zg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function IF(t,e,n,r){e&&Po(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,e(s)}})}function XI(t,e,n){return Hg(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function em(t,e=t.transactionQueueTree_){if(e||zc(t,e),Ao(e)){const n=ZI(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CF(t,Ea(e),n)}else HI(e)&&Uc(e,n=>{em(t,n)})}function CF(t,e,n){const r=n.map(u=>u.currentWriteId),i=XI(t,e,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const d=n[u];W(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Xt(e,d.path);o=o.updateChild(c,d.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Zg(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ri(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();zc(t,Yg(t.transactionQueueTree_,e)),em(t,t.transactionQueueTree_),nr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Po(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Dt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}$c(t,e)}},s)}function $c(t,e){const n=JI(t,e),r=Ea(n),i=ZI(t,n);return TF(t,i,r),r}function TF(t,e,n){if(e.length===0)return;const r=[];let i=[];const s=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Xt(n,l.path);let d=!1,c;if(W(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mF)d=!0,c="maxretry",i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else{const f=XI(t,l.path,s);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Qg("transaction failed: Data returned ",p,l.path);let h=rt(p);typeof p=="object"&&p!=null&&ir(p,".priority")||(h=h.updatePriority(f.getPriority()));const w=l.currentWriteId,m=Xg(t),g=jI(h,f,m);l.currentOutputSnapshotRaw=h,l.currentOutputSnapshotResolved=g,l.currentWriteId=QI(t),s.splice(s.indexOf(w),1),i=i.concat(LI(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(ri(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0))}nr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}zc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Po(r[a]);em(t,t.transactionQueueTree_)}function JI(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&Ao(r)===void 0;)r=Yg(r,n),e=ke(e),n=ae(e);return r}function ZI(t,e){const n=[];return e1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function e1(t,e,n){const r=Ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Uc(e,i=>{e1(t,i,n)})}function zc(t,e){const n=Ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,WI(e,n.length>0?n:void 0)}Uc(e,r=>{zc(t,r)})}function t1(t,e){const n=Ea(JI(t,e)),r=Yg(t.transactionQueueTree_,e);return rF(r,i=>{Qd(t,i)}),Qd(t,r),VI(r,i=>{Qd(t,i)}),n}function Qd(t,e){const n=Ao(e);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(W(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(W(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(ri(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?WI(e,void 0):n.length=o+1,nr(t.eventQueue_,Ea(e),i);for(let s=0;s<r.length;s++)Po(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const O0=function(t,e){const n=RF(t),r=n.namespace;n.domain==="firebase.com"&&tr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||s2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Pe(n.pathString)}},RF=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=xF(t.substring(d,c)));const f=kF(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const h=e.indexOf(".");r=e.substring(0,h).toLowerCase(),n=e.substring(h+1),o=r}"ns"in f&&(o=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:dI(this._path)}get ref(){return new xi(this._repo,this._path)}get _queryIdentifier(){const e=y0(this._queryParams),n=Dg(e);return n==="{}"?"default":n}get _queryObject(){return y0(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof tm))return!1;const n=this._repo===e._repo,r=hI(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+j2(this._path)}}class xi extends tm{constructor(e,n){super(e,n,new Bg,!1)}get parent(){const e=pI(this._path);return e===null?null:new xi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function PF(t,e){return t=bt(t),t._checkNotDeleted("ref"),e!==void 0?AF(t._root,e):t._root}function AF(t,e){return t=bt(t),ae(t._path)===null?uF("child","path",e,!1):KI("child","path",e,!1),new xi(t._repo,We(t._path,e))}function DF(t,e){t=bt(t),cF("set",t._path),lF("set",e,t._path,!1);const n=new ic;return bF(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}qL(xi);KL(xi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF="FIREBASE_DATABASE_EMULATOR_HOST",zp={};let NF=!1;function MF(t,e,n,r){t.repoInfo_=new nI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function LF(t,e,n,r,i){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||tr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=O0(o,i),a=s.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[OF]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=O0(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const d=i&&l?new no(no.OWNER):new m2(t.name,t.options,e);dF("Invalid Firebase Database URL",s),ce(s.path)||tr("Database URL must point to the root of a Firebase Database (not including a child path).");const c=BF(a,t,d,new g2(t.name,n));return new UF(c,t)}function FF(t,e){const n=zp[e];(!n||n[t.key]!==t)&&tr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EF(t),delete n[t.key]}function BF(t,e,n,r){let i=zp[e.name];i||(i={},zp[e.name]=i);let o=i[t.toURLString()];return o&&tr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new vF(t,NF,n,r),i[t.toURLString()]=o,o}class UF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xi(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tr("Cannot call "+e+" on a deleted database.")}}function n1(t=sc(),e){const n=Wr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sR("database");r&&$F(n,...r)}return n}function $F(t,e,n,r={}){t=bt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&tr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&tr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new no(no.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:lR(r.mockUserToken,t.app.options.projectId);o=new no(s)}MF(i,e,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t){t2(ha),In(new rn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return LF(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Pt(e0,t0,t),Pt(e0,t0,"esm2017")}Yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zF();const jF={apiKey:"AIzaSyCgpCfqBuBLzGY38hWz8divtyMo29tZnXY",authDomain:"nikoweb-a13af.firebaseapp.com",projectId:"nikoweb-a13af",storageBucket:"nikoweb-a13af.appspot.com",messagingSenderId:"580441491672",appId:"1:580441491672:web:6fb258f3a52119b305efad",measurementId:"G-2010JYNQ0V"},Dl=dS(jF);n1(Dl);const WF=()=>{_P().length?console.log("Already Initialized firebase"):(WS(Dl),typeof window<"u"&&(XN(Dl),JM(Dl)),console.log("Initialized firebase"))};function Ia(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function r1(){var t=Ia([`
          @media (min-width: `,`) {
            `,`
          }
        `]);return r1=function(){return t},t}function i1(){var t=Ia([`
          @media (max-width: `,`) {
            `,`
          }
        `]);return i1=function(){return t},t}function o1(){var t=Ia([`
    @media (min-width: `,`) and
      (max-width: `,`) {
      `,`
    }
  `]);return o1=function(){return t},t}function s1(){var t=Ia([`
    @media (min-width: `,`) {
      `,`
    }
  `]);return s1=function(){return t},t}function a1(){var t=Ia([`
    @media (max-width: `,`) {
      `,`
    }
  `]);return a1=function(){return t},t}var HF={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function al(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e[t]?e[t]:parseInt(t)?t:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}function VF(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:HF,e=function(s){return function(){return dn(a1(),al(s,t),dn.apply(void 0,arguments))}},n=function(s){return function(){return dn(s1(),al(s,t),dn.apply(void 0,arguments))}},r=function(s,a){return function(){return dn(o1(),al(s,t),al(a,t),dn.apply(void 0,arguments))}},i=Object.keys(t).reduce(function(o,s){var a=t[s];return o.to[s]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(s,"') instead of old media.to.").concat(s," (Probably we'll deprecate it)")),dn(i1(),a,dn.apply(void 0,arguments))},o.from[s]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(s,"') instead of old media.from.").concat(s," (Probably we'll deprecate it)")),dn(r1(),a,dn.apply(void 0,arguments))},o},{to:{},from:{}});return Object.assign({lessThan:e,greaterThan:n,between:r},i)}var GF=VF();const qF=J.main`
    width: 100VW;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A090E;
`,KF=J.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`,YF=J.img`
    width: 5rem;

    ${GF.greaterThan("medium")`
       width: 10rem;
    `}
`;var l1={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(typeof self<"u"?self:xC,function(){return function(n){var r={};function i(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return n[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=n,i.c=r,i.d=function(o,s,a){i.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:a})},i.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(s,"a",s),s},i.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},i.p="/",i(i.s=7)}([function(n,r,i){function o(s,a,l,u,d,c,f,p){if(!s){var h;if(a===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[l,u,d,c,f,p],w=0;h=new Error(a.replace(/%s/g,function(){return v[w++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}}n.exports=o},function(n,r,i){function o(a){return function(){return a}}var s=function(){};s.thatReturns=o,s.thatReturnsFalse=o(!1),s.thatReturnsTrue=o(!0),s.thatReturnsNull=o(null),s.thatReturnsThis=function(){return this},s.thatReturnsArgument=function(a){return a},n.exports=s},function(n,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function u(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var c={},f=0;f<10;f++)c["_"+String.fromCharCode(f)]=f;var p=Object.getOwnPropertyNames(c).map(function(v){return c[v]});if(p.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(v){h[v]=v}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}n.exports=u()?Object.assign:function(d,c){for(var f,p=l(d),h,v=1;v<arguments.length;v++){f=Object(arguments[v]);for(var w in f)s.call(f,w)&&(p[w]=f[w]);if(o){h=o(f);for(var m=0;m<h.length;m++)a.call(f,h[m])&&(p[h[m]]=f[h[m]])}}return p}},function(n,r,i){var o=i(1),s=o;n.exports=s},function(n,r,i){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";n.exports=o},function(n,r,i){var o={};n.exports=o},function(n,r,i){function o(s,a,l,u,d){}n.exports=o},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(_){for(var S=1;S<arguments.length;S++){var T=arguments[S];for(var k in T)Object.prototype.hasOwnProperty.call(T,k)&&(_[k]=T[k])}return _},s=function(){function _(S,T){for(var k=0;k<T.length;k++){var P=T[k];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(S,P.key,P)}}return function(S,T,k){return T&&_(S.prototype,T),k&&_(S,k),S}}(),a=i(8),l=h(a),u=i(11),d=h(u),c=i(14),f=p(c);function p(_){if(_&&_.__esModule)return _;var S={};if(_!=null)for(var T in _)Object.prototype.hasOwnProperty.call(_,T)&&(S[T]=_[T]);return S.default=_,S}function h(_){return _&&_.__esModule?_:{default:_}}function v(_,S){var T={};for(var k in _)S.indexOf(k)>=0||!Object.prototype.hasOwnProperty.call(_,k)||(T[k]=_[k]);return T}function w(_,S){if(!(_ instanceof S))throw new TypeError("Cannot call a class as a function")}function m(_,S){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:_}function g(_,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);_.prototype=Object.create(S&&S.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(_,S):_.__proto__=S)}var y=function(_){g(S,_);function S(){var T,k,P,U;w(this,S);for(var z=arguments.length,q=Array(z),Z=0;Z<z;Z++)q[Z]=arguments[Z];return U=(k=(P=m(this,(T=S.__proto__||Object.getPrototypeOf(S)).call.apply(T,[this].concat(q))),P),P.state={delayed:P.props.delay>0},k),m(P,U)}return s(S,[{key:"componentDidMount",value:function(){var k=this,P=this.props.delay,U=this.state.delayed;U&&(this.timeout=setTimeout(function(){k.setState({delayed:!1})},P))}},{key:"componentWillUnmount",value:function(){var k=this.timeout;k&&clearTimeout(k)}},{key:"render",value:function(){var k=this.props,P=k.color;k.delay;var U=k.type,z=k.height,q=k.width,Z=v(k,["color","delay","type","height","width"]),oe=this.state.delayed?"blank":U,ne=f[oe],se={fill:P,height:z,width:q};return l.default.createElement("div",o({style:se,dangerouslySetInnerHTML:{__html:ne}},Z))}}]),S}(a.Component);y.propTypes={color:d.default.string,delay:d.default.number,type:d.default.string,height:d.default.oneOfType([d.default.string,d.default.number]),width:d.default.oneOfType([d.default.string,d.default.number])},y.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},r.default=y},function(n,r,i){n.exports=i(9)},function(n,r,i){/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=i(2),s=i(0),a=i(5),l=i(1),u=typeof Symbol=="function"&&Symbol.for,d=u?Symbol.for("react.element"):60103,c=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,p=u?Symbol.for("react.strict_mode"):60108,h=u?Symbol.for("react.provider"):60109,v=u?Symbol.for("react.context"):60110,w=u?Symbol.for("react.async_mode"):60111,m=u?Symbol.for("react.forward_ref"):60112,g=typeof Symbol=="function"&&Symbol.iterator;function y(b){for(var E=arguments.length-1,F="http://reactjs.org/docs/error-decoder.html?invariant="+b,D=0;D<E;D++)F+="&args[]="+encodeURIComponent(arguments[D+1]);s(!1,"Minified React error #"+b+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",F)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function S(b,E,F){this.props=b,this.context=E,this.refs=a,this.updater=F||_}S.prototype.isReactComponent={},S.prototype.setState=function(b,E){typeof b!="object"&&typeof b!="function"&&b!=null&&y("85"),this.updater.enqueueSetState(this,b,E,"setState")},S.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function T(){}T.prototype=S.prototype;function k(b,E,F){this.props=b,this.context=E,this.refs=a,this.updater=F||_}var P=k.prototype=new T;P.constructor=k,o(P,S.prototype),P.isPureReactComponent=!0;var U={current:null},z=Object.prototype.hasOwnProperty,q={key:!0,ref:!0,__self:!0,__source:!0};function Z(b,E,F){var D=void 0,M={},j=null,re=null;if(E!=null)for(D in E.ref!==void 0&&(re=E.ref),E.key!==void 0&&(j=""+E.key),E)z.call(E,D)&&!q.hasOwnProperty(D)&&(M[D]=E[D]);var ee=arguments.length-2;if(ee===1)M.children=F;else if(1<ee){for(var X=Array(ee),me=0;me<ee;me++)X[me]=arguments[me+2];M.children=X}if(b&&b.defaultProps)for(D in ee=b.defaultProps,ee)M[D]===void 0&&(M[D]=ee[D]);return{$$typeof:d,type:b,key:j,ref:re,props:M,_owner:U.current}}function oe(b){return typeof b=="object"&&b!==null&&b.$$typeof===d}function ne(b){var E={"=":"=0",":":"=2"};return"$"+(""+b).replace(/[=:]/g,function(F){return E[F]})}var se=/\/+/g,ge=[];function Ee(b,E,F,D){if(ge.length){var M=ge.pop();return M.result=b,M.keyPrefix=E,M.func=F,M.context=D,M.count=0,M}return{result:b,keyPrefix:E,func:F,context:D,count:0}}function N(b){b.result=null,b.keyPrefix=null,b.func=null,b.context=null,b.count=0,10>ge.length&&ge.push(b)}function V(b,E,F,D){var M=typeof b;(M==="undefined"||M==="boolean")&&(b=null);var j=!1;if(b===null)j=!0;else switch(M){case"string":case"number":j=!0;break;case"object":switch(b.$$typeof){case d:case c:j=!0}}if(j)return F(D,b,E===""?"."+G(b,0):E),1;if(j=0,E=E===""?".":E+":",Array.isArray(b))for(var re=0;re<b.length;re++){M=b[re];var ee=E+G(M,re);j+=V(M,ee,F,D)}else if(b===null||typeof b>"u"?ee=null:(ee=g&&b[g]||b["@@iterator"],ee=typeof ee=="function"?ee:null),typeof ee=="function")for(b=ee.call(b),re=0;!(M=b.next()).done;)M=M.value,ee=E+G(M,re++),j+=V(M,ee,F,D);else M==="object"&&(F=""+b,y("31",F==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":F,""));return j}function G(b,E){return typeof b=="object"&&b!==null&&b.key!=null?ne(b.key):E.toString(36)}function ie(b,E){b.func.call(b.context,E,b.count++)}function C(b,E,F){var D=b.result,M=b.keyPrefix;b=b.func.call(b.context,E,b.count++),Array.isArray(b)?R(b,D,F,l.thatReturnsArgument):b!=null&&(oe(b)&&(E=M+(!b.key||E&&E.key===b.key?"":(""+b.key).replace(se,"$&/")+"/")+F,b={$$typeof:d,type:b.type,key:E,ref:b.ref,props:b.props,_owner:b._owner}),D.push(b))}function R(b,E,F,D,M){var j="";F!=null&&(j=(""+F).replace(se,"$&/")+"/"),E=Ee(E,j,D,M),b==null||V(b,"",C,E),N(E)}var O={Children:{map:function(b,E,F){if(b==null)return b;var D=[];return R(b,D,null,E,F),D},forEach:function(b,E,F){if(b==null)return b;E=Ee(null,null,E,F),b==null||V(b,"",ie,E),N(E)},count:function(b){return b==null?0:V(b,"",l.thatReturnsNull,null)},toArray:function(b){var E=[];return R(b,E,null,l.thatReturnsArgument),E},only:function(b){return oe(b)||y("143"),b}},createRef:function(){return{current:null}},Component:S,PureComponent:k,createContext:function(b,E){return E===void 0&&(E=null),b={$$typeof:v,_calculateChangedBits:E,_defaultValue:b,_currentValue:b,_changedBits:0,Provider:null,Consumer:null},b.Provider={$$typeof:h,_context:b},b.Consumer=b},forwardRef:function(b){return{$$typeof:m,render:b}},Fragment:f,StrictMode:p,unstable_AsyncMode:w,createElement:Z,cloneElement:function(b,E,F){b==null&&y("267",b);var D=void 0,M=o({},b.props),j=b.key,re=b.ref,ee=b._owner;if(E!=null){E.ref!==void 0&&(re=E.ref,ee=U.current),E.key!==void 0&&(j=""+E.key);var X=void 0;b.type&&b.type.defaultProps&&(X=b.type.defaultProps);for(D in E)z.call(E,D)&&!q.hasOwnProperty(D)&&(M[D]=E[D]===void 0&&X!==void 0?X[D]:E[D])}if(D=arguments.length-2,D===1)M.children=F;else if(1<D){X=Array(D);for(var me=0;me<D;me++)X[me]=arguments[me+2];M.children=X}return{$$typeof:d,type:b.type,key:j,ref:re,props:M,_owner:ee}},createFactory:function(b){var E=Z.bind(null,b);return E.type=b,E},isValidElement:oe,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:U,assign:o}},B=Object.freeze({default:O}),I=B&&O||B;n.exports=I.default?I.default:I},function(n,r,i){},function(n,r,i){n.exports=i(13)()},function(n,r,i){var o=i(1),s=i(0),a=i(3),l=i(2),u=i(4),d=i(6);n.exports=function(c,f){var p=typeof Symbol=="function"&&Symbol.iterator,h="@@iterator";function v(C){var R=C&&(p&&C[p]||C[h]);if(typeof R=="function")return R}var w="<<anonymous>>",m={array:S("array"),bool:S("boolean"),func:S("function"),number:S("number"),object:S("object"),string:S("string"),symbol:S("symbol"),any:T(),arrayOf:k,element:P(),instanceOf:U,node:oe(),objectOf:q,oneOf:z,oneOfType:Z,shape:ne,exact:se};function g(C,R){return C===R?C!==0||1/C===1/R:C!==C&&R!==R}function y(C){this.message=C,this.stack=""}y.prototype=Error.prototype;function _(C){function R(B,I,b,E,F,D,M){return E=E||w,D=D||b,M!==u&&f&&s(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),I[b]==null?B?I[b]===null?new y("The "+F+" `"+D+"` is marked as required "+("in `"+E+"`, but its value is `null`.")):new y("The "+F+" `"+D+"` is marked as required in "+("`"+E+"`, but its value is `undefined`.")):null:C(I,b,E,F,D)}var O=R.bind(null,!1);return O.isRequired=R.bind(null,!0),O}function S(C){function R(O,B,I,b,E,F){var D=O[B],M=N(D);if(M!==C){var j=V(D);return new y("Invalid "+b+" `"+E+"` of type "+("`"+j+"` supplied to `"+I+"`, expected ")+("`"+C+"`."))}return null}return _(R)}function T(){return _(o.thatReturnsNull)}function k(C){function R(O,B,I,b,E){if(typeof C!="function")return new y("Property `"+E+"` of component `"+I+"` has invalid PropType notation inside arrayOf.");var F=O[B];if(!Array.isArray(F)){var D=N(F);return new y("Invalid "+b+" `"+E+"` of type "+("`"+D+"` supplied to `"+I+"`, expected an array."))}for(var M=0;M<F.length;M++){var j=C(F,M,I,b,E+"["+M+"]",u);if(j instanceof Error)return j}return null}return _(R)}function P(){function C(R,O,B,I,b){var E=R[O];if(!c(E)){var F=N(E);return new y("Invalid "+I+" `"+b+"` of type "+("`"+F+"` supplied to `"+B+"`, expected a single ReactElement."))}return null}return _(C)}function U(C){function R(O,B,I,b,E){if(!(O[B]instanceof C)){var F=C.name||w,D=ie(O[B]);return new y("Invalid "+b+" `"+E+"` of type "+("`"+D+"` supplied to `"+I+"`, expected ")+("instance of `"+F+"`."))}return null}return _(R)}function z(C){if(!Array.isArray(C))return o.thatReturnsNull;function R(O,B,I,b,E){for(var F=O[B],D=0;D<C.length;D++)if(g(F,C[D]))return null;var M=JSON.stringify(C);return new y("Invalid "+b+" `"+E+"` of value `"+F+"` "+("supplied to `"+I+"`, expected one of "+M+"."))}return _(R)}function q(C){function R(O,B,I,b,E){if(typeof C!="function")return new y("Property `"+E+"` of component `"+I+"` has invalid PropType notation inside objectOf.");var F=O[B],D=N(F);if(D!=="object")return new y("Invalid "+b+" `"+E+"` of type "+("`"+D+"` supplied to `"+I+"`, expected an object."));for(var M in F)if(F.hasOwnProperty(M)){var j=C(F,M,I,b,E+"."+M,u);if(j instanceof Error)return j}return null}return _(R)}function Z(C){if(!Array.isArray(C))return o.thatReturnsNull;for(var R=0;R<C.length;R++){var O=C[R];if(typeof O!="function")return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",G(O),R),o.thatReturnsNull}function B(I,b,E,F,D){for(var M=0;M<C.length;M++){var j=C[M];if(j(I,b,E,F,D,u)==null)return null}return new y("Invalid "+F+" `"+D+"` supplied to "+("`"+E+"`."))}return _(B)}function oe(){function C(R,O,B,I,b){return ge(R[O])?null:new y("Invalid "+I+" `"+b+"` supplied to "+("`"+B+"`, expected a ReactNode."))}return _(C)}function ne(C){function R(O,B,I,b,E){var F=O[B],D=N(F);if(D!=="object")return new y("Invalid "+b+" `"+E+"` of type `"+D+"` "+("supplied to `"+I+"`, expected `object`."));for(var M in C){var j=C[M];if(!!j){var re=j(F,M,I,b,E+"."+M,u);if(re)return re}}return null}return _(R)}function se(C){function R(O,B,I,b,E){var F=O[B],D=N(F);if(D!=="object")return new y("Invalid "+b+" `"+E+"` of type `"+D+"` "+("supplied to `"+I+"`, expected `object`."));var M=l({},O[B],C);for(var j in M){var re=C[j];if(!re)return new y("Invalid "+b+" `"+E+"` key `"+j+"` supplied to `"+I+"`.\nBad object: "+JSON.stringify(O[B],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(C),null,"  "));var ee=re(F,j,I,b,E+"."+j,u);if(ee)return ee}return null}return _(R)}function ge(C){switch(typeof C){case"number":case"string":case"undefined":return!0;case"boolean":return!C;case"object":if(Array.isArray(C))return C.every(ge);if(C===null||c(C))return!0;var R=v(C);if(R){var O=R.call(C),B;if(R!==C.entries){for(;!(B=O.next()).done;)if(!ge(B.value))return!1}else for(;!(B=O.next()).done;){var I=B.value;if(I&&!ge(I[1]))return!1}}else return!1;return!0;default:return!1}}function Ee(C,R){return C==="symbol"||R["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&R instanceof Symbol}function N(C){var R=typeof C;return Array.isArray(C)?"array":C instanceof RegExp?"object":Ee(R,C)?"symbol":R}function V(C){if(typeof C>"u"||C===null)return""+C;var R=N(C);if(R==="object"){if(C instanceof Date)return"date";if(C instanceof RegExp)return"regexp"}return R}function G(C){var R=V(C);switch(R){case"array":case"object":return"an "+R;case"boolean":case"date":case"regexp":return"a "+R;default:return R}}function ie(C){return!C.constructor||!C.constructor.name?w:C.constructor.name}return m.checkPropTypes=d,m.PropTypes=m,m}},function(n,r,i){var o=i(1),s=i(0),a=i(4);n.exports=function(){function l(c,f,p,h,v,w){w!==a&&s(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}l.isRequired=l;function u(){return l}var d={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u};return d.checkPropTypes=o,d.PropTypes=d,d}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(15);Object.defineProperty(r,"blank",{enumerable:!0,get:function(){return h(o).default}});var s=i(16);Object.defineProperty(r,"balls",{enumerable:!0,get:function(){return h(s).default}});var a=i(17);Object.defineProperty(r,"bars",{enumerable:!0,get:function(){return h(a).default}});var l=i(18);Object.defineProperty(r,"bubbles",{enumerable:!0,get:function(){return h(l).default}});var u=i(19);Object.defineProperty(r,"cubes",{enumerable:!0,get:function(){return h(u).default}});var d=i(20);Object.defineProperty(r,"cylon",{enumerable:!0,get:function(){return h(d).default}});var c=i(21);Object.defineProperty(r,"spin",{enumerable:!0,get:function(){return h(c).default}});var f=i(22);Object.defineProperty(r,"spinningBubbles",{enumerable:!0,get:function(){return h(f).default}});var p=i(23);Object.defineProperty(r,"spokes",{enumerable:!0,get:function(){return h(p).default}});function h(v){return v&&v.__esModule?v:{default:v}}},function(n,r){n.exports=`<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
`},function(n,r){n.exports=`<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
  </path>
</svg>
`}])})})(l1);const QF=th(l1.exports),N0=()=>x(qF,{children:ue(KF,{children:[x(YF,{alt:"Logo",src:"Logo_Niko.svg"}),x(QF,{type:"cylon",color:"white",height:100,width:100})]})}),XF=J.div`
  font-family: "Rubik";
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  margin: 0 1em 2em 1em;
  padding: 1em;
  scroll-behavior: auto;
  scrollbar-width: thin;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.3em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: #191c24;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0em 2em;
  }

  @media screen and (min-width: 1366px) {
    justify-content: center;
  }
`,JF=J.div`

  min-width: 250px;
  gap: 1em;
  height: 60vh;
  padding: 1em;
  color: white;
  background-color: #191c24;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.6em;
  }

  &::-webkit-scrollbar-track {
    background: #191c24;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }
  @media screen and (min-width: 1360px) {
    width: 100px;
  }
`,ZF=J.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0.5em;
  padding-left: 1.1em;
  color: white;
  height: 65vh;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.6em;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
  }
  @media screen and (min-width: 1360px) {
    &::-webkit-scrollbar-thumb {
      background-color: #2a2e38;
      border-radius: 20px;
    }
  }
`,Ol=J.button`
  padding: 0.5em;
  background-color: #393e4b;
  border-radius: 0.5em;
  border: 1px solid #393e4b;
  color: white;
  :hover {
    border: 1px solid #b1b1b1;
  }
`,jp=J.input`
  padding: 0.5em;
  background-color: #393e4b;
  border-radius: 0.5em;
  border: 1px solid #393e4b;
  color: white;
  :hover {
    border: 1px solid #b1b1b1;
  }
`;let ll;const eB=new Uint8Array(16);function tB(){if(!ll&&(ll=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ll))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ll(eB)}const tt=[];for(let t=0;t<256;++t)tt.push((t+256).toString(16).slice(1));function nB(t,e=0){return(tt[t[e+0]]+tt[t[e+1]]+tt[t[e+2]]+tt[t[e+3]]+"-"+tt[t[e+4]]+tt[t[e+5]]+"-"+tt[t[e+6]]+tt[t[e+7]]+"-"+tt[t[e+8]]+tt[t[e+9]]+"-"+tt[t[e+10]]+tt[t[e+11]]+tt[t[e+12]]+tt[t[e+13]]+tt[t[e+14]]+tt[t[e+15]]).toLowerCase()}const rB=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),M0={randomUUID:rB};function St(t,e,n){if(M0.randomUUID&&!e&&!t)return M0.randomUUID();t=t||{};const r=t.random||(t.rng||tB)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return nB(r)}const iB=[{id:St(),title:" \u{1F4C3} To do",number:"340",tasks:[{id:"1",title:"Lote 11",categoria:[{nome:"Administrativo",id:1}]},{id:"2",title:"Lote 10",categoria:[{nome:"Administrativo",id:1}]},{id:"3",title:"Lote 09",categoria:[{nome:"Administrativo",id:1}]}]},{id:St(),title:" \u{1F4C3} Paused",number:"10",tasks:[{id:"5",title:"Lote 08",categoria:[{nome:"RH",id:2}],envolvidos:[{envolvidoId:St(),foto:"https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg"}]},{id:"6",title:"Lote 07",categoria:[{nome:"RH",id:2}],envolvidos:[{envolvidoId:St(),foto:"https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c"}]},{id:"7",title:"Lote 06",categoria:[{nome:"RH",id:2}],envolvidos:[{envolvidoId:St(),foto:"https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c"}]}]},{id:St(),title:" \u270F\uFE0F In progress",number:"4",tasks:[{id:"8",title:"Lote 05",categoria:[{nome:"Jur\xEDdico",id:3},{nome:"Administrativo",id:1}],envolvidos:[{envolvidoId:St(),foto:"https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg"},{envolvidoId:St(),foto:"https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c"}]},{id:"9",title:"Lote 04",categoria:[{nome:"Jur\xEDdico",id:3}],envolvidos:[{envolvidoId:St(),foto:"https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg"}]},{id:"10",title:"Lote 03",categoria:[{nome:"Jur\xEDdico",id:3}],envolvidos:[{envolvidoId:St(),foto:"https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c"}]},{id:"11",title:"Lote 02",categoria:[{nome:"Jur\xEDdico",id:3}],envolvidos:[{envolvidoId:St(),foto:"https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg"}]}]},{id:St(),title:" \u2714\uFE0F Completed",number:"243",tasks:[{id:"12",title:"Lote 01",categoria:[{nome:"Financeiro",id:4}],envolvidos:[{envolvidoId:St(),foto:"https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg"},{envolvidoId:St(),foto:"https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c"}]}]}];function Wp(t,e){return Wp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Wp(t,e)}function u1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Wp(t,e)}function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Y.apply(this,arguments)}function Zs(t){return Zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zs(t)}function oB(t,e){if(Zs(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Zs(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sB(t){var e=oB(t,"string");return Zs(e)==="symbol"?e:String(e)}function aB(t,e,n){return e=sB(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function F0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L0(Object(n),!0).forEach(function(r){aB(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Et(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var B0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Xd=function(){return Math.random().toString(36).substring(7).split("").join(".")},U0={INIT:"@@redux/INIT"+Xd(),REPLACE:"@@redux/REPLACE"+Xd(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Xd()}};function lB(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function c1(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Et(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Et(1));return n(c1)(t,e)}if(typeof t!="function")throw new Error(Et(2));var i=t,o=e,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function d(){if(l)throw new Error(Et(3));return o}function c(v){if(typeof v!="function")throw new Error(Et(4));if(l)throw new Error(Et(5));var w=!0;return u(),a.push(v),function(){if(!!w){if(l)throw new Error(Et(6));w=!1,u();var g=a.indexOf(v);a.splice(g,1),s=null}}}function f(v){if(!lB(v))throw new Error(Et(7));if(typeof v.type>"u")throw new Error(Et(8));if(l)throw new Error(Et(9));try{l=!0,o=i(o,v)}finally{l=!1}for(var w=s=a,m=0;m<w.length;m++){var g=w[m];g()}return v}function p(v){if(typeof v!="function")throw new Error(Et(10));i=v,f({type:U0.REPLACE})}function h(){var v,w=c;return v={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(Et(11));function y(){g.next&&g.next(d())}y();var _=w(y);return{unsubscribe:_}}},v[B0]=function(){return this},v}return f({type:U0.INIT}),r={dispatch:f,subscribe:c,getState:d,replaceReducer:p},r[B0]=h,r}function $0(t,e){return function(){return e(t.apply(this,arguments))}}function z0(t,e){if(typeof t=="function")return $0(t,e);if(typeof t!="object"||t===null)throw new Error(Et(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=$0(i,e))}return n}function d1(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function uB(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Et(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=e.map(function(l){return l(s)});return o=d1.apply(void 0,a)(i.dispatch),F0(F0({},i),{},{dispatch:o})}}}var f1=Le.createContext(null);function cB(t){t()}var p1=cB,dB=function(e){return p1=e},fB=function(){return p1};function pB(){var t=fB(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=e;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!o||e===null||(o=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var j0={notify:function(){},get:function(){return[]}};function h1(t,e){var n,r=j0;function i(c){return l(),r.subscribe(c)}function o(){r.notify()}function s(){d.onStateChange&&d.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(s):t.subscribe(s),r=pB())}function u(){n&&(n(),n=void 0,r.clear(),r=j0)}var d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:function(){return r}};return d}var g1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?A.exports.useLayoutEffect:A.exports.useEffect;function hB(t){var e=t.store,n=t.context,r=t.children,i=A.exports.useMemo(function(){var a=h1(e);return{store:e,subscription:a}},[e]),o=A.exports.useMemo(function(){return e.getState()},[e]);g1(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,o]);var s=n||f1;return x(s.Provider,{value:i,children:r})}function Tu(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var m1={exports:{}},Ie={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=60103,Wc=60106,Ca=60107,Ta=60108,xa=60114,ka=60109,Ra=60110,Pa=60112,Aa=60113,nm=60120,Da=60115,Oa=60116,v1=60121,y1=60122,_1=60117,w1=60129,b1=60131;if(typeof Symbol=="function"&&Symbol.for){var et=Symbol.for;jc=et("react.element"),Wc=et("react.portal"),Ca=et("react.fragment"),Ta=et("react.strict_mode"),xa=et("react.profiler"),ka=et("react.provider"),Ra=et("react.context"),Pa=et("react.forward_ref"),Aa=et("react.suspense"),nm=et("react.suspense_list"),Da=et("react.memo"),Oa=et("react.lazy"),v1=et("react.block"),y1=et("react.server.block"),_1=et("react.fundamental"),w1=et("react.debug_trace_mode"),b1=et("react.legacy_hidden")}function Tn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case jc:switch(t=t.type,t){case Ca:case xa:case Ta:case Aa:case nm:return t;default:switch(t=t&&t.$$typeof,t){case Ra:case Pa:case Oa:case Da:case ka:return t;default:return e}}case Wc:return e}}}var gB=ka,mB=jc,vB=Pa,yB=Ca,_B=Oa,wB=Da,bB=Wc,SB=xa,EB=Ta,IB=Aa;Ie.ContextConsumer=Ra;Ie.ContextProvider=gB;Ie.Element=mB;Ie.ForwardRef=vB;Ie.Fragment=yB;Ie.Lazy=_B;Ie.Memo=wB;Ie.Portal=bB;Ie.Profiler=SB;Ie.StrictMode=EB;Ie.Suspense=IB;Ie.isAsyncMode=function(){return!1};Ie.isConcurrentMode=function(){return!1};Ie.isContextConsumer=function(t){return Tn(t)===Ra};Ie.isContextProvider=function(t){return Tn(t)===ka};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===jc};Ie.isForwardRef=function(t){return Tn(t)===Pa};Ie.isFragment=function(t){return Tn(t)===Ca};Ie.isLazy=function(t){return Tn(t)===Oa};Ie.isMemo=function(t){return Tn(t)===Da};Ie.isPortal=function(t){return Tn(t)===Wc};Ie.isProfiler=function(t){return Tn(t)===xa};Ie.isStrictMode=function(t){return Tn(t)===Ta};Ie.isSuspense=function(t){return Tn(t)===Aa};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ca||t===xa||t===w1||t===Ta||t===Aa||t===nm||t===b1||typeof t=="object"&&t!==null&&(t.$$typeof===Oa||t.$$typeof===Da||t.$$typeof===ka||t.$$typeof===Ra||t.$$typeof===Pa||t.$$typeof===_1||t.$$typeof===v1||t[0]===y1)};Ie.typeOf=Tn;(function(t){t.exports=Ie})(m1);var CB=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],TB=["reactReduxForwardedRef"],xB=[],kB=[null,null];function RB(t,e){var n=t[1];return[e.payload,n+1]}function W0(t,e,n){g1(function(){return t.apply(void 0,e)},n)}function PB(t,e,n,r,i,o,s){t.current=r,e.current=i,n.current=!1,o.current&&(o.current=null,s())}function AB(t,e,n,r,i,o,s,a,l,u){if(!!t){var d=!1,c=null,f=function(){if(!d){var v=e.getState(),w,m;try{w=r(v,i.current)}catch(g){m=g,c=g}m||(c=null),w===o.current?s.current||l():(o.current=w,a.current=w,s.current=!0,u({type:"STORE_UPDATED",payload:{error:m}}))}};n.onStateChange=f,n.trySubscribe(),f();var p=function(){if(d=!0,n.tryUnsubscribe(),n.onStateChange=null,c)throw c};return p}}var DB=function(){return[null,0]};function OB(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(y){return"ConnectAdvanced("+y+")"}:r,o=n.methodName,s=o===void 0?"connectAdvanced":o,a=n.renderCountProp,l=a===void 0?void 0:a,u=n.shouldHandleStateChanges,d=u===void 0?!0:u,c=n.storeKey,f=c===void 0?"store":c;n.withRef;var p=n.forwardRef,h=p===void 0?!1:p,v=n.context,w=v===void 0?f1:v,m=Tu(n,CB),g=w;return function(_){var S=_.displayName||_.name||"Component",T=i(S),k=Y({},m,{getDisplayName:i,methodName:s,renderCountProp:l,shouldHandleStateChanges:d,storeKey:f,displayName:T,wrappedComponentName:S,WrappedComponent:_}),P=m.pure;function U(ne){return t(ne.dispatch,k)}var z=P?A.exports.useMemo:function(ne){return ne()};function q(ne){var se=A.exports.useMemo(function(){var an=ne.reactReduxForwardedRef,Fe=Tu(ne,TB);return[ne.context,an,Fe]},[ne]),ge=se[0],Ee=se[1],N=se[2],V=A.exports.useMemo(function(){return ge&&ge.Consumer&&m1.exports.isContextConsumer(Le.createElement(ge.Consumer,null))?ge:g},[ge,g]),G=A.exports.useContext(V),ie=Boolean(ne.store)&&Boolean(ne.store.getState)&&Boolean(ne.store.dispatch);Boolean(G)&&Boolean(G.store);var C=ie?ne.store:G.store,R=A.exports.useMemo(function(){return U(C)},[C]),O=A.exports.useMemo(function(){if(!d)return kB;var an=h1(C,ie?null:G.subscription),Fe=an.notifyNestedSubs.bind(an);return[an,Fe]},[C,ie,G]),B=O[0],I=O[1],b=A.exports.useMemo(function(){return ie?G:Y({},G,{subscription:B})},[ie,G,B]),E=A.exports.useReducer(RB,xB,DB),F=E[0],D=F[0],M=E[1];if(D&&D.error)throw D.error;var j=A.exports.useRef(),re=A.exports.useRef(N),ee=A.exports.useRef(),X=A.exports.useRef(!1),me=z(function(){return ee.current&&N===re.current?ee.current:R(C.getState(),N)},[C,D,N]);W0(PB,[re,j,X,N,me,ee,I]),W0(AB,[d,C,B,R,re,j,X,ee,I,M],[C,B,R]);var de=A.exports.useMemo(function(){return x(_,{...me,ref:Ee})},[Ee,_,me]),ze=A.exports.useMemo(function(){return d?x(V.Provider,{value:b,children:de}):de},[V,de,b]);return ze}var Z=P?Le.memo(q):q;if(Z.WrappedComponent=_,Z.displayName=q.displayName=T,h){var oe=Le.forwardRef(function(se,ge){return x(Z,{...se,reactReduxForwardedRef:ge})});return oe.displayName=T,oe.WrappedComponent=_,wp(oe,_)}return wp(Z,_)}}function H0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Jd(t,e){if(H0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!H0(t[n[i]],e[n[i]]))return!1;return!0}function NB(t,e){var n={},r=function(s){var a=t[s];typeof a=="function"&&(n[s]=function(){return e(a.apply(void 0,arguments))})};for(var i in t)r(i);return n}function rm(t){return function(n,r){var i=t(n,r);function o(){return i}return o.dependsOnOwnProps=!1,o}}function V0(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?Boolean(t.dependsOnOwnProps):t.length!==1}function S1(t,e){return function(r,i){i.displayName;var o=function(a,l){return o.dependsOnOwnProps?o.mapToProps(a,l):o.mapToProps(a)};return o.dependsOnOwnProps=!0,o.mapToProps=function(a,l){o.mapToProps=t,o.dependsOnOwnProps=V0(t);var u=o(a,l);return typeof u=="function"&&(o.mapToProps=u,o.dependsOnOwnProps=V0(u),u=o(a,l)),u},o}}function MB(t){return typeof t=="function"?S1(t):void 0}function LB(t){return t?void 0:rm(function(e){return{dispatch:e}})}function FB(t){return t&&typeof t=="object"?rm(function(e){return NB(t,e)}):void 0}const BB=[MB,LB,FB];function UB(t){return typeof t=="function"?S1(t):void 0}function $B(t){return t?void 0:rm(function(){return{}})}const zB=[UB,$B];function jB(t,e,n){return Y({},n,t,e)}function WB(t){return function(n,r){r.displayName;var i=r.pure,o=r.areMergedPropsEqual,s=!1,a;return function(u,d,c){var f=t(u,d,c);return s?(!i||!o(f,a))&&(a=f):(s=!0,a=f),a}}}function HB(t){return typeof t=="function"?WB(t):void 0}function VB(t){return t?void 0:function(){return jB}}const GB=[HB,VB];var qB=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function KB(t,e,n,r){return function(o,s){return n(t(o,s),e(r,s),s)}}function YB(t,e,n,r,i){var o=i.areStatesEqual,s=i.areOwnPropsEqual,a=i.areStatePropsEqual,l=!1,u,d,c,f,p;function h(y,_){return u=y,d=_,c=t(u,d),f=e(r,d),p=n(c,f,d),l=!0,p}function v(){return c=t(u,d),e.dependsOnOwnProps&&(f=e(r,d)),p=n(c,f,d),p}function w(){return t.dependsOnOwnProps&&(c=t(u,d)),e.dependsOnOwnProps&&(f=e(r,d)),p=n(c,f,d),p}function m(){var y=t(u,d),_=!a(y,c);return c=y,_&&(p=n(c,f,d)),p}function g(y,_){var S=!s(_,d),T=!o(y,u,_,d);return u=y,d=_,S&&T?v():S?w():T?m():p}return function(_,S){return l?g(_,S):h(_,S)}}function QB(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,o=Tu(e,qB),s=n(t,o),a=r(t,o),l=i(t,o),u=o.pure?YB:KB;return u(s,a,l,t,o)}var XB=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Zd(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(o,s){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+s.wrappedComponentName+".")}}function JB(t,e){return t===e}function ZB(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?OB:n,i=e.mapStateToPropsFactories,o=i===void 0?zB:i,s=e.mapDispatchToPropsFactories,a=s===void 0?BB:s,l=e.mergePropsFactories,u=l===void 0?GB:l,d=e.selectorFactory,c=d===void 0?QB:d;return function(p,h,v,w){w===void 0&&(w={});var m=w,g=m.pure,y=g===void 0?!0:g,_=m.areStatesEqual,S=_===void 0?JB:_,T=m.areOwnPropsEqual,k=T===void 0?Jd:T,P=m.areStatePropsEqual,U=P===void 0?Jd:P,z=m.areMergedPropsEqual,q=z===void 0?Jd:z,Z=Tu(m,XB),oe=Zd(p,o,"mapStateToProps"),ne=Zd(h,a,"mapDispatchToProps"),se=Zd(v,u,"mergeProps");return r(c,Y({methodName:"connect",getDisplayName:function(Ee){return"Connect("+Ee+")"},shouldHandleStateChanges:Boolean(p),initMapStateToProps:oe,initMapDispatchToProps:ne,initMergeProps:se,pure:y,areStatesEqual:S,areOwnPropsEqual:k,areStatePropsEqual:U,areMergedPropsEqual:q},Z))}}const E1=ZB();dB(Bu.exports.unstable_batchedUpdates);function eU(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function I1(t,e){var n=A.exports.useState(function(){return{inputs:e,result:t()}})[0],r=A.exports.useRef(!0),i=A.exports.useRef(n),o=r.current||Boolean(e&&i.current.inputs&&eU(e,i.current.inputs)),s=o?i.current:{inputs:e,result:t()};return A.exports.useEffect(function(){r.current=!1,i.current=s},[s]),s.result}function tU(t,e){return I1(function(){return t},e)}var pe=I1,K=tU,nU=!0,ef="Invariant failed";function rU(t,e){if(!t){if(nU)throw new Error(ef);var n=typeof e=="function"?e():e,r=n?"".concat(ef,": ").concat(n):ef;throw new Error(r)}}var yn=function(e){var n=e.top,r=e.right,i=e.bottom,o=e.left,s=r-o,a=i-n,l={top:n,right:r,bottom:i,left:o,width:s,height:a,x:o,y:n,center:{x:(r+o)/2,y:(i+n)/2}};return l},im=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},G0=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},iU=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},tf={top:0,right:0,bottom:0,left:0},om=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?tf:r,o=e.border,s=o===void 0?tf:o,a=e.padding,l=a===void 0?tf:a,u=yn(im(n,i)),d=yn(G0(n,s)),c=yn(G0(d,l));return{marginBox:u,borderBox:yn(n),paddingBox:d,contentBox:c,margin:i,border:s,padding:l}},qt=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&rU(!1),i},oU=function(){return{x:window.pageXOffset,y:window.pageYOffset}},xu=function(e,n){var r=e.borderBox,i=e.border,o=e.margin,s=e.padding,a=iU(r,n);return om({borderBox:a,border:i,margin:o,padding:s})},ku=function(e,n){return n===void 0&&(n=oU()),xu(e,n)},C1=function(e,n){var r={top:qt(n.marginTop),right:qt(n.marginRight),bottom:qt(n.marginBottom),left:qt(n.marginLeft)},i={top:qt(n.paddingTop),right:qt(n.paddingRight),bottom:qt(n.paddingBottom),left:qt(n.paddingLeft)},o={top:qt(n.borderTopWidth),right:qt(n.borderRightWidth),bottom:qt(n.borderBottomWidth),left:qt(n.borderLeftWidth)};return om({borderBox:e,margin:r,padding:i,border:o})},T1=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return C1(n,r)},q0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function sU(t,e){return!!(t===e||q0(t)&&q0(e))}function aU(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!sU(t[n],e[n]))return!1;return!0}function Xe(t,e){e===void 0&&(e=aU);var n,r=[],i,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&e(a,r)||(i=t.apply(this,a),o=!0,n=this,r=a),i}return s}var lU=function(e){var n=[],r=null,i=function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];n=a,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){!r||(cancelAnimationFrame(r),r=null)},i};const ea=lU;function x1(t,e){}x1.bind(null,"warn");x1.bind(null,"error");function Dr(){}function uU(t,e){return Y({},t,{},e)}function Jt(t,e,n){var r=e.map(function(i){var o=uU(n,i.options);return t.addEventListener(i.eventName,i.fn,o),function(){t.removeEventListener(i.eventName,i.fn,o)}});return function(){r.forEach(function(o){o()})}}var cU="Invariant failed";function Ru(t){this.message=t}Ru.prototype.toString=function(){return this.message};function $(t,e){if(!t)throw new Ru(cU)}var dU=function(t){u1(e,t);function e(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o))||this,r.callbacks=null,r.unbind=Dr,r.onWindowError=function(a){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var u=a.error;u instanceof Ru&&a.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(a){r.callbacks=a},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Jt(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(i){if(i instanceof Ru){this.setState({});return}throw i},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(Le.Component),fU=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Pu=function(e){return e+1},pU=function(e){return`
  You have lifted an item in position `+Pu(e.source.index)+`
`},k1=function(e,n){var r=e.droppableId===n.droppableId,i=Pu(e.index),o=Pu(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+o+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+o+`
  `},R1=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},hU=function(e){var n=e.destination;if(n)return k1(e.source,n);var r=e.combine;return r?R1(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},K0=function(e){return`
  The item has returned to its starting position
  of `+Pu(e.index)+`
`},gU=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+K0(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+k1(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+R1(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+K0(e.source)+`
  `},Nl={dragHandleUsageInstructions:fU,onDragStart:pU,onDragUpdate:hU,onDragEnd:gU},Je={x:0,y:0},ot=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},Lt=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},Or=function(e,n){return e.x===n.x&&e.y===n.y},Do=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Si=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},ta=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},Y0=function(e,n){return Math.min.apply(Math,n.map(function(r){return ta(e,r)}))},P1=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},mU=function(t,e){var n=yn({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},Na=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Q0=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},vU={top:0,right:0,bottom:0,left:0},yU=function(e,n){return n?Na(e,n.scroll.diff.displacement):e},_U=function(e,n,r){if(r&&r.increasedBy){var i;return Y({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},wU=function(e,n){return n&&n.shouldClipSubject?mU(n.pageMarginBox,e):yn(e)},yo=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,o=yU(e.marginBox,i),s=_U(o,r,n),a=wU(s,i);return{page:e,withPlaceholder:n,active:a}},sm=function(t,e){t.frame||$(!1);var n=t.frame,r=Lt(e,n.scroll.initial),i=Do(r),o=Y({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),s=yo({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:o}),a=Y({},t,{frame:o,subject:s});return a};function Au(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function am(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function Hr(t,e){if(t.find)return t.find(e);var n=am(t,e);if(n!==-1)return t[n]}function A1(t){return Array.prototype.slice.call(t)}var D1=Xe(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),O1=Xe(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Hc=Xe(function(t){return Au(t)}),bU=Xe(function(t){return Au(t)}),Oo=Xe(function(t,e){var n=bU(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n});function lm(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function Vc(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var Gc=Xe(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),SU=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,o=t.previousImpact;if(!r.isCombineEnabled)return null;var s=lm(o);if(!s)return null;function a(v){var w={type:"COMBINE",combine:{draggableId:v,droppableId:r.descriptor.id}};return Y({},o,{at:w})}var l=o.displaced.all,u=l.length?l[0]:null;if(e)return u?a(u):null;var d=Gc(n,i);if(!u){if(!d.length)return null;var c=d[d.length-1];return a(c.descriptor.id)}var f=am(d,function(v){return v.descriptor.id===u});f===-1&&$(!1);var p=f-1;if(p<0)return null;var h=d[p];return a(h.descriptor.id)},No=function(t,e){return t.descriptor.droppableId===e.descriptor.id},N1={point:Je,value:0},na={invisible:{},visible:{},all:[]},EU={displaced:na,displacedBy:N1,at:null},en=function(t,e){return function(n){return t<=n&&n<=e}},M1=function(t){var e=en(t.top,t.bottom),n=en(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var o=e(r.top)||e(r.bottom),s=n(r.left)||n(r.right),a=o&&s;if(a)return!0;var l=r.top<t.top&&r.bottom>t.bottom,u=r.left<t.left&&r.right>t.right,d=l&&u;if(d)return!0;var c=l&&s||u&&o;return c}},IU=function(t){var e=en(t.top,t.bottom),n=en(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},um={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},L1={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},CU=function(t){return function(e){var n=en(e.top,e.bottom),r=en(e.left,e.right);return function(i){return t===um?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},TU=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:Je;return Na(e,r)},xU=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},kU=function(e,n,r){return r(n)(e)},cm=function(e){var n=e.target,r=e.destination,i=e.viewport,o=e.withDroppableDisplacement,s=e.isVisibleThroughFrameFn,a=o?TU(n,r):n;return xU(a,r,s)&&kU(a,i,s)},RU=function(e){return cm(Y({},e,{isVisibleThroughFrameFn:M1}))},F1=function(e){return cm(Y({},e,{isVisibleThroughFrameFn:IU}))},PU=function(e){return cm(Y({},e,{isVisibleThroughFrameFn:CU(e.destination.axis)}))},AU=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,o=n.visible;if(i[e])return!1;var s=o[e];return s?s.shouldAnimate:!0};function DU(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return yn(im(n,r))}function ra(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,o=t.forceShouldAnimate,s=t.last;return e.reduce(function(l,u){var d=DU(u,r),c=u.descriptor.id;l.all.push(c);var f=RU({target:d,destination:n,viewport:i,withDroppableDisplacement:!0});if(!f)return l.invisible[u.descriptor.id]=!0,l;var p=AU(c,s,o),h={draggableId:c,shouldAnimate:p};return l.visible[c]=h,l},{all:[],visible:{},invisible:{}})}function OU(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function X0(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,o=OU(e,{inHomeList:n});return{displaced:na,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:o}}}}function Du(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,o=t.displacedBy,s=t.last,a=t.index,l=t.forceShouldAnimate,u=No(e,r);if(a==null)return X0({insideDestination:n,inHomeList:u,displacedBy:o,destination:r});var d=Hr(n,function(v){return v.descriptor.index===a});if(!d)return X0({insideDestination:n,inHomeList:u,displacedBy:o,destination:r});var c=Gc(e,n),f=n.indexOf(d),p=c.slice(f),h=ra({afterDragging:p,destination:r,displacedBy:o,last:s,viewport:i.frame,forceShouldAnimate:l});return{displaced:h,displacedBy:o,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:a}}}}function Br(t,e){return Boolean(e.effected[t])}var NU=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,o=t.afterCritical;if(!n.isCombineEnabled)return null;var s=i.draggableId,a=r[s],l=a.descriptor.index,u=Br(s,o);return u?e?l:l-1:e?l+1:l},MU=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var o=i.index,s=e?o+1:o-1,a=r[0].descriptor.index,l=r[r.length-1].descriptor.index,u=n?l:l+1;return s<a||s>u?null:s},LU=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,o=t.destination,s=t.insideDestination,a=t.previousImpact,l=t.viewport,u=t.afterCritical,d=a.at;if(d||$(!1),d.type==="REORDER"){var c=MU({isMovingForward:e,isInHomeList:n,location:d.destination,insideDestination:s});return c==null?null:Du({draggable:r,insideDestination:s,destination:o,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:c})}var f=NU({isMovingForward:e,destination:o,displaced:a.displaced,draggables:i,combine:d.combine,afterCritical:u});return f==null?null:Du({draggable:r,insideDestination:s,destination:o,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:f})},FU=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,o=Boolean(e.visible[r]||e.invisible[r]);return Br(r,n)?o?Je:Do(i.point):o?i.point:Je},BU=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=Vc(n);i||$(!1);var o=i.draggableId,s=r[o].page.borderBox.center,a=FU({displaced:n.displaced,afterCritical:e,combineWith:o,displacedBy:n.displacedBy});return ot(s,a)},B1=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},UU=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},dm=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},J0=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Si(n.line,r.marginBox[n.end]+B1(n,i),dm(n,r.marginBox,i))},Z0=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Si(n.line,r.marginBox[n.start]-UU(n,i),dm(n,r.marginBox,i))},$U=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return Si(n.line,r.contentBox[n.start]+B1(n,i),dm(n,r.contentBox,i))},zU=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,o=t.afterCritical,s=Oo(i.descriptor.id,r),a=n.page,l=i.axis;if(!s.length)return $U({axis:l,moveInto:i.page,isMoving:a});var u=e.displaced,d=e.displacedBy,c=u.all[0];if(c){var f=r[c];if(Br(c,o))return Z0({axis:l,moveRelativeTo:f.page,isMoving:a});var p=xu(f.page,d.point);return Z0({axis:l,moveRelativeTo:p,isMoving:a})}var h=s[s.length-1];if(h.descriptor.id===n.descriptor.id)return a.borderBox.center;if(Br(h.descriptor.id,o)){var v=xu(h.page,Do(o.displacedBy.point));return J0({axis:l,moveRelativeTo:v,isMoving:a})}return J0({axis:l,moveRelativeTo:h.page,isMoving:a})},Hp=function(t,e){var n=t.frame;return n?ot(e,n.scroll.diff.displacement):e},jU=function(e){var n=e.impact,r=e.draggable,i=e.droppable,o=e.draggables,s=e.afterCritical,a=r.page.borderBox.center,l=n.at;return!i||!l?a:l.type==="REORDER"?zU({impact:n,draggable:r,draggables:o,droppable:i,afterCritical:s}):BU({impact:n,draggables:o,afterCritical:s})},qc=function(t){var e=jU(t),n=t.droppable,r=n?Hp(n,e):e;return r},U1=function(t,e){var n=Lt(e,t.scroll.initial),r=Do(n),i=yn({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),o={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return o};function e_(t,e){return t.map(function(n){return e[n]})}function WU(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var HU=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,o=t.maxScrollChange,s=U1(n,ot(n.scroll.current,o)),a=r.frame?sm(r,ot(r.frame.scroll.current,o)):r,l=e.displaced,u=ra({afterDragging:e_(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:s.frame,last:l,forceShouldAnimate:!1}),d=ra({afterDragging:e_(l.all,i),destination:a,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),c={},f={},p=[l,u,d];l.all.forEach(function(v){var w=WU(v,p);if(w){f[v]=w;return}c[v]=!0});var h=Y({},e,{displaced:{all:l.all,invisible:c,visible:f}});return h},VU=function(t,e){return ot(t.scroll.diff.displacement,e)},fm=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=VU(r,e),o=Lt(i,n.page.borderBox.center);return ot(n.client.borderBox.center,o)},$1=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,o=t.withDroppableDisplacement,s=t.onlyOnMainAxis,a=s===void 0?!1:s,l=Lt(r,e.page.borderBox.center),u=Na(e.page.borderBox,l),d={target:u,destination:n,withDroppableDisplacement:o,viewport:i};return a?PU(d):F1(d)},GU=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,o=t.previousImpact,s=t.viewport,a=t.previousPageBorderBoxCenter,l=t.previousClientSelection,u=t.afterCritical;if(!r.isEnabled)return null;var d=Oo(r.descriptor.id,i),c=No(n,r),f=SU({isMovingForward:e,draggable:n,destination:r,insideDestination:d,previousImpact:o})||LU({isMovingForward:e,isInHomeList:c,draggable:n,draggables:i,destination:r,insideDestination:d,previousImpact:o,viewport:s,afterCritical:u});if(!f)return null;var p=qc({impact:f,draggable:n,droppable:r,draggables:i,afterCritical:u}),h=$1({draggable:n,destination:r,newPageBorderBoxCenter:p,viewport:s.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(h){var v=fm({pageBorderBoxCenter:p,draggable:n,viewport:s});return{clientSelection:v,impact:f,scrollJumpRequest:null}}var w=Lt(p,a),m=HU({impact:f,viewport:s,destination:r,draggables:i,maxScrollChange:w});return{clientSelection:l,impact:m,scrollJumpRequest:w}},mt=function(e){var n=e.subject.active;return n||$(!1),n},qU=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,o=t.viewport,s=r.subject.active;if(!s)return null;var a=r.axis,l=en(s[a.start],s[a.end]),u=Hc(i).filter(function(c){return c!==r}).filter(function(c){return c.isEnabled}).filter(function(c){return Boolean(c.subject.active)}).filter(function(c){return M1(o.frame)(mt(c))}).filter(function(c){var f=mt(c);return e?s[a.crossAxisEnd]<f[a.crossAxisEnd]:f[a.crossAxisStart]<s[a.crossAxisStart]}).filter(function(c){var f=mt(c),p=en(f[a.start],f[a.end]);return l(f[a.start])||l(f[a.end])||p(s[a.start])||p(s[a.end])}).sort(function(c,f){var p=mt(c)[a.crossAxisStart],h=mt(f)[a.crossAxisStart];return e?p-h:h-p}).filter(function(c,f,p){return mt(c)[a.crossAxisStart]===mt(p[0])[a.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var d=u.filter(function(c){var f=en(mt(c)[a.start],mt(c)[a.end]);return f(n[a.line])});return d.length===1?d[0]:d.length>1?d.sort(function(c,f){return mt(c)[a.start]-mt(f)[a.start]})[0]:u.sort(function(c,f){var p=Y0(n,Q0(mt(c))),h=Y0(n,Q0(mt(f)));return p!==h?p-h:mt(c)[a.start]-mt(f)[a.start]})[0]},t_=function(e,n){var r=e.page.borderBox.center;return Br(e.descriptor.id,n)?Lt(r,n.displacedBy.point):r},KU=function(e,n){var r=e.page.borderBox;return Br(e.descriptor.id,n)?Na(r,Do(n.displacedBy.point)):r},YU=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,o=t.afterCritical,s=i.filter(function(a){return F1({target:KU(a,o),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(a,l){var u=ta(e,Hp(r,t_(a,o))),d=ta(e,Hp(r,t_(l,o)));return u<d?-1:d<u?1:a.descriptor.index-l.descriptor.index});return s[0]||null},Ma=Xe(function(e,n){var r=n[e.line];return{value:r,point:Si(e.line,r)}}),QU=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return Si(i.line,n[i.line]);var o=e.subject.page.contentBox[i.size],s=Oo(e.descriptor.id,r),a=s.reduce(function(d,c){return d+c.client.marginBox[i.size]},0),l=a+n[i.line],u=l-o;return u<=0?null:Si(i.line,u)},z1=function(e,n){return Y({},e,{scroll:Y({},e.scroll,{max:n})})},j1=function(e,n,r){var i=e.frame;No(n,e)&&$(!1),e.subject.withPlaceholder&&$(!1);var o=Ma(e.axis,n.displaceBy).point,s=QU(e,o,r),a={placeholderSize:o,increasedBy:s,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=yo({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:e.frame});return Y({},e,{subject:l})}var u=s?ot(i.scroll.max,s):i.scroll.max,d=z1(i,u),c=yo({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:d});return Y({},e,{subject:c,frame:d})},XU=function(e){var n=e.subject.withPlaceholder;n||$(!1);var r=e.frame;if(!r){var i=yo({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return Y({},e,{subject:i})}var o=n.oldFrameMaxScroll;o||$(!1);var s=z1(r,o),a=yo({page:e.subject.page,axis:e.axis,frame:s,withPlaceholder:null});return Y({},e,{subject:a,frame:s})},JU=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,o=t.draggables,s=t.destination,a=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var u={displaced:na,displacedBy:N1,at:{type:"REORDER",destination:{droppableId:s.descriptor.id,index:0}}},d=qc({impact:u,draggable:i,droppable:s,draggables:o,afterCritical:l}),c=No(i,s)?s:j1(s,i,o),f=$1({draggable:i,destination:c,newPageBorderBoxCenter:d,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return f?u:null}var p=Boolean(e[s.axis.line]<=n.page.borderBox.center[s.axis.line]),h=function(){var w=n.descriptor.index;return n.descriptor.id===i.descriptor.id||p?w:w+1}(),v=Ma(s.axis,i.displaceBy);return Du({draggable:i,insideDestination:r,destination:s,viewport:a,displacedBy:v,last:na,index:h})},ZU=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,o=t.draggables,s=t.droppables,a=t.viewport,l=t.afterCritical,u=qU({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:s,viewport:a});if(!u)return null;var d=Oo(u.descriptor.id,o),c=YU({pageBorderBoxCenter:n,viewport:a,destination:u,insideDestination:d,afterCritical:l}),f=JU({previousPageBorderBoxCenter:n,destination:u,draggable:r,draggables:o,moveRelativeTo:c,insideDestination:d,viewport:a,afterCritical:l});if(!f)return null;var p=qc({impact:f,draggable:r,droppable:u,draggables:o,afterCritical:l}),h=fm({pageBorderBoxCenter:p,draggable:r,viewport:a});return{clientSelection:h,impact:f,scrollJumpRequest:null}},Ut=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},e$=function(e,n){var r=Ut(e);return r?n[r]:null},t$=function(t){var e=t.state,n=t.type,r=e$(e.impact,e.dimensions.droppables),i=Boolean(r),o=e.dimensions.droppables[e.critical.droppable.id],s=r||o,a=s.axis.direction,l=a==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||a==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var u=n==="MOVE_DOWN"||n==="MOVE_RIGHT",d=e.dimensions.draggables[e.critical.draggable.id],c=e.current.page.borderBoxCenter,f=e.dimensions,p=f.draggables,h=f.droppables;return l?GU({isMovingForward:u,previousPageBorderBoxCenter:c,draggable:d,destination:s,draggables:p,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):ZU({isMovingForward:u,previousPageBorderBoxCenter:c,draggable:d,isOver:s,draggables:p,droppables:h,viewport:e.viewport,afterCritical:e.afterCritical})};function Qr(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function W1(t){var e=en(t.top,t.bottom),n=en(t.left,t.right);return function(i){return e(i.y)&&n(i.x)}}function n$(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function r$(t){var e=t.pageBorderBox,n=t.draggable,r=t.candidates,i=n.page.borderBox.center,o=r.map(function(s){var a=s.axis,l=Si(s.axis.line,e.center[a.line],s.page.borderBox.center[a.crossAxisLine]);return{id:s.descriptor.id,distance:ta(i,l)}}).sort(function(s,a){return a.distance-s.distance});return o[0]?o[0].id:null}function i$(t){var e=t.pageBorderBox,n=t.draggable,r=t.droppables,i=Hc(r).filter(function(o){if(!o.isEnabled)return!1;var s=o.subject.active;if(!s||!n$(e,s))return!1;if(W1(s)(e.center))return!0;var a=o.axis,l=s.center[a.crossAxisLine],u=e[a.crossAxisStart],d=e[a.crossAxisEnd],c=en(s[a.crossAxisStart],s[a.crossAxisEnd]),f=c(u),p=c(d);return!f&&!p?!0:f?u<l:d>l});return i.length?i.length===1?i[0].descriptor.id:r$({pageBorderBox:e,draggable:n,candidates:i}):null}var H1=function(e,n){return yn(Na(e,n))},o$=function(t,e){var n=t.frame;return n?H1(e,n.scroll.diff.value):e};function V1(t){var e=t.displaced,n=t.id;return Boolean(e.visible[n]||e.invisible[n])}function s$(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var a$=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,r=t.destination,i=t.insideDestination,o=t.last,s=t.viewport,a=t.afterCritical,l=r.axis,u=Ma(r.axis,n.displaceBy),d=u.value,c=e[l.start],f=e[l.end],p=Gc(n,i),h=Hr(p,function(w){var m=w.descriptor.id,g=w.page.borderBox.center[l.line],y=Br(m,a),_=V1({displaced:o,id:m});return y?_?f<=g:c<g-d:_?f<=g+d:c<g}),v=s$({draggable:n,closest:h,inHomeList:No(n,r)});return Du({draggable:n,insideDestination:i,destination:r,viewport:s,last:o,displacedBy:u,index:v})},l$=4,u$=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,r=t.previousImpact,i=t.destination,o=t.insideDestination,s=t.afterCritical;if(!i.isCombineEnabled)return null;var a=i.axis,l=Ma(i.axis,e.displaceBy),u=l.value,d=n[a.start],c=n[a.end],f=Gc(e,o),p=Hr(f,function(v){var w=v.descriptor.id,m=v.page.borderBox,g=m[a.size],y=g/l$,_=Br(w,s),S=V1({displaced:r.displaced,id:w});return _?S?c>m[a.start]+y&&c<m[a.end]-y:d>m[a.start]-u+y&&d<m[a.end]-u-y:S?c>m[a.start]+u+y&&c<m[a.end]+u-y:d>m[a.start]+y&&d<m[a.end]-y});if(!p)return null;var h={displacedBy:l,displaced:r.displaced,at:{type:"COMBINE",combine:{draggableId:p.descriptor.id,droppableId:i.descriptor.id}}};return h},G1=function(t){var e=t.pageOffset,n=t.draggable,r=t.draggables,i=t.droppables,o=t.previousImpact,s=t.viewport,a=t.afterCritical,l=H1(n.page.borderBox,e),u=i$({pageBorderBox:l,draggable:n,droppables:i});if(!u)return EU;var d=i[u],c=Oo(d.descriptor.id,r),f=o$(d,l);return u$({pageBorderBoxWithDroppableScroll:f,draggable:n,previousImpact:o,destination:d,insideDestination:c,afterCritical:a})||a$({pageBorderBoxWithDroppableScroll:f,draggable:n,destination:d,insideDestination:c,last:o.displaced,viewport:s,afterCritical:a})},pm=function(t,e){var n;return Y({},t,(n={},n[e.descriptor.id]=e,n))},c$=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,o=Ut(n),s=Ut(r);if(!o||o===s)return i;var a=i[o];if(!a.subject.withPlaceholder)return i;var l=XU(a);return pm(i,l)},d$=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,o=t.impact,s=c$({previousImpact:i,impact:o,droppables:r}),a=Ut(o);if(!a)return s;var l=r[a];if(No(e,l)||l.subject.withPlaceholder)return s;var u=j1(l,e,n);return pm(s,u)},Es=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,o=t.impact,s=t.scrollJumpRequest,a=i||e.viewport,l=r||e.dimensions,u=n||e.current.client.selection,d=Lt(u,e.initial.client.selection),c={offset:d,selection:u,borderBoxCenter:ot(e.initial.client.borderBoxCenter,d)},f={selection:ot(c.selection,a.scroll.current),borderBoxCenter:ot(c.borderBoxCenter,a.scroll.current),offset:ot(c.offset,a.scroll.diff.value)},p={client:c,page:f};if(e.phase==="COLLECTING")return Y({phase:"COLLECTING"},e,{dimensions:l,viewport:a,current:p});var h=l.draggables[e.critical.draggable.id],v=o||G1({pageOffset:f.offset,draggable:h,draggables:l.draggables,droppables:l.droppables,previousImpact:e.impact,viewport:a,afterCritical:e.afterCritical}),w=d$({draggable:h,impact:v,previousImpact:e.impact,draggables:l.draggables,droppables:l.droppables}),m=Y({},e,{current:p,dimensions:{draggables:l.draggables,droppables:w},impact:v,viewport:a,scrollJumpRequest:s||null,forceShouldAnimate:s?!1:null});return m};function f$(t,e){return t.map(function(n){return e[n]})}var q1=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,o=t.forceShouldAnimate,s=e.displaced,a=f$(s.all,r),l=ra({afterDragging:a,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:o,last:s});return Y({},e,{displaced:l})},K1=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,o=t.viewport,s=t.afterCritical,a=qc({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:s});return fm({pageBorderBoxCenter:a,draggable:n,viewport:o})},Y1=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&$(!1);var i=e.impact,o=r||e.viewport,s=n||e.dimensions,a=s.draggables,l=s.droppables,u=a[e.critical.draggable.id],d=Ut(i);d||$(!1);var c=l[d],f=q1({impact:i,viewport:o,destination:c,draggables:a}),p=K1({impact:f,draggable:u,droppable:c,draggables:a,viewport:o,afterCritical:e.afterCritical});return Es({impact:f,clientSelection:p,state:e,dimensions:s,viewport:o})},p$=function(t){return{index:t.index,droppableId:t.droppableId}},Q1=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,o=Ma(n.axis,e.displaceBy),s=Oo(n.descriptor.id,r),a=s.indexOf(e);a===-1&&$(!1);var l=s.slice(a+1),u=l.reduce(function(p,h){return p[h.descriptor.id]=!0,p},{}),d={inVirtualList:n.descriptor.mode==="virtual",displacedBy:o,effected:u},c=ra({afterDragging:l,destination:n,displacedBy:o,last:null,viewport:i.frame,forceShouldAnimate:!1}),f={displaced:c,displacedBy:o,at:{type:"REORDER",destination:p$(e.descriptor)}};return{impact:f,afterCritical:d}},h$=function(t,e){return{draggables:t.draggables,droppables:pm(t.droppables,e)}},g$=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=xu(e.client,n),o=ku(i,r),s=Y({},e,{placeholder:Y({},e.placeholder,{client:i}),client:i,page:o});return s},m$=function(t){var e=t.frame;return e||$(!1),e},v$=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(o){var s=o.descriptor.droppableId,a=n[s],l=m$(a),u=l.scroll.diff.value,d=ot(i,u),c=g$({draggable:o,offset:d,initialWindowScroll:r.scroll.initial});return c})},y$=function(t){var e=t.state,n=t.published,r=n.modified.map(function(y){var _=e.dimensions.droppables[y.droppableId],S=sm(_,y.scroll);return S}),i=Y({},e.dimensions.droppables,{},D1(r)),o=O1(v$({additions:n.additions,updatedDroppables:i,viewport:e.viewport})),s=Y({},e.dimensions.draggables,{},o);n.removals.forEach(function(y){delete s[y]});var a={droppables:i,draggables:s},l=Ut(e.impact),u=l?a.droppables[l]:null,d=a.draggables[e.critical.draggable.id],c=a.droppables[e.critical.droppable.id],f=Q1({draggable:d,home:c,draggables:s,viewport:e.viewport}),p=f.impact,h=f.afterCritical,v=u&&u.isCombineEnabled?e.impact:p,w=G1({pageOffset:e.current.page.offset,draggable:a.draggables[e.critical.draggable.id],draggables:a.draggables,droppables:a.droppables,previousImpact:v,viewport:e.viewport,afterCritical:h}),m=Y({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:w,onLiftImpact:p,dimensions:a,afterCritical:h,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return m;var g=Y({phase:"DROP_PENDING"},m,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return g},Vp=function(e){return e.movementMode==="SNAP"},nf=function(e,n,r){var i=h$(e.dimensions,n);return!Vp(e)||r?Es({state:e,dimensions:i}):Y1({state:e,dimensions:i})};function rf(t){return t.isDragging&&t.movementMode==="SNAP"?Y({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var n_={phase:"IDLE",completed:null,shouldFlush:!1},_$=function(t,e){if(t===void 0&&(t=n_),e.type==="FLUSH")return Y({},n_,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&$(!1);var n=e.payload,r=n.critical,i=n.clientSelection,o=n.viewport,s=n.dimensions,a=n.movementMode,l=s.draggables[r.draggable.id],u=s.droppables[r.droppable.id],d={selection:i,borderBoxCenter:l.client.borderBox.center,offset:Je},c={client:d,page:{selection:ot(d.selection,o.scroll.initial),borderBoxCenter:ot(d.selection,o.scroll.initial),offset:ot(d.selection,o.scroll.diff.value)}},f=Hc(s.droppables).every(function(M){return!M.isFixedOnPage}),p=Q1({draggable:l,home:u,draggables:s.draggables,viewport:o}),h=p.impact,v=p.afterCritical,w={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:a,dimensions:s,initial:c,current:c,isWindowScrollAllowed:f,impact:h,afterCritical:v,onLiftImpact:h,viewport:o,scrollJumpRequest:null,forceShouldAnimate:null};return w}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&$(!1);var m=Y({phase:"COLLECTING"},t,{phase:"COLLECTING"});return m}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||$(!1),y$({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Qr(t)||$(!1);var g=e.payload.client;return Or(g,t.current.client.selection)?t:Es({state:t,clientSelection:g,impact:Vp(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return rf(t);Qr(t)||$(!1);var y=e.payload,_=y.id,S=y.newScroll,T=t.dimensions.droppables[_];if(!T)return t;var k=sm(T,S);return nf(t,k,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Qr(t)||$(!1);var P=e.payload,U=P.id,z=P.isEnabled,q=t.dimensions.droppables[U];q||$(!1),q.isEnabled===z&&$(!1);var Z=Y({},q,{isEnabled:z});return nf(t,Z,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Qr(t)||$(!1);var oe=e.payload,ne=oe.id,se=oe.isCombineEnabled,ge=t.dimensions.droppables[ne];ge||$(!1),ge.isCombineEnabled===se&&$(!1);var Ee=Y({},ge,{isCombineEnabled:se});return nf(t,Ee,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Qr(t)||$(!1),t.isWindowScrollAllowed||$(!1);var N=e.payload.newScroll;if(Or(t.viewport.scroll.current,N))return rf(t);var V=U1(t.viewport,N);return Vp(t)?Y1({state:t,viewport:V}):Es({state:t,viewport:V})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Qr(t))return t;var G=e.payload.maxScroll;if(Or(G,t.viewport.scroll.max))return t;var ie=Y({},t.viewport,{scroll:Y({},t.viewport.scroll,{max:G})});return Y({phase:"DRAGGING"},t,{viewport:ie})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&$(!1);var C=t$({state:t,type:e.type});return C?Es({state:t,impact:C.impact,clientSelection:C.clientSelection,scrollJumpRequest:C.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var R=e.payload.reason;t.phase!=="COLLECTING"&&$(!1);var O=Y({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:R});return O}if(e.type==="DROP_ANIMATE"){var B=e.payload,I=B.completed,b=B.dropDuration,E=B.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||$(!1);var F={phase:"DROP_ANIMATING",completed:I,dropDuration:b,newHomeClientOffset:E,dimensions:t.dimensions};return F}if(e.type==="DROP_COMPLETE"){var D=e.payload.completed;return{phase:"IDLE",completed:D,shouldFlush:!1}}return t},w$=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},b$=function(e){return{type:"LIFT",payload:e}},S$=function(e){return{type:"INITIAL_PUBLISH",payload:e}},E$=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},I$=function(){return{type:"COLLECTION_STARTING",payload:null}},C$=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},T$=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},x$=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},X1=function(e){return{type:"MOVE",payload:e}},k$=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},R$=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},P$=function(){return{type:"MOVE_UP",payload:null}},A$=function(){return{type:"MOVE_DOWN",payload:null}},D$=function(){return{type:"MOVE_RIGHT",payload:null}},O$=function(){return{type:"MOVE_LEFT",payload:null}},hm=function(){return{type:"FLUSH",payload:null}},N$=function(e){return{type:"DROP_ANIMATE",payload:e}},gm=function(e){return{type:"DROP_COMPLETE",payload:e}},J1=function(e){return{type:"DROP",payload:e}},M$=function(e){return{type:"DROP_PENDING",payload:e}},Z1=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},L$=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(o){if(o.type!=="LIFT"){i(o);return}var s=o.payload,a=s.id,l=s.clientSelection,u=s.movementMode,d=n();d.phase==="DROP_ANIMATING"&&r(gm({completed:d.completed})),n().phase!=="IDLE"&&$(!1),r(hm()),r(w$({draggableId:a,movementMode:u}));var c={shouldPublishImmediately:u==="SNAP"},f={draggableId:a,scrollOptions:c},p=t.startPublishing(f),h=p.critical,v=p.dimensions,w=p.viewport;r(S$({critical:h,dimensions:v,clientSelection:l,movementMode:u,viewport:w}))}}}},F$=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},mm={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},ia={opacity:{drop:0,combining:.7},scale:{drop:.75}},vm={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Vr=vm.outOfTheWay+"s "+mm.outOfTheWay,Is={fluid:"opacity "+Vr,snap:"transform "+Vr+", opacity "+Vr,drop:function(e){var n=e+"s "+mm.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+Vr,placeholder:"height "+Vr+", width "+Vr+", margin "+Vr},r_=function(e){return Or(e,Je)?null:"translate("+e.x+"px, "+e.y+"px)"},Gp={moveTo:r_,drop:function(e,n){var r=r_(e);return r?n?r+" scale("+ia.scale.drop+")":r:null}},qp=vm.minDropTime,eC=vm.maxDropTime,B$=eC-qp,i_=1500,U$=.6,$$=function(t){var e=t.current,n=t.destination,r=t.reason,i=ta(e,n);if(i<=0)return qp;if(i>=i_)return eC;var o=i/i_,s=qp+B$*o,a=r==="CANCEL"?s*U$:s;return Number(a.toFixed(2))},z$=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,o=t.afterCritical,s=r.draggables,a=r.droppables,l=Ut(e),u=l?a[l]:null,d=a[n.descriptor.droppableId],c=K1({impact:e,draggable:n,draggables:s,afterCritical:o,droppable:u||d,viewport:i}),f=Lt(c,n.client.borderBox.center);return f},j$=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,o=t.viewport,s=t.onLiftImpact;if(!r.at||n!=="DROP"){var a=q1({draggables:e,impact:s,destination:i,viewport:o,forceShouldAnimate:!0});return{impact:a,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=Y({},r,{displaced:na});return{impact:l,didDropInsideDroppable:!0}},W$=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var o=e(),s=i.payload.reason;if(o.phase==="COLLECTING"){n(M$({reason:s}));return}if(o.phase!=="IDLE"){var a=o.phase==="DROP_PENDING"&&o.isWaiting;a&&$(!1),o.phase==="DRAGGING"||o.phase==="DROP_PENDING"||$(!1);var l=o.critical,u=o.dimensions,d=u.draggables[o.critical.draggable.id],c=j$({reason:s,lastImpact:o.impact,afterCritical:o.afterCritical,onLiftImpact:o.onLiftImpact,home:o.dimensions.droppables[o.critical.droppable.id],viewport:o.viewport,draggables:o.dimensions.draggables}),f=c.impact,p=c.didDropInsideDroppable,h=p?lm(f):null,v=p?Vc(f):null,w={index:l.draggable.index,droppableId:l.droppable.id},m={draggableId:d.descriptor.id,type:d.descriptor.type,source:w,reason:s,mode:o.movementMode,destination:h,combine:v},g=z$({impact:f,draggable:d,dimensions:u,viewport:o.viewport,afterCritical:o.afterCritical}),y={critical:o.critical,afterCritical:o.afterCritical,result:m,impact:f},_=!Or(o.current.client.offset,g)||Boolean(m.combine);if(!_){n(gm({completed:y}));return}var S=$$({current:o.current.client.offset,destination:g,reason:s}),T={newHomeClientOffset:g,dropDuration:S,completed:y};n(N$(T))}}}},tC=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function H$(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function V$(t){var e=t.onWindowScroll;function n(){e(tC())}var r=ea(n),i=H$(r),o=Dr;function s(){return o!==Dr}function a(){s()&&$(!1),o=Jt(window,[i])}function l(){s()||$(!1),r.cancel(),o(),o=Dr}return{start:a,stop:l,isActive:s}}var G$=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},q$=function(t){var e=V$({onWindowScroll:function(r){t.dispatch(k$({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&G$(r)&&e.stop(),n(r)}}},K$=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(s){e||n||(e=!0,t(s),clearTimeout(r))};return i.wasCalled=function(){return e},i},Y$=function(){var t=[],e=function(o){var s=am(t,function(u){return u.timerId===o});s===-1&&$(!1);var a=t.splice(s,1),l=a[0];l.callback()},n=function(o){var s=setTimeout(function(){return e(s)}),a={timerId:s,callback:o};t.push(a)},r=function(){if(!!t.length){var o=[].concat(t);t.length=0,o.forEach(function(s){clearTimeout(s.timerId),s.callback()})}};return{add:n,flush:r}},Q$=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},X$=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},J$=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},Jo=function(e,n){n()},ul=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},of=function(e,n,r,i){if(!e){r(i(n));return}var o=K$(r),s={announce:o};e(n,s),o.wasCalled()||r(i(n))},Z$=function(t,e){var n=Y$(),r=null,i=function(f,p){r&&$(!1),Jo("onBeforeCapture",function(){var h=t().onBeforeCapture;if(h){var v={draggableId:f,mode:p};h(v)}})},o=function(f,p){r&&$(!1),Jo("onBeforeDragStart",function(){var h=t().onBeforeDragStart;h&&h(ul(f,p))})},s=function(f,p){r&&$(!1);var h=ul(f,p);r={mode:p,lastCritical:f,lastLocation:h.source,lastCombine:null},n.add(function(){Jo("onDragStart",function(){return of(t().onDragStart,h,e,Nl.onDragStart)})})},a=function(f,p){var h=lm(p),v=Vc(p);r||$(!1);var w=!J$(f,r.lastCritical);w&&(r.lastCritical=f);var m=!Q$(r.lastLocation,h);m&&(r.lastLocation=h);var g=!X$(r.lastCombine,v);if(g&&(r.lastCombine=v),!(!w&&!m&&!g)){var y=Y({},ul(f,r.mode),{combine:v,destination:h});n.add(function(){Jo("onDragUpdate",function(){return of(t().onDragUpdate,y,e,Nl.onDragUpdate)})})}},l=function(){r||$(!1),n.flush()},u=function(f){r||$(!1),r=null,Jo("onDragEnd",function(){return of(t().onDragEnd,f,e,Nl.onDragEnd)})},d=function(){if(!!r){var f=Y({},ul(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});u(f)}};return{beforeCapture:i,beforeStart:o,start:s,update:a,flush:l,drop:u,abort:d}},e4=function(t,e){var n=Z$(t,e);return function(r){return function(i){return function(o){if(o.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(o.payload.draggableId,o.payload.movementMode);return}if(o.type==="INITIAL_PUBLISH"){var s=o.payload.critical;n.beforeStart(s,o.payload.movementMode),i(o),n.start(s,o.payload.movementMode);return}if(o.type==="DROP_COMPLETE"){var a=o.payload.completed.result;n.flush(),i(o),n.drop(a);return}if(i(o),o.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},t4=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&$(!1),t.dispatch(gm({completed:r.completed}))}}},n4=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(o){if((o.type==="FLUSH"||o.type==="DROP_COMPLETE"||o.type==="DROP_ANIMATION_FINISHED")&&r(),i(o),o.type==="DROP_ANIMATE"){var s={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(Z1())}};n=requestAnimationFrame(function(){n=null,e=Jt(window,[s])})}}}},r4=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},i4=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},o4=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},s4=function(t){return function(e){return function(n){return function(r){if(o4(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&$(!1),t.start(i);return}n(r),t.scroll(e.getState())}}}},a4=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(J1({reason:r.reason})))}}}},l4=d1,u4=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,o=t.announce,s=t.autoScroller;return c1(_$,l4(uB(F$(r),r4(e),L$(e),W$,t4,n4,a4,s4(s),q$,i4(n),e4(i,o))))},sf=function(){return{additions:{},removals:{},modified:{}}};function c4(t){var e=t.registry,n=t.callbacks,r=sf(),i=null,o=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var d=r,c=d.additions,f=d.removals,p=d.modified,h=Object.keys(c).map(function(m){return e.draggable.getById(m).getDimension(Je)}).sort(function(m,g){return m.descriptor.index-g.descriptor.index}),v=Object.keys(p).map(function(m){var g=e.droppable.getById(m),y=g.callbacks.getScrollWhileDragging();return{droppableId:m,scroll:y}}),w={additions:h,removals:Object.keys(f),modified:v};r=sf(),n.publish(w)}))},s=function(d){var c=d.descriptor.id;r.additions[c]=d,r.modified[d.descriptor.droppableId]=!0,r.removals[c]&&delete r.removals[c],o()},a=function(d){var c=d.descriptor;r.removals[c.id]=!0,r.modified[c.droppableId]=!0,r.additions[c.id]&&delete r.additions[c.id],o()},l=function(){!i||(cancelAnimationFrame(i),i=null,r=sf())};return{add:s,remove:a,stop:l}}var nC=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,o=Lt({x:n,y:e},{x:i,y:r}),s={x:Math.max(0,o.x),y:Math.max(0,o.y)};return s},rC=function(){var t=document.documentElement;return t||$(!1),t},iC=function(){var t=rC(),e=nC({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},d4=function(){var t=tC(),e=iC(),n=t.y,r=t.x,i=rC(),o=i.clientWidth,s=i.clientHeight,a=r+o,l=n+s,u=yn({top:n,left:r,right:a,bottom:l}),d={frame:u,scroll:{initial:t,current:t,max:e,diff:{value:Je,displacement:Je}}};return d},f4=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=d4(),o=i.scroll.current,s=e.droppable,a=r.droppable.getAllByType(s.type).map(function(c){return c.callbacks.getDimensionAndWatchScroll(o,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(c){return c.getDimension(o)}),u={draggables:O1(l),droppables:D1(a)},d={dimensions:u,critical:e,viewport:i};return d};function o_(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var p4=function(t,e){var n=null,r=c4({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(p,h){t.droppable.exists(p)||$(!1),n&&e.updateDroppableIsEnabled({id:p,isEnabled:h})},o=function(p,h){!n||(t.droppable.exists(p)||$(!1),e.updateDroppableIsCombineEnabled({id:p,isCombineEnabled:h}))},s=function(p,h){!n||(t.droppable.exists(p)||$(!1),e.updateDroppableScroll({id:p,newScroll:h}))},a=function(p,h){!n||t.droppable.getById(p).callbacks.scroll(h)},l=function(){if(!!n){r.stop();var p=n.critical.droppable;t.droppable.getAllByType(p.type).forEach(function(h){return h.callbacks.dragStopped()}),n.unsubscribe(),n=null}},u=function(p){n||$(!1);var h=n.critical.draggable;p.type==="ADDITION"&&o_(t,h,p.value)&&r.add(p.value),p.type==="REMOVAL"&&o_(t,h,p.value)&&r.remove(p.value)},d=function(p){n&&$(!1);var h=t.draggable.getById(p.draggableId),v=t.droppable.getById(h.descriptor.droppableId),w={draggable:h.descriptor,droppable:v.descriptor},m=t.subscribe(u);return n={critical:w,unsubscribe:m},f4({critical:w,registry:t,scrollOptions:p.scrollOptions})},c={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:o,scrollDroppable:a,updateDroppableScroll:s,startPublishing:d,stopPublishing:l};return c},oC=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},h4=function(t){window.scrollBy(t.x,t.y)},g4=Xe(function(t){return Hc(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),m4=function(e,n){var r=Hr(g4(n),function(i){return i.frame||$(!1),W1(i.frame.pageMarginBox)(e)});return r},v4=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var o=m4(e,r);return o},Nr={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},y4=function(t,e){var n=t[e.size]*Nr.startFromPercentage,r=t[e.size]*Nr.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},sC=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var o=r-e,s=o/i;return s},ym=1,_4=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return Nr.maxPixelScroll;if(t===e.startScrollingFrom)return ym;var n=sC({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=Nr.maxPixelScroll*Nr.ease(r);return Math.ceil(i)},s_=Nr.durationDampening.accelerateAt,a_=Nr.durationDampening.stopDampeningAt,w4=function(t,e){var n=e,r=a_,i=Date.now(),o=i-n;if(o>=a_)return t;if(o<s_)return ym;var s=sC({startOfRange:s_,endOfRange:r,current:o}),a=t*Nr.ease(s);return Math.ceil(a)},l_=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,o=_4(e,n);return o===0?0:i?Math.max(w4(o,r),ym):o},u_=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,o=t.shouldUseTimeDampening,s=y4(e,i),a=n[i.end]<n[i.start];return a?l_({distanceToEdge:n[i.end],thresholds:s,dragStartTime:r,shouldUseTimeDampening:o}):-1*l_({distanceToEdge:n[i.start],thresholds:s,dragStartTime:r,shouldUseTimeDampening:o})},b4=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,o=n.width>e.width;return!o&&!i?r:o&&i?null:{x:o?0:r.x,y:i?0:r.y}},S4=P1(function(t){return t===0?0:t}),aC=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,o=t.shouldUseTimeDampening,s={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},a=u_({container:n,distanceToEdges:s,dragStartTime:e,axis:um,shouldUseTimeDampening:o}),l=u_({container:n,distanceToEdges:s,dragStartTime:e,axis:L1,shouldUseTimeDampening:o}),u=S4({x:l,y:a});if(Or(u,Je))return null;var d=b4({container:n,subject:r,proposedScroll:u});return d?Or(d,Je)?null:d:null},E4=P1(function(t){return t===0?0:t>0?1:-1}),_m=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,o=ot(n,i),s={x:t(o.x,r.x),y:t(o.y,r.y)};return Or(s,Je)?null:s}}(),lC=function(e){var n=e.max,r=e.current,i=e.change,o={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},s=E4(i),a=_m({max:o,current:r,change:s});return!a||s.x!==0&&a.x===0||s.y!==0&&a.y===0},wm=function(e,n){return lC({current:e.scroll.current,max:e.scroll.max,change:n})},I4=function(e,n){if(!wm(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return _m({current:i,max:r,change:n})},bm=function(e,n){var r=e.frame;return r?lC({current:r.scroll.current,max:r.scroll.max,change:n}):!1},C4=function(e,n){var r=e.frame;return!r||!bm(e,n)?null:_m({current:r.scroll.current,max:r.scroll.max,change:n})},T4=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,o=t.shouldUseTimeDampening,s=aC({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:o});return s&&wm(e,s)?s:null},x4=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,o=t.shouldUseTimeDampening,s=e.frame;if(!s)return null;var a=aC({dragStartTime:i,container:s.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:o});return a&&bm(e,a)?a:null},c_=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,o=t.scrollDroppable,s=e.current.page.borderBoxCenter,a=e.dimensions.draggables[e.critical.draggable.id],l=a.page.marginBox;if(e.isWindowScrollAllowed){var u=e.viewport,d=T4({dragStartTime:n,viewport:u,subject:l,center:s,shouldUseTimeDampening:r});if(d){i(d);return}}var c=v4({center:s,destination:Ut(e.impact),droppables:e.dimensions.droppables});if(!!c){var f=x4({dragStartTime:n,droppable:c,subject:l,center:s,shouldUseTimeDampening:r});f&&o(c.descriptor.id,f)}},k4=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=ea(e),i=ea(n),o=null,s=function(d){o||$(!1);var c=o,f=c.shouldUseTimeDampening,p=c.dragStartTime;c_({state:d,scrollWindow:r,scrollDroppable:i,dragStartTime:p,shouldUseTimeDampening:f})},a=function(d){o&&$(!1);var c=Date.now(),f=!1,p=function(){f=!0};c_({state:d,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:p,scrollDroppable:p}),o={dragStartTime:c,shouldUseTimeDampening:f},f&&s(d)},l=function(){!o||(r.cancel(),i.cancel(),o=null)};return{start:a,stop:l,scroll:s}},R4=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(u,d){var c=ot(u.current.client.selection,d);e({client:c})},o=function(u,d){if(!bm(u,d))return d;var c=C4(u,d);if(!c)return n(u.descriptor.id,d),null;var f=Lt(d,c);n(u.descriptor.id,f);var p=Lt(d,f);return p},s=function(u,d,c){if(!u||!wm(d,c))return c;var f=I4(d,c);if(!f)return r(c),null;var p=Lt(c,f);r(p);var h=Lt(c,p);return h},a=function(u){var d=u.scrollJumpRequest;if(!!d){var c=Ut(u.impact);c||$(!1);var f=o(u.dimensions.droppables[c],d);if(!!f){var p=u.viewport,h=s(u.isWindowScrollAllowed,p,f);!h||i(u,h)}}};return a},P4=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=k4({scrollWindow:n,scrollDroppable:e}),o=R4({move:r,scrollWindow:n,scrollDroppable:e}),s=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){i.scroll(u);return}!u.scrollJumpRequest||o(u)}},a={scroll:s,start:i.start,stop:i.stop};return a},_o="data-rbd",wo=function(){var t=_o+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),Kp=function(){var t=_o+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),A4=function(){var t=_o+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),d_={contextId:_o+"-scroll-container-context-id"},D4=function(e){return function(n){return"["+n+'="'+e+'"]'}},Zo=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},O4="pointer-events: none;",N4=function(t){var e=D4(t),n=function(){var a=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(wo.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:a,dragging:O4,dropAnimating:a}}}(),r=function(){var a=`
      transition: `+Is.outOfTheWay+`;
    `;return{selector:e(Kp.contextId),styles:{dragging:a,dropAnimating:a,userCancel:a}}}(),i={selector:e(A4.contextId),styles:{always:"overflow-anchor: none;"}},o={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},s=[r,n,i,o];return{always:Zo(s,"always"),resting:Zo(s,"resting"),dragging:Zo(s,"dragging"),dropAnimating:Zo(s,"dropAnimating"),userCancel:Zo(s,"userCancel")}},$t=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?A.exports.useLayoutEffect:A.exports.useEffect,af=function(){var e=document.querySelector("head");return e||$(!1),e},f_=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function M4(t,e){var n=pe(function(){return N4(t)},[t]),r=A.exports.useRef(null),i=A.exports.useRef(null),o=K(Xe(function(c){var f=i.current;f||$(!1),f.textContent=c}),[]),s=K(function(c){var f=r.current;f||$(!1),f.textContent=c},[]);$t(function(){!r.current&&!i.current||$(!1);var c=f_(e),f=f_(e);return r.current=c,i.current=f,c.setAttribute(_o+"-always",t),f.setAttribute(_o+"-dynamic",t),af().appendChild(c),af().appendChild(f),s(n.always),o(n.resting),function(){var p=function(v){var w=v.current;w||$(!1),af().removeChild(w),v.current=null};p(r),p(i)}},[e,s,o,n.always,n.resting,t]);var a=K(function(){return o(n.dragging)},[o,n.dragging]),l=K(function(c){if(c==="DROP"){o(n.dropAnimating);return}o(n.userCancel)},[o,n.dropAnimating,n.userCancel]),u=K(function(){!i.current||o(n.resting)},[o,n.resting]),d=pe(function(){return{dragging:a,dropping:l,resting:u}},[a,l,u]);return d}var uC=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function Kc(t){return t instanceof uC(t).HTMLElement}function L4(t,e){var n="["+wo.contextId+'="'+t+'"]',r=A1(document.querySelectorAll(n));if(!r.length)return null;var i=Hr(r,function(o){return o.getAttribute(wo.draggableId)===e});return!i||!Kc(i)?null:i}function F4(t){var e=A.exports.useRef({}),n=A.exports.useRef(null),r=A.exports.useRef(null),i=A.exports.useRef(!1),o=K(function(f,p){var h={id:f,focus:p};return e.current[f]=h,function(){var w=e.current,m=w[f];m!==h&&delete w[f]}},[]),s=K(function(f){var p=L4(t,f);p&&p!==document.activeElement&&p.focus()},[t]),a=K(function(f,p){n.current===f&&(n.current=p)},[]),l=K(function(){r.current||!i.current||(r.current=requestAnimationFrame(function(){r.current=null;var f=n.current;f&&s(f)}))},[s]),u=K(function(f){n.current=null;var p=document.activeElement;!p||p.getAttribute(wo.draggableId)===f&&(n.current=f)},[]);$t(function(){return i.current=!0,function(){i.current=!1;var f=r.current;f&&cancelAnimationFrame(f)}},[]);var d=pe(function(){return{register:o,tryRecordFocus:u,tryRestoreFocusRecorded:l,tryShiftRecord:a}},[o,u,l,a]);return d}function B4(){var t={draggables:{},droppables:{}},e=[];function n(c){return e.push(c),function(){var p=e.indexOf(c);p!==-1&&e.splice(p,1)}}function r(c){e.length&&e.forEach(function(f){return f(c)})}function i(c){return t.draggables[c]||null}function o(c){var f=i(c);return f||$(!1),f}var s={register:function(f){t.draggables[f.descriptor.id]=f,r({type:"ADDITION",value:f})},update:function(f,p){var h=t.draggables[p.descriptor.id];!h||h.uniqueId===f.uniqueId&&(delete t.draggables[p.descriptor.id],t.draggables[f.descriptor.id]=f)},unregister:function(f){var p=f.descriptor.id,h=i(p);!h||f.uniqueId===h.uniqueId&&(delete t.draggables[p],r({type:"REMOVAL",value:f}))},getById:o,findById:i,exists:function(f){return Boolean(i(f))},getAllByType:function(f){return Au(t.draggables).filter(function(p){return p.descriptor.type===f})}};function a(c){return t.droppables[c]||null}function l(c){var f=a(c);return f||$(!1),f}var u={register:function(f){t.droppables[f.descriptor.id]=f},unregister:function(f){var p=a(f.descriptor.id);!p||f.uniqueId===p.uniqueId&&delete t.droppables[f.descriptor.id]},getById:l,findById:a,exists:function(f){return Boolean(a(f))},getAllByType:function(f){return Au(t.droppables).filter(function(p){return p.descriptor.type===f})}};function d(){t.draggables={},t.droppables={},e.length=0}return{draggable:s,droppable:u,subscribe:n,clean:d}}function U4(){var t=pe(B4,[]);return A.exports.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var Sm=Le.createContext(null),Ou=function(){var t=document.body;return t||$(!1),t},$4={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},z4=function(e){return"rbd-announcement-"+e};function j4(t){var e=pe(function(){return z4(t)},[t]),n=A.exports.useRef(null);A.exports.useEffect(function(){var o=document.createElement("div");return n.current=o,o.id=e,o.setAttribute("aria-live","assertive"),o.setAttribute("aria-atomic","true"),Y(o.style,$4),Ou().appendChild(o),function(){setTimeout(function(){var l=Ou();l.contains(o)&&l.removeChild(o),o===n.current&&(n.current=null)})}},[e]);var r=K(function(i){var o=n.current;if(o){o.textContent=i;return}},[]);return r}var W4=0,H4={separator:"::"};function Em(t,e){return e===void 0&&(e=H4),pe(function(){return""+t+e.separator+W4++},[e.separator,t])}function V4(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function G4(t){var e=t.contextId,n=t.text,r=Em("hidden-text",{separator:"-"}),i=pe(function(){return V4({contextId:e,uniqueId:r})},[r,e]);return A.exports.useEffect(function(){var s=document.createElement("div");return s.id=i,s.textContent=n,s.style.display="none",Ou().appendChild(s),function(){var l=Ou();l.contains(s)&&l.removeChild(s)}},[i,n]),i}var Yc=Le.createContext(null);function cC(t){var e=A.exports.useRef(t);return A.exports.useEffect(function(){e.current=t}),e}function q4(){var t=null;function e(){return Boolean(t)}function n(s){return s===t}function r(s){t&&$(!1);var a={abandon:s};return t=a,a}function i(){t||$(!1),t=null}function o(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:o}}var K4=9,Y4=13,Im=27,dC=32,Q4=33,X4=34,J4=35,Z4=36,e3=37,t3=38,n3=39,r3=40,cl,i3=(cl={},cl[Y4]=!0,cl[K4]=!0,cl),fC=function(t){i3[t.keyCode]&&t.preventDefault()},Qc=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=Hr(e,function(r){return"on"+r in document});return n||t}(),pC=0,p_=5;function o3(t,e){return Math.abs(e.x-t.x)>=p_||Math.abs(e.y-t.y)>=p_}var h_={type:"IDLE"};function s3(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(s){var a=s.button,l=s.clientX,u=s.clientY;if(a===pC){var d={x:l,y:u},c=r();if(c.type==="DRAGGING"){s.preventDefault(),c.actions.move(d);return}c.type!=="PENDING"&&$(!1);var f=c.point;if(!!o3(f,d)){s.preventDefault();var p=c.actions.fluidLift(d);i({type:"DRAGGING",actions:p})}}}},{eventName:"mouseup",fn:function(s){var a=r();if(a.type!=="DRAGGING"){e();return}s.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(s){r().type==="DRAGGING"&&s.preventDefault(),e()}},{eventName:"keydown",fn:function(s){var a=r();if(a.type==="PENDING"){e();return}if(s.keyCode===Im){s.preventDefault(),e();return}fC(s)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(s){var a=r();if(a.type==="IDLE"&&$(!1),a.actions.shouldRespectForcePress()){e();return}s.preventDefault()}},{eventName:Qc,fn:e}]}function a3(t){var e=A.exports.useRef(h_),n=A.exports.useRef(Dr),r=pe(function(){return{eventName:"mousedown",fn:function(c){if(!c.defaultPrevented&&c.button===pC&&!(c.ctrlKey||c.metaKey||c.shiftKey||c.altKey)){var f=t.findClosestDraggableId(c);if(!!f){var p=t.tryGetLock(f,s,{sourceEvent:c});if(!!p){c.preventDefault();var h={x:c.clientX,y:c.clientY};n.current(),u(p,h)}}}}}},[t]),i=pe(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(c){if(!c.defaultPrevented){var f=t.findClosestDraggableId(c);if(!!f){var p=t.findOptionsForDraggable(f);!p||p.shouldRespectForcePress||!t.canGetLock(f)||c.preventDefault()}}}}},[t]),o=K(function(){var c={passive:!1,capture:!0};n.current=Jt(window,[i,r],c)},[i,r]),s=K(function(){var d=e.current;d.type!=="IDLE"&&(e.current=h_,n.current(),o())},[o]),a=K(function(){var d=e.current;s(),d.type==="DRAGGING"&&d.actions.cancel({shouldBlockNextClick:!0}),d.type==="PENDING"&&d.actions.abort()},[s]),l=K(function(){var c={capture:!0,passive:!1},f=s3({cancel:a,completed:s,getPhase:function(){return e.current},setPhase:function(h){e.current=h}});n.current=Jt(window,f,c)},[a,s]),u=K(function(c,f){e.current.type!=="IDLE"&&$(!1),e.current={type:"PENDING",point:f,actions:c},l()},[l]);$t(function(){return o(),function(){n.current()}},[o])}var Pi;function l3(){}var u3=(Pi={},Pi[X4]=!0,Pi[Q4]=!0,Pi[Z4]=!0,Pi[J4]=!0,Pi);function c3(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(o){if(o.keyCode===Im){o.preventDefault(),n();return}if(o.keyCode===dC){o.preventDefault(),r();return}if(o.keyCode===r3){o.preventDefault(),t.moveDown();return}if(o.keyCode===t3){o.preventDefault(),t.moveUp();return}if(o.keyCode===n3){o.preventDefault(),t.moveRight();return}if(o.keyCode===e3){o.preventDefault(),t.moveLeft();return}if(u3[o.keyCode]){o.preventDefault();return}fC(o)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:Qc,fn:n}]}function d3(t){var e=A.exports.useRef(l3),n=pe(function(){return{eventName:"keydown",fn:function(o){if(o.defaultPrevented||o.keyCode!==dC)return;var s=t.findClosestDraggableId(o);if(!s)return;var a=t.tryGetLock(s,d,{sourceEvent:o});if(!a)return;o.preventDefault();var l=!0,u=a.snapLift();e.current();function d(){l||$(!1),l=!1,e.current(),r()}e.current=Jt(window,c3(u,d),{capture:!0,passive:!1})}}},[t]),r=K(function(){var o={passive:!1,capture:!0};e.current=Jt(window,[n],o)},[n]);$t(function(){return r(),function(){e.current()}},[r])}var lf={type:"IDLE"},f3=120,p3=.15;function h3(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===Im&&i.preventDefault(),e()}},{eventName:Qc,fn:e}]}function g3(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(o){var s=r();if(s.type!=="DRAGGING"){e();return}s.hasMoved=!0;var a=o.touches[0],l=a.clientX,u=a.clientY,d={x:l,y:u};o.preventDefault(),s.actions.move(d)}},{eventName:"touchend",fn:function(o){var s=r();if(s.type!=="DRAGGING"){e();return}o.preventDefault(),s.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(o){if(r().type!=="DRAGGING"){e();return}o.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(o){var s=r();s.type==="IDLE"&&$(!1);var a=o.touches[0];if(!!a){var l=a.force>=p3;if(!!l){var u=s.actions.shouldRespectForcePress();if(s.type==="PENDING"){u&&e();return}if(u){if(s.hasMoved){o.preventDefault();return}e();return}o.preventDefault()}}}},{eventName:Qc,fn:e}]}function m3(t){var e=A.exports.useRef(lf),n=A.exports.useRef(Dr),r=K(function(){return e.current},[]),i=K(function(p){e.current=p},[]),o=pe(function(){return{eventName:"touchstart",fn:function(p){if(!p.defaultPrevented){var h=t.findClosestDraggableId(p);if(!!h){var v=t.tryGetLock(h,a,{sourceEvent:p});if(!!v){var w=p.touches[0],m=w.clientX,g=w.clientY,y={x:m,y:g};n.current(),c(v,y)}}}}}},[t]),s=K(function(){var p={capture:!0,passive:!1};n.current=Jt(window,[o],p)},[o]),a=K(function(){var f=e.current;f.type!=="IDLE"&&(f.type==="PENDING"&&clearTimeout(f.longPressTimerId),i(lf),n.current(),s())},[s,i]),l=K(function(){var f=e.current;a(),f.type==="DRAGGING"&&f.actions.cancel({shouldBlockNextClick:!0}),f.type==="PENDING"&&f.actions.abort()},[a]),u=K(function(){var p={capture:!0,passive:!1},h={cancel:l,completed:a,getPhase:r},v=Jt(window,g3(h),p),w=Jt(window,h3(h),p);n.current=function(){v(),w()}},[l,r,a]),d=K(function(){var p=r();p.type!=="PENDING"&&$(!1);var h=p.actions.fluidLift(p.point);i({type:"DRAGGING",actions:h,hasMoved:!1})},[r,i]),c=K(function(p,h){r().type!=="IDLE"&&$(!1);var v=setTimeout(d,f3);i({type:"PENDING",point:h,actions:p,longPressTimerId:v}),u()},[u,r,i,d]);$t(function(){return s(),function(){n.current();var h=r();h.type==="PENDING"&&(clearTimeout(h.longPressTimerId),i(lf))}},[r,s,i]),$t(function(){var p=Jt(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return p},[])}var v3={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function hC(t,e){if(e==null)return!1;var n=Boolean(v3[e.tagName.toLowerCase()]);if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:hC(t,e.parentElement)}function y3(t,e){var n=e.target;return Kc(n)?hC(t,n):!1}var _3=function(t){return yn(t.getBoundingClientRect()).center};function w3(t){return t instanceof uC(t).Element}var b3=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=Hr(e,function(r){return r in Element.prototype});return n||t}();function gC(t,e){return t==null?null:t[b3](e)?t:gC(t.parentElement,e)}function S3(t,e){return t.closest?t.closest(e):gC(t,e)}function E3(t){return"["+wo.contextId+'="'+t+'"]'}function I3(t,e){var n=e.target;if(!w3(n))return null;var r=E3(t),i=S3(n,r);return!i||!Kc(i)?null:i}function C3(t,e){var n=I3(t,e);return n?n.getAttribute(wo.draggableId):null}function T3(t,e){var n="["+Kp.contextId+'="'+t+'"]',r=A1(document.querySelectorAll(n)),i=Hr(r,function(o){return o.getAttribute(Kp.id)===e});return!i||!Kc(i)?null:i}function x3(t){t.preventDefault()}function dl(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function mC(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var o=r.draggable.findById(i);return!(!o||!o.options.isEnabled||!oC(n.getState(),i))}function k3(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,o=t.draggableId,s=t.forceSensorStop,a=t.sourceEvent,l=mC({lockAPI:e,store:r,registry:i,draggableId:o});if(!l)return null;var u=i.draggable.getById(o),d=T3(n,u.descriptor.id);if(!d||a&&!u.options.canDragInteractiveElements&&y3(d,a))return null;var c=e.claim(s||Dr),f="PRE_DRAG";function p(){return u.options.shouldRespectForcePress}function h(){return e.isActive(c)}function v(T,k){dl({expected:T,phase:f,isLockActive:h,shouldWarn:!0})&&r.dispatch(k())}var w=v.bind(null,"DRAGGING");function m(T){function k(){e.release(),f="COMPLETED"}f!=="PRE_DRAG"&&(k(),f!=="PRE_DRAG"&&$(!1)),r.dispatch(b$(T.liftActionArgs)),f="DRAGGING";function P(U,z){if(z===void 0&&(z={shouldBlockNextClick:!1}),T.cleanup(),z.shouldBlockNextClick){var q=Jt(window,[{eventName:"click",fn:x3,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(q)}k(),r.dispatch(J1({reason:U}))}return Y({isActive:function(){return dl({expected:"DRAGGING",phase:f,isLockActive:h,shouldWarn:!1})},shouldRespectForcePress:p,drop:function(z){return P("DROP",z)},cancel:function(z){return P("CANCEL",z)}},T.actions)}function g(T){var k=ea(function(U){w(function(){return X1({client:U})})}),P=m({liftActionArgs:{id:o,clientSelection:T,movementMode:"FLUID"},cleanup:function(){return k.cancel()},actions:{move:k}});return Y({},P,{move:k})}function y(){var T={moveUp:function(){return w(P$)},moveRight:function(){return w(D$)},moveDown:function(){return w(A$)},moveLeft:function(){return w(O$)}};return m({liftActionArgs:{id:o,clientSelection:_3(d),movementMode:"SNAP"},cleanup:Dr,actions:T})}function _(){var T=dl({expected:"PRE_DRAG",phase:f,isLockActive:h,shouldWarn:!0});T&&e.release()}var S={isActive:function(){return dl({expected:"PRE_DRAG",phase:f,isLockActive:h,shouldWarn:!1})},shouldRespectForcePress:p,fluidLift:g,snapLift:y,abort:_};return S}var R3=[a3,d3,m3];function P3(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,o=t.enableDefaultSensors,s=[].concat(o?R3:[],i||[]),a=A.exports.useState(function(){return q4()})[0],l=K(function(g,y){g.isDragging&&!y.isDragging&&a.tryAbandon()},[a]);$t(function(){var g=n.getState(),y=n.subscribe(function(){var _=n.getState();l(g,_),g=_});return y},[a,n,l]),$t(function(){return a.tryAbandon},[a.tryAbandon]);for(var u=K(function(m){return mC({lockAPI:a,registry:r,store:n,draggableId:m})},[a,r,n]),d=K(function(m,g,y){return k3({lockAPI:a,registry:r,contextId:e,store:n,draggableId:m,forceSensorStop:g,sourceEvent:y&&y.sourceEvent?y.sourceEvent:null})},[e,a,r,n]),c=K(function(m){return C3(e,m)},[e]),f=K(function(m){var g=r.draggable.findById(m);return g?g.options:null},[r.draggable]),p=K(function(){!a.isClaimed()||(a.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(hm()))},[a,n]),h=K(a.isClaimed,[a]),v=pe(function(){return{canGetLock:u,tryGetLock:d,findClosestDraggableId:c,findOptionsForDraggable:f,tryReleaseLock:p,isLockClaimed:h}},[u,d,c,f,p,h]),w=0;w<s.length;w++)s[w](v)}var A3=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function es(t){return t.current||$(!1),t.current}function D3(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,o=t.dragHandleUsageInstructions,s=A.exports.useRef(null),a=cC(t),l=K(function(){return A3(a.current)},[a]),u=j4(e),d=G4({contextId:e,text:o}),c=M4(e,i),f=K(function(U){es(s).dispatch(U)},[]),p=pe(function(){return z0({publishWhileDragging:E$,updateDroppableScroll:C$,updateDroppableIsEnabled:T$,updateDroppableIsCombineEnabled:x$,collectionStarting:I$},f)},[f]),h=U4(),v=pe(function(){return p4(h,p)},[h,p]),w=pe(function(){return P4(Y({scrollWindow:h4,scrollDroppable:v.scrollDroppable},z0({move:X1},f)))},[v.scrollDroppable,f]),m=F4(e),g=pe(function(){return u4({announce:u,autoScroller:w,dimensionMarshal:v,focusMarshal:m,getResponders:l,styleMarshal:c})},[u,w,v,m,l,c]);s.current=g;var y=K(function(){var U=es(s),z=U.getState();z.phase!=="IDLE"&&U.dispatch(hm())},[]),_=K(function(){var U=es(s).getState();return U.isDragging||U.phase==="DROP_ANIMATING"},[]),S=pe(function(){return{isDragging:_,tryAbort:y}},[_,y]);n(S);var T=K(function(U){return oC(es(s).getState(),U)},[]),k=K(function(){return Qr(es(s).getState())},[]),P=pe(function(){return{marshal:v,focus:m,contextId:e,canLift:T,isMovementAllowed:k,dragHandleUsageInstructionsId:d,registry:h}},[e,v,d,m,T,k,h]);return P3({contextId:e,store:g,registry:h,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),A.exports.useEffect(function(){return y},[y]),x(Yc.Provider,{value:P,children:x(hB,{context:Sm,store:g,children:t.children})})}var O3=0;function N3(){return pe(function(){return""+O3++},[])}function M3(t){var e=N3(),n=t.dragHandleUsageInstructions||Nl.dragHandleUsageInstructions;return x(dU,{children:function(r){return x(D3,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd,children:t.children})}})}var vC=function(e){return function(n){return e===n}},L3=vC("scroll"),F3=vC("auto"),g_=function(e,n){return n(e.overflowX)||n(e.overflowY)},B3=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return g_(r,L3)||g_(r,F3)},U3=function(){return!1},$3=function t(e){return e==null?null:e===document.body?U3()?e:null:e===document.documentElement?null:B3(e)?e:t(e.parentElement)},Yp=function(t){return{x:t.scrollLeft,y:t.scrollTop}},z3=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},j3=function(t){var e=$3(t),n=z3(t);return{closestScrollable:e,isFixedOnPage:n}},W3=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,o=t.direction,s=t.client,a=t.page,l=t.closest,u=function(){if(!l)return null;var p=l.scrollSize,h=l.client,v=nC({scrollHeight:p.scrollHeight,scrollWidth:p.scrollWidth,height:h.paddingBox.height,width:h.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:h,scrollSize:p,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:v,diff:{value:Je,displacement:Je}}}}(),d=o==="vertical"?um:L1,c=yo({page:a,withPlaceholder:null,axis:d,frame:u}),f={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:d,isEnabled:n,client:s,page:a,frame:u,subject:c};return f},H3=function(e,n){var r=T1(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,o=r.paddingBox.left-n.scrollLeft,s=i+n.scrollHeight,a=o+n.scrollWidth,l={top:i,right:a,bottom:s,left:o},u=im(l,r.border),d=om({borderBox:u,margin:r.margin,border:r.border,padding:r.padding});return d},V3=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,o=t.direction,s=t.isDropDisabled,a=t.isCombineEnabled,l=t.shouldClipSubject,u=r.closestScrollable,d=H3(e,u),c=ku(d,i),f=function(){if(!u)return null;var h=T1(u),v={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:h,page:ku(h,i),scroll:Yp(u),scrollSize:v,shouldClipSubject:l}}(),p=W3({descriptor:n,isEnabled:!s,isCombineEnabled:a,isFixedOnPage:r.isFixedOnPage,direction:o,client:d,page:c,closest:f});return p},G3={passive:!1},q3={passive:!0},m_=function(t){return t.shouldPublishImmediately?G3:q3};function Nu(t){var e=A.exports.useContext(t);return e||$(!1),e}var fl=function(e){return e&&e.env.closestScrollable||null};function K3(t){var e=A.exports.useRef(null),n=Nu(Yc),r=Em("droppable"),i=n.registry,o=n.marshal,s=cC(t),a=pe(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=A.exports.useRef(a),u=pe(function(){return Xe(function(_,S){e.current||$(!1);var T={x:_,y:S};o.updateDroppableScroll(a.id,T)})},[a.id,o]),d=K(function(){var _=e.current;return!_||!_.env.closestScrollable?Je:Yp(_.env.closestScrollable)},[]),c=K(function(){var _=d();u(_.x,_.y)},[d,u]),f=pe(function(){return ea(c)},[c]),p=K(function(){var _=e.current,S=fl(_);_&&S||$(!1);var T=_.scrollOptions;if(T.shouldPublishImmediately){c();return}f()},[f,c]),h=K(function(_,S){e.current&&$(!1);var T=s.current,k=T.getDroppableRef();k||$(!1);var P=j3(k),U={ref:k,descriptor:a,env:P,scrollOptions:S};e.current=U;var z=V3({ref:k,descriptor:a,env:P,windowScroll:_,direction:T.direction,isDropDisabled:T.isDropDisabled,isCombineEnabled:T.isCombineEnabled,shouldClipSubject:!T.ignoreContainerClipping}),q=P.closestScrollable;return q&&(q.setAttribute(d_.contextId,n.contextId),q.addEventListener("scroll",p,m_(U.scrollOptions))),z},[n.contextId,a,p,s]),v=K(function(){var _=e.current,S=fl(_);return _&&S||$(!1),Yp(S)},[]),w=K(function(){var _=e.current;_||$(!1);var S=fl(_);e.current=null,S&&(f.cancel(),S.removeAttribute(d_.contextId),S.removeEventListener("scroll",p,m_(_.scrollOptions)))},[p,f]),m=K(function(_){var S=e.current;S||$(!1);var T=fl(S);T||$(!1),T.scrollTop+=_.y,T.scrollLeft+=_.x},[]),g=pe(function(){return{getDimensionAndWatchScroll:h,getScrollWhileDragging:v,dragStopped:w,scroll:m}},[w,h,v,m]),y=pe(function(){return{uniqueId:r,descriptor:a,callbacks:g}},[g,a,r]);$t(function(){return l.current=y.descriptor,i.droppable.register(y),function(){e.current&&w(),i.droppable.unregister(y)}},[g,a,w,y,o,i.droppable]),$t(function(){!e.current||o.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,o]),$t(function(){!e.current||o.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,o])}function uf(){}var v_={width:0,height:0,margin:vU},Y3=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?v_:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},Q3=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,o=Y3({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:o.width,height:o.height,marginTop:o.margin.top,marginRight:o.margin.right,marginBottom:o.margin.bottom,marginLeft:o.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?Is.placeholder:null}};function X3(t){var e=A.exports.useRef(null),n=K(function(){!e.current||(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,o=t.onClose,s=t.contextId,a=A.exports.useState(t.animate==="open"),l=a[0],u=a[1];A.exports.useEffect(function(){return l?r!=="open"?(n(),u(!1),uf):e.current?uf:(e.current=setTimeout(function(){e.current=null,u(!1)}),n):uf},[r,l,n]);var d=K(function(f){f.propertyName==="height"&&(i(),r==="close"&&o())},[r,o,i]),c=Q3({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return Le.createElement(t.placeholder.tagName,{style:c,"data-rbd-placeholder-context-id":s,onTransitionEnd:d,ref:t.innerRef})}var J3=Le.memo(X3),Cm=Le.createContext(null),Z3=function(t){u1(e,t);function e(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o))||this,r.state={isVisible:Boolean(r.props.on),data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,o){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:o.isVisible?{isVisible:!0,data:o.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:Boolean(i.on),data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(Le.PureComponent),y_={dragging:5e3,dropAnimating:4500},ez=function(e,n){return n?Is.drop(n.duration):e?Is.snap:Is.fluid},tz=function(e,n){return e?n?ia.opacity.drop:ia.opacity.combining:null},nz=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function rz(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,o=t.dropping,s=Boolean(i),a=nz(t),l=Boolean(o),u=l?Gp.drop(r,s):Gp.moveTo(r),d={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:ez(a,o),transform:u,opacity:tz(s,l),zIndex:l?y_.dropAnimating:y_.dragging,pointerEvents:"none"};return d}function iz(t){return{transform:Gp.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function oz(t){return t.type==="DRAGGING"?rz(t):iz(t)}function sz(t,e,n){n===void 0&&(n=Je);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),o=C1(i,r),s=ku(o,n),a={client:o,tagName:e.tagName.toLowerCase(),display:r.display},l={x:o.marginBox.width,y:o.marginBox.height},u={descriptor:t,placeholder:a,displaceBy:l,client:o,page:s};return u}function az(t){var e=Em("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,o=t.canDragInteractiveElements,s=t.shouldRespectForcePress,a=t.isEnabled,l=pe(function(){return{canDragInteractiveElements:o,shouldRespectForcePress:s,isEnabled:a}},[o,a,s]),u=K(function(p){var h=i();return h||$(!1),sz(n,h,p)},[n,i]),d=pe(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:u}},[n,u,l,e]),c=A.exports.useRef(d),f=A.exports.useRef(!0);$t(function(){return r.draggable.register(c.current),function(){return r.draggable.unregister(c.current)}},[r.draggable]),$t(function(){if(f.current){f.current=!1;return}var p=c.current;c.current=d,r.draggable.update(d,p)},[d,r.draggable])}function lz(t){t.preventDefault()}function uz(t){var e=A.exports.useRef(null),n=K(function(U){e.current=U},[]),r=K(function(){return e.current},[]),i=Nu(Yc),o=i.contextId,s=i.dragHandleUsageInstructionsId,a=i.registry,l=Nu(Cm),u=l.type,d=l.droppableId,c=pe(function(){return{id:t.draggableId,index:t.index,type:u,droppableId:d}},[t.draggableId,t.index,u,d]),f=t.children,p=t.draggableId,h=t.isEnabled,v=t.shouldRespectForcePress,w=t.canDragInteractiveElements,m=t.isClone,g=t.mapped,y=t.dropAnimationFinished;if(!m){var _=pe(function(){return{descriptor:c,registry:a,getDraggableRef:r,canDragInteractiveElements:w,shouldRespectForcePress:v,isEnabled:h}},[c,a,r,w,v,h]);az(_)}var S=pe(function(){return h?{tabIndex:0,role:"button","aria-describedby":s,"data-rbd-drag-handle-draggable-id":p,"data-rbd-drag-handle-context-id":o,draggable:!1,onDragStart:lz}:null},[o,s,p,h]),T=K(function(U){g.type==="DRAGGING"&&(!g.dropping||U.propertyName==="transform"&&y())},[y,g]),k=pe(function(){var U=oz(g),z=g.type==="DRAGGING"&&g.dropping?T:null,q={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":o,"data-rbd-draggable-id":p,style:U,onTransitionEnd:z},dragHandleProps:S};return q},[o,S,p,g,T,n]),P=pe(function(){return{draggableId:c.id,type:c.type,source:{index:c.index,droppableId:c.droppableId}}},[c.droppableId,c.id,c.index,c.type]);return f(k,g.snapshot,P)}var yC=function(t,e){return t===e},_C=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},cz=function(e){return e.combine?e.combine.draggableId:null},dz=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function fz(){var t=Xe(function(i,o){return{x:i,y:o}}),e=Xe(function(i,o,s,a,l){return{isDragging:!0,isClone:o,isDropAnimating:Boolean(l),dropAnimation:l,mode:i,draggingOver:s,combineWith:a,combineTargetFor:null}}),n=Xe(function(i,o,s,a,l,u,d){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:u,mode:o,offset:i,dimension:s,forceShouldAnimate:d,snapshot:e(o,a,l,u,null)}}}),r=function(o,s){if(o.isDragging){if(o.critical.draggable.id!==s.draggableId)return null;var a=o.current.client.offset,l=o.dimensions.draggables[s.draggableId],u=Ut(o.impact),d=dz(o.impact),c=o.forceShouldAnimate;return n(t(a.x,a.y),o.movementMode,l,s.isClone,u,d,c)}if(o.phase==="DROP_ANIMATING"){var f=o.completed;if(f.result.draggableId!==s.draggableId)return null;var p=s.isClone,h=o.dimensions.draggables[s.draggableId],v=f.result,w=v.mode,m=_C(v),g=cz(v),y=o.dropDuration,_={duration:y,curve:mm.drop,moveTo:o.newHomeClientOffset,opacity:g?ia.opacity.drop:null,scale:g?ia.scale.drop:null};return{mapped:{type:"DRAGGING",offset:o.newHomeClientOffset,dimension:h,dropping:_,draggingOver:m,combineWith:g,mode:w,forceShouldAnimate:null,snapshot:e(w,p,m,g,_)}}}return null};return r}function wC(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var pz={mapped:{type:"SECONDARY",offset:Je,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:wC(null)}};function hz(){var t=Xe(function(s,a){return{x:s,y:a}}),e=Xe(wC),n=Xe(function(s,a,l){return a===void 0&&(a=null),{mapped:{type:"SECONDARY",offset:s,combineTargetFor:a,shouldAnimateDisplacement:l,snapshot:e(a)}}}),r=function(a){return a?n(Je,a,!0):null},i=function(a,l,u,d){var c=u.displaced.visible[a],f=Boolean(d.inVirtualList&&d.effected[a]),p=Vc(u),h=p&&p.draggableId===a?l:null;if(!c){if(!f)return r(h);if(u.displaced.invisible[a])return null;var v=Do(d.displacedBy.point),w=t(v.x,v.y);return n(w,h,!0)}if(f)return r(h);var m=u.displacedBy.point,g=t(m.x,m.y);return n(g,h,c.shouldAnimate)},o=function(a,l){if(a.isDragging)return a.critical.draggable.id===l.draggableId?null:i(l.draggableId,a.critical.draggable.id,a.impact,a.afterCritical);if(a.phase==="DROP_ANIMATING"){var u=a.completed;return u.result.draggableId===l.draggableId?null:i(l.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return o}var gz=function(){var e=fz(),n=hz(),r=function(o,s){return e(o,s)||n(o,s)||pz};return r},mz={dropAnimationFinished:Z1},vz=E1(gz,mz,null,{context:Sm,pure:!0,areStatePropsEqual:yC})(uz);function bC(t){var e=Nu(Cm),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:x(vz,{...t})}function yz(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=Boolean(t.disableInteractiveElementBlocking),r=Boolean(t.shouldRespectForcePress);return x(bC,{...t,isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r})}function _z(t){var e=A.exports.useContext(Yc);e||$(!1);var n=e.contextId,r=e.isMovementAllowed,i=A.exports.useRef(null),o=A.exports.useRef(null),s=t.children,a=t.droppableId,l=t.type,u=t.mode,d=t.direction,c=t.ignoreContainerClipping,f=t.isDropDisabled,p=t.isCombineEnabled,h=t.snapshot,v=t.useClone,w=t.updateViewportMaxScroll,m=t.getContainerForClone,g=K(function(){return i.current},[]),y=K(function(q){i.current=q},[]);K(function(){return o.current},[]);var _=K(function(q){o.current=q},[]),S=K(function(){r()&&w({maxScroll:iC()})},[r,w]);K3({droppableId:a,type:l,mode:u,direction:d,isDropDisabled:f,isCombineEnabled:p,ignoreContainerClipping:c,getDroppableRef:g});var T=x(Z3,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder,children:function(q){var Z=q.onClose,oe=q.data,ne=q.animate;return x(J3,{placeholder:oe,onClose:Z,innerRef:_,animate:ne,contextId:n,onTransitionEnd:S})}}),k=pe(function(){return{innerRef:y,placeholder:T,droppableProps:{"data-rbd-droppable-id":a,"data-rbd-droppable-context-id":n}}},[n,a,T,y]),P=v?v.dragging.draggableId:null,U=pe(function(){return{droppableId:a,type:l,isUsingCloneFor:P}},[a,P,l]);function z(){if(!v)return null;var q=v.dragging,Z=v.render,oe=x(bC,{draggableId:q.draggableId,index:q.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0,children:function(ne,se){return Z(ne,se,q)}});return Vx.createPortal(oe,m())}return ue(Cm.Provider,{value:U,children:[s(k,h),z()]})}var cf=function(e,n){return e===n.droppable.type},__=function(e,n){return n.draggables[e.draggable.id]},wz=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=Y({},e,{shouldAnimatePlaceholder:!1}),r=Xe(function(s){return{draggableId:s.id,type:s.type,source:{index:s.index,droppableId:s.droppableId}}}),i=Xe(function(s,a,l,u,d,c){var f=d.descriptor.id,p=d.descriptor.droppableId===s;if(p){var h=c?{render:c,dragging:r(d.descriptor)}:null,v={isDraggingOver:l,draggingOverWith:l?f:null,draggingFromThisWith:f,isUsingPlaceholder:!0};return{placeholder:d.placeholder,shouldAnimatePlaceholder:!1,snapshot:v,useClone:h}}if(!a)return n;if(!u)return e;var w={isDraggingOver:l,draggingOverWith:f,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:d.placeholder,shouldAnimatePlaceholder:!0,snapshot:w,useClone:null}}),o=function(a,l){var u=l.droppableId,d=l.type,c=!l.isDropDisabled,f=l.renderClone;if(a.isDragging){var p=a.critical;if(!cf(d,p))return n;var h=__(p,a.dimensions),v=Ut(a.impact)===u;return i(u,c,v,v,h,f)}if(a.phase==="DROP_ANIMATING"){var w=a.completed;if(!cf(d,w.critical))return n;var m=__(w.critical,a.dimensions);return i(u,c,_C(w.result)===u,Ut(w.impact)===u,m,f)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){var g=a.completed;if(!cf(d,g.critical))return n;var y=Ut(g.impact)===u,_=Boolean(g.impact.at&&g.impact.at.type==="COMBINE"),S=g.critical.droppable.id===u;return y?_?e:n:S?e:n}return n};return o},bz={updateViewportMaxScroll:R$};function Sz(){return document.body||$(!1),document.body}var Ez={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:Sz},SC=E1(wz,bz,null,{context:Sm,pure:!0,areStatePropsEqual:yC})(_z);SC.defaultProps=Ez;const Iz=J.div`
  font-family: "Rubik";

  padding: 0.8em;
  background-color: #393e4b;
  border-radius: 5px;
  color: white;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`,Cz=J.div`
  font-family: "Rubik";

  padding: 0.8em;
  background-color: #393e4b;
  border-radius: 5px;
  color: white;
  max-width: 300px;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`,w_=J.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`,pl=J.div`
  display: flex;
  justify-content: space-between;
`,b_=J.div`
  height: 2em;
  background-color: #dd3b3b;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    margin-bottom: 0;
    padding: 0 0.5em;
  }
`,Tz=J.div`
  display: flex;
  margin-left: 10px;
`,S_=J.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`,df=J.div`
  height: 2em;
  background-color: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: "white";
    margin-bottom: "0";
  }
`;J.img`
  width: 32px;
  height: 32px;
  margin-left: -10px;
  border-radius: 100%;
`;const EC=t=>ue(En,{children:[t.edit==!0&&x(Cz,{className:"Lote",children:ue(w_,{children:[ue(pl,{children:[x("h3",{children:t.value}),t.categoria&&t.categoria.map((e,n)=>x(Le.Fragment,{children:e.nome===t.prioridade&&x(b_,{children:x("p",{children:"Prioridade"})})},An()))]}),x(pl,{children:x(S_,{children:t.categoria&&t.categoria.map((e,n)=>x(Le.Fragment,{children:n>=0&&x(df,{style:{borderRadius:"5px"},children:x("p",{style:{padding:"0 0.5em"},children:e.nome})})},An()))})})]})}),t.edit==null&&x(Iz,{className:"Lote",children:ue(w_,{children:[ue(pl,{children:[x("h3",{children:t.value}),t.categoria&&t.categoria.map((e,n)=>x(Le.Fragment,{children:e.nome===t.prioridade&&x(b_,{children:x("p",{children:"Prioridade"})})},An()))]}),ue(pl,{children:[x(Tz,{style:{display:"flex",marginLeft:"10px"},children:t.envolvidos&&t.envolvidos.map(e=>x(Le.Fragment,{children:x("img",{src:e.foto,width:32,height:32,style:{marginLeft:"-10px",borderRadius:"100%"}})},An()))}),x(S_,{children:t.categoria&&t.categoria.map((e,n)=>ue(Le.Fragment,{children:[n>=1&&x(df,{style:{borderRadius:"100%",width:"2em"},children:ue("p",{children:["+",n]})}),n==0&&x(df,{style:{borderRadius:"5px"},children:x("p",{style:{padding:"0 0.5em"},children:e.nome})})]},An()))})]})]})})]}),La=()=>{const[t,e]=A.exports.useState(iB),[n,r]=A.exports.useState(""),i=A.exports.useRef(null);function o(){i.current!==null&&i.current!==void 0&&r(i.current.value.toString())}return ue(En,{children:[x(En,{children:ue("div",{style:{margin:"0em 1em 1em 1em",display:"flex",gap:"0.5em"},children:[x(jp,{type:"text",className:"form-control",placeholder:"Prioridade","aria-label":"Username","aria-describedby":"basic-addon1",ref:i}),x(Ol,{onClick:o,children:"Enviar"})]})}),x(M3,{onDragEnd:a=>{if(!a.destination)return;const{source:l,destination:u}=a;if(l.droppableId!==u.droppableId){console.log("Funcionando!");const d=t.findIndex(m=>m.id===l.droppableId),c=t.findIndex(m=>m.id===u.droppableId),f=t[d],p=t[c],h=[...f.tasks],v=[...p.tasks],[w]=h.splice(l.index,1);v.splice(u.index,0,w),t[d].tasks=h,t[c].tasks=v,e(t)}},children:x(XF,{className:"board",children:t.map(a=>x(SC,{droppableId:a.id,children:l=>ue(JF,{...l.droppableProps,ref:l.innerRef,children:[ue("div",{style:{display:"flex",gap:"2em"},children:[x("div",{className:"kanbanSectionTititle",children:a.title}),x("p",{children:a.tasks?a.tasks.length:0})]}),ue(ZF,{children:[a.tasks.map((u,d)=>x(yz,{draggableId:u.id,index:d,children:(c,f)=>x("div",{ref:c.innerRef,...c.draggableProps,...c.dragHandleProps,style:{...c.draggableProps.style,opacity:f.isDragging?"0.5":"1"},children:x(EC,{task:u,value:u.title,categoria:u.categoria,envolvidos:u.envolvidos,prioridade:n})})},u.id)),l.placeholder]})]})},a.id))})})]})},xz=J.a`
  font-family: "Rubik";
  border-right: 5px solid transparent;
  border-radius: 1em 0em 0em 1em;
  font-size: 1.5rem;
  padding: 1rem 3em 1rem 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  z-index: 99999999;
  background-color: ${({open:t})=>t?"#0E0F13":"transparent"};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #0e0f13;
    border-right: 5px solid #8f5fe8;
  }
`,E_=t=>{const[e,n]=Le.useState(!0);return A.exports.useEffect(()=>{t.area==t.path?n(!0):n(!1)}),x(xz,{href:t.path,open:e,children:t.nome})},kz=J.nav`
  display: flex;
  padding-top: 2em;
  padding-left: 1em;
  flex-direction: column;
  justify-content: right;
  background: #191c24;
  text-align: left;
  z-index: 9999999;
  gap: 1em;
  transition: transform 0.3s ease-in-out;
`,Rz=J.div`
  z-index: 9999999;
  width: 40%;
  height: 100%;
  padding-left: 1em;
  padding-top: 1.1em;
  position: absolute;
  top: 0;
  left: 0;
  background: #191c24;
  transform: ${({open:t})=>t?"translateX(0)":"translateX(-100%)"};
  height: calc(100% - 1.1em);
  transition: transform 0.9s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 576px) {
    width: 70vw;
  }
`,Pz=J.img``,Az=J.button`
  background-color: transparent;
  border: none;
`,Dz=t=>{const e=A.exports.useRef(null);return A.exports.useEffect(()=>{const r=i=>{e.current&&!e.current.contains(i.target)&&t.onClose()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[e]),ue(Rz,{open:!0,ref:e,children:[x(Az,{onClick:r=>{r.stopPropagation(),t.onClose()},children:x(Pz,{src:"/Vector.svg"})}),ue(kz,{open:!0,id:"menu",children:[x(E_,{path:"/",nome:"Inicio",area:t.area}),x(E_,{path:"/Arquivamento",nome:"Arquivamento",area:t.area})]})]})},hl=J.img``,Oz=J.div`
  display: flex;
  gap: 0.5em;
`,Nz=J.nav`
  display: flex;
  padding: 1em;
  height: 2em;
  background: #191c24;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`,Mz=J.a`
  cursor: pointer;
  z-index: 0;

  &:focus {
    outline: none;
  }

  img {
    transition: 2s;
  }
`;J.div`
  width: 100%;
  height: 100%;
`;J.nav`
  display: flex;
  width: 40%;
  padding-left: 1em;
  padding-top: 4em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 99;
  flex-direction: column;
  justify-content: right;
  background: #191c24;
  display: ${({open:t})=>t?"flex":"none"};
  transform: ${({open:t})=>t?"translateX(0)":"translateX(-100%)"};
  text-align: left;
  position: absolute;
  gap: 1em;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  height: calc(100% - 4em);
  @media (max-width: 576px) {
    width: 70%;
  }
`;const I_=J.div`
  width: 74px;
`,Mo=t=>{const[e,n]=A.exports.useState(!1);return ue(Nz,{children:[ue(I_,{children:[x(Mz,{open:e,onClick:()=>{n(!e)},children:x(hl,{src:"/menu.svg"})}),e&&x(Dz,{area:t.area,onClose:()=>n(!1)})]}),x(I_,{children:x("a",{href:"/",children:x(hl,{src:"/Logo_Niko.svg"})})}),ue(Oz,{children:[x(hl,{src:"/Lupa.svg"}),x(hl,{src:"/Conta.svg"})]})]})};J.a`
  font-family: "Rubik";
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;const Lo=J.div`
  font-family: "Rubik";
  background-color: #0a090e;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  min-height: 550px;
`;J.div`
  font-family: "Rubik";
`;J.section`
  margin: 2em 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  grid-gap: 1.25em;
  min-height: 360px;
  min-height: 640px;
`;const Fo=J.footer`
  display: none;
  background: #191c24;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
`;J.span`
  color: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
`;J.button`
  padding: 0.5em;
  width: 40%;
  background-color: #f3802d;
  border-radius: 0.5em;
  border: 1px solid #f3802d;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #b1b1b1;
  }
`;const Lz=()=>x(En,{children:ue(Lo,{children:[x(Mo,{area:"/Arquivamento"}),x("p",{children:"Arquivamento"}),x(La,{}),x(Fo,{})]})});function mn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function bo(t){return!!t&&!!t[jt]}function Ei(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Hz}(t)||Array.isArray(t)||!!t[D_]||!!(!((e=t.constructor)===null||e===void 0)&&e[D_])||Tm(t)||xm(t))}function oa(t,e,n){n===void 0&&(n=!1),Bo(t)===0?(n?Object.keys:Dm)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Bo(t){var e=t[jt];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Tm(t)?2:xm(t)?3:0}function Qp(t,e){return Bo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Fz(t,e){return Bo(t)===2?t.get(e):t[e]}function IC(t,e,n){var r=Bo(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function Bz(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Tm(t){return jz&&t instanceof Map}function xm(t){return Wz&&t instanceof Set}function Xr(t){return t.o||t.t}function km(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Vz(t);delete e[jt];for(var n=Dm(e),r=0;r<n.length;r++){var i=n[r],o=e[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Rm(t,e){return e===void 0&&(e=!1),Pm(t)||bo(t)||!Ei(t)||(Bo(t)>1&&(t.set=t.add=t.clear=t.delete=Uz),Object.freeze(t),e&&oa(t,function(n,r){return Rm(r,!0)},!0)),t}function Uz(){mn(2)}function Pm(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Fn(t){var e=Gz[t];return e||mn(18,t),e}function C_(){return sa}function ff(t,e){e&&(Fn("Patches"),t.u=[],t.s=[],t.v=e)}function Mu(t){Xp(t),t.p.forEach($z),t.p=null}function Xp(t){t===sa&&(sa=t.l)}function T_(t){return sa={p:[],l:sa,h:t,m:!0,_:0}}function $z(t){var e=t[jt];e.i===0||e.i===1?e.j():e.g=!0}function pf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Fn("ES5").S(e,t,r),r?(n[jt].P&&(Mu(e),mn(4)),Ei(t)&&(t=Lu(e,t),e.l||Fu(e,t)),e.u&&Fn("Patches").M(n[jt].t,t,e.u,e.s)):t=Lu(e,n,[]),Mu(e),e.u&&e.v(e.u,e.s),t!==CC?t:void 0}function Lu(t,e,n){if(Pm(e))return e;var r=e[jt];if(!r)return oa(e,function(a,l){return x_(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Fu(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=km(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),oa(o,function(a,l){return x_(t,r,i,a,l,n,s)}),Fu(t,i,!1),n&&t.u&&Fn("Patches").N(r,n,t.u,t.s)}return r.o}function x_(t,e,n,r,i,o,s){if(bo(i)){var a=Lu(t,i,o&&e&&e.i!==3&&!Qp(e.R,r)?o.concat(r):void 0);if(IC(n,r,a),!bo(a))return;t.m=!1}else s&&n.add(i);if(Ei(i)&&!Pm(i)){if(!t.h.D&&t._<1)return;Lu(t,i),e&&e.A.l||Fu(t,i)}}function Fu(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Rm(e,n)}function hf(t,e){var n=t[jt];return(n?Xr(n):t)[e]}function k_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Jp(t){t.P||(t.P=!0,t.l&&Jp(t.l))}function gf(t){t.o||(t.o=km(t.t))}function Zp(t,e,n){var r=Tm(e)?Fn("MapSet").F(e,n):xm(e)?Fn("MapSet").T(e,n):t.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:C_(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,u=eh;s&&(l=[a],u=as);var d=Proxy.revocable(l,u),c=d.revoke,f=d.proxy;return a.k=f,a.j=c,f}(e,n):Fn("ES5").J(e,n);return(n?n.A:C_()).p.push(r),r}function zz(t){return bo(t)||mn(22,t),function e(n){if(!Ei(n))return n;var r,i=n[jt],o=Bo(n);if(i){if(!i.P&&(i.i<4||!Fn("ES5").K(i)))return i.t;i.I=!0,r=R_(n,o),i.I=!1}else r=R_(n,o);return oa(r,function(s,a){i&&Fz(i.t,s)===a||IC(r,s,e(a))}),o===3?new Set(r):r}(t)}function R_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return km(t)}var P_,sa,Am=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",jz=typeof Map<"u",Wz=typeof Set<"u",A_=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",CC=Am?Symbol.for("immer-nothing"):((P_={})["immer-nothing"]=!0,P_),D_=Am?Symbol.for("immer-draftable"):"__$immer_draftable",jt=Am?Symbol.for("immer-state"):"__$immer_state",Hz=""+Object.prototype.constructor,Dm=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Vz=Object.getOwnPropertyDescriptors||function(t){var e={};return Dm(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Gz={},eh={get:function(t,e){if(e===jt)return t;var n=Xr(t);if(!Qp(n,e))return function(i,o,s){var a,l=k_(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Ei(r)?r:r===hf(t.t,e)?(gf(t),t.o[e]=Zp(t.A.h,r,t)):r},has:function(t,e){return e in Xr(t)},ownKeys:function(t){return Reflect.ownKeys(Xr(t))},set:function(t,e,n){var r=k_(Xr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=hf(Xr(t),e),o=i==null?void 0:i[jt];if(o&&o.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(Bz(n,i)&&(n!==void 0||Qp(t.t,e)))return!0;gf(t),Jp(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return hf(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,gf(t),Jp(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Xr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){mn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){mn(12)}},as={};oa(eh,function(t,e){as[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),as.deleteProperty=function(t,e){return as.set.call(this,t,e,void 0)},as.set=function(t,e,n){return eh.set.call(this,t[0],e,n,t[0])};var qz=function(){function t(n){var r=this;this.O=A_,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(v){var w=this;v===void 0&&(v=a);for(var m=arguments.length,g=Array(m>1?m-1:0),y=1;y<m;y++)g[y-1]=arguments[y];return l.produce(v,function(_){var S;return(S=o).call.apply(S,[w,_].concat(g))})}}var u;if(typeof o!="function"&&mn(6),s!==void 0&&typeof s!="function"&&mn(7),Ei(i)){var d=T_(r),c=Zp(r,i,void 0),f=!0;try{u=o(c),f=!1}finally{f?Mu(d):Xp(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return ff(d,s),pf(v,d)},function(v){throw Mu(d),v}):(ff(d,s),pf(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===CC&&(u=void 0),r.D&&Rm(u,!0),s){var p=[],h=[];Fn("Patches").M(i,u,p,h),s(p,h)}return u}mn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,c=Array(d>1?d-1:0),f=1;f<d;f++)c[f-1]=arguments[f];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(c))})};var s,a,l=r.produce(i,o,function(u,d){s=u,a=d});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Ei(n)||mn(8),bo(n)&&(n=zz(n));var r=T_(this),i=Zp(this,n,void 0);return i[jt].C=!0,Xp(r),i},e.finishDraft=function(n,r){var i=n&&n[jt],o=i.A;return ff(o,r),pf(void 0,o)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!A_&&mn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=Fn("Patches").$;return bo(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},t}(),Wt=new qz,Kz=Wt.produce;Wt.produceWithPatches.bind(Wt);Wt.setAutoFreeze.bind(Wt);Wt.setUseProxies.bind(Wt);Wt.applyPatches.bind(Wt);Wt.createDraft.bind(Wt);Wt.finishDraft.bind(Wt);const Yz=Kz,Qz=()=>{const[t,e]=A.exports.useState([{id:An(),nome:"Xxx"}]),[n,r]=A.exports.useState(""),[i,o]=A.exports.useState({id:An(),title:"Lote X",categoria:[{id:An(),nome:"Categoria"}],envolvidos:null});function s(a,l,u,d){const c=n1();console.log(a,l,u,d),console.log("Lote Criado!"),DF(PF(c,"Lotes/"+a),{title:l,categoria:u,envolvidos:d})}return x(En,{children:ue(Lo,{children:[x(Mo,{area:"/Recebidos"}),ue("div",{style:{margin:"2em"},children:[x(EC,{task:i,value:i.title,categoria:i.categoria,envolvidos:i.envolvidos,prioridade:"Maisa",edit:!0}),x("h1",{style:{color:"white",margin:"0.5em 0"},children:"Recebidos"}),x("h3",{style:{color:"white",marginBottom:"0.5em"},children:"Adicionar Lote"}),ue("div",{children:[x("div",{children:x(Ol,{onClick:()=>{e(a=>[...a,{id:An(),nome:""}]),o(a=>({...a,categoria:t}))},children:"Adicionar Categoria"})}),t.map((a,l)=>ue("div",{style:{display:"flex",flexDirection:"row",gap:"0.5em",margin:"0.5em 0"},children:[x(jp,{type:"text",className:"form-control",placeholder:"Categoria","aria-label":"Username","aria-describedby":"basic-addon1",onChange:u=>{const d=u.target.value;e(c=>{const f=Yz(c,p=>{p[l].nome=d});return o(p=>({...p,categoria:f})),f}),i.categoria=t}}),x(Ol,{onClick:()=>{e(u=>u.filter(d=>d.id!==a.id)),i.categoria=t},children:"X"})]},a.id))]}),x(jp,{type:"text",className:"form-control",placeholder:"Title","aria-label":"Username","aria-describedby":"basic-addon1",onChange:a=>{r(a.target.value),i.title=a.target.value},style:{marginBottom:"0.5em"}}),x("br",{}),x(Ol,{onClick:()=>{s(An(),n,t,null)},children:"Adicionar Lote"}),x(Fo,{})]})]})})},Xz=()=>x(En,{children:ue(Lo,{children:[x(Mo,{area:"/Preparo"}),x("p",{children:"Preparo"}),x(La,{}),x(Fo,{})]})}),Jz=()=>x(En,{children:ue(Lo,{children:[x(Mo,{area:"/Catalogacao"}),x("p",{children:"Cataloga\xE7\xE3o"}),x(La,{}),x(Fo,{})]})}),Zz=()=>x(En,{children:ue(Lo,{children:[x(Mo,{area:"/Digitalizacao"}),x("p",{children:"Digitaliza\xE7\xE3o"}),x(La,{}),x(Fo,{})]})}),ej=()=>x(En,{children:ue(Lo,{children:[x(Mo,{area:"/Upload"}),x("p",{children:"Upload"}),x(La,{}),x(Fo,{})]})});WF();const tj=A.exports.lazy(()=>Kx(()=>import("./index.0678280c.js"),[])),nj=()=>x(A.exports.Suspense,{fallback:x(N0,{}),children:ue(Qk,{children:[x(kn,{path:"/splash",element:x(N0,{})}),x(kn,{path:"/",element:x(tj,{})}),x(kn,{path:"/login",element:x(OO,{})}),x(kn,{path:"/Arquivamento",element:x(Lz,{})}),x(kn,{path:"/Recebidos",element:x(Qz,{})}),x(kn,{path:"/Preparo",element:x(Xz,{})}),x(kn,{path:"/Catalogacao",element:x(Jz,{})}),x(kn,{path:"/Digitalizacao",element:x(Zz,{})}),x(kn,{path:"/Upload",element:x(ej,{})})]})});zb(document.getElementById("root")).render(x(Xk,{children:x(nj,{})}));export{Mo as M,x as a,ue as j,J as s};
