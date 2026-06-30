import{r as a,j as l,W as Ce,a as we,u as at,o as st,s as it,f as lt,b as ct,c as dt,h as pt,d as ut,l as ft,g as ht,E as V,R as oe,I as S,T as I,k as Te,z as gt}from"./iframe-XuWH9_8x.js";import{u as mt}from"./index-BgSYNoaV.js";import{u as yt}from"./useDesignTokens-BWc_HJiL.js";import"./preload-helper-PPVm8Dsz.js";function C(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),r===!1||!n.defaultPrevented)return t?.(n)}}function Ee(e,t=[]){let r=[];function o(s,i){const d=a.createContext(i);d.displayName=s+"Context";const c=r.length;r=[...r,i];const h=f=>{const{scope:m,children:g,...u}=f,y=m?.[e]?.[c]||d,b=a.useMemo(()=>u,Object.values(u));return l.jsx(y.Provider,{value:b,children:g})};h.displayName=s+"Provider";function p(f,m){const g=m?.[e]?.[c]||d,u=a.useContext(g);if(u)return u;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[h,p]}const n=()=>{const s=r.map(i=>a.createContext(i));return function(d){const c=d?.[e]||s;return a.useMemo(()=>({[`__scope${e}`]:{...d,[e]:c}}),[d,c])}};return n.scopeName=e,[o,vt(n,...t)]}function vt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(s){const i=o.reduce((d,{useScope:c,scopeName:h})=>{const f=c(s)[`__scope${h}`];return{...d,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}var O=globalThis?.document?a.useLayoutEffect:()=>{},xt=Ce[" useInsertionEffect ".trim().toString()]||O;function bt({prop:e,defaultProp:t,onChange:r=()=>{},caller:o}){const[n,s,i]=St({defaultProp:t,onChange:r}),d=e!==void 0,c=d?e:n;{const p=a.useRef(e!==void 0);a.useEffect(()=>{const f=p.current;f!==d&&console.warn(`${o} is changing from ${f?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=d},[d,o])}const h=a.useCallback(p=>{if(d){const f=Ct(p)?p(e):p;f!==e&&i.current?.(f)}else s(p)},[d,e,s,i]);return[c,h]}function St({defaultProp:e,onChange:t}){const[r,o]=a.useState(e),n=a.useRef(r),s=a.useRef(t);return xt(()=>{s.current=t},[t]),a.useEffect(()=>{n.current!==r&&(s.current?.(r),n.current=r)},[r,n]),[r,o,s]}function Ct(e){return typeof e=="function"}function ye(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function wt(...e){return t=>{let r=!1;const o=e.map(n=>{const s=ye(n,t);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let n=0;n<o.length;n++){const s=o[n];typeof s=="function"?s():ye(e[n],null)}}}}function H(...e){return a.useCallback(wt(...e),e)}function Tt(e){const t=a.forwardRef((r,o)=>{let{children:n,...s}=r,i=null,d=!1;const c=[];ve(n)&&typeof M=="function"&&(n=M(n._payload)),a.Children.forEach(n,m=>{if(At(m)){d=!0;const g=m;let u="child"in g.props?g.props.child:g.props.children;ve(u)&&typeof M=="function"&&(u=M(u._payload)),i=Pt(g,u),c.push(i?.props?.children)}else c.push(m)}),i?i=a.cloneElement(i,void 0,c):!d&&a.Children.count(n)===1&&a.isValidElement(n)&&(i=n);const h=i?Ot(i):void 0,p=H(o,h);if(!i){if(n||n===0)throw new Error(d?Ft(e):Ht(e));return n}const f=Rt(s,i.props??{});return i.type!==a.Fragment&&(f.ref=o?p:h),a.cloneElement(i,f)});return t.displayName=`${e}.Slot`,t}var Et=Symbol.for("radix.slottable"),Pt=(e,t)=>{if("child"in e.props){const r=e.props.child;return a.isValidElement(r)?a.cloneElement(r,void 0,e.props.children(r.props.children)):null}return a.isValidElement(t)?t:null};function Rt(e,t){const r={...t};for(const o in t){const n=e[o],s=t[o];/^on[A-Z]/.test(o)?n&&s?r[o]=(...d)=>{const c=s(...d);return n(...d),c}:n&&(r[o]=n):o==="style"?r[o]={...n,...s}:o==="className"&&(r[o]=[n,s].filter(Boolean).join(" "))}return{...e,...r}}function Ot(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function At(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Et}var Dt=Symbol.for("react.lazy");function ve(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Dt&&"_payload"in e&&Nt(e._payload)}function Nt(e){return typeof e=="object"&&e!==null&&"then"in e}var Ht=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Ft=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,M=Ce[" use ".trim().toString()],jt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],D=jt.reduce((e,t)=>{const r=Tt(`Primitive.${t}`),o=a.forwardRef((n,s)=>{const{asChild:i,...d}=n,c=i?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(c,{...d,ref:s})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function _t(e,t){e&&we.flushSync(()=>e.dispatchEvent(t))}var It="Arrow",Pe=a.forwardRef((e,t)=>{const{children:r,width:o=10,height:n=5,...s}=e;return l.jsx(D.svg,{...s,ref:t,width:o,height:n,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:l.jsx("polygon",{points:"0,0 30,0 15,10"})})});Pe.displayName=It;var zt=Pe;function ae(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>((...r)=>t.current?.(...r)),[])}function kt(e){const[t,r]=a.useState(void 0);return O(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const s=n[0];let i,d;if("borderBoxSize"in s){const c=s.borderBoxSize,h=Array.isArray(c)?c[0]:c;i=h.inlineSize,d=h.blockSize}else i=e.offsetWidth,d=e.offsetHeight;r({width:i,height:d})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else r(void 0)},[e]),t}var se="Popper",[Re,Oe]=Ee(se),[Wt,Ae]=Re(se),De=e=>{const{__scopePopper:t,children:r}=e,[o,n]=a.useState(null),[s,i]=a.useState(void 0);return l.jsx(Wt,{scope:t,anchor:o,onAnchorChange:n,placementState:s,setPlacementState:i,children:r})};De.displayName=se;var Ne="PopperAnchor",He=a.forwardRef((e,t)=>{const{__scopePopper:r,virtualRef:o,...n}=e,s=Ae(Ne,r),i=a.useRef(null),d=s.onAnchorChange,c=a.useCallback(u=>{i.current=u,u&&d(u)},[d]),h=H(t,c),p=a.useRef(null);a.useEffect(()=>{if(!o)return;const u=p.current;p.current=o.current,u!==p.current&&d(p.current)});const f=s.placementState&&le(s.placementState),m=f?.[0],g=f?.[1];return o?null:l.jsx(D.div,{"data-radix-popper-side":m,"data-radix-popper-align":g,...n,ref:h})});He.displayName=Ne;var ie="PopperContent",[Lt,Mt]=Re(ie),Fe=a.forwardRef((e,t)=>{const{__scopePopper:r,side:o="bottom",sideOffset:n=0,align:s="center",alignOffset:i=0,arrowPadding:d=0,avoidCollisions:c=!0,collisionBoundary:h=[],collisionPadding:p=0,sticky:f="partial",hideWhenDetached:m=!1,updatePositionStrategy:g="optimized",onPlaced:u,...y}=e,b=Ae(ie,r),[T,v]=a.useState(null),w=H(t,v),[E,P]=a.useState(null),F=kt(E),q=F?.width??0,j=F?.height??0,z=o+(s!=="center"?"-"+s:""),k=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},x=Array.isArray(h)?h:[h],A=x.length>0,R={padding:k,boundary:x.filter(Bt),altBoundary:A},{refs:_,floatingStyles:ue,placement:G,isPositioned:W,middlewareData:N}=at({strategy:"fixed",placement:z,whileElementsMounted:(...ee)=>ut(...ee,{animationFrame:g==="always"}),elements:{reference:b.anchor},middleware:[st({mainAxis:n+j,alignmentAxis:i}),c&&it({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?ft():void 0,...R}),c&&lt({...R}),ct({...R,apply:({elements:ee,rects:me,availableWidth:tt,availableHeight:rt})=>{const{width:nt,height:ot}=me.reference,L=ee.floating.style;L.setProperty("--radix-popper-available-width",`${tt}px`),L.setProperty("--radix-popper-available-height",`${rt}px`),L.setProperty("--radix-popper-anchor-width",`${nt}px`),L.setProperty("--radix-popper-anchor-height",`${ot}px`)}}),E&&dt({element:E,padding:d}),Ut({arrowWidth:q,arrowHeight:j}),m&&pt({strategy:"referenceHidden",...R,boundary:A?R.boundary:void 0})]}),Q=b.setPlacementState;O(()=>(Q(G),()=>{Q(void 0)}),[G,Q]);const[fe,he]=le(G),ge=ae(u);O(()=>{W&&ge?.()},[W,ge]);const Ze=N.arrow?.x,qe=N.arrow?.y,Ge=N.arrow?.centerOffset!==0,[Qe,et]=a.useState();return O(()=>{T&&et(window.getComputedStyle(T).zIndex)},[T]),l.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...ue,transform:W?ue.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Qe,"--radix-popper-transform-origin":[N.transformOrigin?.x,N.transformOrigin?.y].join(" "),...N.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:l.jsx(Lt,{scope:r,placedSide:fe,placedAlign:he,onArrowChange:P,arrowX:Ze,arrowY:qe,shouldHideArrow:Ge,children:l.jsx(D.div,{"data-side":fe,"data-align":he,...y,ref:w,style:{...y.style,animation:W?void 0:"none"}})})})});Fe.displayName=ie;var je="PopperArrow",$t={top:"bottom",right:"left",bottom:"top",left:"right"},_e=a.forwardRef(function(t,r){const{__scopePopper:o,...n}=t,s=Mt(je,o),i=$t[s.placedSide];return l.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:l.jsx(zt,{...n,ref:r,style:{...n.style,display:"block"}})})});_e.displayName=je;function Bt(e){return e!==null}var Ut=e=>({name:"transformOrigin",options:e,fn(t){const{placement:r,rects:o,middlewareData:n}=t,i=n.arrow?.centerOffset!==0,d=i?0:e.arrowWidth,c=i?0:e.arrowHeight,[h,p]=le(r),f={start:"0%",center:"50%",end:"100%"}[p],m=(n.arrow?.x??0)+d/2,g=(n.arrow?.y??0)+c/2;let u="",y="";return h==="bottom"?(u=i?f:`${m}px`,y=`${-c}px`):h==="top"?(u=i?f:`${m}px`,y=`${o.floating.height+c}px`):h==="right"?(u=`${-c}px`,y=i?f:`${g}px`):h==="left"&&(u=`${o.floating.width+c}px`,y=i?f:`${g}px`),{data:{x:u,y}}}});function le(e){const[t,r="center"]=e.split("-");return[t,r]}var Yt=De,Xt=He,Vt=Fe,Jt=_e,Kt="Portal",Ie=a.forwardRef((e,t)=>{const{container:r,...o}=e,[n,s]=a.useState(!1);O(()=>s(!0),[]);const i=r||n&&globalThis?.document?.body;return i?we.createPortal(l.jsx(D.div,{...o,ref:t}),i):null});Ie.displayName=Kt;function Zt(e,t){return a.useReducer((r,o)=>t[r][o]??r,e)}var ce=e=>{const{present:t,children:r}=e,o=qt(t),n=typeof r=="function"?r({present:o.isPresent}):a.Children.only(r),s=Gt(o.ref,Qt(n));return typeof r=="function"||o.isPresent?a.cloneElement(n,{ref:s}):null};ce.displayName="Presence";function qt(e){const[t,r]=a.useState(),o=a.useRef(null),n=a.useRef(e),s=a.useRef("none"),i=e?"mounted":"unmounted",[d,c]=Zt(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const h=$(o.current);s.current=d==="mounted"?h:"none"},[d]),O(()=>{const h=o.current,p=n.current;if(p!==e){const m=s.current,g=$(h);e?c("MOUNT"):g==="none"||h?.display==="none"?c("UNMOUNT"):c(p&&m!==g?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,c]),O(()=>{if(t){let h;const p=t.ownerDocument.defaultView??window,f=g=>{const y=$(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&y&&(c("ANIMATION_END"),!n.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",h=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},m=g=>{g.target===t&&(s.current=$(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{p.clearTimeout(h),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:a.useCallback(h=>{o.current=h?getComputedStyle(h):null,r(h)},[])}}function xe(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Gt(...e){const t=a.useRef(e);return t.current=e,a.useCallback(r=>{const o=t.current;let n=!1;const s=o.map(i=>{const d=xe(i,r);return!n&&typeof d=="function"&&(n=!0),d});if(n)return()=>{for(let i=0;i<s.length;i++){const d=s[i];typeof d=="function"?d():xe(o[i],null)}}},[])}function $(e){return e?.animationName||"none"}function Qt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var er="DismissableLayer",ne="dismissableLayer.update",tr="dismissableLayer.pointerDownOutside",rr="dismissableLayer.focusOutside",be,ze=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ke=a.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:d,onDismiss:c,...h}=e,p=a.useContext(ze),[f,m]=a.useState(null),g=f?.ownerDocument??globalThis?.document,[,u]=a.useState({}),y=H(t,m),b=Array.from(p.layers),[T]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),v=b.indexOf(T),w=f?b.indexOf(f):-1,E=p.layersWithOutsidePointerEventsDisabled.size>0,P=w>=v,F=a.useRef(!1),q=ar(x=>{const A=x.target;if(!(A instanceof Node))return;const R=[...p.branches].some(_=>_.contains(A));!P||R||(s?.(x),d?.(x),x.defaultPrevented||c?.())},{ownerDocument:g,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:F,dismissableSurfaces:p.dismissableSurfaces}),j=sr(x=>{if(o&&F.current)return;const A=x.target;[...p.branches].some(_=>_.contains(A))||(i?.(x),d?.(x),x.defaultPrevented||c?.())},g),z=f?w===b.length-1:!1,k=mt(x=>{x.key==="Escape"&&(n?.(x),!x.defaultPrevented&&c&&(x.preventDefault(),c()))});return a.useEffect(()=>{if(z)return g.addEventListener("keydown",k,{capture:!0}),()=>g.removeEventListener("keydown",k,{capture:!0})},[g,z]),a.useEffect(()=>{if(f)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(be=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(f)),p.layers.add(f),Se(),()=>{r&&(p.layersWithOutsidePointerEventsDisabled.delete(f),p.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=be))}},[f,g,r,p]),a.useEffect(()=>()=>{f&&(p.layers.delete(f),p.layersWithOutsidePointerEventsDisabled.delete(f),Se())},[f,p]),a.useEffect(()=>{const x=()=>u({});return document.addEventListener(ne,x),()=>document.removeEventListener(ne,x)},[]),l.jsx(D.div,{...h,ref:y,style:{pointerEvents:E?P?"auto":"none":void 0,...e.style},onFocusCapture:C(e.onFocusCapture,j.onFocusCapture),onBlurCapture:C(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:C(e.onPointerDownCapture,q.onPointerDownCapture)})});ke.displayName=er;var nr="DismissableLayerBranch",or=a.forwardRef((e,t)=>{const r=a.useContext(ze),o=a.useRef(null),n=H(t,o);return a.useEffect(()=>{const s=o.current;if(s)return r.branches.add(s),()=>{r.branches.delete(s)}},[r.branches]),l.jsx(D.div,{...e,ref:n})});or.displayName=nr;function ar(e,t){const{ownerDocument:r=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:n,dismissableSurfaces:s}=t,i=ae(e),d=a.useRef(!1),c=a.useRef(!1),h=a.useRef(new Map),p=a.useRef(()=>{});return a.useEffect(()=>{function f(){c.current=!1,n.current=!1,h.current.clear()}function m(){return Array.from(h.current.values()).some(Boolean)}function g(v){if(!c.current)return;const w=v.target;w instanceof Node&&[...s].some(P=>P.contains(w))||h.current.set(v.type,!0),v.type==="click"&&window.setTimeout(()=>{c.current&&p.current()},0)}function u(v){c.current&&h.current.set(v.type,!1)}const y=v=>{if(v.target&&!d.current){let w=function(){r.removeEventListener("click",p.current);const P=m();f(),P||We(tr,i,E,{discrete:!0})};const E={originalEvent:v};c.current=!0,n.current=o&&v.button===0,h.current.clear(),!o||v.button!==0?w():(r.removeEventListener("click",p.current),p.current=w,r.addEventListener("click",p.current,{once:!0}))}else r.removeEventListener("click",p.current),f();d.current=!1},b=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const v of b)r.addEventListener(v,g,!0),r.addEventListener(v,u);const T=window.setTimeout(()=>{r.addEventListener("pointerdown",y)},0);return()=>{window.clearTimeout(T),r.removeEventListener("pointerdown",y),r.removeEventListener("click",p.current);for(const v of b)r.removeEventListener(v,g,!0),r.removeEventListener(v,u)}},[r,i,o,n,s]),{onPointerDownCapture:()=>d.current=!0}}function sr(e,t=globalThis?.document){const r=ae(e),o=a.useRef(!1);return a.useEffect(()=>{const n=s=>{s.target&&!o.current&&We(rr,r,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Se(){const e=new CustomEvent(ne);document.dispatchEvent(e)}function We(e,t,r,{discrete:o}){const n=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),o?_t(n,s):n.dispatchEvent(s)}var te,J="HoverCard",[Le]=Ee(J,[Oe]),K=Oe(),[ir,Z]=Le(J),Me=e=>{const{__scopeHoverCard:t,children:r,open:o,defaultOpen:n,onOpenChange:s,openDelay:i=700,closeDelay:d=300}=e,c=K(t),h=a.useRef(0),p=a.useRef(0),f=a.useRef(!1),m=a.useRef(!1),[g,u]=bt({prop:o,defaultProp:n??!1,onChange:s,caller:J}),y=a.useCallback(()=>{clearTimeout(p.current),h.current=window.setTimeout(()=>u(!0),i)},[i,u]),b=a.useCallback(()=>{clearTimeout(h.current),!f.current&&!m.current&&(p.current=window.setTimeout(()=>u(!1),d))},[d,u]),T=a.useCallback(()=>u(!1),[u]);return a.useEffect(()=>()=>{clearTimeout(h.current),clearTimeout(p.current)},[]),l.jsx(ir,{scope:t,open:g,onOpenChange:u,onOpen:y,onClose:b,onDismiss:T,hasSelectionRef:f,isPointerDownOnContentRef:m,children:l.jsx(Yt,{...c,children:r})})};Me.displayName=J;var $e="HoverCardTrigger",Be=a.forwardRef((e,t)=>{const{__scopeHoverCard:r,...o}=e,n=Z($e,r),s=K(r);return l.jsx(Xt,{asChild:!0,...s,children:l.jsx(D.a,{"data-state":n.open?"open":"closed",...o,ref:t,onPointerEnter:C(e.onPointerEnter,X(n.onOpen)),onPointerLeave:C(e.onPointerLeave,X(n.onClose)),onFocus:C(e.onFocus,n.onOpen),onBlur:C(e.onBlur,n.onClose),onTouchStart:C(e.onTouchStart,i=>i.preventDefault())})})});Be.displayName=$e;var de="HoverCardPortal",[lr,cr]=Le(de,{forceMount:void 0}),Ue=e=>{const{__scopeHoverCard:t,forceMount:r,children:o,container:n}=e,s=Z(de,t);return l.jsx(lr,{scope:t,forceMount:r,children:l.jsx(ce,{present:r||s.open,children:l.jsx(Ie,{asChild:!0,container:n,children:o})})})};Ue.displayName=de;var Y="HoverCardContent",Ye=a.forwardRef((e,t)=>{const r=cr(Y,e.__scopeHoverCard),{forceMount:o=r.forceMount,...n}=e,s=Z(Y,e.__scopeHoverCard);return l.jsx(ce,{present:o||s.open,children:l.jsx(dr,{"data-state":s.open?"open":"closed",...n,onPointerEnter:C(e.onPointerEnter,X(s.onOpen)),onPointerLeave:C(e.onPointerLeave,X(s.onClose)),ref:t})})});Ye.displayName=Y;var dr=a.forwardRef((e,t)=>{const{__scopeHoverCard:r,onEscapeKeyDown:o,onPointerDownOutside:n,onFocusOutside:s,onInteractOutside:i,...d}=e,c=Z(Y,r),h=K(r),p=a.useRef(null),f=H(t,p),[m,g]=a.useState(!1);return a.useEffect(()=>{if(m){const u=document.body;return te=u.style.userSelect||u.style.webkitUserSelect,u.style.userSelect="none",u.style.webkitUserSelect="none",()=>{u.style.userSelect=te,u.style.webkitUserSelect=te}}},[m]),a.useEffect(()=>{if(p.current){const u=()=>{g(!1),c.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(c.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",u),()=>{document.removeEventListener("pointerup",u),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!1}}},[c.isPointerDownOnContentRef,c.hasSelectionRef]),a.useEffect(()=>{p.current&&fr(p.current).forEach(y=>y.setAttribute("tabindex","-1"))}),l.jsx(ke,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:i,onEscapeKeyDown:o,onPointerDownOutside:n,onFocusOutside:C(s,u=>{u.preventDefault()}),onDismiss:c.onDismiss,children:l.jsx(Vt,{...h,...d,onPointerDown:C(d.onPointerDown,u=>{u.currentTarget.contains(u.target)&&g(!0),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!0}),ref:f,style:{...d.style,userSelect:m?"text":void 0,WebkitUserSelect:m?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),pr="HoverCardArrow",ur=a.forwardRef((e,t)=>{const{__scopeHoverCard:r,...o}=e,n=K(r);return l.jsx(Jt,{...n,...o,ref:t})});ur.displayName=pr;function X(e){return t=>t.pointerType==="touch"?void 0:e()}function fr(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;r.nextNode();)t.push(r.currentNode);return t}var Xe=Me,Ve=Be,hr=Ue,gr=Ye;const mr=V`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yr=V`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,vr=V`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xr=V`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,br=ht(oe)`
  animation-duration: ${e=>e.theme.motion.timings[200]};
  animation-timing-function: ${e=>e.theme.motion.easings.easeInOutCubic};
  will-change: transform, opacity;

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${vr};
    }
    &[data-side='right'] {
      animation-name: ${xr};
    }
    &[data-side='bottom'] {
      animation-name: ${mr};
    }
    &[data-side='left'] {
      animation-name: ${yr};
    }
  }
`,Je=({children:e,...t})=>l.jsx(hr,{children:l.jsx(gr,{...t,asChild:!0,children:l.jsx(br,{hasRadius:!0,padding:4,width:"auto",minWidth:120,background:"neutral0",borderWidth:"1px",borderStyle:"solid",borderColor:"neutral150",shadow:"filterShadow",zIndex:"overlay",children:e})})}),pe=({trigger:e,children:t,...r})=>l.jsxs(Xe,{children:[l.jsx(Ve,{asChild:!0,children:e}),l.jsx(Je,{...r,children:t})]}),re={Root:Xe,Trigger:Ve,Content:Je};pe.__docgenInfo={description:"",methods:[],displayName:"HoverElement",props:{trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Er={title:"Components/HoverCard",component:pe,argTypes:{}},Ke=({code:e})=>{const[t,r]=a.useState(!1),{color:o}=yt();return l.jsxs("div",{style:{marginTop:"1.5rem",borderTop:`1px solid ${o("neutral200")}`,paddingTop:"1rem"},children:[l.jsx(gt,{variant:"tertiary",onClick:()=>r(!t),children:t?"Hide Code":"Show Code"}),t&&l.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:o("neutral100"),color:o("neutral800"),borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:`1px solid ${o("neutral200")}`},children:l.jsx("code",{children:e})})]})},B={render:e=>l.jsxs("div",{children:[l.jsx(S,{variant:"beta",tag:"h2",style:{marginBottom:"1.5rem"},children:"Hover over the link below (Standard Composable HoverCard):"}),l.jsx("div",{style:{padding:"2rem",display:"inline-block"},children:l.jsxs(re.Root,{children:[l.jsx(re.Trigger,{asChild:!0,children:l.jsx("a",{href:"https://github.com/strapi",target:"_blank",rel:"noreferrer",style:{color:"#4945ff",fontWeight:"bold",textDecoration:"none"},children:"@strapi"})}),l.jsx(re.Content,{sideOffset:5,children:l.jsxs(I,{gap:3,alignItems:"flex-start",style:{width:"300px"},children:[l.jsx(Te.Item,{style:{flexShrink:0},src:"https://avatars.githubusercontent.com/u/5428414?v=4",alt:"Strapi",fallback:"S"}),l.jsxs(oe,{children:[l.jsx(S,{fontWeight:"bold",tag:"div",fontSize:2,children:"Strapi"}),l.jsx(S,{textColor:"neutral600",tag:"div",fontSize:1,style:{marginTop:"2px"},children:"@strapi"}),l.jsx(S,{tag:"p",textColor:"neutral800",fontSize:2,style:{marginTop:"8px",lineHeight:"1.4"},children:"The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully customizable."}),l.jsxs(I,{gap:4,style:{marginTop:"12px"},children:[l.jsxs(I,{gap:1,children:[l.jsx(S,{fontWeight:"bold",fontSize:1,children:"0"}),l.jsx(S,{textColor:"neutral600",fontSize:1,children:"Following"})]}),l.jsxs(I,{gap:1,children:[l.jsx(S,{fontWeight:"bold",fontSize:1,children:"10.5k"}),l.jsx(S,{textColor:"neutral600",fontSize:1,children:"Followers"})]})]})]})]})})]})}),l.jsx(Ke,{code:`import { HoverCard } from 'strapi-design-extended';
import { Typography, Flex, Box, Avatar } from '@strapi/design-system';

<HoverCard.Root>
  <HoverCard.Trigger asChild>
    <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{ color: '#4945ff', fontWeight: 'bold' }}>
      @strapi
    </a>
  </HoverCard.Trigger>
  <HoverCard.Content sideOffset={5}>
    <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>
      <Avatar.Item src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />
      <Box>
        <Typography fontWeight="bold" tag="div" fontSize={2}>
          Strapi
        </Typography>
        <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>
          @strapi
        </Typography>
        <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px' }}>
          The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully customizable.
        </Typography>
        <Flex gap={4} style={{ marginTop: '12px' }}>
          <Flex gap={1}>
            <Typography fontWeight="bold" fontSize={1}>0</Typography>
            <Typography textColor="neutral600" fontSize={1}>Following</Typography>
          </Flex>
          <Flex gap={1}>
            <Typography fontWeight="bold" fontSize={1}>10.5k</Typography>
            <Typography textColor="neutral600" fontSize={1}>Followers</Typography>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </HoverCard.Content>
</HoverCard.Root>`})]})},U={render:e=>l.jsxs("div",{children:[l.jsx(S,{variant:"beta",tag:"h2",style:{marginBottom:"1.5rem"},children:"Hover over the link below (Props-driven HoverElement wrapper):"}),l.jsx("div",{style:{padding:"2rem",display:"inline-block"},children:l.jsx(pe,{...e,sideOffset:5,trigger:l.jsx("a",{href:"https://github.com/strapi",target:"_blank",rel:"noreferrer",style:{color:"#4945ff",fontWeight:"bold",textDecoration:"none"},children:"@strapi"}),children:l.jsxs(I,{gap:3,alignItems:"flex-start",style:{width:"300px"},children:[l.jsx(Te.Item,{style:{flexShrink:0},src:"https://avatars.githubusercontent.com/u/5428414?v=4",alt:"Strapi",fallback:"S"}),l.jsxs(oe,{children:[l.jsx(S,{fontWeight:"bold",tag:"div",fontSize:2,children:"Strapi"}),l.jsx(S,{textColor:"neutral600",tag:"div",fontSize:1,style:{marginTop:"2px"},children:"@strapi"}),l.jsx(S,{tag:"p",textColor:"neutral800",fontSize:2,style:{marginTop:"8px",lineHeight:"1.4"},children:"The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully customizable."})]})]})})}),l.jsx(Ke,{code:`import { HoverElement } from 'strapi-design-extended';
import { Typography, Flex, Box, Avatar } from '@strapi/design-system';

<HoverElement
  sideOffset={5}
  trigger={
    <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{ color: '#4945ff', fontWeight: 'bold' }}>
      @strapi
    </a>
  }
>
  <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>
    <Avatar.Item src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />
    <Box>
      <Typography fontWeight="bold" tag="div" fontSize={2}>
        Strapi
      </Typography>
      <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>
        @strapi
      </Typography>
      <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px' }}>
        The leading open-source headless CMS.
      </Typography>
    </Box>
  </Flex>
</HoverElement>`})]})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { HoverCard } from 'strapi-design-extended';\\nimport { Typography, Flex, Box, Avatar } from '@strapi/design-system';\\n\\n<HoverCard.Root>\\n  <HoverCard.Trigger asChild>\\n    <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{ color: '#4945ff', fontWeight: 'bold' }}>\\n      @strapi\\n    </a>\\n  </HoverCard.Trigger>\\n  <HoverCard.Content sideOffset={5}>\\n    <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>\\n      <Avatar.Item src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />\\n      <Box>\\n        <Typography fontWeight="bold" tag="div" fontSize={2}>\\n          Strapi\\n        </Typography>\\n        <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>\\n          @strapi\\n        </Typography>\\n        <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px' }}>\\n          The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully customizable.\\n        </Typography>\\n        <Flex gap={4} style={{ marginTop: '12px' }}>\\n          <Flex gap={1}>\\n            <Typography fontWeight="bold" fontSize={1}>0</Typography>\\n            <Typography textColor="neutral600" fontSize={1}>Following</Typography>\\n          </Flex>\\n          <Flex gap={1}>\\n            <Typography fontWeight="bold" fontSize={1}>10.5k</Typography>\\n            <Typography textColor="neutral600" fontSize={1}>Followers</Typography>\\n          </Flex>\\n        </Flex>\\n      </Box>\\n    </Flex>\\n  </HoverCard.Content>\\n</HoverCard.Root>\`;
    return <div>
        <Typography variant="beta" tag="h2" style={{
        marginBottom: '1.5rem'
      }}>
          Hover over the link below (Standard Composable HoverCard):
        </Typography>
        <div style={{
        padding: '2rem',
        display: 'inline-block'
      }}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{
              color: '#4945ff',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}>
                @strapi
              </a>
            </HoverCard.Trigger>
            <HoverCard.Content sideOffset={5}>
              <Flex gap={3} alignItems="flex-start" style={{
              width: '300px'
            }}>
                <Avatar.Item style={{
                flexShrink: 0
              }} src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />
                <Box>
                  <Typography fontWeight="bold" tag="div" fontSize={2}>
                    Strapi
                  </Typography>
                  <Typography textColor="neutral600" tag="div" fontSize={1} style={{
                  marginTop: '2px'
                }}>
                    @strapi
                  </Typography>
                  <Typography tag="p" textColor="neutral800" fontSize={2} style={{
                  marginTop: '8px',
                  lineHeight: '1.4'
                }}>
                    The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully
                    customizable.
                  </Typography>
                  <Flex gap={4} style={{
                  marginTop: '12px'
                }}>
                    <Flex gap={1}>
                      <Typography fontWeight="bold" fontSize={1}>
                        0
                      </Typography>
                      <Typography textColor="neutral600" fontSize={1}>
                        Following
                      </Typography>
                    </Flex>
                    <Flex gap={1}>
                      <Typography fontWeight="bold" fontSize={1}>
                        10.5k
                      </Typography>
                      <Typography textColor="neutral600" fontSize={1}>
                        Followers
                      </Typography>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <CodePreview code={code} />
      </div>;
  }
}`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { HoverElement } from 'strapi-design-extended';\\nimport { Typography, Flex, Box, Avatar } from '@strapi/design-system';\\n\\n<HoverElement\\n  sideOffset={5}\\n  trigger={\\n    <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{ color: '#4945ff', fontWeight: 'bold' }}>\\n      @strapi\\n    </a>\\n  }\\n>\\n  <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>\\n    <Avatar.Item src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />\\n    <Box>\\n      <Typography fontWeight="bold" tag="div" fontSize={2}>\\n        Strapi\\n      </Typography>\\n      <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>\\n        @strapi\\n      </Typography>\\n      <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px' }}>\\n        The leading open-source headless CMS.\\n      </Typography>\\n    </Box>\\n  </Flex>\\n</HoverElement>\`;
    return <div>
        <Typography variant="beta" tag="h2" style={{
        marginBottom: '1.5rem'
      }}>
          Hover over the link below (Props-driven HoverElement wrapper):
        </Typography>
        <div style={{
        padding: '2rem',
        display: 'inline-block'
      }}>
          <HoverElement {...args} sideOffset={5} trigger={<a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{
          color: '#4945ff',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
                @strapi
              </a>}>
            <Flex gap={3} alignItems="flex-start" style={{
            width: '300px'
          }}>
              <Avatar.Item style={{
              flexShrink: 0
            }} src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />
              <Box>
                <Typography fontWeight="bold" tag="div" fontSize={2}>
                  Strapi
                </Typography>
                <Typography textColor="neutral600" tag="div" fontSize={1} style={{
                marginTop: '2px'
              }}>
                  @strapi
                </Typography>
                <Typography tag="p" textColor="neutral800" fontSize={2} style={{
                marginTop: '8px',
                lineHeight: '1.4'
              }}>
                  The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully
                  customizable.
                </Typography>
              </Box>
            </Flex>
          </HoverElement>
        </div>
        <CodePreview code={code} />
      </div>;
  }
}`,...U.parameters?.docs?.source}}};const Pr=["Default","DirectElement"];export{B as Default,U as DirectElement,Pr as __namedExportsOrder,Er as default};
