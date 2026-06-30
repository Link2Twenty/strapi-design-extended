import{r,j as l,W as V,a as ke,c as ht,_ as pt,u as mt,b as $,d as vt,f as gt,s as yt,e as St,R as Ct,g as Et,h as bt,U as se,I as W,i as Tt,F as wt,o as Rt,k as K,E as P,z as U}from"./iframe-DuNcTt-v.js";import{u as Ot}from"./useDesignTokens-DV3FUd1L.js";import"./preload-helper-PPVm8Dsz.js";function xt(e,t=[]){let n=[];function o(a,c){const i=r.createContext(c);i.displayName=a+"Context";const f=n.length;n=[...n,c];const m=h=>{const{scope:E,children:p,...C}=h,u=E?.[e]?.[f]||i,v=r.useMemo(()=>C,Object.values(C));return l.jsx(u.Provider,{value:v,children:p})};m.displayName=a+"Provider";function d(h,E){const p=E?.[e]?.[f]||i,C=r.useContext(p);if(C)return C;if(c!==void 0)return c;throw new Error(`\`${h}\` must be used within \`${a}\``)}return[m,d]}const s=()=>{const a=n.map(c=>r.createContext(c));return function(i){const f=i?.[e]||a;return r.useMemo(()=>({[`__scope${e}`]:{...i,[e]:f}}),[i,f])}};return s.scopeName=e,[o,Dt(s,...t)]}function Dt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const c=o.reduce((i,{useScope:f,scopeName:m})=>{const h=f(a)[`__scope${m}`];return{...i,...h}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Te(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Pt(...e){return t=>{let n=!1;const o=e.map(s=>{const a=Te(s,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let s=0;s<o.length;s++){const a=o[s];typeof a=="function"?a():Te(e[s],null)}}}}function L(...e){return r.useCallback(Pt(...e),e)}function Me(e){const t=r.forwardRef((n,o)=>{let{children:s,...a}=n,c=null,i=!1;const f=[];we(s)&&typeof q=="function"&&(s=q(s._payload)),r.Children.forEach(s,E=>{if(Bt(E)){i=!0;const p=E;let C="child"in p.props?p.props.child:p.props.children;we(C)&&typeof q=="function"&&(C=q(C._payload)),c=It(p,C),f.push(c?.props?.children)}else f.push(E)}),c?c=r.cloneElement(c,void 0,f):!i&&r.Children.count(s)===1&&r.isValidElement(s)&&(c=s);const m=c?jt(c):void 0,d=L(o,m);if(!c){if(s||s===0)throw new Error(i?kt(e):_t(e));return s}const h=Ft(a,c.props??{});return c.type!==r.Fragment&&(h.ref=o?d:m),r.cloneElement(c,h)});return t.displayName=`${e}.Slot`,t}var Nt=Symbol.for("radix.slottable"),It=(e,t)=>{if("child"in e.props){const n=e.props.child;return r.isValidElement(n)?r.cloneElement(n,void 0,e.props.children(n.props.children)):null}return r.isValidElement(t)?t:null};function Ft(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...i)=>{const f=a(...i);return s(...i),f}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function jt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Bt(e){return r.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Nt}var Lt=Symbol.for("react.lazy");function we(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Lt&&"_payload"in e&&At(e._payload)}function At(e){return typeof e=="object"&&e!==null&&"then"in e}var _t=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,kt=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,q=V[" use ".trim().toString()];function j(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e?.(s),n===!1||!s.defaultPrevented)return t?.(s)}}var H=globalThis?.document?r.useLayoutEffect:()=>{},Mt=globalThis?.document?r.useLayoutEffect:()=>{},Re=V[" useEffectEvent ".trim().toString()],Oe=V[" useInsertionEffect ".trim().toString()];function $t(e){if(typeof Re=="function")return Re(e);const t=r.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Oe=="function"?Oe(()=>{t.current=e}):Mt(()=>{t.current=e}),r.useMemo(()=>((...n)=>t.current?.(...n)),[])}var Wt=V[" useInsertionEffect ".trim().toString()]||H;function Ut({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){const[s,a,c]=Yt({defaultProp:t,onChange:n}),i=e!==void 0,f=i?e:s;{const d=r.useRef(e!==void 0);r.useEffect(()=>{const h=d.current;h!==i&&console.warn(`${o} is changing from ${h?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=i},[i,o])}const m=r.useCallback(d=>{if(i){const h=Xt(d)?d(e):d;h!==e&&c.current?.(h)}else a(d)},[i,e,a,c]);return[f,m]}function Yt({defaultProp:e,onChange:t}){const[n,o]=r.useState(e),s=r.useRef(n),a=r.useRef(t);return Wt(()=>{a.current=t},[t]),r.useEffect(()=>{s.current!==n&&(a.current?.(n),s.current=n)},[n,s]),[n,o,a]}function Xt(e){return typeof e=="function"}var Ht=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],N=Ht.reduce((e,t)=>{const n=Me(`Primitive.${t}`),o=r.forwardRef((s,a)=>{const{asChild:c,...i}=s,f=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(f,{...i,ref:a})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Vt(e,t){e&&ke.flushSync(()=>e.dispatchEvent(t))}function Kt(e,t){return r.useReducer((n,o)=>t[n][o]??n,e)}var ae=e=>{const{present:t,children:n}=e,o=zt(t),s=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),a=qt(o.ref,Zt(s));return typeof n=="function"||o.isPresent?r.cloneElement(s,{ref:a}):null};ae.displayName="Presence";function zt(e){const[t,n]=r.useState(),o=r.useRef(null),s=r.useRef(e),a=r.useRef("none"),c=e?"mounted":"unmounted",[i,f]=Kt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const m=Z(o.current);a.current=i==="mounted"?m:"none"},[i]),H(()=>{const m=o.current,d=s.current;if(d!==e){const E=a.current,p=Z(m);e?f("MOUNT"):p==="none"||m?.display==="none"?f("UNMOUNT"):f(d&&E!==p?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,f]),H(()=>{if(t){let m;const d=t.ownerDocument.defaultView??window,h=p=>{const u=Z(o.current).includes(CSS.escape(p.animationName));if(p.target===t&&u&&(f("ANIMATION_END"),!s.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",m=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},E=p=>{p.target===t&&(a.current=Z(o.current))};return t.addEventListener("animationstart",E),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(m),t.removeEventListener("animationstart",E),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:r.useCallback(m=>{o.current=m?getComputedStyle(m):null,n(m)},[])}}function xe(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function qt(...e){const t=r.useRef(e);return t.current=e,r.useCallback(n=>{const o=t.current;let s=!1;const a=o.map(c=>{const i=xe(c,n);return!s&&typeof i=="function"&&(s=!0),i});if(s)return()=>{for(let c=0;c<a.length;c++){const i=a[c];typeof i=="function"?i():xe(o[c],null)}}},[])}function Z(e){return e?.animationName||"none"}function Zt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Gt=V[" useId ".trim().toString()]||(()=>{}),Qt=0;function ue(e){const[t,n]=r.useState(Gt());return H(()=>{n(o=>o??String(Qt++))},[e]),e||(t?`radix-${t}`:"")}function oe(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>((...n)=>t.current?.(...n)),[])}var Jt="DismissableLayer",pe="dismissableLayer.update",en="dismissableLayer.pointerDownOutside",tn="dismissableLayer.focusOutside",De,ve=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),$e=r.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:i,onDismiss:f,...m}=e,d=r.useContext(ve),[h,E]=r.useState(null),p=h?.ownerDocument??globalThis?.document,[,C]=r.useState({}),u=L(t,E),v=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),g=v.indexOf(y),S=h?v.indexOf(h):-1,b=d.layersWithOutsidePointerEventsDisabled.size>0,T=S>=g,O=r.useRef(!1),D=sn(w=>{const B=w.target;if(!(B instanceof Node))return;const be=[...d.branches].some(le=>le.contains(B));!T||be||(a?.(w),i?.(w),w.defaultPrevented||f?.())},{ownerDocument:p,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:O,dismissableSurfaces:d.dismissableSurfaces}),X=an(w=>{if(o&&O.current)return;const B=w.target;[...d.branches].some(le=>le.contains(B))||(c?.(w),i?.(w),w.defaultPrevented||f?.())},p),A=h?S===v.length-1:!1,z=$t(w=>{w.key==="Escape"&&(s?.(w),!w.defaultPrevented&&f&&(w.preventDefault(),f()))});return r.useEffect(()=>{if(A)return p.addEventListener("keydown",z,{capture:!0}),()=>p.removeEventListener("keydown",z,{capture:!0})},[p,A]),r.useEffect(()=>{if(h)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(De=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(h)),d.layers.add(h),Pe(),()=>{n&&(d.layersWithOutsidePointerEventsDisabled.delete(h),d.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=De))}},[h,p,n,d]),r.useEffect(()=>()=>{h&&(d.layers.delete(h),d.layersWithOutsidePointerEventsDisabled.delete(h),Pe())},[h,d]),r.useEffect(()=>{const w=()=>C({});return document.addEventListener(pe,w),()=>document.removeEventListener(pe,w)},[]),l.jsx(N.div,{...m,ref:u,style:{pointerEvents:b?T?"auto":"none":void 0,...e.style},onFocusCapture:j(e.onFocusCapture,X.onFocusCapture),onBlurCapture:j(e.onBlurCapture,X.onBlurCapture),onPointerDownCapture:j(e.onPointerDownCapture,D.onPointerDownCapture)})});$e.displayName=Jt;var nn="DismissableLayerBranch",on=r.forwardRef((e,t)=>{const n=r.useContext(ve),o=r.useRef(null),s=L(t,o);return r.useEffect(()=>{const a=o.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),l.jsx(N.div,{...e,ref:s})});on.displayName=nn;function rn(){const e=r.useContext(ve),[t,n]=r.useState(null);return r.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}function sn(e,t){const{ownerDocument:n=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:s,dismissableSurfaces:a}=t,c=oe(e),i=r.useRef(!1),f=r.useRef(!1),m=r.useRef(new Map),d=r.useRef(()=>{});return r.useEffect(()=>{function h(){f.current=!1,s.current=!1,m.current.clear()}function E(){return Array.from(m.current.values()).some(Boolean)}function p(g){if(!f.current)return;const S=g.target;S instanceof Node&&[...a].some(T=>T.contains(S))||m.current.set(g.type,!0),g.type==="click"&&window.setTimeout(()=>{f.current&&d.current()},0)}function C(g){f.current&&m.current.set(g.type,!1)}const u=g=>{if(g.target&&!i.current){let S=function(){n.removeEventListener("click",d.current);const T=E();h(),T||We(en,c,b,{discrete:!0})};const b={originalEvent:g};f.current=!0,s.current=o&&g.button===0,m.current.clear(),!o||g.button!==0?S():(n.removeEventListener("click",d.current),d.current=S,n.addEventListener("click",d.current,{once:!0}))}else n.removeEventListener("click",d.current),h();i.current=!1},v=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const g of v)n.addEventListener(g,p,!0),n.addEventListener(g,C);const y=window.setTimeout(()=>{n.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(y),n.removeEventListener("pointerdown",u),n.removeEventListener("click",d.current);for(const g of v)n.removeEventListener(g,p,!0),n.removeEventListener(g,C)}},[n,c,o,s,a]),{onPointerDownCapture:()=>i.current=!0}}function an(e,t=globalThis?.document){const n=oe(e),o=r.useRef(!1);return r.useEffect(()=>{const s=a=>{a.target&&!o.current&&We(tn,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Pe(){const e=new CustomEvent(pe);document.dispatchEvent(e)}function We(e,t,n,{discrete:o}){const s=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),o?Vt(s,a):s.dispatchEvent(a)}var de="focusScope.autoFocusOnMount",fe="focusScope.autoFocusOnUnmount",Ne={bubbles:!1,cancelable:!0},cn="FocusScope",Ue=r.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:a,...c}=e,[i,f]=r.useState(null),m=oe(s),d=oe(a),h=r.useRef(null),E=L(t,f),p=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let u=function(S){if(p.paused||!i)return;const b=S.target;i.contains(b)?h.current=b:F(h.current,{select:!0})},v=function(S){if(p.paused||!i)return;const b=S.relatedTarget;b!==null&&(i.contains(b)||F(h.current,{select:!0}))},y=function(S){if(document.activeElement===document.body)for(const T of S)T.removedNodes.length>0&&F(i)};document.addEventListener("focusin",u),document.addEventListener("focusout",v);const g=new MutationObserver(y);return i&&g.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",v),g.disconnect()}}},[o,i,p.paused]),r.useEffect(()=>{if(i){Fe.add(p);const u=document.activeElement;if(!i.contains(u)){const y=new CustomEvent(de,Ne);i.addEventListener(de,m),i.dispatchEvent(y),y.defaultPrevented||(ln(pn(Ye(i)),{select:!0}),document.activeElement===u&&F(i))}return()=>{i.removeEventListener(de,m),setTimeout(()=>{const y=new CustomEvent(fe,Ne);i.addEventListener(fe,d),i.dispatchEvent(y),y.defaultPrevented||F(u??document.body,{select:!0}),i.removeEventListener(fe,d),Fe.remove(p)},0)}}},[i,m,d,p]);const C=r.useCallback(u=>{if(!n&&!o||p.paused)return;const v=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,y=document.activeElement;if(v&&y){const g=u.currentTarget,[S,b]=un(g);S&&b?!u.shiftKey&&y===b?(u.preventDefault(),n&&F(S,{select:!0})):u.shiftKey&&y===S&&(u.preventDefault(),n&&F(b,{select:!0})):y===g&&u.preventDefault()}},[n,o,p.paused]);return l.jsx(N.div,{tabIndex:-1,...c,ref:E,onKeyDown:C})});Ue.displayName=cn;function ln(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(F(o,{select:t}),document.activeElement!==n)return}function un(e){const t=Ye(e),n=Ie(t,e),o=Ie(t.reverse(),e);return[n,o]}function Ye(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ie(e,t){for(const n of e)if(!dn(n,{upTo:t}))return n}function dn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function fn(e){return e instanceof HTMLInputElement&&"select"in e}function F(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&fn(e)&&t&&e.select()}}var Fe=hn();function hn(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=je(e,t),e.unshift(t)},remove(t){e=je(e,t),e[0]?.resume()}}}function je(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function pn(e){return e.filter(t=>t.tagName!=="A")}var mn="Portal",Xe=r.forwardRef((e,t)=>{const{container:n,...o}=e,[s,a]=r.useState(!1);H(()=>a(!0),[]);const c=n||s&&globalThis?.document?.body;return c?ke.createPortal(l.jsx(N.div,{...o,ref:t}),c):null});Xe.displayName=mn;var G=0,_=null;function vn(){r.useEffect(()=>{_||(_={start:Be(),end:Be()});const{start:e,end:t}=_;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),G++,()=>{G===1&&(_?.start.remove(),_?.end.remove(),_=null),G=Math.max(0,G-1)}},[])}function Be(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var He=ht(),he=function(){},ie=r.forwardRef(function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:he,onWheelCapture:he,onTouchMoveCapture:he}),s=o[0],a=o[1],c=e.forwardProps,i=e.children,f=e.className,m=e.removeScrollBar,d=e.enabled,h=e.shards,E=e.sideCar,p=e.noRelative,C=e.noIsolation,u=e.inert,v=e.allowPinchZoom,y=e.as,g=y===void 0?"div":y,S=e.gapMode,b=pt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=E,O=mt([n,t]),D=$($({},b),s);return r.createElement(r.Fragment,null,d&&r.createElement(T,{sideCar:He,removeScrollBar:m,shards:h,noRelative:p,noIsolation:C,inert:u,setCallbacks:a,allowPinchZoom:!!v,lockRef:n,gapMode:S}),c?r.cloneElement(r.Children.only(i),$($({},D),{ref:O})):r.createElement(g,$({},D,{className:f,ref:O}),i))});ie.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ie.classNames={fullWidth:gt,zeroRight:vt};var me=!1;if(typeof window<"u")try{var Q=Object.defineProperty({},"passive",{get:function(){return me=!0,!0}});window.addEventListener("test",Q,Q),window.removeEventListener("test",Q,Q)}catch{me=!1}var k=me?{passive:!1}:!1,gn=function(e){return e.tagName==="TEXTAREA"},Ve=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!gn(e)&&n[t]==="visible")},yn=function(e){return Ve(e,"overflowY")},Sn=function(e){return Ve(e,"overflowX")},Le=function(e,t){var n=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=Ke(e,o);if(s){var a=ze(e,o),c=a[1],i=a[2];if(c>i)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},Cn=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},En=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},Ke=function(e,t){return e==="v"?yn(t):Sn(t)},ze=function(e,t){return e==="v"?Cn(t):En(t)},bn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Tn=function(e,t,n,o,s){var a=bn(e,window.getComputedStyle(t).direction),c=a*o,i=n.target,f=t.contains(i),m=!1,d=c>0,h=0,E=0;do{if(!i)break;var p=ze(e,i),C=p[0],u=p[1],v=p[2],y=u-v-a*C;(C||y)&&Ke(e,i)&&(h+=y,E+=C);var g=i.parentNode;i=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!f&&i!==document.body||f&&(t.contains(i)||t===i));return(d&&Math.abs(h)<1||!d&&Math.abs(E)<1)&&(m=!0),m},J=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ae=function(e){return[e.deltaX,e.deltaY]},_e=function(e){return e&&"current"in e?e.current:e},wn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Rn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},On=0,M=[];function xn(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),s=r.useState(On++)[0],a=r.useState(yt)[0],c=r.useRef(e);r.useEffect(function(){c.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var u=St([e.lockRef.current],(e.shards||[]).map(_e),!0).filter(Boolean);return u.forEach(function(v){return v.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),u.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var i=r.useCallback(function(u,v){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!c.current.allowPinchZoom;var y=J(u),g=n.current,S="deltaX"in u?u.deltaX:g[0]-y[0],b="deltaY"in u?u.deltaY:g[1]-y[1],T,O=u.target,D=Math.abs(S)>Math.abs(b)?"h":"v";if("touches"in u&&D==="h"&&O.type==="range")return!1;var X=window.getSelection(),A=X&&X.anchorNode,z=A?A===O||A.contains(O):!1;if(z)return!1;var w=Le(D,O);if(!w)return!0;if(w?T=D:(T=D==="v"?"h":"v",w=Le(D,O)),!w)return!1;if(!o.current&&"changedTouches"in u&&(S||b)&&(o.current=T),!T)return!0;var B=o.current||T;return Tn(B,v,u,B==="h"?S:b)},[]),f=r.useCallback(function(u){var v=u;if(!(!M.length||M[M.length-1]!==a)){var y="deltaY"in v?Ae(v):J(v),g=t.current.filter(function(T){return T.name===v.type&&(T.target===v.target||v.target===T.shadowParent)&&wn(T.delta,y)})[0];if(g&&g.should){v.cancelable&&v.preventDefault();return}if(!g){var S=(c.current.shards||[]).map(_e).filter(Boolean).filter(function(T){return T.contains(v.target)}),b=S.length>0?i(v,S[0]):!c.current.noIsolation;b&&v.cancelable&&v.preventDefault()}}},[]),m=r.useCallback(function(u,v,y,g){var S={name:u,delta:v,target:y,should:g,shadowParent:Dn(y)};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function(b){return b!==S})},1)},[]),d=r.useCallback(function(u){n.current=J(u),o.current=void 0},[]),h=r.useCallback(function(u){m(u.type,Ae(u),u.target,i(u,e.lockRef.current))},[]),E=r.useCallback(function(u){m(u.type,J(u),u.target,i(u,e.lockRef.current))},[]);r.useEffect(function(){return M.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:E}),document.addEventListener("wheel",f,k),document.addEventListener("touchmove",f,k),document.addEventListener("touchstart",d,k),function(){M=M.filter(function(u){return u!==a}),document.removeEventListener("wheel",f,k),document.removeEventListener("touchmove",f,k),document.removeEventListener("touchstart",d,k)}},[]);var p=e.removeScrollBar,C=e.inert;return r.createElement(r.Fragment,null,C?r.createElement(a,{styles:Rn(s)}):null,p?r.createElement(Ct,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Dn(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Pn=Et(He,xn);var qe=r.forwardRef(function(e,t){return r.createElement(ie,$({},e,{ref:t,sideCar:Pn}))});qe.classNames=ie.classNames;var ce="Dialog",[Ze]=xt(ce),[Nn,x]=Ze(ce),ge=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:s,onOpenChange:a,modal:c=!0}=e,i=r.useRef(null),f=r.useRef(null),[m,d]=Ut({prop:o,defaultProp:s??!1,onChange:a,caller:ce});return l.jsx(Nn,{scope:t,triggerRef:i,contentRef:f,contentId:ue(),titleId:ue(),descriptionId:ue(),open:m,onOpenChange:d,onOpenToggle:r.useCallback(()=>d(h=>!h),[d]),modal:c,children:n})};ge.displayName=ce;var Ge="DialogTrigger",Qe=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(Ge,n),a=L(t,s.triggerRef);return l.jsx(N.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":Ce(s.open),...o,ref:a,onClick:j(e.onClick,s.onOpenToggle)})});Qe.displayName=Ge;var ye="DialogPortal",[In,Je]=Ze(ye,{forceMount:void 0}),et=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:s}=e,a=x(ye,t);return l.jsx(In,{scope:t,forceMount:n,children:r.Children.map(o,c=>l.jsx(ae,{present:n||a.open,children:l.jsx(Xe,{asChild:!0,container:s,children:c})}))})};et.displayName=ye;var re="DialogOverlay",tt=r.forwardRef((e,t)=>{const n=Je(re,e.__scopeDialog),{forceMount:o=n.forceMount,...s}=e,a=x(re,e.__scopeDialog);return a.modal?l.jsx(ae,{present:o||a.open,children:l.jsx(jn,{...s,ref:t})}):null});tt.displayName=re;var Fn=Me("DialogOverlay.RemoveScroll"),jn=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(re,n),a=rn(),c=L(t,a);return l.jsx(qe,{as:Fn,allowPinchZoom:!0,shards:[s.contentRef],children:l.jsx(N.div,{"data-state":Ce(s.open),...o,ref:c,style:{pointerEvents:"auto",...o.style}})})}),Y="DialogContent",nt=r.forwardRef((e,t)=>{const n=Je(Y,e.__scopeDialog),{forceMount:o=n.forceMount,...s}=e,a=x(Y,e.__scopeDialog);return l.jsx(ae,{present:o||a.open,children:a.modal?l.jsx(Bn,{...s,ref:t}):l.jsx(Ln,{...s,ref:t})})});nt.displayName=Y;var Bn=r.forwardRef((e,t)=>{const n=x(Y,e.__scopeDialog),o=r.useRef(null),s=L(t,n.contentRef,o);return r.useEffect(()=>{const a=o.current;if(a)return bt(a)},[]),l.jsx(ot,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:j(e.onCloseAutoFocus,a=>{a.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:j(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&a.preventDefault()}),onFocusOutside:j(e.onFocusOutside,a=>a.preventDefault())})}),Ln=r.forwardRef((e,t)=>{const n=x(Y,e.__scopeDialog),o=r.useRef(!1),s=r.useRef(!1);return l.jsx(ot,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(o.current||n.triggerRef.current?.focus(),a.preventDefault()),o.current=!1,s.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(o.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=a.target;n.triggerRef.current?.contains(c)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),ot=r.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:s,onCloseAutoFocus:a,...c}=e,i=x(Y,n);return vn(),l.jsx(l.Fragment,{children:l.jsx(Ue,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:s,onUnmountAutoFocus:a,children:l.jsx($e,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Ce(i.open),...c,ref:t,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})}),rt="DialogTitle",st=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(rt,n);return l.jsx(N.h2,{id:s.titleId,...o,ref:t})});st.displayName=rt;var at="DialogDescription",An=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(at,n);return l.jsx(N.p,{id:s.descriptionId,...o,ref:t})});An.displayName=at;var it="DialogClose",Se=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=x(it,n);return l.jsx(N.button,{type:"button",...o,ref:t,onClick:j(e.onClick,()=>s.onOpenChange(!1))})});Se.displayName=it;function Ce(e){return e?"open":"closed"}const _n=P`
    from { opacity: 0; }
    to { opacity: 1; }
  `,kn=K(tt)`
  &[data-state='open'] {
    background: ${e=>Rt(e.theme.colors.neutral800,.2)};
    position: fixed;
    inset: 0;
    z-index: ${e=>e.theme.zIndices.overlay};
    will-change: opacity;

    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${_n};
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
`}},Mn=K(se.Root)`
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
`,ct=({children:e,width:t="440px",height:n="600px",side:o="right",hasTitle:s=!1,hasFooter:a=!1,...c})=>l.jsxs(et,{children:[l.jsx(kn,{}),l.jsx(nt,{"data-side":o,...c,asChild:!0,onCloseAutoFocus:()=>document.body.style.pointerEvents="",children:l.jsx(Mn,{gap:2,gridCols:1,background:"neutral0",shadow:"filterShadow",zIndex:"modal",position:"fixed",top:o==="bottom"?"auto":0,right:o==="left"?"auto":0,bottom:o==="top"?"auto":0,left:o==="right"?"auto":0,width:o==="top"||o==="bottom"?"100%":t,maxWidth:o==="top"||o==="bottom"?"100%":"98%",height:o==="left"||o==="right"?"100%":n,maxHeight:o==="left"||o==="right"?"100%":"98%","data-footer":a,"data-title":s,children:e})})]}),lt=e=>l.jsx(se.Item,{...e,padding:6,width:"100%",height:"100%",margin:0,overflow:"auto",tabIndex:-1,style:{display:"block"}}),$n=K(se.Item)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
`,ut=e=>l.jsx($n,{...e,padding:6,width:"100%"}),Wn=K(st)`
  width: 100%;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,dt=e=>l.jsx(se.Item,{width:"100%",children:l.jsx(Wn,{...e,asChild:!0,children:l.jsx("div",{children:e.children})})}),Un=K(Se)`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${e=>e.theme.spaces[2]};
`,ft=({title:e,open:t,children:n,width:o,height:s,onClose:a,actionButtons:c,showClose:i,side:f})=>l.jsx(ge,{open:t,onOpenChange:m=>!m&&a?.(),children:l.jsxs(ct,{side:f,width:o,height:s,hasTitle:!!e,hasFooter:!!c,children:[e&&l.jsxs(dt,{children:[typeof e=="string"?l.jsx(W,{variant:"beta",textColor:"neutral800",tag:"h2",padding:6,width:"100%",textAlign:"center",children:e}):e,i&&l.jsx(Un,{asChild:!0,children:l.jsx(Tt,{label:"",children:l.jsx(wt,{})})})]}),l.jsx(lt,{children:n}),c&&l.jsx(ut,{children:c})]})}),R={Root:ge,Trigger:Qe,Close:Se,Content:ct,Body:lt,Footer:ut,Title:dt};ft.__docgenInfo={description:"",methods:[],displayName:"SheetDialog",props:{title:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:"The title of the sheet dialog. If not provided, no title will be displayed."},open:{required:!1,tsType:{name:"boolean"},description:"Whether the sheet dialog is open or not. If not provided, the sheet dialog will be uncontrolled."},width:{required:!1,tsType:{name:"ReactCSSProperties['width']",raw:"React.CSSProperties['width']"},description:"The width of the sheet dialog (left or right). If not provided, the default width will be used."},height:{required:!1,tsType:{name:"ReactCSSProperties['height']",raw:"React.CSSProperties['height']"},description:"The height of the sheet dialog (top or bottom). If not provided, the default height will be used."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the sheet dialog. If not provided, no content will be displayed."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function that is called when the sheet dialog is closed. If not provided, no callback will be called."},actionButtons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The action buttons of the sheet dialog. If not provided, no action buttons will be displayed."},showClose:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button in the sheet dialog, this appears in the title bar. If not provided, the close button will not be displayed."},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"The side of the sheet dialog. If not provided, the default side will be used."}}};const Vn={title:"Components/Sheet",component:R.Root,argTypes:{onOpenChange:{action:"onOpenChange"}}},Ee=({code:e})=>{const[t,n]=r.useState(!1),{color:o}=Ot();return l.jsxs("div",{style:{marginTop:"1.5rem",borderTop:`1px solid ${o("neutral200")}`,paddingTop:"1rem"},children:[l.jsx(U,{variant:"tertiary",onClick:()=>n(!t),children:t?"Hide Code":"Show Code"}),t&&l.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:o("neutral100"),color:o("neutral800"),borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:`1px solid ${o("neutral200")}`},children:l.jsx("code",{children:e})})]})},ee={render:e=>l.jsxs("div",{children:[l.jsxs(R.Root,{...e,children:[l.jsx(R.Trigger,{children:"Open"}),l.jsxs(R.Content,{hasTitle:!0,hasFooter:!0,children:[l.jsx(R.Title,{children:l.jsx(W,{variant:"beta",tag:"h2",padding:6,children:"Sheet Title"})}),l.jsx(R.Body,{children:l.jsx(W,{variant:"pi",children:"This is the content of the sheet."})}),l.jsx(R.Footer,{children:l.jsx(R.Close,{asChild:!0,children:l.jsx(U,{variant:"secondary",children:"Close"})})})]})]}),l.jsx(Ee,{code:`import { Sheet } from 'strapi-design-extended';import { Button, Typography } from '@strapi/design-system';

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
</Sheet.Root>`})]})},te={render:e=>{const[t,n]=r.useState(!1);return l.jsxs("div",{children:[l.jsx(U,{onClick:()=>n(!0),children:"Open"}),l.jsx(R.Root,{...e,open:t,onOpenChange:n,children:l.jsxs(R.Content,{hasTitle:!0,hasFooter:!0,children:[l.jsx(R.Title,{children:l.jsx(W,{variant:"beta",tag:"h2",padding:6,children:"Sheet Title"})}),l.jsx(R.Body,{children:l.jsx(W,{variant:"pi",children:"This is the content of the sheet."})}),l.jsx(R.Footer,{children:l.jsx(U,{variant:"secondary",onClick:()=>n(!1),children:"Close"})})]})}),l.jsx(Ee,{code:`import { Sheet } from 'strapi-design-extended';
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
</>`})]})}},ne={render:e=>{const[t,n]=r.useState(!1);return l.jsxs("div",{children:[l.jsx(U,{onClick:()=>n(!0),children:"Open"}),l.jsx(ft,{open:t,showClose:!0,onClose:()=>n(!1),title:"Sheet Title",...e,actionButtons:l.jsx(U,{variant:"secondary",onClick:()=>n(!1),children:"Close"}),children:l.jsx(W,{variant:"pi",children:"This is the content of the sheet."})}),l.jsx(Ee,{code:`import { SheetDialog } from 'strapi-design-extended';
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
</>`})]})}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source}}};const Kn=["Default","Controlled","Simplified"];export{te as Controlled,ee as Default,ne as Simplified,Kn as __namedExportsOrder,Vn as default};
