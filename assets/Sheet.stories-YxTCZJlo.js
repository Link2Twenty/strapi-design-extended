import{r,j as l,W as me,a as Le,e as dt,_ as ft,i as ht,m as $,n as pt,p as mt,q as vt,t as gt,v as yt,w as St,x as Ct,U as re,I as W,y as Et,F as bt,A as Tt,g as V,E as P,z as U}from"./iframe-XuWH9_8x.js";import{u as wt}from"./index-BgSYNoaV.js";import{u as Rt}from"./useDesignTokens-BWc_HJiL.js";import"./preload-helper-PPVm8Dsz.js";function Ot(e,t=[]){let n=[];function o(a,c){const i=r.createContext(c);i.displayName=a+"Context";const f=n.length;n=[...n,c];const m=h=>{const{scope:E,children:p,...C}=h,u=E?.[e]?.[f]||i,v=r.useMemo(()=>C,Object.values(C));return l.jsx(u.Provider,{value:v,children:p})};m.displayName=a+"Provider";function d(h,E){const p=E?.[e]?.[f]||i,C=r.useContext(p);if(C)return C;if(c!==void 0)return c;throw new Error(`\`${h}\` must be used within \`${a}\``)}return[m,d]}const s=()=>{const a=n.map(c=>r.createContext(c));return function(i){const f=i?.[e]||a;return r.useMemo(()=>({[`__scope${e}`]:{...i,[e]:f}}),[i,f])}};return s.scopeName=e,[o,xt(s,...t)]}function xt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const c=o.reduce((i,{useScope:f,scopeName:m})=>{const h=f(a)[`__scope${m}`];return{...i,...h}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Te(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Dt(...e){return t=>{let n=!1;const o=e.map(s=>{const a=Te(s,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let s=0;s<o.length;s++){const a=o[s];typeof a=="function"?a():Te(e[s],null)}}}}function A(...e){return r.useCallback(Dt(...e),e)}function _e(e){const t=r.forwardRef((n,o)=>{let{children:s,...a}=n,c=null,i=!1;const f=[];we(s)&&typeof z=="function"&&(s=z(s._payload)),r.Children.forEach(s,E=>{if(jt(E)){i=!0;const p=E;let C="child"in p.props?p.props.child:p.props.children;we(C)&&typeof z=="function"&&(C=z(C._payload)),c=Nt(p,C),f.push(c?.props?.children)}else f.push(E)}),c?c=r.cloneElement(c,void 0,f):!i&&r.Children.count(s)===1&&r.isValidElement(s)&&(c=s);const m=c?Ft(c):void 0,d=A(o,m);if(!c){if(s||s===0)throw new Error(i?_t(e):Lt(e));return s}const h=It(a,c.props??{});return c.type!==r.Fragment&&(h.ref=o?d:m),r.cloneElement(c,h)});return t.displayName=`${e}.Slot`,t}var Pt=Symbol.for("radix.slottable"),Nt=(e,t)=>{if("child"in e.props){const n=e.props.child;return r.isValidElement(n)?r.cloneElement(n,void 0,e.props.children(n.props.children)):null}return r.isValidElement(t)?t:null};function It(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...i)=>{const f=a(...i);return s(...i),f}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function Ft(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function jt(e){return r.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Pt}var Bt=Symbol.for("react.lazy");function we(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Bt&&"_payload"in e&&At(e._payload)}function At(e){return typeof e=="object"&&e!==null&&"then"in e}var Lt=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,_t=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,z=me[" use ".trim().toString()];function j(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e?.(s),n===!1||!s.defaultPrevented)return t?.(s)}}var H=globalThis?.document?r.useLayoutEffect:()=>{},kt=me[" useInsertionEffect ".trim().toString()]||H;function Mt({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){const[s,a,c]=$t({defaultProp:t,onChange:n}),i=e!==void 0,f=i?e:s;{const d=r.useRef(e!==void 0);r.useEffect(()=>{const h=d.current;h!==i&&console.warn(`${o} is changing from ${h?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=i},[i,o])}const m=r.useCallback(d=>{if(i){const h=Wt(d)?d(e):d;h!==e&&c.current?.(h)}else a(d)},[i,e,a,c]);return[f,m]}function $t({defaultProp:e,onChange:t}){const[n,o]=r.useState(e),s=r.useRef(n),a=r.useRef(t);return kt(()=>{a.current=t},[t]),r.useEffect(()=>{s.current!==n&&(a.current?.(n),s.current=n)},[n,s]),[n,o,a]}function Wt(e){return typeof e=="function"}var Ut=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],N=Ut.reduce((e,t)=>{const n=_e(`Primitive.${t}`),o=r.forwardRef((s,a)=>{const{asChild:c,...i}=s,f=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(f,{...i,ref:a})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Yt(e,t){e&&Le.flushSync(()=>e.dispatchEvent(t))}function Xt(e,t){return r.useReducer((n,o)=>t[n][o]??n,e)}var se=e=>{const{present:t,children:n}=e,o=Ht(t),s=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),a=Vt(o.ref,Kt(s));return typeof n=="function"||o.isPresent?r.cloneElement(s,{ref:a}):null};se.displayName="Presence";function Ht(e){const[t,n]=r.useState(),o=r.useRef(null),s=r.useRef(e),a=r.useRef("none"),c=e?"mounted":"unmounted",[i,f]=Xt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const m=q(o.current);a.current=i==="mounted"?m:"none"},[i]),H(()=>{const m=o.current,d=s.current;if(d!==e){const E=a.current,p=q(m);e?f("MOUNT"):p==="none"||m?.display==="none"?f("UNMOUNT"):f(d&&E!==p?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,f]),H(()=>{if(t){let m;const d=t.ownerDocument.defaultView??window,h=p=>{const u=q(o.current).includes(CSS.escape(p.animationName));if(p.target===t&&u&&(f("ANIMATION_END"),!s.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",m=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},E=p=>{p.target===t&&(a.current=q(o.current))};return t.addEventListener("animationstart",E),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(m),t.removeEventListener("animationstart",E),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:r.useCallback(m=>{o.current=m?getComputedStyle(m):null,n(m)},[])}}function Re(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Vt(...e){const t=r.useRef(e);return t.current=e,r.useCallback(n=>{const o=t.current;let s=!1;const a=o.map(c=>{const i=Re(c,n);return!s&&typeof i=="function"&&(s=!0),i});if(s)return()=>{for(let c=0;c<a.length;c++){const i=a[c];typeof i=="function"?i():Re(o[c],null)}}},[])}function q(e){return e?.animationName||"none"}function Kt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var zt=me[" useId ".trim().toString()]||(()=>{}),qt=0;function le(e){const[t,n]=r.useState(zt());return H(()=>{n(o=>o??String(qt++))},[e]),e||(t?`radix-${t}`:"")}function ne(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>((...n)=>t.current?.(...n)),[])}var Zt="DismissableLayer",he="dismissableLayer.update",Gt="dismissableLayer.pointerDownOutside",Qt="dismissableLayer.focusOutside",Oe,ve=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ke=r.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:i,onDismiss:f,...m}=e,d=r.useContext(ve),[h,E]=r.useState(null),p=h?.ownerDocument??globalThis?.document,[,C]=r.useState({}),u=A(t,E),v=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),g=v.indexOf(y),S=h?v.indexOf(h):-1,b=d.layersWithOutsidePointerEventsDisabled.size>0,T=S>=g,O=r.useRef(!1),D=nn(w=>{const B=w.target;if(!(B instanceof Node))return;const be=[...d.branches].some(ce=>ce.contains(B));!T||be||(a?.(w),i?.(w),w.defaultPrevented||f?.())},{ownerDocument:p,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:O,dismissableSurfaces:d.dismissableSurfaces}),X=on(w=>{if(o&&O.current)return;const B=w.target;[...d.branches].some(ce=>ce.contains(B))||(c?.(w),i?.(w),w.defaultPrevented||f?.())},p),L=h?S===v.length-1:!1,K=wt(w=>{w.key==="Escape"&&(s?.(w),!w.defaultPrevented&&f&&(w.preventDefault(),f()))});return r.useEffect(()=>{if(L)return p.addEventListener("keydown",K,{capture:!0}),()=>p.removeEventListener("keydown",K,{capture:!0})},[p,L]),r.useEffect(()=>{if(h)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Oe=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(h)),d.layers.add(h),xe(),()=>{n&&(d.layersWithOutsidePointerEventsDisabled.delete(h),d.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=Oe))}},[h,p,n,d]),r.useEffect(()=>()=>{h&&(d.layers.delete(h),d.layersWithOutsidePointerEventsDisabled.delete(h),xe())},[h,d]),r.useEffect(()=>{const w=()=>C({});return document.addEventListener(he,w),()=>document.removeEventListener(he,w)},[]),l.jsx(N.div,{...m,ref:u,style:{pointerEvents:b?T?"auto":"none":void 0,...e.style},onFocusCapture:j(e.onFocusCapture,X.onFocusCapture),onBlurCapture:j(e.onBlurCapture,X.onBlurCapture),onPointerDownCapture:j(e.onPointerDownCapture,D.onPointerDownCapture)})});ke.displayName=Zt;var Jt="DismissableLayerBranch",en=r.forwardRef((e,t)=>{const n=r.useContext(ve),o=r.useRef(null),s=A(t,o);return r.useEffect(()=>{const a=o.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),l.jsx(N.div,{...e,ref:s})});en.displayName=Jt;function tn(){const e=r.useContext(ve),[t,n]=r.useState(null);return r.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}function nn(e,t){const{ownerDocument:n=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:s,dismissableSurfaces:a}=t,c=ne(e),i=r.useRef(!1),f=r.useRef(!1),m=r.useRef(new Map),d=r.useRef(()=>{});return r.useEffect(()=>{function h(){f.current=!1,s.current=!1,m.current.clear()}function E(){return Array.from(m.current.values()).some(Boolean)}function p(g){if(!f.current)return;const S=g.target;S instanceof Node&&[...a].some(T=>T.contains(S))||m.current.set(g.type,!0),g.type==="click"&&window.setTimeout(()=>{f.current&&d.current()},0)}function C(g){f.current&&m.current.set(g.type,!1)}const u=g=>{if(g.target&&!i.current){let S=function(){n.removeEventListener("click",d.current);const T=E();h(),T||Me(Gt,c,b,{discrete:!0})};const b={originalEvent:g};f.current=!0,s.current=o&&g.button===0,m.current.clear(),!o||g.button!==0?S():(n.removeEventListener("click",d.current),d.current=S,n.addEventListener("click",d.current,{once:!0}))}else n.removeEventListener("click",d.current),h();i.current=!1},v=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const g of v)n.addEventListener(g,p,!0),n.addEventListener(g,C);const y=window.setTimeout(()=>{n.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(y),n.removeEventListener("pointerdown",u),n.removeEventListener("click",d.current);for(const g of v)n.removeEventListener(g,p,!0),n.removeEventListener(g,C)}},[n,c,o,s,a]),{onPointerDownCapture:()=>i.current=!0}}function on(e,t=globalThis?.document){const n=ne(e),o=r.useRef(!1);return r.useEffect(()=>{const s=a=>{a.target&&!o.current&&Me(Qt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function xe(){const e=new CustomEvent(he);document.dispatchEvent(e)}function Me(e,t,n,{discrete:o}){const s=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),o?Yt(s,a):s.dispatchEvent(a)}var ue="focusScope.autoFocusOnMount",de="focusScope.autoFocusOnUnmount",De={bubbles:!1,cancelable:!0},rn="FocusScope",$e=r.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:a,...c}=e,[i,f]=r.useState(null),m=ne(s),d=ne(a),h=r.useRef(null),E=A(t,f),p=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let u=function(S){if(p.paused||!i)return;const b=S.target;i.contains(b)?h.current=b:F(h.current,{select:!0})},v=function(S){if(p.paused||!i)return;const b=S.relatedTarget;b!==null&&(i.contains(b)||F(h.current,{select:!0}))},y=function(S){if(document.activeElement===document.body)for(const T of S)T.removedNodes.length>0&&F(i)};document.addEventListener("focusin",u),document.addEventListener("focusout",v);const g=new MutationObserver(y);return i&&g.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",v),g.disconnect()}}},[o,i,p.paused]),r.useEffect(()=>{if(i){Ne.add(p);const u=document.activeElement;if(!i.contains(u)){const y=new CustomEvent(ue,De);i.addEventListener(ue,m),i.dispatchEvent(y),y.defaultPrevented||(sn(dn(We(i)),{select:!0}),document.activeElement===u&&F(i))}return()=>{i.removeEventListener(ue,m),setTimeout(()=>{const y=new CustomEvent(de,De);i.addEventListener(de,d),i.dispatchEvent(y),y.defaultPrevented||F(u??document.body,{select:!0}),i.removeEventListener(de,d),Ne.remove(p)},0)}}},[i,m,d,p]);const C=r.useCallback(u=>{if(!n&&!o||p.paused)return;const v=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,y=document.activeElement;if(v&&y){const g=u.currentTarget,[S,b]=an(g);S&&b?!u.shiftKey&&y===b?(u.preventDefault(),n&&F(S,{select:!0})):u.shiftKey&&y===S&&(u.preventDefault(),n&&F(b,{select:!0})):y===g&&u.preventDefault()}},[n,o,p.paused]);return l.jsx(N.div,{tabIndex:-1,...c,ref:E,onKeyDown:C})});$e.displayName=rn;function sn(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(F(o,{select:t}),document.activeElement!==n)return}function an(e){const t=We(e),n=Pe(t,e),o=Pe(t.reverse(),e);return[n,o]}function We(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Pe(e,t){for(const n of e)if(!cn(n,{upTo:t}))return n}function cn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function ln(e){return e instanceof HTMLInputElement&&"select"in e}function F(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ln(e)&&t&&e.select()}}var Ne=un();function un(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=Ie(e,t),e.unshift(t)},remove(t){e=Ie(e,t),e[0]?.resume()}}}function Ie(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function dn(e){return e.filter(t=>t.tagName!=="A")}var fn="Portal",Ue=r.forwardRef((e,t)=>{const{container:n,...o}=e,[s,a]=r.useState(!1);H(()=>a(!0),[]);const c=n||s&&globalThis?.document?.body;return c?Le.createPortal(l.jsx(N.div,{...o,ref:t}),c):null});Ue.displayName=fn;var Z=0,_=null;function hn(){r.useEffect(()=>{_||(_={start:Fe(),end:Fe()});const{start:e,end:t}=_;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Z++,()=>{Z===1&&(_?.start.remove(),_?.end.remove(),_=null),Z=Math.max(0,Z-1)}},[])}function Fe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Ye=dt(),fe=function(){},ae=r.forwardRef(function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:fe,onWheelCapture:fe,onTouchMoveCapture:fe}),s=o[0],a=o[1],c=e.forwardProps,i=e.children,f=e.className,m=e.removeScrollBar,d=e.enabled,h=e.shards,E=e.sideCar,p=e.noRelative,C=e.noIsolation,u=e.inert,v=e.allowPinchZoom,y=e.as,g=y===void 0?"div":y,S=e.gapMode,b=ft(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=E,O=ht([n,t]),D=$($({},b),s);return r.createElement(r.Fragment,null,d&&r.createElement(T,{sideCar:Ye,removeScrollBar:m,shards:h,noRelative:p,noIsolation:C,inert:u,setCallbacks:a,allowPinchZoom:!!v,lockRef:n,gapMode:S}),c?r.cloneElement(r.Children.only(i),$($({},D),{ref:O})):r.createElement(g,$({},D,{className:f,ref:O}),i))});ae.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ae.classNames={fullWidth:mt,zeroRight:pt};var pe=!1;if(typeof window<"u")try{var G=Object.defineProperty({},"passive",{get:function(){return pe=!0,!0}});window.addEventListener("test",G,G),window.removeEventListener("test",G,G)}catch{pe=!1}var k=pe?{passive:!1}:!1,pn=function(e){return e.tagName==="TEXTAREA"},Xe=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!pn(e)&&n[t]==="visible")},mn=function(e){return Xe(e,"overflowY")},vn=function(e){return Xe(e,"overflowX")},je=function(e,t){var n=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=He(e,o);if(s){var a=Ve(e,o),c=a[1],i=a[2];if(c>i)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},gn=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},yn=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},He=function(e,t){return e==="v"?mn(t):vn(t)},Ve=function(e,t){return e==="v"?gn(t):yn(t)},Sn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Cn=function(e,t,n,o,s){var a=Sn(e,window.getComputedStyle(t).direction),c=a*o,i=n.target,f=t.contains(i),m=!1,d=c>0,h=0,E=0;do{if(!i)break;var p=Ve(e,i),C=p[0],u=p[1],v=p[2],y=u-v-a*C;(C||y)&&He(e,i)&&(h+=y,E+=C);var g=i.parentNode;i=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!f&&i!==document.body||f&&(t.contains(i)||t===i));return(d&&Math.abs(h)<1||!d&&Math.abs(E)<1)&&(m=!0),m},Q=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Be=function(e){return[e.deltaX,e.deltaY]},Ae=function(e){return e&&"current"in e?e.current:e},En=function(e,t){return e[0]===t[0]&&e[1]===t[1]},bn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Tn=0,M=[];function wn(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),s=r.useState(Tn++)[0],a=r.useState(vt)[0],c=r.useRef(e);r.useEffect(function(){c.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var u=gt([e.lockRef.current],(e.shards||[]).map(Ae),!0).filter(Boolean);return u.forEach(function(v){return v.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),u.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var i=r.useCallback(function(u,v){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!c.current.allowPinchZoom;var y=Q(u),g=n.current,S="deltaX"in u?u.deltaX:g[0]-y[0],b="deltaY"in u?u.deltaY:g[1]-y[1],T,O=u.target,D=Math.abs(S)>Math.abs(b)?"h":"v";if("touches"in u&&D==="h"&&O.type==="range")return!1;var X=window.getSelection(),L=X&&X.anchorNode,K=L?L===O||L.contains(O):!1;if(K)return!1;var w=je(D,O);if(!w)return!0;if(w?T=D:(T=D==="v"?"h":"v",w=je(D,O)),!w)return!1;if(!o.current&&"changedTouches"in u&&(S||b)&&(o.current=T),!T)return!0;var B=o.current||T;return Cn(B,v,u,B==="h"?S:b)},[]),f=r.useCallback(function(u){var v=u;if(!(!M.length||M[M.length-1]!==a)){var y="deltaY"in v?Be(v):Q(v),g=t.current.filter(function(T){return T.name===v.type&&(T.target===v.target||v.target===T.shadowParent)&&En(T.delta,y)})[0];if(g&&g.should){v.cancelable&&v.preventDefault();return}if(!g){var S=(c.current.shards||[]).map(Ae).filter(Boolean).filter(function(T){return T.contains(v.target)}),b=S.length>0?i(v,S[0]):!c.current.noIsolation;b&&v.cancelable&&v.preventDefault()}}},[]),m=r.useCallback(function(u,v,y,g){var S={name:u,delta:v,target:y,should:g,shadowParent:Rn(y)};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function(b){return b!==S})},1)},[]),d=r.useCallback(function(u){n.current=Q(u),o.current=void 0},[]),h=r.useCallback(function(u){m(u.type,Be(u),u.target,i(u,e.lockRef.current))},[]),E=r.useCallback(function(u){m(u.type,Q(u),u.target,i(u,e.lockRef.current))},[]);r.useEffect(function(){return M.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:E}),document.addEventListener("wheel",f,k),document.addEventListener("touchmove",f,k),document.addEventListener("touchstart",d,k),function(){M=M.filter(function(u){return u!==a}),document.removeEventListener("wheel",f,k),document.removeEventListener("touchmove",f,k),document.removeEventListener("touchstart",d,k)}},[]);var p=e.removeScrollBar,C=e.inert;return r.createElement(r.Fragment,null,C?r.createElement(a,{styles:bn(s)}):null,p?r.createElement(yt,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Rn(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const On=St(Ye,wn);var Ke=r.forwardRef(function(e,t){return r.createElement(ae,$({},e,{ref:t,sideCar:On}))});Ke.classNames=ae.classNames;var ie="Dialog",[ze]=Ot(ie),[xn,x]=ze(ie),ge=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:s,onOpenChange:a,modal:c=!0}=e,i=r.useRef(null),f=r.useRef(null),[m,d]=Mt({prop:o,defaultProp:s??!1,onChange:a,caller:ie});return l.jsx(xn,{scope:t,triggerRef:i,contentRef:f,contentId:le(),titleId:le(),descriptionId:le(),open:m,onOpenChange:d,onOpenToggle:r.useCallback(()=>d(h=>!h),[d]),modal:c,children:n})};ge.displayName=ie;var qe="DialogTrigger",Ze=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(qe,n),a=A(t,s.triggerRef);return l.jsx(N.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":Ce(s.open),...o,ref:a,onClick:j(e.onClick,s.onOpenToggle)})});Ze.displayName=qe;var ye="DialogPortal",[Dn,Ge]=ze(ye,{forceMount:void 0}),Qe=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:s}=e,a=x(ye,t);return l.jsx(Dn,{scope:t,forceMount:n,children:r.Children.map(o,c=>l.jsx(se,{present:n||a.open,children:l.jsx(Ue,{asChild:!0,container:s,children:c})}))})};Qe.displayName=ye;var oe="DialogOverlay",Je=r.forwardRef((e,t)=>{const n=Ge(oe,e.__scopeDialog),{forceMount:o=n.forceMount,...s}=e,a=x(oe,e.__scopeDialog);return a.modal?l.jsx(se,{present:o||a.open,children:l.jsx(Nn,{...s,ref:t})}):null});Je.displayName=oe;var Pn=_e("DialogOverlay.RemoveScroll"),Nn=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(oe,n),a=tn(),c=A(t,a);return l.jsx(Ke,{as:Pn,allowPinchZoom:!0,shards:[s.contentRef],children:l.jsx(N.div,{"data-state":Ce(s.open),...o,ref:c,style:{pointerEvents:"auto",...o.style}})})}),Y="DialogContent",et=r.forwardRef((e,t)=>{const n=Ge(Y,e.__scopeDialog),{forceMount:o=n.forceMount,...s}=e,a=x(Y,e.__scopeDialog);return l.jsx(se,{present:o||a.open,children:a.modal?l.jsx(In,{...s,ref:t}):l.jsx(Fn,{...s,ref:t})})});et.displayName=Y;var In=r.forwardRef((e,t)=>{const n=x(Y,e.__scopeDialog),o=r.useRef(null),s=A(t,n.contentRef,o);return r.useEffect(()=>{const a=o.current;if(a)return Ct(a)},[]),l.jsx(tt,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:j(e.onCloseAutoFocus,a=>{a.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:j(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&a.preventDefault()}),onFocusOutside:j(e.onFocusOutside,a=>a.preventDefault())})}),Fn=r.forwardRef((e,t)=>{const n=x(Y,e.__scopeDialog),o=r.useRef(!1),s=r.useRef(!1);return l.jsx(tt,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(o.current||n.triggerRef.current?.focus(),a.preventDefault()),o.current=!1,s.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(o.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=a.target;n.triggerRef.current?.contains(c)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),tt=r.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:s,onCloseAutoFocus:a,...c}=e,i=x(Y,n);return hn(),l.jsx(l.Fragment,{children:l.jsx($e,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:s,onUnmountAutoFocus:a,children:l.jsx(ke,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Ce(i.open),...c,ref:t,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})}),nt="DialogTitle",ot=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(nt,n);return l.jsx(N.h2,{id:s.titleId,...o,ref:t})});ot.displayName=nt;var rt="DialogDescription",jn=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(rt,n);return l.jsx(N.p,{id:s.descriptionId,...o,ref:t})});jn.displayName=rt;var st="DialogClose",Se=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(st,n);return l.jsx(N.button,{type:"button",...o,ref:t,onClick:j(e.onClick,()=>s.onOpenChange(!1))})});Se.displayName=st;function Ce(e){return e?"open":"closed"}const Bn=P`
    from { opacity: 0; }
    to { opacity: 1; }
  `,An=V(Je)`
  &[data-state='open'] {
    background: ${e=>Tt(e.theme.colors.neutral800,.2)};
    position: fixed;
    inset: 0;
    z-index: ${e=>e.theme.zIndices.overlay};
    will-change: opacity;

    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${Bn};
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeInOutCubic};
    }
  }
`,I={left:P`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,top:P`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,right:P`
	from {
		opacity: 0;
		transform: translateX(100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`,bottom:P`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,reverse:{left:P`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`,top:P`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);

  }
`,right:P`
	from {
		opacity: 1;
		transform: translateX(0);
	}
	to {
		opacity: 0;
		transform: translateX(100%);
	}
`,bottom:P`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`}},Ln=V(re.Root)`
  will-change: transform, opacity;
  animation-duration: ${e=>e.theme.motion.timings[200]};
  animation-timing-function: ${e=>e.theme.motion.easings.easeInOutCubic};
  grid-template-rows: 1fr;

  &[data-title='true'] {
    grid-template-rows: auto 1fr;

    &[data-footer='true'] {
      grid-template-rows: auto 1fr auto;
    }
  }

  &[data-title='false'][data-footer='true'] {
    grid-template-rows: 1fr auto;
  }

  &[data-side='top'] {
    animation-name: ${I.top};

    &[data-state='closed'] {
      animation-name: ${I.reverse.top};
    }
  }

  &[data-side='bottom'] {
    animation-name: ${I.bottom};

    &[data-state='closed'] {
      animation-name: ${I.reverse.bottom};
    }
  }

  &[data-side='left'] {
    animation-name: ${I.left};

    &[data-state='closed'] {
      animation-name: ${I.reverse.left};
    }
  }

  &[data-side='right'] {
    animation-name: ${I.right};

    &[data-state='closed'] {
      animation-name: ${I.reverse.right};
    }
  }
`,at=({children:e,width:t="440px",height:n="600px",side:o="right",hasTitle:s=!1,hasFooter:a=!1,...c})=>l.jsxs(Qe,{children:[l.jsx(An,{}),l.jsx(et,{"data-side":o,...c,asChild:!0,onCloseAutoFocus:()=>document.body.style.pointerEvents="",children:l.jsx(Ln,{gap:2,gridCols:1,background:"neutral0",shadow:"filterShadow",zIndex:"modal",position:"fixed",top:o==="bottom"?"auto":0,right:o==="left"?"auto":0,bottom:o==="top"?"auto":0,left:o==="right"?"auto":0,width:o==="top"||o==="bottom"?"100%":t,maxWidth:o==="top"||o==="bottom"?"100%":"98%",height:o==="left"||o==="right"?"100%":n,maxHeight:o==="left"||o==="right"?"100%":"98%","data-footer":a,"data-title":s,children:e})})]}),it=e=>l.jsx(re.Item,{...e,padding:6,width:"100%",height:"100%",margin:0,overflow:"auto",tabIndex:-1,style:{display:"block"}}),_n=V(re.Item)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
`,ct=e=>l.jsx(_n,{...e,padding:6,width:"100%"}),kn=V(ot)`
  width: 100%;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,lt=e=>l.jsx(re.Item,{width:"100%",children:l.jsx(kn,{...e,asChild:!0,children:l.jsx("div",{children:e.children})})}),Mn=V(Se)`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${e=>e.theme.spaces[2]};
`,ut=({title:e,open:t,children:n,width:o,height:s,onClose:a,actionButtons:c,showClose:i,side:f})=>l.jsx(ge,{open:t,onOpenChange:m=>!m&&a?.(),children:l.jsxs(at,{side:f,width:o,height:s,hasTitle:!!e,hasFooter:!!c,children:[e&&l.jsxs(lt,{children:[typeof e=="string"?l.jsx(W,{variant:"beta",textColor:"neutral800",tag:"h2",padding:6,width:"100%",textAlign:"center",children:e}):e,i&&l.jsx(Mn,{asChild:!0,children:l.jsx(Et,{label:"",children:l.jsx(bt,{})})})]}),l.jsx(it,{children:n}),c&&l.jsx(ct,{children:c})]})}),R={Root:ge,Trigger:Ze,Close:Se,Content:at,Body:it,Footer:ct,Title:lt};ut.__docgenInfo={description:"",methods:[],displayName:"SheetDialog",props:{title:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:"The title of the sheet dialog. If not provided, no title will be displayed."},open:{required:!1,tsType:{name:"boolean"},description:"Whether the sheet dialog is open or not. If not provided, the sheet dialog will be uncontrolled."},width:{required:!1,tsType:{name:"ReactCSSProperties['width']",raw:"React.CSSProperties['width']"},description:"The width of the sheet dialog (left or right). If not provided, the default width will be used."},height:{required:!1,tsType:{name:"ReactCSSProperties['height']",raw:"React.CSSProperties['height']"},description:"The height of the sheet dialog (top or bottom). If not provided, the default height will be used."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the sheet dialog. If not provided, no content will be displayed."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function that is called when the sheet dialog is closed. If not provided, no callback will be called."},actionButtons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The action buttons of the sheet dialog. If not provided, no action buttons will be displayed."},showClose:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button in the sheet dialog, this appears in the title bar. If not provided, the close button will not be displayed."},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"The side of the sheet dialog. If not provided, the default side will be used."}}};const Xn={title:"Components/Sheet",component:R.Root,argTypes:{onOpenChange:{action:"onOpenChange"}}},Ee=({code:e})=>{const[t,n]=r.useState(!1),{color:o}=Rt();return l.jsxs("div",{style:{marginTop:"1.5rem",borderTop:`1px solid ${o("neutral200")}`,paddingTop:"1rem"},children:[l.jsx(U,{variant:"tertiary",onClick:()=>n(!t),children:t?"Hide Code":"Show Code"}),t&&l.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:o("neutral100"),color:o("neutral800"),borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:`1px solid ${o("neutral200")}`},children:l.jsx("code",{children:e})})]})},J={render:e=>l.jsxs("div",{children:[l.jsxs(R.Root,{...e,children:[l.jsx(R.Trigger,{children:"Open"}),l.jsxs(R.Content,{hasTitle:!0,hasFooter:!0,children:[l.jsx(R.Title,{children:l.jsx(W,{variant:"beta",tag:"h2",padding:6,children:"Sheet Title"})}),l.jsx(R.Body,{children:l.jsx(W,{variant:"pi",children:"This is the content of the sheet."})}),l.jsx(R.Footer,{children:l.jsx(R.Close,{asChild:!0,children:l.jsx(U,{variant:"secondary",children:"Close"})})})]})]}),l.jsx(Ee,{code:`import { Sheet } from 'strapi-design-extended';import { Button, Typography } from '@strapi/design-system';

<Sheet.Root>
  <Sheet.Trigger>Open</Sheet.Trigger>
  <Sheet.Content hasTitle hasFooter>
    <Sheet.Title>
      <Typography variant="beta" tag="h2" padding={6}>
        Sheet Title
      </Typography>
    </Sheet.Title>
    <Sheet.Body>
      <Typography variant="pi">This is the content of the sheet.</Typography>
    </Sheet.Body>
    <Sheet.Footer>
      <Sheet.Close asChild>
        <Button variant="secondary">Close</Button>
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>`})]})},ee={render:e=>{const[t,n]=r.useState(!1);return l.jsxs("div",{children:[l.jsx(U,{onClick:()=>n(!0),children:"Open"}),l.jsx(R.Root,{...e,open:t,onOpenChange:n,children:l.jsxs(R.Content,{hasTitle:!0,hasFooter:!0,children:[l.jsx(R.Title,{children:l.jsx(W,{variant:"beta",tag:"h2",padding:6,children:"Sheet Title"})}),l.jsx(R.Body,{children:l.jsx(W,{variant:"pi",children:"This is the content of the sheet."})}),l.jsx(R.Footer,{children:l.jsx(U,{variant:"secondary",onClick:()=>n(!1),children:"Close"})})]})}),l.jsx(Ee,{code:`import { Sheet } from 'strapi-design-extended';
import { Button, Typography } from '@strapi/design-system';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Sheet.Root open={open} onOpenChange={setOpen}>
    <Sheet.Content hasTitle hasFooter>
      <Sheet.Title>
        <Typography variant="beta" tag="h2" padding={6}>
          Sheet Title
        </Typography>
      </Sheet.Title>
      <Sheet.Body>
        <Typography variant="pi">This is the content of the sheet.</Typography>
      </Sheet.Body>
      <Sheet.Footer>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Sheet.Footer>
    </Sheet.Content>
  </Sheet.Root>
</>`})]})}},te={render:e=>{const[t,n]=r.useState(!1);return l.jsxs("div",{children:[l.jsx(U,{onClick:()=>n(!0),children:"Open"}),l.jsx(ut,{open:t,showClose:!0,onClose:()=>n(!1),title:"Sheet Title",...e,actionButtons:l.jsx(U,{variant:"secondary",onClick:()=>n(!1),children:"Close"}),children:l.jsx(W,{variant:"pi",children:"This is the content of the sheet."})}),l.jsx(Ee,{code:`import { SheetDialog } from 'strapi-design-extended';
import { Button, Typography } from '@strapi/design-system';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <SheetDialog
    open={open}
    showClose
    onClose={() => setOpen(false)}
    title="Sheet Title"
    actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>}
  >
    <Typography variant="pi">This is the content of the sheet.</Typography>
  </SheetDialog>
</>`})]})}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { Sheet } from 'strapi-design-extended';import { Button, Typography } from '@strapi/design-system';\\n\\n<Sheet.Root>\\n  <Sheet.Trigger>Open</Sheet.Trigger>\\n  <Sheet.Content hasTitle hasFooter>\\n    <Sheet.Title>\\n      <Typography variant="beta" tag="h2" padding={6}>\\n        Sheet Title\\n      </Typography>\\n    </Sheet.Title>\\n    <Sheet.Body>\\n      <Typography variant="pi">This is the content of the sheet.</Typography>\\n    </Sheet.Body>\\n    <Sheet.Footer>\\n      <Sheet.Close asChild>\\n        <Button variant="secondary">Close</Button>\\n      </Sheet.Close>\\n    </Sheet.Footer>\\n  </Sheet.Content>\\n</Sheet.Root>\`;
    return <div>
        <Sheet.Root {...args}>
          <Sheet.Trigger>Open</Sheet.Trigger>
          <Sheet.Content hasTitle hasFooter>
            <Sheet.Title>
              <Typography variant="beta" tag="h2" padding={6}>
                Sheet Title
              </Typography>
            </Sheet.Title>
            <Sheet.Body>
              <Typography variant="pi">This is the content of the sheet.</Typography>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close asChild>
                <Button variant="secondary">Close</Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const code = \`import { Sheet } from 'strapi-design-extended';\\nimport { Button, Typography } from '@strapi/design-system';\\n\\nconst [open, setOpen] = useState(false);\\n\\n<>\\n  <Button onClick={() => setOpen(true)}>Open</Button>\\n  <Sheet.Root open={open} onOpenChange={setOpen}>\\n    <Sheet.Content hasTitle hasFooter>\\n      <Sheet.Title>\\n        <Typography variant="beta" tag="h2" padding={6}>\\n          Sheet Title\\n        </Typography>\\n      </Sheet.Title>\\n      <Sheet.Body>\\n        <Typography variant="pi">This is the content of the sheet.</Typography>\\n      </Sheet.Body>\\n      <Sheet.Footer>\\n        <Button variant="secondary" onClick={() => setOpen(false)}>\\n          Close\\n        </Button>\\n      </Sheet.Footer>\\n    </Sheet.Content>\\n  </Sheet.Root>\\n</>\`;
    return <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Sheet.Root {...args} open={open} onOpenChange={setOpen}>
          <Sheet.Content hasTitle hasFooter>
            <Sheet.Title>
              <Typography variant="beta" tag="h2" padding={6}>
                Sheet Title
              </Typography>
            </Sheet.Title>
            <Sheet.Body>
              <Typography variant="pi">This is the content of the sheet.</Typography>
            </Sheet.Body>
            <Sheet.Footer>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const code = \`import { SheetDialog } from 'strapi-design-extended';\\nimport { Button, Typography } from '@strapi/design-system';\\n\\nconst [open, setOpen] = useState(false);\\n\\n<>\\n  <Button onClick={() => setOpen(true)}>Open</Button>\\n  <SheetDialog\\n    open={open}\\n    showClose\\n    onClose={() => setOpen(false)}\\n    title="Sheet Title"\\n    actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>}\\n  >\\n    <Typography variant="pi">This is the content of the sheet.</Typography>\\n  </SheetDialog>\\n</>\`;
    return <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <SheetDialog open={open} showClose onClose={() => setOpen(false)} title="Sheet Title" {...args} actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>}>
          <Typography variant="pi">This is the content of the sheet.</Typography>
        </SheetDialog>
        <CodePreview code={code} />
      </div>;
  }
}`,...te.parameters?.docs?.source}}};const Hn=["Default","Controlled","Simplified"];export{ee as Controlled,J as Default,te as Simplified,Hn as __namedExportsOrder,Xn as default};
