import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{B as n,Gt as r,l as i,n as a,o,r as s,t as c}from"./iframe-BM9vcPRP.js";import{f as l,h as u,m as d,p as f,t as p}from"./dist-CcL6E-Xv.js";import{r as m,t as h}from"./useDesignTokens-UWpXdrOz.js";function g({className:e,defaultValue:t,label:n,min:r=0,max:i=100,onValueChange:o,step:c=1,style:p,value:m}){let h=m||t||[r];return(0,_.jsx)(l,{asChild:!0,className:e,value:m,defaultValue:h,onValueChange:o,min:r,max:i,step:c,style:p,children:(0,_.jsxs)(s,{position:`relative`,alignItems:`center`,justifyContent:`center`,width:`200px`,height:`2rem`,children:[(0,_.jsx)(u,{asChild:!0,children:(0,_.jsx)(a,{position:`relative`,flex:`1 0 0`,height:`1rem`,background:`neutral200`,borderRadius:1,children:(0,_.jsx)(f,{asChild:!0,children:(0,_.jsx)(a,{position:`absolute`,background:`primary600`,borderRadius:1,height:`100%`})})})}),h.map((e,t)=>(0,_.jsx)(d,{"aria-label":n,asChild:!0,children:(0,_.jsx)(a,{tag:`span`,display:`block`,width:`1rem`,height:`2rem`,background:`neutral0`,borderWidth:`1px`,borderColor:`neutral500`,borderRadius:1,style:{outlineOffset:`-1px`,touchAction:`none`},cursor:`pointer`})},t))]})})}var _,v=e((()=>{p(),o(),_=n(),g.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{value:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},defaultValue:{required:!1,tsType:{name:`union`,raw:`[number] | [number, number]`,elements:[{name:`tuple`,raw:`[number]`,elements:[{name:`number`}]},{name:`tuple`,raw:`[number, number]`,elements:[{name:`number`},{name:`number`}]}]},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},name:`value`}],return:{name:`void`}}},description:``},min:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},label:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`HTMLElement['className']`,raw:`HTMLElement['className']`},description:``}}}})),y,b,x,S,C,w,T,E,D;e((()=>{y=t(r()),v(),o(),h(),b=n(),x={title:`Components/Slider`,component:g,argTypes:{onValueChange:{action:`onValueChange`}}},S=({code:e})=>{let[t,n]=(0,y.useState)(!1),{color:r}=m();return(0,b.jsxs)(`div`,{style:{marginTop:`1.5rem`,borderTop:`1px solid ${r(`neutral200`)}`,paddingTop:`1rem`},children:[(0,b.jsx)(i,{variant:`tertiary`,onClick:()=>n(!t),children:t?`Hide Code`:`Show Code`}),t&&(0,b.jsx)(`pre`,{style:{marginTop:`1rem`,padding:`1rem`,background:r(`neutral100`),color:r(`neutral800`),borderRadius:`6px`,overflowX:`auto`,fontSize:`13px`,fontFamily:`monospace`,border:`1px solid ${r(`neutral200`)}`},children:(0,b.jsx)(`code`,{children:e})})]})},C={render:e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsx)(g,{...e,defaultValue:[20],label:`Slider`,style:{width:`550px`,maxWidth:`100%`}}),(0,b.jsx)(S,{code:`import { Slider } from 'strapi-design-extended';

<Slider defaultValue={[20]} label="Slider" style={{ width: '550px' }} />`})]})},w={render:e=>{let[t,n]=(0,y.useState)([40]);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsx)(g,{...e,value:t,onValueChange:t=>{n(t),e.onValueChange?.(t)},style:{width:`550px`,maxWidth:`100%`},label:`Controlled Slider`}),(0,b.jsxs)(`div`,{children:[`Value: `,t[0]]}),(0,b.jsx)(S,{code:`import { useState } from 'react';
import { Slider } from 'strapi-design-extended';

function ControlledExample() {
  const [value, setValue] = useState<number[]>([40]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Slider
        value={value}
        onValueChange={setValue}
        style={{ width: '550px' }}
        label="Controlled Slider"
      />
      <div>Value: {value[0]}</div>
    </div>
  );
}`})]})}},T={render:e=>{let[t,n]=(0,y.useState)([20,80]);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsx)(g,{...e,value:t,onValueChange:t=>{n(t),e.onValueChange?.(t)},style:{width:`550px`,maxWidth:`100%`},label:`Range Slider`}),(0,b.jsxs)(`div`,{children:[`Selected Range: `,t[0],` - `,t[1]]}),(0,b.jsx)(S,{code:`import { useState } from 'react';
import { Slider } from 'strapi-design-extended';

function RangeExample() {
  const [value, setValue] = useState<number[]>([20, 80]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Slider
        value={value}
        onValueChange={setValue}
        style={{ width: '550px' }}
        label="Range Slider"
      />
      <div>Selected Range: {value[0]} - {value[1]}</div>
    </div>
  );
}`})]})}},E={render:e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsx)(c,{variant:`pi`,style:{display:`block`},children:`This slider has custom properties applied: min: 0, max: 100, and step: 10.`}),(0,b.jsx)(g,{...e,defaultValue:[50],step:10,min:0,max:100,label:`Custom Step Slider`,style:{width:`550px`,maxWidth:`100%`}}),(0,b.jsx)(S,{code:`import { Slider } from 'strapi-design-extended';

<Slider defaultValue={[50]} step={10} min={0} max={100} label="Custom Step Slider" style={{ width: '550px' }} />`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { Slider } from 'strapi-design-extended';\\n\\n<Slider defaultValue={[20]} label="Slider" style={{ width: '550px' }} />\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Slider {...args} defaultValue={[20]} label="Slider" style={{
        width: '550px',
        maxWidth: '100%'
      }} />
        <CodePreview code={code} />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number[]>([40]);
    const code = \`import { useState } from 'react';\\nimport { Slider } from 'strapi-design-extended';\\n\\nfunction ControlledExample() {\\n  const [value, setValue] = useState<number[]>([40]);\\n  return (\\n    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>\\n      <Slider\\n        value={value}\\n        onValueChange={setValue}\\n        style={{ width: '550px' }}\\n        label="Controlled Slider"\\n      />\\n      <div>Value: {value[0]}</div>\\n    </div>\\n  );\\n}\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Slider {...args} value={value} onValueChange={val => {
        setValue(val);
        args.onValueChange?.(val);
      }} style={{
        width: '550px',
        maxWidth: '100%'
      }} label="Controlled Slider" />
        <div>Value: {value[0]}</div>
        <CodePreview code={code} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number[]>([20, 80]);
    const code = \`import { useState } from 'react';\\nimport { Slider } from 'strapi-design-extended';\\n\\nfunction RangeExample() {\\n  const [value, setValue] = useState<number[]>([20, 80]);\\n  return (\\n    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>\\n      <Slider\\n        value={value}\\n        onValueChange={setValue}\\n        style={{ width: '550px' }}\\n        label="Range Slider"\\n      />\\n      <div>Selected Range: {value[0]} - {value[1]}</div>\\n    </div>\\n  );\\n}\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Slider {...args} value={value} onValueChange={val => {
        setValue(val);
        args.onValueChange?.(val);
      }} style={{
        width: '550px',
        maxWidth: '100%'
      }} label="Range Slider" />
        <div>
          Selected Range: {value[0]} - {value[1]}
        </div>
        <CodePreview code={code} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { Slider } from 'strapi-design-extended';\\n\\n<Slider defaultValue={[50]} step={10} min={0} max={100} label="Custom Step Slider" style={{ width: '550px' }} />\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Typography variant="pi" style={{
        display: 'block'
      }}>
          This slider has custom properties applied: min: 0, max: 100, and step: 10.
        </Typography>
        <Slider {...args} defaultValue={[50]} step={10} min={0} max={100} label="Custom Step Slider" style={{
        width: '550px',
        maxWidth: '100%'
      }} />
        <CodePreview code={code} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Controlled`,`Range`,`CustomStep`]}))();export{w as Controlled,E as CustomStep,C as Default,T as Range,D as __namedExportsOrder,x as default};