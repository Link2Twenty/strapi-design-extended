import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{B as n,Gt as r,i,l as a,o,t as s}from"./iframe-BM9vcPRP.js";import{l as c,t as l,u}from"./dist-CcL6E-Xv.js";import{r as d,t as f}from"./useDesignTokens-UWpXdrOz.js";var p,m,h,g,_,v=e((()=>{p=t(r()),l(),o(),m=n(),h=({children:e,value:t,defaultValue:n,onChange:r,...a})=>{let o=(0,p.useMemo)(()=>p.Children.toArray(e).map(e=>(0,p.isValidElement)(e)?e.props.value:void 0).find(e=>typeof e==`string`),[e]),[s,l]=(0,p.useState)(()=>n===void 0?o??``:n);(0,p.useEffect)(()=>{t===void 0&&n===void 0&&!s&&o&&l(o)},[o,t,n,s]);let u=t===void 0?s:t,d=e=>{e&&(t===void 0&&l(e),r?.(e))},f=p.Children.map(e,e=>(0,p.isValidElement)(e)?(0,p.cloneElement)(e,{active:u===e.props.value}):e);return(0,m.jsx)(c,{asChild:!0,type:`single`,...a,onValueChange:d,value:u,children:(0,m.jsx)(i.Root,{background:`neutral100`,borderColor:`neutral200`,borderWidth:`1px`,gap:1,gridCols:f?.length??0,hasRadius:!0,padding:1,children:f})})},g=({active:e,children:t,...n})=>(0,m.jsx)(u,{asChild:!0,...n,children:(0,m.jsx)(a,{variant:e?`tertiary`:`ghost`,style:e?{pointerEvents:`none`}:void 0,children:t})}),_={Root:h,Item:g}})),y,b,x,S,C,w,T,E,D;e((()=>{y=t(r()),v(),o(),f(),b=n(),x={title:`Components/SegmentedControl`,component:_.Root,argTypes:{onChange:{action:`onChange`}}},S=({code:e})=>{let[t,n]=(0,y.useState)(!1),{color:r}=d();return(0,b.jsxs)(`div`,{style:{marginTop:`1.5rem`,borderTop:`1px solid ${r(`neutral200`)}`,paddingTop:`1rem`},children:[(0,b.jsx)(a,{variant:`tertiary`,onClick:()=>n(!t),children:t?`Hide Code`:`Show Code`}),t&&(0,b.jsx)(`pre`,{style:{marginTop:`1rem`,padding:`1rem`,background:r(`neutral100`),color:r(`neutral800`),borderRadius:`6px`,overflowX:`auto`,fontSize:`13px`,fontFamily:`monospace`,border:`1px solid ${r(`neutral200`)}`},children:(0,b.jsx)(`code`,{children:e})})]})},C={render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(_.Root,{...e,style:{maxWidth:`550px`},children:[(0,b.jsx)(_.Item,{value:`1`,children:`Option 1`}),(0,b.jsx)(_.Item,{value:`2`,children:`Option 2`}),(0,b.jsx)(_.Item,{value:`3`,children:`Option 3`})]}),(0,b.jsx)(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},w={render:e=>{let[t,n]=(0,y.useState)(`2`);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsxs)(_.Root,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)},style:{maxWidth:`550px`},children:[(0,b.jsx)(_.Item,{value:`1`,children:`Option 1`}),(0,b.jsx)(_.Item,{value:`2`,children:`Option 2`}),(0,b.jsx)(_.Item,{value:`3`,children:`Option 3`})]}),(0,b.jsxs)(`div`,{children:[`Selected value: `,t]}),(0,b.jsx)(S,{code:`import { useState } from 'react';
import { SegmentedControl } from 'strapi-design-extended';

function ControlledExample() {
  const [value, setValue] = useState('2');
  return (
    <SegmentedControl.Root value={value} onChange={setValue} style={{ maxWidth: '550px' }}>
      <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
      <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
      <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
    </SegmentedControl.Root>
    <div>Selected value: {value}</div>
  );
}`})]})}},T={render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(_.Root,{...e,style:{maxWidth:`550px`},children:[(0,b.jsx)(_.Item,{value:`1`,children:`Active Option`}),(0,b.jsx)(_.Item,{disabled:!0,value:`2`,children:`Disabled Option`}),(0,b.jsx)(_.Item,{value:`3`,children:`Another Option`})]}),(0,b.jsx)(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},E={render:e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(s,{variant:`pi`,style:{display:`block`,marginBottom:`1rem`},children:`If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, “first”).`}),(0,b.jsxs)(_.Root,{...e,style:{maxWidth:`550px`},children:[(0,b.jsx)(_.Item,{value:`first`,children:`First Item`}),(0,b.jsx)(_.Item,{value:`second`,children:`Second Item`})]}),(0,b.jsx)(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

// No 'value' or 'defaultValue' provided
<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { SegmentedControl } from 'strapi-design-extended';\\n\\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\\n  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>\\n  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>\\n  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>\\n</SegmentedControl.Root>\`;
    return <div>
        <SegmentedControl.Root {...args} style={{
        maxWidth: '550px'
      }}>
          <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
          <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('2');
    const code = \`import { useState } from 'react';\\nimport { SegmentedControl } from 'strapi-design-extended';\\n\\nfunction ControlledExample() {\\n  const [value, setValue] = useState('2');\\n  return (\\n    <SegmentedControl.Root value={value} onChange={setValue} style={{ maxWidth: '550px' }}>\\n      <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>\\n      <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>\\n      <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>\\n    </SegmentedControl.Root>\\n    <div>Selected value: {value}</div>\\n  );\\n}\`;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <SegmentedControl.Root {...args} value={value} onChange={val => {
        setValue(val);
        args.onChange?.(val);
      }} style={{
        maxWidth: '550px'
      }}>
          <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
          <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
        </SegmentedControl.Root>
        <div>Selected value: {value}</div>
        <CodePreview code={code} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { SegmentedControl } from 'strapi-design-extended';\\n\\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\\n  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>\\n  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>\\n  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>\\n</SegmentedControl.Root>\`;
    return <div>
        <SegmentedControl.Root {...args} style={{
        maxWidth: '550px'
      }}>
          <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
          <SegmentedControl.Item disabled value="2">
            Disabled Option
          </SegmentedControl.Item>
          <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { SegmentedControl } from 'strapi-design-extended';\\n\\n// No 'value' or 'defaultValue' provided\\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\\n  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>\\n  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>\\n</SegmentedControl.Root>\`;
    return <div>
        <Typography variant="pi" style={{
        display: 'block',
        marginBottom: '1rem'
      }}>
          If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in
          this case, &ldquo;first&rdquo;).
        </Typography>
        <SegmentedControl.Root {...args} style={{
        maxWidth: '550px'
      }}>
          <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
          <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Controlled`,`WithDisabled`,`AutoSelectsFirst`]}))();export{E as AutoSelectsFirst,w as Controlled,C as Default,T as WithDisabled,D as __namedExportsOrder,x as default};