var BS=Object.create;var Ad=Object.defineProperty;var FS=Object.getOwnPropertyDescriptor;var zS=Object.getOwnPropertyNames;var kS=Object.getPrototypeOf,HS=Object.prototype.hasOwnProperty;var gs=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(n){throw a=[n],n}};var Tn=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}},qg=(t,e)=>{for(var a in e)Ad(t,a,{get:e[a],enumerable:!0})},VS=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of zS(e))!HS.call(t,i)&&i!==a&&Ad(t,i,{get:()=>e[i],enumerable:!(n=FS(e,i))||n.enumerable});return t};var me=(t,e,a)=>(a=t!=null?BS(kS(t)):{},VS(e||!t||!t.__esModule?Ad(a,"default",{value:t,enumerable:!0}):a,t));var nx=Tn(X=>{"use strict";var Ed=Symbol.for("react.transitional.element"),GS=Symbol.for("react.portal"),qS=Symbol.for("react.fragment"),XS=Symbol.for("react.strict_mode"),WS=Symbol.for("react.profiler"),YS=Symbol.for("react.consumer"),ZS=Symbol.for("react.context"),jS=Symbol.for("react.forward_ref"),KS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),jg=Symbol.for("react.lazy"),QS=Symbol.for("react.activity"),$S=Symbol.for("react.view_transition"),Xg=Symbol.iterator;function e1(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jg=Object.assign,Qg={};function vs(t,e,a){this.props=t,this.context=e,this.refs=Qg,this.updater=a||Kg}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=vs.prototype;function Id(t,e,a){this.props=t,this.context=e,this.refs=Qg,this.updater=a||Kg}var Dd=Id.prototype=new $g;Dd.constructor=Id;Jg(Dd,vs.prototype);Dd.isPureReactComponent=!0;var Wg=Array.isArray;function Ld(){}var Le={H:null,A:null,T:null,S:null},ex=Object.prototype.hasOwnProperty;function Nd(t,e,a){var n=a.ref;return{$$typeof:Ed,type:t,key:e,ref:n!==void 0?n:null,props:a}}function t1(t,e){return Nd(t.type,e,t.props)}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ed}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Yg=/\/+/g;function Td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function n1(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Ld,Ld):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function xs(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Ed:case GS:r=!0;break;case jg:return r=t._init,xs(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+Td(t,0):n,Wg(i)?(a="",r!=null&&(a=r.replace(Yg,"$&/")+"/"),xs(i,e,a,"",function(u){return u})):i!=null&&(Pd(i)&&(i=t1(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(Wg(t))for(var l=0;l<t.length;l++)n=t[l],s=o+Td(n,l),r+=xs(n,e,a,s,i);else if(l=e1(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+Td(n,l++),r+=xs(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return xs(n1(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Nl(t,e,a){if(t==null)return t;var n=[],i=0;return xs(t,n,"","",function(s){return e.call(a,s,i++)}),n}function i1(t){if(t._status===-1){var e=t._result,a=e();a.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n,a.status===void 0&&(a.status="fulfilled",a.value=n))},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n,a.status===void 0&&(a.status="rejected",a.reason=n))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Zg=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function tx(t){var e=Le.T,a={};a.types=e!==null?e.types:null,Le.T=a;try{var n=t(),i=Le.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Ld,Zg)}catch(s){Zg(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Le.T=e}}function ax(t){var e=Le.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else tx(ax.bind(null,t))}var s1={map:Nl,forEach:function(t,e,a){Nl(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Nl(t,function(){e++}),e},toArray:function(t){return Nl(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Activity=QS;X.Children=s1;X.Component=vs;X.Fragment=qS;X.Profiler=WS;X.PureComponent=Id;X.StrictMode=XS;X.Suspense=KS;X.ViewTransition=$S;X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Le;X.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Le.H.useMemoCache(t)}};X.addTransitionType=ax;X.cache=function(t){return function(){return t.apply(null,arguments)}};X.cacheSignal=function(){return null};X.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=Jg({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!ex.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return Nd(t.type,i,n)};X.createContext=function(t){return t={$$typeof:ZS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:YS,_context:t},t};X.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)ex.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return Nd(t,s,i)};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:jS,render:t}};X.isValidElement=Pd;X.lazy=function(t){return{$$typeof:jg,_payload:{_status:-1,_result:t},_init:i1}};X.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};X.startTransition=tx;X.unstable_useCacheRefresh=function(){return Le.H.useCacheRefresh()};X.use=function(t){return Le.H.use(t)};X.useActionState=function(t,e,a){return Le.H.useActionState(t,e,a)};X.useCallback=function(t,e){return Le.H.useCallback(t,e)};X.useContext=function(t){return Le.H.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t,e){return Le.H.useDeferredValue(t,e)};X.useEffect=function(t,e){return Le.H.useEffect(t,e)};X.useEffectEvent=function(t){return Le.H.useEffectEvent(t)};X.useId=function(){return Le.H.useId()};X.useImperativeHandle=function(t,e,a){return Le.H.useImperativeHandle(t,e,a)};X.useInsertionEffect=function(t,e){return Le.H.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return Le.H.useLayoutEffect(t,e)};X.useMemo=function(t,e){return Le.H.useMemo(t,e)};X.useOptimistic=function(t,e){return Le.H.useOptimistic(t,e)};X.useReducer=function(t,e,a){return Le.H.useReducer(t,e,a)};X.useRef=function(t){return Le.H.useRef(t)};X.useState=function(t){return Le.H.useState(t)};X.useSyncExternalStore=function(t,e,a){return Le.H.useSyncExternalStore(t,e,a)};X.useTransition=function(){return Le.H.useTransition()};X.version="19.3.0"});var le=Tn((kE,ix)=>{"use strict";ix.exports=nx()});var px=Tn(Pe=>{"use strict";function Bd(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<Pl(i,e))t[n]=e,t[a]=i,a=n;else break e}}function Ea(t){return t.length===0?null:t[0]}function Rl(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>Pl(o,a))l<i&&0>Pl(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>Pl(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function Pl(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Pe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(sx=performance,Pe.unstable_now=function(){return sx.now()}):(Ud=Date,rx=Ud.now(),Pe.unstable_now=function(){return Ud.now()-rx});var sx,Ud,rx,Ka=[],Ln=[],r1=1,aa=null,ft=3,Fd=!1,Vr=!1,Gr=!1,zd=!1,ux=typeof setTimeout=="function"?setTimeout:null,cx=typeof clearTimeout=="function"?clearTimeout:null,ox=typeof setImmediate<"u"?setImmediate:null;function Ul(t){for(var e=Ea(Ln);e!==null;){if(e.callback===null)Rl(Ln);else if(e.startTime<=t)Rl(Ln),e.sortIndex=e.expirationTime,Bd(Ka,e);else break;e=Ea(Ln)}}function kd(t){if(Gr=!1,Ul(t),!Vr)if(Ea(Ka)!==null)Vr=!0,bs||(bs=!0,ys());else{var e=Ea(Ln);e!==null&&Hd(kd,e.startTime-t)}}var bs=!1,qr=-1,dx=5,fx=-1;function hx(){return zd?!0:!(Pe.unstable_now()-fx<dx)}function Rd(){if(zd=!1,bs){var t=Pe.unstable_now();fx=t;var e=!0;try{e:{Vr=!1,Gr&&(Gr=!1,cx(qr),qr=-1),Fd=!0;var a=ft;try{t:{for(Ul(t),aa=Ea(Ka);aa!==null&&!(aa.expirationTime>t&&hx());){var n=aa.callback;if(typeof n=="function"){aa.callback=null,ft=aa.priorityLevel;var i=n(aa.expirationTime<=t);if(t=Pe.unstable_now(),typeof i=="function"){aa.callback=i,Ul(t),e=!0;break t}aa===Ea(Ka)&&Rl(Ka),Ul(t)}else Rl(Ka);aa=Ea(Ka)}if(aa!==null)e=!0;else{var s=Ea(Ln);s!==null&&Hd(kd,s.startTime-t),e=!1}}break e}finally{aa=null,ft=a,Fd=!1}e=void 0}}finally{e?ys():bs=!1}}}var ys;typeof ox=="function"?ys=function(){ox(Rd)}:typeof MessageChannel<"u"?(Od=new MessageChannel,lx=Od.port2,Od.port1.onmessage=Rd,ys=function(){lx.postMessage(null)}):ys=function(){ux(Rd,0)};var Od,lx;function Hd(t,e){qr=ux(function(){t(Pe.unstable_now())},e)}Pe.unstable_IdlePriority=5;Pe.unstable_ImmediatePriority=1;Pe.unstable_LowPriority=4;Pe.unstable_NormalPriority=3;Pe.unstable_Profiling=null;Pe.unstable_UserBlockingPriority=2;Pe.unstable_cancelCallback=function(t){t.callback=null};Pe.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):dx=0<t?Math.floor(1e3/t):5};Pe.unstable_getCurrentPriorityLevel=function(){return ft};Pe.unstable_next=function(t){switch(ft){case 1:case 2:case 3:var e=3;break;default:e=ft}var a=ft;ft=e;try{return t()}finally{ft=a}};Pe.unstable_requestPaint=function(){zd=!0};Pe.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ft;ft=t;try{return e()}finally{ft=a}};Pe.unstable_scheduleCallback=function(t,e,a){var n=Pe.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:r1++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,Bd(Ln,t),Ea(Ka)===null&&t===Ea(Ln)&&(Gr?(cx(qr),qr=-1):Gr=!0,Hd(kd,a-n))):(t.sortIndex=i,Bd(Ka,t),Vr||Fd||(Vr=!0,bs||(bs=!0,ys()))),t};Pe.unstable_shouldYield=hx;Pe.unstable_wrapCallback=function(t){var e=ft;return function(){var a=ft;ft=e;try{return t.apply(this,arguments)}finally{ft=a}}}});var gx=Tn((VE,mx)=>{"use strict";mx.exports=px()});var yx=Tn(ht=>{"use strict";var o1=le();function vx(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function En(){}var _t={d:{f:En,r:function(){throw Error(vx(522))},D:En,C:En,L:En,m:En,X:En,S:En,M:En},p:0,findDOMNode:null},l1=Symbol.for("react.portal"),u1=Symbol.for("react.recoverable"),xx=Symbol.for("react.optimistic_key");function c1(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l1,key:n==null?null:n===xx?xx:""+n,children:t,containerInfo:e,implementation:a}}var Xr=o1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ol(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_t;ht.browser=function(t){return{$$typeof:u1,_reason:t}};ht.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(vx(299));return c1(t,e,null,a)};ht.flushSync=function(t){var e=Xr.T,a=_t.p;try{if(Xr.T=null,_t.p=2,t)return t()}finally{Xr.T=e,_t.p=a,_t.d.f()}};ht.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,_t.d.C(t,e))};ht.prefetchDNS=function(t){typeof t=="string"&&_t.d.D(t)};ht.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=Ol(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?_t.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&_t.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};ht.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Ol(e.as,e.crossOrigin);_t.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&_t.d.M(t)};ht.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=Ol(a,e.crossOrigin);_t.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};ht.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Ol(e.as,e.crossOrigin);_t.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else _t.d.m(t)};ht.requestFormReset=function(t){_t.d.r(t)};ht.unstable_batchedUpdates=function(t,e){return t(e)};ht.useFormState=function(t,e,a){return Xr.H.useFormState(t,e,a)};ht.useFormStatus=function(){return Xr.H.useHostTransitionStatus()};ht.version="19.3.0"});var Sx=Tn((qE,_x)=>{"use strict";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(t){console.error(t)}}bx(),_x.exports=yx()});var l_=Tn(xc=>{"use strict";var je=gx(),ov=le(),d1=Sx();function I(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function lv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Po(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mx(t){if(Po(t)!==t)throw Error(I(188))}function f1(t){var e=t.alternate;if(!e){if(e=Po(t),e===null)throw Error(I(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return Mx(i),t;if(s===n)return Mx(i),e;s=s.sibling}throw Error(I(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(I(189))}}if(a.alternate!==n)throw Error(I(190))}if(a.tag!==3)throw Error(I(188));return a.stateNode.current===a?t:e}function dv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=dv(t),e!==null)return e;t=t.sibling}return null}function Ut(t,e,a,n,i,s){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,n,i,s)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&Ut(t.child,e,a,n,i,s))return!0;t=t.sibling}return!1}function Hi(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function wx(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function fv(t){var e=[null,null],a=Hi(t);return a===null||hv(e,t,a.child,{foundSelf:!1}),e}function hv(t,e,a,n){for(;a!==null;){if(a===e)n.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(n.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&hv(t,e,a.child,n))return!0;a=a.sibling}return!1}function Ze(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(I(559))}}var Ts=null,bf=null;function h1(t,e,a){return t===a?!0:t===e?(Ts=t,!0):!1}function p1(t,e,a){return t===a?(bf=t,!1):t===e?(bf!==null&&(Ts=t),!0):!1}function Cx(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function _f(t,e,a){for(var n=0,i=t;i;i=a(i))n++;i=0;for(var s=e;s;s=a(s))i++;for(;0<n-i;)t=a(t),n--;for(;0<i-n;)e=a(e),i--;for(;n--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var Te=Object.assign,m1=Symbol.for("react.element"),Bl=Symbol.for("react.transitional.element"),Qr=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),mv=Symbol.for("react.consumer"),Ra=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Cf=Symbol.for("react.activity"),g1=Symbol.for("react.legacy_hidden"),x1=Symbol.for("react.memo_cache_sentinel"),Af=Symbol.for("react.view_transition"),v1=Symbol.for("react.recoverable"),Ax=Symbol.iterator;function Wr(t){return t===null||typeof t!="object"?null:(t=Ax&&t[Ax]||t["@@iterator"],typeof t=="function"?t:null)}var y1=Symbol.for("react.client.reference");function Tf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===y1?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Sf:return"Profiler";case pv:return"StrictMode";case Mf:return"Suspense";case wf:return"SuspenseList";case Cf:return"Activity";case Af:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Qr:return"Portal";case Ra:return t.displayName||"Context";case mv:return(t._context.displayName||"Context")+".Consumer";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}var $r=Array.isArray,q=ov.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=d1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Li={pending:!1,data:null,method:null,action:null},Lf=[],Es=-1;function Va(t){return{current:t}}function st(t){0>Es||(t.current=Lf[Es],Lf[Es]=null,Es--)}function De(t,e){Es++,Lf[Es]=t.current,t.current=e}var za=Va(null),xo=Va(null),Vn=Va(null),Mu=Va(null);function wu(t,e){switch(De(Vn,e),De(xo,t),De(za,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?k0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=k0(e),t=Bb(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(za),De(za,t)}function js(){st(za),st(xo),st(Vn)}function Ef(t){var e=t.memoizedState;e!==null&&(sr._currentValue=e.memoizedState,De(Mu,t)),e=za.current;var a=Bb(e,t.type);e!==a&&(De(xo,t),De(za,a))}function Cu(t){xo.current===t&&(st(za),st(xo)),Mu.current===t&&(st(Mu),sr._currentValue=Li)}var Vd,Tx;function Dn(t){if(Vd===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Vd=e&&e[1]||"",Tx=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vd+t+Tx}var Gd=!1;function qd(t,e){if(!t||Gd)return"";Gd=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(g){var d=g}Reflect.construct(t,[],f)}else{try{f.call()}catch(g){d=g}f=!1;try{var h=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),f=!0,new t}finally{f&&(h!==void 0?Object.defineProperty(t.prototype,"props",h):delete t.prototype.props)}}}else{try{throw Error()}catch(g){d=g}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var c=`
`+l[n].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=n&&0<=i);break}}}finally{Gd=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Dn(a):""}function b1(t,e){switch(t.tag){case 26:case 27:case 5:return Dn(t.type);case 16:return Dn("Lazy");case 13:return t.child!==e&&e!==null?Dn("Suspense Fallback"):Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 15:return qd(t.type,!1);case 11:return qd(t.type.render,!1);case 1:return qd(t.type,!0);case 31:return Dn("Activity");case 30:return Dn("ViewTransition");default:return""}}function Lx(t){try{var e="",a=null;do e+=b1(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var If=Object.prototype.hasOwnProperty,Ph=je.unstable_scheduleCallback,Xd=je.unstable_cancelCallback,_1=je.unstable_shouldYield,S1=je.unstable_requestPaint,Gt=je.unstable_now,M1=je.unstable_getCurrentPriorityLevel,gv=je.unstable_ImmediatePriority,xv=je.unstable_UserBlockingPriority,Au=je.unstable_NormalPriority,w1=je.unstable_LowPriority,vv=je.unstable_IdlePriority,C1=je.log,A1=je.unstable_setDisableYieldValue,Uo=null,qt=null;function On(t){if(typeof C1=="function"&&A1(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Uo,t)}catch{}}var Xt=Math.clz32?Math.clz32:E1,T1=Math.log,L1=Math.LN2;function E1(t){return t>>>=0,t===0?32:31-(T1(t)/L1|0)|0}var Fl=256,zl=262144,kl=4194304;function Mi(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qu(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=Mi(n):(r&=o,r!==0?i=Mi(r):a||(a=o&~t,a!==0&&(i=Mi(a))))):(o=n&~s,o!==0?i=Mi(o):r!==0?i=Mi(r):a||(a=n&~t,a!==0&&(i=Mi(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function Ro(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function yv(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Xt(a),i=1<<n;e|=t[n],a&=~i}return e}function I1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bv(){var t=kl;return kl<<=1,(kl&62914560)===0&&(kl=4194304),t}function Wd(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Oo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function D1(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var c=31-Xt(a),f=1<<c;o[c]=0,l[c]=-1;var d=u[c];if(d!==null)for(u[c]=null,c=0;c<d.length;c++){var h=d[c];h!==null&&(h.lane&=-536870913)}a&=~f}n!==0&&_v(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function _v(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Xt(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function Sv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Xt(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function Mv(t,e){var a=e&-e;return a=(a&42)!==0?1:Uh(a),(a&(t.suspendedLanes|e))!==0?0:a}function Uh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rh(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wv(){var t=de.p;return t!==0?t:(t=window.event,t===void 0?32:s_(t.type))}function Ex(t,e){var a=de.p;try{return de.p=t,e()}finally{de.p=a}}var cn=Math.random().toString(36).slice(2),nt="__reactFiber$"+cn,Rt="__reactProps$"+cn,lr="__reactContainer$"+cn,Ix="__reactEvents$"+cn,N1="__reactListeners$"+cn,P1="__reactHandles$"+cn,Dx="__reactResources$"+cn,Bo="__reactMarker$"+cn,Tu="__reactLoad$"+cn;function $u(t){delete t[nt],delete t[Rt],delete t[N1],delete t[P1]}function Ai(t){var e;if(e=t[nt])return e;for(var a=t.parentNode;a;){if(e=a[lr]||a[nt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Z0(t);t!==null;){if(a=t[nt])return a;t=Z0(t)}return e}t=a,a=t.parentNode}return null}function ur(t){if(t=t[nt]||t[lr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function eo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(I(33))}function zs(t){var e=t[Dx];return e||(e=t[Dx]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $e(t){t[Bo]=!0}function Cv(t){t[Tu]=void 0}var Av=new Set,Tv={};function Vi(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(Tv[t]=e,t=0;t<e.length;t++)Av.add(e[t])}var U1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nx={},Px={};function R1(t){return If.call(Px,t)?!0:If.call(Nx,t)?!1:U1.test(t)?Px[t]=!0:(Nx[t]=!0,!1)}var ue=!1;function Ux(){var t=ue;return ue=!1,t}function iu(t,e,a){if(R1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function Hl(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function Ja(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,n)}}function zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O1(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Df(t){if(!t._valueTracker){var e=Lv(t)?"checked":"value";t._valueTracker=O1(t,e,""+t[e])}}function Ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Lv(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}var B1=/[\n"\\]/g;function oa(t){return t.replace(B1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Nf(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+zt(e)):t.value!==""+zt(e)&&(t.value=""+zt(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Yd(t,zt(t.value)):Yd(t,zt(e)):a!=null?Yd(t,zt(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+zt(o):t.removeAttribute("name")}function Iv(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Df(t);return}a=a!=null?""+zt(a):"",e=e!=null?""+zt(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Df(t)}function Yd(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function ks(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+zt(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dv(t,e,a){if(e!=null&&(e=""+zt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+zt(a):""}function Nv(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(I(92));if($r(n)){if(1<n.length)throw Error(I(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=zt(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),Df(t)}function Js(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var F1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rx(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||F1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Pv(t,e,a){if(e!=null&&typeof e!="object")throw Error(I(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="",ue=!0);for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&(Rx(t,i,n),ue=!0)}else for(var s in e)e.hasOwnProperty(s)&&Rx(t,s,e[s])}function Oh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function su(t){return k1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oa(){}var Pf=null;function Bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Is=null,Hs=null;function Ox(t){var e=ur(t);if(e&&(t=e.stateNode)){var a=t[Rt]||null;e:switch(t=e.stateNode,e.type){case"input":if(Nf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oa(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Rt]||null;if(!i)throw Error(I(90));Nf(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Ev(n)}break e;case"textarea":Dv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&ks(t,!!a.multiple,e,!1)}}}var Zd=!1;function Uv(t,e,a){if(Zd)return t(e,a);Zd=!0;try{var n=t(e);return n}finally{if(Zd=!1,(Is!==null||Hs!==null)&&(hc(),Is&&(e=Is,t=Hs,Hs=Is=null,Ox(e),t)))for(e=0;e<t.length;e++)Ox(t[e])}}function vo(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Rt]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(I(231,e,typeof a));return a}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(nn)try{_s={},Object.defineProperty(_s,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Uf=!1}var _s,Bn=null,Fh=null,ru=null;function Rv(){if(ru)return ru;var t,e=Fh,a=e.length,n,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return ru=i.slice(t,1<n?1-n:void 0)}function ou(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function Bx(){return!1}function Ct(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:Bx,this.isPropagationStopped=Bx,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Ct(ni),Fo=Te({},ni,{view:0,detail:0}),H1=Ct(Fo),jd,Kd,Yr,tc=Te({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(jd=t.screenX-Yr.screenX,Kd=t.screenY-Yr.screenY):Kd=jd=0,Yr=t),jd)},movementY:function(t){return"movementY"in t?t.movementY:Kd}}),Fx=Ct(tc),V1=Te({},tc,{dataTransfer:0}),G1=Ct(V1),q1=Te({},Fo,{relatedTarget:0}),Jd=Ct(q1),X1=Te({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),W1=Ct(X1),Y1=Te({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z1=Ct(Y1),j1=Te({},ni,{data:0}),zx=Ct(j1),K1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q1[t])?!!e[t]:!1}function zh(){return $1}var eM=Te({},Fo,{key:function(t){if(t.key){var e=K1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ou(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?ou(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ou(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tM=Ct(eM),aM=Te({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kx=Ct(aM),nM=Te({},ni,{submitter:0}),iM=Ct(nM),sM=Te({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),rM=Ct(sM),oM=Te({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),lM=Ct(oM),uM=Te({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cM=Ct(uM),dM=Te({},ni,{newState:0,oldState:0,source:0}),fM=Ct(dM),hM=[9,13,27,32],kh=nn&&"CompositionEvent"in window,no=null;nn&&"documentMode"in document&&(no=document.documentMode);var pM=nn&&"TextEvent"in window&&!no,Ov=nn&&(!kh||no&&8<no&&11>=no),Hx=" ",Vx=!1;function Bv(t,e){switch(t){case"keyup":return hM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function mM(t,e){switch(t){case"compositionend":return Fv(e);case"keypress":return e.which!==32?null:(Vx=!0,Hx);case"textInput":return t=e.data,t===Hx&&Vx?null:t;default:return null}}function gM(t,e){if(Ds)return t==="compositionend"||!kh&&Bv(t,e)?(t=Rv(),ru=Fh=Bn=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ov&&e.locale!=="ko"?null:e.data;default:return null}}var xM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xM[t.type]:e==="textarea"}function zv(t,e,a,n){Is?Hs?Hs.push(n):Hs=[n]:Is=n,e=ju(e,"onChange"),0<e.length&&(a=new ec("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var io=null,yo=null;function vM(t){Ub(t,0)}function ac(t){var e=eo(t);if(Ev(e))return t}function qx(t,e){if(t==="change")return e}var kv=!1;nn&&(nn?(ql="oninput"in document,ql||(Qd=document.createElement("div"),Qd.setAttribute("oninput","return;"),ql=typeof Qd.oninput=="function"),Gl=ql):Gl=!1,kv=Gl&&(!document.documentMode||9<document.documentMode));var Gl,ql,Qd;function Xx(){io&&(io.detachEvent("onpropertychange",Hv),yo=io=null)}function Hv(t){if(t.propertyName==="value"&&ac(yo)){var e=[];zv(e,yo,t,Bh(t)),Uv(vM,e)}}function yM(t,e,a){t==="focusin"?(Xx(),io=e,yo=a,io.attachEvent("onpropertychange",Hv)):t==="focusout"&&Xx()}function bM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(yo)}function _M(t,e){if(t==="click")return ac(e)}function SM(t,e){if(t==="input"||t==="change")return ac(e)}function MM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:MM;function bo(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!If.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function Rf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yx(t,e){var a=Wx(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wx(a)}}function Vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Rf(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Rf(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var wM=nn&&"documentMode"in document&&11>=document.documentMode,Ns=null,Of=null,so=null,Bf=!1;function Zx(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bf||Ns==null||Ns!==Rf(n)||(n=Ns,"selectionStart"in n&&Hh(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),so&&bo(so,n)||(so=n,n=ju(Of,"onSelect"),0<n.length&&(e=new ec("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Ns)))}function _i(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ps={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},$d={},qv={};nn&&(qv=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Gi(t){if($d[t])return $d[t];if(!Ps[t])return t;var e=Ps[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in qv)return $d[t]=e[a];return t}var Xv=Gi("animationend"),Wv=Gi("animationiteration"),Yv=Gi("animationstart"),CM=Gi("transitionrun"),AM=Gi("transitionstart"),TM=Gi("transitioncancel"),Zv=Gi("transitionend"),jv=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function _a(t,e){jv.set(t,e),Vi(e,[t])}var LM=0;function sn(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=ba.identifierPrefix;var a=LM++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function jx(t){if(t==null||typeof t=="string")return t;var e=null,a=Zs;if(a!==null)for(var n=0;n<a.length;n++){var i=t[a[n]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??t.default}function dn(t,e){return t=jx(t),e=jx(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Lu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ia=[],Us=0,Vh=0;function nc(){for(var t=Us,e=Vh=Us=0;e<t;){var a=ia[e];ia[e++]=null;var n=ia[e];ia[e++]=null;var i=ia[e];ia[e++]=null;var s=ia[e];if(ia[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&Kv(a,i,s)}}function ic(t,e,a,n){ia[Us++]=t,ia[Us++]=e,ia[Us++]=a,ia[Us++]=n,Vh|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Gh(t,e,a,n){return ic(t,e,a,n),Eu(t)}function qi(t,e){return ic(t,null,null,e),Eu(t)}function Kv(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-Xt(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function Eu(t){if(50<go)throw go=0,xu=null,Error(I(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rs={};function EM(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,a,n){return new EM(t,e,a,n)}function qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tn(t,e){var a=t.alternate;return a===null?(a=Nt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jv(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function lu(t,e,a,n,i,s){var r=0;if(n=t,typeof n=="function")qh(n)&&(r=1);else if(typeof n=="string")r=tC(t,a,za.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(n){case Cf:return t=Nt(31,a,e,i),t.elementType=Cf,t.lanes=s,t;case Ls:return Ei(a.children,i,s,e);case pv:r=8,i|=24;break;case Sf:return t=Nt(12,a,e,i|2),t.elementType=Sf,t.lanes=s,t;case Mf:return t=Nt(13,a,e,i),t.elementType=Mf,t.lanes=s,t;case wf:return t=Nt(19,a,e,i),t.elementType=wf,t.lanes=s,t;case g1:case Af:return t=i|32,t=Nt(30,a,e,t),t.elementType=Af,t.lanes=s,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ra:r=10;break e;case mv:r=9;break e;case Dh:r=11;break e;case Nh:r=14;break e;case Pn:r=16,n=null;break e}r=29,a=Error(I(130,t===null?"null":typeof t,"")),n=null}return e=Nt(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function Ei(t,e,a,n){return t=Nt(7,t,n,e),t.lanes=a,t}function ef(t,e,a){return t=Nt(6,t,null,e),t.lanes=a,t}function Qv(t){var e=Nt(18,null,null,0);return e.stateNode=t,e}function tf(t,e,a){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Kx=new WeakMap;function la(t,e){if(typeof t=="object"&&t!==null){var a=Kx.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Lx(e)},Kx.set(t,e),e)}return{value:t,source:e,stack:Lx(e)}}var Os=[],Bs=0,Iu=null,_o=0,sa=[],ra=0,Qn=null,Ba=1,Fa="";function $a(t,e){Os[Bs++]=_o,Os[Bs++]=Iu,Iu=t,_o=e}function $v(t,e,a){sa[ra++]=Ba,sa[ra++]=Fa,sa[ra++]=Qn,Qn=t;var n=Ba;t=Fa;var i=32-Xt(n)-1;n&=~(1<<i),a+=1;var s=32-Xt(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Ba=1<<32-Xt(e)+i|a<<i|n,Fa=s+t}else Ba=1<<s|a<<i|n,Fa=t}function sc(t){t.return!==null&&($a(t,1),$v(t,1,0))}function Xh(t){for(;t===Iu;)Iu=Os[--Bs],Os[Bs]=null,_o=Os[--Bs],Os[Bs]=null;for(;t===Qn;)Qn=sa[--ra],sa[ra]=null,Fa=sa[--ra],sa[ra]=null,Ba=sa[--ra],sa[ra]=null}function ey(t,e){sa[ra++]=Ba,sa[ra++]=Fa,sa[ra++]=Qn,Ba=e.id,Fa=e.overflow,Qn=t}var et=null,Ie=null,Q=!1,Gn=null,ua=!1,zf=Error(I(519));function $n(t){var e=Error(I(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(la(e,t)),zf}function Jx(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[nt]=t,e[Rt]=n,a){case"dialog":ee("cancel",e),ee("close",e);break;case"iframe":case"object":case"embed":ee("load",e);break;case"video":case"audio":for(a=0;a<Ao.length;a++)ee(Ao[a],e);break;case"source":ee("error",e);break;case"img":case"image":case"link":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"input":ee("invalid",e),Iv(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ee("invalid",e);break;case"textarea":ee("invalid",e),Nv(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||Ob(e.textContent,a)?(n.popover!=null&&(ee("beforetoggle",e),ee("toggle",e)),n.onScroll!=null&&ee("scroll",e),n.onScrollEnd!=null&&ee("scrollend",e),n.onClick!=null&&(e.onclick=Oa),e=!0):e=!1,e||$n(t,!0)}function Du(t){for(et=t.return;et;)switch(et.tag){case 5:case 31:case 13:ua=!1;return;case 27:case 3:ua=!0;return;default:et=et.return}}function Ss(t){if(t!==et)return!1;if(!Q)return Du(t),Q=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mh(t.type,t.memoizedProps)),a=!a),a&&Ie&&$n(t),Du(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));Ie=Y0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));Ie=Y0(t)}else e===27?(e=Ie,ii(t.type)?(t=Th,Th=null,Ie=t):Ie=e):Ie=et?ca(t.stateNode.nextSibling):null;return!0}function Pi(){Ie=et=null,Q=!1}function af(){var t=Gn;return t!==null&&(It===null?It=t:It.push.apply(It,t),Gn=null),t}function So(t){Gn===null?Gn=[t]:Gn.push(t)}var kf=Va(null),Xi=null,en=null;function Fn(t,e,a){De(kf,e._currentValue),e._currentValue=a}function an(t){t._currentValue=kf.current,st(kf)}function uu(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Hf(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),uu(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(I(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),uu(r,a,t),r=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),uu(i.return,a,t),r=i.child,r=r!==null?r.sibling:null):r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Ui(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(I(387));if(r=r.memoizedProps,r!==null){var o=i.type;Yt(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Mu.current){if(r=i.alternate,r===null)throw Error(I(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(sr):t=[sr])}i=i.return}return t!==null&&Hf(e,t,a,n),e.flags|=262144,t!==null}function Nu(t){for(t=t.firstContext;t!==null;){if(!Yt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ri(t){Xi=t,en=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function it(t){return ty(Xi,t)}function Xl(t,e){return Xi===null&&Ri(t),ty(t,e)}function ty(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},en===null){if(t===null)throw Error(I(308));en=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else en=en.next=e;return a}var IM=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},DM=je.unstable_scheduleCallback,NM=je.unstable_NormalPriority,qe={$$typeof:Ra,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wh(){return{controller:new IM,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&DM(NM,function(){t.controller.abort()})}function Qx(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var n=e[t];a.indexOf(n)===-1&&a.push(n)}}}var to=null;function PM(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var ro=null,Vf=0,Oi=0,Vs=null;function UM(t,e){if(ro===null){var a=ro=[];Vf=0,Oi=bp(),Vs={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Vf++,e.then($x,$x),e}function $x(){if(--Vf===0&&(to=null,ro!==null)){Vs!==null&&(Vs.status="fulfilled");var t=ro;ro=null,Oi=0,Vs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function RM(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var e0=q.S;q.S=function(t,e){if(yb=Gt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&UM(t,e),to!==null)for(var a=ar;a!==null;)Qx(a,to),a=a.next;if(a=t.types,a!==null){for(var n=ar;n!==null;)Qx(n,a),n=n.next;if(Oi!==0){n=to,n===null&&(n=to=[]);for(var i=0;i<a.length;i++){var s=a[i];n.indexOf(s)===-1&&n.push(s)}}}e0!==null&&e0(t,e)};var Ii=Va(null);function Yh(){var t=Ii.current;return t!==null?t:Ae.pooledCache}function cu(t,e){e===null?De(Ii,Ii.current):De(Ii,e.pool)}function ay(){var t=Yh();return t===null?null:{parent:qe._currentValue,pool:t}}var cr=Error(I(460)),Zh=Error(I(474)),rc=Error(I(542)),Pu={then:function(){}};function t0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ny(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Oa,Oa),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,n0(t),t===void 0&&!("reason"in e)?Error(I(600)):t;default:if(typeof e.status=="string")e.then(Oa,Oa);else{if(t=Ae,t!==null&&100<t.shellSuspendCounter)throw Error(I(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,n0(t),t}throw Di=e,cr}}function wi(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Di=a,cr):a}}var Di=null;function a0(){if(Di===null)throw Error(I(459));var t=Di;return Di=null,t}function n0(t){if(t===cr||t===rc)throw Error(I(483))}var Gs=null,Mo=0;function Wl(t){var e=Mo;return Mo+=1,Gs===null&&(Gs=[]),ny(Gs,t,e)}function In(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yl(t,e){throw e.$$typeof===m1?Error(I(525)):(t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function iy(t){function e(m,x){if(t){var y=m.deletions;y===null?(m.deletions=[x],m.flags|=16):y.push(x)}}function a(m,x){if(!t)return null;for(;x!==null;)e(m,x),x=x.sibling;return null}function n(m){for(var x=new Map;m!==null;)m.key===null?x.set(m.index,m):x.set(m.key,m),m=m.sibling;return x}function i(m,x){return m=tn(m,x),m.index=0,m.sibling=null,m}function s(m,x,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<x?(m.flags|=2,x):y):(m.flags|=134217730,x)):(m.flags|=1048576,x)}function r(m){return t&&m.alternate===null&&(m.flags|=134217730),m}function o(m,x,y,b){return x===null||x.tag!==6?(x=ef(y,m.mode,b),x.return=m,x):(x=i(x,y),x.return=m,x)}function l(m,x,y,b){var C=y.type;return C===Ls?(m=c(m,x,y.props.children,b,y.key),In(m,y),m):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pn&&wi(C)===x.type)?(x=i(x,y.props),In(x,y),x.return=m,x):(x=lu(y.type,y.key,y.props,null,m.mode,b),In(x,y),x.return=m,x)}function u(m,x,y,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=tf(y,m.mode,b),x.return=m,x):(x=i(x,y.children||[]),x.return=m,x)}function c(m,x,y,b,C){return x===null||x.tag!==7?(x=Ei(y,m.mode,b,C),x.return=m,x):(x=i(x,y),x.return=m,x)}function f(m,x,y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ef(""+x,m.mode,y),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bl:return y=lu(x.type,x.key,x.props,null,m.mode,y),In(y,x),y.return=m,y;case Qr:return x=tf(x,m.mode,y),x.return=m,x;case Pn:return x=wi(x),f(m,x,y)}if($r(x)||Wr(x))return x=Ei(x,m.mode,y,null),x.return=m,x;if(typeof x.then=="function")return f(m,Wl(x),y);if(x.$$typeof===Ra)return f(m,Xl(m,x),y);Yl(m,x)}return null}function d(m,x,y,b){var C=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return C!==null?null:o(m,x,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:return y.key===C?l(m,x,y,b):null;case Qr:return y.key===C?u(m,x,y,b):null;case Pn:return y=wi(y),d(m,x,y,b)}if($r(y)||Wr(y))return C!==null?null:c(m,x,y,b,null);if(typeof y.then=="function")return d(m,x,Wl(y),b);if(y.$$typeof===Ra)return d(m,x,Xl(m,y),b);Yl(m,y)}return null}function h(m,x,y,b,C){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(y)||null,o(x,m,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bl:return m=m.get(b.key===null?y:b.key)||null,l(x,m,b,C);case Qr:return m=m.get(b.key===null?y:b.key)||null,u(x,m,b,C);case Pn:return b=wi(b),h(m,x,y,b,C)}if($r(b)||Wr(b))return m=m.get(y)||null,c(x,m,b,C,null);if(typeof b.then=="function")return h(m,x,y,Wl(b),C);if(b.$$typeof===Ra)return h(m,x,y,Xl(x,b),C);Yl(x,b)}return null}function g(m,x,y,b){for(var C=null,T=null,L=x,A=x=0,P=null;L!==null&&A<y.length;A++){L.index>A?(P=L,L=null):P=L.sibling;var N=d(m,L,y[A],b);if(N===null){L===null&&(L=P);break}t&&L&&N.alternate===null&&e(m,L),x=s(N,x,A),T===null?C=N:T.sibling=N,T=N,L=P}if(A===y.length)return a(m,L),Q&&$a(m,A),C;if(L===null){for(;A<y.length;A++)L=f(m,y[A],b),L!==null&&(x=s(L,x,A),T===null?C=L:T.sibling=L,T=L);return Q&&$a(m,A),C}for(L=n(L);A<y.length;A++)P=h(L,m,A,y[A],b),P!==null&&(t&&(N=P.alternate,N!==null&&L.delete(N.key===null?A:N.key)),x=s(P,x,A),T===null?C=P:T.sibling=P,T=P);return t&&L.forEach(function(D){return e(m,D)}),Q&&$a(m,A),C}function v(m,x,y,b){if(y==null)throw Error(I(151));for(var C=null,T=null,L=x,A=x=0,P=null,N=y.next();L!==null&&!N.done;A++,N=y.next()){L.index>A?(P=L,L=null):P=L.sibling;var D=d(m,L,N.value,b);if(D===null){L===null&&(L=P);break}t&&L&&D.alternate===null&&e(m,L),x=s(D,x,A),T===null?C=D:T.sibling=D,T=D,L=P}if(N.done)return a(m,L),Q&&$a(m,A),C;if(L===null){for(;!N.done;A++,N=y.next())N=f(m,N.value,b),N!==null&&(x=s(N,x,A),T===null?C=N:T.sibling=N,T=N);return Q&&$a(m,A),C}for(L=n(L);!N.done;A++,N=y.next())N=h(L,m,A,N.value,b),N!==null&&(t&&(P=N.alternate,P!==null&&L.delete(P.key===null?A:P.key)),x=s(N,x,A),T===null?C=N:T.sibling=N,T=N);return t&&L.forEach(function(H){return e(m,H)}),Q&&$a(m,A),C}function _(m,x,y,b){if(typeof y=="object"&&y!==null&&y.type===Ls&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:e:{for(var C=y.key;x!==null;){if(x.key===C){if(C=y.type,C===Ls){if(x.tag===7){a(m,x.sibling),b=i(x,y.props.children),In(b,y),b.return=m,m=b;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pn&&wi(C)===x.type){a(m,x.sibling),b=i(x,y.props),In(b,y),b.return=m,m=b;break e}a(m,x);break}else e(m,x);x=x.sibling}y.type===Ls?(b=Ei(y.props.children,m.mode,b,y.key),In(b,y),b.return=m,m=b):(b=lu(y.type,y.key,y.props,null,m.mode,b),In(b,y),b.return=m,m=b)}return r(m);case Qr:e:{for(C=y.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){a(m,x.sibling),b=i(x,y.children||[]),b.return=m,m=b;break e}else{a(m,x);break}else e(m,x);x=x.sibling}b=tf(y,m.mode,b),b.return=m,m=b}return r(m);case Pn:return y=wi(y),_(m,x,y,b)}if($r(y))return g(m,x,y,b);if(Wr(y)){if(C=Wr(y),typeof C!="function")throw Error(I(150));return y=C.call(y),v(m,x,y,b)}if(typeof y.then=="function")return _(m,x,Wl(y),b);if(y.$$typeof===Ra)return _(m,x,Xl(m,y),b);Yl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,x!==null&&x.tag===6?(a(m,x.sibling),b=i(x,y),b.return=m,m=b):(a(m,x),b=ef(y,m.mode,b),b.return=m,m=b),r(m)):a(m,x)}return function(m,x,y,b){try{Mo=0;var C=_(m,x,y,b);return Gs=null,C}catch(L){if(L===cr||L===rc)throw L;var T=Nt(29,L,null,m.mode);return T.lanes=b,T.return=m,T}}}var Bi=iy(!0),sy=iy(!1),Un=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Eu(t),Kv(t,null,a),e}return ic(t,n,e,a),Eu(t)}function oo(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Sv(t,a)}}function nf(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var qf=!1;function lo(){if(qf){var t=Vs;if(t!==null)throw t}}function uo(t,e,a,n){qf=!1;var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==r&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;r=0,c=u=l=null,o=s;do{var d=o.lane&-536870913,h=d!==o.lane;if(h?(ie&d)===d:(n&d)===d){d!==0&&d===Oi&&(qf=!0),c!==null&&(c=c.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var g=t,v=o;d=e;var _=a;switch(v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(_,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(_,f,d):g,d==null)break e;f=Te({},f,d);break e;case 2:Un=!0}}d=o.callback,d!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[d]:h.push(d))}else h={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,r|=d;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,s===null&&(i.shared.lanes=0),ai|=r,t.lanes=r,t.memoizedState=f}}function ry(t,e){if(typeof t!="function")throw Error(I(191,t));t.call(e)}function oy(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ry(a[t],e)}var ei=Va(null),Uu=Va(0);function i0(t,e){t=un,De(Uu,t),De(ei,e),un=t|e.baseLanes}function Xf(){De(Uu,un),De(ei,ei.current)}function Kh(){un=Uu.current,st(ei),st(Uu)}var lt=Va(null),pt=null;function Wn(t){var e=t.alternate;De(rt,rt.current&1),De(lt,t),pt===null&&(e===null||ei.current!==null||e.memoizedState!==null)&&(pt=t)}function Wf(t){De(rt,rt.current),De(lt,t),pt===null&&(pt=t)}function ly(t){t.tag===22?(De(rt,rt.current),De(lt,t),pt===null&&(pt=t)):Yn()}function Yn(){De(rt,rt.current),De(lt,lt.current)}function kt(t){st(lt),pt===t&&(pt=null),st(rt)}var rt=Va(0);function wo(t,e){De(lt,lt.current),De(rt,e)}function Jh(t){st(rt),st(lt),pt===t&&(pt=null)}function Ru(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ah(a)||wp(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rn=0,j=null,Me=null,Ge=null,Ou=!1,qs=!1,Fi=!1,Bu=0,Co=0,Xs=null,OM=0;function Fe(){throw Error(I(321))}function Qh(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Yt(t[a],e[a]))return!1;return!0}function $h(t,e,a,n,i,s){return rn=s,j=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=t===null||t.memoizedState===null?zy:ky,Fi=!1,s=a(n,i),Fi=!1,qs&&(s=cy(e,a,n,i)),uy(t),s}function uy(t){q.H=Fu;var e=Me!==null&&Me.next!==null;if(rn=0,Ge=Me=j=null,Ou=!1,Co=0,Xs=null,e)throw Error(I(300));t===null||Xe||(t=t.dependencies,t!==null&&Nu(t)&&(Xe=!0))}function cy(t,e,a,n){j=t;var i=0;do{if(qs&&(Xs=null),Co=0,qs=!1,25<=i)throw Error(I(301));if(i+=1,Ge=Me=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}q.H=qM,s=e(a,n)}while(qs);return s}function BM(){var t=q.H,e=t.useState()[0];return e=typeof e.then=="function"?ko(e):e,t=t.useState()[0],(Me!==null?Me.memoizedState:null)!==t&&(j.flags|=1024),e}function ep(){var t=Bu!==0;return Bu=0,t}function tp(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function ap(t){if(Ou){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ou=!1}rn=0,Ge=Me=j=null,qs=!1,Co=Bu=0,Xs=null}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?j.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function He(){if(Me===null){var t=j.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Ge===null?j.memoizedState:Ge.next;if(e!==null)Ge=e,Me=t;else{if(t===null)throw j.alternate===null?Error(I(467)):Error(I(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ge===null?j.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(t){var e=Co;return Co+=1,Xs===null&&(Xs=[]),t=ny(Xs,t,e),e=j,(Ge===null?e.memoizedState:Ge.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?zy:ky),t}function lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ko(t);if(t.$$typeof===v1)return;if(t.$$typeof===Ra)return it(t)}throw Error(I(438,String(t)))}function np(t){var e=null,a=j.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=j.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=oc(),j.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=x1;return e.index++,a}function on(t,e){return typeof e=="function"?e(t):e}function du(t){var e=He();return ip(e,Me,t)}function ip(t,e,a){var n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,c=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(ie&f)===f:(rn&f)===f){var d=u.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Oi&&(c=!0);else if((rn&d)===d){u=u.next,d===Oi&&(c=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,j.lanes|=d,ai|=d;f=u.action,Fi&&a(s,f),s=u.hasEagerState?u.eagerState:a(s,f)}else d={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,j.lanes|=f,ai|=f;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!Yt(s,t.memoizedState)&&(Xe=!0,c&&(a=Vs,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function sf(t){var e=He(),a=e.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);Yt(s,e.memoizedState)||(Xe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function dy(t,e,a){var n=j,i=He(),s=Q;if(s){if(a===void 0)throw Error(I(407));a=a()}else a=e();var r=!Yt((Me||i).memoizedState,a);if(r&&(i.memoizedState=a,Xe=!0),i=i.queue,sp(py.bind(null,n,i,t),[t]),t=i.getSnapshot!==e||r||Ge!==null&&(Ge.memoizedState.tag&1)!==0,Qs(t?9:8,{destroy:void 0},hy.bind(null,n,i,a,e),null),t){if(n.flags|=2048,Ae===null)throw Error(I(349));s||(rn&127)!==0||fy(n,e,a)}return a}function fy(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=j.updateQueue,e===null?(e=oc(),j.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function hy(t,e,a,n){e.value=a,e.getSnapshot=n,my(e)&&gy(t)}function py(t,e,a){return a(function(){my(e)&&gy(t)})}function my(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Yt(t,a)}catch{return!0}}function gy(t){var e=qi(t,2);e!==null&&Pt(e,t,2)}function Yf(t){var e=wt();if(typeof t=="function"){var a=t;if(t=a(),Fi){On(!0);try{a()}finally{On(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:t},e}function xy(t,e,a,n){return t.baseState=a,ip(t,Me,typeof n=="function"?n:on)}function FM(t,e,a,n,i){if(cc(t))throw Error(I(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};q.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,vy(e,s)):(s.next=a.next,e.pending=a.next=s)}}function vy(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=q.T,r={};r.types=s!==null?s.types:null,q.T=r;try{var o=a(i,n),l=q.S;l!==null&&l(r,o),s0(t,e,o)}catch(u){Zf(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),q.T=s}}else try{s=a(i,n),s0(t,e,s)}catch(u){Zf(t,e,u)}}function s0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){r0(t,e,n)},function(n){return Zf(t,e,n)}):r0(t,e,a)}function r0(t,e,a){e.status="fulfilled",e.value=a,yy(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,vy(t,a)))}function Zf(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,yy(e),e=e.next;while(e!==n)}t.action=null}function yy(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function by(t,e){return e}function o0(t,e){if(Q){var a=Ae.formState;if(a!==null){e:{var n=j;if(Q){if(Ie){t:{for(var i=Ie,s=ua;i.nodeType!==8;){if(!s){i=null;break t}if(i=ca(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ie=ca(i.nextSibling),n=i.data==="F!";break e}}$n(n)}n=!1}n&&(e=a[0])}}return a=wt(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:by,lastRenderedState:e},a.queue=n,a=Oy.bind(null,j,n),n.dispatch=a,n=Yf(!1),s=up.bind(null,j,!1,n.queue),n=wt(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=FM.bind(null,j,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function l0(t){var e=He();return _y(e,Me,t)}function _y(t,e,a){if(e=ip(t,e,by)[0],t=du(on)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=ko(e)}catch(r){throw r===cr?rc:r}else n=e;e=He();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(j.flags|=2048,Qs(9,{destroy:void 0},zM.bind(null,i,a),null)),[n,s,t]}function zM(t,e){t.action=e}function u0(t){var e=He(),a=Me;if(a!==null)return _y(e,a,t);He(),e=e.memoizedState,a=He();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Qs(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=j.updateQueue,e===null&&(e=oc(),j.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Sy(){return He().memoizedState}function fu(t,e,a,n){var i=wt();j.flags|=t,i.memoizedState=Qs(1|e,{destroy:void 0},a,n===void 0?null:n)}function uc(t,e,a,n){var i=He();n=n===void 0?null:n;var s=i.memoizedState.inst;Me!==null&&n!==null&&Qh(n,Me.memoizedState.deps)?i.memoizedState=Qs(e,s,a,n):(j.flags|=t,i.memoizedState=Qs(1|e,s,a,n))}function c0(t,e){fu(8390656,8,t,e)}function sp(t,e){uc(2048,8,t,e)}function kM(t){j.flags|=4;var e=j.updateQueue;if(e===null)e=oc(),j.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function My(t){var e=He().memoizedState;return kM({ref:e,nextImpl:t}),function(){if((ce&2)!==0)throw Error(I(440));return e.impl.apply(void 0,arguments)}}function wy(t,e){return uc(4,2,t,e)}function Cy(t,e){return uc(4,4,t,e)}function Ay(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ty(t,e,a){a=a!=null?a.concat([t]):null,uc(4,4,Ay.bind(null,e,t),a)}function rp(){}function Ly(t,e){var a=He();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Qh(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Ey(t,e){var a=He();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Qh(e,n[1]))return n[0];if(n=t(),Fi){On(!0);try{t()}finally{On(!1)}}return a.memoizedState=[n,e],n}function op(t,e,a){return a===void 0||(rn&1073741824)!==0&&(ie&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=_b(),j.lanes|=t,ai|=t,a)}function Iy(t,e,a,n){return Yt(a,e)?a:ei.current!==null?(t=op(t,a,n),Yt(t,e)||(Xe=!0),t):(rn&106)===0||(rn&1073741824)!==0&&(ie&261930)===0?(Xe=!0,t.memoizedState=a):(t=_b(),j.lanes|=t,ai|=t,e)}function Dy(t,e,a,n,i){var s=de.p;de.p=s!==0&&8>s?s:8;var r=q.T,o={};o.types=r!==null?r.types:null,q.T=o,up(t,!1,e,a);try{var l=i(),u=q.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=RM(l,n);co(t,e,c,Wt(t))}else co(t,e,n,Wt(t))}catch(f){co(t,e,{then:function(){},status:"rejected",reason:f},Wt())}finally{de.p=s,r!==null&&o.types!==null&&(r.types=o.types),q.T=r}}function HM(){}function jf(t,e,a,n){if(t.tag!==5)throw Error(I(476));var i=Ny(t).queue;Dy(t,i,e,Li,a===null?HM:function(){return Py(t),a(n)})}function Ny(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Li,baseState:Li,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:Li},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Py(t){var e=Ny(t);e.next===null&&(e=t.alternate.memoizedState),co(t,e.next.queue,{},Wt())}function lp(){return it(sr)}function Uy(){return He().memoizedState}function Ry(){return He().memoizedState}function VM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Wt();t=qn(a);var n=Xn(e,t,a);n!==null&&(Pt(n,e,a),oo(n,e,a)),e={cache:Wh()},t.payload=e;return}e=e.return}}function GM(t,e,a){var n=Wt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(t)?By(e,a):(a=Gh(t,e,a,n),a!==null&&(Pt(a,t,n),Fy(a,e,n)))}function Oy(t,e,a){var n=Wt();co(t,e,a,n)}function co(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(t))By(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,Yt(o,r))return ic(t,e,i,0),Ae===null&&nc(),!1}catch{}if(a=Gh(t,e,i,n),a!==null)return Pt(a,t,n),Fy(a,e,n),!0}return!1}function up(t,e,a,n){if(n={lane:2,revertLane:bp(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(e)throw Error(I(479))}else e=Gh(t,a,n,2),e!==null&&Pt(e,t,2)}function cc(t){var e=t.alternate;return t===j||e!==null&&e===j}function By(t,e){qs=Ou=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Fy(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Sv(t,a)}}var Fu={readContext:it,use:lc,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},zy={readContext:it,use:lc,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:c0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,fu(4194308,4,Ay.bind(null,e,t),a)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){fu(4,2,t,e)},useMemo:function(t,e){var a=wt();e=e===void 0?null:e;var n=t();if(Fi){On(!0);try{t()}finally{On(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=wt();if(a!==void 0){var i=a(e);if(Fi){On(!0);try{a(e)}finally{On(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=GM.bind(null,j,t),[n.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:function(t){t=Yf(t);var e=t.queue,a=Oy.bind(null,j,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:rp,useDeferredValue:function(t,e){var a=wt();return op(a,t,e)},useTransition:function(){var t=Yf(!1);return t=Dy.bind(null,j,t.queue,!0,!1),wt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=j,i=wt();if(Q){if(a===void 0)throw Error(I(407));a=a()}else{if(a=e(),Ae===null)throw Error(I(349));(ie&127)!==0||fy(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,c0(py.bind(null,n,s,t),[t]),n.flags|=2048,Qs(9,{destroy:void 0},hy.bind(null,n,s,a,e),null),a},useId:function(){var t=wt(),e=Ae.identifierPrefix;if(Q){var a=Fa,n=Ba;a=(n&~(1<<32-Xt(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Bu++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=OM++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:lp,useFormState:o0,useActionState:o0,useOptimistic:function(t){var e=wt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=up.bind(null,j,!0,a),a.dispatch=e,[t,e]},useMemoCache:np,useCacheRefresh:function(){return wt().memoizedState=VM.bind(null,j)},useEffectEvent:function(t){var e=wt(),a={impl:t};return e.memoizedState=a,function(){if((ce&2)!==0)throw Error(I(440));return a.impl.apply(void 0,arguments)}}},ky={readContext:it,use:lc,useCallback:Ly,useContext:it,useEffect:sp,useImperativeHandle:Ty,useInsertionEffect:wy,useLayoutEffect:Cy,useMemo:Ey,useReducer:du,useRef:Sy,useState:function(){return du(on)},useDebugValue:rp,useDeferredValue:function(t,e){var a=He();return Iy(a,Me.memoizedState,t,e)},useTransition:function(){var t=du(on)[0],e=He().memoizedState;return[typeof t=="boolean"?t:ko(t),e]},useSyncExternalStore:dy,useId:Uy,useHostTransitionStatus:lp,useFormState:l0,useActionState:l0,useOptimistic:function(t,e){var a=He();return xy(a,Me,t,e)},useMemoCache:np,useCacheRefresh:Ry,useEffectEvent:My},qM={readContext:it,use:lc,useCallback:Ly,useContext:it,useEffect:sp,useImperativeHandle:Ty,useInsertionEffect:wy,useLayoutEffect:Cy,useMemo:Ey,useReducer:sf,useRef:Sy,useState:function(){return sf(on)},useDebugValue:rp,useDeferredValue:function(t,e){var a=He();return Me===null?op(a,t,e):Iy(a,Me.memoizedState,t,e)},useTransition:function(){var t=sf(on)[0],e=He().memoizedState;return[typeof t=="boolean"?t:ko(t),e]},useSyncExternalStore:dy,useId:Uy,useHostTransitionStatus:lp,useFormState:u0,useActionState:u0,useOptimistic:function(t,e){var a=He();return Me!==null?xy(a,Me,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:np,useCacheRefresh:Ry,useEffectEvent:My};function rf(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:Te({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Kf={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Wt(),i=qn(n);i.payload=e,a!=null&&(i.callback=a),e=Xn(t,i,n),e!==null&&(Pt(e,t,n),oo(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Wt(),i=qn(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Xn(t,i,n),e!==null&&(Pt(e,t,n),oo(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Wt(),n=qn(a);n.tag=2,e!=null&&(n.callback=e),e=Xn(t,n,a),e!==null&&(Pt(e,t,a),oo(e,t,a))}};function d0(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!bo(a,n)||!bo(i,s):!0}function f0(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Kf.enqueueReplaceState(e,e.state,null)}function zi(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=Te({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function Hy(t){Lu(t)}function Vy(t){console.error(t)}function Gy(t){Lu(t)}function zu(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function h0(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Jf(t,e,a){return a=qn(a),a.tag=3,a.payload={element:null},a.callback=function(){zu(t,e)},a}function qy(t){return t=qn(t),t.tag=3,t}function Xy(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){h0(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){h0(e,a,n),typeof i!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function XM(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Ui(e,a,i,!0),a=lt.current,a!==null){switch(a.tag){case 31:case 13:case 19:return pt===null?Yu():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Pu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),hf(t,n,i)),!1;case 22:return a.flags|=65536,n===Pu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),hf(t,n,i)),!1}throw Error(I(435,a.tag))}return hf(t,n,i),Yu(),!1}if(Q)return e=lt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==zf&&(t=Error(I(422),{cause:n}),So(la(t,a)))):(n!==zf&&(e=Error(I(423),{cause:n}),So(la(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=la(n,a),i=Jf(t.stateNode,n,i),nf(t,i),ze!==4&&(ze=2)),!1;var s=Error(I(520),{cause:n});if(s=la(s,a),mo===null?mo=[s]:mo.push(s),ze!==4&&(ze=2),e===null)return!0;n=la(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Jf(a.stateNode,n,t),nf(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Zn===null||!Zn.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=qy(i),Xy(i,t,a,n),nf(a,i),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var cp=Error(I(461)),Xe=!1;function Ye(t,e,a,n){e.child=t===null?sy(e,null,a,n):Bi(e,t.child,a,n)}function p0(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return Ri(e),n=$h(t,e,a,r,s,i),o=ep(),t!==null&&!Xe?(tp(t,e,i),ln(t,e,i)):(Q&&o&&sc(e),e.flags|=1,Ye(t,e,n,i),e.child)}function m0(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!qh(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,Wy(t,e,s,n,i)):(t=lu(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!fp(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(r,n)&&t.ref===e.ref)return ln(t,e,i)}return e.flags|=1,t=tn(s,n),t.ref=e.ref,t.return=e,e.child=t}function Wy(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if(bo(s,n)&&t.ref===e.ref)if(Xe=!1,e.pendingProps=n=s,fp(t,i))(t.flags&131072)!==0&&(Xe=!0);else return e.lanes=t.lanes,ln(t,e,i)}return Qf(t,e,a,n,i)}function Yy(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return g0(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(e,s!==null?s.cachePool:null),s!==null?i0(e,s):Xf(),ly(e);else return n=e.lanes=536870912,g0(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(cu(e,s.cachePool),i0(e,s),Yn(),e.memoizedState=null):(t!==null&&cu(e,null),Xf(),Yn());return Ye(t,e,i,a),e.child}function fo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function g0(t,e,a,n,i){var s=Yh();return s=s===null?null:{parent:qe._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&cu(e,null),Xf(),ly(e),t!==null&&Ui(t,e,n,!0),e.childLanes=i,null}function hu(t,e){return e=dc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function x0(t,e,a){return Bi(e,t.child,null,a),t=hu(e,e.pendingProps),t.flags|=2,kt(e),e.memoizedState=null,t}function WM(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Q){if(n.mode==="hidden")return t=hu(e,n),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},fo(null,t);if(Wf(e),(t=Ie)?(t=Yb(t,ua),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Qn!==null?{id:Ba,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},a=Qv(t),a.return=e,e.child=a,et=e,Ie=null)):t=null,t===null)throw $n(e);return e.lanes=536870912,null}return hu(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(Wf(e),i)if(e.flags&256)e.flags&=-257,e=x0(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(I(558));else if(Xe||Ui(t,e,a,!1),i=(a&t.childLanes)!==0,Xe||i){if(ei.current===null){if(n=Ae,n!==null&&(r=Mv(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,qi(t,r),Pt(n,t,r),cp;Yu()}e=x0(t,e,a)}else t=s.treeContext,Ie=ca(r.nextSibling),et=e,Q=!0,Gn=null,ua=!1,t!==null&&ey(e,t),e=hu(e,n),e.flags|=134221824;return e}return t=tn(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ws(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(I(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Qf(t,e,a,n,i){return Ri(e),a=$h(t,e,a,n,void 0,i),n=ep(),t!==null&&!Xe?(tp(t,e,i),ln(t,e,i)):(Q&&n&&sc(e),e.flags|=1,Ye(t,e,a,i),e.child)}function v0(t,e,a,n,i,s){return Ri(e),e.updateQueue=null,a=cy(e,n,a,i),uy(t),n=ep(),t!==null&&!Xe?(tp(t,e,s),ln(t,e,s)):(Q&&n&&sc(e),e.flags|=1,Ye(t,e,a,s),e.child)}function y0(t,e,a,n,i){if(Ri(e),e.stateNode===null){var s=Rs,r=a.contextType;typeof r=="object"&&r!==null&&(s=it(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Kf,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},jh(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?it(r):Rs,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(rf(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Kf.enqueueReplaceState(s,s.state,null),uo(e,n,s,i),lo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=zi(a,o);s.props=l;var u=s.context,c=a.contextType;r=Rs,typeof c=="object"&&c!==null&&(r=it(c));var f=a.getDerivedStateFromProps;c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&f0(e,s,n,r),Un=!1;var d=e.memoizedState;s.state=d,uo(e,n,s,i),lo(),u=e.memoizedState,o||d!==u||Un?(typeof f=="function"&&(rf(e,a,f,n),u=e.memoizedState),(l=Un||d0(e,a,l,n,d,u,r))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Gf(t,e),r=e.memoizedProps,c=zi(a,r),s.props=c,f=e.pendingProps,d=s.context,u=a.contextType,l=Rs,typeof u=="object"&&u!==null&&(l=it(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==f||d!==l)&&f0(e,s,n,l),Un=!1,d=e.memoizedState,s.state=d,uo(e,n,s,i),lo();var h=e.memoizedState;r!==f||d!==h||Un||t!==null&&t.dependencies!==null&&Nu(t.dependencies)?(typeof o=="function"&&(rf(e,a,o,n),h=e.memoizedState),(c=Un||d0(e,a,c,n,d,h,l)||t!==null&&t.dependencies!==null&&Nu(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=c):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,ws(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=Bi(e,t.child,null,i),e.child=Bi(e,null,a,i)):Ye(t,e,a,i),e.memoizedState=s.state,t=e.child):t=ln(t,e,i),t}function b0(t,e,a,n){return Pi(),e.flags|=256,Ye(t,e,a,n),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eh(t){return{baseLanes:t,cachePool:ay()}}function th(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Vt),t}function Zy(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(rt.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Q){if(i?Wn(e):Yn(),(t=Ie)?(t=Yb(t,ua),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Qn!==null?{id:Ba,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},a=Qv(t),a.return=e,e.child=a,et=e,Ie=null)):t=null,t===null)throw $n(e);return wp(t)?e.lanes=32:e.lanes=536870912,null}return s=n.children,n=n.fallback,i?(Yn(),i=e.mode,s=dc({mode:"hidden",children:s},i),n=Ei(n,i,a,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=eh(a),n.childLanes=th(t,r,a),e.memoizedState=$f,fo(null,n)):(Wn(e),dp(e,s))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return YM(t,e,s,r,n,l,o,a)}return i?(Yn(),i=n.fallback,s=e.mode,o=t.child,l=o.sibling,n=tn(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&1206910976,l!==null?i=tn(l,i):(i=Ei(i,s,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,fo(null,n),n=e.child,i=t.child.memoizedState,i===null?i=eh(a):(s=i.cachePool,s!==null?(o=qe._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=ay(),i={baseLanes:i.baseLanes|a,cachePool:s}),n.memoizedState=i,n.childLanes=th(t,r,a),e.memoizedState=$f,fo(t.child,n)):(Wn(e),a=t.child,t=a.sibling,a=tn(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function dp(t,e){return e=dc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function dc(t,e){return t=Nt(22,t,null,e),t.lanes=0,t}function Zl(t,e,a){return Bi(e,t.child,null,a),t=dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YM(t,e,a,n,i,s,r,o){if(a)return e.flags&256?(Wn(e),e.flags&=-257,Zl(t,e,o)):e.memoizedState!==null?(Yn(),e.child=t.child,e.flags|=128,null):(Yn(),s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r),s=Ei(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,Bi(e,t.child,null,o),i=e.child,i.memoizedState=eh(o),i.childLanes=th(t,n,o),e.memoizedState=$f,fo(null,i));if(Wn(e),wp(s)){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,n!==""&&(i=Error(I(419)),i.stack="",i.digest=n,So({value:i,source:null,stack:null})),Zl(t,e,o)}if(Xe||Ui(t,e,o,!1),n=(o&t.childLanes)!==0,Xe||n){if(ei.current!==null)return Zl(t,e,o);if(n=Ae,n!==null&&(i=Mv(n,o),i!==0&&i!==r.retryLane))throw r.retryLane=i,qi(t,i),Pt(n,t,i),cp;return Ah(s)||Yu(),Zl(t,e,o)}return Ah(s)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Ie=ca(s.nextSibling),et=e,Q=!0,Gn=null,ua=!1,t!==null&&ey(e,t),e=dp(e,i.children),e.flags|=134221824,e)}function _0(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),uu(t.return,e,a)}function S0(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&Ru(a)===null&&(e=t),t=t.sibling}return e}function jl(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function of(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function ah(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=rt.current;if(e.flags&128)return wo(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,wo(e,r),i==="backwards"&&t!==null?(of(t),Ye(t,e,n,a),of(t)):Ye(t,e,n,a),n=Q?_o:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_0(t,a,e);else if(t.tag===19)_0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"backwards":a=S0(e.child),a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null,of(e)),jl(e,!0,i,null,s,n);break;case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}jl(e,!0,a,null,s,n);break;case"together":jl(e,!1,null,null,void 0,n);break;case"independent":e.memoizedState=null;break;default:a=S0(e.child),a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),jl(e,!1,i,a,s,n)}return e.child}function M0(t,e,a){var n=e.pendingProps;return Fn(e,e.type,n.value),Ye(t,e,n.children,a),e.child}function ln(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Ui(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,a=tn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=tn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function fp(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Nu(t)))}function ZM(t,e,a){switch(e.tag){case 3:wu(e,e.stateNode.containerInfo),Fn(e,qe,t.memoizedState.cache),Pi();break;case 27:case 5:Ef(e);break;case 4:wu(e,e.stateNode.containerInfo);break;case 10:Fn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Wf(e),null;break;case 13:var n=e.memoizedState;if(n!==null){if(n.dehydrated!==null)return Wn(e),e.flags|=128,null;n=Ui(t,e,a,!1);var i=e.child.childLanes;return n||(a&i)!==0?Zy(t,e,a):(Wn(e),t=ln(t,e,a),t!==null?t.sibling:null)}Wn(e);break;case 19:if(e.flags&128)return ah(t,e,a);if(i=(t.flags&128)!==0,n=(a&e.childLanes)!==0,n||(Ui(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return ah(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),wo(e,rt.current),n)break;return null;case 22:return e.lanes=0,Yy(t,e,a,e.pendingProps);case 24:Fn(e,qe,t.memoizedState.cache)}return ln(t,e,a)}function jy(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xe=!0;else{if(!fp(t,a)&&(e.flags&128)===0)return Xe=!1,ZM(t,e,a);Xe=(t.flags&131072)!==0}else Xe=!1,Q&&(e.flags&1048576)!==0&&$v(e,_o,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=wi(e.elementType),e.type=t,typeof t=="function")qh(t)?(n=zi(t,n),e.tag=1,e=y0(null,e,t,n,a)):(e.tag=0,e=Qf(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===Dh){e.tag=11,e=p0(null,e,t,n,a);break e}else if(i===Nh){e.tag=14,e=m0(null,e,t,n,a);break e}else if(i===Ra){e.tag=10,e.type=t,e=M0(null,e,a);break e}}throw e=Tf(t)||t,Error(I(306,e,""))}}return e;case 0:return Qf(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=zi(n,e.pendingProps),y0(t,e,n,i,a);case 3:e:{if(wu(e,e.stateNode.containerInfo),t===null)throw Error(I(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,Gf(t,e),uo(e,n,null,a);var r=e.memoizedState;if(n=r.cache,Fn(e,qe,n),n!==s.cache&&Hf(e,[qe],a,!0),lo(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=b0(t,e,n,a);break e}else if(n!==i){i=la(Error(I(424)),e),So(i),e=b0(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ie=ca(t.firstChild),et=e,Q=!0,Gn=null,ua=!0,a=sy(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Pi(),n===i){e=ln(t,e,a);break e}Ye(t,e,n,a)}e=e.child}return e;case 26:return ws(t,e),t===null?(a=K0(e.type,null,e.pendingProps,null))?e.memoizedState=a:Q||(e.stateNode=Fb(e.type,e.pendingProps,Vn.current,e)):e.memoizedState=K0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ef(e),t===null&&Q&&(n=e.stateNode=Zb(e.type,e.pendingProps,Vn.current),et=e,ua=!0,i=Ie,ii(e.type)?(Th=i,Ie=ca(n.firstChild)):Ie=i),Ye(t,e,e.pendingProps.children,a),ws(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Q&&((i=n=Ie)&&(n=kw(n,e.type,e.pendingProps,ua),n!==null?(e.stateNode=n,et=e,Ie=ca(n.firstChild),ua=!1,i=!0):i=!1),i||$n(e)),Ef(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,Mh(i,s)?n=null:r!==null&&Mh(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=$h(t,e,BM,null,null,a),sr._currentValue=i),ws(t,e),Ye(t,e,n,a),e.child;case 6:return t===null&&Q&&((t=a=Ie)&&(a=Hw(a,e.pendingProps,ua),a!==null?(e.stateNode=a,et=e,Ie=null,t=!0):t=!1),t||$n(e)),null;case 13:return Zy(t,e,a);case 4:return wu(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Bi(e,null,n,a):Ye(t,e,n,a),e.child;case 11:return p0(t,e,e.type,e.pendingProps,a);case 7:return n=e.pendingProps,ws(t,e),Ye(t,e,n,a),e.child;case 8:return Ye(t,e,e.pendingProps.children,a),e.child;case 12:return Ye(t,e,e.pendingProps.children,a),e.child;case 10:return M0(t,e,a);case 9:return i=e.type._context,n=e.pendingProps.children,Ri(e),i=it(i),n=n(i),e.flags|=1,Ye(t,e,n,a),e.child;case 14:return m0(t,e,e.type,e.pendingProps,a);case 15:return Wy(t,e,e.type,e.pendingProps,a);case 19:return ah(t,e,a);case 31:return WM(t,e,a);case 22:return Yy(t,e,a,e.pendingProps);case 24:return Ri(e),n=it(qe),t===null?(i=Yh(),i===null&&(i=Ae,s=Wh(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},jh(e),Fn(e,qe,i)):((t.lanes&a)!==0&&(Gf(t,e),uo(e,null,null,a),lo()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Fn(e,qe,n)):(n=s.cache,Fn(e,qe,n),n!==i.cache&&Hf(e,[qe],a,!0))),Ye(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=e.pendingProps,n.name!=null&&n.name!=="auto"?e.flags|=t===null?18882560:18874368:Q&&sc(e),t!==null&&t.memoizedProps.name!==n.name?e.flags|=4194816:ws(t,e),Ye(t,e,n.children,a),e.child;case 29:throw e.pendingProps}throw Error(I(156,e.tag))}function Qa(t){t.flags|=4}function lf(t,e,a,n,i){var s;if((s=(t.mode&32)!==0)&&(s=a===null?$0(e,n):$0(e,n)&&(n.src!==a.src||n.srcSet!==a.srcSet)),s){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(wb())t.flags|=8192;else throw Di=Pu,Zh}else t.flags&=-16777217}function w0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qb(e))if(wb())t.flags|=8192;else throw Di=Pu,Zh}function Kl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?bv():536870912,t.lanes|=e,$s|=e)}function Zr(t,e){if(!Q)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&1206910976,n|=i.flags&1206910976,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function jM(t,e,a){var n=e.pendingProps;switch(Xh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Ee(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),an(qe),js(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ss(e)?Qa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,af())),Ee(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Qa(e),s!==null?(Ee(e),w0(e,s)):(Ee(e),lf(e,i,null,n,a))):s?s!==t.memoizedState?(Qa(e),Ee(e),w0(e,s)):(Ee(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Qa(e),Ee(e),lf(e,i,t,n,a)),null;case 27:if(Cu(e),a=Vn.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Qa(e);else{if(!n){if(e.stateNode===null)throw Error(I(166));return Ee(e),e.subtreeFlags&=-33554433,null}t=za.current,Ss(e)?Jx(e,t):(t=Zb(i,n,a),e.stateNode=t,Qa(e))}return Ee(e),e.subtreeFlags&=-33554433,null;case 5:if(Cu(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Qa(e);else{if(!n){if(e.stateNode===null)throw Error(I(166));return Ee(e),e.subtreeFlags&=-33554433,null}if(s=za.current,Ss(e))Jx(e,s);else{var r=Lo(Vn.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[nt]=e,s[Rt]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(ot(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Qa(e)}}return Ee(e),e.subtreeFlags&=-33554433,lf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Qa(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(I(166));if(t=Vn.current,Ss(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=et,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[nt]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Ob(t.nodeValue,a)),t||$n(e,!0)}else t=Lo(t).createTextNode(n),t[nt]=e,e.stateNode=t}return Ee(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=Ss(e),a!==null){if(t===null){if(!n)throw Error(I(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(557));t[nt]=e}else Pi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ee(e),t=!1}else a=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(kt(e),e):(kt(e),null);if((e.flags&128)!==0)throw Error(I(558))}return Ee(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Ss(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(I(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[nt]=e}else Pi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ee(e),i=!1}else i=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(kt(e),e):(kt(e),null)}return kt(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Kl(e,e.updateQueue),Ee(e),null);case 4:return js(),t===null&&_p(e.stateNode.containerInfo),e.flags|=67108864,Ee(e),null;case 10:return an(e.type),Ee(e),null;case 19:if(Jh(e),n=e.memoizedState,n===null)return Ee(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)Zr(n,!1);else{if(ze!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Ru(t),s!==null){for(e.flags|=128,Zr(n,!1),t=s.updateQueue,e.updateQueue=t,Kl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Jv(a,t),a=a.sibling;return wo(e,rt.current&1|2),Q&&$a(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&Gt()>Xu&&(e.flags|=128,i=!0,Zr(n,!1),e.lanes=4194304)}else{if(!i)if(t=Ru(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Kl(e,t),Zr(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!s.alternate&&!Q)return Ee(e),null}else 2*Gt()-n.renderingStartTime>Xu&&a!==536870912&&(e.flags|=128,i=!0,Zr(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}if(n.tail!==null){t=n.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Gt(),t.sibling=null,s=rt.current,s=i?s&1|2:s&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!a||Q?wo(e,s):(a=s,De(lt,e),De(rt,a),pt===null&&(pt=e)),Q&&$a(e,n.treeForkCount),t}return Ee(e),null;case 22:case 23:return kt(e),Kh(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),a=e.updateQueue,a!==null&&Kl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&st(Ii),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),an(qe),Ee(e),null;case 25:return null;case 30:return e.flags|=33554432,Ee(e),null}throw Error(I(156,e.tag))}function KM(t,e){switch(Xh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return an(qe),js(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Cu(e),null;case 31:if(e.memoizedState!==null){if(kt(e),e.alternate===null)throw Error(I(340));Pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(kt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Jh(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return js(),null;case 10:return an(e.type),null;case 22:case 23:return kt(e),Kh(),t!==null&&st(Ii),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return an(qe),null;case 25:return null;default:return null}}function Ky(t,e){switch(Xh(e),e.tag){case 3:an(qe),js();break;case 26:case 27:case 5:Cu(e);break;case 4:js();break;case 31:e.memoizedState!==null&&kt(e);break;case 13:kt(e);break;case 19:Jh(e);break;case 10:an(e.type);break;case 22:case 23:kt(e),Kh(),t!==null&&st(Ii);break;case 24:an(qe)}}function Ho(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){Se(e,e.return,o)}}function ti(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(c){Se(i,l,c)}}}n=n.next}while(n!==s)}}catch(c){Se(e,e.return,c)}}function Jy(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{oy(e,a)}catch(n){Se(t,t.return,n)}}}function Qy(t,e,a){a.props=zi(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Se(t,e,n)}}function Pa(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:var i=t.stateNode,s=sn(t.memoizedProps,i);(i.ref===null||i.ref.name!==s)&&(i.ref=Vb(s)),n=i.ref;break;case 7:if(t.stateNode===null){var r=new Zt(t);Ut(t.child,!1,Fw,r,void 0,void 0),t.stateNode=r}n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(o){Se(t,e,o)}}function at(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Se(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Se(t,e,i)}else a.current=null}function ku(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)Wb(t.stateNode,e[a])}function C0(t){for(var e=t.return;e!==null&&(pp(e)&&Wb(t.stateNode,e.stateNode),!hp(e));)e=e.return}function ho(t){for(var e=t.return;e!==null&&(pp(e)&&zw(t.stateNode,e.stateNode),!hp(e));)e=e.return}function hp(t){return t.tag===5||t.tag===3||t.tag===27}function pp(t){return t&&t.tag===7&&t.stateNode!==null}function nh(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Se(t,t.return,i)}}function uf(t,e,a){try{var n=t.stateNode;bw(n,t.type,a,e),n[Rt]=e}catch(i){Se(t,t.return,i)}}function $y(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ii(t.type)||t.tag===4}function cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ii(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,a,n){var i=t.tag;if(i===5||i===6)i=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(i,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(i),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Oa)),ku(t,n),ue=!0;else if(i!==4&&(i===27&&(ku(t,n),n=null,ii(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(ih(t,e,a,n),t=t.sibling;t!==null;)ih(t,e,a,n),t=t.sibling}function Hu(t,e,a,n){var i=t.tag;if(i===5||i===6)i=t.stateNode,e?a.insertBefore(i,e):a.appendChild(i),ku(t,n),ue=!0;else if(i!==4&&(i===27&&(ku(t,n),n=null,ii(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Hu(t,e,a,n),t=t.sibling;t!==null;)Hu(t,e,a,n),t=t.sibling}function eb(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ot(e,n,a),e[nt]=t,e[Rt]=a}catch(s){Se(t,t.return,s)}}var Vu=!1,Ht=null;function A0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Vu=!0)}var Ua=null;function T0(){var t=Ua;return Ua=null,t}var Dt=0;function dr(t,e,a,n,i){return Dt=0,tb(t.child,e,a,n,i)}function tb(t,e,a,n,i){for(var s=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(n!==null){var o=wh(r);n.push(o),o.view&&(s=!0)}else s||wh(r).view&&(s=!0);Vu=!0,zb(r,Dt===0?e:e+"_"+Dt,a),Dt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i||tb(t.child,e,a,n,i)&&(s=!0));t=t.sibling}return s}function Ha(t,e){for(;t!==null;)t.tag===5?kb(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Ha(t.child,e)),t=t.sibling}function pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(I(544));var a=e.name;e=dn(e.default,e.share),e!=="none"&&(dr(t,a,e,null,!1)||Ha(t.child,!1))}t=t.sibling}}function sh(t,e){if(t.tag===30){var a=t.stateNode,n=t.memoizedProps,i=sn(n,a),s=dn(n.default,a.paired?n.share:n.enter);s!=="none"?dr(t,i,s,null,!1)?(pu(t),a.paired||e||er(t,n.onEnter)):Ha(t.child,!1):pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)sh(t,e),t=t.sibling;else pu(t)}function rh(t){if(Ht!==null&&Ht.size!==0){var e=Ht;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,n=a.name;if(n!=null&&n!=="auto"){var i=e.get(n);if(i!==void 0){var s=dn(a.default,a.share);if(s!=="none"&&(dr(t,n,s,null,!1)?(s=t.stateNode,i.paired=s,s.paired=i,er(t,a.onShare)):Ha(t.child,!1)),e.delete(n),e.size===0)break}}}rh(t)}t=t.sibling}}}function oh(t){if(t.tag===30){var e=t.memoizedProps,a=sn(e,t.stateNode),n=Ht!==null?Ht.get(a):void 0,i=dn(e.default,n!==void 0?e.share:e.exit);i!=="none"&&(dr(t,a,i,null,!1)?n!==void 0?(i=t.stateNode,n.paired=i,i.paired=n,Ht.delete(a),er(t,e.onShare)):er(t,e.onExit):Ha(t.child,!1)),Ht!==null&&rh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)oh(t),t=t.sibling;else Ht!==null&&rh(t)}function ab(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=sn(e,t.stateNode);e=dn(e.default,e.update),t.flags&=-5,e!=="none"&&dr(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&ab(t);t=t.sibling}}function lh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Ha(t.child,!1))}lh(t)}t=t.sibling}}function mu(t){if(t.tag===30)t.stateNode.paired=null,Ha(t.child,!1),lh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mu(t),t=t.sibling;else lh(t)}function nb(t){for(t=t.child;t!==null;)t.tag===30?Ha(t.child,!1):(t.subtreeFlags&33554432)!==0&&nb(t),t=t.sibling}function mp(t,e,a,n,i,s,r){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(s!==null&&Dt<s.length){var u=s[Dt],c=wh(l);(u.view||c.view)&&(o=!0);var f;if(f=(t.flags&4)===0)if(c.clip)f=!0;else{f=u.rect;var d=c.rect;f=f.y!==d.y||f.x!==d.x||f.height!==d.height||f.width!==d.width}f&&(t.flags|=4),c.abs?c=!u.abs:(u=u.rect,c=c.rect,c=u.height!==c.height||u.width!==c.width),c&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&zb(l,Dt===0?a:a+"_"+Dt,i),o&&(t.flags&4)!==0||(Ua===null&&(Ua=[]),Ua.push(l,Dt===0?n:n+"_"+Dt,e.memoizedProps)),Dt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:mp(t,e.child,a,n,i,s,r)&&(o=!0));e=e.sibling}return o}function ib(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,n=t.stateNode,i=sn(a,n),s=dn(a.default,a.update);if(e){n=n.clones;var r=n===null?null:n.map(Aw)}else r=t.memoizedState,t.memoizedState=null;n=t;var o=t.child;Dt=0,i=mp(n,o,i,i,s,r,!1),(t.flags&4)!==0&&i&&(e||er(t,a.onUpdate))}else(t.subtreeFlags&33554432)!==0&&ib(t,e);t=t.sibling}}var Je=!1,ge=!1,Ia=!1,df=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Qe=null,Da=!1,ao=!1,Gu=!1,uh=!1;function JM(t,e,a){if(t=t.containerInfo,_h=rr,t=Gv(t),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==r||i!==0&&d.nodeType!==3||(u=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===s&&(l=o),h===r&&++f===i&&(u=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},rr=!1,a=(a&335544064)===a,Qe=e,e=a?9270:1024;Qe!==null;){if(t=Qe,a&&(n=t.deletions,n!==null))for(s=0;s<n.length;s++)a&&oh(n[s]);if(t.alternate===null&&(t.flags&2)!==0)a&&A0(t),Jl(a);else{if(t.tag===22){if(n=t.alternate,t.memoizedState!==null){n!==null&&n.memoizedState===null&&a&&oh(n),Jl(a);continue}else if(n!==null&&n.memoizedState!==null){a&&A0(t),Jl(a);continue}}n=t.child,(t.subtreeFlags&e)!==0&&n!==null?(n.return=t,Qe=n):(a&&ab(t),Jl(a))}}Ht=null}function Jl(t){for(;Qe!==null;){var e=Qe,a=t,n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&n!==null){a=void 0,i=n.memoizedProps,n=n.memoizedState;var s=e.stateNode;try{var r=zi(e.type,i);a=s.getSnapshotBeforeUpdate(r,n),s.__reactInternalSnapshotBeforeUpdate=a}catch(o){Se(e,e.return,o)}}break;case 3:if((i&1024)!==0){if(n=e.stateNode.containerInfo,a=n.nodeType,a===9)Ch(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ch(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&n!==null&&(a=sn(n.memoizedProps,n.stateNode),i=e.memoizedProps,i=dn(i.default,i.update),i!=="none"&&dr(n,a,i,n.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(I(163))}if(n=e.sibling,n!==null){n.return=e.return,Qe=n;break}Qe=e.return}}function sb(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Na(t,a),n&4&&Ho(5,a);break;case 1:if(Na(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){Se(a,a.return,r)}else{var i=zi(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Se(a,a.return,r)}}n&64&&Jy(a),n&512&&Pa(a,a.return);break;case 3:if(Na(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{oy(t,e)}catch(r){Se(a,a.return,r)}}break;case 27:e===null&&n&4&&eb(a);case 26:case 5:Na(t,a),e===null&&n&4&&nh(a),n&512&&Pa(a,a.return);break;case 12:Na(t,a);break;case 31:Na(t,a),n&4&&ub(t,a);break;case 13:Na(t,a),n&4&&cb(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=uw.bind(null,a),Vw(t,a))));break;case 22:if(n=a.memoizedState!==null||Je,!n){var s=e!==null&&e.memoizedState!==null||ge;e=Je,i=ge,Je=n,(ge=s)&&!i?(n=2,(a.subtreeFlags&8772)!==0&&(n|=1),xa(t,a,n)):Na(t,a),Je=e,ge=i}break;case 30:Na(t,a),n&512&&Pa(a,a.return);break;case 7:n&512&&Pa(a,a.return);default:Na(t,a)}}function ch(t,e){for(t=t.child;t!==null;)rb(t,e),t=t.sibling}function rb(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var n=a.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var i=t.stateNode,s=t.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;i.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Se(t,t.return,l)}dh(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,ue=!0}catch(l){Se(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?q0(o,!0):q0(t.stateNode,!1)}catch(l){Se(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&ch(t,e);break;default:ch(t,e)}}function dh(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,n=e;switch(a.tag){case 4:rb(a,n);break e;case 22:a.memoizedState===null&&dh(a,n);break e;default:dh(a,n)}}t=t.sibling}}function ob(t){var e=t.alternate;e!==null&&(t.alternate=null,ob(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$u(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ue=null,Et=!1;function ga(t,e,a){for(a=a.child;a!==null;)lb(t,e,a),a=a.sibling}function lb(t,e,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Uo,a)}catch{}switch(a.tag){case 26:ge||at(a,e),ga(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ge||at(a,e),ho(a);var n=Ue,i=Et;ii(a.type)&&(Ue=a.stateNode,Et=!1),ga(t,e,a),jb(a.stateNode,a.type,a.memoizedProps),Ue=n,Et=i;break;case 5:ge||at(a,e),ho(a);case 6:if(a.tag===6&&ho(a),n=Ue,i=Et,Ue=null,ga(t,e,a),Ue=n,Et=i,Ue!==null)if(Et)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode),ue=!0}catch(s){Se(a,e,s)}else try{Ue.removeChild(a.stateNode),ue=!0}catch(s){Se(a,e,s)}break;case 18:Ue!==null&&(Et?(t=Ue,G0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),or(t)):G0(Ue,a.stateNode));break;case 4:n=Ue,i=Et,Ue=a.stateNode.containerInfo,Et=!0,ga(t,e,a),Ue=n,Et=i;break;case 0:case 11:case 14:case 15:ti(2,a,e),ge||ti(4,a,e),ga(t,e,a);break;case 1:ge||(at(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Qy(a,e,n)),ga(t,e,a);break;case 21:ga(t,e,a);break;case 22:ge=(n=ge)||a.memoizedState!==null,ga(t,e,a),ge=n;break;case 30:at(a,e),ga(t,e,a);break;case 7:ge||at(a,e),ga(t,e,a);break;default:ga(t,e,a)}}function ub(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{or(t)}catch(a){Se(e,e.return,a)}}}function cb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{or(t)}catch(a){Se(e,e.return,a)}}function QM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new L0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new L0),e;default:throw Error(I(435,t.tag))}}function Ql(t,e){var a=QM(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=cw.bind(null,t,n);n.then(i,i)}})}function St(t,e,a){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(ii(l.type)){Ue=l.stateNode,Et=!1;break e}break;case 5:Ue=l.stateNode,Et=!1;break e;case 3:case 4:Ue=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Ue===null)throw Error(I(160));lb(r,o,s),Ue=null,Et=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)db(e,t,a),e=e.sibling}var va=null;function db(t,e,a){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(i&4&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(var s=0;s<n.length;s++){var r=n[s];r.ref.impl=r.nextImpl}St(e,t,a),Mt(t),i&4&&(ti(3,t,t.return),Ho(3,t),ti(5,t,t.return));break;case 1:St(e,t,a),Mt(t),i&512&&(ge||n===null||at(n,n.return)),i&64&&Je&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(s=va,St(e,t,a),Mt(t),i&512&&(ge||n===null||at(n,n.return)),i&4)if(i=n!==null?n.memoizedState:null,a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null)if(Je)t.stateNode=Fb(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,i=s.ownerDocument||s;t:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Bo]||n[nt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),ot(n,e,a),n[nt]=t,$e(n),e=n;break e;case"link":if(s=Q0("link","href",i).get(e+(a.href||""))){for(r=0;r<s.length;r++)if(n=s[r],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(r,1);break t}}n=i.createElement(e),ot(n,e,a),i.head.appendChild(n);break;case"meta":if(s=Q0("meta","content",i).get(e+(a.content||""))){for(r=0;r<s.length;r++)if(n=s[r],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(r,1);break t}}n=i.createElement(e),ot(n,e,a),i.head.appendChild(n);break;default:throw Error(I(468,e))}n[nt]=t,$e(n),e=n}t.stateNode=e}else Je||Lh(s,t.type,t.stateNode);else t.stateNode=J0(s,a,t.memoizedProps);else i!==a?(i===null?(e=n.stateNode,e===null||ge||e.parentNode.removeChild(e)):i.count--,a===null?Je||Lh(s,t.type,t.stateNode):J0(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&uf(t,t.memoizedProps,n.memoizedProps);break;case 27:St(e,t,a),Mt(t),i&512&&(ge||n===null||at(n,n.return)),n!==null&&i&4&&uf(t,t.memoizedProps,n.memoizedProps);break;case 5:if(s=Ia,Ia=!1,St(e,t,a),Ia=s,Mt(t),i&512&&(ge||n===null||at(n,n.return)),t.flags&32){e=t.stateNode;try{Js(e,""),ue=!0}catch(c){Se(t,t.return,c)}}i&4&&t.stateNode!=null&&(e=t.memoizedProps,uf(t,e,n!==null?n.memoizedProps:e)),i&1024&&(df=!0);break;case 6:if(St(e,t,a),Mt(t),i&4){if(t.stateNode===null)throw Error(I(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,ue=!0}catch(c){Se(t,t.return,c)}}break;case 3:if(ue=!1,yu=null,s=va,va=Eo(e.containerInfo),St(e,t,a),va=s,Mt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{or(e.containerInfo)}catch(c){Se(t,t.return,c)}df&&(df=!1,fb(t)),ue=!1;break;case 4:i=Ia,Ia=Je,n=Ux(),s=va,va=Eo(t.stateNode.containerInfo),St(e,t,a),Mt(t),va=s,ue&&ao&&(Gu=!0),ue=n,Ia=i;break;case 12:St(e,t,a),Mt(t);break;case 31:St(e,t,a),Mt(t),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ql(t,e)));break;case 13:St(e,t,a),Mt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fc=Gt()),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ql(t,e)));break;case 22:s=t.memoizedState!==null,r=n!==null&&n.memoizedState!==null;var o=Je,l=ge,u=Ia;Je=o||s,Ia=u||s,ge=l||r,St(e,t,a),ge=l,Ia=u,Je=o,Mt(t),i&8192&&(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,!s||n===null||r||Je||ge||(e=r||ge,a=Je,n=ge,Je=s||Je,ge=e,Nn(t,2),Je=a,ge=n),!s&&Ia||ch(t,s)),i&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Ql(t,a))));break;case 19:St(e,t,a),Mt(t),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ql(t,e)));break;case 30:i&512&&(ge||n===null||at(n,n.return)),i=Ux(),s=ao,r=(a&335544064)===a,o=t.memoizedProps,ao=r&&dn(o.default,o.update)!=="none",St(e,t,a),Mt(t),r&&n!==null&&ue&&(t.flags|=4),ao=s,ue=i;break;case 21:break;case 7:i&512&&(ge||n===null||at(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=t);default:St(e,t,a),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if($y(n)){a=n;break}n=n.return}n=null;for(var i=t.return;i!==null;){if(pp(i)){var s=i.stateNode;n===null?n=[s]:n.push(s)}if(hp(i))break;i=i.return}var r=n;if(a==null)throw Error(I(160));switch(a.tag){case 27:var o=a.stateNode,l=cf(t);Hu(t,l,o,r);break;case 5:var u=a.stateNode;a.flags&32&&(Js(u,""),a.flags&=-33);var c=cf(t);Hu(t,c,u,r);break;case 3:case 4:var f=a.stateNode.containerInfo,d=cf(t);ih(t,d,f,r);break;default:throw Error(I(161))}}catch(h){Se(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fb(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;fb(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,rr=!0,e.reset(),rr=!1),t=t.sibling}}function Ms(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)hb(e,t),e=e.sibling;else ib(e,!1)}function hb(t,e){var a=t.alternate;if(a===null)sh(t,!1);else switch(t.tag){case 3:if(uh=Da=!1,T0(),Ms(e,t),!Da&&!Gu){if(t=Ua,t!==null)for(var n=0;n<t.length;n+=3){a=t[n];var i=t[n+1];kb(a,t[n+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),uh=!0}Ua=null;break;case 5:Ms(e,t);break;case 4:n=Da,Da=!1,Ms(e,t),Da&&(Gu=!0),Da=n;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?sh(t,!1):Ms(e,t));break;case 30:n=Da,i=T0(),Da=!1,Ms(e,t),Da&&(t.flags|=4);var s=t.memoizedProps,r=t.stateNode;e=sn(s,r),r=sn(a.memoizedProps,r);var o=dn(s.default,s.update);o==="none"?e=!1:(s=a.memoizedState,a.memoizedState=null,a=t.child,Dt=0,e=mp(t,a,e,r,o,s,!0),Dt!==(s===null?0:s.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(er(t,t.memoizedProps.onUpdate),Ua=i):i!==null&&(i.push.apply(i,Ua),Ua=i),Da=(t.flags&32)!==0?!0:n;break;default:Ms(e,t)}}function Na(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)sb(t,e.alternate,e),e=e.sibling}function Nn(t,e){for(t=t.child;t!==null;){var a=t,n=e;switch(a.tag){case 0:case 11:case 14:case 15:ti(4,a,a.return),Nn(a,n);break;case 1:at(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&Qy(a,a.return,i),Nn(a,n);break;case 27:(n&2)!==0&&jb(a.stateNode,a.type,a.memoizedProps);case 5:at(a,a.return),a.tag!==5&&a.tag!==27||ho(a),Nn(a,n);break;case 6:ho(a);break;case 26:at(a,a.return),i=a.stateNode,a.memoizedState!==null||i===null||ge||i.parentNode.removeChild(i),Nn(a,n);break;case 22:a.memoizedState===null&&Nn(a,n);break;case 30:at(a,a.return),Nn(a,n);break;case 7:at(a,a.return);default:Nn(a,n)}t=t.sibling}}function xa(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags,o=(a&1)!==0;switch(s.tag){case 0:case 11:case 15:xa(i,s,a),Ho(4,s);break;case 1:if(xa(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){Se(n,n.return,c)}if(n=s,i=n.updateQueue,i!==null){var l=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)ry(u[i],l)}catch(c){Se(n,n.return,c)}}o&&r&64&&Jy(s),Pa(s,s.return);break;case 27:(a&2)!==0&&eb(s);case 5:s.tag!==5&&s.tag!==27||C0(s),xa(i,s,a),o&&n===null&&r&4&&nh(s),Pa(s,s.return);break;case 6:C0(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||Je||Lh(Eo(l.ownerDocument),s.type,l),xa(i,s,a),o&&n===null&&r&4&&nh(s),Pa(s,s.return);break;case 12:xa(i,s,a);break;case 31:xa(i,s,a),o&&r&4&&ub(i,s);break;case 13:xa(i,s,a),o&&r&4&&cb(i,s);break;case 22:s.memoizedState===null&&xa(i,s,a),Pa(s,s.return);break;case 30:xa(i,s,a),Pa(s,s.return);break;case 7:Pa(s,s.return);default:xa(i,s,a)}e=e.sibling}}function gp(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function xp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zo(t))}function na(t,e,a,n){var i=(a&335544064)===a;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)pb(t,e,a,n),e=e.sibling;else i&&nb(e)}function pb(t,e,a,n){var i=(a&335544064)===a;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&mu(e);var s=e.flags;switch(e.tag){case 0:case 11:case 15:na(t,e,a,n),s&2048&&Ho(9,e);break;case 1:na(t,e,a,n);break;case 3:na(t,e,a,n),i&&uh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),s&2048&&(s=null,e.alternate!==null&&(s=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==s&&(e.refCount++,s!=null&&zo(s)));break;case 12:if(s&2048){na(t,e,a,n),s=e.stateNode;try{var r=e.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(u){Se(e,e.return,u)}}else na(t,e,a,n);break;case 31:na(t,e,a,n);break;case 13:na(t,e,a,n);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(i&&o!==null&&o.memoizedState===null&&mu(o),r._visibility&2?na(t,e,a,n):po(t,e)):(i&&o!==null&&o.memoizedState!==null&&mu(e),r._visibility&2?na(t,e,a,n):(r._visibility|=2,Cs(t,e,a,n,(e.subtreeFlags&10256)!==0||!1))),s&2048&&gp(o,e);break;case 24:na(t,e,a,n),s&2048&&xp(e.alternate,e);break;case 30:i&&(s=e.alternate,s!==null&&(Ha(s.child,!0),Ha(e.child,!0))),na(t,e,a,n);break;default:na(t,e,a,n)}}function Cs(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:Cs(s,r,o,l,i),Ho(8,r);break;case 23:break;case 22:var c=r.stateNode;r.memoizedState!==null?c._visibility&2?Cs(s,r,o,l,i):po(s,r):(c._visibility|=2,Cs(s,r,o,l,i)),i&&u&2048&&gp(r.alternate,r);break;case 24:Cs(s,r,o,l,i),i&&u&2048&&xp(r.alternate,r);break;default:Cs(s,r,o,l,i)}e=e.sibling}}function po(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:po(a,n),i&2048&&gp(n.alternate,n);break;case 24:po(a,n),i&2048&&xp(n.alternate,n);break;default:po(a,n)}e=e.sibling}}var Ci=8192;function Si(t,e,a){if(t.subtreeFlags&Ci)for(t=t.child;t!==null;)mb(t,e,a),t=t.sibling}function mb(t,e,a){switch(t.tag){case 26:Si(t,e,a),t.flags&Ci&&(t.memoizedState!==null?aC(a,va,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&ev(a,t)));break;case 5:Si(t,e,a),t.flags&Ci&&(t=t.stateNode,(e&335544128)===e&&ev(a,t));break;case 3:case 4:var n=va;va=Eo(t.stateNode.containerInfo),Si(t,e,a),va=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ci,Ci=16777216,Si(t,e,a),Ci=n):Si(t,e,a));break;case 30:if((t.flags&Ci)!==0&&(n=t.memoizedProps.name,n!=null&&n!=="auto")){var i=t.stateNode;i.paired=null,Ht===null&&(Ht=new Map),Ht.set(n,i)}Si(t,e,a);break;default:Si(t,e,a)}}function gb(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function jr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Qe=n,vb(n,t)}gb(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xb(t),t=t.sibling}function xb(t){switch(t.tag){case 0:case 11:case 15:jr(t),t.flags&2048&&ti(9,t,t.return);break;case 3:jr(t);break;case 12:jr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gu(t)):jr(t);break;default:jr(t)}}function gu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Qe=n,vb(n,t)}gb(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ti(8,e,e.return),gu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,gu(e));break;default:gu(e)}t=t.sibling}}function vb(t,e){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:ti(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:zo(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Qe=n;else e:for(a=t;Qe!==null;){n=Qe;var i=n.sibling,s=n.return;if(ob(n),n===a){Qe=null;break e}if(i!==null){i.return=s,Qe=i;break e}Qe=s}}}var $M={getCacheForType:function(t){var e=it(qe),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return it(qe).controller.signal}},ew=typeof WeakMap=="function"?WeakMap:Map,ce=0,Ae=null,te=null,ie=0,be=0,Ft=null,zn=!1,fr=!1,vp=!1,un=0,ze=0,ai=0,Ni=0,qu=0,Vt=0,$s=0,mo=null,It=null,fh=!1,fc=0,yb=0,Xu=1/0,Wu=null,Zn=null,Oe=0,ba=null,ki=null,ka=0,hh=0,ph=null,bb=null,Ws=null,Ys=null,Zs=null,go=0,xu=null;function Wt(){return(ce&2)!==0&&ie!==0?ie&-ie:q.T!==null?bp():wv()}function _b(){if(Vt===0)if((ie&536870912)===0||Q){var t=zl;zl<<=1,(zl&3932160)===0&&(zl=262144),Vt=t}else Vt=536870912;return t=lt.current,t!==null&&(t.flags|=32),Vt}function er(t,e){if(e!=null){var a=t.stateNode,n=a.ref;n===null&&(n=a.ref=Vb(sn(t.memoizedProps,a))),Ys===null&&(Ys=[]),Ys.push(e.bind(null,n))}}function Pt(t,e,a){(t===Ae&&(be===2||be===9)||t.cancelPendingCommit!==null)&&(tr(t,0),kn(t,ie,Vt,!1)),Oo(t,a),((ce&2)===0||t!==Ae)&&(t===Ae&&((ce&2)===0&&(Ni|=a),ze===4&&kn(t,ie,Vt,!1)),Ga(t))}function Sb(t,e,a){if((ce&6)!==0)throw Error(I(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ro(t,e),i=n?nw(t,e):ff(t,e,!0),s=n;do{if(i===0){fr&&!n&&kn(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!tw(a)){i=ff(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=mo;var l=o.current.memoizedState.isDehydrated;if(l&&(tr(o,r).flags|=256),r=ff(o,r,!1),r!==2&&r!==6){if(vp&&!l){o.errorRecoveryDisabledLanes|=s,Ni|=s,i=4;break e}s=It,It=i,s!==null&&(It===null?It=s:It.push.apply(It,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){tr(t,0),kn(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(I(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:kn(n,e,Vt,!zn);break e;case 2:It=null;break;case 3:case 5:break;default:throw Error(I(329))}if((e&62914560)===e&&(i=fc+300-Gt(),10<i)){if(kn(n,e,Vt,!zn),Qu(n,0,!0)!==0)break e;ka=e,n.timeoutHandle=Sp(E0.bind(null,n,a,It,Wu,fh,e,Vt,Ni,$s,zn,s,"Throttled",-0,0),i);break e}E0(n,a,It,Wu,fh,e,Vt,Ni,$s,zn,s,null,-0,0)}}break}while(!0);Ga(t)}function E0(t,e,a,n,i,s,r,o,l,u,c,f,d,h){t.timeoutHandle=-1;var g=e.subtreeFlags,v=(s&335544064)===s;if(f=null,(v||g&8192||(g&16785408)===16785408)&&(f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oa},Ht=null,mb(e,s,f),v&&(g=f,v=t.containerInfo,v=(v.nodeType===9?v:v.ownerDocument).__reactViewTransition,v!=null&&(g.count++,g.waitingForViewTransition=!0,g=Io.bind(g),v.finished.then(g,g))),g=(s&62914560)===s?fc-Gt():(s&4194048)===s?yb-Gt():0,g=nC(f,g),g!==null)){ka=s,t.cancelPendingCommit=g(D0.bind(null,t,e,s,a,n,i,r,o,l,u,c,f,null,d,h)),kn(t,s,r,!u);return}D0(t,e,s,a,n,i,r,o,l,u,c,f)}function tw(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e,a,n){e=yv(t,e),e&=~qu,e&=~Ni,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-Xt(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&_v(t,a,e)}function hc(){return(ce&6)===0?(Vo(0,!1),!1):!0}function yp(){if(te!==null){if(be===0)var t=te.return;else t=te,en=Xi=null,ap(t),Gs=null,Mo=0,t=te;for(;t!==null;)Ky(t.alternate,t),t=t.return;te=null}}function tr(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Mw(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ka=0,yp(),Ae=t,te=a=tn(t.current,null),ie=e,be=0,Ft=null,zn=!1,fr=Ro(t,e),vp=!1,$s=Vt=qu=Ni=ai=ze=0,It=mo=null,fh=!1,un=yv(t,e),nc(),a}function Mb(t,e){j=null,q.H=Fu,e===cr||e===rc?(e=a0(),be=3):e===Zh?(e=a0(),be=4):be=e===cp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ft=e,te===null&&(ze=1,zu(t,la(e,t.current)))}function wb(){var t=lt.current;return t===null?!0:(ie&4194048)===ie?pt===null:(ie&62914560)===ie||(ie&536870912)!==0?t===pt:!1}function Cb(){var t=q.H;return q.H=Fu,t===null?Fu:t}function Ab(){var t=q.A;return q.A=$M,t}function Yu(){ze=4,zn||(ie&4194048)!==ie&&lt.current!==null||(fr=!0),(ai&134217727)===0&&(Ni&134217727)===0||Ae===null||kn(Ae,ie,Vt,!1)}function ff(t,e,a){var n=ce;ce|=2;var i=Cb(),s=Ab();(Ae!==t||ie!==e)&&(Wu=null,tr(t,e)),e=!1;var r=ze;e:do try{if(be!==0&&te!==null){var o=te,l=Ft;switch(be){case 8:yp(),r=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(e=!0);var u=be;if(be=0,Ft=null,Fs(t,o,l,u),a&&fr){r=0;break e}break;default:u=be,be=0,Ft=null,Fs(t,o,l,u)}}aw(),r=ze;break}catch(c){Mb(t,c)}while(!0);return e&&t.shellSuspendCounter++,en=Xi=null,ce=n,q.H=i,q.A=s,te===null&&(Ae=null,ie=0,nc()),r}function aw(){for(;te!==null;)Tb(te)}function nw(t,e){var a=ce;ce|=2;var n=Cb(),i=Ab();Ae!==t||ie!==e?(Wu=null,Xu=Gt()+500,tr(t,e)):fr=Ro(t,e);e:do try{if(be!==0&&te!==null){e=te;var s=Ft;t:switch(be){case 1:be=0,Ft=null,Fs(t,e,s,1);break;case 2:case 9:if(t0(s)){be=0,Ft=null,I0(e);break}e=function(){be!==2&&be!==9||Ae!==t||(be=7),Ga(t)},s.then(e,e);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:t0(s)?(be=0,Ft=null,I0(e)):(be=0,Ft=null,Fs(t,e,s,7));break;case 5:var r=null;switch(te.tag){case 26:r=te.memoizedState;case 5:case 27:var o=te;if(r?Qb(r):o.stateNode.complete){be=0,Ft=null;var l=o.sibling;if(l!==null)te=l;else{var u=o.return;u!==null?(te=u,pc(u)):te=null}break t}}be=0,Ft=null,Fs(t,e,s,5);break;case 6:be=0,Ft=null,Fs(t,e,s,6);break;case 8:yp(),ze=6;break e;default:throw Error(I(462))}}iw();break}catch(c){Mb(t,c)}while(!0);return en=Xi=null,q.H=n,q.A=i,ce=a,te!==null?0:(Ae=null,ie=0,nc(),ze)}function iw(){for(;te!==null&&!_1();)Tb(te)}function Tb(t){var e=jy(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?pc(t):te=e}function I0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=v0(a,e,e.pendingProps,e.type,void 0,ie);break;case 11:e=v0(a,e,e.pendingProps,e.type.render,e.ref,ie);break;case 5:ap(e);var n=e;n===et&&(Q?(Du(n),n.tag===5&&n.stateNode!=null&&(Ie=n.stateNode)):(Du(n),Q=!0));default:Ky(a,e),e=te=Jv(e,un),e=jy(a,e,un)}t.memoizedProps=t.pendingProps,e===null?pc(t):te=e}function Fs(t,e,a,n){en=Xi=null,ap(e),Gs=null,Mo=0;var i=e.return;try{if(XM(t,i,e,a,ie)){ze=1,zu(t,la(a,t.current)),te=null;return}}catch(s){if(i!==null)throw te=i,s;ze=1,zu(t,la(a,t.current)),te=null;return}e.flags&32768?(Q||n===1?t=!0:fr||(ie&536870912)!==0?t=!1:(zn=t=!0,(n===2||n===9||n===3||n===6)&&(n=lt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Lb(e,t)):pc(e)}function pc(t){var e=t;do{if((e.flags&32768)!==0){Lb(e,zn);return}t=e.return;var a=jM(e.alternate,e,un);if(a!==null){te=a;return}if(e=e.sibling,e!==null){te=e;return}te=e=t}while(e!==null);ze===0&&(ze=5)}function Lb(t,e){do{var a=KM(t.alternate,t);if(a!==null){a.flags&=32767,te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){te=t;return}te=t=a}while(t!==null);ze=6,te=null}function D0(t,e,a,n,i,s,r,o,l,u,c,f){t.cancelPendingCommit=null;do mc();while(Oe!==0);if((ce&6)!==0)throw Error(I(327));if(e!==null){if(e===t.current)throw Error(I(177));t===Ae&&(te=Ae=null,ie=0),ki=e,ba=t,ka=a,ph=i,bb=n,sw(t,e,a,r,o,l,f)}}function sw(t,e,a,n,i,s,r){var o=e.lanes|e.childLanes;if(hh=o,o|=Vh,D1(t,a,o,n,i,s),Ys=null,(a&335544064)===a?(Zs=PM(t),n=10262):(Zs=null,n=10256),(e.subtreeFlags&n)!==0||(e.flags&n)!==0?(t.callbackNode=null,t.callbackPriority=0,dw(Au,function(){return vh(),null})):(t.callbackNode=null,t.callbackPriority=0),Vu=!1,n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=q.T,q.T=null,i=de.p,de.p=2,s=ce,ce|=4;try{JM(t,e,a)}finally{ce=s,de.p=i,q.T=n}}Oe=1,Vu?Ws=Ew(r,t.containerInfo,Zs,mh,gh,ow,xh,vh,rw,null,null):(mh(),gh(),xh())}function rw(t){if(Oe!==0){var e=ba.onRecoverableError;e(t,{componentStack:null})}}function ow(){Oe===3&&(Oe=0,hb(ki,ba),Oe=4)}function mh(){if(Oe===1){Oe=0;var t=ba,e=ki,a=ka,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=q.T,q.T=null;var i=de.p;de.p=2;var s=ce;ce|=4;try{ao=Gu=!1,db(e,t,a),a=Sh;var r=Gv(t.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Vv(o.ownerDocument.documentElement,o)){if(l!==null&&Hh(o)){var u=l.start,c=l.end;if(c===void 0&&(c=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(c,o.value.length);else{var f=o.ownerDocument||document,d=f&&f.defaultView||window;if(d.getSelection){var h=d.getSelection(),g=o.textContent.length,v=Math.min(l.start,g),_=l.end===void 0?v:Math.min(l.end,g);!h.extend&&v>_&&(r=_,_=v,v=r);var m=Yx(o,v),x=Yx(o,_);if(m&&x&&(h.rangeCount!==1||h.anchorNode!==m.node||h.anchorOffset!==m.offset||h.focusNode!==x.node||h.focusOffset!==x.offset)){var y=f.createRange();y.setStart(m.node,m.offset),h.removeAllRanges(),v>_?(h.addRange(y),h.extend(x.node,x.offset)):(y.setEnd(x.node,x.offset),h.addRange(y))}}}}for(f=[],h=o;h=h.parentNode;)h.nodeType===1&&f.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var b=f[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}rr=!!_h,Sh=_h=null}finally{ce=s,de.p=i,q.T=n}}t.current=e,Oe=2}}function gh(){if(Oe===2){Oe=0;var t=ba,e=ki,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var n=de.p;de.p=2;var i=ce;ce|=4;try{sb(t,e.alternate,e)}finally{ce=i,de.p=n,q.T=a}}Oe=3}}function xh(){if(Oe===4||Oe===3){Oe=0;var t=Ws;Ws=null,S1();var e=ba,a=ki,n=ka,i=bb,s=(n&335544064)===n?10262:10256;if((a.subtreeFlags&s)!==0||(a.flags&s)!==0?Oe=5:(Oe=0,ki=ba=null,Eb(e,e.pendingLanes)),s=e.pendingLanes,s===0&&(Zn=null),Rh(n),a=a.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Uo,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=q.T,s=de.p,de.p=2,q.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var l=i[o];r(l.value,{componentStack:l.stack})}}finally{q.T=a,de.p=s}}if(i=Ys,r=Zs,Zs=null,i!==null&&(Ys=null,r===null&&(r=[]),t!==null))for(l=0;l<i.length;l++)a=(0,i[l])(r),a!==void 0&&t.finished.finally(a);(ka&3)!==0&&mc(),Ga(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===xu?go++:(go=0,xu=e):(go=0,xu=null),Vo(0,!1)}}function Eb(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,zo(e)))}function mc(){return Ws!==null&&(Ws.skipTransition(),Ws=null),mh(),gh(),xh(),vh()}function vh(){if(Oe!==5)return!1;var t=ba,e=hh;hh=0;var a=Rh(ka),n=q.T,i=de.p;try{de.p=32>a?32:a,q.T=null,a=ph,ph=null;var s=ba,r=ka;if(Oe=0,ki=ba=null,ka=0,(ce&6)!==0)throw Error(I(331));var o=ce;if(ce|=4,xb(s.current),pb(s,s.current,r,a),ce=o,Vo(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Uo,s)}catch{}return!0}finally{de.p=i,q.T=n,Eb(t,e)}}function N0(t,e,a){e=la(a,e),e=Jf(t.stateNode,e,2),t=Xn(t,e,2),t!==null&&(Oo(t,2),Ga(t))}function Se(t,e,a){if(t.tag===3)N0(t,t,a);else for(;e!==null;){if(e.tag===3){N0(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Zn===null||!Zn.has(n))){t=la(a,t),a=qy(2),n=Xn(e,a,2),n!==null&&(Xy(a,n,e,t),Oo(n,2),Ga(n));break}}e=e.return}}function hf(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new ew;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(vp=!0,i.add(a),t=lw.bind(null,t,e,a),e.then(t,t))}function lw(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ae===t&&(ie&a)===a&&((ze===4||ze===3&&(ie&62914560)===ie&&300>Gt()-fc)&&(ce&2)===0?tr(t,0):qu|=a,$s===ie&&($s=0)),Ga(t)}function Ib(t,e){e===0&&(e=bv()),t=qi(t,e),t!==null&&(Oo(t,e),Ga(t))}function uw(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ib(t,a)}function cw(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(I(314))}n!==null&&n.delete(e),Ib(t,a)}function dw(t,e){return Ph(t,e)}var ar=null,As=null,yh=!1,Zu=!1,pf=!1,Hn=0;function Ga(t){t!==As&&t.next===null&&(As===null?ar=As=t:As=As.next=t),Zu=!0,yh||(yh=!0,hw())}function Vo(t,e){if(!pf&&Zu){pf=!0;do for(var a=!1,n=ar;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-Xt(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,P0(n,s))}else s=ie,s=Qu(n,n===Ae?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Ro(n,s)||(a=!0,P0(n,s));n=n.next}while(a);pf=!1}}function fw(){Db()}function Db(){Zu=yh=!1;var t=0;Hn!==0&&Sw()&&(t=Hn);for(var e=Gt(),a=null,n=ar;n!==null;){var i=n.next,s=Nb(n,e);s===0?(n.next=null,a===null?ar=i:a.next=i,i===null&&(As=a)):(a=n,(t!==0||(s&3)!==0)&&(Zu=!0)),n=i}Oe!==0&&Oe!==5||Vo(t,!1),Hn!==0&&(Hn=0)}function Nb(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Xt(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=I1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=Ae,a=ie,a=Qu(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(be===2||be===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Xd(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ro(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Xd(n),Rh(a)){case 2:case 8:a=xv;break;case 32:a=Au;break;case 268435456:a=vv;break;default:a=Au}return n=Pb.bind(null,t),a=Ph(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Xd(n),t.callbackPriority=2,t.callbackNode=null,2}function Pb(t,e){if(Oe!==0&&Oe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(mc()&&t.callbackNode!==a)return null;var n=ie;return n=Qu(t,t===Ae?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Sb(t,n,e),Nb(t,Gt()),t.callbackNode!=null&&t.callbackNode===a?Pb.bind(null,t):null)}function P0(t,e){if(mc())return null;Sb(t,e,!0)}function hw(){ww(function(){(ce&6)!==0?Ph(gv,fw):Db()})}function bp(){if(Hn===0){var t=Oi;t===0&&(t=Fl,Fl<<=1,(Fl&261888)===0&&(Fl=256)),Hn=t}return Hn}function U0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:su(t)}function pw(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=U0((i[Rt]||null).action),r=n.submitter;r&&(e=(e=r[Rt]||null)?U0(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new ec("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Hn!==0){var l=new FormData(i,r);jf(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(i,r),jf(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for($l=0;$l<Ff.length;$l++)eu=Ff[$l],R0=eu.toLowerCase(),O0=eu[0].toUpperCase()+eu.slice(1),_a(R0,"on"+O0);var eu,R0,O0,$l;_a(Xv,"onAnimationEnd");_a(Wv,"onAnimationIteration");_a(Yv,"onAnimationStart");_a("dblclick","onDoubleClick");_a("focusin","onFocus");_a("focusout","onBlur");_a(CM,"onTransitionRun");_a(AM,"onTransitionStart");_a(TM,"onTransitionCancel");_a(Zv,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Ub(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(c){Lu(c)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(c){Lu(c)}i.currentTarget=null,s=l}}}}function ee(t,e){var a=e[Ix];a===void 0&&(a=e[Ix]=new Set);var n=t+"__bubble";a.has(n)||(Rb(e,t,2,!1),a.add(n))}function mf(t,e,a){var n=0;e&&(n|=4),Rb(a,t,n,e)}var tu="_reactListening"+Math.random().toString(36).slice(2);function _p(t){if(!t[tu]){t[tu]=!0,Av.forEach(function(a){a!=="selectionchange"&&(mw.has(a)||mf(a,!1,t),mf(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tu]||(e[tu]=!0,mf("selectionchange",!1,e))}}function Rb(t,e,a,n){switch(s_(e)){case 2:var i=oC;break;case 8:i=lC;break;default:i=Lp}a=i.bind(null,e,a,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function gf(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=Ai(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}Uv(function(){var u=s,c=Bh(a),f=[];e:{var d=jv.get(t);if(d!==void 0){var h=ec,g=t;switch(t){case"keypress":if(ou(a)===0)break e;case"keydown":case"keyup":h=tM;break;case"focusin":g="focus",h=Jd;break;case"focusout":g="blur",h=Jd;break;case"beforeblur":case"afterblur":h=Jd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Fx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=G1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=rM;break;case Xv:case Wv:case Yv:h=W1;break;case Zv:h=lM;break;case"scroll":case"scrollend":h=H1;break;case"wheel":h=cM;break;case"copy":case"cut":case"paste":h=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=kx;break;case"submit":h=iM;break;case"toggle":case"beforetoggle":h=fM}var v=(e&4)!==0,_=!v&&(t==="scroll"||t==="scrollend"),m=v?d!==null?d+"Capture":null:d;v=[];for(var x=u,y;x!==null;){var b=x;if(y=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||y===null||m===null||(b=vo(x,m),b!=null&&v.push(To(x,b,y))),_)break;x=x.return}0<v.length&&(d=new h(d,g,null,a,c),f.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",h&&a!==Pf&&(g=a.relatedTarget||a.fromElement)&&(Ai(g)||g[lr]))break e;(d||h)&&(g=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,d?(h=a.relatedTarget||a.toElement,d=u,h=h?Ai(h):null,h!==null&&(_=Po(h),v=h.tag,h!==_||v!==5&&v!==27&&v!==6)&&(h=null)):(d=null,h=u),d!==h&&(v=Fx,b="onMouseLeave",m="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=kx,b="onPointerLeave",m="onPointerEnter",x="pointer"),_=d==null?g:eo(d),y=h==null?g:eo(h),g=new v(b,x+"leave",d,a,c),g.target=_,g.relatedTarget=y,b=null,Ai(c)===u&&(v=new v(m,x+"enter",h,a,c),v.target=y,v.relatedTarget=_,b=v),_=b,v=d&&h?_f(d,h,gw):null,d!==null&&B0(f,g,d,v,!1),h!==null&&_!==null&&B0(f,_,h,v,!0)))}e:{if(d=u?eo(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var C=qx;else if(Gx(d))if(kv)C=SM;else{C=bM;var T=yM}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&Oh(u.elementType)&&(C=qx):C=_M;if(C&&(C=C(t,u))){zv(f,C,a,c);break e}T&&T(t,d,u)}switch(T=u?eo(u):window,t){case"focusin":(Gx(T)||T.contentEditable==="true")&&(Ns=T,Of=u,so=null);break;case"focusout":so=Of=Ns=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,Zx(f,a,c);break;case"selectionchange":if(wM)break;case"keydown":case"keyup":Zx(f,a,c)}var L;if(kh)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ds?Bv(t,a)&&(A="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(A="onCompositionStart");A&&(Ov&&a.locale!=="ko"&&(Ds||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ds&&(L=Rv()):(Bn=c,Fh="value"in Bn?Bn.value:Bn.textContent,Ds=!0)),T=ju(u,A),0<T.length&&(A=new zx(A,t,null,a,c),f.push({event:A,listeners:T}),L?A.data=L:(L=Fv(a),L!==null&&(A.data=L)))),(L=pM?mM(t,a):gM(t,a))&&(A=ju(u,"onBeforeInput"),0<A.length&&(T=new zx("onBeforeInput","beforeinput",null,a,c),f.push({event:T,listeners:A}),T.data=L)),pw(f,t,u,a,c)}Ub(f,e)})}function To(t,e,a){return{instance:t,listener:e,currentTarget:a}}function ju(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=vo(t,a),i!=null&&n.unshift(To(t,i,s)),i=vo(t,e),i!=null&&n.push(To(t,i,s))),t.tag===3)return n;t=t.return}return[]}function gw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B0(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=vo(a,s),u!=null&&r.unshift(To(a,u,l))):i||(u=vo(a,s),u!=null&&r.push(To(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var xw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function F0(t){return(typeof t=="string"?t:""+t).replace(xw,`
`).replace(vw,"")}function Ob(t,e){return e=F0(e),F0(t)===e}function _e(t,e,a,n,i,s){switch(a){case"children":if(typeof n=="string")e==="body"||e==="textarea"&&n===""||Js(t,n);else if(typeof n=="number"||typeof n=="bigint")e!=="body"&&Js(t,""+n);else return;break;case"className":Hl(t,"class",n);break;case"tabIndex":Hl(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(t,a,n);break;case"style":Pv(t,n,s);return;case"data":if(e!=="object"){Hl(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=su(n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&_e(t,e,"name",i.name,i,null),_e(t,e,"formEncType",i.formEncType,i,null),_e(t,e,"formMethod",i.formMethod,i,null),_e(t,e,"formTarget",i.formTarget,i,null)):(_e(t,e,"encType",i.encType,i,null),_e(t,e,"method",i.method,i,null),_e(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=su(n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Oa);return;case"onScroll":n!=null&&ee("scroll",t);return;case"onScrollEnd":n!=null&&ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(I(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(I(60));s?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=su(n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":ee("beforetoggle",t),ee("toggle",t),iu(t,"popover",n);break;case"xlinkActuate":Ja(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ja(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ja(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ja(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ja(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ja(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ja(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ja(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ja(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":iu(t,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=z1.get(a)||a,iu(t,a,n);else return}ue=!0}function bh(t,e,a,n,i,s){switch(a){case"style":Pv(t,n,s);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(I(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(I(60));s?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof n=="string")Js(t,n);else if(typeof n=="number"||typeof n=="bigint")Js(t,""+n);else return;break;case"onScroll":n!=null&&ee("scroll",t);return;case"onScrollEnd":n!=null&&ee("scrollend",t);return;case"onClick":n!=null&&(t.onclick=Oa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Tv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),s=a.slice(2,i?a.length-7:void 0),e=t[Rt]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(s,e,i),typeof n=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,n,i);break e}ue=!0,a in t?t[a]=n:n===!0?t.setAttribute(a,""):iu(t,a,n)}return}ue=!0}function ot(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",t),ee("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(I(137,e));default:_e(t,e,s,r,a,null)}}i&&_e(t,e,"srcSet",a.srcSet,a,null),n&&_e(t,e,"src",a.src,a,null);return;case"input":ee("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var c=a[n];if(c!=null)switch(n){case"name":i=c;break;case"type":r=c;break;case"checked":l=c;break;case"defaultChecked":u=c;break;case"value":s=c;break;case"defaultValue":o=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(I(137,e));break;default:_e(t,e,n,c,a,null)}}Iv(t,s,o,l,u,r,i,!1);return;case"select":ee("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:_e(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?ks(t,!!n,e,!1):a!=null&&ks(t,!!n,a,!0);return;case"textarea":ee("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(I(91));break;default:_e(t,e,r,o,a,null)}Nv(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":_e(t,e,l,n,a,null));return;case"dialog":ee("beforetoggle",t),ee("toggle",t),ee("cancel",t),ee("close",t);break;case"iframe":case"object":ee("load",t);break;case"video":case"audio":for(n=0;n<Ao.length;n++)ee(Ao[n],t);break;case"image":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"embed":case"source":case"link":ee("error",t),ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(I(137,e));default:_e(t,e,u,n,a,null)}return;default:if(Oh(e)){for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!==void 0&&bh(t,e,c,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&_e(t,e,o,n,a,null))}var yw={};function bw(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,c=null;for(h in a){var f=a[h];if(a.hasOwnProperty(h)&&f!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=f;default:n.hasOwnProperty(h)||_e(t,e,h,null,n,f)}}for(var d in n){var h=n[d];if(f=a[d],n.hasOwnProperty(d)&&(h!=null||f!=null))switch(d){case"type":h!==f&&(ue=!0),s=h;break;case"name":h!==f&&(ue=!0),i=h;break;case"checked":h!==f&&(ue=!0),u=h;break;case"defaultChecked":h!==f&&(ue=!0),c=h;break;case"value":h!==f&&(ue=!0),r=h;break;case"defaultValue":h!==f&&(ue=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(I(137,e));break;default:h!==f&&_e(t,e,d,h,n,f)}}Nf(t,r,o,l,u,c,s,i);return;case"select":h=r=o=d=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||_e(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":s!==l&&(ue=!0),d=s;break;case"defaultValue":s!==l&&(ue=!0),o=s;break;case"multiple":s!==l&&(ue=!0),r=s;default:s!==l&&_e(t,e,i,s,n,l)}e=o,a=r,n=h,d!=null?ks(t,!!a,d,!1):!!n!=!!a&&(e!=null?ks(t,!!a,e,!0):ks(t,!!a,a?[]:"",!1));return;case"textarea":h=d=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":i!==s&&(ue=!0),d=i;break;case"defaultValue":i!==s&&(ue=!0),h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(I(91));break;default:i!==s&&_e(t,e,r,i,n,s)}Dv(t,d,h);return;case"option":for(var g in a)d=a[g],a.hasOwnProperty(g)&&d!=null&&!n.hasOwnProperty(g)&&(g==="selected"?t.selected=!1:_e(t,e,g,null,n,d));for(l in n)d=n[l],h=a[l],n.hasOwnProperty(l)&&d!==h&&(d!=null||h!=null)&&(l==="selected"?(d!==h&&(ue=!0),t.selected=d&&typeof d!="function"&&typeof d!="symbol"):_e(t,e,l,d,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in a)d=a[v],a.hasOwnProperty(v)&&d!=null&&!n.hasOwnProperty(v)&&_e(t,e,v,null,n,d);for(u in n)if(d=n[u],h=a[u],n.hasOwnProperty(u)&&d!==h&&(d!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(I(137,e));break;default:_e(t,e,u,d,n,h)}return;default:if(Oh(e)){for(var _ in a)d=a[_],a.hasOwnProperty(_)&&d!==void 0&&!n.hasOwnProperty(_)&&bh(t,e,_,void 0,n,d);for(c in n)d=n[c],h=a[c],!n.hasOwnProperty(c)||d===h||d===void 0&&h===void 0||bh(t,e,c,d,n,h);return}}for(var m in a)d=a[m],a.hasOwnProperty(m)&&d!=null&&!n.hasOwnProperty(m)&&_e(t,e,m,null,n,d);for(f in n)d=n[f],h=a[f],!n.hasOwnProperty(f)||d===h||d==null&&h==null||_e(t,e,f,d,n,h)}function z0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _w(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&z0(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var c=l.transferSize,f=l.initiatorType;c&&z0(f)&&(l=l.responseEnd,r+=c*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _h=null,Sh=null;function Lo(t){return t.nodeType===9?t:t.ownerDocument}function k0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bb(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Fb(t,e,a,n){return a=Lo(a).createElement(t),a[nt]=n,a[Rt]=e,ot(a,t,e),$e(a),a}function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=null;function Sw(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var Sp=typeof setTimeout=="function"?setTimeout:void 0,Mw=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,V0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Sp,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(t){return H0.resolve(null).then(t).catch(Cw)}:Sp;function Cw(t){setTimeout(function(){throw t})}function ii(t){return t==="head"}function G0(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),or(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")yf(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yf(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Bo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&yf(t.ownerDocument.body);a=i}while(a);or(e)}function q0(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function zb(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var n=1;else for(var i=n=0;i<e.length;i++){var s=e[i];0<s.width&&0<s.height&&n++}n===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function kb(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Hb(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function wh(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return Hb(e,a,t)}function Aw(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return Hb(e,a,t)}function Tw(t){return t.documentElement.clientHeight}function Lw(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Ew(t,e,a,n,i,s,r,o,l){var u=e.nodeType===9?e:e.ownerDocument;try{var c=u.startViewTransition({update:function(){var d=u.defaultView,h=d.navigation&&d.navigation.transition,g=u.fonts.status;n();var v=[];if(g==="loaded"&&(Tw(u),u.fonts.status==="loading"&&v.push(u.fonts.ready)),g=v.length,t!==null)for(var _=t.suspenseyImages,m=0,x=0;x<_.length;x++){var y=_[x];if(!y.complete){var b=y.getBoundingClientRect();if(0<b.bottom&&0<b.right&&b.top<d.innerHeight&&b.left<d.innerWidth){if(m+=$b(y),m>bu){v.length=g;break}y=new Promise(Lw.bind(y)),v.push(y)}}}if(0<v.length)return d=Promise.race([Promise.all(v),new Promise(function(C){return setTimeout(C,500)})]).then(i,i),(h?Promise.allSettled([h.finished,d]):d).then(s,s);if(i(),h)return h.finished.then(s,s);s()},types:a});u.__reactViewTransition=c;var f=[];return c.ready.then(function(){for(var d=u.documentElement.getAnimations({subtree:!0}),h=0;h<d.length;h++){var g=d[h],v=g.effect,_=v.pseudoElement;if(_!=null&&_.startsWith("::view-transition")){f.push(g),g=v.getKeyframes();for(var m=_=void 0,x=!0,y=0;y<g.length;y++){var b=g[y],C=b.width;if(_===void 0)_=C;else if(_!==C){x=!1;break}if(C=b.height,m===void 0)m=C;else if(m!==C){x=!1;break}delete b.width,delete b.height,b.transform==="none"&&delete b.transform}x&&_!==void 0&&m!==void 0&&(v.setKeyframes(g),x=getComputedStyle(v.target,v.pseudoElement),x.width!==_||x.height!==m)&&(x=g[0],x.width=_,x.height=m,x=g[g.length-1],x.width=_,x.height=m,v.setKeyframes(g))}}r()},function(d){u.__reactViewTransition===c&&(u.__reactViewTransition=null);try{typeof d=="object"&&d!==null&&d.name==="InvalidStateError"&&(d.message==="View transition was skipped because document visibility state is hidden."||d.message==="Skipping view transition because document visibility state has become hidden."||d.message==="Skipping view transition because viewport size changed."||d.message==="Transition was aborted because of invalid state")&&(d=null),d!==null&&l(d)}finally{n(),i(),r()}}),c.finished.finally(function(){for(var d=0;d<f.length;d++)f[d].cancel();u.__reactViewTransition===c&&(u.__reactViewTransition=null),o()}),c}catch{return n(),i(),r(),null}}function Ti(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ti.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Te({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Ti.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),n=[],i=0;i<a.length;i++){var s=a[i].effect;s!==null&&s.target===t&&s.pseudoElement===e&&n.push(a[i])}return n};Ti.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Vb(t){return{name:t,group:new Ti("group",t),imagePair:new Ti("image-pair",t),old:new Ti("old",t),new:new Ti("new",t)}}function Zt(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Zt.prototype.addEventListener=function(t,e,a){var n=null,i=null;if(!(a!=null&&typeof a!="boolean"&&(n=a.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(Gb(s,t,e,a)===-1){var r=this,o=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(o=function(l){r.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),n!==null&&(i=r.removeEventListener.bind(r,t,e,a),n.addEventListener("abort",i,{once:!0}),i=n.removeEventListener.bind(n,"abort",i)),n=nr(a),s.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:o,cleanup:i}),Ut(this._fragmentFiber.child,!1,Iw,t,o,n)}this._eventListeners=s}};function Iw(t,e,a,n){return Ze(t).addEventListener(e,a,n),!1}Zt.prototype.removeEventListener=function(t,e,a){var n=this._eventListeners;if(n!==null&&(e=Gb(n,t,e,a),e!==-1)){var i=n[e];a=i.attachedListener;var s=i.cleanup;i=nr(i.optionsOrUseCapture),Ut(this._fragmentFiber.child,!1,Dw,t,a,i),n.splice(e,1),s!==null&&s()}};function Dw(t,e,a,n){return Ze(t).removeEventListener(e,a,n),!1}function nr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function X0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Gb(t,e,a,n){if(t.length===0)return-1;n=X0(n);for(var i=0;i<t.length;i++){var s=t[i];if(s.type===e&&s.listener===a&&X0(s.optionsOrUseCapture)===n)return i}return-1}Zt.prototype.dispatchEvent=function(t){var e=Hi(this._fragmentFiber);if(e===null)return!0;e=Ze(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var n=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var i=0;i<a.length;i++){var s=a[i];n.addEventListener(s.type,s.attachedListener,nr(s.optionsOrUseCapture))}if(e.appendChild(n),t=n.dispatchEvent(t),a)for(i=0;i<a.length;i++)s=a[i],n.removeEventListener(s.type,s.attachedListener,nr(s.optionsOrUseCapture));return e.removeChild(n),t}return e.dispatchEvent(t)};Zt.prototype.focus=function(t){Ut(this._fragmentFiber.child,!0,qb,t,void 0,void 0)};function qb(t,e){return t.tag===6?!1:(t=Ze(t),Gw(t,e))}Zt.prototype.focusLast=function(t){var e=[];Ut(this._fragmentFiber.child,!0,Mp,e,void 0,void 0);for(var a=e.length-1;0<=a&&!qb(e[a],t);a--);};function Mp(t,e){return e.push(t),!1}Zt.prototype.blur=function(){var t=Hi(this._fragmentFiber);t!==null&&(t=Ze(t),t=Lo(t).activeElement,t!==null&&Ut(this._fragmentFiber.child,!1,Nw,t,void 0,void 0))};function Nw(t,e){return t.tag===6?!1:(t=Ze(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Zt.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),Ut(this._fragmentFiber.child,!1,Pw,t,void 0,void 0)};function Pw(t,e){return t.tag===6||(t=Ze(t),e.observe(t)),!1}Zt.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),Ut(this._fragmentFiber.child,!1,Uw,t,void 0,void 0);for(var a=e=0;a<ya.length;a++){var n=ya[a];n.fragmentInstance===this&&n.observer===t?t.unobserve(n.instance):ya[e++]=n}ya.length=e}};function Uw(t,e){return t.tag===6||(t=Ze(t),e.unobserve(t)),!1}var ya=[],vf=!1;function Rw(t,e,a){ya.push({fragmentInstance:t,observer:e,instance:a}),vf||(vf=!0,qw(function(){vf=!1;var n=ya;ya=[];for(var i=0;i<n.length;i++){var s=n[i];s.observer.unobserve(s.instance)}}))}Zt.prototype.getClientRects=function(){var t=[];return Ut(this._fragmentFiber.child,!1,Ow,t,void 0,void 0),t};function Ow(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=Ze(t),e.push.apply(e,t.getClientRects());return!1}Zt.prototype.getRootNode=function(t){var e=Hi(this._fragmentFiber);return e===null?this:Ze(e).getRootNode(t)};Zt.prototype.compareDocumentPosition=function(t){var e=Hi(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];Ut(this._fragmentFiber.child,!1,Mp,a,void 0,void 0);var n=Ze(e);if(a.length===0){if(a=n,wx(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var i=n=a.compareDocumentPosition(t);return a===t?i=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=fv(e)[1],a===null?i=Node.DOCUMENT_POSITION_PRECEDING:(t=Ze(a).compareDocumentPosition(t),i=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Ze(a[0]),i=Ze(a[a.length-1]);var s=wx(this._fragmentFiber)?e.parentElement:n;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=s.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=i.compareDocumentPosition(t),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=n&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=n&&e===t||s&&i===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&e===t||!s&&i===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Bw(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Bw(t,e,a,n,i){var s=Ai(i);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===e||s.alternate===e)){a=!0;break e}s=s.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=i.ownerDocument,i===s||i===s.documentElement||i===s.body;e:{for(s=e,e=Hi(e);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==e&&s.alternate!==e)){s=!0;break e}s=s.return}s=!1}return s}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!s)&&!(e=s===a)&&(e=_f(a,s,Cx),e===null?e=!1:(Ut(e,!0,h1,s,a),s=Ts,Ts=null,e=s!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!s)&&!(e=s===n)&&(e=_f(n,s,Cx),e===null?e=!1:(Ut(e,!0,p1,s,n),s=Ts,bf=Ts=null,e=s!==null)),e):!1}function W0(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Zt.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(I(566));var e=[];Ut(this._fragmentFiber.child,!1,Mp,e,void 0,void 0);var a=t!==!1;if(e.length===0){var n=fv(this._fragmentFiber);if(n=a?n[1]||n[0]||Hi(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){t=Ze(n),W0(t,a);return}if(n=Ze(n),n.nodeType!==9){if(n.nodeType===11){a="host"in n?n.host:null,a!==null&&a.scrollIntoView(t);return}n.scrollIntoView(t)}}for(n=a?e.length-1:0;n!==(a?-1:e.length);){var i=e[n];i.tag===6?(i=Ze(i),W0(i,a)):Ze(i).scrollIntoView(t),n+=a?-1:1}};function Fw(t,e){return t=Ze(t),Xb(t,e),!1}function Xb(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function Wb(t,e){var a=e._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];t.addEventListener(i.type,i.attachedListener,nr(i.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(s){for(var r=0,o=0;o<ya.length;o++){var l=ya[o];(l.fragmentInstance!==e||l.observer!==s||l.instance!==t)&&(ya[r++]=l)}ya.length=r,s.observe(t)}),Xb(t,e))}function zw(t,e){var a=e._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];t.removeEventListener(i.type,i.attachedListener,nr(i.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(s){typeof s.rootMargin=="string"?Rw(e,s,t):s.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Ch(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ch(a),$u(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function kw(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Bo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=ca(t.nextSibling),t===null)break}return null}function Hw(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ca(t.nextSibling),t===null))return null;return t}function Yb(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ca(t.nextSibling),t===null))return null;return t}function Ah(t){return t.data==="$?"||t.data==="$~"}function wp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Vw(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function ca(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Th=null;function Y0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return ca(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Z0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Gw(t,e){function a(){n=!0}if(t.ownerDocument.activeElement===t)return!0;var n=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return n}function qw(t){V0(function(){V0(function(e){return t(e)})})}function Zb(t,e,a){switch(e=Lo(a),t){case"html":if(t=e.documentElement,!t)throw Error(I(452));return t;case"head":if(t=e.head,!t)throw Error(I(453));return t;case"body":if(t=e.body,!t)throw Error(I(454));return t;default:throw Error(I(451))}}function jb(t,e,a){for(var n in a){var i=a[n];a.hasOwnProperty(n)&&i!=null&&_e(t,e,n,null,yw,i)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oa&&(t.onclick=null),$u(t)}function yf(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$u(t)}var da=new Map,j0=new Set;function Eo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var fn=de.d;de.d={f:Xw,r:Ww,D:Yw,C:Zw,L:jw,m:Kw,X:Qw,S:Jw,M:$w};function Xw(){var t=fn.f(),e=hc();return t||e}function Ww(t){var e=ur(t);e!==null&&e.tag===5&&e.type==="form"?Py(e):fn.r(t)}var hr=typeof document>"u"?null:document;function Kb(t,e,a){var n=hr;if(n&&typeof e=="string"&&e){var i=oa(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),j0.has(i)||(j0.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),ot(e,"link",t),$e(e),n.head.appendChild(e)))}}function Yw(t){fn.D(t),Kb("dns-prefetch",t,null)}function Zw(t,e){fn.C(t,e),Kb("preconnect",t,e)}function jw(t,e,a){fn.L(t,e,a);var n=hr;if(n&&t&&e){var i='link[rel="preload"][as="'+oa(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+oa(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+oa(a.imageSizes)+'"]')):i+='[href="'+oa(t)+'"]';var s=i;switch(e){case"style":s=ir(t);break;case"script":s=pr(t)}if(!(da.has(s)||(t=Te({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),da.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Go(s))||e==="script"&&n.querySelector(qo(s))))){var r=n.createElement("link");ot(r,"link",t),e==="style"&&(r[Tu]=!0,r.onload=r.onerror=function(){Cv(r)}),$e(r),n.head.appendChild(r)}}}function Kw(t,e){fn.m(t,e);var a=hr;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+oa(n)+'"][href="'+oa(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pr(t)}if(!da.has(s)&&(t=Te({rel:"modulepreload",href:t},e),da.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qo(s)))return}n=a.createElement("link"),ot(n,"link",t),$e(n),a.head.appendChild(n)}}}function Jw(t,e,a){fn.S(t,e,a);var n=hr;if(n&&t){var i=zs(n).hoistableStyles,s=ir(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(Go(s)))o.loading=5;else{t=Te({rel:"stylesheet",href:t,"data-precedence":e},a),(a=da.get(s))&&Cp(t,a);var l=r=n.createElement("link");$e(l),ot(l,"link",t),l._p=new Promise(function(u,c){l.onload=u,l.onerror=c}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,vu(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function Qw(t,e){fn.X(t,e);var a=hr;if(a&&t){var n=zs(a).hoistableScripts,i=pr(t),s=n.get(i);s||(s=a.querySelector(qo(i)),s||(t=Te({src:t,async:!0},e),(e=da.get(i))&&Ap(t,e),s=a.createElement("script"),$e(s),ot(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function $w(t,e){fn.M(t,e);var a=hr;if(a&&t){var n=zs(a).hoistableScripts,i=pr(t),s=n.get(i);s||(s=a.querySelector(qo(i)),s||(t=Te({src:t,async:!0,type:"module"},e),(e=da.get(i))&&Ap(t,e),s=a.createElement("script"),$e(s),ot(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function K0(t,e,a,n){var i=(i=Vn.current)?Eo(i):null;if(!i)throw Error(I(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=ir(a.href),e=zs(i).hoistableStyles,n=e.get(a),n||(n={type:"style",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ir(a.href);var s=zs(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Go(t)))?s._p||(r.instance=s,r.state.loading=5):(s=da.get(t),s||(s={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},da.set(t,s)),eC(i,t,s,r.state))),e&&n===null)throw Error(I(528,""));return r}if(e&&n!==null)throw Error(I(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=pr(a),e=zs(i).hoistableScripts,n=e.get(a),n||(n={type:"script",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(I(444,t))}}function ir(t){return'href="'+oa(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function Jb(t){return Te({},t,{"data-precedence":t.precedence,precedence:null})}function eC(t,e,a,n){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Tu]!==!0){n.loading=1;return}}else e=t.createElement("link"),e[Tu]=!0,e.onload=e.onerror=Cv.bind(null,e),ot(e,"link",a),$e(e),t.head.appendChild(e);n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2})}function pr(t){return'[src="'+oa(t)+'"]'}function qo(t){return"script[async]"+t}function J0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+oa(a.href)+'"]');if(n)return e.instance=n,$e(n),n;var i=Te({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),$e(n),ot(n,"style",i),vu(n,a.precedence,t),e.instance=n;case"stylesheet":i=ir(a.href);var s=t.querySelector(Go(i));if(s)return e.state.loading|=4,e.instance=s,$e(s),s;n=Jb(a),(i=da.get(i))&&Cp(n,i),s=(t.ownerDocument||t).createElement("link"),$e(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ot(s,"link",n),e.state.loading|=4,vu(s,a.precedence,t),e.instance=s;case"script":return s=pr(a.src),(i=t.querySelector(qo(s)))?(e.instance=i,$e(i),i):(n=a,(i=da.get(s))&&(n=Te({},a),Ap(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),$e(i),ot(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(I(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,vu(n,a.precedence,t));return e.instance}function vu(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Cp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ap(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var yu=null;function Q0(t,e,a){if(yu===null){var n=new Map,i=yu=new Map;i.set(a,n)}else i=yu,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[Bo]||s[nt]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function Lh(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function tC(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function $0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Qb(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $b(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ev(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=$b(e),t.suspenseyImages.push(e)),t=iC.bind(t),e.decode().then(t,t))}function aC(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=ir(n.href),s=e.querySelector(Go(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Io.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,$e(s);return}s=e.ownerDocument||e,n=Jb(n),(i=da.get(i))&&Cp(n,i),s=s.createElement("link"),$e(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ot(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Io.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var bu=0;function nC(t,e){return t.stylesheets&&t.count===0&&_u(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&_u(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&bu===0&&(bu=62500*_w());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_u(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>bu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function e_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)_u(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Io(){this.count--,e_(this)}function iC(){this.imgCount--,e_(this)}var Ku=null;function _u(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ku=new Map,e.forEach(sC,t),Ku=null,Io.call(t))}function sC(t,e){if(!(e.state.loading&4)){var a=Ku.get(t);if(a)var n=a.get(null);else{a=new Map,Ku.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=Io.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var sr={$$typeof:Ra,Provider:null,Consumer:null,_currentValue:Li,_currentValue2:Li,_threadCount:0};function rC(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.hiddenUpdates=Wd(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function t_(t,e,a,n,i,s,r,o,l,u,c,f){return t=new rC(t,e,a,r,l,u,c,f,o),e=1,s===!0&&(e|=24),s=Nt(3,null,null,e),t.current=s,s.stateNode=t,e=Wh(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},jh(s),t}function a_(t){return t?(t=Rs,t):Rs}function n_(t,e,a,n,i,s){i=a_(i),n.context===null?n.context=i:n.pendingContext=i,n=qn(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Xn(t,n,e),a!==null&&(Pt(a,t,e),oo(a,t,e))}function tv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Tp(t,e){tv(t,e),(t=t.alternate)&&tv(t,e)}function i_(t){if(t.tag===13||t.tag===31){var e=qi(t,67108864);e!==null&&Pt(e,t,67108864),Tp(t,67108864)}}function av(t){if(t.tag===13||t.tag===31){var e=Wt();e=Uh(e);var a=qi(t,e);a!==null&&Pt(a,t,e),Tp(t,e)}}var rr=!0;function oC(t,e,a,n){var i=q.T;q.T=null;var s=de.p;try{de.p=2,Lp(t,e,a,n)}finally{de.p=s,q.T=i}}function lC(t,e,a,n){var i=q.T;q.T=null;var s=de.p;try{de.p=8,Lp(t,e,a,n)}finally{de.p=s,q.T=i}}function Lp(t,e,a,n){if(rr){var i=Eh(n);if(i===null)gf(t,e,n,Ju,a),nv(t,n);else if(cC(i,t,e,a,n))n.stopPropagation();else if(nv(t,n),e&4&&-1<uC.indexOf(t)){for(;i!==null;){var s=ur(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Mi(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Xt(r);o.entanglements[1]|=l,r&=~l}Ga(s),(ce&6)===0&&(Xu=Gt()+500,Vo(0,!1))}}break;case 31:case 13:o=qi(s,2),o!==null&&Pt(o,s,2),hc(),Tp(s,2)}if(s=Eh(n),s===null&&gf(t,e,n,Ju,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else gf(t,e,n,null,a)}}function Eh(t){return t=Bh(t),Ep(t)}var Ju=null;function Ep(t){if(Ju=null,t=Ai(t),t!==null){var e=Po(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=uv(e),t!==null)return t;t=null}else if(a===31){if(t=cv(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ju=t,null}function s_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(M1()){case gv:return 2;case xv:return 8;case Au:case w1:return 32;case vv:return 268435456;default:return 32}default:return 32}}var Ih=!1,jn=null,Kn=null,Jn=null,Do=new Map,No=new Map,Rn=[],uC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(t,e){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Kr(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ur(e),e!==null&&i_(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cC(t,e,a,n,i){switch(e){case"focusin":return jn=Kr(jn,t,e,a,n,i),!0;case"dragenter":return Kn=Kr(Kn,t,e,a,n,i),!0;case"mouseover":return Jn=Kr(Jn,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,Kr(Do.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,Kr(No.get(s)||null,t,e,a,n,i)),!0}return!1}function r_(t){var e=Ai(t.target);if(e!==null){var a=Po(e);if(a!==null){if(e=a.tag,e===13){if(e=uv(a),e!==null){t.blockedOn=e,Ex(t.priority,function(){av(a)});return}}else if(e===31){if(e=cv(a),e!==null){t.blockedOn=e,Ex(t.priority,function(){av(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Eh(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Pf=n,a.target.dispatchEvent(n),Pf=null}else return e=ur(a),e!==null&&i_(e),t.blockedOn=a,!1;e.shift()}return!0}function iv(t,e,a){Su(t)&&a.delete(e)}function dC(){Ih=!1,jn!==null&&Su(jn)&&(jn=null),Kn!==null&&Su(Kn)&&(Kn=null),Jn!==null&&Su(Jn)&&(Jn=null),Do.forEach(iv),No.forEach(iv)}function au(t,e){t.blockedOn===e&&(t.blockedOn=null,Ih||(Ih=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,dC)))}var nu=null;function sv(t){nu!==t&&(nu=t,je.unstable_scheduleCallback(je.unstable_NormalPriority,function(){nu===t&&(nu=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Ep(n||a)===null)continue;break}var s=ur(a);s!==null&&(t.splice(e,3),e-=3,jf(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function or(t){function e(l){return au(l,t)}jn!==null&&au(jn,t),Kn!==null&&au(Kn,t),Jn!==null&&au(Jn,t),Do.forEach(e),No.forEach(e);for(var a=0;a<Rn.length;a++){var n=Rn[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Rn.length&&(a=Rn[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&Rn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[Rt]||null;if(typeof s=="function")r||sv(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Rt]||null)o=r.formAction;else if(Ep(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),sv(a)}}}function o_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Ip(t){this._internalRoot=t}gc.prototype.render=Ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));var a=e.current,n=Wt();n_(a,n,t,e,null,null)};gc.prototype.unmount=Ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;n_(t.current,2,null,t,null,null),hc(),e[lr]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=wv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Rn.length&&e!==0&&e<Rn[a].priority;a++);Rn.splice(a,0,t),a===0&&r_(t)}};var rv=ov.version;if(rv!=="19.3.0")throw Error(I(527,rv,"19.3.0"));de.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=f1(e),t=t!==null?dv(t):null,t=t===null?null:t.stateNode,t};var fC={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Jr.isDisabled&&Jr.supportsFiber))try{Uo=Jr.inject(fC),qt=Jr}catch{}var Jr;xc.createRoot=function(t,e){if(!lv(t))throw Error(I(299));var a=!1,n="",i=Hy,s=Vy,r=Gy;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=t_(t,1,!1,null,null,a,n,null,i,s,r,o_),t[lr]=e.current,_p(t),new Ip(e)};xc.hydrateRoot=function(t,e,a){if(!lv(t))throw Error(I(299));var n=!1,i="",s=Hy,r=Vy,o=Gy,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=t_(t,1,!0,e,a??null,n,i,l,s,r,o,o_),e.context=a_(null),a=e.current,n=Wt(),n=Uh(n),i=qn(n),i.callback=null,Xn(a,i,n),a=n,e.current.lanes=a,Oo(e,a),Ga(e),t[lr]=e.current,_p(t),new gc(e)};xc.version="19.3.0"});var d_=Tn((WE,c_)=>{"use strict";function u_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u_)}catch(t){console.error(t)}}u_(),c_.exports=l_()});var Gp={};qg(Gp,{default:()=>T_});function T_({product:t}){let e=(0,oi.useRef)(null),a=t?.modelDemo||!t?.modelUrl,n=()=>e.current?.contentWindow?.postMessage({type:"florenza:product",viewer:t?.viewer||{},product:a?null:{name:t.name,modelUrl:t.modelUrl,usdzUrl:t.usdzUrl,width:t.width,depth:t.depth,height:t.height,viewer:t.viewer||{}}},window.location.origin);return(0,oi.useEffect)(()=>{let i=s=>{s.origin===window.location.origin&&s.source===e.current?.contentWindow&&s.data?.type==="florenza:ready"&&n()};return window.addEventListener("message",i),n(),()=>window.removeEventListener("message",i)},[t]),oi.default.createElement("section",{className:"mobile-sofa-integration"},a&&oi.default.createElement("p",{className:"preview-model-note"},"Sof\xE1 de prueba de Florenza VR. Esta referencia a\xFAn no tiene su modelo propio cargado; sus medidas y colores pueden ser diferentes."),oi.default.createElement("iframe",{key:`${t?.id}:${a}:${t?.modelUrl}`,ref:e,onLoad:n,title:`Vista 3D \xB7 ${t?.name||"Sof\xE1"}`,src:"./index.html?integrado=1",allow:"xr-spatial-tracking; fullscreen",allowFullScreen:!0,style:{width:"100%",height:"min(76dvh,850px)",minHeight:450,border:0,borderRadius:12}}))}var oi,qp=gs(()=>{"use client";oi=me(le())});function KC(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function JC(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Om(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oS(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Re(...t){t=oS(t);let e="THREE."+t.shift();if(Zc)Zc("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Be(...t){t=oS(t);let e="THREE."+t.shift();if(Zc)Zc("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Bm(...t){let e=t.join(" ");e in E_||(E_[e]=!0,Re(...t))}function kr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[t&255]+gt[t>>8&255]+gt[t>>16&255]+gt[t>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[a&63|128]+gt[a>>8&255]+"-"+gt[a>>16&255]+gt[a>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function se(t,e,a){return Math.max(e,Math.min(a,t))}function ig(t,e){return(t%e+e)%e}function $C(t,e,a,n,i){return n+(t-e)*(i-n)/(a-e)}function eA(t,e,a){return t!==e?(a-t)/(e-t):0}function vl(t,e,a){return(1-a)*t+a*e}function tA(t,e,a,n){return vl(t,e,1-Math.exp(-a*n))}function aA(t,e=1){return e-Math.abs(ig(t,e*2)-e)}function nA(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*(3-2*t))}function iA(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*t*(t*(t*6-15)+10))}function sA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function rA(t,e){return t+Math.random()*(e-t)}function oA(t){return t*(.5-Math.random())}function lA(t){t!==void 0&&(I_=t);let e=I_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uA(t){return t*lS}function cA(t){return t*ng}function dA(t){return(t&t-1)===0&&t!==0}function fA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pA(t,e,a,n,i){let s=Math.cos,r=Math.sin,o=s(a/2),l=r(a/2),u=s((e+n)/2),c=r((e+n)/2),f=s((e-n)/2),d=r((e-n)/2),h=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":t.set(o*c,l*f,l*d,o*u);break;case"YZY":t.set(l*d,o*c,l*f,o*u);break;case"ZXZ":t.set(l*f,l*d,o*c,o*u);break;case"XZX":t.set(o*c,l*g,l*h,o*u);break;case"YXY":t.set(l*h,o*c,l*g,o*u);break;case"ZYZ":t.set(l*g,l*h,o*c,o*u);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ir(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}function mA(){let t={enabled:!0,workingColorSpace:Dm,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Wc&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Wc&&(i.r=Dr(i.r),i.g=Dr(i.g),i.b=Dr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tl?Nm:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Bm("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Bm("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[Dm]:{primaries:e,whitePoint:n,transfer:Nm,toXYZ:N_,fromXYZ:P_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:Wc,toXYZ:N_,fromXYZ:P_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),t}function _n(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Jp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Pr.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}function em(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}function lm(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){es.fromArray(t,s);let o=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),l=e.dot(es),u=a.dot(es),c=n.dot(es);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}function LA(t,e,a,n,i,s,r,o){let l;if(e.side===eS?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Yc,o),l===null)return null;Fc.copy(o),Fc.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(Fc);return u<a.near||u>a.far?null:{distance:u,point:Fc.clone(),object:t}}function zc(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,Uc),t.getVertexPosition(l,Rc),t.getVertexPosition(u,Oc);let c=LA(t,e,a,n,Uc,Rc,Oc,q_);if(c){let f=new E;hi.getBarycoord(q_,Uc,Rc,Oc,f),i&&(c.uv=hi.getInterpolatedAttribute(i,o,l,u,f,new Ke)),s&&(c.uv1=hi.getInterpolatedAttribute(s,o,l,u,f,new Ke)),r&&(c.normal=hi.getInterpolatedAttribute(r,o,l,u,f,new E),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:u,normal:new E,materialIndex:0};hi.getNormal(Uc,Rc,Oc,d.normal),c.face=d,c.barycoord=f}return c}function Hc(t,e,a,n,i,s,r){let o=t.geometry.attributes.position;if($c.fromBufferAttribute(o,i),ed.fromBufferAttribute(o,s),a.distanceSqToSegment($c,ed,mm,W_)>n)return;mm.applyMatrix4(t.matrixWorld);let u=e.ray.origin.distanceTo(mm);if(!(u<e.near||u>e.far))return{distance:u,point:W_.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}function K_(t,e,a,n,i,s,r){let o=Fm.distanceSqToPoint(t);if(o<a){let l=new E;Fm.closestPointToPoint(t,l),l.applyMatrix4(n);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}function cS(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone():Array.isArray(i)?e[a][n]=i.slice():e[a][n]=i}}return e}function Lt(t){let e={};for(let a=0;a<t.length;a++){let n=cS(t[a]);for(let i in n)e[i]=n[i]}return e}function qc(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function J_(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Q_,$_,Yc,eS,Vm,gm,xm,vm,ym,bm,_m,Sm,yl,Mm,wm,Cm,Am,dd,tS,aS,Gm,qm,Xm,Wm,Ym,Zm,jm,Km,nS,Jm,iS,bl,ns,_l,Qm,$m,eg,fd,tg,hd,sS,rS,pd,is,Nr,Xc,Tm,Lm,Em,Im,ag,Tl,vt,Dm,Nm,Wc,as,Pm,Um,xl,Rm,E_,Zc,QC,ss,gt,I_,lS,ng,Ll,Ke,Aa,E,jp,D_,$,Kp,N_,P_,ha,br,Pr,gA,Ur,xA,Qp,rs,Rr,yt,_r,Ma,vA,yA,li,wc,Kt,U_,R_,Xa,jc,bA,O_,Sr,mn,Cc,fl,_A,SA,B_,F_,z_,k_,MA,Mr,$p,pa,Sl,uS,ui,Ac,pe,xt,Or,wa,gn,tm,xn,wr,Cr,H_,am,nm,im,sm,rm,om,hi,Wa,vn,Ca,Tc,Ar,Tr,Lr,ci,di,$i,hl,Lc,Ec,es,We,Ic,wA,ut,Kc,Jc,Qt,CA,pl,um,os,AA,fa,cm,Er,Jt,ml,tt,Sn,TA,Ta,yn,dm,Dc,fi,fm,Nc,hm,Br,Qc,V_,ts,Pc,G_,Uc,Rc,Oc,pm,Bc,q_,Fc,Fr,pi,$c,ed,X_,gl,kc,mm,W_,td,Y_,Z_,zr,Mn,j_,Fm,Vc,Gc,ls,us,Ml,wl,mi,ad,nd,id,sd,$t,gi,rd,od,ld,Cl,xi,ud,zm,cd,dS,cs,bn,km,Al,sg,EA,rg,IA,DA,NA,PA,UA,RA,OA,Hm,xe,Z3,og=gs(()=>{Q_=1,$_=3,Yc=0,eS=1,Vm=2,gm=1,xm=100,vm=204,ym=205,bm=0,_m=1,Sm=2,yl=3,Mm=4,wm=5,Cm=6,Am=7,dd=0,tS=1,aS=2,Gm=1,qm=2,Xm=3,Wm=4,Ym=5,Zm=6,jm=7,Km=300,nS=301,Jm=302,iS=306,bl=1e3,ns=1001,_l=1002,Qm=1003,$m=1004,eg=1005,fd=1006,tg=1007,hd=1008,sS=1009,rS=1015,pd=1023,is=2300,Nr=2301,Xc=2302,Tm=2303,Lm=2400,Em=2401,Im=2402,ag=0,Tl="",vt="srgb",Dm="srgb-linear",Nm="linear",Wc="srgb",as=7680,Pm=519,Um=35044,xl=2e3,Rm=2001;E_={},Zc=null;QC={[bm]:_m,[Sm]:Cm,[Mm]:Am,[yl]:wm,[_m]:bm,[Cm]:Sm,[Am]:Mm,[wm]:yl},ss=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],I_=1234567,lS=Math.PI/180,ng=180/Math.PI;Ll={DEG2RAD:lS,RAD2DEG:ng,generateUUID:kr,clamp:se,euclideanModulo:ig,mapLinear:$C,inverseLerp:eA,lerp:vl,damp:tA,pingpong:aA,smoothstep:nA,smootherstep:iA,randInt:sA,randFloat:rA,randFloatSpread:oA,seededRandom:lA,degToRad:uA,radToDeg:cA,isPowerOfTwo:dA,ceilPowerOfTwo:fA,floorPowerOfTwo:hA,setQuaternionFromProperEuler:pA,normalize:Tt,denormalize:Ir},Ke=class t{constructor(e=0,a=0){t.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=se(this.x,e.x,a.x),this.y=se(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=se(this.x,e,a),this.y=se(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(se(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Aa=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],c=n[i+2],f=n[i+3],d=s[r+0],h=s[r+1],g=s[r+2],v=s[r+3];if(f!==v||l!==d||u!==h||c!==g){let _=l*d+u*h+c*g+f*v;_<0&&(d=-d,h=-h,g=-g,v=-v,_=-_);let m=1-o;if(_<.9995){let x=Math.acos(_),y=Math.sin(x);m=Math.sin(m*x)/y,o=Math.sin(o*x)/y,l=l*m+d*o,u=u*m+h*o,c=c*m+g*o,f=f*m+v*o}else{l=l*m+d*o,u=u*m+h*o,c=c*m+g*o,f=f*m+v*o;let x=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=x,u*=x,c*=x,f*=x}}e[a]=l,e[a+1]=u,e[a+2]=c,e[a+3]=f}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],c=n[i+3],f=s[r],d=s[r+1],h=s[r+2],g=s[r+3];return e[a]=o*g+c*f+l*h-u*d,e[a+1]=l*g+c*d+u*f-o*h,e[a+2]=u*g+c*h+o*d-l*f,e[a+3]=c*g-o*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"YXZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"ZXY":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"ZYX":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"YZX":this._x=d*c*f+u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f-d*h*g;break;case"XZY":this._x=d*c*f-u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f+d*h*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],c=a[6],f=a[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(c-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+c)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(se(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,c=a._w;return this._x=n*c+r*o+i*u-s*l,this._y=i*c+r*l+s*o-n*u,this._z=s*c+r*u+n*l-i*o,this._w=r*c-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,a=Math.sin(a*u)/c,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class t{constructor(e=0,a=0,n=0){t.prototype.isVector3=!0,this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(D_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(D_.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),c=2*(o*a-s*i),f=2*(s*n-r*a);return this.x=a+l*u+r*f-o*c,this.y=n+l*c+o*u-s*f,this.z=i+l*f+s*c-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=se(this.x,e.x,a.x),this.y=se(this.y,e.y,a.y),this.z=se(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=se(this.x,e,a),this.y=se(this.y,e,a),this.z=se(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jp.copy(this).projectOnVector(e),this.sub(jp)}reflect(e){return this.sub(jp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(se(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jp=new E,D_=new Aa,$=class t{constructor(e,a,n,i,s,r,o,l,u){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=a,c[4]=s,c[5]=l,c[6]=n,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],c=n[4],f=n[7],d=n[2],h=n[5],g=n[8],v=i[0],_=i[3],m=i[6],x=i[1],y=i[4],b=i[7],C=i[2],T=i[5],L=i[8];return s[0]=r*v+o*x+l*C,s[3]=r*_+o*y+l*T,s[6]=r*m+o*b+l*L,s[1]=u*v+c*x+f*C,s[4]=u*_+c*y+f*T,s[7]=u*m+c*b+f*L,s[2]=d*v+h*x+g*C,s[5]=d*_+h*y+g*T,s[8]=d*m+h*b+g*L,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return a*r*c-a*o*u-n*s*c+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*r-o*u,d=o*l-c*s,h=u*s-r*l,g=a*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(i*u-c*n)*v,e[2]=(o*n-i*r)*v,e[3]=d*v,e[4]=(c*a-i*l)*v,e[5]=(i*s-o*a)*v,e[6]=h*v,e[7]=(n*l-u*a)*v,e[8]=(r*a-n*s)*v,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return this.premultiply(Kp.makeScale(e,a)),this}rotate(e){return this.premultiply(Kp.makeRotation(-e)),this}translate(e,a){return this.premultiply(Kp.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kp=new $,N_=new $().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new $().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ha=mA();Pr=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Om("canvas")),br.width=e.width,br.height=e.height;let i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=Om("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=_n(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(_n(a[n]/255)*255):a[n]=_n(a[n]);return{data:a,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gA=0,Ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Jp(i[r].image)):s.push(Jp(i[r]))}else s=Jp(i);n.url=s}return a||(e.images[this.uuid]=n),n}};xA=0,Qp=new E,rs=class t extends ss{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=ns,i=ns,s=fd,r=hd,o=pd,l=sS,u=t.DEFAULT_ANISOTROPY,c=Tl){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=kr(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qp).x}get height(){return this.source.getSize(Qp).y}get depth(){return this.source.getSize(Qp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Re(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Re(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rs.DEFAULT_IMAGE=null;rs.DEFAULT_MAPPING=Km;rs.DEFAULT_ANISOTROPY=1;Rr=class t{constructor(e=0,a=0,n=0,i=1){t.prototype.isVector4=!0,this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+_)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(u+1)/2,b=(h+1)/2,C=(m+1)/2,T=(c+d)/4,L=(f+v)/4,A=(g+_)/4;return y>b&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=L/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=A/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=L/s,i=A/s),this.set(n,i,s,a),this}let x=Math.sqrt((_-g)*(_-g)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(_-g)/x,this.y=(f-v)/x,this.z=(d-c)/x,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=se(this.x,e.x,a.x),this.y=se(this.y,e.y,a.y),this.z=se(this.z,e.z,a.z),this.w=se(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=se(this.x,e,a),this.y=se(this.y,e,a),this.z=se(this.z,e,a),this.w=se(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yt=class t{constructor(e,a,n,i,s,r,o,l,u,c,f,d,h,g,v,_){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,c,f,d,h,g,v,_)}set(e,a,n,i,s,r,o,l,u,c,f,d,h,g,v,_){let m=this.elements;return m[0]=e,m[4]=a,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinant()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let a=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),r=1/_r.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=r*c,h=r*f,g=o*c,v=o*f;a[0]=l*c,a[4]=-l*f,a[8]=u,a[1]=h+g*u,a[5]=d-v*u,a[9]=-o*l,a[2]=v-d*u,a[6]=g+h*u,a[10]=r*l}else if(e.order==="YXZ"){let d=l*c,h=l*f,g=u*c,v=u*f;a[0]=d+v*o,a[4]=g*o-h,a[8]=r*u,a[1]=r*f,a[5]=r*c,a[9]=-o,a[2]=h*o-g,a[6]=v+d*o,a[10]=r*l}else if(e.order==="ZXY"){let d=l*c,h=l*f,g=u*c,v=u*f;a[0]=d-v*o,a[4]=-r*f,a[8]=g+h*o,a[1]=h+g*o,a[5]=r*c,a[9]=v-d*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let d=r*c,h=r*f,g=o*c,v=o*f;a[0]=l*c,a[4]=g*u-h,a[8]=d*u+v,a[1]=l*f,a[5]=v*u+d,a[9]=h*u-g,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let d=r*l,h=r*u,g=o*l,v=o*u;a[0]=l*c,a[4]=v-d*f,a[8]=g*f+h,a[1]=f,a[5]=r*c,a[9]=-o*c,a[2]=-u*c,a[6]=h*f+g,a[10]=d-v*f}else if(e.order==="XZY"){let d=r*l,h=r*u,g=o*l,v=o*u;a[0]=l*c,a[4]=-f,a[8]=u*c,a[1]=d*f+v,a[5]=r*c,a[9]=h*f-g,a[2]=g*f-h,a[6]=o*c,a[10]=v*f+d}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vA,e,yA)}lookAt(e,a,n){let i=this.elements;return Kt.subVectors(e,a),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),li.crossVectors(n,Kt),li.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),li.crossVectors(n,Kt)),li.normalize(),wc.crossVectors(Kt,li),i[0]=li.x,i[4]=wc.x,i[8]=Kt.x,i[1]=li.y,i[5]=wc.y,i[9]=Kt.y,i[2]=li.z,i[6]=wc.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],c=n[1],f=n[5],d=n[9],h=n[13],g=n[2],v=n[6],_=n[10],m=n[14],x=n[3],y=n[7],b=n[11],C=n[15],T=i[0],L=i[4],A=i[8],P=i[12],N=i[1],D=i[5],H=i[9],F=i[13],oe=i[2],M=i[6],V=i[10],ne=i[14],Cn=i[3],An=i[7],fs=i[11],yi=i[15];return s[0]=r*T+o*N+l*oe+u*Cn,s[4]=r*L+o*D+l*M+u*An,s[8]=r*A+o*H+l*V+u*fs,s[12]=r*P+o*F+l*ne+u*yi,s[1]=c*T+f*N+d*oe+h*Cn,s[5]=c*L+f*D+d*M+h*An,s[9]=c*A+f*H+d*V+h*fs,s[13]=c*P+f*F+d*ne+h*yi,s[2]=g*T+v*N+_*oe+m*Cn,s[6]=g*L+v*D+_*M+m*An,s[10]=g*A+v*H+_*V+m*fs,s[14]=g*P+v*F+_*ne+m*yi,s[3]=x*T+y*N+b*oe+C*Cn,s[7]=x*L+y*D+b*M+C*An,s[11]=x*A+y*H+b*V+C*fs,s[15]=x*P+y*F+b*ne+C*yi,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],_=e[11],m=e[15],x=l*h-u*d,y=o*h-u*f,b=o*d-l*f,C=r*h-u*c,T=r*d-l*c,L=r*f-o*c;return a*(v*x-_*y+m*b)-n*(g*x-_*C+m*T)+i*(g*y-v*C+m*L)-s*(g*b-v*T+_*L)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],_=e[14],m=e[15],x=a*o-n*r,y=a*l-i*r,b=a*u-s*r,C=n*l-i*o,T=n*u-s*o,L=i*u-s*l,A=c*v-f*g,P=c*_-d*g,N=c*m-h*g,D=f*_-d*v,H=f*m-h*v,F=d*m-h*_,oe=x*F-y*H+b*D+C*N-T*P+L*A;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/oe;return e[0]=(o*F-l*H+u*D)*M,e[1]=(i*H-n*F-s*D)*M,e[2]=(v*L-_*T+m*C)*M,e[3]=(d*T-f*L-h*C)*M,e[4]=(l*N-r*F-u*P)*M,e[5]=(a*F-i*N+s*P)*M,e[6]=(_*b-g*L-m*y)*M,e[7]=(c*L-d*b+h*y)*M,e[8]=(r*H-o*N+u*A)*M,e[9]=(n*N-a*H-s*A)*M,e[10]=(g*T-v*b+m*x)*M,e[11]=(f*b-c*T-h*x)*M,e[12]=(o*P-r*D-l*A)*M,e[13]=(a*D-n*P+i*A)*M,e[14]=(v*y-g*C-_*x)*M,e[15]=(c*C-f*y+d*x)*M,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,c=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+n,c*l-i*r,0,u*l-i*o,c*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,c=r+r,f=o+o,d=s*u,h=s*c,g=s*f,v=r*c,_=r*f,m=o*f,x=l*u,y=l*c,b=l*f,C=n.x,T=n.y,L=n.z;return i[0]=(1-(v+m))*C,i[1]=(h+b)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(h-b)*T,i[5]=(1-(d+m))*T,i[6]=(_+x)*T,i[7]=0,i[8]=(g+y)*L,i[9]=(_-x)*L,i[10]=(1-(d+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return n.set(1,1,1),a.identity(),this;let r=_r.set(i[0],i[1],i[2]).length(),o=_r.set(i[4],i[5],i[6]).length(),l=_r.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Ma.copy(this);let u=1/r,c=1/o,f=1/l;return Ma.elements[0]*=u,Ma.elements[1]*=u,Ma.elements[2]*=u,Ma.elements[4]*=c,Ma.elements[5]*=c,Ma.elements[6]*=c,Ma.elements[8]*=f,Ma.elements[9]*=f,Ma.elements[10]*=f,a.setFromRotationMatrix(Ma),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=xl,l=!1){let u=this.elements,c=2*s/(a-e),f=2*s/(n-i),d=(a+e)/(a-e),h=(n+i)/(n-i),g,v;if(l)g=s/(r-s),v=r*s/(r-s);else if(o===xl)g=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Rm)g=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=xl,l=!1){let u=this.elements,c=2/(a-e),f=2/(n-i),d=-(a+e)/(a-e),h=-(n+i)/(n-i),g,v;if(l)g=1/(r-s),v=r/(r-s);else if(o===xl)g=-2/(r-s),v=-(r+s)/(r-s);else if(o===Rm)g=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}},_r=new E,Ma=new yt,vA=new E(0,0,0),yA=new E(1,1,1),li=new E,wc=new E,Kt=new E,U_=new yt,R_=new Aa,Xa=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],c=i[9],f=i[2],d=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-se(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return U_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U_,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xa.DEFAULT_ORDER="XYZ";jc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bA=0,O_=new E,Sr=new Aa,mn=new yt,Cc=new E,fl=new E,_A=new E,SA=new Aa,B_=new E(1,0,0),F_=new E(0,1,0),z_=new E(0,0,1),k_={type:"added"},MA={type:"removed"},Mr={type:"childadded",child:null},$p={type:"childremoved",child:null},pa=class t extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new E,a=new Xa,n=new Aa,i=new E(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new $}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Sr.setFromAxisAngle(e,a),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,a){return Sr.setFromAxisAngle(e,a),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(F_,e)}rotateZ(e){return this.rotateOnAxis(z_,e)}translateOnAxis(e,a){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(F_,e)}translateZ(e){return this.translateOnAxis(z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?Cc.copy(e):Cc.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(fl,Cc,this.up):mn.lookAt(Cc,fl,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),Sr.setFromRotationMatrix(mn),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k_),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(MA),$p.child=e,this.dispatchEvent($p),$p.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k_),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,_A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,SA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),c=r(e.images),f=r(e.shapes),d=r(e.skeletons),h=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};pa.DEFAULT_UP=new E(0,1,0);pa.DEFAULT_MATRIX_AUTO_UPDATE=!0;pa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Sl=class extends pa{constructor(){super(),this.isGroup=!0,this.type="Group"}},uS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ac={h:0,s:0,l:0};pe=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ha.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=ha.workingColorSpace){return this.r=e,this.g=a,this.b=n,ha.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=ha.workingColorSpace){if(e=ig(e,1),a=se(a,0,1),n=se(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=em(r,s,e+1/3),this.g=em(r,s,e),this.b=em(r,s,e-1/3)}return ha.colorSpaceToWorking(this,i),this}setStyle(e,a=vt){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,a);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=vt){let n=uS[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return ha.workingToColorSpace(xt.copy(this),e),Math.round(se(xt.r*255,0,255))*65536+Math.round(se(xt.g*255,0,255))*256+Math.round(se(xt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=ha.workingColorSpace){ha.workingToColorSpace(xt.copy(this),a);let n=xt.r,i=xt.g,s=xt.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,c=(o+r)/2;if(o===r)l=0,u=0;else{let f=r-o;switch(u=c<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,a=ha.workingColorSpace){return ha.workingToColorSpace(xt.copy(this),a),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=vt){ha.workingToColorSpace(xt.copy(this),e);let a=xt.r,n=xt.g,i=xt.b;return e!==vt?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+a,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(ui),e.getHSL(Ac);let n=vl(ui.h,Ac.h,a),i=vl(ui.s,Ac.s,a),s=vl(ui.l,Ac.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new pe;pe.NAMES=uS;Or=class extends pa{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}},wa=new E,gn=new E,tm=new E,xn=new E,wr=new E,Cr=new E,H_=new E,am=new E,nm=new E,im=new E,sm=new Rr,rm=new Rr,om=new Rr,hi=class t{constructor(e=new E,a=new E,n=new E){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),wa.subVectors(e,a),i.cross(wa);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){wa.subVectors(i,a),gn.subVectors(n,a),tm.subVectors(e,a);let r=wa.dot(wa),o=wa.dot(gn),l=wa.dot(tm),u=gn.dot(gn),c=gn.dot(tm),f=r*u-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(u*l-o*c)*d,g=(r*c-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(r,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return sm.setScalar(0),rm.setScalar(0),om.setScalar(0),sm.fromBufferAttribute(e,a),rm.fromBufferAttribute(e,n),om.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(sm,s.x),r.addScaledVector(rm,s.y),r.addScaledVector(om,s.z),r}static isFrontFacing(e,a,n,i){return wa.subVectors(n,a),gn.subVectors(e,a),wa.cross(gn).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wa.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),wa.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;wr.subVectors(i,n),Cr.subVectors(s,n),am.subVectors(e,n);let l=wr.dot(am),u=Cr.dot(am);if(l<=0&&u<=0)return a.copy(n);nm.subVectors(e,i);let c=wr.dot(nm),f=Cr.dot(nm);if(c>=0&&f<=c)return a.copy(i);let d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return r=l/(l-c),a.copy(n).addScaledVector(wr,r);im.subVectors(e,s);let h=wr.dot(im),g=Cr.dot(im);if(g>=0&&h<=g)return a.copy(s);let v=h*u-l*g;if(v<=0&&u>=0&&g<=0)return o=u/(u-g),a.copy(n).addScaledVector(Cr,o);let _=c*g-h*f;if(_<=0&&f-c>=0&&h-g>=0)return H_.subVectors(s,i),o=(f-c)/(f-c+(h-g)),a.copy(i).addScaledVector(H_,o);let m=1/(_+v+d);return r=v*m,o=d*m,a.copy(n).addScaledVector(wr,r).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wa=class{constructor(e=new E(1/0,1/0,1/0),a=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(Ca.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(Ca.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=Ca.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ca):Ca.fromBufferAttribute(s,r),Ca.applyMatrix4(e.matrixWorld),this.expandByPoint(Ca);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tc.copy(n.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ca),Ca.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),Lc.subVectors(this.max,hl),Ar.subVectors(e.a,hl),Tr.subVectors(e.b,hl),Lr.subVectors(e.c,hl),ci.subVectors(Tr,Ar),di.subVectors(Lr,Tr),$i.subVectors(Ar,Lr);let a=[0,-ci.z,ci.y,0,-di.z,di.y,0,-$i.z,$i.y,ci.z,0,-ci.x,di.z,0,-di.x,$i.z,0,-$i.x,-ci.y,ci.x,0,-di.y,di.x,0,-$i.y,$i.x,0];return!lm(a,Ar,Tr,Lr,Lc)||(a=[1,0,0,0,1,0,0,0,1],!lm(a,Ar,Tr,Lr,Lc))?!1:(Ec.crossVectors(ci,di),a=[Ec.x,Ec.y,Ec.z],lm(a,Ar,Tr,Lr,Lc))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ca).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ca).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vn=[new E,new E,new E,new E,new E,new E,new E,new E],Ca=new E,Tc=new Wa,Ar=new E,Tr=new E,Lr=new E,ci=new E,di=new E,$i=new E,hl=new E,Lc=new E,Ec=new E,es=new E;We=new E,Ic=new Ke,wA=0,ut=class{constructor(e,a,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wA++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=Um,this.updateRanges=[],this.gpuType=rS,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)Ic.fromBufferAttribute(this,a),Ic.applyMatrix3(e),this.setXY(a,Ic.x,Ic.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)We.fromBufferAttribute(this,a),We.applyMatrix3(e),this.setXYZ(a,We.x,We.y,We.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)We.fromBufferAttribute(this,a),We.applyMatrix4(e),this.setXYZ(a,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)We.fromBufferAttribute(this,a),We.applyNormalMatrix(e),this.setXYZ(a,We.x,We.y,We.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)We.fromBufferAttribute(this,a),We.transformDirection(e),this.setXYZ(a,We.x,We.y,We.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(e,a,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Ir(a,this.array)),a}setX(e,a){return this.normalized&&(a=Tt(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Ir(a,this.array)),a}setY(e,a){return this.normalized&&(a=Tt(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Ir(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Tt(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Ir(a,this.array)),a}setW(e,a){return this.normalized&&(a=Tt(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=Tt(a,this.array),n=Tt(n,this.array)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=Tt(a,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=Tt(a,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Um&&(e.usage=this.usage),e}},Kc=class extends ut{constructor(e,a,n){super(new Uint16Array(e),a,n)}},Jc=class extends ut{constructor(e,a,n){super(new Uint32Array(e),a,n)}},Qt=class extends ut{constructor(e,a,n){super(new Float32Array(e),a,n)}},CA=new Wa,pl=new E,um=new E,os=class{constructor(e=new E,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):CA.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);let a=pl.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(pl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(um.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(um)),this.expandByPoint(pl.copy(e.center).sub(um))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},AA=0,fa=new yt,cm=new pa,Er=new E,Jt=new Wa,ml=new Wa,tt=new E,Sn=class t extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KC(e)?Jc:Kc)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fa.makeRotationFromQuaternion(e),this.applyMatrix4(fa),this}rotateX(e){return fa.makeRotationX(e),this.applyMatrix4(fa),this}rotateY(e){return fa.makeRotationY(e),this.applyMatrix4(fa),this}rotateZ(e){return fa.makeRotationZ(e),this.applyMatrix4(fa),this}translate(e,a,n){return fa.makeTranslation(e,a,n),this.applyMatrix4(fa),this}scale(e,a,n){return fa.makeScale(e,a,n),this.applyMatrix4(fa),this}lookAt(e){return cm.lookAt(e),cm.updateMatrix(),this.applyMatrix4(cm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];ml.setFromBufferAttribute(o),this.morphTargetsRelative?(tt.addVectors(Jt.min,ml.min),Jt.expandByPoint(tt),tt.addVectors(Jt.max,ml.max),Jt.expandByPoint(tt)):(Jt.expandByPoint(ml.min),Jt.expandByPoint(ml.max))}Jt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tt));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)tt.fromBufferAttribute(o,u),l&&(Er.fromBufferAttribute(e,u),tt.add(Er)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new E,l[A]=new E;let u=new E,c=new E,f=new E,d=new Ke,h=new Ke,g=new Ke,v=new E,_=new E;function m(A,P,N){u.fromBufferAttribute(n,A),c.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,N),c.sub(u),f.sub(u),h.sub(d),g.sub(d);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),_.copy(f).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(D),o[A].add(v),o[P].add(v),o[N].add(v),l[A].add(_),l[P].add(_),l[N].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,P=x.length;A<P;++A){let N=x[A],D=N.start,H=N.count;for(let F=D,oe=D+H;F<oe;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new E,b=new E,C=new E,T=new E;function L(A){C.fromBufferAttribute(i,A),T.copy(C);let P=o[A];y.copy(P),y.sub(C.multiplyScalar(C.dot(P))).normalize(),b.crossVectors(T,P);let D=b.dot(l[A])<0?-1:1;r.setXYZW(A,y.x,y.y,y.z,D)}for(let A=0,P=x.length;A<P;++A){let N=x[A],D=N.start,H=N.count;for(let F=D,oe=D+H;F<oe;F+=3)L(e.getX(F+0)),L(e.getX(F+1)),L(e.getX(F+2))}}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new E,s=new E,r=new E,o=new E,l=new E,u=new E,c=new E,f=new E;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(a,g),s.fromBufferAttribute(a,v),r.fromBufferAttribute(a,_),c.subVectors(r,s),f.subVectors(i,s),c.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,_),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,h=a.count;d<h;d+=3)i.fromBufferAttribute(a,d+0),s.fromBufferAttribute(a,d+1),r.fromBufferAttribute(a,d+2),c.subVectors(r,s),f.subVectors(i,s),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)tt.fromBufferAttribute(e,a),tt.normalize(),e.setXYZ(a,tt.x,tt.y,tt.z)}toNonIndexed(){function e(o,l){let u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c),h=0,g=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*c;for(let m=0;m<c;m++)d[g++]=u[h++]}return new ut(d,c,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){let d=u[c],h=e(d,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){let h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let c=i[u];this.setAttribute(u,c.clone(a))}let s=e.morphAttributes;for(let u in s){let c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(a));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,c=r.length;u<c;u++){let f=r[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},TA=0,Ta=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=gm,this.side=Yc,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vm,this.blendDst=ym,this.blendEquation=xm,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Re(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Re(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gm&&(n.blending=this.blending),this.side!==Yc&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vm&&(n.blendSrc=this.blendSrc),this.blendDst!==ym&&(n.blendDst=this.blendDst),this.blendEquation!==xm&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yn=new E,dm=new E,Dc=new E,fi=new E,fm=new E,Nc=new E,hm=new E,Br=class{constructor(e=new E,a=new E(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=yn.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,a),yn.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){dm.copy(e).add(a).multiplyScalar(.5),Dc.copy(a).sub(e).normalize(),fi.copy(this.origin).sub(dm);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Dc),o=fi.dot(this.direction),l=-fi.dot(Dc),u=fi.lengthSq(),c=Math.abs(1-r*r),f,d,h,g;if(c>0)if(f=r*l-o,d=r*o-l,g=s*c,f>=0)if(d>=-g)if(d<=g){let v=1/c;f*=v,d*=v,h=f*(f+r*d+2*o)+d*(r*f+d+2*l)+u}else d=s,f=Math.max(0,-(r*d+o)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(r*d+o)),h=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-r*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(r*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=r>0?-s:s,f=Math.max(0,-(r*d+o)),h=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(dm).addScaledVector(Dc,d),h}intersectSphere(e,a){yn.subVectors(e.center,this.origin);let n=yn.dot(this.direction),i=yn.dot(yn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,a,n,i,s){fm.subVectors(a,e),Nc.subVectors(n,e),hm.crossVectors(fm,Nc);let r=this.direction.dot(hm),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fi.subVectors(this.origin,e);let l=o*this.direction.dot(Nc.crossVectors(fi,Nc));if(l<0)return null;let u=o*this.direction.dot(fm.cross(fi));if(u<0||l+u>r)return null;let c=-o*fi.dot(hm);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qc=class extends Ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},V_=new yt,ts=new Br,Pc=new os,G_=new E,Uc=new E,Rc=new E,Oc=new E,pm=new E,Bc=new E,q_=new E,Fc=new E,Fr=class extends pa{constructor(e=new Sn,a=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Bc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let c=o[l],f=s[l];c!==0&&(pm.fromBufferAttribute(f,e),r?Bc.addScaledVector(pm,c):Bc.addScaledVector(pm.sub(a),c))}a.add(Bc)}return a}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(Pc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Pc,G_)===null||ts.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(V_.copy(s).invert(),ts.copy(e.ray).applyMatrix4(V_),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,ts)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){let _=d[g],m=r[_.materialIndex],x=Math.max(_.start,h.start),y=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let b=x,C=y;b<C;b+=3){let T=o.getX(b),L=o.getX(b+1),A=o.getX(b+2);i=zc(this,m,e,n,u,c,f,T,L,A),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,a.push(i))}}else{let g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let _=g,m=v;_<m;_+=3){let x=o.getX(_),y=o.getX(_+1),b=o.getX(_+2);i=zc(this,r,e,n,u,c,f,x,y,b),i&&(i.faceIndex=Math.floor(_/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){let _=d[g],m=r[_.materialIndex],x=Math.max(_.start,h.start),y=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let b=x,C=y;b<C;b+=3){let T=b,L=b+1,A=b+2;i=zc(this,m,e,n,u,c,f,T,L,A),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,a.push(i))}}else{let g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let _=g,m=v;_<m;_+=3){let x=_,y=_+1,b=_+2;i=zc(this,r,e,n,u,c,f,x,y,b),i&&(i.faceIndex=Math.floor(_/3),a.push(i))}}}};pi=class extends Ta{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$c=new E,ed=new E,X_=new yt,gl=new Br,kc=new os,mm=new E,W_=new E,td=class extends pa{constructor(e=new Sn,a=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let a=e.attributes.position,n=[0];for(let i=1,s=a.count;i<s;i++)$c.fromBufferAttribute(a,i-1),ed.fromBufferAttribute(a,i),n[i]=n[i-1],n[i]+=$c.distanceTo(ed);e.setAttribute("lineDistance",new Qt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,a){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kc.copy(n.boundingSphere),kc.applyMatrix4(i),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;X_.copy(i).invert(),gl.copy(e.ray).applyMatrix4(X_);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let v=h,_=g-1;v<_;v+=u){let m=c.getX(v),x=c.getX(v+1),y=Hc(this,e,gl,l,m,x,v);y&&a.push(y)}if(this.isLineLoop){let v=c.getX(g-1),_=c.getX(h),m=Hc(this,e,gl,l,v,_,g-1);m&&a.push(m)}}else{let h=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=h,_=g-1;v<_;v+=u){let m=Hc(this,e,gl,l,v,v+1,v);m&&a.push(m)}if(this.isLineLoop){let v=Hc(this,e,gl,l,g-1,h,g-1);v&&a.push(v)}}}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};Y_=new E,Z_=new E,zr=class extends td{constructor(e,a){super(e,a),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let a=e.attributes.position,n=[];for(let i=0,s=a.count;i<s;i+=2)Y_.fromBufferAttribute(a,i),Z_.fromBufferAttribute(a,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Y_.distanceTo(Z_);e.setAttribute("lineDistance",new Qt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mn=class extends Ta{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},j_=new yt,Fm=new Br,Vc=new os,Gc=new E,ls=class extends pa{constructor(e=new Sn,a=new Mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,a){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(i),Vc.radius+=s,e.ray.intersectsSphere(Vc)===!1)return;j_.copy(i).invert(),Fm.copy(e.ray).applyMatrix4(j_);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let g=d,v=h;g<v;g++){let _=u.getX(g);Gc.fromBufferAttribute(f,_),K_(Gc,_,l,i,e,a,this)}}else{let d=Math.max(0,r.start),h=Math.min(f.count,r.start+r.count);for(let g=d,v=h;g<v;g++)Gc.fromBufferAttribute(f,g),K_(Gc,g,l,i,e,a,this)}}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};us=class extends rs{constructor(e,a,n,i,s,r,o,l,u,c,f,d){super(null,r,o,l,u,c,i,s,f,d),this.isCompressedTexture=!0,this.image={width:a,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Ml=class extends Ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ag,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wl=class extends Ta{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ag,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=dd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};mi=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ad=class extends mi{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lm,endingEnd:Lm}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Em:s=e,o=2*a-n;break;case Im:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Em:r=e,l=2*n-a;break;case Im:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,c=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-a)/(i-a),v=g*g,_=v*g,m=-d*_+2*d*v-d*g,x=(1+d)*_+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-h)*_+(1.5+h)*v+.5*g,b=h*_-h*v;for(let C=0;C!==o;++C)s[C]=m*r[c+C]+x*r[u+C]+y*r[l+C]+b*r[f+C];return s}},nd=class extends mi{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(n-a)/(i-a),f=1-c;for(let d=0;d!==o;++d)s[d]=r[u+d]*f+r[l+d]*c;return s}},id=class extends mi{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},sd=class extends mi{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this.settings||this.DefaultSettings_,f=c.inTangents,d=c.outTangents;if(!f||!d){let v=(n-a)/(i-a),_=1-v;for(let m=0;m!==o;++m)s[m]=r[u+m]*_+r[l+m]*v;return s}let h=o*2,g=e-1;for(let v=0;v!==o;++v){let _=r[u+v],m=r[l+v],x=g*h+v*2,y=d[x],b=d[x+1],C=e*h+v*2,T=f[C],L=f[C+1],A=(n-a)/(i-a),P,N,D,H,F;for(let oe=0;oe<8;oe++){P=A*A,N=P*A,D=1-A,H=D*D,F=H*D;let V=F*a+3*H*A*y+3*D*P*T+N*i-n;if(Math.abs(V)<1e-10)break;let ne=3*H*(y-a)+6*D*A*(T-y)+3*P*(i-T);if(Math.abs(ne)<1e-10)break;A=A-V/ne,A=Math.max(0,Math.min(1,A))}s[v]=F*_+3*H*A*b+3*D*P*L+N*m}return s}},$t=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qc(a,this.TimeBufferType),this.values=qc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:qc(e.times,Array),values:qc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new sd(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.settings=this.settings),a}setInterpolation(e){let a;switch(e){case is:a=this.InterpolantFactoryMethodDiscrete;break;case Nr:a=this.InterpolantFactoryMethodLinear;break;case Xc:a=this.InterpolantFactoryMethodSmooth;break;case Tm:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Xc;case this.InterpolantFactoryMethodBezier:return Tm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Be("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&JC(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Be("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xc,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(i)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){let v=a[f+g];if(v!==a[d+g]||v!==a[h+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let f=o*n,d=r*n;for(let h=0;h!==n;++h)a[d+h]=a[f+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,i}};$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Nr;gi=class extends $t{constructor(e,a,n){super(e,a,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=is;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;rd=class extends $t{constructor(e,a,n,i){super(e,a,n,i)}};rd.prototype.ValueTypeName="color";od=class extends $t{constructor(e,a,n,i){super(e,a,n,i)}};od.prototype.ValueTypeName="number";ld=class extends mi{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let c=u+o;u!==c;u+=4)Aa.slerpFlat(s,0,r,u-o,r,u,l);return s}},Cl=class extends $t{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}};Cl.prototype.ValueTypeName="quaternion";Cl.prototype.InterpolantFactoryMethodSmooth=void 0;xi=class extends $t{constructor(e,a,n){super(e,a,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=is;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;ud=class extends $t{constructor(e,a,n,i){super(e,a,n,i)}};ud.prototype.ValueTypeName="vector";zm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(J_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!J_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};cd=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,r,o),s=!0},this.itemEnd=function(c){r++,i.onProgress!==void 0&&i.onProgress(c,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){let f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){let h=u[f],g=u[f+1];if(h.global&&(h.lastIndex=0),h.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dS=new cd,cs=class{constructor(e){this.manager=e!==void 0?e:dS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";bn={},km=class extends Error{constructor(e,a){super(e),this.response=a}},Al=class extends cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,a,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=zm.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{a&&a(s),this.manager.itemEnd(e)},0),s;if(bn[e]!==void 0){bn[e].push({onLoad:a,onProgress:n,onError:i});return}bn[e]=[],bn[e].push({onLoad:a,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let c=bn[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0,v=0,_=new ReadableStream({start(m){x();function x(){f.read().then(({done:y,value:b})=>{if(y)m.close();else{v+=b.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let T=0,L=c.length;T<L;T++){let A=c[T];A.onProgress&&A.onProgress(C)}m.enqueue(b),x()}},y=>{m.error(y)})}}});return new Response(_)}else throw new km(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o==="")return u.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return u.arrayBuffer().then(g=>h.decode(g))}}}).then(u=>{zm.add(`file:${e}`,u);let c=bn[e];delete bn[e];for(let f=0,d=c.length;f<d;f++){let h=c[f];h.onLoad&&h.onLoad(u)}}).catch(u=>{let c=bn[e];if(c===void 0)throw this.manager.itemError(e),u;delete bn[e];for(let f=0,d=c.length;f<d;f++){let h=c[f];h.onError&&h.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},sg="\\[\\]\\.:\\/",EA=new RegExp("["+sg+"]","g"),rg="[^"+sg+"]",IA="[^"+sg.replace("\\.","")+"]",DA=/((?:WC+[\/:])*)/.source.replace("WC",rg),NA=/(WCOD+)?/.source.replace("WCOD",IA),PA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rg),UA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rg),RA=new RegExp("^"+DA+NA+PA+UA+"$"),OA=["material","materials","bones","map"],Hm=class{constructor(e,a,n){let i=n||xe.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},xe=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(EA,"")}static parseTrackName(e){let a=RA.exec(e);if(a===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);OA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Be("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Hm;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Z3=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183")});var BA,FA,zA,kA,HA,VA,GA,qA,XA,WA,YA,ZA,jA,KA,JA,QA,$A,eT,tT,aT,nT,iT,sT,rT,oT,lT,uT,cT,dT,fT,hT,pT,mT,gT,xT,vT,yT,bT,_T,ST,MT,wT,CT,AT,TT,LT,ET,IT,DT,NT,PT,UT,RT,OT,BT,FT,zT,kT,HT,VT,GT,qT,XT,WT,YT,ZT,jT,KT,JT,QT,$T,eL,tL,aL,nL,iL,sL,rL,oL,lL,uL,cL,dL,fL,hL,pL,mL,gL,xL,vL,yL,bL,_L,SL,ML,wL,CL,AL,TL,LL,EL,IL,DL,NL,PL,UL,RL,OL,BL,FL,zL,kL,HL,VL,GL,qL,XL,WL,YL,ZL,jL,KL,JL,QL,$L,eE,tE,aE,nE,iE,sE,rE,oE,lE,uE,cE,dE,fE,hE,pE,mE,re,R,fS,HO,VO,GO,qO,XO,WO,YO,ZO,jO,KO,md=gs(()=>{og();og();BA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ST=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ET=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_L=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ML=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,OL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$L=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:BA,alphahash_pars_fragment:FA,alphamap_fragment:zA,alphamap_pars_fragment:kA,alphatest_fragment:HA,alphatest_pars_fragment:VA,aomap_fragment:GA,aomap_pars_fragment:qA,batching_pars_vertex:XA,batching_vertex:WA,begin_vertex:YA,beginnormal_vertex:ZA,bsdfs:jA,iridescence_fragment:KA,bumpmap_pars_fragment:JA,clipping_planes_fragment:QA,clipping_planes_pars_fragment:$A,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:aT,color_pars_fragment:nT,color_pars_vertex:iT,color_vertex:sT,common:rT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:lT,displacementmap_pars_vertex:uT,displacementmap_vertex:cT,emissivemap_fragment:dT,emissivemap_pars_fragment:fT,colorspace_fragment:hT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:xT,envmap_pars_vertex:vT,envmap_physical_pars_fragment:ET,envmap_vertex:yT,fog_vertex:bT,fog_pars_vertex:_T,fog_fragment:ST,fog_pars_fragment:MT,gradientmap_pars_fragment:wT,lightmap_pars_fragment:CT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:TT,lights_pars_begin:LT,lights_toon_fragment:IT,lights_toon_pars_fragment:DT,lights_phong_fragment:NT,lights_phong_pars_fragment:PT,lights_physical_fragment:UT,lights_physical_pars_fragment:RT,lights_fragment_begin:OT,lights_fragment_maps:BT,lights_fragment_end:FT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:kT,logdepthbuf_pars_vertex:HT,logdepthbuf_vertex:VT,map_fragment:GT,map_pars_fragment:qT,map_particle_fragment:XT,map_particle_pars_fragment:WT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:ZT,morphinstance_vertex:jT,morphcolor_vertex:KT,morphnormal_vertex:JT,morphtarget_pars_vertex:QT,morphtarget_vertex:$T,normal_fragment_begin:eL,normal_fragment_maps:tL,normal_pars_fragment:aL,normal_pars_vertex:nL,normal_vertex:iL,normalmap_pars_fragment:sL,clearcoat_normal_fragment_begin:rL,clearcoat_normal_fragment_maps:oL,clearcoat_pars_fragment:lL,iridescence_pars_fragment:uL,opaque_fragment:cL,packing:dL,premultiplied_alpha_fragment:fL,project_vertex:hL,dithering_fragment:pL,dithering_pars_fragment:mL,roughnessmap_fragment:gL,roughnessmap_pars_fragment:xL,shadowmap_pars_fragment:vL,shadowmap_pars_vertex:yL,shadowmap_vertex:bL,shadowmask_pars_fragment:_L,skinbase_vertex:SL,skinning_pars_vertex:ML,skinning_vertex:wL,skinnormal_vertex:CL,specularmap_fragment:AL,specularmap_pars_fragment:TL,tonemapping_fragment:LL,tonemapping_pars_fragment:EL,transmission_fragment:IL,transmission_pars_fragment:DL,uv_pars_fragment:NL,uv_pars_vertex:PL,uv_vertex:UL,worldpos_vertex:RL,background_vert:OL,background_frag:BL,backgroundCube_vert:FL,backgroundCube_frag:zL,cube_vert:kL,cube_frag:HL,depth_vert:VL,depth_frag:GL,distance_vert:qL,distance_frag:XL,equirect_vert:WL,equirect_frag:YL,linedashed_vert:ZL,linedashed_frag:jL,meshbasic_vert:KL,meshbasic_frag:JL,meshlambert_vert:QL,meshlambert_frag:$L,meshmatcap_vert:eE,meshmatcap_frag:tE,meshnormal_vert:aE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:sE,meshphysical_vert:rE,meshphysical_frag:oE,meshtoon_vert:lE,meshtoon_frag:uE,points_vert:cE,points_frag:dE,shadow_vert:fE,shadow_frag:hE,sprite_vert:pE,sprite_frag:mE},R={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $},alphaMap:{value:null},alphaMapTransform:{value:new $},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $}},envmap:{envMap:{value:null},envMapRotation:{value:new $},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $},alphaTest:{value:0},uvTransform:{value:new $}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $},alphaMap:{value:null},alphaMapTransform:{value:new $},alphaTest:{value:0}}},fS={basic:{uniforms:Lt([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Lt([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Lt([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Lt([R.common,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.roughnessmap,R.metalnessmap,R.fog,R.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Lt([R.common,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.gradientmap,R.fog,R.lights,{emissive:{value:new pe(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Lt([R.common,R.bumpmap,R.normalmap,R.displacementmap,R.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Lt([R.points,R.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Lt([R.common,R.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Lt([R.common,R.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Lt([R.common,R.bumpmap,R.normalmap,R.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Lt([R.sprite,R.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new $},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:Lt([R.common,R.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:Lt([R.lights,R.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};fS.physical={uniforms:Lt([fS.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};HO={[Gm]:"LINEAR_TONE_MAPPING",[qm]:"REINHARD_TONE_MAPPING",[Xm]:"CINEON_TONE_MAPPING",[Wm]:"ACES_FILMIC_TONE_MAPPING",[Zm]:"AGX_TONE_MAPPING",[jm]:"NEUTRAL_TONE_MAPPING",[Ym]:"CUSTOM_TONE_MAPPING"},VO=new Float32Array(16),GO=new Float32Array(9),qO=new Float32Array(4),XO={[Gm]:"Linear",[qm]:"Reinhard",[Xm]:"Cineon",[Wm]:"ACESFilmic",[Zm]:"AgX",[jm]:"Neutral",[Ym]:"Custom"},WO={[Q_]:"SHADOWMAP_TYPE_PCF",[$_]:"SHADOWMAP_TYPE_VSM"},YO={[nS]:"ENVMAP_TYPE_CUBE",[Jm]:"ENVMAP_TYPE_CUBE",[iS]:"ENVMAP_TYPE_CUBE_UV"},ZO={[Jm]:"ENVMAP_MODE_REFRACTION"},jO={[dd]:"ENVMAP_BLENDING_MULTIPLY",[tS]:"ENVMAP_BLENDING_MIX",[aS]:"ENVMAP_BLENDING_ADD"},KO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183])});function bE(){let t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,a){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=a!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:a!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){let r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);let o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let u={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,a){let n=parseInt(e,10);return(n>=0?n-1:n+a/3)*3},parseNormalIndex:function(e,a){let n=parseInt(e,10);return(n>=0?n-1:n+a/3)*3},parseUVIndex:function(e,a){let n=parseInt(e,10);return(n>=0?n-1:n+a/2)*2},addVertex:function(e,a,n){let i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[a+0],i[a+1],i[a+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let a=this.vertices;this.object.geometry.vertices.push(a[e+0],a[e+1],a[e+2])},addVertexLine:function(e){let a=this.vertices;this.object.geometry.vertices.push(a[e+0],a[e+1],a[e+2])},addNormal:function(e,a,n){let i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[a+0],i[a+1],i[a+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,a,n){let i=this.vertices,s=this.object.geometry.normals;mS.fromArray(i,e),lg.fromArray(i,a),gS.fromArray(i,n),ma.subVectors(gS,lg),xS.subVectors(mS,lg),ma.cross(xS),ma.normalize(),s.push(ma.x,ma.y,ma.z),s.push(ma.x,ma.y,ma.z),s.push(ma.x,ma.y,ma.z)},addColor:function(e,a,n){let i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[a]!==void 0&&s.push(i[a+0],i[a+1],i[a+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,a,n){let i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[a+0],i[a+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let a=this.uvs;this.object.geometry.uvs.push(a[e+0],a[e+1])},addFace:function(e,a,n,i,s,r,o,l,u){let c=this.vertices.length,f=this.parseVertexIndex(e,c),d=this.parseVertexIndex(a,c),h=this.parseVertexIndex(n,c);if(this.addVertex(f,d,h),this.addColor(f,d,h),o!==void 0&&o!==""){let g=this.normals.length;f=this.parseNormalIndex(o,g),d=this.parseNormalIndex(l,g),h=this.parseNormalIndex(u,g),this.addNormal(f,d,h)}else this.addFaceNormal(f,d,h);if(i!==void 0&&i!==""){let g=this.uvs.length;f=this.parseUVIndex(i,g),d=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),this.addUV(f,d,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let a=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let s=this.parseVertexIndex(e[n],a);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,a){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let s=0,r=e.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,r=a.length;s<r;s++)this.addUVLine(this.parseUVIndex(a[s],i))}};return t.startObject("",!1),t}var gE,xE,vE,yE,pS,mS,lg,gS,xS,ma,gd,xd,vS=gs(()=>{md();gE=/^[og]\s*(.+)?/,xE=/^mtllib /,vE=/^usemtl /,yE=/^usemap /,pS=/\s+/,mS=new E,lg=new E,gS=new E,xS=new E,ma=new E,gd=new pe;xd=class extends cs{constructor(e){super(e),this.materials=null}load(e,a,n,i){let s=this,r=new Al(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){try{a(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let a=new bE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i=[];for(let o=0,l=n.length;o<l;o++){let u=n[o].trimStart();if(u.length===0)continue;let c=u.charAt(0);if(c!=="#")if(c==="v"){let f=u.split(pS);switch(f[0]){case"v":a.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(gd.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),vt),a.colors.push(gd.r,gd.g,gd.b)):a.colors.push(void 0,void 0,void 0);break;case"vn":a.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":a.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(c==="f"){let d=u.slice(1).trim().split(pS),h=[];for(let v=0,_=d.length;v<_;v++){let m=d[v];if(m.length>0){let x=m.split("/");h.push(x)}}let g=h[0];for(let v=1,_=h.length-1;v<_;v++){let m=h[v],x=h[v+1];a.addFace(g[0],m[0],x[0],g[1],m[1],x[1],g[2],m[2],x[2])}}else if(c==="l"){let f=u.substring(1).trim().split(" "),d=[],h=[];if(u.indexOf("/")===-1)d=f;else for(let g=0,v=f.length;g<v;g++){let _=f[g].split("/");_[0]!==""&&d.push(_[0]),_[1]!==""&&h.push(_[1])}a.addLineGeometry(d,h)}else if(c==="p"){let d=u.slice(1).trim().split(" ");a.addPointGeometry(d)}else if((i=gE.exec(u))!==null){let f=(" "+i[0].slice(1).trim()).slice(1);a.startObject(f)}else if(vE.test(u))a.object.startMaterial(u.substring(7).trim(),a.materialLibraries);else if(xE.test(u))a.materialLibraries.push(u.substring(7).trim());else if(yE.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(c==="s"){if(i=u.split(" "),i.length>1){let d=i[1].trim().toLowerCase();a.object.smooth=d!=="0"&&d!=="off"}else a.object.smooth=!0;let f=a.object.currentMaterial();f&&(f.smooth=a.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}a.finalize();let s=new Sl;if(s.materialLibraries=[].concat(a.materialLibraries),!(a.objects.length===1&&a.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=a.objects.length;o<l;o++){let u=a.objects[o],c=u.geometry,f=u.materials,d=c.type==="Line",h=c.type==="Points",g=!1;if(c.vertices.length===0)continue;let v=new Sn;v.setAttribute("position",new Qt(c.vertices,3)),c.normals.length>0&&v.setAttribute("normal",new Qt(c.normals,3)),c.colors.length>0&&(g=!0,v.setAttribute("color",new Qt(c.colors,3))),c.hasUVIndices===!0&&v.setAttribute("uv",new Qt(c.uvs,2));let _=[];for(let x=0,y=f.length;x<y;x++){let b=f[x],C=b.name+"_"+b.smooth+"_"+g,T=a.materials[C];if(this.materials!==null){if(T=this.materials.create(b.name),d&&T&&!(T instanceof pi)){let L=new pi;Ta.prototype.copy.call(L,T),L.color.copy(T.color),T=L}else if(h&&T&&!(T instanceof Mn)){let L=new Mn({size:10,sizeAttenuation:!1});Ta.prototype.copy.call(L,T),L.color.copy(T.color),L.map=T.map,T=L}}T===void 0&&(d?T=new pi:h?T=new Mn({size:1,sizeAttenuation:!1}):T=new wl,T.name=b.name,T.flatShading=!b.smooth,T.vertexColors=g,a.materials[C]=T),_.push(T)}let m;if(_.length>1){for(let x=0,y=f.length;x<y;x++){let b=f[x];v.addGroup(b.groupStart,b.groupCount,x)}d?m=new zr(v,_):h?m=new ls(v,_):m=new Fr(v,_)}else d?m=new zr(v,_[0]):h?m=new ls(v,_[0]):m=new Fr(v,_[0]);m.name=u.name,s.add(m)}else if(a.vertices.length>0){let o=new Mn({size:1,sizeAttenuation:!1}),l=new Sn;l.setAttribute("position",new Qt(a.vertices,3)),a.colors.length>0&&a.colors[0]!==void 0&&(l.setAttribute("color",new Qt(a.colors,3)),o.vertexColors=!0);let u=new ls(l,o);s.add(u)}return s}}});function wn(t,e){return t.length===e.length&&t.every(function(a,n){return a===e[n]})}function AE(t){return new TextEncoder().encode(t).buffer}function TE(t){return wn(t.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function LE(t,e,a){let n={min:new Array(t.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(t.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+a;i++)for(let s=0;s<t.itemSize;s++){let r;t.itemSize>4?r=t.array[i*t.itemSize+s]:(s===0?r=t.getX(i):s===1?r=t.getY(i):s===2?r=t.getZ(i):s===3&&(r=t.getW(i)),t.normalized===!0&&(r=Ll.normalize(r,t.array))),n.min[s]=Math.min(n.min[s],r),n.max[s]=Math.max(n.max[s],r)}return n}function wS(t){return Math.ceil(t/4)*4}function cg(t,e=0){let a=wS(t.byteLength);if(a!==t.byteLength){let n=new Uint8Array(a);if(n.set(new Uint8Array(t)),e!==0)for(let i=t.byteLength;i<a;i++)n[i]=e;return n.buffer}return t}function MS(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function EE(t,e){if(typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas){let a;return e==="image/jpeg"?a=.92:e==="image/webp"&&(a=.8),t.convertToBlob({type:e,quality:a})}else return new Promise(a=>t.toBlob(a,e))}var yS,vi,ae,ug,ea,bS,_E,_S,SE,ME,SS,wE,CE,dg,fg,hg,pg,mg,gg,xg,vg,yg,bg,_g,Sg,Mg,wg,Cg,CS=gs(()=>{md();yS={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},vi=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new fg(e)}),this.register(function(e){return new hg(e)}),this.register(function(e){return new xg(e)}),this.register(function(e){return new vg(e)}),this.register(function(e){return new yg(e)}),this.register(function(e){return new bg(e)}),this.register(function(e){return new pg(e)}),this.register(function(e){return new mg(e)}),this.register(function(e){return new gg(e)}),this.register(function(e){return new _g(e)}),this.register(function(e){return new Sg(e)}),this.register(function(e){return new Mg(e)}),this.register(function(e){return new wg(e)}),this.register(function(e){return new Cg(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,a,n,i){let s=new dg,r=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)r.push(this.pluginCallbacks[o](s));s.setPlugins(r),s.setTextureUtils(this.textureUtils),s.writeAsync(e,a,i).catch(n)}parseAsync(e,a){let n=this;return new Promise(function(i,s){n.parse(e,i,s,a)})}},ae={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ug="KHR_mesh_quantization",ea={};ea[Qm]=ae.NEAREST;ea[$m]=ae.NEAREST_MIPMAP_NEAREST;ea[eg]=ae.NEAREST_MIPMAP_LINEAR;ea[fd]=ae.LINEAR;ea[tg]=ae.LINEAR_MIPMAP_NEAREST;ea[hd]=ae.LINEAR_MIPMAP_LINEAR;ea[ns]=ae.CLAMP_TO_EDGE;ea[bl]=ae.REPEAT;ea[_l]=ae.MIRRORED_REPEAT;bS={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},_E=new pe,_S=12,SE=1179937895,ME=2,SS=8,wE=1313821514,CE=5130562;dg=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r183"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,a,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let i=this,s=i.buffers,r=i.json;n=i.options;let o=i.extensionsUsed,l=i.extensionsRequired,u=new Blob(s,{type:"application/octet-stream"}),c=Object.keys(o),f=Object.keys(l);if(c.length>0&&(r.extensionsUsed=c),f.length>0&&(r.extensionsRequired=f),r.buffers&&r.buffers.length>0&&(r.buffers[0].byteLength=u.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(u),d.onloadend=function(){let h=cg(d.result),g=new DataView(new ArrayBuffer(SS));g.setUint32(0,h.byteLength,!0),g.setUint32(4,CE,!0);let v=cg(AE(JSON.stringify(r)),32),_=new DataView(new ArrayBuffer(SS));_.setUint32(0,v.byteLength,!0),_.setUint32(4,wE,!0);let m=new ArrayBuffer(_S),x=new DataView(m);x.setUint32(0,SE,!0),x.setUint32(4,ME,!0);let y=_S+_.byteLength+v.byteLength+g.byteLength+h.byteLength;x.setUint32(8,y,!0);let b=new Blob([m,_,v,g,h],{type:"application/octet-stream"}),C=new FileReader;C.readAsArrayBuffer(b),C.onloadend=function(){a(C.result)}}}else if(r.buffers&&r.buffers.length>0){let d=new FileReader;d.readAsDataURL(u),d.onloadend=function(){let h=d.result;r.buffers[0].uri=h,a(r)}}else a(r)}serializeUserData(e,a){if(Object.keys(e.userData).length===0)return;let n=this.options,i=this.extensionsUsed;try{let s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){a.extensions===void 0&&(a.extensions={});for(let r in s.gltfExtensions)a.extensions[r]=s.gltfExtensions[r],i[r]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(a.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,a=!1){if(this.uids.has(e)===!1){let i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(a)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new E;for(let i=0,s=e.count;i<s;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let a=this.cache;if(a.attributesNormalized.has(e))return a.attributesNormalized.get(e);let n=e.clone(),i=new E;for(let s=0,r=n.count;s<r;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return a.attributesNormalized.set(e,n),n}applyTextureTransform(e,a){let n=!1,i={};(a.offset.x!==0||a.offset.y!==0)&&(i.offset=a.offset.toArray(),n=!0),a.rotation!==0&&(i.rotation=a.rotation,n=!0),(a.repeat.x!==1||a.repeat.y!==1)&&(i.scale=a.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,a){if(e===a)return e;function n(h){return h.colorSpace===vt?function(v){return v<.04045?v*.0773993808:Math.pow(v*.9478672986+.0521327014,2.4)}:function(v){return v}}e instanceof us&&(e=await this.decompressTextureAsync(e)),a instanceof us&&(a=await this.decompressTextureAsync(a));let i=e?e.image:null,s=a?a.image:null,r=Math.max(i?i.width:0,s?s.width:0),o=Math.max(i?i.height:0,s?s.height:0),l=MS();l.width=r,l.height=o;let u=l.getContext("2d",{willReadFrequently:!0});u.fillStyle="#00ffff",u.fillRect(0,0,r,o);let c=u.getImageData(0,0,r,o);if(i){u.drawImage(i,0,0,r,o);let h=n(e),g=u.getImageData(0,0,r,o).data;for(let v=2;v<g.length;v+=4)c.data[v]=h(g[v]/256)*256}if(s){u.drawImage(s,0,0,r,o);let h=n(a),g=u.getImageData(0,0,r,o).data;for(let v=1;v<g.length;v+=4)c.data[v]=h(g[v]/256)*256}u.putImageData(c,0,0);let d=(e||a).clone();return d.source=new Ur(l),d.colorSpace=Tl,d.channel=(e||a).channel,e&&a&&e.channel!==a.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,a=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,a)}processBuffer(e){let a=this.json,n=this.buffers;return a.buffers||(a.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,a,n,i,s){let r=this.json;r.bufferViews||(r.bufferViews=[]);let o;switch(a){case ae.BYTE:case ae.UNSIGNED_BYTE:o=1;break;case ae.SHORT:case ae.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;s===ae.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let u=wS(i*l),c=new DataView(new ArrayBuffer(u)),f=0;for(let g=n;g<n+i;g++){for(let v=0;v<e.itemSize;v++){let _;e.itemSize>4?_=e.array[g*e.itemSize+v]:(v===0?_=e.getX(g):v===1?_=e.getY(g):v===2?_=e.getZ(g):v===3&&(_=e.getW(g)),e.normalized===!0&&(_=Ll.normalize(_,e.array))),a===ae.FLOAT?c.setFloat32(f,_,!0):a===ae.INT?c.setInt32(f,_,!0):a===ae.UNSIGNED_INT?c.setUint32(f,_,!0):a===ae.SHORT?c.setInt16(f,_,!0):a===ae.UNSIGNED_SHORT?c.setUint16(f,_,!0):a===ae.BYTE?c.setInt8(f,_):a===ae.UNSIGNED_BYTE&&c.setUint8(f,_),f+=o}f%l!==0&&(f+=l-f%l)}let d={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:u};return s!==void 0&&(d.target=s),s===ae.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=u,r.bufferViews.push(d),{id:r.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let a=this,n=a.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){let s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){let r=cg(s.result),o={buffer:a.processBuffer(r),byteOffset:a.byteOffset,byteLength:r.byteLength};a.byteOffset+=r.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,a,n,i){let s=this.json,r={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=ae.FLOAT;else if(e.array.constructor===Int32Array)o=ae.INT;else if(e.array.constructor===Uint32Array)o=ae.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=ae.SHORT;else if(e.array.constructor===Uint16Array)o=ae.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=ae.BYTE;else if(e.array.constructor===Uint8Array)o=ae.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;let l=LE(e,n,i),u;a!==void 0&&(u=e===a.index?ae.ELEMENT_ARRAY_BUFFER:ae.ARRAY_BUFFER);let c=this.processBufferView(e,o,n,i,u),f={bufferView:c.id,byteOffset:c.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:r[e.itemSize]};return e.normalized===!0&&(f.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(f)-1}processImage(e,a,n,i="image/png"){if(e!==null){let s=this,r=s.cache,o=s.json,l=s.options,u=s.pending;r.images.has(e)||r.images.set(e,{});let c=r.images.get(e),f=i+":flipY/"+n.toString();if(c[f]!==void 0)return c[f];o.images||(o.images=[]);let d={mimeType:i},h=MS();h.width=Math.min(e.width,l.maxTextureSize),h.height=Math.min(e.height,l.maxTextureSize);let g=h.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,h.height),g.scale(1,-1)),e.data!==void 0){a!==pd&&console.error("GLTFExporter: Only RGBAFormat is supported.",a),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let _=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<_.length;m+=4)_[m+0]=e.data[m+0],_[m+1]=e.data[m+1],_[m+2]=e.data[m+2],_[m+3]=e.data[m+3];g.putImageData(new ImageData(_,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,h.width,h.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?u.push(EE(h,i).then(_=>s.processBufferViewImage(_)).then(_=>{d.bufferView=_})):d.uri=Pr.getDataURL(h,i);let v=o.images.push(d)-1;return c[f]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let a=this.json;a.samplers||(a.samplers=[]);let n={magFilter:ea[e.magFilter],minFilter:ea[e.minFilter],wrapS:ea[e.wrapS],wrapT:ea[e.wrapT]};return a.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,i=this.cache,s=this.json;if(i.textures.has(e))return i.textures.get(e);s.textures||(s.textures=[]),e instanceof us&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let r=e.userData.mimeType;r==="image/webp"&&(r="image/png");let o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,r)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(u){u.writeTexture&&await u.writeTexture(e,o)});let l=s.textures.push(o)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){let a=this.cache,n=this.json;if(a.materials.has(e))return a.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let s=e.color.toArray().concat([e.opacity]);if(wn(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){let o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let u={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),i.emissiveTexture=u}}if(e.normalMap){let o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){let o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Vm&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,i)});let r=n.materials.push(i)-1;return a.materials.set(e,r),r}async processMeshAsync(e){let a=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let b=0,C=e.material.length;b<C;b++)i.push(e.material[b].uuid);else i.push(e.material.uuid);let s=i.join(":");if(a.meshes.has(s))return a.meshes.get(s);let r=e.geometry,o;e.isLineSegments?o=ae.LINES:e.isLineLoop?o=ae.LINE_LOOP:e.isLine?o=ae.LINE_STRIP:e.isPoints?o=ae.POINTS:o=e.material.wireframe?ae.LINES:ae.TRIANGLES;let l={},u={},c=[],f=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},h=r.getAttribute("normal");h!==void 0&&!this.isNormalizedNormalAttribute(h)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),r.setAttribute("normal",this.createNormalizedNormalAttribute(h)));let g=null;for(let b in r.attributes){if(b.slice(0,5)==="morph")continue;let C=r.attributes[b];if(b=d[b]||b.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(b)||(b="_"+b),a.attributes.has(this.getUID(C))){u[b]=a.attributes.get(this.getUID(C));continue}g=null;let L=C.array;b==="JOINTS_0"&&!(L instanceof Uint16Array)&&!(L instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=vi.Utils.toTypedBufferAttribute(C,Uint16Array)):(L instanceof Uint32Array||L instanceof Int32Array)&&!b.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${b}" converted to type FLOAT.`),g=vi.Utils.toTypedBufferAttribute(C,Float32Array));let A=this.processAccessor(g||C,r);A!==null&&(b.startsWith("_")||this.detectMeshQuantization(b,C),u[b]=A,a.attributes.set(this.getUID(C),A))}if(h!==void 0&&r.setAttribute("normal",h),Object.keys(u).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let b=[],C=[],T={};if(e.morphTargetDictionary!==void 0)for(let L in e.morphTargetDictionary)T[e.morphTargetDictionary[L]]=L;for(let L=0;L<e.morphTargetInfluences.length;++L){let A={},P=!1;for(let N in r.morphAttributes){if(N!=="position"&&N!=="normal"){P||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),P=!0);continue}let D=r.morphAttributes[N][L],H=N.toUpperCase(),F=r.attributes[N];if(a.attributes.has(this.getUID(D,!0))){A[H]=a.attributes.get(this.getUID(D,!0));continue}let oe=D.clone();if(!r.morphTargetsRelative)for(let M=0,V=D.count;M<V;M++)for(let ne=0;ne<D.itemSize;ne++)ne===0&&oe.setX(M,D.getX(M)-F.getX(M)),ne===1&&oe.setY(M,D.getY(M)-F.getY(M)),ne===2&&oe.setZ(M,D.getZ(M)-F.getZ(M)),ne===3&&oe.setW(M,D.getW(M)-F.getW(M));A[H]=this.processAccessor(oe,r),a.attributes.set(this.getUID(F,!0),A[H])}f.push(A),b.push(e.morphTargetInfluences[L]),e.morphTargetDictionary!==void 0&&C.push(T[L])}l.weights=b,C.length>0&&(l.extras={},l.extras.targetNames=C)}let v=Array.isArray(e.material);if(v&&r.groups.length===0)return null;let _=!1;if(v&&r.index===null){let b=[];for(let C=0,T=r.attributes.position.count;C<T;C++)b[C]=C;r.setIndex(b),_=!0}let m=v?e.material:[e.material],x=v?r.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let b=0,C=x.length;b<C;b++){let T={mode:o,attributes:u};if(this.serializeUserData(r,T),f.length>0&&(T.targets=f),r.index!==null){let A=this.getUID(r.index);(x[b].start!==void 0||x[b].count!==void 0)&&(A+=":"+x[b].start+":"+x[b].count),a.attributes.has(A)?T.indices=a.attributes.get(A):(T.indices=this.processAccessor(r.index,r,x[b].start,x[b].count),a.attributes.set(A,T.indices)),T.indices===null&&delete T.indices}let L=await this.processMaterialAsync(m[x[b].materialIndex]);L!==null&&(T.material=L),c.push(T)}_===!0&&r.setIndex(null),l.primitives=c,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(b){b.writeMesh&&b.writeMesh(e,l)});let y=n.meshes.push(l)-1;return a.meshes.set(s,y),y}detectMeshQuantization(e,a){if(this.extensionsUsed[ug])return;let n;switch(a.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}a.normalized&&(n+=" normalized");let i=e.split("_",1)[0];yS[i]&&yS[i].includes(n)&&(this.extensionsUsed[ug]=!0,this.extensionsRequired[ug]=!0)}processCamera(e){let a=this.json;a.cameras||(a.cameras=[]);let n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Ll.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),a.cameras.push(i)-1}processAnimation(e,a){let n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=vi.Utils.mergeMorphTargetTracks(e.clone(),a);let s=e.tracks,r=[],o=[];for(let u=0;u<s.length;++u){let c=s[u],f=xe.parseTrackName(c.name),d=xe.findNode(a,f.nodeName),h=bS[f.propertyName];if(f.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(f.objectIndex):d=void 0),!d||!h){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}let g=1,v=c.values.length/c.times.length;h===bS.morphTargetInfluences&&(v/=d.morphTargetInfluences.length);let _;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",v/=3):c.getInterpolation()===is?_="STEP":_="LINEAR",o.push({input:this.processAccessor(new ut(c.times,g)),output:this.processAccessor(new ut(c.values,v)),interpolation:_}),r.push({sampler:o.length-1,target:{node:i.get(d),path:h}})}let l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:r};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let a=this.json,n=this.nodeMap,i=a.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;let r=e.skeleton.bones[0];if(r===void 0)return null;let o=[],l=new Float32Array(s.bones.length*16),u=new yt;for(let f=0;f<s.bones.length;++f)o.push(n.get(s.bones[f])),u.copy(s.boneInverses[f]),u.multiply(e.bindMatrix).toArray(l,f*16);return a.skins===void 0&&(a.skins=[]),a.skins.push({inverseBindMatrices:this.processAccessor(new ut(l,16)),joints:o,skeleton:n.get(r)}),i.skin=a.skins.length-1}async processNodeAsync(e){let a=this.json,n=this.options,i=this.nodeMap;if(a.nodes||(a.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let s={};if(n.trs){let o=e.quaternion.toArray(),l=e.position.toArray(),u=e.scale.toArray();wn(o,[0,0,0,1])||(s.rotation=o),wn(l,[0,0,0])||(s.translation=l),wn(u,[1,1,1])||(s.scale=u)}else e.matrixAutoUpdate&&e.updateMatrix(),TE(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){let o=await this.processMeshAsync(e);o!==null&&(s.mesh=o)}else e.isCamera&&(s.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let r=a.nodes.push(s)-1;if(i.set(e,r),e.children.length>0){let o=[];for(let l=0,u=e.children.length;l<u;l++){let c=e.children[l];if(c.visible||n.onlyVisible===!1){let f=await this.processNodeAsync(c);f!==null&&o.push(f)}}o.length>0&&(s.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,s)}),r}async _processNodeWithPivotAsync(e){let a=this.json,n=this.options,i=this.nodeMap,s=e.pivot,r={},o=e.quaternion.toArray(),l=[e.position.x+s.x,e.position.y+s.y,e.position.z+s.z],u=e.scale.toArray();wn(o,[0,0,0,1])||(r.rotation=o),wn(l,[0,0,0])||(r.translation=l),wn(u,[1,1,1])||(r.scale=u),r.extras={pivot:s.toArray()},e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r);let c=a.nodes.push(r)-1;i.set(e,c);let f={},d=[-s.x,-s.y,-s.z];if(wn(d,[0,0,0])||(f.translation=d),e.isMesh||e.isLine||e.isPoints){let v=await this.processMeshAsync(e);v!==null&&(f.mesh=v)}else e.isCamera&&(f.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let g=[a.nodes.push(f)-1];if(e.children.length>0){let v=[];for(let _=0,m=e.children.length;_<m;_++){let x=e.children[_];if(x.visible||n.onlyVisible===!1){let y=await this.processNodeAsync(x);y!==null&&v.push(y)}}v.length>0&&(f.children=v)}return r.children=g,await this._invokeAllAsync(function(v){v.writeNode&&v.writeNode(e,r)}),c}async processSceneAsync(e){let a=this.json,n=this.options;a.scenes||(a.scenes=[],a.scene=0);let i={};e.name!==""&&(i.name=e.name),a.scenes.push(i);let s=[];for(let r=0,o=e.children.length;r<o;r++){let l=e.children[r];if(l.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(l);u!==null&&s.push(u)}}s.length>0&&(i.nodes=s),this.serializeUserData(e,i)}async processObjectsAsync(e){let a=new Or;a.name="AuxScene";for(let n=0;n<e.length;n++)a.children.push(e[n]);await this.processSceneAsync(a)}async processInputAsync(e){let a=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});let n=[];for(let i=0;i<e.length;i++)e[i]instanceof Or?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<a.animations.length;++i)this.processAnimation(a.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let a=0,n=this.plugins.length;a<n;a++)await e(this.plugins[a])}},fg=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,a){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,i=n.json,s=n.extensionsUsed,r={};e.name&&(r.name=e.name),r.color=e.color.toArray(),r.intensity=e.intensity,e.isDirectionalLight?r.type="directional":e.isPointLight?(r.type="point",e.distance>0&&(r.range=e.distance)):e.isSpotLight&&(r.type="spot",e.distance>0&&(r.range=e.distance),r.spot={},r.spot.innerConeAngle=(1-e.penumbra)*e.angle,r.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);let o=i.extensions[this.name].lights;o.push(r),a.extensions=a.extensions||{},a.extensions[this.name]={light:o.length-1}}},hg=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,a){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;a.extensions=a.extensions||{},a.extensions[this.name]={},i[this.name]=!0,a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=.9}},pg=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,i=n.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){let r={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(r,e.clearcoatMap),s.clearcoatTexture=r}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let r={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(r,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=r}if(e.clearcoatNormalMap){let r={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(r.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(r,e.clearcoatNormalMap),s.clearcoatNormalTexture=r}a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},mg=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let i=this.writer.extensionsUsed,s={};s.dispersion=e.dispersion,a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},gg=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,i=n.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){let r={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(r,e.iridescenceMap),s.iridescenceTexture=r}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let r={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(r,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=r}a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},xg=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){let r={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(r,e.transmissionMap),s.transmissionTexture=r}a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},vg=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){let r={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(r,e.thicknessMap),s.thicknessTexture=r}e.attenuationDistance!==1/0&&(s.attenuationDistance=e.attenuationDistance),s.attenuationColor=e.attenuationColor.toArray(),a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},yg=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let i=this.writer.extensionsUsed,s={};s.ior=e.ior,a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},bg=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(_E)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,i=n.extensionsUsed,s={};if(e.specularIntensityMap){let r={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(r,e.specularIntensityMap),s.specularTexture=r}if(e.specularColorMap){let r={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(r,e.specularColorMap),s.specularColorTexture=r}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},_g=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,i=n.extensionsUsed,s={};if(e.sheenRoughnessMap){let r={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(r,e.sheenRoughnessMap),s.sheenRoughnessTexture=r}if(e.sheenColorMap){let r={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(r,e.sheenColorMap),s.sheenColorTexture=r}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},Sg=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,a){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,i=n.extensionsUsed,s={};if(e.anisotropyMap){let r={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(r,e.anisotropyMap),s.anisotropyTexture=r}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},Mg=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,a){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let i=this.writer.extensionsUsed,s={};s.emissiveStrength=e.emissiveIntensity,a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},wg=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,a){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,i=n.extensionsUsed,s={};if(e.bumpMap){let r={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(r,e.bumpMap),s.bumpTexture=r}s.bumpFactor=e.bumpScale,a.extensions=a.extensions||{},a.extensions[this.name]=s,i[this.name]=!0}},Cg=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,a){if(!e.isInstancedMesh)return;let n=this.writer,i=e,s=new Float32Array(i.count*3),r=new Float32Array(i.count*4),o=new Float32Array(i.count*3),l=new yt,u=new E,c=new Aa,f=new E;for(let h=0;h<i.count;h++)i.getMatrixAt(h,l),l.decompose(u,c,f),u.toArray(s,h*3),c.toArray(r,h*4),f.toArray(o,h*3);let d={TRANSLATION:n.processAccessor(new ut(s,3)),ROTATION:n.processAccessor(new ut(r,4)),SCALE:n.processAccessor(new ut(o,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),a.extensions=a.extensions||{},a.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};vi.Utils={insertKeyframe:function(t,e){let n=t.getValueSize(),i=new t.TimeBufferType(t.times.length+1),s=new t.ValueBufferType(t.values.length+n),r=t.createInterpolant(new t.ValueBufferType(n)),o;if(t.times.length===0){i[0]=e;for(let l=0;l<n;l++)s[l]=0;o=0}else if(e<t.times[0]){if(Math.abs(t.times[0]-e)<.001)return 0;i[0]=e,i.set(t.times,1),s.set(r.evaluate(e),0),s.set(t.values,n),o=0}else if(e>t.times[t.times.length-1]){if(Math.abs(t.times[t.times.length-1]-e)<.001)return t.times.length-1;i[i.length-1]=e,i.set(t.times,0),s.set(t.values,0),s.set(r.evaluate(e),t.values.length),o=i.length-1}else for(let l=0;l<t.times.length;l++){if(Math.abs(t.times[l]-e)<.001)return l;if(t.times[l]<e&&t.times[l+1]>e){i.set(t.times.slice(0,l+1),0),i[l+1]=e,i.set(t.times.slice(l+1),l+2),s.set(t.values.slice(0,(l+1)*n),0),s.set(r.evaluate(e),(l+1)*n),s.set(t.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return t.times=i,t.values=s,o},mergeMorphTargetTracks:function(t,e){let a=[],n={},i=t.tracks;for(let s=0;s<i.length;++s){let r=i[s],o=xe.parseTrackName(r.name),l=xe.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){a.push(r);continue}if(r.createInterpolant!==r.InterpolantFactoryMethodDiscrete&&r.createInterpolant!==r.InterpolantFactoryMethodLinear){if(r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),r=r.clone(),r.setInterpolation(Nr)}let u=l.morphTargetInfluences.length,c=l.morphTargetDictionary[o.propertyIndex];if(c===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let f;if(n[l.uuid]===void 0){f=r.clone();let h=new f.ValueBufferType(u*f.times.length);for(let g=0;g<f.times.length;g++)h[g*u+c]=f.values[g];f.name=(o.nodeName||"")+".morphTargetInfluences",f.values=h,n[l.uuid]=f,a.push(f);continue}let d=r.createInterpolant(new r.ValueBufferType(1));f=n[l.uuid];for(let h=0;h<f.times.length;h++)f.values[h*u+c]=d.evaluate(f.times[h]);for(let h=0;h<r.times.length;h++){let g=this.insertKeyframe(f,r.times[h]);f.values[g*u+c]=r.values[h]}}return t.tracks=a,t},toTypedBufferAttribute:function(t,e){let a=new ut(new e(t.count*t.itemSize),t.itemSize,!1);if(!t.normalized&&!t.isInterleavedBufferAttribute)return a.array.set(t.array),a;for(let n=0,i=t.count;n<i;n++)for(let s=0;s<t.itemSize;s++)a.setComponent(n,s,t.getComponent(n,s));return a}}});var AS={};qg(AS,{convertObj:()=>IE});async function IE(t,e){if(typeof t!="string"||t.length>20*1024*1024)throw Error("OBJ demasiado grande.");let a={m:1,cm:.01,mm:.001}[e];if(!a)throw Error("Selecciona la unidad del modelo.");if(!/^v\s/m.test(t)||!/^f\s/m.test(t))throw Error("El archivo no contiene superficies OBJ.");let n=new xd().parse(t);try{let i=0;if(n.traverse(d=>{d.isMesh&&(i+=d.geometry.attributes.position.count,d.material=new Ml({name:"Tapizado",color:"#aaa9a5",roughness:.9}))}),i===0||i>3e5)throw Error("Usa un modelo entre 1 y 300.000 v\xE9rtices resultantes.");n.scale.setScalar(a),n.updateMatrixWorld(!0);let s=new Wa().setFromObject(n),r=s.getSize(new E),o=s.getCenter(new E),l=Math.round(r.x*1e3)/10,u=Math.round(r.z*1e3)/10,c=Math.round(r.y*1e3)/10;if(![l,u,c].every(Number.isFinite)||l<20||u<20||c<10||l>1e3||u>1e3||c>500)throw Error("Las dimensiones no corresponden a un mueble. Revisa las unidades y orientaci\xF3n del OBJ.");return n.position.set(-o.x,-s.min.y,-o.z),n.updateMatrixWorld(!0),{buffer:await new vi().parseAsync(n,{binary:!0,onlyVisible:!0}),width:l,depth:u,height:c}}finally{n.traverse(i=>{i.geometry?.dispose(),Array.isArray(i.material)?i.material.forEach(s=>s.dispose()):i.material?.dispose()})}}var TS=gs(()=>{vS();CS();md()});var Bt=me(le()),DS=me(d_());var p=me(le());var si=me(le());function Xo(t,e={}){let a=(0,si.lazy)(t);return function(i){return si.default.createElement(si.Suspense,{fallback:e.loading?si.default.createElement(e.loading):null},si.default.createElement(a,{...i}))}}var yc=me(le());var f_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase()),Dp=t=>{let e=hC(t);return e.charAt(0).toUpperCase()+e.slice(1)},vc=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim(),h_=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var Wo=me(le());var p_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var m_=(0,Wo.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:r,...o},l)=>(0,Wo.createElement)("svg",{ref:l,...p_,width:e,height:e,stroke:t,strokeWidth:n?Number(a)*24/Number(e):a,className:vc("lucide",i),...!s&&!h_(o)&&{"aria-hidden":"true"},...o},[...r.map(([u,c])=>(0,Wo.createElement)(u,c)),...Array.isArray(s)?s:[s]]));var z=(t,e)=>{let a=(0,yc.forwardRef)(({className:n,...i},s)=>(0,yc.createElement)(m_,{ref:s,iconNode:e,className:vc(`lucide-${f_(Dp(t))}`,`lucide-${t}`,n),...i}));return a.displayName=Dp(t),a};var pC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Yo=z("arrow-left",pC);var mC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],At=z("arrow-right",mC);var gC=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Zo=z("arrow-up-right",gC);var xC=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],hn=z("box",xC);var vC=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wi=z("check",vC);var yC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],jo=z("chevron-left",yC);var bC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ko=z("chevron-right",bC);var _C=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Jo=z("credit-card",_C);var SC=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],mr=z("factory",SC);var MC=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],Qo=z("lock-keyhole",MC);var wC=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$o=z("mail",wC);var CC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Yi=z("map-pin",CC);var AC=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],el=z("menu",AC);var TC=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Zi=z("message-circle",TC);var LC=[["path",{d:"M5 12h14",key:"1ays0h"}]],tl=z("minus",LC);var EC=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],al=z("navigation",EC);var IC=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ji=z("pause",IC);var DC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ri=z("play",DC);var NC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],nl=z("plus",NC);var PC=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],gr=z("ruler",PC);var UC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xr=z("search",UC);var RC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],il=z("shield-check",RC);var OC=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],sl=z("shopping-bag",OC);var BC=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],rl=z("sliders-horizontal",BC);var FC=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],vr=z("truck",FC);var zC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ol=z("user",zC);var kC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ll=z("x",kC);var ul={products:[{id:"aurora",name:"Sof\xE1 cama Aurora",depth:170,image:"./asset-aurora.webp",price:129e4,width:270,active:!0,colors:["Arena","Gris","Petr\xF3leo","Rosa"],height:90,usdzUrl:"",category:"Sof\xE1s cama",modelUrl:"./asset-modulo-demo.glb",videoUrl:"",modelDemo:!0,description:"Fabricada a tu medida. Elige configuraci\xF3n, tapizado y color con el acompa\xF1amiento de nuestro taller.",colorImages:[]},{id:"bruna",name:"Modular Bruna",depth:170,image:"./asset-sala-creativa.webp",price:245e4,width:270,active:!0,colors:["Arena","Gris","Petr\xF3leo","Rosa"],height:90,usdzUrl:"",category:"Modulares",modelUrl:"./asset-modulo-demo.glb",videoUrl:"",modelDemo:!0,description:"Fabricada a tu medida. Elige configuraci\xF3n, tapizado y color con el acompa\xF1amiento de nuestro taller.",colorImages:[]},{id:"canela",name:"Juego Canela",depth:170,image:"./asset-sala-calida.webp",price:2189e3,width:270,active:!0,colors:["Arena","Gris","Petr\xF3leo","Rosa"],height:90,usdzUrl:"",category:"Salas completas",modelUrl:"./asset-modulo-demo.glb",videoUrl:"",modelDemo:!0,description:"Fabricada a tu medida. Elige configuraci\xF3n, tapizado y color con el acompa\xF1amiento de nuestro taller.",colorImages:[{url:"./asset-sala-calida.webp",color:"Arena",alt:"Juego Canela Arena \xB7 imagen ilustrativa"},{url:"./asset-canela-rosa-generada-v1.webp",color:"Rosa",alt:"Juego Canela Rosa \xB7 imagen ilustrativa generada"},{url:"./asset-canela-gris-generada-v1.webp",color:"Gris",alt:"Juego Canela Gris \xB7 imagen ilustrativa generada"}]},{id:"milan",name:"Esquinero Mil\xE1n",depth:170,image:"./asset-milan.webp",price:289e4,width:270,active:!0,colors:["Arena","Gris","Petr\xF3leo","Rosa"],height:90,usdzUrl:"",category:"Esquineros",modelUrl:"./asset-modulo-demo.glb",videoUrl:"",modelDemo:!0,description:"Fabricada a tu medida. Elige configuraci\xF3n, tapizado y color con el acompa\xF1amiento de nuestro taller.",colorImages:[]},{id:"nara",name:"Reclinable Nara",depth:170,image:"./asset-nara.webp",price:185e4,width:270,active:!0,colors:["Arena","Gris","Petr\xF3leo","Rosa"],height:90,usdzUrl:"",category:"Reclinables",modelUrl:"./asset-modulo-demo.glb",videoUrl:"",modelDemo:!0,description:"Fabricada a tu medida. Elige configuraci\xF3n, tapizado y color con el acompa\xF1amiento de nuestro taller.",colorImages:[]},{id:"rose",name:"Poltronas Ros\xE9 \xB7 par",depth:170,image:"./asset-rose.webp",price:118e4,width:270,active:!0,colors:["Arena","Gris","Petr\xF3leo","Rosa"],height:90,usdzUrl:"",category:"Poltronas",modelUrl:"./asset-modulo-demo.glb",videoUrl:"",modelDemo:!0,description:"Fabricada a tu medida. Elige configuraci\xF3n, tapizado y color con el acompa\xF1amiento de nuestro taller.",colorImages:[]}],settings:{demo:!0,email:"dekoramma@gmail.com",hours:"Lun\u2013S\xE1b 10:30\u201319:00 \xB7 Dom y festivos 11:00\u201318:00",phone:"573163072132",taxId:"",terms:`1. Qui\xE9n te atiende
Dekoramma \xB7 Estilo y arte es la marca comercial de la tienda ubicada en Calle 59C Sur #89A-22, Bosa, Bogot\xE1 D. C. La raz\xF3n social o nombre del comerciante y el NIT deben completarse antes de abrir ventas. Atenci\xF3n: dekoramma@gmail.com y WhatsApp 3163072132.

2. Antes de confirmar tu compra
Revisa la referencia, cantidad, color, medidas, materiales, tipo de patas y disponibilidad. La confirmaci\xF3n comercial debe indicar el precio total, impuestos aplicables, costo de env\xEDo, servicios adicionales y fecha o plazo de entrega. Si el mueble es a medida, la cotizaci\xF3n debe incluir un resumen de las especificaciones aprobadas.

3. Solicitud, pago y fabricaci\xF3n
En esta versi\xF3n del sitio el bot\xF3n de compra registra una solicitud para atenci\xF3n; no ejecuta un cobro ni aprueba un cr\xE9dito. El inicio de fabricaci\xF3n, anticipo, saldo y condiciones de pago deber\xE1n quedar acordados por escrito en la cotizaci\xF3n. No se presumir\xE1n aceptadas modificaciones de dise\xF1o o precio que no hayas confirmado.

4. Fotograf\xEDas y personalizaci\xF3n
Las fotograf\xEDas y modelos 3D facilitan la elecci\xF3n. La pantalla y la iluminaci\xF3n pueden alterar la percepci\xF3n del color; solicita una muestra cuando el acabado sea decisivo. La referencia contratada y sus especificaciones acordadas deben corresponder al producto entregado. Un aviso sobre variaciones visuales no elimina tus derechos por informaci\xF3n o productos que no correspondan.

5. Entrega
Indica direcci\xF3n, ciudad y condiciones de acceso: puertas, ascensor, escaleras y restricciones del edificio. La tienda debe confirmar cobertura, costo, armado y plazo antes de cerrar la compra. No se promete env\xEDo gratuito ni cobertura inmediata sin esa confirmaci\xF3n. Comunica cualquier novedad de entrega mediante los canales de atenci\xF3n y conserva la referencia de tu solicitud.

6. Cambios, cancelaciones y reclamos
La garant\xEDa, el retracto, la reversi\xF3n de pago y los cambios comerciales son tr\xE1mites diferentes. Las condiciones particulares no pueden suprimir derechos obligatorios. Consulta las secciones espec\xEDficas de este centro y solicita por escrito cualquier cambio en un pedido a medida antes de su fabricaci\xF3n.

7. Alcance del borrador
Este texto es una propuesta para revisi\xF3n. Antes de publicarlo deben completarse la identificaci\xF3n del vendedor, las reglas de anticipos, entrega, aceptaci\xF3n del pedido, facturaci\xF3n y cambios comerciales. La fecha y versi\xF3n definitivas deben quedar visibles.`,address:"Calle 59C Sur #89A-22, Bosa, Bogot\xE1 D. C., Colombia",privacy:`1. Responsable y contacto
El responsable del tratamiento ser\xE1 la persona o empresa que opere Dekoramma; su nombre legal y NIT deben incorporarse antes de publicar esta pol\xEDtica. Canal propuesto para consultas y reclamos: dekoramma@gmail.com. Direcci\xF3n comercial: Calle 59C Sur #89A-22, Bosa, Bogot\xE1 D. C.

2. Datos y finalidades
La tienda solicita nombre, tel\xE9fono, correo, ciudad, direcci\xF3n de entrega y datos de la solicitud para responder cotizaciones, gestionar pedidos y atender novedades. Recoge solo informaci\xF3n necesaria. La autorizaci\xF3n para atender una compra no debe utilizarse como autorizaci\xF3n autom\xE1tica para campa\xF1as publicitarias; cualquier finalidad adicional debe informarse y contar con la base correspondiente.

3. Ubicaci\xF3n y c\xE1mara
La ubicaci\xF3n del dispositivo solo se solicita cuando eliges compartirla para una entrega. La pantalla actual prepara un enlace y un mensaje que t\xFA revisas antes de enviarlo. La funci\xF3n de realidad aumentada requiere permiso del dispositivo y no implementa grabaci\xF3n ni env\xEDo de fotograf\xEDas del hogar a la tienda.

4. Proveedores y seguridad
El alojamiento, transportadores o proveedores de pago podr\xE1n requerir datos estrictamente relacionados con su funci\xF3n cuando esas integraciones se activen. Antes de publicar se documentar\xE1n los encargados, transferencias aplicables, medidas de protecci\xF3n y per\xEDodo de conservaci\xF3n. Esta versi\xF3n no captura n\xFAmeros completos de tarjeta ni claves bancarias.

5. Tus derechos
Puedes solicitar conocer, actualizar o rectificar tus datos, consultar su uso, pedir prueba de autorizaci\xF3n y solicitar revocatoria o supresi\xF3n cuando proceda. Env\xEDa tu solicitud al canal indicado, con informaci\xF3n suficiente para verificar tu identidad y explicar lo que necesitas. Se atender\xE1 dentro de los t\xE9rminos legales aplicables; no necesitas enviar documentos sensibles por canales p\xFAblicos.

6. Almacenamiento del navegador
La tienda usa una cookie de sesi\xF3n para el administrador y almacenamiento local para la bolsa y la referencia privada de seguimiento. No se ha incorporado una herramienta de publicidad comportamental en esta versi\xF3n. Si se agregan anal\xEDtica o publicidad, deber\xE1 actualizarse la informaci\xF3n y la gesti\xF3n de consentimientos que corresponda.

7. Pendientes de aprobaci\xF3n
Completar responsable legal, encargados reales, retenci\xF3n, procedimiento de derechos y versi\xF3n de la pol\xEDtica. Esta propuesta requiere revisi\xF3n antes de recolectar datos de clientes en producci\xF3n.`,facebook:"https://www.facebook.com/dekoramma",warranty:`1. Compra con informaci\xF3n clara
Cada ficha y comprobante de compra deben identificar el producto y sus condiciones de garant\xEDa. La duraci\xF3n por estructura, tapizado, mecanismos, colchones y dem\xE1s componentes queda pendiente de confirmar con Dekoramma. No se trasladan al negocio los plazos anunciados por otra tienda.

2. C\xF3mo solicitar atenci\xF3n
Escribe a dekoramma@gmail.com o al WhatsApp 3163072132 e indica tu nombre, referencia del producto, fecha aproximada de compra, descripci\xF3n de la falla y un medio de contacto. Puedes aportar fotograf\xEDas o video para facilitar el diagn\xF3stico. Si no tienes la factura a mano, la tienda revisar\xE1 otros medios que permitan identificar la compra; no se presenta la factura como el \xFAnico soporte admisible.

3. Revisi\xF3n y soluci\xF3n
La tienda deber\xE1 registrar la solicitud, explicar c\xF3mo se revisar\xE1 el producto y comunicar la soluci\xF3n aplicable. La reparaci\xF3n, cambio o devoluci\xF3n se determinar\xE1n conforme a la garant\xEDa legal y a las circunstancias del caso. No se condiciona el ejercicio de derechos a pagos o exclusiones generales que desconozcan la ley.

4. Uso y cuidado
Conserva las instrucciones entregadas con el mueble. Antes de aplicar qu\xEDmicos o desmontar mecanismos, consulta el cuidado adecuado para esa tela o material. El desgaste, el uso indebido y las intervenciones requieren evaluaci\xF3n concreta; no se presume que cualquier marca o da\xF1o excluya autom\xE1ticamente la garant\xEDa.

5. Informaci\xF3n por completar
La tienda debe aprobar la tabla de cobertura por categor\xEDa, el canal de radicaci\xF3n, las instrucciones de cuidado, el procedimiento de recogida y los responsables de responder. Esta propuesta no crea una garant\xEDa comercial extendida ni reemplaza la garant\xEDa legal.`,heroImage:"./asset-sala-industrial.webp",heroTitle:"No la escogemos. La fabricamos.",instagram:"https://www.instagram.com/dekoramma/",legalName:"",storeName:"Dekoramma",legalDraft:!0,withdrawal:`Derecho de retracto
En las ventas a distancia a las que les aplica, el retracto puede ejercerse dentro de los cinco d\xEDas h\xE1biles siguientes a la entrega del bien. Existen excepciones legales, entre ellas determinados bienes confeccionados conforme a especificaciones del consumidor o claramente personalizados. Esa excepci\xF3n no elimina la garant\xEDa por defectos ni permite clasificar autom\xE1ticamente todo el cat\xE1logo como personalizado.

Para solicitarlo, escribe a dekoramma@gmail.com e identifica la compra y tu intenci\xF3n de ejercer el derecho. La tienda indicar\xE1 el procedimiento de devoluci\xF3n y los datos necesarios. Para comercio electr\xF3nico, la devoluci\xF3n de dinero no debe exceder quince d\xEDas calendario una vez ejercido el derecho y cumplidas las obligaciones de devoluci\xF3n del producto y entrega de los datos correctos requeridos, seg\xFAn la regulaci\xF3n vigente. Deben respetarse las condiciones legales sobre devoluci\xF3n y costos aplicables.

Reversi\xF3n de pago
Es un mecanismo distinto, previsto para determinados pagos electr\xF3nicos y situaciones legales como operaciones no solicitadas, fraude o problemas con el producto o su entrega. Su tr\xE1mite involucra al proveedor y al emisor del instrumento de pago dentro de los plazos aplicables. Al activar la pasarela, esta secci\xF3n deber\xE1 indicar el procedimiento operativo concreto y los canales correspondientes.

Este borrador debe verificarse con las condiciones de venta definitivas. No impone renuncias generales ni sustituye la evaluaci\xF3n de cada caso.`,mapsPlaceId:"",paymentNote:"Consulta disponibilidad y condiciones con un asesor. El env\xEDo se confirma seg\xFAn tu ciudad. Las cuotas mostradas son una divisi\xF3n ilustrativa del precio, sin incluir intereses ni otros cargos.",announcement:"Hecho a tu medida \xB7 Env\xEDos a toda Colombia",legalVersion:"Borrador v1 \xB7 11/09/2026",registration:"",documentation:`Para verificar la identidad comercial puedes solicitar la informaci\xF3n tributaria y de registro al correo de la tienda. Indica si necesitas RUT, certificado de C\xE1mara de Comercio o datos para facturaci\xF3n, y el prop\xF3sito de la solicitud. Dekoramma revisar\xE1 qu\xE9 documento corresponde y compartir\xE1 una versi\xF3n adecuada por un canal privado.

La raz\xF3n social o nombre del comerciante, NIT, direcci\xF3n y contacto deben estar visibles una vez confirmados. Como criterio de privacidad, no se publicar\xE1n autom\xE1ticamente copias completas de documentos con firmas, identificaciones o datos personales adicionales. No se presenta esta pantalla como certificaci\xF3n de registro ni se afirma contar con documentos que todav\xEDa no han sido aportados.`,paymentMethods:["Addi","Sistecr\xE9dito","PSE","Bold","Nequi","Daviplata","Vanti Listo"],marketingEnabled:!0},content:{faq:[{id:"medidas",text:"Confirmamos las medidas de tu espacio, los accesos y la configuraci\xF3n antes de fabricar.",title:"Medidas"},{id:"telas",text:"Consulta las muestras disponibles. El tono puede variar seg\xFAn tu pantalla y la iluminaci\xF3n.",title:"Telas"},{id:"garantia",text:"Solicita al asesor las condiciones escritas de garant\xEDa para tu producto.",title:"Garant\xEDa"}],hero:{text:"T\xFA eliges la forma, la tela y el color.",title:`No la escogemos.
La fabricamos.`,eyebrow:"Fabricamos en Bogot\xE1",primary:"Explorar salas",secondary:"Ver en mi espacio"},reels:[{id:"cama",image:"./asset-aurora.webp",title:"De sof\xE1 a cama",video:"",description:"Conoce las opciones de sof\xE1 cama y consulta c\xF3mo se transforma cada modelo."},{id:"confort",image:"./asset-nara.webp",title:"El confort",video:"",description:"Explora reclinables y elige con un asesor las medidas para tu espacio."},{id:"oficio",image:"./asset-taller.webp",title:"As\xED lo hacemos",video:"",description:"Nuestro taller adapta estructura, medidas y tapizado a tu proyecto."},{id:"medida",image:"./asset-sala-creativa.webp",title:"Tu sala a medida",video:"",description:"Combina m\xF3dulos y telas para dise\xF1ar una sala a tu manera."}],gallery:[{id:"1",image:"./asset-sala-calida.webp",title:"Una sala para compartir"},{id:"2",image:"./asset-sala-industrial.webp",title:"Un espacio con car\xE1cter"},{id:"3",image:"./asset-rose.webp",title:"Un rinc\xF3n para ti"}],benefits:[{id:"fabrica",icon:"factory",text:"Hecho en Colombia",title:"F\xE1brica propia",target:"taller"},{id:"medida",icon:"ruler",text:"Elige tela y color",title:"A tu medida",target:"configurador"},{id:"envio",icon:"truck",text:"Consulta tu ciudad",title:"Env\xEDos a Colombia",target:"envios"},{id:"credito",icon:"card",text:"Consulta condiciones",title:"Addi y Sistecr\xE9dito",target:"financiacion"},{id:"3d",icon:"cube",text:"Antes de elegir",title:"M\xEDrala en 3D",target:"espacio"}],delivery:{text:"Coordinamos tu entrega seg\xFAn direcci\xF3n, acceso y disponibilidad. El costo se confirma antes de comprar.",cities:["Bogot\xE1 y Soacha","Cundinamarca y Meta","Resto de Colombia"]},sections:[{id:"catalogo",title:"02. Encuentra tu sala",visible:!0,subtitle:"Hechas para vivirlas. Dise\xF1adas para ti."},{id:"reels",title:"03. M\xEDralos en acci\xF3n",visible:!0,subtitle:"Conoce cada detalle"},{id:"configurador",title:"04. Una sala que s\xED cabe y s\xED combina.",visible:!0,subtitle:"Confirmamos las medidas contigo."},{id:"espacio",title:"M\xEDrala en tu espacio",visible:!0,subtitle:"Visualiza tu sala en 3D antes de decidir."},{id:"financiacion",title:"Paga como te sirva",visible:!0,subtitle:"Elige la opci\xF3n que mejor se acomode a ti."},{id:"taller",title:"De nuestro taller a tu casa",visible:!0,subtitle:"Creamos cada sala con dedicaci\xF3n para que la disfrutes por a\xF1os."},{id:"galeria",title:"As\xED se ven en casa",visible:!0,subtitle:"Ambientes ilustrativos de nuestra colecci\xF3n"},{id:"contacto",title:"Ven a probar tu pr\xF3xima sala",visible:!0,subtitle:"Te esperamos para encontrar tu sala."}],workshop:{text:"Dise\xF1amos contigo, fabricamos en nuestro taller y coordinamos la entrega hasta tu hogar.",image:"./asset-taller.webp",steps:[{text:"Tu espacio, tus ideas",title:"Dise\xF1amos"},{text:"Materiales y manos expertas",title:"Fabricamos"},{text:"Hasta la puerta de tu hogar",title:"Entregamos"}]},campaigns:[{id:"semana-taller",text:"Una sala a tu medida. Una nueva forma de disfrutar tu hogar.",image:"./asset-sala-calida.webp",terms:"Ejemplo de campa\xF1a para revisar el dise\xF1o. El porcentaje no se aplica al cat\xE1logo ni al carrito. Referencias, precios y condiciones comerciales pendientes de aprobaci\xF3n.",title:"M\xE1s espacio para vivir juntos.",endsAt:"2026-09-22T00:00:00-05:00",enabled:!0,category:"Salas completas",imageAlt:"Sala modular clara con cojines petr\xF3leo y rosa, ambiente ilustrativo",startsAt:"2026-09-11T00:00:00-05:00",buttonText:"Explorar salas",simulation:!0,discountPercent:25},{id:"modulares",text:"M\xF3dulos, telas y colores que se adaptan a tu vida.",image:"./asset-sala-creativa.webp",terms:"Simulaci\xF3n visual de una promoci\xF3n. Sin descuento aplicado al comprar. Requiere aprobaci\xF3n de productos, precios y condiciones antes de su activaci\xF3n comercial.",title:"Cambia la forma de tu espacio.",endsAt:"2026-09-25T00:00:00-05:00",enabled:!0,category:"Modulares",imageAlt:"Sof\xE1 modular petr\xF3leo en un ambiente ilustrativo",startsAt:"2026-09-11T00:00:00-05:00",buttonText:"Descubrir modulares",simulation:!0,discountPercent:20}],navigation:{drawer:!1},financeBanners:[{id:"credit",text:"Conoce las opciones de financiaci\xF3n para el mueble que tienes en mente.",title:"Tu pr\xF3ximo espacio, a tu ritmo.",button:"Consultar financiaci\xF3n"},{id:"bank",text:"Tarjeta d\xE9bito, cr\xE9dito o PSE. Revisa las condiciones del canal que prefieras.",title:"Elige tu mueble. Elige c\xF3mo pagar.",button:"Ver opciones de pago"},{id:"wallet",text:"Consulta las opciones disponibles con tu billetera digital.",title:"Desde tu celular, m\xE1s cerca de casa.",button:"Consultar billeteras"}]},legalFingerprint:"d6ae416f90c98417c065061011dbe79333cdd7c47e99d4b9d80a210b67607aba"};function g_(t){let e=structuredClone({products:t.products,settings:t.settings,content:t.content}),a={documents:[],events:[]};return async(n,{method:i="GET",body:s}={})=>{if(i==="GET"){if(n==="/admin/data")return structuredClone({products:e.products,settings:e.settings,orders:[],leads:[]});if(n==="/admin/content")return structuredClone(e.content);if(n==="/admin/documents")return structuredClone(a);if(n.startsWith("/admin/marketing?"))return{contacts:[],total:0,pages:1}}if(i==="PUT"){if(n==="/admin/content")return e.content=structuredClone(s),structuredClone(s);if(n==="/admin/settings")return e.settings=structuredClone(s),structuredClone(s);if(n.startsWith("/admin/products/")){let r=structuredClone(s),o=e.products.findIndex(l=>l.id===r.id);return o<0?e.products.push(r):e.products[o]=r,structuredClone(r)}}if(i==="DELETE"&&n.startsWith("/admin/products/")){let r=e.products.find(o=>o.id===n.split("/").at(-1));return r&&(r.active=!1),{ok:!0}}throw new Error("Esta acci\xF3n requiere iniciar sesi\xF3n. La demostraci\xF3n no sube archivos ni modifica la tienda.")}}var VC=g_(ul),bc=()=>{};async function J(t,{method:e="GET",body:a}={}){if(t.startsWith("/admin/"))return VC(t,{method:e,body:a});if(e!=="GET")throw new Error("Esta es una demostraci\xF3n: no se env\xEDan datos, no se crean pedidos y no se realizan cobros.");if(t==="/catalog")return structuredClone(ul);if(t==="/documents")return{documents:[]};if(t.startsWith("/products?")){let n=new URL(t,"https://preview.invalid").searchParams,i=ul.products.filter(c=>c.active!==!1),s=n.get("category"),r=(n.get("q")||"").toLocaleLowerCase("es");s&&s!=="Todo"&&(i=i.filter(c=>c.category===s)),r&&(i=i.filter(c=>(c.name+" "+c.category+" "+c.description).toLocaleLowerCase("es").includes(r))),n.get("maxPrice")&&(i=i.filter(c=>c.price<=Number(n.get("maxPrice")))),n.get("sort")==="low"&&i.sort((c,f)=>c.price-f.price),n.get("sort")==="high"&&i.sort((c,f)=>f.price-c.price);let o=Math.max(1,Number(n.get("page"))||1),l=12,u=i.length;return structuredClone({items:i.slice((o-1)*l,o*l),total:u,pages:Math.ceil(u/l),page:o})}if(t.startsWith("/products/")){let n=ul.products.find(i=>i.id===t.split("/").pop());if(n)return structuredClone(n)}throw new Error("Esta opci\xF3n requiere el servidor de la tienda. No est\xE1 conectada en la demostraci\xF3n.")}var we=t=>t,mt=t=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(t),Sa=["Salas completas","Esquineros","Sof\xE1s cama","Modulares","Poltronas","Reclinables","Sof\xE1s","Comedores","Camas","Colchones","Bases cama"];var dl=me(le());function cl(t,e=""){let a=new URLSearchParams({api:"1",query:t});return e&&a.set("query_place_id",e),"https://www.google.com/maps/search/?"+a}function _c(t){let e=new URLSearchParams({api:"1",destination:t.address});return t.mapsPlaceId&&e.set("destination_place_id",t.mapsPlaceId),"https://www.google.com/maps/dir/?"+e}var x_=(t,e)=>"https://wa.me/"+t+"?text="+encodeURIComponent(e);function v_(t){return x_("",t.storeName+`
`+t.address+`
`+cl(t.address,t.mapsPlaceId))}function y_(t,{address:e="",coordinates:a=null}){let n=a?a.latitude.toFixed(6)+","+a.longitude.toFixed(6):e.trim();return{map:cl(n),url:x_(t.phone,"Hola "+t.storeName+`, quiero cotizar la entrega de un mueble.
`+(a?"Esta es mi ubicaci\xF3n elegida.":e.trim())+`
`+cl(n)+`
Por favor confirmen cobertura y costo.`)}}function Np({settings:t}){let[e,a]=(0,dl.useState)(""),[n,i]=(0,dl.useState)(null),[s,r]=(0,dl.useState)(!1),[o,l]=(0,dl.useState)(""),u=n||e.trim().length>=8?y_(t,{address:e,coordinates:n}):null;function c(){if(l(""),!navigator.geolocation){l("Este navegador no ofrece ubicaci\xF3n. Escribe la direcci\xF3n de entrega.");return}r(!0),navigator.geolocation.getCurrentPosition(({coords:f})=>{i({latitude:f.latitude,longitude:f.longitude,accuracy:f.accuracy}),r(!1)},()=>{l("No se pudo obtener la ubicaci\xF3n. Puedes escribir la direcci\xF3n y ciudad."),r(!1)},{enableHighAccuracy:!0,timeout:15e3,maximumAge:0})}return React.createElement("div",{className:"form-grid"},React.createElement("p",null,"Prepara un mensaje para el WhatsApp de ",t.storeName,":"," ",React.createElement("strong",null,"+",t.phone),"."),React.createElement("label",null,"Direcci\xF3n y ciudad de entrega",React.createElement("input",{value:e,maxLength:250,placeholder:"Ej. Calle 10 #20-30, Bogot\xE1",onChange:f=>{a(f.target.value),i(null)}})),React.createElement("p",{className:"caption"},"Tambi\xE9n puedes usar tu ubicaci\xF3n actual. El navegador pedir\xE1 permiso; rev\xEDsala antes de compartirla con la tienda."),React.createElement("button",{className:"outline",disabled:s,onClick:c},React.createElement(al,{size:17}),s?"Buscando ubicaci\xF3n\u2026":"Usar mi ubicaci\xF3n actual"),o&&React.createElement("p",{className:"error",role:"alert"},o),n&&React.createElement("div",{className:"location-preview"},React.createElement(Yi,{size:20}),React.createElement("p",null,"Ubicaci\xF3n obtenida. Precisi\xF3n aproximada:"," ",Math.round(n.accuracy)," m."," ",React.createElement("button",{className:"text-button",onClick:()=>i(null)},"Quitar ubicaci\xF3n"))),u&&React.createElement("div",{className:"actions"},React.createElement("a",{className:"button outline",href:u.map,target:"_blank",rel:"noreferrer"},"Revisar en Google Maps"),React.createElement("a",{className:"button",href:u.url,target:"_blank",rel:"noreferrer"},"Abrir mensaje en WhatsApp")),React.createElement("p",{className:"caption"},"Se comparte un enlace al mapa. WhatsApp abre el mensaje preparado y t\xFA decides enviarlo. Esta pantalla no guarda tus coordenadas ni env\xEDa mensajes autom\xE1ticamente."))}var Y=me(le());var Sc=me(le());function Ki({onClick:t,productName:e,hero:a=!1,inline:n=!1}){return Sc.default.createElement("button",{className:`explore-3d ${n?"explore-3d--inline":"model-badge"} ${a?"explore-3d--hero":""}`,onClick:t,"aria-label":`Ver ${e||"el mueble"} en 3D`},Sc.default.createElement(hn,{size:18,"aria-hidden":"true"}),Sc.default.createElement("span",null,"Ver en 3D"))}function Pp({product:t,initialColor:e,onAdd:a,on3d:n,onQuote:i}){let s=t.gallery?.length?t.gallery:[{url:t.image,alt:t.name,color:""}],r=t.colors.includes(e)?e:t.colors[0],[o,l]=(0,Y.useState)(Math.max(0,s.findIndex(d=>d.color===r))),[u,c]=(0,Y.useState)(r),f=t.videos?.length?t.videos:t.videoUrl?[{url:t.videoUrl,title:"Conoce este producto"}]:[];return Y.default.createElement("div",{className:"product-detail"},Y.default.createElement("div",{className:"product-gallery"},Y.default.createElement("a",{href:we(s[o].url),target:"_blank",rel:"noreferrer",title:"Abrir fotograf\xEDa en tama\xF1o completo"},Y.default.createElement("img",{className:"detail-photo",src:we(s[o].url),alt:s[o].alt||t.name})),Y.default.createElement("div",{className:"photo-thumbs","aria-label":"Fotograf\xEDas del producto"},s.map((d,h)=>Y.default.createElement("button",{key:h,className:h===o?"selected":"","aria-label":"Ver foto "+(h+1)+(d.color?" \xB7 "+d.color:""),"aria-pressed":h===o,onClick:()=>{l(h),d.color&&c(d.color)}},Y.default.createElement("img",{loading:"lazy",src:we(d.url),alt:d.alt||t.name})))),Y.default.createElement("p",{className:"caption"},"Foto ",o+1," de ",s.length,s[o].color?" \xB7 "+s[o].color:"",". Abre la fotograf\xEDa para ampliarla."),/ilustrativa|generada/i.test(s[o].alt||"")&&Y.default.createElement("p",{className:"caption"},"Imagen ilustrativa generada. Confirma el tono y acabado con la muestra de tela real."),f.map((d,h)=>Y.default.createElement("div",{key:d.url},Y.default.createElement("h4",null,d.title),Y.default.createElement("video",{className:"video",controls:!0,playsInline:!0,preload:"none",src:d.url})))),Y.default.createElement("div",null,Y.default.createElement("p",{className:"eyebrow"},t.category),Y.default.createElement("h3",null,mt(t.price)),Y.default.createElement("p",null,t.description),Y.default.createElement("label",null,"Color seleccionado",Y.default.createElement("select",{value:u,onChange:d=>{c(d.target.value);let h=s.findIndex(g=>g.color===d.target.value);h>=0&&l(h)}},t.colors.map(d=>Y.default.createElement("option",{key:d},d)))),!s.some(d=>d.color===u)&&Y.default.createElement("p",{className:"caption"},"La fotograf\xEDa es de referencia; a\xFAn no hay una foto vinculada a este color."),Y.default.createElement("dl",{className:"product-specs"},Y.default.createElement("dt",null,"Medidas \xB7 ancho \xD7 fondo \xD7 alto"),Y.default.createElement("dd",null,t.width," \xD7 ",t.depth," \xD7 ",t.height," cm"),t.materials&&Y.default.createElement(Y.default.Fragment,null,Y.default.createElement("dt",null,"Materiales"),Y.default.createElement("dd",null,t.materials)),t.leadTime&&Y.default.createElement(Y.default.Fragment,null,Y.default.createElement("dt",null,"Disponibilidad y plazo"),Y.default.createElement("dd",null,t.leadTime)),t.care&&Y.default.createElement(Y.default.Fragment,null,Y.default.createElement("dt",null,"Cuidados"),Y.default.createElement("dd",null,t.care))),t.madeToMeasure&&Y.default.createElement("p",{className:"made-to-measure"},"Fabricaci\xF3n a tu medida. Cotizamos los ajustes antes de confirmar el pedido."),Y.default.createElement("div",{className:"actions"},Y.default.createElement("button",{onClick:()=>a(t,u)},"Comprar ahora"),t.modelUrl&&Y.default.createElement(Ki,{inline:!0,productName:t.name,onClick:()=>n(u)}),t.madeToMeasure&&Y.default.createElement("button",{className:"outline",onClick:()=>i(u)},"Cotizar a mi medida"))))}var Z=me(le());var b_="Autorizo a Dekoramma a usar los datos que proporciono para enviarme novedades, ofertas y promociones \xFAnicamente por los canales que elijo. Puedo retirar esta autorizaci\xF3n en cualquier momento sin afectar mis compras ni asesor\xEDas.",__="Autorizo a Dekoramma a usar mis datos y contactarme por el canal elegido para atender esta solicitud de asesor\xEDa. Esto no me inscribe a publicidad.";function Up({legalFingerprint:t,onAdvice:e,settings:a}){let[n,i]=(0,Z.useState)(!1),[s,r]=(0,Z.useState)([]),[o,l]=(0,Z.useState)(!1),[u,c]=(0,Z.useState)(""),[f,d]=(0,Z.useState)(null);return Z.default.createElement("section",{className:"wrap relationship-section","aria-labelledby":"relationship-title"},Z.default.createElement("div",null,Z.default.createElement("span",{className:"eyebrow"},"Hagamos espacio para tus ideas"),Z.default.createElement("h2",{id:"relationship-title"},"Tu pr\xF3ximo espacio empieza aqu\xED."),Z.default.createElement("p",null,"Recibe ideas y novedades, o conversemos sobre el mueble que necesitas."),Z.default.createElement("div",{className:"relationship-actions"},Z.default.createElement("button",{className:"outline",onClick:()=>i(!n),"aria-expanded":n,"aria-controls":"newsletter-form"},Z.default.createElement($o,{size:18})," Recibe novedades y ofertas"),Z.default.createElement("button",{onClick:e},Z.default.createElement(Zi,{size:18})," Agenda una asesor\xEDa"," ",Z.default.createElement(At,{size:18})))),n&&Z.default.createElement("div",{id:"newsletter-form",className:"newsletter-panel"},f?Z.default.createElement("div",{role:"status"},Z.default.createElement("h3",null,"Solicitud guardada"),Z.default.createElement("p",null,f.message),Z.default.createElement("a",{href:f.managementPath},"Guardar o abrir mi enlace privado para retirar la autorizaci\xF3n"),Z.default.createElement("p",{className:"caption"},"Tambi\xE9n puedes solicitarlo a"," ",Z.default.createElement("a",{href:"mailto:"+a.email},a.email),".")):Z.default.createElement("form",{className:"form-grid",onSubmit:async h=>{h.preventDefault(),l(!0),c("");let g=new FormData(h.currentTarget);try{d(await J("/marketing",{method:"POST",body:{name:g.get("name"),email:g.get("email")||"",phone:g.get("phone")||"",channels:s,consent:g.get("marketingConsent")==="on",legalFingerprint:t}}))}catch(v){c(v.message)}finally{l(!1)}}},Z.default.createElement("h3",null,"Solo por los canales que t\xFA elijas."),Z.default.createElement("p",{className:"caption"},"Nombre opcional. Elige correo, WhatsApp o ambos; no necesitas suscribirte para comprar."),Z.default.createElement("label",null,"Nombre (opcional)",Z.default.createElement("input",{name:"name",autoComplete:"given-name",maxLength:100})),Z.default.createElement("fieldset",{className:"channel-choices"},Z.default.createElement("legend",null,"\xBFD\xF3nde quieres recibir novedades?"),[["email","Correo electr\xF3nico"],["whatsapp","WhatsApp"]].map(([h,g])=>Z.default.createElement("label",{className:"check",key:h},Z.default.createElement("input",{type:"checkbox",checked:s.includes(h),onChange:v=>r(v.target.checked?[...s,h]:s.filter(_=>_!==h))}),g))),s.includes("email")&&Z.default.createElement("label",null,"Correo electr\xF3nico",Z.default.createElement("input",{name:"email",type:"email",required:!0,autoComplete:"email",maxLength:254})),s.includes("whatsapp")&&Z.default.createElement("label",null,"Celular de Colombia",Z.default.createElement("input",{name:"phone",type:"tel",required:!0,autoComplete:"tel",placeholder:"3001234567",pattern:"(\\+?57)?3[0-9]{9}"})),Z.default.createElement("p",{className:"caption"},"Responsable:"," ",a.legalName||"identificaci\xF3n legal pendiente por completar"," ","\xB7 Dekoramma. Consulta la"," ",Z.default.createElement("a",{href:"./dekoramma.html?vista=informacion#privacidad",target:"_blank",rel:"noreferrer"},"pol\xEDtica de privacidad"),"."),Z.default.createElement("label",{className:"check"},Z.default.createElement("input",{name:"marketingConsent",type:"checkbox",required:!0}),b_),u&&Z.default.createElement("p",{role:"alert",className:"error"},u),Z.default.createElement("button",{disabled:o||!s.length},o?"Guardando\u2026":"Quiero recibir novedades"))))}var U=me(le());var jt=me(le());var Rp=me(le()),GC={Bold:"bold.svg",PSE:"pse.svg",Addi:"addi.svg","Vanti Listo":"vanti-listo.png",Nequi:"nequi.svg",Visa:"visa.svg",Mastercard:"mastercard.svg"};function pn({method:t}){let e=GC[t];return e?Rp.default.createElement("img",{className:`payment-brand brand-${e.split(".")[0]}`,src:`./asset-payments-${e}`,alt:t==="Daviplata"?"DaviPlata":t,loading:"lazy"}):Rp.default.createElement("span",{className:"payment-brand-name"},t==="Daviplata"?"DaviPlata":t)}var qC={Bold:["Tarjeta d\xE9bito o cr\xE9dito","Pago seguro a trav\xE9s de Bold","card"],PSE:["PSE","Contin\xFAa en tu banco","bank"],Addi:["Addi","Financiaci\xF3n sujeta a aprobaci\xF3n","credit"],Sistecr\u00E9dito:["Sistecr\xE9dito","Consulta cupo y condiciones","credit"],"Vanti Listo":["Vanti Listo","Sujeto a cupo y convenio habilitado","credit"],Nequi:["Nequi","Pago desde tu billetera","wallet"],Daviplata:["DaviPlata","Consulta el canal disponible","wallet"]};function Op({methods:t,value:e,onChange:a}){let n=[...t].sort((i,s)=>(i==="Bold"?0:i==="PSE"?1:2)-(s==="Bold"?0:s==="PSE"?1:2));return jt.default.createElement("fieldset",{className:"payment-choices"},jt.default.createElement("legend",null,"Tu forma de pago"),jt.default.createElement("div",{className:"payment-choice-grid"},n.map(i=>{let[s,r,o]=qC[i]||[i,"Consulta disponibilidad","wallet"];return jt.default.createElement("label",{key:i,className:"payment-choice "+(e===i?"selected":"")},jt.default.createElement("input",{type:"radio",name:"method",value:i,checked:e===i,onChange:()=>a(i),required:!0}),jt.default.createElement(pn,{method:i}),jt.default.createElement("span",null,jt.default.createElement("strong",null,s),jt.default.createElement("small",null,r)))})),jt.default.createElement("p",{className:"payment-security"},jt.default.createElement(il,{size:18}),"Los datos de tarjeta y claves bancarias se ingresan en el proveedor de pago."),jt.default.createElement("p",{className:"caption"},"Conexi\xF3n de cobro pendiente de activaci\xF3n. Por ahora puedes registrar tu solicitud; no se realizar\xE1 ning\xFAn cargo."))}function Bp({items:t,methods:e,onDone:a,legalFingerprint:n}){let[i,s]=(0,U.useState)(1),[r,o]=(0,U.useState)(1),[l,u]=(0,U.useState)(""),[c,f]=(0,U.useState)(!1),[d,h]=(0,U.useState)({email:"",name:"",phone:"",city:"",address:"",notes:""}),[g,v]=(0,U.useState)(""),[_,m]=(0,U.useState)(!1),[x,y]=(0,U.useState)(!1),b=(0,U.useRef)(crypto.randomUUID()),C=(0,U.useRef)(Array.from(crypto.getRandomValues(new Uint8Array(32)),D=>D.toString(16).padStart(2,"0")).join("")),T=(0,U.useRef)(null),L=(0,U.useRef)(1);(0,U.useEffect)(()=>{L.current!==i&&(T.current?.focus(),L.current=i)},[i]);let A=D=>h({...d,[D.target.name]:D.target.value}),P=D=>{u(""),s(D)};async function N(D){if(D.preventDefault(),u(""),i<3){o(Math.max(r,i+1)),s(i+1);return}f(!0);try{let H=await J("/orders",{method:"POST",body:{items:t,method:g,customer:{...d,consent:_},termsAccepted:x,legalFingerprint:n,idempotencyKey:b.current,trackingToken:C.current}});try{localStorage.setItem("dk-tracking",JSON.stringify({id:H.id,token:C.current}))}catch{}a({...H,trackingToken:C.current})}catch(H){u(H.message)}finally{f(!1)}}return U.default.createElement("form",{className:"form-grid progressive-checkout",onSubmit:N},U.default.createElement("nav",{className:"checkout-steps","aria-label":"Pasos de compra"},["Contacto","Entrega","Pago"].map((D,H)=>U.default.createElement("button",{key:D,type:"button",disabled:c||H+1>r,"aria-current":i===H+1?"step":void 0,onClick:F=>{H+1>i&&!F.currentTarget.form.reportValidity()||P(H+1)}},U.default.createElement("span",null,H+1<i?U.default.createElement(Wi,{size:14}):H+1),D))),U.default.createElement("h3",{ref:T,tabIndex:-1},i===1?"Empecemos por tu correo.":i===2?"\xBFQui\xE9n recibe y d\xF3nde?":"Elige c\xF3mo quieres pagar."),i===1&&U.default.createElement(U.default.Fragment,null,U.default.createElement("p",{className:"caption"},"Compra como invitado, sin crear una cuenta. El correo nos permite asociar tu solicitud y sus comprobantes."),U.default.createElement("label",null,"Correo electr\xF3nico",U.default.createElement("input",{name:"email",type:"email",value:d.email,onChange:A,autoComplete:"email",required:!0,maxLength:150,placeholder:"tu@correo.com"})),U.default.createElement("p",{className:"caption"},"Tus datos no se enviar\xE1n hasta confirmar la solicitud. Consulta la"," ",U.default.createElement("a",{href:"./dekoramma.html?vista=informacion#privacidad",target:"_blank",rel:"noreferrer"},"pol\xEDtica de privacidad"),"."),U.default.createElement("div",{className:"checkout-method-preview","aria-label":"Opciones de pago por habilitar"},U.default.createElement("span",null,"Tarjetas"),U.default.createElement("span",null,"PSE"),U.default.createElement("span",null,"Financiaci\xF3n"))),i===2&&U.default.createElement(U.default.Fragment,null,U.default.createElement("p",{className:"caption"},"Solo los datos necesarios para coordinar tu entrega. El flete se confirmar\xE1 antes del cobro."),U.default.createElement("label",null,"Nombre completo",U.default.createElement("input",{name:"name",value:d.name,onChange:A,autoComplete:"name",required:!0,maxLength:100})),U.default.createElement("label",null,"Celular de contacto",U.default.createElement("input",{name:"phone",type:"tel",value:d.phone,onChange:A,autoComplete:"tel",required:!0,pattern:"[+0-9\\s\\-]{7,22}",maxLength:22})),U.default.createElement("label",null,"Ciudad",U.default.createElement("input",{name:"city",value:d.city,onChange:A,autoComplete:"address-level2",required:!0,maxLength:100})),U.default.createElement("label",null,"Direcci\xF3n de entrega",U.default.createElement("input",{name:"address",value:d.address,onChange:A,autoComplete:"street-address",required:!0,maxLength:250})),U.default.createElement("details",{className:"checkout-optional"},U.default.createElement("summary",null,"Apartamento, indicaciones u observaciones (opcional)"),U.default.createElement("textarea",{"aria-label":"Indicaciones de entrega",name:"notes",value:d.notes,onChange:A,maxLength:1e3}))),i===3&&U.default.createElement(U.default.Fragment,null,U.default.createElement("div",{className:"checkout-contact-summary"},U.default.createElement("strong",null,d.name),U.default.createElement("p",null,d.email," \xB7 ",d.phone),U.default.createElement("p",null,d.address,", ",d.city),U.default.createElement("button",{type:"button",className:"text-button",onClick:()=>P(2)},"Editar entrega")),U.default.createElement(Op,{methods:e,value:g,onChange:v}),U.default.createElement("p",{className:"caption"},"Consulta los"," ",U.default.createElement("a",{href:"./dekoramma.html?vista=informacion#terminos",target:"_blank",rel:"noreferrer"},"t\xE9rminos"),", la"," ",U.default.createElement("a",{href:"./dekoramma.html?vista=informacion#privacidad",target:"_blank",rel:"noreferrer"},"privacidad")," ","y las"," ",U.default.createElement("a",{href:"./dekoramma.html?vista=informacion#garantias",target:"_blank",rel:"noreferrer"},"garant\xEDas"),"."),U.default.createElement("label",{className:"check"},U.default.createElement("input",{type:"checkbox",checked:_,onChange:D=>m(D.target.checked),required:!0}),"Autorizo usar estos datos para atender mi solicitud."),U.default.createElement("label",{className:"check"},U.default.createElement("input",{type:"checkbox",checked:x,onChange:D=>y(D.target.checked),required:!0}),"He le\xEDdo y acepto los t\xE9rminos de esta solicitud de compra.")),l&&U.default.createElement("p",{className:"error",role:"alert"},l),U.default.createElement("div",{className:"checkout-actions"},i>1&&U.default.createElement("button",{type:"button",disabled:c,className:"outline",onClick:()=>P(i-1)},U.default.createElement(Yo,{size:16})," Volver"),U.default.createElement("button",{disabled:c},c?"Registrando\u2026":i===1?"Continuar a entrega":i===2?"Elegir forma de pago":"Enviar solicitud de compra",i<3&&U.default.createElement(At,{size:16}))),U.default.createElement("p",{className:"payment-security"},U.default.createElement(Qo,{size:16}),"Tus datos de tarjeta se ingresar\xE1n \xFAnicamente en la pasarela al habilitar el cobro."))}var B=me(le());function S_(t,e,a){return e!==!0?[]:t.filter(n=>n.enabled&&n.simulation===!0&&Date.parse(n.startsAt)<=a&&a<Date.parse(n.endsAt))}function M_(t,e){let a=Math.max(0,Math.ceil((Date.parse(t)-e)/1e3)||0);return[Math.floor(a/86400),Math.floor(a/3600)%24,Math.floor(a/60)%60,a%60]}var qa=me(le());function Ji({banner:t,onPlay:e}){let a=(0,qa.useRef)(null);return(0,qa.useEffect)(()=>{let n=a.current;if(!n)return;let i=()=>{document.hidden&&n.pause()},s=new IntersectionObserver(([r])=>{r.isIntersecting||n.pause()});return s.observe(n),document.addEventListener("visibilitychange",i),()=>{n.pause(),s.disconnect(),document.removeEventListener("visibilitychange",i)}},[t.video]),t.video?qa.default.createElement("video",{ref:a,className:"banner-video",controls:!0,playsInline:!0,preload:"none",poster:we(t.image),"aria-label":t.imageAlt,onPlay:e,key:t.video},qa.default.createElement("source",{src:we(t.video),type:"video/mp4"}),"Tu navegador no permite reproducir este video."):qa.default.createElement("picture",null,t.mobileImage&&qa.default.createElement("source",{media:"(max-width:600px)",srcSet:we(t.mobileImage)}),qa.default.createElement("img",{src:we(t.image),alt:t.imageAlt}))}function Fp({children:t,campaigns:e=[],demo:a,onCategory:n}){let i=(0,B.useRef)(null),[s,r]=(0,B.useState)(!1),[o,l]=(0,B.useState)(0),[u,c]=(0,B.useState)("home"),[f,d]=(0,B.useState)(!1),[h,g]=(0,B.useState)(!1),[v,_]=(0,B.useState)(!0),[m,x]=(0,B.useState)(!1);(0,B.useEffect)(()=>{let N=new IntersectionObserver(([M])=>r(M.isIntersecting),{threshold:0});i.current&&N.observe(i.current);let D=matchMedia("(prefers-reduced-motion: reduce)"),H=()=>_(D.matches),F=()=>x(document.hidden);H(),F(),l(Date.now()),D.addEventListener("change",H),document.addEventListener("visibilitychange",F);let oe=setInterval(()=>l(Date.now()),1e3);return()=>{N.disconnect(),clearInterval(oe),D.removeEventListener("change",H),document.removeEventListener("visibilitychange",F)}},[]);let y=S_(e,a,o),b=[{id:"home",title:"Nuestro taller"},...y],C=Math.max(0,b.findIndex(N=>N.id===u)),T=C?b[C]:null,L=b.map(N=>N.id).join("|");(0,B.useEffect)(()=>{if(f||h||v||m||!s||b.length<2)return;let N=setInterval(()=>c(D=>{let H=b.findIndex(F=>F.id===D);return b[(H+1)%b.length].id}),1e4);return()=>clearInterval(N)},[L,f,h,v,m,s]);function A(N){d(!0),c(b[(N+b.length)%b.length].id)}let P=T&&new Intl.DateTimeFormat("es-CO",{timeZone:"America/Bogota",dateStyle:"medium",timeStyle:"short"}).format(new Date(T.endsAt));return B.default.createElement("div",{ref:i,className:"campaign-carousel",role:"region","aria-roledescription":"carrusel","aria-label":"Colecciones y campa\xF1as",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),onFocusCapture:()=>d(!0)},T?B.default.createElement("section",{className:"campaign-slide","aria-label":T.title},B.default.createElement("div",{className:"campaign-copy"},B.default.createElement("span",{className:"campaign-demo"},"Simulaci\xF3n de campa\xF1a \xB7 sin descuento aplicado"),B.default.createElement("span",{className:"eyebrow"},"DE NUESTRO TALLER A TU HOGAR"),B.default.createElement("h1",null,T.title),B.default.createElement("p",null,T.text),B.default.createElement("div",{className:"campaign-offer"},B.default.createElement("span",null,"Hasta"),B.default.createElement("strong",null,T.discountPercent,B.default.createElement("small",null,"%")),B.default.createElement("span",null,"menos",B.default.createElement("br",null),"en ",T.category.toLowerCase())),B.default.createElement("button",{onClick:()=>n(T.category)},T.buttonText,B.default.createElement(At,{size:18}))),B.default.createElement("div",{className:"campaign-photo"},B.default.createElement(Ji,{banner:T,onPlay:()=>d(!0)}),!T.video&&B.default.createElement("span",null,"Ambiente ilustrativo")),B.default.createElement("div",{className:"campaign-deadline"},B.default.createElement("div",null,B.default.createElement("strong",null,"Esta campa\xF1a de ejemplo termina en"),B.default.createElement("small",null,P," \xB7 hora de Bogot\xE1")),B.default.createElement("div",{className:"campaign-clock","aria-label":`Cierre: ${P}`},M_(T.endsAt,o).map((N,D)=>B.default.createElement("span",{key:D},B.default.createElement("b",null,String(N).padStart(2,"0")),B.default.createElement("small",null,["d\xEDas","horas","min","seg"][D])))),B.default.createElement("details",{onToggle:N=>{N.currentTarget.open&&d(!0)}},B.default.createElement("summary",null,"Ver condiciones"),B.default.createElement("p",null,T.terms)))):t,b.length>1&&B.default.createElement("div",{className:"campaign-controls"},B.default.createElement("div",{className:"campaign-tabs"},b.map((N,D)=>B.default.createElement("button",{key:N.id,"aria-pressed":D===C,onClick:()=>A(D)},B.default.createElement("span",null,String(D+1).padStart(2,"0")),D?N.category:N.title))),B.default.createElement("div",{className:"campaign-arrows"},B.default.createElement("button",{"aria-label":"Campa\xF1a anterior",onClick:()=>A(C-1)},B.default.createElement(jo,{size:18})),B.default.createElement("span",null,C+1," / ",b.length),B.default.createElement("button",{"aria-label":"Campa\xF1a siguiente",onClick:()=>A(C+1)},B.default.createElement(Ko,{size:18})),B.default.createElement("button",{"aria-label":f||v?"Reproducir campa\xF1as":"Pausar campa\xF1as",onClick:()=>{_(!1),d(!(f||v))}},f||v?B.default.createElement(ri,{size:16}):B.default.createElement(ji,{size:16})))))}var Ot=me(le());var Mc={enabled:!0,revision:1,title:"Un espacio hecho para ti.",text:"Elige tu mueble, descubre sus colores y conversemos sobre las medidas de tu hogar.",image:"./asset-sala-industrial.webp",mobileImage:"",video:"",imageAlt:"Sala modular petr\xF3leo en un ambiente industrial ilustrativo",buttonText:"Explorar muebles",target:"catalogo",startsAt:"",endsAt:""};function zp(t){return`dekoramma:welcome:${t.revision}`}function w_(t,e,a,n=""){return t.enabled&&!a&&!n&&(!t.startsAt||e>=Date.parse(t.startsAt))&&(!t.endsAt||e<Date.parse(t.endsAt))}function kp({banner:t=Mc,Modal:e,suppressed:a=!1}){let[n,i]=(0,Ot.useState)(!1),s=(0,Ot.useRef)(!1);return(0,Ot.useEffect)(()=>{if(a||s.current)return;let r=!1,o=new URLSearchParams(location.search).get("vista")==="bienvenida";try{r=sessionStorage.getItem(zp(t))==="seen"}catch{}if(w_(t,Date.now(),o?!1:r,o?"":location.hash)){s.current=!0;try{o||sessionStorage.setItem(zp(t),"seen")}catch{}i(!0)}},[t,a]),!n||!t.enabled?null:Ot.default.createElement(e,{title:t.title,onClose:()=>i(!1),wide:!0},Ot.default.createElement("div",{className:"welcome-banner"},Ot.default.createElement(Ji,{banner:t}),Ot.default.createElement("div",{className:"welcome-banner-copy"},Ot.default.createElement("p",null,t.text),Ot.default.createElement("a",{className:"button",href:`#${t.target}`,onClick:()=>i(!1)},t.buttonText),Ot.default.createElement("button",{className:"text-button",onClick:()=>i(!1)},"Continuar viendo la tienda"))))}var Hp=me(le());function yr({brand:t}){return["facebook","whatsapp","instagram"].includes(t)?Hp.default.createElement("span",{className:`social-brand social-brand--${t}`,"aria-hidden":"true"},Hp.default.createElement("img",{src:`./asset-social-${t}.${t==="instagram"?"png":"svg"}`,alt:"",width:"24",height:"24"})):null}var fe=me(le());var C_=[{id:"credit",title:"Tu pr\xF3ximo espacio, a tu ritmo.",text:"Conoce las opciones de financiaci\xF3n para el mueble que tienes en mente.",button:"Consultar financiaci\xF3n"},{id:"bank",title:"Elige tu mueble. Elige c\xF3mo pagar.",text:"Tarjeta d\xE9bito, cr\xE9dito o PSE. Revisa las condiciones del canal que prefieras.",button:"Ver opciones de pago"},{id:"wallet",title:"Desde tu celular, m\xE1s cerca de casa.",text:"Consulta las opciones disponibles con tu billetera digital.",button:"Consultar billeteras"}];var XC={credit:["Addi","Sistecr\xE9dito","Vanti Listo"],bank:["Bold","PSE"],wallet:["Nequi","Daviplata"]};function Vp({title:t,subtitle:e,banners:a=C_,methods:n,onChoose:i,onBrowse:s,demo:r}){return fe.default.createElement("div",{className:"finance-showcase"},fe.default.createElement("div",{className:"finance-heading"},fe.default.createElement("div",null,fe.default.createElement("span",{className:"eyebrow"},"ESTILO Y ARTE, TAMBI\xC9N AL ELEGIR"),fe.default.createElement("h2",null,t),fe.default.createElement("p",null,e)),fe.default.createElement("span",{className:"finance-signature"},"Hecho a tu medida.",fe.default.createElement("br",null),"Tambi\xE9n tu forma de elegir.")),fe.default.createElement("div",{className:"finance-banners"},a.map((o,l)=>{let u=(XC[o.id]||[]).filter(c=>n.includes(c));return!u.length||o.visible===!1?null:fe.default.createElement("article",{className:`finance-banner finance-banner--${o.id}`,key:o.id},(o.image||o.mobileImage||o.video)&&fe.default.createElement("div",{className:"finance-banner-photo"},fe.default.createElement(Ji,{banner:{...o,image:o.image||o.mobileImage}})),fe.default.createElement("div",{className:"finance-banner-top"},fe.default.createElement("span",null,"0",l+1," /"," ",o.id==="credit"?"A TU RITMO":o.id==="bank"?"A TU MANERA":"DESDE TU CELULAR"),fe.default.createElement("img",{src:`./asset-payments-dekoramma-${o.id}.svg`,alt:"",width:"88",height:"88"})),fe.default.createElement("h3",null,o.title),fe.default.createElement("p",null,o.text),fe.default.createElement("div",{className:"finance-provider-row"},u.map(c=>fe.default.createElement("button",{key:c,onClick:()=>i(c),"aria-label":`Consultar condiciones de ${c}`},fe.default.createElement(pn,{method:c})))),fe.default.createElement("button",{className:"finance-cta",onClick:()=>s(u,o.button)},o.button,fe.default.createElement(Zo,{size:20})))})),fe.default.createElement("div",{className:"finance-support"},fe.default.createElement("span",null,"Encuentra una opci\xF3n para tu hogar"),fe.default.createElement("div",null,n.map(o=>fe.default.createElement("button",{key:o,onClick:()=>i(o),"aria-label":`Ver condiciones de ${o}`},fe.default.createElement(pn,{method:o})))),fe.default.createElement("a",{href:"#catalogo"},"Explorar muebles ",fe.default.createElement(At,{size:16}))),fe.default.createElement("p",{className:"caption finance-disclosure"},"Financiaci\xF3n sujeta a aprobaci\xF3n, cupo y condiciones de cada entidad.",r?" Vista de desarrollo: conexiones de cobro pendientes de activaci\xF3n.":""))}function Qi(t,e){let a=t?.gallery?.find(n=>n.color===e&&n.url)||t?.colorImages?.find(n=>n.color===e&&n.url);return{url:a?.url||t?.image||"",alt:a?.alt||`${t?.name||"Producto"}${a?" \xB7 "+e:" \xB7 imagen de referencia"}`,matched:!!a}}var A_={arms:"Brazos",back:"Espaldar",seat:"Asiento",legs:"Patas"};var WC=Xo(()=>Promise.resolve().then(()=>(qp(),Gp)),{ssr:!1,loading:()=>p.default.createElement("p",null,"Cargando visor 3D\u2026")}),Wp={Arena:"#d9cdb4",Gris:"#888b86",Petr\u00F3leo:"#2e7680",Rosa:"#bd8584",Terracota:"#b06d59",Mostaza:"#b68a49"};function L_(){return p.default.createElement("a",{className:"logo",href:"./dekoramma.html","aria-label":"Dekoramma, inicio"},p.default.createElement("svg",{viewBox:"0 0 208 64",role:"img","aria-label":"Dekoramma \xB7 Estilo y arte"},p.default.createElement("defs",null,p.default.createElement("image",{id:"original-logo",href:"./asset-logo.png",width:"640",height:"640"})),p.default.createElement("svg",{x:"0",y:"8",width:"46",height:"44",viewBox:"200 116 232 210"},p.default.createElement("use",{href:"#original-logo"})),p.default.createElement("svg",{x:"57",y:"3",width:"139",height:"56",viewBox:"60 348 510 210"},p.default.createElement("use",{href:"#original-logo"}))))}function Xp({title:t,onClose:e,children:a,wide:n=!1}){let i=(0,p.useRef)();return(0,p.useEffect)(()=>{let s=document.activeElement;return i.current.showModal(),document.body.style.overflow="hidden",()=>{document.body.style.overflow="",s?.focus?.()}},[]),p.default.createElement("dialog",{ref:i,className:"modal "+(n?"wide":""),"aria-label":t,onCancel:e,onClick:s=>{s.target===i.current&&e()}},p.default.createElement("div",{className:"modal-head"},p.default.createElement("h2",null,t),p.default.createElement("button",{className:"icon","aria-label":"Cerrar",onClick:e},p.default.createElement(ll,null))),a)}function Yp({initialData:t=null}){let[e,a]=(0,p.useState)(t),[n,i]=(0,p.useState)(""),[s,r]=(0,p.useState)("Todo"),[o,l]=(0,p.useState)(""),[u,c]=(0,p.useState)("featured"),[f,d]=(0,p.useState)(!1),[h,g]=(0,p.useState)(!1),[v,_]=(0,p.useState)(!1),[m,x]=(0,p.useState)(null),[y,b]=(0,p.useState)([]),[C,T]=(0,p.useState)(!1),[L,A]=(0,p.useState)(""),[P,N]=(0,p.useState)("En L"),[D,H]=(0,p.useState)("Petr\xF3leo"),[F,oe]=(0,p.useState)([]),[M,V]=(0,p.useState)(245e4),[ne,Cn]=(0,p.useState)("3000000"),[An,fs]=(0,p.useState)("3"),[yi,NS]=(0,p.useState)(!1),[hs,yd]=(0,p.useState)(null),[Ya,bd]=(0,p.useState)(1),[Za,PS]=(0,p.useState)(null),[zg,kg]=(0,p.useState)(""),[Il,Hg]=(0,p.useState)(!1);if((0,p.useEffect)(()=>{bd(1)},[s,o,u,hs]),(0,p.useEffect)(()=>{let w=!0;Hg(!0);let G=setTimeout(()=>{let ye=new URLSearchParams({category:s,q:o,sort:u,page:String(Ya),pageSize:"12"});hs&&ye.set("maxPrice",String(hs)),J("/products?"+ye).then(dt=>{w&&(PS(dt),kg(""))}).catch(dt=>{w&&kg(dt.message)}).finally(()=>{w&&Hg(!1)})},200);return()=>{w=!1,clearTimeout(G)}},[s,o,u,hs,Ya]),(0,p.useEffect)(()=>{try{let w=JSON.parse(localStorage.getItem("dk-cart")||"[]");Array.isArray(w)&&b(w.slice(0,20).filter(G=>typeof G.id=="string"&&typeof G.color=="string"&&Number.isInteger(G.quantity)&&G.quantity>0&&G.quantity<=10))}catch{}T(!0)},[]),(0,p.useEffect)(()=>{J("/catalog").then(a).catch(w=>i(w.message))},[]),(0,p.useEffect)(()=>{if(C)try{localStorage.setItem("dk-cart",JSON.stringify(y))}catch{}},[y,C]),(0,p.useEffect)(()=>{if(L){let w=setTimeout(()=>A(""),5e3);return()=>clearTimeout(w)}},[L]),n)return p.default.createElement("main",{className:"loading"},p.default.createElement("h1",null,"No pudimos cargar la tienda"),p.default.createElement("p",null,n),p.default.createElement("button",{onClick:()=>location.reload()},"Reintentar"));if(!e)return p.default.createElement("div",{className:"loading"},"Preparando tu pr\xF3xima sala\u2026");let{products:ps,settings:ve,content:Ne}=e,ta=w=>Ne.sections.find(G=>G.id===w),_d=ps.find(w=>w.id==="bruna")||ps[0],ms=_d,Sd=w=>"https://wa.me/"+ve.phone+"?text="+encodeURIComponent(w),ja=w=>{g(!1),document.getElementById(w)?.scrollIntoView({behavior:"smooth"})},Hr=(w="asesoria")=>x({type:"lead",leadType:w}),Md=(w,G=w.colors[0])=>{b(ye=>{let dt=ye.find(bi=>bi.id===w.id&&bi.color===G);return dt?ye.map(bi=>bi===dt?{...bi,quantity:Math.min(10,bi.quantity+1)}:bi):[...ye,{id:w.id,color:G,quantity:1}]}),A(w.name+" a\xF1adido a tu bolsa"),x({type:"cart",checkout:!0})},wd=y.map(w=>({...w,product:ps.find(G=>G.id===w.id)})),US=wd.reduce((w,G)=>w+(G.product?.price||0)*G.quantity,0),Cd=y.reduce((w,G)=>w+G.quantity,0),La=ps.filter(w=>(!hs||w.price<=hs)&&(s==="Todo"||w.category===s)&&[w.name,w.category,w.description].join(" ").toLowerCase().includes(o.toLowerCase()));u!=="featured"?La=[...La].sort((w,G)=>u==="low"?w.price-G.price:G.price-w.price):La=[...La].sort((w,G)=>["canela","milan","aurora","bruna","rose","nara"].indexOf(w.id)-["canela","milan","aurora","bruna","rose","nara"].indexOf(G.id));let Vg=Za?.total??La.length,Dl=Za?.pages??Math.max(1,Math.ceil(La.length/12));La=Za?.items??La.slice(0,12);let Gg=async(w,G="product",ye=w.colors[0])=>{try{let dt=await J("/products/"+w.id);x({type:G,p:dt,initialColor:ye})}catch(dt){A(dt.message)}},RS={factory:mr,ruler:gr,truck:vr,card:Jo,cube:hn},OS={catalogo:p.default.createElement("section",{id:"catalogo",className:"wrap catalog"},p.default.createElement("h2",null,ta("catalogo").title),p.default.createElement("div",{className:"catalog-tools"},p.default.createElement("div",{className:"tabs","aria-label":"Categor\xEDas"},["Todo",...Sa].map(w=>p.default.createElement("button",{key:w,className:s===w?"active":"",onClick:()=>r(w)},w))),p.default.createElement("button",{className:"icon","aria-label":"Buscar y filtrar productos",onClick:()=>d(!f)},p.default.createElement(xr,null),p.default.createElement(rl,null))),f&&p.default.createElement("div",{className:"filter"},p.default.createElement("label",null,"Buscar producto",p.default.createElement("input",{value:o,onChange:w=>l(w.target.value),placeholder:"Nombre, tipo o descripci\xF3n"})),p.default.createElement("label",null,"Ordenar",p.default.createElement("select",{value:u,onChange:w=>c(w.target.value)},p.default.createElement("option",{value:"featured"},"Destacados"),p.default.createElement("option",{value:"low"},"Menor precio"),p.default.createElement("option",{value:"high"},"Mayor precio")))),p.default.createElement("p",{className:"catalog-count","aria-live":"polite"},Il?"Actualizando cat\xE1logo\u2026":`${Vg} ${Vg===1?"referencia":"referencias"} \xB7 P\xE1gina ${Za?.page||Ya} de ${Dl}`),zg&&p.default.createElement("p",{role:"alert",className:"error"},zg),p.default.createElement("div",{className:"products","aria-busy":Il},La.map((w,G)=>p.default.createElement(YC,{key:w.id,p:w,i:G+((Za?.page||Ya)-1)*12,onAdd:Md,onDetails:ye=>Gg(w,"product",ye),on3d:ye=>Gg(w,"3d",ye)}))),!La.length&&p.default.createElement("p",{className:"empty"},"No encontramos productos con esos filtros."," ",p.default.createElement("button",{onClick:()=>{r("Todo"),l(""),yd(null)}},"Ver todas")),Dl>1&&p.default.createElement("nav",{className:"pagination","aria-label":"P\xE1ginas del cat\xE1logo"},p.default.createElement("button",{className:"outline",disabled:Il||Ya<=1,onClick:()=>{bd(Math.max(1,(Za?.page||Ya)-1)),ja("catalogo")}},"Anterior"),p.default.createElement("span",null,"P\xE1gina ",Za?.page||Ya," de ",Dl),p.default.createElement("button",{className:"outline",disabled:Il||(Za?.page||Ya)>=Dl,onClick:()=>{bd((Za?.page||Ya)+1),ja("catalogo")}},"Siguiente")),p.default.createElement("div",{className:"center"},p.default.createElement("button",{className:"outline",onClick:()=>{r("Todo"),l(""),yd(null),d(!0),ja("catalogo")}},"Ver cat\xE1logo completo \xB7 ",ps.length," modelos"))),reels:p.default.createElement("section",{id:"reels",className:"wrap split-strip"},p.default.createElement("h2",null,ta("reels").title),p.default.createElement("div",{className:"reels"},Ne.reels.map(w=>p.default.createElement("button",{className:"reel",key:w.id,onClick:()=>x({type:"reel",r:w})},p.default.createElement("img",{loading:"lazy",src:we(w.image),alt:w.title}),p.default.createElement("span",{className:"play"},p.default.createElement(ri,{size:19})),p.default.createElement("strong",null,w.title))))),configurador:p.default.createElement("section",{id:"configurador",className:"wrap configurator"},p.default.createElement("div",null,p.default.createElement("h2",null,ta("configurador").title),p.default.createElement("p",null,ta("configurador").subtitle)),p.default.createElement("div",null,p.default.createElement("img",{className:"config-photo",src:we(_d?.image),alt:"Referencia de sala modular"}),p.default.createElement("p",{className:"caption"},"Referencia de configuraci\xF3n \xB7 medidas por confirmar")),p.default.createElement("div",{className:"config-options"},p.default.createElement("label",null,"1. Configuraci\xF3n"),p.default.createElement("div",{className:"tabs"},["Lineal","En L","En U"].map(w=>p.default.createElement("button",{className:w===P?"active":"",key:w,onClick:()=>N(w)},w))),p.default.createElement("label",null,"2. Tela \xB7 ",D),p.default.createElement("div",{className:"swatches"},["Petr\xF3leo","Terracota","Mostaza","Gris","Arena"].map(w=>p.default.createElement("button",{key:w,className:D===w?"chosen":"",style:{background:Wp[w]},"aria-label":"Tela "+w,"aria-pressed":D===w,onClick:()=>H(w)}))),p.default.createElement("label",null,"3. Extras (opcionales)"),["Ba\xFAl","Mesa de centro","Antifluidos"].map(w=>p.default.createElement("label",{className:"check",key:w},p.default.createElement("input",{type:"checkbox",checked:F.includes(w),onChange:()=>oe(F.includes(w)?F.filter(G=>G!==w):[...F,w])}),w))),p.default.createElement("div",{className:"configuration-summary"},p.default.createElement("small",null,"Tu dise\xF1o"),p.default.createElement("div",{className:"room-shape "+P.replace(" ","").toLowerCase(),style:{"--fabric":Wp[D]}},p.default.createElement("span",null),p.default.createElement("span",null),p.default.createElement("span",null)),p.default.createElement("strong",null,P," \xB7 ",D),p.default.createElement("p",null,F.join(" \xB7 ")||"Sin extras"),p.default.createElement("small",null,"Precio y medidas sujetos a cotizaci\xF3n"),p.default.createElement("button",{onClick:()=>Hr("personalizacion")},"Cotizar mi dise\xF1o"))),espacio:p.default.createElement("section",{id:"espacio",className:"wrap two-panels"},p.default.createElement("article",null,p.default.createElement("div",null,p.default.createElement("h2",null,ta("espacio").title),p.default.createElement("p",null,ta("espacio").subtitle),p.default.createElement(Ki,{inline:!0,productName:ms?.name,onClick:()=>x({type:"3d",p:ms})}),p.default.createElement("button",{className:"text-button",onClick:()=>x({type:"3d",p:ms})},"Ver en mi espacio"),p.default.createElement("a",{className:"text-button",href:"./index.html"},"Probar sof\xE1 de Blender \xB7 c\xE1mara del celular")),p.default.createElement("div",{className:"phone-visual"},p.default.createElement("img",{src:we(_d?.image),alt:"Sala en tu espacio"}),p.default.createElement("span",null,p.default.createElement(hn,{size:17})," 3D \xB7 Girar"))),p.default.createElement("article",null,p.default.createElement("div",null,p.default.createElement("h2",null,"\xBFCu\xE1l va contigo?"),p.default.createElement("p",null,"Responde 3 preguntas y encuentra la sala que encaja contigo."),p.default.createElement("button",{className:"outline",onClick:()=>x({type:"quiz"})},"Empezar asesor r\xE1pido")),p.default.createElement(Zi,{size:68}))),financiacion:p.default.createElement("section",{id:"financiacion",className:"wrap finance finance--branded"},p.default.createElement(Vp,{title:ta("financiacion").title,onBrowse:(w,G)=>x({type:"payment-options",methods:w,title:G}),subtitle:ta("financiacion").subtitle,banners:Ne.financeBanners,methods:ve.paymentMethods,demo:ve.demo,onChoose:w=>x({type:"payment",method:w})}),p.default.createElement("div",{className:"calculator"},p.default.createElement("h3",null,"Simula tu cuota"),p.default.createElement("div",{className:"price-line"},p.default.createElement("label",{htmlFor:"amount"},"Valor de la sala"),p.default.createElement("strong",null,mt(M))),p.default.createElement("input",{id:"amount",type:"range",min:"1000000",max:"10000000",step:"50000",value:M,onChange:w=>V(+w.target.value)}),p.default.createElement("div",{className:"two-panels"},p.default.createElement("div",null,p.default.createElement("small",null,"Referencia: 3 partes"),p.default.createElement("strong",null,mt(Math.ceil(M/3))," / mes")),p.default.createElement("div",null,p.default.createElement("small",null,"Referencia: apartado del 20 %"),p.default.createElement("strong",null,mt(M*.2)))),p.default.createElement("p",{className:"caption"},"Simulaci\xF3n matem\xE1tica. No constituye aprobaci\xF3n de cr\xE9dito ni incluye intereses."),p.default.createElement("p",{className:"caption"},ve.paymentNote))),taller:p.default.createElement("section",{id:"taller",className:"wrap workshop"},p.default.createElement("div",null,p.default.createElement("h2",null,ta("taller").title),p.default.createElement("p",null,ta("taller").subtitle),p.default.createElement("button",{onClick:()=>x({type:"workshop"})},"Conoce el taller")),p.default.createElement("img",{loading:"lazy",src:we(Ne.workshop.image),alt:"Fabricaci\xF3n en el taller"}),p.default.createElement("div",null,Ne.workshop.steps.map((w,G)=>{let ye=[gr,mr,vr][G%3];return p.default.createElement("article",{key:G},p.default.createElement(ye,null),p.default.createElement("div",null,p.default.createElement("h3",null,w.title),p.default.createElement("p",null,w.text)))}))),galeria:p.default.createElement("section",{id:"galeria",className:"wrap"},p.default.createElement("div",{className:"section-top"},p.default.createElement("h2",null,ta("galeria").title),p.default.createElement("a",{href:ve.facebook,target:"_blank",rel:"noreferrer"},"Ver opiniones en Facebook \u2192")),p.default.createElement("div",{className:"gallery"},Ne.gallery.map(w=>p.default.createElement("button",{key:w.id,onClick:()=>x({type:"image",image:w.image,title:w.title})},p.default.createElement("img",{loading:"lazy",src:we(w.image),alt:w.title}))))),contacto:p.default.createElement("section",{id:"contacto",className:"wrap contact-grid"},p.default.createElement("article",{id:"envios"},p.default.createElement("h2",null,"Llegamos hasta tu hogar"),p.default.createElement("p",null,Ne.delivery.text),Ne.delivery.cities.map(w=>p.default.createElement("p",{key:w},p.default.createElement(Yi,{size:17}),w)),p.default.createElement("button",{onClick:()=>Hr("envio")},"Consultar mi ciudad"),p.default.createElement("button",{className:"text-button",onClick:()=>x({type:"location"})},"Enviar ubicaci\xF3n de entrega por WhatsApp")),p.default.createElement("article",null,p.default.createElement("div",null,p.default.createElement("h2",null,ta("contacto").title),p.default.createElement("p",null,p.default.createElement("strong",null,ve.address)),p.default.createElement("p",null,ve.hours),p.default.createElement("div",{className:"actions"},p.default.createElement("a",{className:"button outline",href:_c(ve),target:"_blank",rel:"noreferrer"},"C\xF3mo llegar"),p.default.createElement("a",{className:"button",href:Sd("Hola, quiero conocer las salas de Dekoramma."),target:"_blank",rel:"noreferrer"},"Escribir por WhatsApp"),p.default.createElement("a",{className:"button outline",href:cl(ve.address,ve.mapsPlaceId),target:"_blank",rel:"noreferrer"},"Ver mapa de la tienda"),p.default.createElement("a",{className:"text-button",href:v_(ve),target:"_blank",rel:"noreferrer"},"Compartir ubicaci\xF3n por WhatsApp"))),p.default.createElement("img",{loading:"lazy",src:we(ps[0]?.image),alt:"Visita nuestra tienda"})))};return p.default.createElement(p.default.Fragment,null,p.default.createElement(kp,{banner:Ne.welcomeBanner,Modal:Xp,suppressed:!!m||h}),p.default.createElement("div",{className:"announcement"},ve.announcement),p.default.createElement("header",{className:"header"},p.default.createElement("div",{className:"wrap header-inner"},p.default.createElement("button",{className:"icon menu-button "+(Ne.navigation.drawer?"always":""),"aria-label":"Abrir cat\xE1logo",onClick:()=>g(!0)},p.default.createElement(el,null)),p.default.createElement(L_,null),p.default.createElement("nav",null,p.default.createElement("a",{href:"#catalogo"},"Cat\xE1logo"),p.default.createElement("a",{href:"#configurador"},"Dis\xE9\xF1ala"),p.default.createElement("a",{href:"#financiacion"},"Financiaci\xF3n"),p.default.createElement("a",{href:"#taller"},"El taller"),p.default.createElement("a",{href:"#contacto"},"Vis\xEDtanos")),p.default.createElement("div",{className:"header-actions"},p.default.createElement("button",{className:"icon","aria-label":"Buscar",onClick:()=>{d(!0),ja("catalogo")}},p.default.createElement(xr,null)),p.default.createElement("button",{className:"icon bag","aria-label":"Bolsa, "+Cd+" productos",onClick:()=>x({type:"cart"})},p.default.createElement(sl,null),Cd>0&&p.default.createElement("span",null,Cd)),p.default.createElement("button",{className:"icon","aria-label":"Consultar mi pedido",onClick:()=>x({type:"track"})},p.default.createElement(ol,null)),p.default.createElement("button",{className:"advice",onClick:()=>Hr()},"Asesor\xEDa")))),p.default.createElement("main",null,p.default.createElement(Fp,{campaigns:Ne.campaigns,demo:ve.demo,onCategory:w=>{r(w),l(""),ja("catalogo")}},p.default.createElement("section",{className:"hero"},p.default.createElement("div",{className:"hero-copy"},p.default.createElement("span",{className:"eyebrow"},Ne.hero.eyebrow),p.default.createElement("h1",null,Ne.hero.title.split(`
`).map((w,G)=>p.default.createElement(p.default.Fragment,{key:G},w,p.default.createElement("br",null)))),p.default.createElement("p",null,Ne.hero.text),p.default.createElement("div",{className:"actions"},p.default.createElement("button",{onClick:()=>ja("catalogo")},Ne.hero.primary),p.default.createElement("button",{className:"outline light",onClick:()=>x({type:"3d",p:ms})},Ne.hero.secondary))),p.default.createElement("div",{className:"hero-image"},p.default.createElement("img",{src:we(ve.heroImage),alt:"Sala modular petr\xF3leo en un ambiente industrial"}),p.default.createElement(Ki,{hero:!0,productName:ms?.name,onClick:()=>x({type:"3d",p:ms})})))),p.default.createElement("div",{className:"wrap benefit-container"},p.default.createElement("div",{className:"benefit-track "+(v?"paused":"")},[...Ne.benefits,...Ne.benefits].map((w,G)=>{let ye=RS[w.icon]||hn;return p.default.createElement("a",{key:G,href:"#"+w.target,tabIndex:G>=Ne.benefits.length?-1:0,"aria-hidden":G>=Ne.benefits.length||void 0},p.default.createElement(ye,null),p.default.createElement("div",null,p.default.createElement("strong",null,w.title),p.default.createElement("small",null,w.text)))})),p.default.createElement("button",{className:"icon pause","aria-label":v?"Reanudar franja":"Pausar franja",onClick:()=>_(!v)},v?p.default.createElement(ri,{size:15}):p.default.createElement(ji,{size:15}))),Ne.sections.filter(w=>w.visible).map(w=>p.default.createElement(p.default.Fragment,{key:w.id},OS[w.id])),p.default.createElement("section",{className:"wrap faqs"},Ne.faq.map(w=>p.default.createElement("details",{key:w.id},p.default.createElement("summary",null,w.title),p.default.createElement("p",null,w.text))),p.default.createElement("div",null,p.default.createElement("strong",null,"S\xEDguenos"),p.default.createElement("p",null,p.default.createElement("a",{href:ve.instagram,target:"_blank",rel:"noreferrer"},p.default.createElement(yr,{brand:"instagram"})," Instagram")," ","\xB7"," ",p.default.createElement("a",{href:ve.facebook,target:"_blank",rel:"noreferrer"},p.default.createElement(yr,{brand:"facebook"})," Facebook"))))),ve.marketingEnabled!==!1&&p.default.createElement(Up,{legalFingerprint:e.legalFingerprint,settings:ve,onAdvice:()=>Hr("asesoria")}),p.default.createElement("section",{className:"wrap information-strip"},p.default.createElement("div",null,p.default.createElement("h2",null,"Estamos aqu\xED para acompa\xF1arte."),p.default.createElement("p",null,"Ubicaci\xF3n, garant\xEDas, condiciones de compra y documentaci\xF3n de Dekoramma.")),p.default.createElement("a",{className:"button outline",href:"./dekoramma.html?vista=informacion"},"Consultar informaci\xF3n y documentos")),p.default.createElement("footer",null,p.default.createElement("div",{className:"wrap footer-grid"},p.default.createElement("div",{className:"footer-logo"},p.default.createElement(L_,null)),p.default.createElement("div",null,p.default.createElement("h3",null,"Cat\xE1logo"),Sa.slice(0,4).map(w=>p.default.createElement("button",{key:w,onClick:()=>{r(w),ja("catalogo")}},w))),p.default.createElement("div",null,p.default.createElement("h3",null,"Ayuda"),p.default.createElement("a",{href:"#configurador"},"Medidas y telas"),p.default.createElement("button",{onClick:()=>Hr("envio")},"Env\xEDos y entregas"),p.default.createElement("a",{href:"#financiacion"},"Financiaci\xF3n"),p.default.createElement("button",{onClick:()=>x({type:"track"})},"Seguimiento de solicitud")),p.default.createElement("div",null,p.default.createElement("h3",null,"Informaci\xF3n"),p.default.createElement("a",{href:"./dekoramma.html?vista=informacion#terminos"},"T\xE9rminos y condiciones"),p.default.createElement("a",{href:"./dekoramma.html?vista=informacion#privacidad"},"Pol\xEDtica de privacidad"),p.default.createElement("a",{href:"./dekoramma.html?vista=informacion#garantias"},"Garant\xEDas"),p.default.createElement("a",{href:"./dekoramma.html?vista=informacion#retracto"},"Derecho de retracto"),p.default.createElement("a",{href:"https://www.sic.gov.co/",target:"_blank",rel:"noreferrer"},"Superintendencia de Industria y Comercio"),p.default.createElement("a",{href:"./dekoramma.html?vista=informacion#documentos"},"Documentaci\xF3n comercial")),p.default.createElement("div",null,p.default.createElement("h3",null,"Contacto"),ve.email&&p.default.createElement("a",{href:"mailto:"+ve.email},ve.email),p.default.createElement("a",{href:"tel:+"+ve.phone},"+",ve.phone),p.default.createElement("p",null,"Bogot\xE1, Colombia"),p.default.createElement("a",{href:"./dekoramma.html?vista=admin"},"Administraci\xF3n"))),p.default.createElement("div",{className:"wrap footer-bottom"},"Dise\xF1o y desarrollo \xB7 Florenza Estudio Digital",ve.demo&&p.default.createElement("span",null,"Vista de desarrollo \xB7 productos, im\xE1genes y precios ilustrativos"))),p.default.createElement("nav",{className:"floating-socials","aria-label":"Redes sociales de Dekoramma"},[["facebook",ve.facebook,"Facebook"],["instagram",ve.instagram,"Instagram"]].filter(([,w])=>w).map(([w,G,ye])=>p.default.createElement("a",{key:w,href:G,target:"_blank",rel:"noopener noreferrer","aria-label":`Dekoramma en ${ye}`,title:ye},p.default.createElement("span",{className:"social-tooltip"},ye),p.default.createElement(yr,{brand:w})))),p.default.createElement("a",{className:"whatsapp","aria-label":"Asesor\xEDa por WhatsApp",href:Sd("Hola, me interesa una sala a medida."),target:"_blank",rel:"noreferrer"},p.default.createElement(yr,{brand:"whatsapp"})),L&&p.default.createElement("div",{className:"toast",role:"status"},p.default.createElement(Wi,{size:18}),L,p.default.createElement("button",{className:"text-button",onClick:()=>x({type:"cart"})},"Ver bolsa")),h&&p.default.createElement(Xp,{title:"Cat\xE1logo",onClose:()=>g(!1)},p.default.createElement("div",{className:"drawer-links"},["Todo",...Sa].map(w=>p.default.createElement("button",{key:w,onClick:()=>{r(w),ja("catalogo")}},w,p.default.createElement(At,{size:18}))),p.default.createElement("a",{href:"#configurador",onClick:()=>g(!1)},"Dise\xF1a tu sala"),p.default.createElement("a",{href:"./dekoramma.html?vista=admin"},"Administraci\xF3n"))),m&&p.default.createElement(Xp,{title:{success:"Solicitud recibida",cart:m.checkout?"Finaliza tu compra":"Tu bolsa",product:m.p?.name,"3d":"M\xEDrala en 3D",lead:"Hablemos de tu sala",quiz:"Encuentra tu sala",payment:m.method,"payment-options":m.title,track:"Sigue tu solicitud",location:"Ubicaci\xF3n para tu entrega",reel:m.r?.title,workshop:"Nuestro taller",image:m.title,text:m.title}[m.type],wide:["3d","product"].includes(m.type),onClose:()=>x(null)},m.type==="3d"&&p.default.createElement(p.Suspense,{fallback:p.default.createElement("p",null,"Cargando visor\u2026")},p.default.createElement(WC,{product:m.p,initialColor:m.initialColor,onBuy:Md,onQuote:w=>x({type:"lead",leadType:"personalizacion",configuration:w})})),m.type==="product"&&p.default.createElement(Pp,{key:m.p.id,product:m.p,initialColor:m.initialColor,onAdd:(w,G)=>{Md(w,G)},on3d:w=>x({type:"3d",p:m.p,initialColor:w}),onQuote:w=>x({type:"lead",leadType:"personalizacion",configuration:{kind:"product",productId:m.p.id,productName:m.p.name,color:w,parts:{},legOption:""}})}),m.type==="cart"&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"checkout-order-summary"},wd.length===0?p.default.createElement("p",{className:"empty"},"Tu bolsa est\xE1 vac\xEDa. Encuentra una sala que vaya contigo."):wd.map((w,G)=>p.default.createElement("div",{className:"cart-row",key:w.id+w.color},p.default.createElement("img",{src:we(Qi(w.product,w.color).url),alt:Qi(w.product,w.color).alt}),p.default.createElement("div",null,p.default.createElement("strong",null,w.product?.name||"Producto no disponible"),p.default.createElement("small",null,"Color seleccionado: ",w.color," \xB7"," ",mt((w.product?.price||0)*w.quantity)),!Qi(w.product,w.color).matched&&p.default.createElement("small",{className:"caption"},"Imagen de referencia; foto de este color pendiente."),Qi(w.product,w.color).matched&&/ilustrativa|generada/i.test(Qi(w.product,w.color).alt)&&p.default.createElement("small",{className:"caption"},"Imagen ilustrativa generada \xB7 tono por confirmar con la tela real."),p.default.createElement("div",{className:"quantity"},p.default.createElement("button",{className:"icon","aria-label":"Restar unidad",onClick:()=>b(y.map((ye,dt)=>dt===G?{...ye,quantity:Math.max(1,ye.quantity-1)}:ye))},p.default.createElement(tl,{size:14})),w.quantity,p.default.createElement("button",{className:"icon","aria-label":"Sumar unidad",onClick:()=>b(y.map((ye,dt)=>dt===G?{...ye,quantity:Math.min(10,ye.quantity+1)}:ye))},p.default.createElement(nl,{size:14})),p.default.createElement("button",{className:"text-button",onClick:()=>b(y.filter((ye,dt)=>G!==dt))},"Quitar")))))),y.length>0&&p.default.createElement(p.default.Fragment,null,p.default.createElement("h3",null,"Subtotal ",mt(US)),p.default.createElement("p",null,"Env\xEDo por cotizar. La solicitud no realiza ning\xFAn cobro."),p.default.createElement(Bp,{items:y,methods:ve.paymentMethods,legalFingerprint:e.legalFingerprint,onDone:w=>{b([]),x({type:"success",result:w})}}))),m.type==="success"&&p.default.createElement(p.default.Fragment,null,p.default.createElement("p",null,"Tu referencia: ",p.default.createElement("strong",null,m.result.id)),p.default.createElement("p",null,"Conserva tu referencia y clave de seguimiento. Un asesor debe confirmar precio, env\xEDo y pago."),m.result.trackingToken&&p.default.createElement("details",null,p.default.createElement("summary",null,"Ver mi clave privada de seguimiento"),p.default.createElement("code",{className:"private-tracking-key"},m.result.trackingToken),p.default.createElement("p",null,"No compartas esta clave; permite consultar tu solicitud.")),p.default.createElement("button",{onClick:()=>x({type:"track"})},"Consultar estado")),m.type==="lead"&&p.default.createElement(ZC,{legalFingerprint:e.legalFingerprint,type:m.leadType,config:m.configuration||{shape:P,fabric:D,extras:F},onSuccess:()=>x({type:"text",title:"Solicitud recibida",text:"Tu solicitud qued\xF3 registrada. El equipo de la tienda podr\xE1 verla en Administraci\xF3n \u2192 Asesor\xEDas."})}),m.type==="quiz"&&p.default.createElement("div",{className:"form-grid"},p.default.createElement("label",null,"Presupuesto m\xE1ximo",p.default.createElement("select",{value:ne,onChange:w=>Cn(w.target.value)},p.default.createElement("option",{value:"1500000"},"Hasta $1.500.000"),p.default.createElement("option",{value:"3000000"},"Hasta $3.000.000"),p.default.createElement("option",{value:"10000000"},"M\xE1s de $3.000.000"))),p.default.createElement("label",null,"Personas",p.default.createElement("select",{value:An,onChange:w=>fs(w.target.value)},p.default.createElement("option",{value:"1"},"1\u20132 personas"),p.default.createElement("option",{value:"3"},"3\u20134 personas"),p.default.createElement("option",{value:"5"},"5 o m\xE1s personas"))),p.default.createElement("label",{className:"check"},p.default.createElement("input",{type:"checkbox",checked:yi,onChange:w=>NS(w.target.checked)}),"Necesito funci\xF3n cama"),p.default.createElement("button",{onClick:()=>{l(""),r(yi?"Sof\xE1s cama":An==="1"?"Poltronas":An==="5"?"Esquineros":"Modulares"),c("low"),yd(+ne),x(null),ja("catalogo"),A("Mira estas opciones y confirma tu presupuesto de "+mt(+ne)+" con un asesor.")}},"Ver opciones para m\xED")),m.type==="payment"&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"payment-modal-brand"},p.default.createElement(pn,{method:m.method})),p.default.createElement("p",null,ve.paymentNote),p.default.createElement("p",null,"Tu preferencia por ",m.method," puede quedar registrada en la solicitud de compra. La tienda confirma el canal de pago antes de cobrarte."),p.default.createElement("a",{className:"button",href:Sd("Quiero consultar condiciones de pago con "+m.method),target:"_blank",rel:"noreferrer"},"Consultar condiciones por WhatsApp")),m.type==="payment-options"&&p.default.createElement("div",{className:"finance-option-dialog"},p.default.createElement("p",null,"Elige la entidad para consultar sus condiciones."),m.methods.map(w=>p.default.createElement("button",{key:w,"aria-label":`Consultar ${w}`,onClick:()=>x({type:"payment",method:w})},p.default.createElement(pn,{method:w}),p.default.createElement("span",null,w==="Daviplata"?"DaviPlata":w),p.default.createElement(At,{size:18}))),p.default.createElement("p",{className:"caption"},"La conexi\xF3n de cobro est\xE1 pendiente. Esta consulta no realiza ning\xFAn cargo.")),m.type==="track"&&p.default.createElement(jC,null),m.type==="location"&&p.default.createElement(Np,{settings:ve}),m.type==="text"&&p.default.createElement("p",{className:"preserve"},m.text),m.type==="reel"&&p.default.createElement(p.default.Fragment,null,m.r.video?p.default.createElement("video",{className:"video",src:m.r.video,controls:!0,autoPlay:!0,playsInline:!0}):p.default.createElement(p.default.Fragment,null,p.default.createElement("img",{className:"modal-photo",src:we(m.r.image),alt:m.r.title}),p.default.createElement("p",null,m.r.description),p.default.createElement("p",{className:"caption"},"Video pendiente de carga por la tienda."))),m.type==="workshop"&&p.default.createElement(p.default.Fragment,null,p.default.createElement("img",{className:"modal-photo",src:we(Ne.workshop.image),alt:"Taller"}),p.default.createElement("p",null,Ne.workshop.text)),m.type==="image"&&p.default.createElement("img",{className:"modal-photo",src:we(m.image),alt:m.title})))}function YC({p:t,i:e,onAdd:a,onDetails:n,on3d:i}){let[s,r]=(0,p.useState)(t.colors[0]),o=Qi(t,s);return p.default.createElement("article",{className:"product"},p.default.createElement("div",{className:"product-photo"},p.default.createElement("button",{className:"photo-button",onClick:()=>n(s)},p.default.createElement("img",{src:we(o.url),loading:"lazy",alt:o.alt})),p.default.createElement("span",{className:"number"},String(e+1).padStart(2,"0")),t.modelUrl&&p.default.createElement(Ki,{productName:t.name,onClick:()=>i(s)})),p.default.createElement("div",{className:"product-info"},p.default.createElement("small",{className:"color-photo-caption"},"Color: ",s,o.matched?/ilustrativa|generada/i.test(o.alt)?" \xB7 imagen ilustrativa":"":" \xB7 imagen de referencia"),p.default.createElement("div",{className:"dots"},t.colors.map(l=>p.default.createElement("button",{title:l,"aria-label":t.name+": "+l,"aria-pressed":s===l,style:{background:Wp[l]||"#777"},className:s===l?"chosen":"",key:l,onClick:()=>r(l)}))),p.default.createElement("div",{className:"price-line"},p.default.createElement("h3",null,t.name),p.default.createElement("small",null,"3 partes de ",mt(Math.ceil(t.price/3)))),p.default.createElement("div",{className:"price-line"},p.default.createElement("strong",{className:"price"},mt(t.price)),p.default.createElement("small",{className:"accent"},"Consulta cr\xE9dito y pagos")),p.default.createElement("div",{className:"price-line"},p.default.createElement("button",{onClick:()=>a(t,s)},"Comprar ahora"),p.default.createElement("button",{className:"detail-link",onClick:()=>n(s)},"Ver detalles ",p.default.createElement(At,{size:15})))))}function ZC({type:t,config:e,onSuccess:a,legalFingerprint:n}){let[i,s]=(0,p.useState)(!1),[r,o]=(0,p.useState)("whatsapp"),[l,u]=(0,p.useState)("");return p.default.createElement("form",{className:"form-grid",onSubmit:async c=>{c.preventDefault(),s(!0);let f=new FormData(c.currentTarget);try{await J("/leads",{method:"POST",body:{name:f.get("name"),phone:f.get("phone"),city:f.get("city"),message:f.get("message"),type:t,email:f.get("email")||"",contactChannel:r,preferredDate:f.get("preferredDate")||"",preferredTime:f.get("preferredTime")||"",legalFingerprint:n,consent:f.get("consent")==="on",...t==="personalizacion"?{configuration:e}:{}}}),a()}catch(d){u(d.message)}finally{s(!1)}}},t==="personalizacion"&&p.default.createElement("p",null,"Tu elecci\xF3n:"," ",e.kind==="product"?`${e.productName||e.productId} \xB7 ${e.color} \xB7 ${e.summary||Object.entries(e.parts||{}).map(([c,f])=>(A_[c]||c)+": "+f).join(" \xB7 ")}${e.legOption?" \xB7 Patas: "+e.legOption:""}`:p.default.createElement(p.default.Fragment,null,e.shape," \xB7 ",e.fabric," \xB7"," ",e.extras.join(", ")||"Sin extras")),p.default.createElement("label",null,"Nombre",p.default.createElement("input",{name:"name",required:!0,maxLength:"100"})),p.default.createElement("label",null,"Tel\xE9fono",p.default.createElement("input",{name:"phone",required:!0,type:"tel",pattern:"[+0-9\\s-]{7,22}"})),p.default.createElement("label",null,"Ciudad",p.default.createElement("input",{name:"city",required:!0,maxLength:"100"})),p.default.createElement("label",null,"Cu\xE9ntanos qu\xE9 necesitas",p.default.createElement("textarea",{name:"message",required:!0,maxLength:"2000",defaultValue:t==="envio"?"Quiero consultar la entrega en mi ciudad.":t==="personalizacion"?"Quiero cotizar esta configuraci\xF3n.":""})),p.default.createElement("label",null,"\xBFPor d\xF3nde prefieres que te respondamos?",p.default.createElement("select",{value:r,onChange:c=>o(c.target.value)},p.default.createElement("option",{value:"whatsapp"},"WhatsApp"),p.default.createElement("option",{value:"phone"},"Llamada"),p.default.createElement("option",{value:"email"},"Correo electr\xF3nico"))),r==="email"&&p.default.createElement("label",null,"Correo electr\xF3nico",p.default.createElement("input",{name:"email",type:"email",required:!0,autoComplete:"email",maxLength:254})),t==="asesoria"&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"form-two"},p.default.createElement("label",null,"D\xEDa que prefieres (opcional)",p.default.createElement("input",{name:"preferredDate",type:"date"})),p.default.createElement("label",null,"Franja preferida",p.default.createElement("select",{name:"preferredTime"},p.default.createElement("option",{value:""},"Sin preferencia"),p.default.createElement("option",{value:"morning"},"Ma\xF1ana"),p.default.createElement("option",{value:"afternoon"},"Tarde")))),p.default.createElement("p",{className:"caption"},"Un asesor confirmar\xE1 la disponibilidad y la hora de tu cita.")),p.default.createElement("p",{className:"caption"},"Consulta nuestra"," ",p.default.createElement("a",{href:"./dekoramma.html?vista=informacion#privacidad",target:"_blank",rel:"noreferrer"},"pol\xEDtica de privacidad"),"."),p.default.createElement("label",{className:"check"},p.default.createElement("input",{name:"consent",type:"checkbox",required:!0}),__),l&&p.default.createElement("p",{className:"error"},l),p.default.createElement("button",{disabled:i},i?"Enviando\u2026":"Enviar a la tienda"))}function jC(){let t=(()=>{try{return JSON.parse(localStorage.getItem("dk-tracking")||"{}")}catch{return{}}})(),[e,a]=(0,p.useState)(null),[n,i]=(0,p.useState)("");return p.default.createElement("form",{className:"form-grid",onSubmit:async s=>{s.preventDefault();let r=new FormData(s.currentTarget);i("");try{a(await J("/track",{method:"POST",body:{id:r.get("id"),token:r.get("token")}}))}catch(o){i(o.message)}}},p.default.createElement("label",null,"Referencia de solicitud",p.default.createElement("input",{name:"id",required:!0,defaultValue:t.id||""})),p.default.createElement("label",null,"Clave privada de seguimiento",p.default.createElement("input",{name:"token",required:!0,defaultValue:t.token||""})),p.default.createElement("p",{className:"caption"},"Guarda ambos datos para consultar desde otro dispositivo."),p.default.createElement("button",null,"Consultar estado"),n&&p.default.createElement("p",{className:"error"},n),e&&p.default.createElement("div",{className:"tracking-result"},p.default.createElement("h3",null,"Estado: ",e.status.replaceAll("_"," ")),p.default.createElement("p",null,"Total de productos: ",mt(e.total)),p.default.createElement("p",null,"Pago pendiente de confirmaci\xF3n con la tienda.")))}var S=me(le());var he=me(le());function Zp({product:t,onChange:e,onBusy:a}){let[n,i]=(0,he.useState)(!1),[s,r]=(0,he.useState)(""),o=t.gallery?.length?t.gallery:t.image?[{url:t.image,color:"",alt:t.name}]:[],l=t.videos?.length?t.videos:t.videoUrl?[{url:t.videoUrl,title:"Video del producto"}]:[];function u(f){e({gallery:f,image:f[0]?.url||""})}async function c(f,d=!1){let h=Array.from(f.target.files||[]);if(f.target.value="",!h.length)return;let g=d?3:10,v=d?l:o;if(v.length+h.length>g){r("Puedes guardar hasta "+g+" "+(d?"videos":"fotograf\xEDas")+" por producto.");return}i(!0),a(!0),r("");let _=[...v];try{for(let m of h){if(m.size>100*1024*1024)throw Error("Cada archivo debe pesar como m\xE1ximo 100 MB.");let x=new FormData;x.append("file",m);let y=await J("/admin/upload",{method:"POST",body:x});_.push(d?{url:y.url,title:m.name.replace(/\.mp4$/i,"").slice(0,100)}:{url:y.url,color:"",alt:t.name}),d?e({videos:[..._],videoUrl:_[0]?.url||""}):u([..._])}}catch(m){r(m.message+" Los archivos subidos correctamente permanecen en el formulario.")}finally{i(!1),a(!1)}}return he.default.createElement("fieldset",{disabled:n,className:"media-editor"},he.default.createElement("legend",null,"Fotograf\xEDas y videos del producto"),he.default.createElement("p",null,"Hasta 10 fotos y 3 videos MP4 de 3 minutos. Puedes seleccionar varios archivos. La primera foto es la portada; vincula las dem\xE1s con sus colores."),he.default.createElement("label",null,"Subir fotograf\xEDas (",o.length,"/10)",he.default.createElement("input",{type:"file",multiple:!0,accept:".png,.jpg,.jpeg,.webp",onChange:f=>c(f)})),he.default.createElement("div",{className:"media-edit-grid"},o.map((f,d)=>he.default.createElement("div",{className:"media-edit-card",key:d},he.default.createElement("img",{src:we(f.url),alt:f.alt||"Fotograf\xEDa "+(d+1),loading:"lazy"}),he.default.createElement("strong",null,d===0?"Portada":"Foto "+(d+1)),he.default.createElement("label",null,"Color de esta foto",he.default.createElement("select",{value:f.color,onChange:h=>u(o.map((g,v)=>v===d?{...g,color:h.target.value}:g))},he.default.createElement("option",{value:""},"Vista general"),t.colors.filter(Boolean).map(h=>he.default.createElement("option",{key:h},h)))),he.default.createElement("label",null,"Descripci\xF3n accesible",he.default.createElement("input",{maxLength:160,value:f.alt,onChange:h=>u(o.map((g,v)=>v===d?{...g,alt:h.target.value}:g))})),he.default.createElement("div",{className:"actions"},d>0&&he.default.createElement("button",{type:"button",className:"outline",onClick:()=>u([f,...o.filter((h,g)=>g!==d)])},"Usar de portada"),he.default.createElement("button",{type:"button",className:"outline",onClick:()=>u(o.filter((h,g)=>g!==d))},"Quitar foto"))))),he.default.createElement("label",null,"Subir videos (",l.length,"/3)",he.default.createElement("input",{type:"file",multiple:!0,accept:".mp4",onChange:f=>c(f,!0)})),l.map((f,d)=>he.default.createElement("div",{className:"media-edit-card",key:d},he.default.createElement("video",{className:"video",src:f.url,preload:"none",controls:!0}),he.default.createElement("label",null,"T\xEDtulo del video",he.default.createElement("input",{value:f.title,required:!0,maxLength:100,onChange:h=>e({videos:l.map((g,v)=>v===d?{...g,title:h.target.value}:g)})})),he.default.createElement("button",{type:"button",className:"outline",onClick:()=>{let h=l.filter((g,v)=>v!==d);e({videos:h,videoUrl:h[0]?.url||""})}},"Quitar video"))),n&&he.default.createElement("p",{role:"status"},"Subiendo y validando archivos\u2026 Espera antes de guardar."),s&&he.default.createElement("p",{className:"error",role:"alert"},s))}var K=me(le());var DE=Xo(()=>Promise.resolve().then(()=>(qp(),Gp)),{ssr:!1});function Ag({product:t,onChange:e,Media:a,onBusy:n=()=>{}}){let[i,s]=(0,K.useState)(!1),[r,o]=(0,K.useState)("cm"),[l,u]=(0,K.useState)(""),[c,f]=(0,K.useState)(!1),d={arEnabled:!0,showDimensions:!0,showFit:!0,showRotate:!0,materialName:"",colors:[],...t.viewer},h=v=>e({viewer:{...d,...v}}),g=(v,_)=>h({colors:d.colors.map((m,x)=>x===v?{...m,..._}:m)});return K.default.createElement("fieldset",{className:"media-editor"},K.default.createElement("legend",null,"Modelo del producto y experiencia en el celular"),K.default.createElement("p",null,"Carga el GLB y, si lo tienes, el USDZ en los campos del producto. Verifica que sus medidas reales coincidan con ancho, fondo y alto. La c\xE1mara coloca este mueble sobre el piso; no escanea paredes ni comprueba obst\xE1culos."),K.default.createElement("div",{className:"admin-edit-grid"},[["arEnabled","Ofrecer \xABVer en mi espacio\xBB con c\xE1mara"],["showDimensions","Mostrar las medidas del producto"],["showFit","Mostrar comparaci\xF3n con el espacio disponible"],["showRotate","Sugerir girar el celular horizontalmente"]].map(([v,_])=>K.default.createElement("label",{className:"check",key:v},K.default.createElement("input",{type:"checkbox",checked:d[v],onChange:m=>h({[v]:m.target.checked})}),_))),K.default.createElement("h3",null,"Colores del modelo"),K.default.createElement("p",null,"Para conservar cada color al abrir el visor nativo, carga un GLB del mueble completo por acabado, con la misma forma y escala. El USDZ de cada color es opcional. Los controles sobre la c\xE1mara solo aparecen en WebXR."),K.default.createElement("label",null,"Nombre exacto del material de tapizado en el GLB (opcional)",K.default.createElement("input",{value:d.materialName,maxLength:100,placeholder:"Ej. Tapizado",onChange:v=>h({materialName:v.target.value})})),K.default.createElement("p",null,"Ese material permite aproximar el color sobre la c\xE1mara WebXR. Si se deja vac\xEDo, los colores se eligen antes de abrir la c\xE1mara. No se modifican patas ni piezas."),d.colors.map((v,_)=>K.default.createElement("div",{className:"media-edit-card",key:_},K.default.createElement("label",null,"Nombre del color",K.default.createElement("input",{required:!0,maxLength:50,value:v.label,onChange:m=>g(_,{label:m.target.value})})),K.default.createElement("label",null,"Muestra orientativa",K.default.createElement("input",{type:"color",value:v.hex,onChange:m=>g(_,{hex:m.target.value})})),K.default.createElement(a,{label:`GLB del color ${_+1}`,value:v.modelUrl,accept:".glb",onBusy:n,onChange:m=>g(_,{modelUrl:m})}),K.default.createElement(a,{label:`USDZ del color ${_+1} (opcional)`,value:v.usdzUrl,accept:".usdz",onBusy:n,onChange:m=>g(_,{usdzUrl:m})}),K.default.createElement("button",{type:"button",className:"outline",onClick:()=>h({colors:d.colors.filter((m,x)=>x!==_)})},"Quitar color"))),K.default.createElement("button",{type:"button",className:"outline",disabled:d.colors.length>=20,onClick:()=>h({colors:[...d.colors,{label:"Nuevo color",hex:"#888888",modelUrl:"",usdzUrl:""}]})},"A\xF1adir color con archivo 3D"),K.default.createElement("details",null,K.default.createElement("summary",null,"Importar un OBJ b\xE1sico"),K.default.createElement("p",null,"Convierte la geometr\xEDa del OBJ a GLB. No incorpora archivos MTL, fotograf\xEDas ni texturas externas. Para acabados fotorrealistas, exporta un GLB preparado desde Blender. M\xE1ximo 20 MB y 300.000 v\xE9rtices resultantes; comprueba la orientaci\xF3n y la escala antes de guardar."),K.default.createElement("label",null,"Unidad usada al crear el OBJ",K.default.createElement("select",{value:r,onChange:v=>o(v.target.value)},K.default.createElement("option",{value:"cm"},"Cent\xEDmetros"),K.default.createElement("option",{value:"m"},"Metros"),K.default.createElement("option",{value:"mm"},"Mil\xEDmetros"))),K.default.createElement("input",{type:"file",accept:".obj","aria-label":"Importar OBJ b\xE1sico",disabled:c,onChange:async v=>{let _=v.target.files?.[0];if(_){f(!0),n(!0),u("Convirtiendo el OBJ\u2026");try{if(_.size>20*1024*1024)throw Error("El OBJ supera 20 MB. Optim\xEDzalo en Blender.");let{convertObj:m}=await Promise.resolve().then(()=>(TS(),AS)),x=await m(await _.text(),r),y=new FormData;y.append("file",new File([x.buffer],"modelo.glb",{type:"model/gltf-binary"}));let b=await J("/admin/upload",{method:"POST",body:y});e({modelUrl:b.url,usdzUrl:"",modelDemo:!1,width:x.width,depth:x.depth,height:x.height,viewer:{...d,materialName:"Tapizado",colors:[]}}),u("GLB convertido y subido. Revisa la vista previa, la orientaci\xF3n y las medidas; despu\xE9s guarda el producto.")}catch(m){u(m.message)}finally{f(!1),n(!1),v.target.value=""}}}}),K.default.createElement("p",{role:"status"},l)),K.default.createElement("div",{className:"model-preview-panel"},K.default.createElement("button",{type:"button",className:"outline",onClick:()=>s(!i)},i?"Cerrar vista previa 3D":"Revisar el modelo como lo ver\xE1 el cliente"),i&&K.default.createElement(K.default.Fragment,null,K.default.createElement("p",null,"Esta vista usa los cambios del formulario. Para publicarlos, pulsa \xABGuardar producto\xBB. El aviso de c\xE1mara siempre se conserva."),K.default.createElement(DE,{product:t}))))}var O=me(le());var Tg={terms:"T\xE9rminos y condiciones",privacy:"Privacidad",warranty:"Garant\xEDas",withdrawal:"Retracto y reversi\xF3n",rut:"RUT",chamber:"C\xE1mara de Comercio",other:"Documento interno / aprobaci\xF3n"},NE={draft:"Borrador",approved:"Aprobado",published:"Publicado",archived:"Archivado"},PE={uploaded:"Carga",approved:"Aprobaci\xF3n",published:"Publicaci\xF3n",archived:"Archivo"},Lg=t=>new Date(t).toLocaleString("es-CO",{timeZone:"America/Bogota",dateStyle:"medium",timeStyle:"medium"});function Eg(){let[t,e]=(0,O.useState)({documents:[],events:[]}),[a,n]=(0,O.useState)(""),[i,s]=(0,O.useState)(!1),[r,o]=(0,O.useState)("all"),[l,u]=(0,O.useState)(""),c=()=>J("/admin/documents").then(e);(0,O.useEffect)(()=>{c().catch(d=>n(d.message))},[]);async function f(d,h){s(!0),n("");try{await J("/admin/documents/"+d.id,{method:"PATCH",body:{status:h}}),await c(),u("Estado actualizado. La versi\xF3n anterior y su historial se conservan.")}catch(g){n(g.message)}finally{s(!1)}}return O.default.createElement(O.default.Fragment,null,O.default.createElement("div",{className:"admin-card"},O.default.createElement("h2",null,"Biblioteca documental"),O.default.createElement("p",null,"Cada PDF conserva su versi\xF3n, a\xF1o, fecha, hora y usuario. Una carga nueva no reemplaza el archivo anterior. RUT, C\xE1mara de Comercio y documentos internos permanecen privados incluso despu\xE9s de aprobarlos."),O.default.createElement("p",null,"El NIT del negocio se completa en Tienda. No es necesario inventar ceros: mientras no est\xE9 confirmado se muestra \xABPendiente por editar\xBB."),O.default.createElement("form",{className:"form-grid",onSubmit:async d=>{d.preventDefault();let h=d.currentTarget,g=new FormData(h);s(!0),n("");try{await J("/admin/documents",{method:"POST",body:g}),h.reset(),await c(),u("PDF guardado como borrador con una nueva versi\xF3n.")}catch(v){n(v.message)}finally{s(!1)}}},O.default.createElement("label",null,"T\xEDtulo del documento",O.default.createElement("input",{name:"title",required:!0,minLength:3,maxLength:160,placeholder:"Ej. RUT actualizado 2026"})),O.default.createElement("div",{className:"form-two"},O.default.createElement("label",null,"Tipo de documento",O.default.createElement("select",{name:"category"},Object.entries(Tg).map(([d,h])=>O.default.createElement("option",{key:d,value:d},h)))),O.default.createElement("label",null,"A\xF1o del documento",O.default.createElement("input",{name:"year",type:"number",min:1900,max:2100,defaultValue:new Date().getFullYear(),required:!0}))),O.default.createElement("label",null,"Archivo PDF \xB7 hasta 20 MB",O.default.createElement("input",{name:"file",type:"file",accept:".pdf,application/pdf",required:!0})),O.default.createElement("button",{disabled:i},"Guardar nueva versi\xF3n como borrador"))),a&&O.default.createElement("p",{className:"error",role:"alert"},a),l&&O.default.createElement("p",{role:"status"},l),O.default.createElement("label",null,"Filtrar documentos",O.default.createElement("select",{value:r,onChange:d=>o(d.target.value)},O.default.createElement("option",{value:"all"},"Todos"),Object.entries(Tg).map(([d,h])=>O.default.createElement("option",{key:d,value:d},h)))),O.default.createElement("div",{className:"document-cards"},t.documents.filter(d=>r==="all"||d.category===r).map(d=>O.default.createElement("article",{className:"admin-card",key:d.id},O.default.createElement("p",{className:"eyebrow"},Tg[d.category]," \xB7 ",NE[d.status]),O.default.createElement("h3",null,d.title),O.default.createElement("p",null,"A\xF1o ",d.document_year," \xB7 Versi\xF3n ",d.version," \xB7"," ",Math.ceil(d.byte_size/1024)," KB"),O.default.createElement("p",null,"Cargado: ",Lg(d.created_at),O.default.createElement("br",null),"Por: ",d.created_by,O.default.createElement("br",null),"\xDAltimo cambio: ",Lg(d.updated_at)),O.default.createElement("a",{href:"/api/admin/documents/"+d.id+"/file",target:"_blank",rel:"noreferrer"},"Descargar esta versi\xF3n"),O.default.createElement("div",{className:"actions"},d.status==="draft"&&O.default.createElement("button",{disabled:i,onClick:()=>f(d,"approved")},"Marcar como aprobado"),d.status==="approved"&&["terms","privacy","warranty","withdrawal"].includes(d.category)&&O.default.createElement("button",{disabled:i,onClick:()=>f(d,"published")},"Publicar en informaci\xF3n al cliente"),d.status!=="archived"&&O.default.createElement("button",{className:"outline",disabled:i,onClick:()=>f(d,"archived")},"Archivar conservando historial")),O.default.createElement("details",null,O.default.createElement("summary",null,"Huella de integridad del archivo"),O.default.createElement("code",{className:"document-hash"},"SHA-256: ",d.sha256))))),!t.documents.length&&O.default.createElement("p",null,"Todav\xEDa no hay PDFs cargados."),O.default.createElement("div",{className:"admin-card table-scroll"},O.default.createElement("h2",null,"Registro documental"),O.default.createElement("p",null,"Fechas y horas mostradas en la zona de Bogot\xE1. El historial conserva cargas y cambios de estado."),O.default.createElement("table",{className:"admin-table"},O.default.createElement("thead",null,O.default.createElement("tr",null,O.default.createElement("th",null,"Fecha y hora"),O.default.createElement("th",null,"Documento"),O.default.createElement("th",null,"Acci\xF3n"),O.default.createElement("th",null,"Usuario"))),O.default.createElement("tbody",null,t.events.map(d=>O.default.createElement("tr",{key:d.id},O.default.createElement("td",null,Lg(d.created_at)),O.default.createElement("td",null,d.title),O.default.createElement("td",null,PE[d.action]||d.action),O.default.createElement("td",null,d.actor)))))))}var W=me(le());function UE({id:t,onDone:e}){let[a,n]=(0,W.useState)(!1),[i,s]=(0,W.useState)("");return W.default.createElement("details",null,W.default.createElement("summary",null,"Registrar retiro solicitado por el titular"),W.default.createElement("form",{className:"form-grid",onSubmit:async r=>{r.preventDefault(),n(!0),s("");try{await J("/admin/marketing/"+t+"/withdraw",{method:"POST",body:{reason:new FormData(r.currentTarget).get("reason")}}),e()}catch(o){s(o.message)}finally{n(!1)}}},W.default.createElement("label",null,"Constancia de la solicitud",W.default.createElement("input",{name:"reason",minLength:10,maxLength:500,required:!0,placeholder:"Canal, fecha y referencia de la solicitud"})),W.default.createElement("p",{className:"caption"},"Se retirar\xE1n los permisos asociados al mismo contacto y quedar\xE1 registro de esta gesti\xF3n."),i&&W.default.createElement("p",{className:"error"},i),W.default.createElement("button",{disabled:a},a?"Registrando\u2026":"Registrar retiro de publicidad")))}function Ig(){let[t,e]=(0,W.useState)(null),[a,n]=(0,W.useState)(""),[i,s]=(0,W.useState)(1);return(0,W.useEffect)(()=>{let r=!0;return e(null),J("/admin/marketing?page="+i).then(o=>{r&&(e(o),n(""))}).catch(o=>{r&&n(o.message)}),()=>{r=!1}},[i]),W.default.createElement("section",null,W.default.createElement("h2",null,"Permisos de novedades y ofertas"),W.default.createElement("p",null,"Las asesor\xEDas y las compras no inscriben autom\xE1ticamente a publicidad. Estos registros conservan la autorizaci\xF3n y los canales elegidos."),W.default.createElement("p",{className:"notice"},"Env\xEDos deshabilitados. Falta conectar correo/WhatsApp, verificar la titularidad del canal y habilitar los controles de exclusi\xF3n, horarios y frecuencia antes de activar campa\xF1as."),a&&W.default.createElement("p",{className:"error"},a),t?W.default.createElement(W.default.Fragment,null,W.default.createElement("p",null,t.total," solicitudes \xB7 p\xE1gina ",i," de ",t.pages),t.contacts.map(r=>W.default.createElement("article",{className:"admin-card",key:r.id},W.default.createElement("h3",null,r.data.name||"Sin nombre"),W.default.createElement("p",null,r.data.email," ",r.data.phone),W.default.createElement("p",null,"Canales: ",r.data.channels.join(" \xB7 ")," \xB7"," ",W.default.createElement("strong",null,r.status==="withdrawn"?"Autorizaci\xF3n retirada":"Pendiente de verificar")),W.default.createElement("p",null,new Date(r.created_at).toLocaleString("es-CO",{timeZone:"America/Bogota"}),r.data.demo?" \xB7 Registro de demostraci\xF3n":""),W.default.createElement("details",null,W.default.createElement("summary",null,"Prueba de autorizaci\xF3n y pol\xEDtica"),W.default.createElement("p",null,r.data.consent.text),W.default.createElement("p",null,"Versi\xF3n: ",r.data.consent.version),W.default.createElement("p",null,"Huella: ",r.data.consent.fingerprint),W.default.createElement("p",null,r.data.consent.privacy)),r.status!=="withdrawn"&&W.default.createElement(UE,{id:r.id,onDone:()=>J("/admin/marketing?page="+i).then(e).catch(o=>n(o.message))}))),W.default.createElement("div",{className:"relationship-actions"},W.default.createElement("button",{disabled:i===1,onClick:()=>s(i-1)},"Anterior"),W.default.createElement("button",{disabled:i>=t.pages,onClick:()=>s(i+1)},"Siguiente")),W.default.createElement("details",null,W.default.createElement("summary",null,"\xDAltimos 100 movimientos"),t.events.map((r,o)=>W.default.createElement("p",{key:o},new Date(r.created_at).toLocaleString("es-CO",{timeZone:"America/Bogota"})," ","\xB7 ",r.contact_id," \xB7"," ",r.action==="withdrawn"?"Retiro de autorizaci\xF3n":"Solicitud de inscripci\xF3n")))):!a&&W.default.createElement("p",null,"Cargando\u2026"))}var Ce=me(le());function RE(t){return t?new Date(Date.parse(t)-5*36e5).toISOString().slice(0,16):""}function Dg({campaigns:t=[],onChange:e,Media:a}){let n=(i,s,r)=>e(t.map((o,l)=>l===i?{...o,[s]:r}:o));return Ce.default.createElement("details",{className:"editor-section"},Ce.default.createElement("summary",null,"Campa\xF1as del banner \xB7 simulaci\xF3n"),Ce.default.createElement("p",null,"Hasta seis campa\xF1as. Horarios de Bogot\xE1. Solo se muestran durante su vigencia y con la vista de desarrollo activa. Estos porcentajes no cambian los precios."),t.map((i,s)=>Ce.default.createElement("fieldset",{key:i.id,className:"campaign-editor"},Ce.default.createElement("legend",null,"Campa\xF1a ",s+1),Ce.default.createElement("div",{className:"actions"},[-1,1].map(r=>Ce.default.createElement("button",{key:r,type:"button",disabled:s+r<0||s+r>=t.length,onClick:()=>{let o=[...t];[o[s],o[s+r]]=[o[s+r],o[s]],e(o)}},r<0?"Subir":"Bajar"))),Ce.default.createElement("label",null,Ce.default.createElement("input",{type:"checkbox",checked:i.enabled,onChange:r=>n(s,"enabled",r.target.checked)})," ","Mostrar durante la vigencia"),[["title","T\xEDtulo",90],["text","Descripci\xF3n",240],["buttonText","Texto del bot\xF3n",40],["imageAlt","Descripci\xF3n accesible de la foto",180]].map(([r,o,l])=>Ce.default.createElement("label",{key:r},o,Ce.default.createElement("input",{required:!0,maxLength:l,value:i[r],onChange:u=>n(s,r,u.target.value)}))),Ce.default.createElement("label",null,"Porcentaje de ejemplo",Ce.default.createElement("input",{type:"number",required:!0,min:"1",max:"95",step:"1",value:i.discountPercent,onChange:r=>n(s,"discountPercent",Number(r.target.value))})),Ce.default.createElement("label",null,"Categor\xEDa que abre el bot\xF3n",Ce.default.createElement("select",{value:i.category,onChange:r=>n(s,"category",r.target.value)},Sa.map(r=>Ce.default.createElement("option",{key:r},r)))),[["startsAt","Inicio"],["endsAt","Cierre"]].map(([r,o])=>Ce.default.createElement("label",{key:r},o," \xB7 Bogot\xE1",Ce.default.createElement("input",{required:!0,type:"datetime-local",value:RE(i[r]),onChange:l=>n(s,r,l.target.value?`${l.target.value}:00-05:00`:"")}))),Ce.default.createElement(a,{label:"Fotograf\xEDa de la campa\xF1a",value:i.image,onChange:r=>n(s,"image",r),accept:"image/png,image/jpeg,image/webp"}),Ce.default.createElement(a,{label:"Imagen para celular (opcional)",value:i.mobileImage||"",onChange:r=>n(s,"mobileImage",r),accept:"image/png,image/jpeg,image/webp"}),i.mobileImage&&Ce.default.createElement("button",{type:"button",className:"outline",onClick:()=>n(s,"mobileImage","")},"Usar la misma imagen en todos los tama\xF1os"),Ce.default.createElement("label",null,"Condiciones",Ce.default.createElement("textarea",{required:!0,maxLength:2e3,value:i.terms,onChange:r=>n(s,"terms",r.target.value)})),Ce.default.createElement(a,{label:"Video de campa\xF1a MP4 \xB7 m\xE1ximo 3 minutos (opcional)",value:i.video||"",accept:".mp4",onChange:r=>n(s,"video",r)}),Ce.default.createElement("p",null,"El video reemplaza la fotograf\xEDa al reproducirlo. Conserva una imagen de portada; la informaci\xF3n esencial debe estar tambi\xE9n en los textos."),Ce.default.createElement("button",{type:"button",className:"outline",onClick:()=>e(t.filter((r,o)=>s!==o))},"Quitar campa\xF1a"))),Ce.default.createElement("button",{type:"button",disabled:t.length>=6,onClick:()=>e([...t,{id:crypto.randomUUID(),enabled:!1,simulation:!0,title:"Nueva campa\xF1a",text:"Describe la colecci\xF3n y sus condiciones.",discountPercent:10,startsAt:new Date().toISOString(),endsAt:new Date(Date.now()+7*864e5).toISOString(),image:"./asset-sala-industrial.webp",imageAlt:"Sala modular en ambiente industrial",category:Sa[0],buttonText:"Explorar colecci\xF3n",terms:"Simulaci\xF3n. Promoci\xF3n pendiente de aprobaci\xF3n; no modifica los precios."}])},"A\xF1adir campa\xF1a"))}var ct=me(le());function Ng({value:t=[],onChange:e,Media:a}){function n(s,r,o){e(t.map((l,u)=>u===s?{...l,[r]:o}:l))}function i(s,r){let o=[...t];[o[s],o[s+r]]=[o[s+r],o[s]],e(o)}return ct.default.createElement("details",{className:"editor-section"},ct.default.createElement("summary",null,"Banners de financiaci\xF3n \xB7 im\xE1genes y contenido"),ct.default.createElement("p",null,"Sube tus piezas en JPG, PNG o WebP. La imagen para celular es opcional. Los botones conservan la consulta de las entidades; esto no activa cobros."),t.map((s,r)=>ct.default.createElement("fieldset",{key:s.id,className:"campaign-editor"},ct.default.createElement("legend",null,{credit:"Financiaci\xF3n",bank:"Tarjetas y PSE",wallet:"Billeteras"}[s.id]),ct.default.createElement("label",null,ct.default.createElement("input",{type:"checkbox",checked:s.visible!==!1,onChange:o=>n(r,"visible",o.target.checked)})," ","Mostrar este banner"),[["title","T\xEDtulo",90],["text","Descripci\xF3n",220],["button","Texto del bot\xF3n",50],["imageAlt","Descripci\xF3n de la imagen",180]].map(([o,l,u])=>ct.default.createElement("label",{key:o},l,ct.default.createElement("input",{value:s[o]||"",required:o!=="imageAlt"||!!(s.image||s.mobileImage),maxLength:u,onChange:c=>n(r,o,c.target.value)}))),ct.default.createElement(a,{value:s.image||"",label:"Imagen para computador y tablet",accept:"image/png,image/jpeg,image/webp",onChange:o=>n(r,"image",o)}),ct.default.createElement(a,{value:s.mobileImage||"",label:"Imagen para celular (opcional)",accept:"image/png,image/jpeg,image/webp",onChange:o=>n(r,"mobileImage",o)}),(s.image||s.mobileImage)&&ct.default.createElement("button",{className:"outline",type:"button",onClick:()=>e(t.map((o,l)=>l===r?{...o,image:"",mobileImage:"",imageAlt:"",video:""}:o))},"Usar dise\xF1o sin fotograf\xEDa"),ct.default.createElement("div",{className:"actions"},ct.default.createElement(a,{label:"Video de financiaci\xF3n MP4 \xB7 m\xE1ximo 3 minutos (opcional)",value:s.video||"",accept:".mp4",onChange:o=>n(r,"video",o)}),ct.default.createElement("button",{type:"button",disabled:r===0,onClick:()=>i(r,-1)},"Subir"),ct.default.createElement("button",{type:"button",disabled:r===t.length-1,onClick:()=>i(r,1)},"Bajar")))))}var bt=me(le());var El={checked:"12 de septiembre de 2026",providers:[{name:"Addi",url:"https://co.addi.com/",source:"https://co.addi.com/",status:200,socials:["https://www.instagram.com/addi/","https://www.facebook.com/addicol"],checkedAt:"2026-09-12T06:32:26.487Z",note:"Redes enlazadas desde el sitio oficial. Convenio y conexi\xF3n de comercio pendientes de validar."},{name:"Sistecr\xE9dito",url:"https://www.sistecredito.com/",source:"https://www.sistecredito.com/",status:403,socials:[],checkedAt:"2026-09-12T06:32:26.214Z",note:"Redes sociales pendientes de verificaci\xF3n."},{name:"Bold",url:"https://bold.co/",source:"https://bold.co/",status:200,socials:["https://www.instagram.com/somosbold.co","https://www.facebook.com/somosbold.co","https://www.youtube.com/channel/UC53BgFWNZGvNs6Pt0YzYT9A","https://www.linkedin.com/company/boldteam"],checkedAt:"2026-09-12T06:32:26.771Z",note:"Redes enlazadas desde el sitio oficial. Convenio y conexi\xF3n de comercio pendientes de validar."},{name:"PSE / ACH Colombia",url:"https://www.pse.com.co/persona",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.facebook.com/ACHColombiaOficial","https://x.com/ACHColombia_","https://www.linkedin.com/company/transacciones-ach/","https://www.youtube.com/channel/UCmc_nqNv0MjYxizCScRTSVQ","https://www.instagram.com/achcolombiaoficial"],checkedAt:"2026-09-12T06:32:26.819Z",note:"Redes enlazadas desde el sitio oficial. Convenio y conexi\xF3n de comercio pendientes de validar."},{name:"DaviPlata",url:"https://www.daviplata.com/",source:"https://www.daviplata.com/",status:200,socials:[],checkedAt:"2026-09-12T06:32:26.585Z",note:"El sitio mostr\xF3 una comprobaci\xF3n de seguridad. No se verificaron redes sociales ni se super\xF3 la comprobaci\xF3n."},{name:"Nequi",url:"https://www.nequi.com.co/",source:"https://www.nequi.com.co/",status:200,socials:["https://www.facebook.com/appnequi/","https://twitter.com/Nequi","https://www.instagram.com/nequi_/","https://www.linkedin.com/company/nequi/mycompany/","https://www.youtube.com/channel/UCK1dLH3nTK-GOlgSVa95XNg/feed"],checkedAt:"2026-09-12T06:32:26.323Z",note:"Redes enlazadas desde el sitio oficial. Convenio y conexi\xF3n de comercio pendientes de validar."},{name:"Vanti Listo",url:"https://www.grupovanti.com/vantilisto/inicio",source:"https://www.grupovanti.com/vantilisto/inicio",status:200,socials:["https://www.facebook.com/grupovanti","https://www.instagram.com/grupovanti/","https://www.linkedin.com/company/grupo-vanti/","https://www.youtube.com/@GrupoVanti","https://twitter.com/grupovanti"],checkedAt:"2026-09-12T06:32:26.501Z",note:"Redes enlazadas desde el sitio oficial. Convenio y conexi\xF3n de comercio pendientes de validar."},{name:"Wompi",url:"https://wompi.com/es/co/",source:"https://wompi.com/es/co/",status:200,socials:["https://www.facebook.com/wompioficial/","https://www.instagram.com/wompi.co/","https://youtube.com/@wompi","https://www.linkedin.com/company/wompi/"],checkedAt:"2026-09-12T06:32:26.456Z",note:"Alternativa investigada. No confirma un convenio con Dekoramma."}],banks:[{name:"Banco Agrario",url:"https://www.bancoagrario.gov.co",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.facebook.com/bancoagrario","https://www.linkedin.com/company/banco-agrario-colombia/mycompany","https://www.youtube.com/bancoagrariodecol"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:56.296Z"},{name:"AV Villas",url:"https://www.avvillas.com.co",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.facebook.com/AVVillas/","https://www.tiktok.com/@avvillasoficial","https://co.linkedin.com/company/banco-av-villas","https://www.youtube.com/channel/UCi6EhDHYDuGbg36Qos3R1xg"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:56.133Z"},{name:"BBVA",url:"https://www.bbva.com.co/",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.youtube.com/BBVAenColombia","https://twitter.com/bbva_colombia","https://www.linkedin.com/company/bbva-colombia/"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:55.913Z"},{name:"Banco Caja Social",url:"https://www.bancocajasocial.com",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:55.828Z"},{name:"Davivienda",url:"https://www.davivienda.com",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:56.200Z"},{name:"Banco de Bogot\xE1",url:"https://www.bancodebogota.com",source:"https://www.pse.com.co/persona",status:403,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:56.147Z"},{name:"Banco de Occidente",url:"https://www.bancodeoccidente.com.co",source:"https://www.pse.com.co/persona",status:403,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:55.996Z"},{name:"Banco Falabella",url:"https://www.bancofalabella.com.co/",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.linkedin.com/company/banco-falabella/","https://www.instagram.com/bancofalabella_co?igsh=dm9rcm5ucjZhMnBo&utm_source=qr","https://www.tiktok.com/@bancofalabellaco","https://youtube.com/@bancofalabellacolombiaoficial?si=pznlO3hX1CNFfPyk","https://x.com/BcoFalabellaCo"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:56.309Z"},{name:"Banco Pichincha",url:"https://www.bancopichincha.com.co/",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.facebook.com/bancopichinchacol"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:55.956Z"},{name:"Banco Popular",url:"https://www.bancopopular.com.co",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.facebook.com/BancoPopular","https://twitter.com/Bco_Popular","https://instagram.com/bcopopular?utm_source=ig_profile_share&igshid=9id7yuohdb89","https://www.youtube.com/c/BancoPopularCol","https://co.linkedin.com/company/banco-popular"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:56.221Z"},{name:"Serfinanza",url:"https://bancoserfinanza.com/",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:56.460Z"},{name:"Bancolombia",url:"https://www.grupobancolombia.com",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:57.860Z"},{name:"Bancoomeva",url:"https://www.bancoomeva.com.co/",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:56.860Z"},{name:"Ita\xFA",url:"https://www.itau.co",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.instagram.com/itaucol/","https://www.youtube.com/@ItauColombiaOficial/","https://www.facebook.com/ItauColombia"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:56.415Z"},{name:"Banco Uni\xF3n",url:"https://www.bancounion.com/wps/portal/bancounion",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:57.072Z"},{name:"Lulo Bank",url:"https://www.lulobank.com/",source:"https://www.pse.com.co/persona",status:200,socials:[],note:"Sitio enlazado desde PSE. Redes individuales pendientes de verificaci\xF3n.",checkedAt:"2026-09-12T06:38:56.194Z"},{name:"Finandina",url:"https://www.bancofinandina.com/",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.instagram.com/bancofinandina/?hl=es-la","https://co.linkedin.com/company/banco-finandina","https://www.youtube.com/channel/UC-C5sG9_fnA6eJSvFsbc1IA"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:55.993Z"},{name:"Nu",url:"https://nu.com.co/",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.instagram.com/nu.co/","https://www.facebook.com/NuColombia","https://www.linkedin.com/showcase/nucolombia/"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:56.020Z"},{name:"Banco Contactar",url:"https://bancocontactar.com/",source:"https://www.pse.com.co/persona",status:200,socials:["https://www.facebook.com/bancocontactar","https://www.instagram.com/bancocontactaroficial","https://www.linkedin.com/company/bancocontactar/","https://www.youtube.com/@BancoContactar"],note:"Redes enlazadas desde el sitio del banco; no se accedi\xF3 a ninguna cuenta.",checkedAt:"2026-09-12T06:38:57.228Z"}]};function LS({items:t}){return t.map(e=>bt.default.createElement("article",{key:e.name},bt.default.createElement("strong",null,e.name),bt.default.createElement("p",null,e.note),bt.default.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"Sitio oficial \u2197"),e.socials.map(a=>bt.default.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer"},new URL(a).hostname.replace(/^www\./,"")," \xB7"," ",decodeURIComponent(new URL(a).pathname).replace(/\/$/,"")," \u2197"))))}function Pg(){return bt.default.createElement("details",{className:"editor-section official-payment-directory"},bt.default.createElement("summary",null,"Directorio de entidades \xB7 sitios y redes oficiales"),bt.default.createElement("p",null,"Consulta realizada el ",El.checked,". Directorio de referencia para el equipo: estos enlaces no son enlaces de cobro y no activan convenios."),bt.default.createElement("h3",null,"Cr\xE9dito, pasarelas y billeteras"),bt.default.createElement(LS,{items:El.providers}),bt.default.createElement("details",null,bt.default.createElement("summary",null,"Ver ",El.banks.length," bancos enlazados desde PSE"),bt.default.createElement("p",null,"La lista se obtuvo del"," ",bt.default.createElement("a",{href:"https://www.pse.com.co/persona",target:"_blank",rel:"noopener noreferrer"},"sitio de PSE"),". Pagar desde un banco no implica financiaci\xF3n de la compra. Las redes se incluyen cuando estaban enlazadas desde su sitio; las dem\xE1s quedan pendientes de comprobar."),bt.default.createElement(LS,{items:El.banks})))}var Ve=me(le());function Ug({value:t=Mc,onChange:e,Media:a}){let n=(i,s)=>e({...t,[i]:s});return Ve.default.createElement("details",{className:"editor-section"},Ve.default.createElement("summary",null,"Banner al entrar \xB7 imagen o video"),Ve.default.createElement("a",{href:"/?vista=bienvenida",target:"_blank",rel:"noreferrer"},"Ver bienvenida guardada en otra pesta\xF1a \u2197"),Ve.default.createElement("p",null,"Aparece en la portada una vez por pesta\xF1a. Se puede cerrar inmediatamente. No interrumpe enlaces directos al cat\xE1logo. El video inicia al pulsar reproducir."),Ve.default.createElement("label",null,Ve.default.createElement("input",{type:"checkbox",checked:t.enabled,onChange:i=>n("enabled",i.target.checked)})," ","Activar bienvenida"),[["title","T\xEDtulo",90],["text","Descripci\xF3n",400],["imageAlt","Descripci\xF3n accesible del contenido",180],["buttonText","Texto del bot\xF3n",50]].map(([i,s,r])=>Ve.default.createElement("label",{key:i},s,Ve.default.createElement("input",{required:!0,maxLength:r,value:t[i],onChange:o=>n(i,o.target.value)}))),Ve.default.createElement("label",null,"Destino del bot\xF3n",Ve.default.createElement("select",{value:t.target,onChange:i=>n("target",i.target.value)},[["catalogo","Cat\xE1logo"],["financiacion","Financiaci\xF3n"],["configurador","Dise\xF1a tu mueble"],["contacto","Vis\xEDtanos"]].map(([i,s])=>Ve.default.createElement("option",{key:i,value:i},s)))),Ve.default.createElement(a,{label:"Imagen o portada del video",value:t.image,accept:".png,.jpg,.jpeg,.webp",onChange:i=>n("image",i)}),Ve.default.createElement(a,{label:"Imagen para celular (opcional)",value:t.mobileImage,accept:".png,.jpg,.jpeg,.webp",onChange:i=>n("mobileImage",i)}),Ve.default.createElement(a,{label:"Video de bienvenida MP4 \xB7 m\xE1ximo 3 minutos (opcional)",value:t.video,accept:".mp4",onChange:i=>n("video",i)}),Ve.default.createElement("p",null,"Si hay video se usa en todos los tama\xF1os; la imagen queda como portada. Incluye en el texto la informaci\xF3n importante del video y subt\xEDtulos incorporados si contiene voz."),[["startsAt","Inicio opcional"],["endsAt","Cierre opcional"]].map(([i,s])=>Ve.default.createElement("label",{key:i},s," \xB7 Bogot\xE1",Ve.default.createElement("input",{type:"datetime-local",value:t[i]?new Date(Date.parse(t[i])-5*36e5).toISOString().slice(0,16):"",onChange:r=>n(i,r.target.value?`${r.target.value}:00-05:00`:"")}))),Ve.default.createElement("label",null,"Versi\xF3n de campa\xF1a",Ve.default.createElement("input",{type:"number",min:"1",max:"999999",step:"1",value:t.revision,onChange:i=>n("revision",Number(i.target.value))})),Ve.default.createElement("p",null,"Sube la versi\xF3n solo para una campa\xF1a nueva: permitir\xE1 mostrarla de nuevo a quien ya vio la anterior."))}var ES={financeBanners:"Banners de financiaci\xF3n: t\xEDtulos y botones",button:"Texto del bot\xF3n",marketingEnabled:"Mostrar captura de novedades y ofertas",legalName:"Raz\xF3n social o nombre del comerciante (pendiente si est\xE1 vac\xEDo)",taxId:"NIT (pendiente si est\xE1 vac\xEDo)",registration:"Matr\xEDcula mercantil",legalDraft:"Textos legales en borrador",legalVersion:"Versi\xF3n de los textos legales",withdrawal:"Retracto y reversi\xF3n",documentation:"Solicitud de documentos comerciales",hero:"Portada",eyebrow:"Texto superior",title:"T\xEDtulo",text:"Texto",primary:"Bot\xF3n principal",secondary:"Bot\xF3n secundario",benefits:"Franja en movimiento",reels:"Reels y videos",gallery:"Galer\xEDa de ambientes",faq:"Preguntas frecuentes",sections:"Secciones: orden y visibilidad",workshop:"Taller",delivery:"Env\xEDos",navigation:"Navegaci\xF3n",drawer:"Men\xFA de cat\xE1logo lateral",image:"Imagen",video:"Video MP4 \xB7 m\xE1ximo 3 minutos",description:"Descripci\xF3n",subtitle:"Subt\xEDtulo",visible:"Visible para el cliente",steps:"Pasos del taller",cities:"Zonas de entrega",icon:"Icono",target:"Secci\xF3n de destino",storeName:"Nombre de tienda",phone:"WhatsApp (pa\xEDs + n\xFAmero, sin +)",email:"Correo de la tienda",mapsPlaceId:"Google Maps Place ID (solo si la ubicaci\xF3n fue confirmada)",address:"Direcci\xF3n",hours:"Horarios",announcement:"Franja superior",heroTitle:"T\xEDtulo de respaldo",heroImage:"Foto principal",facebook:"Facebook",instagram:"Instagram",paymentMethods:"Formas de pago",paymentNote:"Condiciones de financiaci\xF3n",privacy:"Pol\xEDtica de privacidad",terms:"T\xE9rminos y condiciones",warranty:"Garant\xEDa",demo:"Mostrar aviso de vista de desarrollo"};function ds({value:t,onChange:e,label:a,accept:n,onBusy:i=()=>{}}){let[s,r]=(0,S.useState)(!1),[o,l]=(0,S.useState)("");return S.default.createElement("div",{className:"media-field"},S.default.createElement("strong",null,a),t&&/\.(png|jpg|jpeg|webp)$/.test(t)&&S.default.createElement("img",{src:we(t),alt:"Vista previa"}),t&&/\.mp4$/.test(t)&&S.default.createElement("video",{controls:!0,playsInline:!0,preload:"none",src:we(t),"aria-label":`Vista previa: ${a}`}),t&&S.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},"Abrir archivo actual"),S.default.createElement("input",{"aria-label":a,type:"file",accept:n||".png,.jpg,.jpeg,.webp",disabled:s,onChange:async u=>{let c=u.target.files?.[0];if(c){if(l(""),c.size>100*1024*1024){l("M\xE1ximo 100 MB");return}r(!0),i(!0);try{let f=new FormData;f.append("file",c);let d=await J("/admin/upload",{method:"POST",body:f});e(d.url)}catch(f){l(f.message)}finally{r(!1),i(!1),u.target.value=""}}}}),t&&S.default.createElement("button",{type:"button",className:"outline",onClick:()=>e("")},"Quitar archivo"),s&&S.default.createElement("span",{className:"uploading"},"Subiendo y validando\u2026"),o&&S.default.createElement("span",{className:"error"},o))}function vd({value:t,onChange:e,path:a=""}){return S.default.createElement("div",{className:"nested-fields"},Object.entries(t).map(([n,i])=>{if(n==="id")return null;let s=ES[n]||n,r=o=>e({...t,[n]:o});return["image","heroImage","video"].includes(n)?S.default.createElement(ds,{key:n,value:i,onChange:r,label:s,accept:n==="video"?".mp4":void 0}):typeof i=="boolean"?S.default.createElement("label",{key:n,className:"check"},S.default.createElement("input",{type:"checkbox",checked:i,onChange:o=>r(o.target.checked)}),s):Array.isArray(i)?S.default.createElement("div",{key:n},S.default.createElement("h3",null,s),i.map((o,l)=>S.default.createElement("div",{key:o?.id||l,className:"array-item"},typeof o=="string"?S.default.createElement("input",{value:o,onChange:u=>r(i.map((c,f)=>f===l?u.target.value:c))}):S.default.createElement(vd,{value:o,path:a+"."+n,onChange:u=>r(i.map((c,f)=>f===l?u:c))}),S.default.createElement("div",{className:"array-actions"},S.default.createElement("button",{type:"button",className:"outline",disabled:l===0,onClick:()=>{let u=[...i];[u[l-1],u[l]]=[u[l],u[l-1]],r(u)}},"Subir \u2191"),S.default.createElement("button",{type:"button",className:"outline",disabled:l===i.length-1,onClick:()=>{let u=[...i];[u[l+1],u[l]]=[u[l],u[l+1]],r(u)}},"Bajar \u2193"),n!=="sections"&&S.default.createElement("button",{type:"button",className:"outline",onClick:()=>r(i.filter((u,c)=>l!==c))},"Eliminar")))),n!=="sections"&&S.default.createElement("button",{type:"button",className:"outline",onClick:()=>{let o={reels:{id:crypto.randomUUID(),title:"Nuevo video",image:"",video:"",description:"Describe este video"},gallery:{id:crypto.randomUUID(),title:"Nuevo ambiente",image:""},faq:{id:crypto.randomUUID(),title:"Nueva pregunta",text:"Respuesta"},benefits:{id:crypto.randomUUID(),title:"Beneficio",text:"Descripci\xF3n",icon:"cube",target:"espacio"},steps:{title:"Nuevo paso",text:"Descripci\xF3n"}};r([...i,o[n]||(typeof i[0]=="object"?{...i[0],id:crypto.randomUUID()}:"Nuevo elemento")])}},"A\xF1adir ",s.toLowerCase())):i&&typeof i=="object"?S.default.createElement("details",{key:n,className:"editor-section"},S.default.createElement("summary",null,s),S.default.createElement(vd,{value:i,path:a+"."+n,onChange:r})):["icon","target"].includes(n)?S.default.createElement("label",{key:n},s,S.default.createElement("select",{value:i,onChange:o=>r(o.target.value)},(n==="icon"?["factory","ruler","truck","card","cube"]:["taller","configurador","envios","financiacion","espacio"]).map(o=>S.default.createElement("option",{key:o},o)))):S.default.createElement("label",{key:n},s,typeof i=="string"&&(i.length>120||["title","text","description","subtitle","privacy","terms","warranty","paymentNote"].includes(n))?S.default.createElement("textarea",{"aria-label":s,value:i,onChange:o=>r(o.target.value)}):S.default.createElement("input",{"aria-label":s,value:i??"",onChange:o=>r(o.target.value)}))}))}function Rg({preview:t=!1}){let[e,a]=(0,S.useState)(!1),[n,i]=(0,S.useState)(null),[s,r]=(0,S.useState)(!0),[o,l]=(0,S.useState)(null),[u,c]=(0,S.useState)(null),[f,d]=(0,S.useState)("Resumen"),[h,g]=(0,S.useState)(""),[v,_]=(0,S.useState)(""),[m,x]=(0,S.useState)(!1),[y,b]=(0,S.useState)(null),[C,T]=(0,S.useState)(!1),[L,A]=(0,S.useState)(""),[P,N]=(0,S.useState)("Todo"),[D,H]=(0,S.useState)(1);(0,S.useEffect)(()=>{H(1)},[L,P]);async function F(){let[M,V]=await Promise.all([J("/admin/data"),J("/admin/content")]);l(M),c(V)}(0,S.useEffect)(()=>{if(t){i({preview:!0}),F().catch(M=>g(M.message)).finally(()=>r(!1));return}J("/auth/options").then(M=>a(M.google===!0)).catch(()=>{}),new URLSearchParams(window.location.search).get("acceso")==="no-autorizado"&&g("No se pudo autorizar esa cuenta. Usa un acceso aprobado o contacta al responsable de la tienda."),J("/admin/me").then(async M=>{i(M),bc(M.csrf),await F()}).catch(()=>{}).finally(()=>r(!1))},[]);async function oe(M,V){x(!0),g(""),_("");try{await M(),_(t?"Cambio probado en esta demostraci\xF3n. No se ha publicado nada; al recargar se restablece.":V)}catch(ne){g(ne.message)}finally{x(!1)}}return s?S.default.createElement("div",{className:"loading"},"Abriendo administraci\xF3n\u2026"):n?S.default.createElement("div",{className:"admin-shell"},S.default.createElement("aside",{className:"admin-side"},S.default.createElement("a",{className:"logo",href:"./dekoramma.html"},S.default.createElement("img",{style:{height:80,objectFit:"contain",width:"100%"},src:"./asset-logo.png",alt:"Dekoramma"})),["Resumen","Productos","Contenido","Tienda","Solicitudes","Asesor\xEDas","Documentos","Permisos de contacto"].map(M=>S.default.createElement("button",{className:f===M?"active":"",key:M,onClick:()=>{d(M),b(null),_(""),g("")}},M)),S.default.createElement("a",{href:"./dekoramma.html",target:"_blank",rel:"noreferrer"},"Ver tienda \u2197"),t?S.default.createElement("a",{href:"./dekoramma.html"},"Volver a la tienda \u2192"):S.default.createElement("button",{onClick:()=>oe(async()=>{await J("/admin/logout",{method:"POST"}),i(null),bc("")},"")},"Cerrar sesi\xF3n")),S.default.createElement("main",{className:"admin-main"},t&&S.default.createElement("div",{className:"admin-preview-notice",role:"note"},S.default.createElement("div",null,S.default.createElement("strong",null,"As\xED se administra tu tienda"),S.default.createElement("p",null,"Recorre las secciones y prueba los campos. Esta demostraci\xF3n usa el cat\xE1logo p\xFAblico; no muestra clientes, documentos privados ni cuentas. Los cambios de esta demostraci\xF3n se pierden al recargar. Subir archivos y publicar requiere el servidor; no est\xE1 habilitado en GitHub Pages.")),S.default.createElement("a",{href:"./dekoramma.html"},"Volver a la tienda \u2192")),S.default.createElement("div",{className:"admin-top"},S.default.createElement("div",null,S.default.createElement("span",{className:"eyebrow",style:{color:"#ad4527"}},"DEKORAMMA \xB7 ADMINISTRACI\xD3N"),S.default.createElement("h1",null,f)),S.default.createElement("button",{className:"outline",onClick:()=>oe(F,"Datos actualizados")},"Actualizar")),h&&S.default.createElement("p",{className:"error",role:"alert"},h),v&&S.default.createElement("p",{className:"admin-status",role:"status"},v),o?S.default.createElement(S.default.Fragment,null,f==="Resumen"&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"admin-grid"},[["Productos activos",o.products.filter(M=>M.active).length],["Solicitudes de compra",o.orders.length],["Asesor\xEDas",o.leads.length]].map(([M,V])=>S.default.createElement("div",{className:"admin-card stat",key:M},M,S.default.createElement("strong",null,V)))),S.default.createElement("div",{className:"admin-card"},S.default.createElement("h2",null,"Tu tienda, secci\xF3n por secci\xF3n"),S.default.createElement("p",null,"En Contenido puedes editar portada, franja m\xF3vil, reels, galer\xEDa, preguntas, taller, orden y visibilidad. En Productos puedes cargar fotograf\xEDas, GLB, USDZ y videos."),S.default.createElement("p",null,"Videos: MP4, m\xE1ximo 3 minutos y 100 MB. Los modelos de ejemplo deben reemplazarse por los modelos reales. Las solicitudes no acreditan un pago."),S.default.createElement("button",{onClick:()=>d("Contenido")},"Editar contenido")),S.default.createElement("div",{className:"admin-tour-grid"},[["01","Portada, banners y videos","Contenido","Cambia textos e im\xE1genes, programa campa\xF1as y decide el orden de las secciones."],["02","Productos, colores y 3D","Productos","Edita precios y medidas. Organiza fotos por color, videos y modelos del mueble."],["03","Informaci\xF3n de la tienda","Tienda","Actualiza WhatsApp, ubicaci\xF3n, horarios, datos comerciales y condiciones."],["04","PDFs y aprobaciones","Documentos","Consulta el formulario de carga, las versiones y los estados de aprobaci\xF3n."]].map(([M,V,ne,Cn])=>S.default.createElement("button",{className:"admin-tour-card",key:M,onClick:()=>d(ne)},S.default.createElement("span",null,M),S.default.createElement("h2",null,V),S.default.createElement("p",null,Cn),S.default.createElement("strong",null,"Abrir secci\xF3n \u2192")))),t&&S.default.createElement("p",{className:"admin-hint"},"Solicitudes, asesor\xEDas y documentos aparecen vac\xEDos para proteger la informaci\xF3n real.")),f==="Productos"&&(y?S.default.createElement("form",{className:"admin-card form-grid",onSubmit:M=>{M.preventDefault(),oe(async()=>{await J("/admin/products/"+y.id,{method:"PUT",body:y}),await F(),b(null)},"Producto guardado")}},S.default.createElement("h2",null,y.name||"Nuevo producto"),S.default.createElement(Zp,{product:y,onChange:M=>b(V=>({...V,...M})),onBusy:T}),S.default.createElement(Ag,{product:y,onChange:M=>b(V=>({...V,...M})),Media:ds,onBusy:T}),S.default.createElement("div",{className:"admin-edit-grid"},[["id","Identificador"],["name","Nombre"],["description","Descripci\xF3n"]].map(([M,V])=>S.default.createElement("label",{key:M},V,S.default.createElement("input",{required:!0,value:y[M],onChange:ne=>b({...y,[M]:ne.target.value})}))),S.default.createElement("label",null,"Categor\xEDa",S.default.createElement("select",{value:y.category,onChange:M=>b({...y,category:M.target.value})},Sa.map(M=>S.default.createElement("option",{key:M},M)))),[["price","Precio COP"],["width","Ancho cm"],["depth","Fondo cm"],["height","Alto cm"]].map(([M,V])=>S.default.createElement("label",{key:M},V,S.default.createElement("input",{required:!0,type:"number",min:M==="price"?1e3:10,value:y[M],onChange:ne=>b({...y,[M]:+ne.target.value})}))),S.default.createElement("label",null,"Colores (separados por coma)",S.default.createElement("input",{value:y.colors.join(", "),onChange:M=>b({...y,colors:M.target.value.split(",").map(V=>V.trim())})})),S.default.createElement("label",{className:"check"},S.default.createElement("input",{type:"checkbox",checked:y.active,onChange:M=>b({...y,active:M.target.checked})}),"Producto visible"),S.default.createElement("label",{className:"check"},S.default.createElement("input",{type:"checkbox",checked:y.modelDemo,onChange:M=>b({...y,modelDemo:M.target.checked})}),"El modelo 3D es una demostraci\xF3n"),S.default.createElement(ds,{value:y.modelUrl,label:"Modelo 3D \xB7 GLB",accept:".glb",onChange:M=>b({...y,modelUrl:M,modelDemo:!1})}),S.default.createElement(ds,{value:y.usdzUrl,label:"Modelo iPhone \xB7 USDZ (opcional)",accept:".usdz",onChange:M=>b({...y,usdzUrl:M})}),S.default.createElement("label",{className:"check"},S.default.createElement("input",{type:"checkbox",checked:y.madeToMeasure||!1,onChange:M=>b({...y,madeToMeasure:M.target.checked})}),"Fabricaci\xF3n a medida disponible"),[["materials","Materiales y acabados"],["care","Cuidados"],["leadTime","Disponibilidad y plazo estimado"]].map(([M,V])=>S.default.createElement("label",{key:M},V,S.default.createElement("textarea",{value:y[M]||"",onChange:ne=>b({...y,[M]:ne.target.value})})))),S.default.createElement("div",{className:"actions"},S.default.createElement("button",{disabled:m||C},"Guardar producto"),S.default.createElement("button",{type:"button",className:"outline",onClick:()=>b(null)},"Cancelar"))):S.default.createElement(S.default.Fragment,null,S.default.createElement("button",{onClick:()=>b({id:"producto-"+Date.now(),name:"",category:Sa[0],price:1e6,description:"",image:"",width:270,depth:170,height:90,colors:["Arena"],active:!1,modelUrl:"",usdzUrl:"",modelDemo:!1,videoUrl:""})},"A\xF1adir producto"),S.default.createElement("div",{className:"filter"},S.default.createElement("label",null,"Buscar referencia",S.default.createElement("input",{value:L,onChange:M=>A(M.target.value),placeholder:"Nombre o identificador"})),S.default.createElement("label",null,"Categor\xEDa",S.default.createElement("select",{value:P,onChange:M=>N(M.target.value)},["Todo",...Sa].map(M=>S.default.createElement("option",{key:M},M))))),S.default.createElement("div",{className:"admin-card table-scroll"},S.default.createElement("table",{className:"admin-table"},S.default.createElement("thead",null,S.default.createElement("tr",null,S.default.createElement("th",null,"Foto"),S.default.createElement("th",null,"Producto"),S.default.createElement("th",null,"Precio"),S.default.createElement("th",null,"Estado"),S.default.createElement("th",null,"Acciones"))),S.default.createElement("tbody",null,o.products.filter(M=>(P==="Todo"||M.category===P)&&(M.name+" "+M.id).toLowerCase().includes(L.toLowerCase())).slice((D-1)*24,D*24).map(M=>S.default.createElement("tr",{key:M.id},S.default.createElement("td",null,S.default.createElement("img",{src:we(M.image),alt:"",loading:"lazy"})),S.default.createElement("td",null,M.name,S.default.createElement("small",{style:{display:"block"}},M.modelUrl?"Tiene modelo 3D":"Sin modelo 3D")),S.default.createElement("td",null,mt(M.price)),S.default.createElement("td",null,M.active?"Visible":"Oculto"),S.default.createElement("td",null,S.default.createElement("button",{className:"outline",onClick:()=>b(structuredClone(M))},"Editar"))))))),S.default.createElement("nav",{className:"pagination","aria-label":"P\xE1ginas de administraci\xF3n"},S.default.createElement("button",{className:"outline",disabled:D===1,onClick:()=>H(D-1)},"Anterior"),S.default.createElement("span",null,"P\xE1gina ",D," \xB7"," ",o.products.filter(M=>(P==="Todo"||M.category===P)&&(M.name+" "+M.id).toLowerCase().includes(L.toLowerCase())).length," ","referencias"),S.default.createElement("button",{className:"outline",disabled:D*24>=o.products.filter(M=>(P==="Todo"||M.category===P)&&(M.name+" "+M.id).toLowerCase().includes(L.toLowerCase())).length,onClick:()=>H(D+1)},"Siguiente")))),f==="Contenido"&&u&&S.default.createElement("form",{className:"admin-card form-grid",onSubmit:M=>{M.preventDefault(),oe(()=>J("/admin/content",{method:"PUT",body:u}),"Contenido publicado en la tienda. Actualiza la vista de cliente para verlo.")}},S.default.createElement("p",null,"Los cambios se aplican al pulsar Guardar. Las secciones se ordenan con Subir / Bajar. Conserva al menos una imagen para cada reel."),["hero","benefits","sections","reels","workshop","gallery","delivery","faq","navigation"].map(M=>[M,u[M]]).map(([M,V])=>S.default.createElement("details",{className:"editor-section",key:M},S.default.createElement("summary",null,ES[M]||M),S.default.createElement(vd,{value:Array.isArray(V)?{[M]:V}:V,onChange:ne=>c({...u,[M]:Array.isArray(V)?ne[M]:ne})}))),S.default.createElement(Ng,{value:u.financeBanners,onChange:M=>c({...u,financeBanners:M}),Media:ds}),S.default.createElement(Dg,{campaigns:u.campaigns,onChange:M=>c({...u,campaigns:M}),Media:ds}),S.default.createElement(Ug,{value:u.welcomeBanner,onChange:M=>c({...u,welcomeBanner:M}),Media:ds}),S.default.createElement(Pg,null),S.default.createElement("button",{disabled:m},"Guardar contenido")),f==="Tienda"&&S.default.createElement("form",{className:"admin-card form-grid",onSubmit:M=>{M.preventDefault(),oe(()=>J("/admin/settings",{method:"PUT",body:o.settings}),"Informaci\xF3n de tienda guardada")}},S.default.createElement(vd,{value:o.settings,onChange:M=>l({...o,settings:M})}),S.default.createElement("button",{disabled:m},"Guardar tienda")),f==="Solicitudes"&&S.default.createElement(S.default.Fragment,null,!o.orders.length&&S.default.createElement("p",null,"A\xFAn no hay solicitudes de compra."),o.orders.map(M=>S.default.createElement("article",{className:"admin-card",key:M.id},S.default.createElement("h3",null,M.data.customer.name," \xB7 ",mt(M.data.total)),S.default.createElement("p",null,S.default.createElement("code",null,M.id)," \xB7"," ",new Date(M.created_at).toLocaleString("es-CO")),S.default.createElement("p",null,M.data.customer.email," \xB7 ",M.data.customer.phone,S.default.createElement("br",null),M.data.customer.city," \xB7 ",M.data.customer.address),S.default.createElement("div",{className:"order-lines"},M.data.items.map((V,ne)=>S.default.createElement("p",{key:ne},V.quantity," \xD7 ",V.name," \xB7 ",V.color," \xB7 ",mt(V.price)))),S.default.createElement("p",null,"Preferencia: ",M.data.method," \xB7 Pago pendiente de confirmaci\xF3n \xB7 Env\xEDo por cotizar"),S.default.createElement("p",null,M.data.customer.notes),S.default.createElement("label",null,"Estado de la solicitud",S.default.createElement("select",{value:M.status,onChange:V=>oe(async()=>{await J("/admin/orders/"+M.id,{method:"PATCH",body:{status:V.target.value}}),await F()},"Estado actualizado")},["recibido","contactado","confirmado","en_fabricacion","enviado","entregado","cancelado"].map(V=>S.default.createElement("option",{key:V},V))))))),f==="Documentos"&&S.default.createElement(Eg,null),f==="Permisos de contacto"&&S.default.createElement(Ig,null),f==="Asesor\xEDas"&&S.default.createElement(S.default.Fragment,null,!o.leads.length&&S.default.createElement("p",null,"A\xFAn no hay asesor\xEDas registradas."),o.leads.map(M=>S.default.createElement("article",{className:"admin-card admin-lead",key:M.id},S.default.createElement("h3",null,M.data.name," \xB7 ",M.data.type),S.default.createElement("p",null,M.data.phone," \xB7 ",M.data.city),S.default.createElement("p",null,M.data.message),S.default.createElement("p",null,"Canal autorizado:"," ",{email:"Correo electr\xF3nico",phone:"Llamada",whatsapp:"WhatsApp"}[M.data.contactChannel||"whatsapp"]," ",M.data.email||""),M.data.preferredDate&&S.default.createElement("p",null,"Cita solicitada (por confirmar): ",M.data.preferredDate," ","\xB7"," ",{morning:"Ma\xF1ana",afternoon:"Tarde"}[M.data.preferredTime]||"Sin preferencia de franja"),M.data.contactConsent&&S.default.createElement("details",null,S.default.createElement("summary",null,"Autorizaci\xF3n para esta asesor\xEDa"),S.default.createElement("p",null,M.data.contactConsent.text),S.default.createElement("p",null,M.data.contactConsent.acceptedAt," \xB7"," ",M.data.contactConsent.version),S.default.createElement("p",null,"Publicidad: no autorizada por esta solicitud.")),M.data.configuration&&S.default.createElement("p",null,"Configuraci\xF3n:"," ",M.data.configuration.kind==="product"?S.default.createElement(S.default.Fragment,null,M.data.configuration.productName," \xB7"," ",M.data.configuration.color," \xB7"," ",M.data.configuration.summary," \xB7"," ",M.data.configuration.legLabel):S.default.createElement(S.default.Fragment,null,M.data.configuration.shape," \xB7"," ",M.data.configuration.fabric," \xB7"," ",M.data.configuration.extras.join(", "))),S.default.createElement("small",null,new Date(M.created_at).toLocaleString("es-CO")),(!M.data.contactChannel||M.data.contactChannel==="whatsapp")&&S.default.createElement("p",null,S.default.createElement("a",{className:"button outline",target:"_blank",rel:"noreferrer",href:"https://wa.me/"+M.data.phone.replace(/\D/g,"")},"Abrir WhatsApp")),M.data.contactChannel==="email"&&S.default.createElement("a",{className:"button outline",href:"mailto:"+M.data.email},"Preparar respuesta por correo"),M.data.contactChannel==="phone"&&S.default.createElement("a",{className:"button outline",href:"tel:"+M.data.phone.replace(/[^+\d]/g,"")},"Llamar por el canal autorizado"))))):S.default.createElement("p",null,"Cargando datos\u2026"))):S.default.createElement("main",{className:"login"},S.default.createElement("a",{href:"./dekoramma.html"},S.default.createElement("img",{style:{width:110,margin:"0 auto"},src:"./asset-logo.png",alt:"Dekoramma"})),S.default.createElement("h1",null,"Administraci\xF3n"),S.default.createElement("p",null,"Gestiona tu tienda y el contenido que ven tus clientes."),S.default.createElement("p",null,S.default.createElement("a",{href:"./dekoramma.html"},"Conocer el panel sin iniciar sesi\xF3n \u2192")),e&&S.default.createElement("div",{className:"admin-google-access"},S.default.createElement("a",{className:"outline",href:"/api/auth/google/start"},"Continuar con Google"),S.default.createElement("p",null,"Solo cuentas autorizadas. No hay registro p\xFAblico.")),S.default.createElement("form",{className:"form-grid",onSubmit:M=>{M.preventDefault();let V=new FormData(M.currentTarget);oe(async()=>{let ne=await J("/login",{method:"POST",body:{email:V.get("email"),password:V.get("password")}});bc(ne.csrf),i(ne),await F()},"Sesi\xF3n iniciada")}},S.default.createElement("label",null,"Correo",S.default.createElement("input",{name:"email",type:"email",autoComplete:"username",required:!0})),S.default.createElement("label",null,"Contrase\xF1a",S.default.createElement("input",{name:"password",type:"password",autoComplete:"current-password",required:!0})),h&&S.default.createElement("p",{className:"error"},h),S.default.createElement("button",{disabled:m},"Entrar"),S.default.createElement("a",{href:"./dekoramma.html"},"Volver a la tienda")))}var k=me(le());var IS=[["terms","T\xE9rminos y condiciones","terminos"],["warranty","Garant\xEDas y cuidado","garantias"],["privacy","Pol\xEDtica de privacidad","privacidad"],["withdrawal","Derecho de retracto y reversi\xF3n","retracto"],["documentation","Verificaci\xF3n comercial","documentos"]];function Og(){let[t,e]=(0,k.useState)(null),[a,n]=(0,k.useState)([]),[i,s]=(0,k.useState)("");if((0,k.useEffect)(()=>{Promise.all([J("/catalog"),J("/documents")]).then(([l,u])=>{e(l.settings),n(u.documents)}).catch(l=>s(l.message))},[]),i)return k.default.createElement("main",{className:"wrap"},k.default.createElement("h1",null,"No pudimos cargar la informaci\xF3n"),k.default.createElement("p",null,i),k.default.createElement("button",{onClick:()=>location.reload()},"Reintentar"));if(!t)return k.default.createElement("main",{className:"loading"},"Cargando informaci\xF3n de la tienda\u2026");let r=t,o="mailto:"+r.email+"?subject="+encodeURIComponent("Solicitud de documentaci\xF3n comercial \xB7 Dekoramma")+"&body="+encodeURIComponent(`Hola, quisiera solicitar informaci\xF3n de verificaci\xF3n comercial.
Documento que necesito: RUT / C\xE1mara de Comercio / datos para facturaci\xF3n.
Finalidad de la solicitud: 
Nombre y correo de respuesta: `);return k.default.createElement("main",{className:"legal-page wrap"},k.default.createElement("a",{className:"back-link",href:"./dekoramma.html"},"\u2190 Volver a la tienda"),k.default.createElement("header",null,k.default.createElement("p",{className:"eyebrow"},"Dekoramma \xB7 Estilo y arte"),k.default.createElement("h1",null,"Informaci\xF3n para comprar con confianza."),k.default.createElement("p",null,"Conoce d\xF3nde estamos, c\xF3mo solicitar atenci\xF3n y qu\xE9 documentos respaldan tu compra.")),r.legalDraft&&k.default.createElement("p",{className:"viewer-note"},"Borradores en revisi\xF3n. La identificaci\xF3n legal y las condiciones comerciales pendientes deben completarse antes de abrir ventas."),k.default.createElement("nav",{className:"legal-nav","aria-label":"Informaci\xF3n al cliente"},k.default.createElement("a",{href:"#ubicacion"},"D\xF3nde estamos"),IS.map(([,l,u])=>k.default.createElement("a",{key:u,href:"#"+u},l))),k.default.createElement("section",{id:"ubicacion",className:"legal-section"},k.default.createElement("h2",null,"Vis\xEDtanos en Bosa"),k.default.createElement("p",null,r.address),k.default.createElement("p",null,r.hours),k.default.createElement("div",{className:"actions"},k.default.createElement("a",{className:"button",href:_c(r),target:"_blank",rel:"noreferrer"},"C\xF3mo llegar"),k.default.createElement("a",{className:"button outline",href:"https://wa.me/"+r.phone,target:"_blank",rel:"noreferrer"},"Atenci\xF3n por WhatsApp")),k.default.createElement("dl",{className:"product-specs"},k.default.createElement("dt",null,"Raz\xF3n social o nombre del comerciante"),k.default.createElement("dd",null,r.legalName||"Pendiente por editar"),k.default.createElement("dt",null,"NIT"),k.default.createElement("dd",null,r.taxId||"Pendiente por editar"),k.default.createElement("dt",null,"Matr\xEDcula mercantil"),k.default.createElement("dd",null,r.registration||"Pendiente por editar"),k.default.createElement("dt",null,"Correo de atenci\xF3n"),k.default.createElement("dd",null,k.default.createElement("a",{href:"mailto:"+r.email},r.email)))),IS.map(([l,u,c])=>k.default.createElement("section",{className:"legal-section",id:c,key:c},k.default.createElement("p",{className:"eyebrow"},r.legalVersion),k.default.createElement("h2",null,u),k.default.createElement("div",{className:"legal-copy"},(r[l]||"Pendiente por editar").split(`

`).map((f,d)=>k.default.createElement("p",{className:"preserve",key:d},f))),a.filter(f=>f.category===l).map(f=>k.default.createElement("a",{className:"button outline",key:f.id,href:"/api/documents/"+f.id+"/file"},"Descargar PDF aprobado \xB7 ",f.document_year," \xB7 v",f.version)),l==="documentation"&&k.default.createElement("a",{className:"button outline",href:o},"Solicitar RUT o C\xE1mara de Comercio por correo"))),k.default.createElement("section",{className:"legal-section"},k.default.createElement("h2",null,"Documentos publicados"),a.length?a.map(l=>k.default.createElement("p",{key:l.id},k.default.createElement("a",{href:"/api/documents/"+l.id+"/file"},l.title," \xB7 ",l.document_year," \xB7 versi\xF3n ",l.version))):k.default.createElement("p",null,"Los PDFs aparecer\xE1n aqu\xED cuando la tienda los apruebe y publique. Los documentos internos no se muestran al p\xFAblico."),k.default.createElement("p",null,k.default.createElement("a",{href:"https://www.sic.gov.co/",target:"_blank",rel:"noreferrer"},"Superintendencia de Industria y Comercio"))))}var ke=me(le());function Bg(){let[t,e]=(0,ke.useState)(""),[a,n]=(0,ke.useState)(""),[i,s]=(0,ke.useState)(""),[r,o]=(0,ke.useState)(!1),[l,u]=(0,ke.useState)("");return(0,ke.useEffect)(()=>{e(window.location.hash.slice(1)),J("/catalog").then(c=>u(c.settings.email)).catch(()=>{})},[]),ke.default.createElement("main",{className:"legal-page wrap"},ke.default.createElement("a",{href:"./dekoramma.html"},"\u2190 Volver a Dekoramma"),ke.default.createElement("h1",null,"T\xFA decides qu\xE9 recibes."),ke.default.createElement("p",null,"Retira tu autorizaci\xF3n para novedades, ofertas y promociones. Tus solicitudes de compra y asesor\xEDa siguen su curso."),a?ke.default.createElement("p",{role:"status"},a):ke.default.createElement("form",{className:"form-grid",onSubmit:async c=>{c.preventDefault(),o(!0),s("");try{let f=await J("/marketing/withdraw",{method:"POST",body:{token:t}});n(f.message)}catch(f){s(f.message)}finally{o(!1)}}},ke.default.createElement("label",null,"Clave de tu enlace privado",ke.default.createElement("input",{value:t,onChange:c=>e(c.target.value),required:!0,pattern:"[a-f0-9]{64}",autoComplete:"off"})),i&&ke.default.createElement("p",{role:"alert",className:"error"},i),ke.default.createElement("button",{disabled:r},r?"Guardando\u2026":"Retirar mi autorizaci\xF3n de publicidad")),ke.default.createElement("p",null,"\xBFNo tienes tu enlace?"," ",l?ke.default.createElement("a",{href:"mailto:"+l+"?subject=Retirar%20autorizacion%20de%20publicidad"},"Solicita la gesti\xF3n a la tienda"):ke.default.createElement("a",{href:"./dekoramma.html?vista=informacion#privacidad"},"Consulta el canal de privacidad"),"."))}var Fg=new URLSearchParams(location.search).get("vista");function BE(){return Bt.default.createElement(Bt.default.Fragment,null,Bt.default.createElement("aside",{className:"github-preview"},Bt.default.createElement("strong",null,"Vista de prueba \xB7 Dekoramma"),Bt.default.createElement("span",null,"Cat\xE1logo de ejemplo. Sin cobros ni env\xEDo de formularios."),Bt.default.createElement("nav",null,Bt.default.createElement("a",{href:"./dekoramma.html"},"Tienda"),Bt.default.createElement("a",{href:"./dekoramma.html?vista=admin"},"Probar administraci\xF3n"))),Fg==="admin"?Bt.default.createElement(Rg,{preview:!0}):Fg==="informacion"?Bt.default.createElement(Og,null):Fg==="preferencias"?Bt.default.createElement(Bg,null):Bt.default.createElement(Yp,null))}(0,DS.createRoot)(document.getElementById("root")).render(Bt.default.createElement(BE,null));
