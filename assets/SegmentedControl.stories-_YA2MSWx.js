import{r as l,j as e,U as k,z as E,I as z}from"./iframe-Cah8PA67.js";import{T as q,a as B}from"./index-JXAoLku_.js";import"./preload-helper-C1FmrZbK.js";const G=({children:t,value:o,defaultValue:d,onChange:s,...i})=>{const m=l.useMemo(()=>l.Children.toArray(t).map(r=>l.isValidElement(r)?r.props.value:void 0).find(r=>typeof r=="string"),[t]),[C,v]=l.useState(()=>d!==void 0?d:m??"");l.useEffect(()=>{o===void 0&&d===void 0&&!C&&m&&v(m)},[m,o,d,C]);const I=o!==void 0?o:C,T=r=>{r&&(o===void 0&&v(r),s==null||s(r))},a=l.Children.map(t,r=>{if(l.isValidElement(r)){const w=r.props.value,F=I===w;return l.cloneElement(r,{active:F})}return r});return e.jsx(q,{asChild:!0,type:"single",...i,onValueChange:T,value:I,children:e.jsx(k.Root,{background:"neutral100",borderColor:"neutral200",borderWidth:"1px",gap:1,gridCols:(a==null?void 0:a.length)??0,hasRadius:!0,padding:1,children:a})})},N=({active:t,children:o,...d})=>e.jsx(B,{asChild:!0,...d,children:e.jsx(E,{variant:t?"tertiary":"ghost",style:t?{pointerEvents:"none"}:void 0,children:o})}),n={Root:G,Item:N},L={title:"Components/SegmentedControl",component:n.Root,argTypes:{onChange:{action:"onChange"}}},S=({code:t})=>{const[o,d]=l.useState(!1);return e.jsxs("div",{style:{marginTop:"1.5rem",borderTop:"1px solid #eee",paddingTop:"1rem"},children:[e.jsx(E,{variant:"tertiary",onClick:()=>d(!o),children:o?"Hide Code":"Show Code"}),o&&e.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:"#f6f8fa",borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:"1px solid #e1e4e8"},children:e.jsx("code",{children:t})})]})},g={render:t=>e.jsxs("div",{children:[e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Option 1"}),e.jsx(n.Item,{value:"2",children:"Option 2"}),e.jsx(n.Item,{value:"3",children:"Option 3"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},c={render:t=>{const[o,d]=l.useState("2");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(n.Root,{...t,value:o,onChange:i=>{var m;d(i),(m=t.onChange)==null||m.call(t,i)},style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Option 1"}),e.jsx(n.Item,{value:"2",children:"Option 2"}),e.jsx(n.Item,{value:"3",children:"Option 3"})]}),e.jsxs("div",{children:["Selected value: ",o]}),e.jsx(S,{code:`import { useState } from 'react';
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
}`})]})}},u={render:t=>e.jsxs("div",{children:[e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Active Option"}),e.jsx(n.Item,{disabled:!0,value:"2",children:"Disabled Option"}),e.jsx(n.Item,{value:"3",children:"Another Option"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},p={render:t=>e.jsxs("div",{children:[e.jsx(z,{variant:"pi",style:{display:"block",marginBottom:"1rem"},children:"If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, “first”)."}),e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"first",children:"First Item"}),e.jsx(n.Item,{value:"second",children:"Second Item"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

// No 'value' or 'defaultValue' provided
<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
</SegmentedControl.Root>`})]})};var x,h,f;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(h=g.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,O,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var R,b,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { SegmentedControl } from 'strapi-design-extended';\\n\\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\\n  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>\\n  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>\\n  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>\\n</SegmentedControl.Root>\`;
    return <div>
        <SegmentedControl.Root {...args} style={{
        maxWidth: '550px'
      }}>
          <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
          <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...(W=(b=u.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var V,A,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { SegmentedControl } from 'strapi-design-extended';\\n\\n// No 'value' or 'defaultValue' provided\\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\\n  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>\\n  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>\\n</SegmentedControl.Root>\`;
    return <div>
        <Typography variant="pi" style={{
        display: 'block',
        marginBottom: '1rem'
      }}>
          If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, &ldquo;first&rdquo;).
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
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const M=["Default","Controlled","WithDisabled","AutoSelectsFirst"];export{p as AutoSelectsFirst,c as Controlled,g as Default,u as WithDisabled,M as __namedExportsOrder,L as default};
