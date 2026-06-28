import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{B as n,Gt as r,_ as i,a,c as o,f as s,g as c,h as l,l as u,m as d,n as f,o as p,p as m,r as h,t as g}from"./iframe-BM9vcPRP.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./dist-CcL6E-Xv.js";import{r as w,t as T}from"./useDesignTokens-UWpXdrOz.js";var E,D,O,k,A,j,M,N,P,F=e((()=>{E=t(r()),C(),p(),D=n(),O=({children:e,...t})=>(0,D.jsx)(v,{...t,asChild:!0,children:(0,D.jsx)(h,{hasRadius:!0,background:`neutral100`,padding:1,gap:1,borderColor:`neutral200`,borderWidth:`1px`,children:e})}),k=({children:e,value:t,defaultValue:n,onValueChange:r,type:i,...a})=>{let o=i===`single`,s=(0,E.useMemo)(()=>E.Children.toArray(e).map(e=>(0,E.isValidElement)(e)?e.props.value:void 0).find(e=>typeof e==`string`),[e]),[c,l]=(0,E.useState)(()=>{if(n!==void 0)return n;if(o)return s});(0,E.useEffect)(()=>{o&&t===void 0&&n===void 0&&!c&&s&&l(s)},[o,s,t,n,c]);let u=t===void 0?c:t,d=e=>{o?e&&(t===void 0&&l(e),r?.(e)):(t===void 0&&l(e),r?.(e))},f=E.Children.map(e,e=>{if((0,E.isValidElement)(e)){let t=e.props.value,n=o?u===t:Array.isArray(u)?u.includes(t):!1;return E.cloneElement(e,{active:n})}return e});return(0,D.jsx)(b,{asChild:!0,value:u,onValueChange:d,type:i,...a,children:(0,D.jsx)(h,{gap:1,children:f})})},A=({children:e,label:t,active:n,...r})=>(0,D.jsx)(S,{asChild:!0,...r,children:(0,D.jsx)(o,{label:t,variant:n?`tertiary`:`ghost`,children:e})}),j=({className:e,...t})=>(0,D.jsx)(_,{...t,asChild:!0,children:(0,D.jsx)(f,{width:`1px`,margin:1,background:`neutral200`,flex:`0 0 1px`,style:{alignSelf:`stretch`}})}),M=({children:e,...t})=>(0,D.jsx)(x,{asChild:!0,...t,children:(0,D.jsx)(a,{marginTop:`auto`,marginBottom:`auto`,children:e})}),N=({className:e,children:t,...n})=>(0,D.jsx)(y,{asChild:!0,...n,children:(0,D.jsx)(u,{children:t})}),P={Root:O,ToggleGroup:k,ToggleItem:A,Separator:j,Link:M,Button:N}})),I,L,R,z,B,V,H,U,W,G,K;e((()=>{I=t(r()),F(),p(),i(),T(),L=n(),R={title:`Components/Toolbar`,component:P.Root},z=({code:e})=>{let[t,n]=(0,I.useState)(!1),{color:r}=w();return(0,L.jsxs)(`div`,{style:{marginTop:`1.5rem`,borderTop:`1px solid ${r(`neutral200`)}`,paddingTop:`1rem`},children:[(0,L.jsx)(u,{variant:`tertiary`,onClick:()=>n(!t),children:t?`Hide Code`:`Show Code`}),t&&(0,L.jsx)(`pre`,{style:{marginTop:`1rem`,padding:`1rem`,background:r(`neutral100`),color:r(`neutral800`),borderRadius:`6px`,overflowX:`auto`,fontSize:`13px`,fontFamily:`monospace`,border:`1px solid ${r(`neutral200`)}`},children:(0,L.jsx)(`code`,{children:e})})]})},B=window.matchMedia(`(min-width: 768px)`),V=e=>{let t=new AbortController;return B.addEventListener(`change`,e,{signal:t.signal}),()=>t.abort()},H={render:e=>{let t=(0,I.useSyncExternalStore)(V,()=>B.matches);return(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,L.jsxs)(P.Root,{"aria-label":`Formatting options`,style:{width:`100%`},children:[(0,L.jsxs)(P.ToggleGroup,{type:`multiple`,"aria-label":`Text formatting`,children:[(0,L.jsx)(P.ToggleItem,{value:`bold`,label:`Bold`,children:(0,L.jsx)(d,{})}),(0,L.jsx)(P.ToggleItem,{value:`italic`,label:`Italic`,children:(0,L.jsx)(s,{})}),(0,L.jsx)(P.ToggleItem,{value:`strikethrough`,label:`Strike through`,children:(0,L.jsx)(c,{})})]}),(0,L.jsx)(P.Separator,{}),(0,L.jsxs)(P.ToggleGroup,{type:`single`,defaultValue:`center`,"aria-label":`Text alignment`,children:[(0,L.jsx)(P.ToggleItem,{value:`left`,label:`Left aligned`,children:(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,...G,children:(0,L.jsx)(`path`,{d:`M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32`})})}),(0,L.jsx)(P.ToggleItem,{value:`center`,label:`Center aligned`,children:(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,...G,children:(0,L.jsx)(`path`,{d:`M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32`})})}),(0,L.jsx)(P.ToggleItem,{value:`right`,label:`Right aligned`,children:(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,...G,children:(0,L.jsx)(`path`,{d:`M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32`})})})]}),t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P.Separator,{}),(0,L.jsx)(P.Link,{href:`#`,target:`_blank`,children:`Edited 2 hours ago`})]}),(0,L.jsx)(P.Button,{marginLeft:`auto`,children:`Share`})]}),(0,L.jsx)(z,{code:`import { Toolbar } from 'strapi-design-extended';
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
</Toolbar.Root>`})]})}},U={render:e=>{let[t,n]=(0,I.useState)(`center`);return(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,L.jsx)(P.Root,{...e,"aria-label":`Formatting options`,children:(0,L.jsxs)(P.ToggleGroup,{type:`single`,value:t,onValueChange:n,"aria-label":`Text alignment`,children:[(0,L.jsx)(P.ToggleItem,{value:`left`,label:`Left aligned`,children:(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,...G,children:(0,L.jsx)(`path`,{d:`M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32`})})}),(0,L.jsx)(P.ToggleItem,{value:`center`,label:`Center aligned`,children:(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,...G,children:(0,L.jsx)(`path`,{d:`M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32`})})}),(0,L.jsx)(P.ToggleItem,{value:`right`,label:`Right aligned`,children:(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,...G,children:(0,L.jsx)(`path`,{d:`M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32`})})})]})}),(0,L.jsxs)(`div`,{children:[`Selected alignment: `,t]}),(0,L.jsx)(z,{code:`import { useState } from 'react';
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
}`})]})}},W={render:e=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,L.jsxs)(g,{variant:`pi`,children:[`If neither value nor defaultValue is specified on a `,(0,L.jsx)(`code`,{children:`single`}),` ToggleGroup, it automatically selects the first item inside.`]}),(0,L.jsx)(P.Root,{...e,"aria-label":`Formatting options`,children:(0,L.jsxs)(P.ToggleGroup,{type:`single`,"aria-label":`Select first`,children:[(0,L.jsx)(P.ToggleItem,{value:`first`,"aria-label":`First item`,children:(0,L.jsx)(m,{})}),(0,L.jsx)(P.ToggleItem,{value:`second`,"aria-label":`Second item`,children:(0,L.jsx)(l,{})})]})}),(0,L.jsx)(z,{code:`import { Toolbar } from 'strapi-design-extended';
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
</Toolbar.Root>`})]})},G={width:`16`,height:`16`,fill:`currentColor`,"aria-hidden":!0,focusable:!1},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},K=[`Default`,`ControlledSingle`,`AutoSelectsFirstSingle`]}))();export{W as AutoSelectsFirstSingle,U as ControlledSingle,H as Default,K as __namedExportsOrder,R as default};