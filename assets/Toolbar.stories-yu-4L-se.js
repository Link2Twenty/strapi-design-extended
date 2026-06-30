import{r as a,W as k,j as l,T as oe,B as je,y as Ae,R as _e,V as Le,z as te,I as Fe,C as Ge,O as Pe,K as Me,D as $e,G as He}from"./iframe-XuWH9_8x.js";import{T as Ne,a as ke,c as re}from"./index-Cl1e9PSZ.js";import{u as Oe}from"./useDesignTokens-BWc_HJiL.js";import"./preload-helper-PPVm8Dsz.js";function Q(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function Be(...e){return o=>{let t=!1;const r=e.map(n=>{const i=Q(n,o);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let n=0;n<r.length;n++){const i=r[n];typeof i=="function"?i():Q(e[n],null)}}}}function De(...e){return a.useCallback(Be(...e),e)}function Ve(e){const o=a.forwardRef((t,r)=>{let{children:n,...i}=t,s=null,c=!1;const u=[];q(n)&&typeof G=="function"&&(n=G(n._payload)),a.Children.forEach(n,h=>{if(Ye(h)){c=!0;const g=h;let T="child"in g.props?g.props.child:g.props.children;q(T)&&typeof G=="function"&&(T=G(T._payload)),s=ze(g,T),u.push(s?.props?.children)}else u.push(h)}),s?s=a.cloneElement(s,void 0,u):!c&&a.Children.count(n)===1&&a.isValidElement(n)&&(s=n);const m=s?We(s):void 0,d=De(r,m);if(!s){if(n||n===0)throw new Error(c?Xe(e):qe(e));return n}const f=Ue(i,s.props??{});return s.type!==a.Fragment&&(f.ref=r?d:m),a.cloneElement(s,f)});return o.displayName=`${e}.Slot`,o}var Ke=Symbol.for("radix.slottable"),ze=(e,o)=>{if("child"in e.props){const t=e.props.child;return a.isValidElement(t)?a.cloneElement(t,void 0,e.props.children(t.props.children)):null}return a.isValidElement(o)?o:null};function Ue(e,o){const t={...o};for(const r in o){const n=e[r],i=o[r];/^on[A-Z]/.test(r)?n&&i?t[r]=(...c)=>{const u=i(...c);return n(...c),u}:n&&(t[r]=n):r==="style"?t[r]={...n,...i}:r==="className"&&(t[r]=[n,i].filter(Boolean).join(" "))}return{...e,...t}}function We(e){let o=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=o&&"isReactWarning"in o&&o.isReactWarning;return t?e.ref:(o=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=o&&"isReactWarning"in o&&o.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function Ye(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ke}var Ze=Symbol.for("react.lazy");function q(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Ze&&"_payload"in e&&Qe(e._payload)}function Qe(e){return typeof e=="object"&&e!==null&&"then"in e}var qe=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Xe=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,G=k[" use ".trim().toString()],Je=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],eo=Je.reduce((e,o)=>{const t=Ve(`Primitive.${o}`),r=a.forwardRef((n,i)=>{const{asChild:s,...c}=n,u=s?t:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${o}`,{...e,[o]:r}},{}),oo="Separator",X="horizontal",to=["horizontal","vertical"],ne=a.forwardRef((e,o)=>{const{decorative:t,orientation:r=X,...n}=e,i=ro(r)?r:X,c=t?{role:"none"}:{"aria-orientation":i==="vertical"?i:void 0,role:"separator"};return l.jsx(eo.div,{"data-orientation":i,...c,...n,ref:o})});ne.displayName=oo;function ro(e){return to.includes(e)}var no=ne;function C(e,o,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),t===!1||!n.defaultPrevented)return o?.(n)}}function K(e,o=[]){let t=[];function r(i,s){const c=a.createContext(s);c.displayName=i+"Context";const u=t.length;t=[...t,s];const m=f=>{const{scope:h,children:g,...T}=f,x=h?.[e]?.[u]||c,p=a.useMemo(()=>T,Object.values(T));return l.jsx(x.Provider,{value:p,children:g})};m.displayName=i+"Provider";function d(f,h){const g=h?.[e]?.[u]||c,T=a.useContext(g);if(T)return T;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${i}\``)}return[m,d]}const n=()=>{const i=t.map(s=>a.createContext(s));return function(c){const u=c?.[e]||i;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return n.scopeName=e,[r,lo(n,...o)]}function lo(...e){const o=e[0];if(e.length===1)return o;const t=()=>{const r=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(i){const s=r.reduce((c,{useScope:u,scopeName:m})=>{const f=u(i)[`__scope${m}`];return{...c,...f}},{});return a.useMemo(()=>({[`__scope${o.scopeName}`]:s}),[s])}};return t.scopeName=o.scopeName,t}function J(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function ao(...e){return o=>{let t=!1;const r=e.map(n=>{const i=J(n,o);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let n=0;n<r.length;n++){const i=r[n];typeof i=="function"?i():J(e[n],null)}}}}function N(...e){return a.useCallback(ao(...e),e)}function D(e){const o=a.forwardRef((t,r)=>{let{children:n,...i}=t,s=null,c=!1;const u=[];ee(n)&&typeof P=="function"&&(n=P(n._payload)),a.Children.forEach(n,h=>{if(go(h)){c=!0;const g=h;let T="child"in g.props?g.props.child:g.props.children;ee(T)&&typeof P=="function"&&(T=P(T._payload)),s=so(g,T),u.push(s?.props?.children)}else u.push(h)}),s?s=a.cloneElement(s,void 0,u):!c&&a.Children.count(n)===1&&a.isValidElement(n)&&(s=n);const m=s?uo(s):void 0,d=N(r,m);if(!s){if(n||n===0)throw new Error(c?To(e):mo(e));return n}const f=co(i,s.props??{});return s.type!==a.Fragment&&(f.ref=r?d:m),a.cloneElement(s,f)});return o.displayName=`${e}.Slot`,o}var io=Symbol.for("radix.slottable"),so=(e,o)=>{if("child"in e.props){const t=e.props.child;return a.isValidElement(t)?a.cloneElement(t,void 0,e.props.children(t.props.children)):null}return a.isValidElement(o)?o:null};function co(e,o){const t={...o};for(const r in o){const n=e[r],i=o[r];/^on[A-Z]/.test(r)?n&&i?t[r]=(...c)=>{const u=i(...c);return n(...c),u}:n&&(t[r]=n):r==="style"?t[r]={...n,...i}:r==="className"&&(t[r]=[n,i].filter(Boolean).join(" "))}return{...e,...t}}function uo(e){let o=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=o&&"isReactWarning"in o&&o.isReactWarning;return t?e.ref:(o=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=o&&"isReactWarning"in o&&o.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function go(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===io}var po=Symbol.for("react.lazy");function ee(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===po&&"_payload"in e&&fo(e._payload)}function fo(e){return typeof e=="object"&&e!==null&&"then"in e}var mo=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,To=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,P=k[" use ".trim().toString()];function bo(e){const o=e+"CollectionProvider",[t,r]=K(o),[n,i]=t(o,{collectionRef:{current:null},itemMap:new Map}),s=x=>{const{scope:p,children:S}=x,R=a.useRef(null),v=a.useRef(new Map).current;return l.jsx(n,{scope:p,itemMap:v,collectionRef:R,children:S})};s.displayName=o;const c=e+"CollectionSlot",u=D(c),m=a.forwardRef((x,p)=>{const{scope:S,children:R}=x,v=i(c,S),I=N(p,v.collectionRef);return l.jsx(u,{ref:I,children:R})});m.displayName=c;const d=e+"CollectionItemSlot",f="data-radix-collection-item",h=D(d),g=a.forwardRef((x,p)=>{const{scope:S,children:R,...v}=x,I=a.useRef(null),E=N(p,I),j=i(d,S);return a.useEffect(()=>(j.itemMap.set(I,{ref:I,...v}),()=>{j.itemMap.delete(I)})),l.jsx(h,{[f]:"",ref:E,children:R})});g.displayName=d;function T(x){const p=i(e+"CollectionConsumer",x);return a.useCallback(()=>{const R=p.collectionRef.current;if(!R)return[];const v=Array.from(R.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((j,F)=>v.indexOf(j.ref.current)-v.indexOf(F.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:s,Slot:m,ItemSlot:g},T,r]}var le=globalThis?.document?a.useLayoutEffect:()=>{},ho=k[" useId ".trim().toString()]||(()=>{}),vo=0;function xo(e){const[o,t]=a.useState(ho());return le(()=>{t(r=>r??String(vo++))},[e]),o?`radix-${o}`:""}var Io=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],_=Io.reduce((e,o)=>{const t=D(`Primitive.${o}`),r=a.forwardRef((n,i)=>{const{asChild:s,...c}=n,u=s?t:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${o}`,{...e,[o]:r}},{});function So(e){const o=a.useRef(e);return a.useEffect(()=>{o.current=e}),a.useMemo(()=>((...t)=>o.current?.(...t)),[])}var yo=k[" useInsertionEffect ".trim().toString()]||le;function Ro({prop:e,defaultProp:o,onChange:t=()=>{},caller:r}){const[n,i,s]=wo({defaultProp:o,onChange:t}),c=e!==void 0,u=c?e:n;{const d=a.useRef(e!==void 0);a.useEffect(()=>{const f=d.current;f!==c&&console.warn(`${r} is changing from ${f?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=c},[c,r])}const m=a.useCallback(d=>{if(c){const f=Co(d)?d(e):d;f!==e&&s.current?.(f)}else i(d)},[c,e,i,s]);return[u,m]}function wo({defaultProp:e,onChange:o}){const[t,r]=a.useState(e),n=a.useRef(t),i=a.useRef(o);return yo(()=>{i.current=o},[o]),a.useEffect(()=>{n.current!==t&&(i.current?.(t),n.current=t)},[t,n]),[t,r,i]}function Co(e){return typeof e=="function"}var Eo=a.createContext(void 0);function ae(e){const o=a.useContext(Eo);return e||o||"ltr"}var B="rovingFocusGroup.onEntryFocus",jo={bubbles:!1,cancelable:!0},L="RovingFocusGroup",[V,ie,Ao]=bo(L),[_o,se]=K(L,[Ao]),[Lo,Fo]=_o(L),ce=a.forwardRef((e,o)=>l.jsx(V.Provider,{scope:e.__scopeRovingFocusGroup,children:l.jsx(V.Slot,{scope:e.__scopeRovingFocusGroup,children:l.jsx(Go,{...e,ref:o})})}));ce.displayName=L;var Go=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:n=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:u,onEntryFocus:m,preventScrollOnEntryFocus:d=!1,...f}=e,h=a.useRef(null),g=N(o,h),T=ae(i),[x,p]=Ro({prop:s,defaultProp:c??null,onChange:u,caller:L}),[S,R]=a.useState(!1),v=So(m),I=ie(t),E=a.useRef(!1),[j,F]=a.useState(0);return a.useEffect(()=>{const y=h.current;if(y)return y.addEventListener(B,v),()=>y.removeEventListener(B,v)},[v]),l.jsx(Lo,{scope:t,orientation:r,dir:T,loop:n,currentTabStopId:x,onItemFocus:a.useCallback(y=>p(y),[p]),onItemShiftTab:a.useCallback(()=>R(!0),[]),onFocusableItemAdd:a.useCallback(()=>F(y=>y+1),[]),onFocusableItemRemove:a.useCallback(()=>F(y=>y-1),[]),children:l.jsx(_.div,{tabIndex:S||j===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...e.style},onMouseDown:C(e.onMouseDown,()=>{E.current=!0}),onFocus:C(e.onFocus,y=>{const Re=!E.current;if(y.target===y.currentTarget&&Re&&!S){const Z=new CustomEvent(B,jo);if(y.currentTarget.dispatchEvent(Z),!Z.defaultPrevented){const O=I().filter(w=>w.focusable),we=O.find(w=>w.active),Ce=O.find(w=>w.id===x),Ee=[we,Ce,...O].filter(Boolean).map(w=>w.ref.current);de(Ee,d)}}E.current=!1}),onBlur:C(e.onBlur,()=>R(!1))})})}),ue="RovingFocusGroupItem",ge=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:n=!1,tabStopId:i,children:s,...c}=e,u=xo(),m=i||u,d=Fo(ue,t),f=d.currentTabStopId===m,h=ie(t),{onFocusableItemAdd:g,onFocusableItemRemove:T,currentTabStopId:x}=d;return a.useEffect(()=>{if(r)return g(),()=>T()},[r,g,T]),l.jsx(V.ItemSlot,{scope:t,id:m,focusable:r,active:n,children:l.jsx(_.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...c,ref:o,onMouseDown:C(e.onMouseDown,p=>{r?d.onItemFocus(m):p.preventDefault()}),onFocus:C(e.onFocus,()=>d.onItemFocus(m)),onKeyDown:C(e.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){d.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const S=$o(p,d.orientation,d.dir);if(S!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let v=h().filter(I=>I.focusable).map(I=>I.ref.current);if(S==="last")v.reverse();else if(S==="prev"||S==="next"){S==="prev"&&v.reverse();const I=v.indexOf(p.currentTarget);v=d.loop?Ho(v,I+1):v.slice(I+1)}setTimeout(()=>de(v))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:x!=null}):s})})});ge.displayName=ue;var Po={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Mo(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function $o(e,o,t){const r=Mo(e.key,t);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Po[r]}function de(e,o=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:o}),document.activeElement!==t))return}function Ho(e,o){return e.map((t,r)=>e[(o+r)%e.length])}var No=ce,pe=ge,z="Toolbar",[ko]=K(z,[se,re]),U=se(),fe=re(),[Oo,me]=ko(z),Te=a.forwardRef((e,o)=>{const{__scopeToolbar:t,orientation:r="horizontal",dir:n,loop:i=!0,...s}=e,c=U(t),u=ae(n);return l.jsx(Oo,{scope:t,orientation:r,dir:u,children:l.jsx(No,{asChild:!0,...c,orientation:r,dir:u,loop:i,children:l.jsx(_.div,{role:"toolbar","aria-orientation":r,dir:u,...s,ref:o})})})});Te.displayName=z;var be="ToolbarSeparator",he=a.forwardRef((e,o)=>{const{__scopeToolbar:t,...r}=e,n=me(be,t);return l.jsx(no,{orientation:n.orientation==="horizontal"?"vertical":"horizontal",...r,ref:o})});he.displayName=be;var Bo="ToolbarButton",W=a.forwardRef((e,o)=>{const{__scopeToolbar:t,...r}=e,n=U(t);return l.jsx(pe,{asChild:!0,...n,focusable:!e.disabled,children:l.jsx(_.button,{type:"button",...r,ref:o})})});W.displayName=Bo;var Do="ToolbarLink",ve=a.forwardRef((e,o)=>{const{__scopeToolbar:t,...r}=e,n=U(t);return l.jsx(pe,{asChild:!0,...n,focusable:!0,children:l.jsx(_.a,{...r,ref:o,onKeyDown:C(e.onKeyDown,i=>{i.key===" "&&i.currentTarget.click()})})})});ve.displayName=Do;var xe="ToolbarToggleGroup",Ie=a.forwardRef((e,o)=>{const{__scopeToolbar:t,...r}=e,n=me(xe,t),i=fe(t);return l.jsx(Ne,{"data-orientation":n.orientation,dir:n.dir,...i,...r,ref:o,rovingFocus:!1})});Ie.displayName=xe;var Vo="ToolbarToggleItem",Se=a.forwardRef((e,o)=>{const{__scopeToolbar:t,...r}=e,n=fe(t),i={__scopeToolbar:e.__scopeToolbar};return l.jsx(W,{asChild:!0,...i,children:l.jsx(ke,{...n,...r,ref:o})})});Se.displayName=Vo;var Ko=Te,zo=he,Uo=W,Wo=ve,Yo=Ie,Zo=Se;const Qo=({children:e,...o})=>l.jsx(Ko,{...o,asChild:!0,children:l.jsx(oe,{hasRadius:!0,background:"neutral100",padding:1,gap:1,borderColor:"neutral200",borderWidth:"1px",children:e})}),qo=({children:e,value:o,defaultValue:t,onValueChange:r,type:n,...i})=>{const s=n==="single",c=a.useMemo(()=>a.Children.toArray(e).map(g=>a.isValidElement(g)?g.props.value:void 0).find(g=>typeof g=="string"),[e]),[u,m]=a.useState(()=>{if(t!==void 0)return t;if(s)return c});a.useEffect(()=>{s&&o===void 0&&t===void 0&&!u&&c&&m(c)},[s,c,o,t,u]);const d=o!==void 0?o:u,f=g=>{s?g&&(o===void 0&&m(g),r?.(g)):(o===void 0&&m(g),r?.(g))},h=a.Children.map(e,g=>{if(a.isValidElement(g)){const T=g.props.value,x=s?d===T:Array.isArray(d)?d.includes(T):!1;return je.cloneElement(g,{active:x})}return g});return l.jsx(Yo,{asChild:!0,value:d,onValueChange:f,type:n,...i,children:l.jsx(oe,{gap:1,children:h})})},Xo=({children:e,label:o,active:t,...r})=>l.jsx(Zo,{asChild:!0,...r,children:l.jsx(Ae,{label:o,variant:t?"tertiary":"ghost",children:e})}),Jo=({className:e,...o})=>l.jsx(zo,{...o,asChild:!0,children:l.jsx(_e,{width:"1px",margin:1,background:"neutral200",flex:"0 0 1px",style:{alignSelf:"stretch"}})}),et=({children:e,...o})=>l.jsx(Wo,{asChild:!0,...o,children:l.jsx(Le,{marginTop:"auto",marginBottom:"auto",children:e})}),ot=({className:e,children:o,...t})=>l.jsx(Uo,{asChild:!0,...t,children:l.jsx(te,{children:o})}),b={Root:Qo,ToggleGroup:qo,ToggleItem:Xo,Separator:Jo,Link:et,Button:ot},st={title:"Components/Toolbar",component:b.Root},Y=({code:e})=>{const[o,t]=a.useState(!1),{color:r}=Oe();return l.jsxs("div",{style:{marginTop:"1.5rem",borderTop:`1px solid ${r("neutral200")}`,paddingTop:"1rem"},children:[l.jsx(te,{variant:"tertiary",onClick:()=>t(!o),children:o?"Hide Code":"Show Code"}),o&&l.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:r("neutral100"),color:r("neutral800"),borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:`1px solid ${r("neutral200")}`},children:l.jsx("code",{children:e})})]})},ye=window.matchMedia("(min-width: 768px)"),tt=e=>{const o=new AbortController;return ye.addEventListener("change",e,{signal:o.signal}),()=>o.abort()},M={render:e=>{const o=`import { Toolbar } from 'strapi-design-extended';
import { Bold, Italic, StrikeThrough } from '@strapi/icons';

<Toolbar.Root aria-label="Formatting options">
  <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
    <Toolbar.ToggleItem value="bold" label="Bold">
      <Bold />
    </Toolbar.ToggleItem>
    <Toolbar.ToggleItem value="italic" label="Italic">
      <Italic />
    </Toolbar.ToggleItem>
    <Toolbar.ToggleItem value="strikethrough" label="Strike through">
      <StrikeThrough />
    </Toolbar.ToggleItem>
  </Toolbar.ToggleGroup>
  <Toolbar.Separator />
  <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
    <Toolbar.ToggleItem value="left" label="Left aligned">
      <AlignLeft />
    </Toolbar.ToggleItem>
    <Toolbar.ToggleItem value="center" label="Center aligned">
      <AlignCenter />
    </Toolbar.ToggleItem>
    <Toolbar.ToggleItem value="right" label="Right aligned">
      <AlignRight />
    </Toolbar.ToggleItem>
  </Toolbar.ToggleGroup>
  <Toolbar.Separator />
  <Toolbar.Link href="#" target="_blank">
    Edited 2 hours ago
  </Toolbar.Link>
  <Toolbar.Button style={{ marginLeft: 'auto' }}>
    Share
  </Toolbar.Button>
</Toolbar.Root>`,t=a.useSyncExternalStore(tt,()=>ye.matches);return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsxs(b.Root,{"aria-label":"Formatting options",style:{width:"100%"},children:[l.jsxs(b.ToggleGroup,{type:"multiple","aria-label":"Text formatting",children:[l.jsx(b.ToggleItem,{value:"bold",label:"Bold",children:l.jsx(Me,{})}),l.jsx(b.ToggleItem,{value:"italic",label:"Italic",children:l.jsx($e,{})}),l.jsx(b.ToggleItem,{value:"strikethrough",label:"Strike through",children:l.jsx(He,{})})]}),l.jsx(b.Separator,{}),l.jsxs(b.ToggleGroup,{type:"single",defaultValue:"center","aria-label":"Text alignment",children:[l.jsx(b.ToggleItem,{value:"left",label:"Left aligned",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",...A,children:l.jsx("path",{d:"M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"})})}),l.jsx(b.ToggleItem,{value:"center",label:"Center aligned",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",...A,children:l.jsx("path",{d:"M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32"})})}),l.jsx(b.ToggleItem,{value:"right",label:"Right aligned",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",...A,children:l.jsx("path",{d:"M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"})})})]}),t&&l.jsxs(l.Fragment,{children:[l.jsx(b.Separator,{}),l.jsx(b.Link,{href:"#",target:"_blank",children:"Edited 2 hours ago"})]}),l.jsx(b.Button,{marginLeft:"auto",children:"Share"})]}),l.jsx(Y,{code:o})]})}},$={render:e=>{const[o,t]=a.useState("center");return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsx(b.Root,{...e,"aria-label":"Formatting options",children:l.jsxs(b.ToggleGroup,{type:"single",value:o,onValueChange:t,"aria-label":"Text alignment",children:[l.jsx(b.ToggleItem,{value:"left",label:"Left aligned",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",...A,children:l.jsx("path",{d:"M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"})})}),l.jsx(b.ToggleItem,{value:"center",label:"Center aligned",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",...A,children:l.jsx("path",{d:"M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32"})})}),l.jsx(b.ToggleItem,{value:"right",label:"Right aligned",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",...A,children:l.jsx("path",{d:"M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"})})})]})}),l.jsxs("div",{children:["Selected alignment: ",o]}),l.jsx(Y,{code:`import { useState } from 'react';
import { Toolbar } from 'strapi-design-extended';

function ControlledExample() {
  const [alignment, setAlignment] = useState('center');
  return (
    <Toolbar.Root aria-label="Formatting options">
      <Toolbar.ToggleGroup type="single" value={alignment} onValueChange={setAlignment} aria-label="Text alignment">
        <Toolbar.ToggleItem value="left" label="Left aligned"><AlignLeft /></Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="center" label="Center aligned"><AlignCenter /></Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="right" label="Right aligned"><AlignRight /></Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
    </Toolbar.Root>
  );
}`})]})}},H={render:e=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsxs(Fe,{variant:"pi",children:["If neither value nor defaultValue is specified on a ",l.jsx("code",{children:"single"})," ToggleGroup, it automatically selects the first item inside."]}),l.jsx(b.Root,{...e,"aria-label":"Formatting options",children:l.jsxs(b.ToggleGroup,{type:"single","aria-label":"Select first",children:[l.jsx(b.ToggleItem,{value:"first","aria-label":"First item",children:l.jsx(Ge,{})}),l.jsx(b.ToggleItem,{value:"second","aria-label":"Second item",children:l.jsx(Pe,{})})]})}),l.jsx(Y,{code:`import { Toolbar } from 'strapi-design-extended';
import { ArrowLineLeft, ArrowLineRight } from '@strapi/icons';

// No 'value' or 'defaultValue' provided on a 'single' ToggleGroup
<Toolbar.Root aria-label="Formatting options">
  <Toolbar.ToggleGroup type="single" aria-label="Select first">
    <Toolbar.ToggleItem value="first" label="First item">
      <ArrowLineLeft />
    </Toolbar.ToggleItem>
    <Toolbar.ToggleItem value="second" label="Second item">
      <ArrowLineRight />
    </Toolbar.ToggleItem>
  </Toolbar.ToggleGroup>
</Toolbar.Root>`})]})},A={width:"16",height:"16",fill:"currentColor","aria-hidden":!0,focusable:!1};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { Toolbar } from 'strapi-design-extended';\\nimport { Bold, Italic, StrikeThrough } from '@strapi/icons';\\n\\n<Toolbar.Root aria-label="Formatting options">\\n  <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">\\n    <Toolbar.ToggleItem value="bold" label="Bold">\\n      <Bold />\\n    </Toolbar.ToggleItem>\\n    <Toolbar.ToggleItem value="italic" label="Italic">\\n      <Italic />\\n    </Toolbar.ToggleItem>\\n    <Toolbar.ToggleItem value="strikethrough" label="Strike through">\\n      <StrikeThrough />\\n    </Toolbar.ToggleItem>\\n  </Toolbar.ToggleGroup>\\n  <Toolbar.Separator />\\n  <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">\\n    <Toolbar.ToggleItem value="left" label="Left aligned">\\n      <AlignLeft />\\n    </Toolbar.ToggleItem>\\n    <Toolbar.ToggleItem value="center" label="Center aligned">\\n      <AlignCenter />\\n    </Toolbar.ToggleItem>\\n    <Toolbar.ToggleItem value="right" label="Right aligned">\\n      <AlignRight />\\n    </Toolbar.ToggleItem>\\n  </Toolbar.ToggleGroup>\\n  <Toolbar.Separator />\\n  <Toolbar.Link href="#" target="_blank">\\n    Edited 2 hours ago\\n  </Toolbar.Link>\\n  <Toolbar.Button style={{ marginLeft: 'auto' }}>\\n    Share\\n  </Toolbar.Button>\\n</Toolbar.Root>\`;
    const isDesktop = useSyncExternalStore(subscribe, () => mediaQuery.matches);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Toolbar.Root aria-label="Formatting options" style={{
        width: '100%'
      }}>
          <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
            <Toolbar.ToggleItem value="bold" label="Bold">
              <Bold />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="italic" label="Italic">
              <Italic />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="strikethrough" label="Strike through">
              <StrikeThrough />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator />
          <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <Toolbar.ToggleItem value="left" label="Left aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="center" label="Center aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="right" label="Right aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          {isDesktop && <>
              <Toolbar.Separator />
              <Toolbar.Link href="#" target="_blank">
                Edited 2 hours ago
              </Toolbar.Link>
            </>}
          <Toolbar.Button marginLeft="auto">Share</Toolbar.Button>
        </Toolbar.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [alignment, setAlignment] = useState('center');
    const code = \`import { useState } from 'react';\\nimport { Toolbar } from 'strapi-design-extended';\\n\\nfunction ControlledExample() {\\n  const [alignment, setAlignment] = useState('center');\\n  return (\\n    <Toolbar.Root aria-label="Formatting options">\\n      <Toolbar.ToggleGroup type="single" value={alignment} onValueChange={setAlignment} aria-label="Text alignment">\\n        <Toolbar.ToggleItem value="left" label="Left aligned"><AlignLeft /></Toolbar.ToggleItem>\\n        <Toolbar.ToggleItem value="center" label="Center aligned"><AlignCenter /></Toolbar.ToggleItem>\\n        <Toolbar.ToggleItem value="right" label="Right aligned"><AlignRight /></Toolbar.ToggleItem>\\n      </Toolbar.ToggleGroup>\\n    </Toolbar.Root>\\n  );\\n}\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Toolbar.Root {...args} aria-label="Formatting options">
          <Toolbar.ToggleGroup type="single" value={alignment} onValueChange={setAlignment} aria-label="Text alignment">
            <Toolbar.ToggleItem value="left" label="Left aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="center" label="Center aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="right" label="Right aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
        </Toolbar.Root>
        <div>Selected alignment: {alignment}</div>
        <CodePreview code={code} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { Toolbar } from 'strapi-design-extended';\\nimport { ArrowLineLeft, ArrowLineRight } from '@strapi/icons';\\n\\n// No 'value' or 'defaultValue' provided on a 'single' ToggleGroup\\n<Toolbar.Root aria-label="Formatting options">\\n  <Toolbar.ToggleGroup type="single" aria-label="Select first">\\n    <Toolbar.ToggleItem value="first" label="First item">\\n      <ArrowLineLeft />\\n    </Toolbar.ToggleItem>\\n    <Toolbar.ToggleItem value="second" label="Second item">\\n      <ArrowLineRight />\\n    </Toolbar.ToggleItem>\\n  </Toolbar.ToggleGroup>\\n</Toolbar.Root>\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Typography variant="pi">
          If neither value nor defaultValue is specified on a <code>single</code> ToggleGroup, it automatically selects
          the first item inside.
        </Typography>
        <Toolbar.Root {...args} aria-label="Formatting options">
          <Toolbar.ToggleGroup type="single" aria-label="Select first">
            <Toolbar.ToggleItem value="first" aria-label="First item">
              <ArrowLineLeft />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="second" aria-label="Second item">
              <ArrowLineRight />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
        </Toolbar.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...H.parameters?.docs?.source}}};const ct=["Default","ControlledSingle","AutoSelectsFirstSingle"];export{H as AutoSelectsFirstSingle,$ as ControlledSingle,M as Default,ct as __namedExportsOrder,st as default};
