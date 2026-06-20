import{r as d,j as e,U as k,z as T,I as z}from"./iframe-iGqZKvCd.js";import{T as q,a as B}from"./index-CUSpdH2u.js";import{u as G}from"./useDesignTokens-D_IKPsbb.js";import"./preload-helper-C1FmrZbK.js";const N=({children:t,value:o,defaultValue:l,onChange:m,...i})=>{const s=d.useMemo(()=>d.Children.toArray(t).map(r=>d.isValidElement(r)?r.props.value:void 0).find(r=>typeof r=="string"),[t]),[C,v]=d.useState(()=>l!==void 0?l:s??"");d.useEffect(()=>{o===void 0&&l===void 0&&!C&&s&&v(s)},[s,o,l,C]);const I=o!==void 0?o:C,E=r=>{r&&(o===void 0&&v(r),m==null||m(r))},a=d.Children.map(t,r=>{if(d.isValidElement(r)){const w=r.props.value,F=I===w;return d.cloneElement(r,{active:F})}return r});return e.jsx(q,{asChild:!0,type:"single",...i,onValueChange:E,value:I,children:e.jsx(k.Root,{background:"neutral100",borderColor:"neutral200",borderWidth:"1px",gap:1,gridCols:(a==null?void 0:a.length)??0,hasRadius:!0,padding:1,children:a})})},U=({active:t,children:o,...l})=>e.jsx(B,{asChild:!0,...l,children:e.jsx(T,{variant:t?"tertiary":"ghost",style:t?{pointerEvents:"none"}:void 0,children:o})}),n={Root:N,Item:U},M={title:"Components/SegmentedControl",component:n.Root,argTypes:{onChange:{action:"onChange"}}},S=({code:t})=>{const[o,l]=d.useState(!1),{color:m}=G();return e.jsxs("div",{style:{marginTop:"1.5rem",borderTop:`1px solid ${m("neutral200")}`,paddingTop:"1rem"},children:[e.jsx(T,{variant:"tertiary",onClick:()=>l(!o),children:o?"Hide Code":"Show Code"}),o&&e.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:m("neutral100"),color:m("neutral800"),borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:`1px solid ${m("neutral200")}`},children:e.jsx("code",{children:t})})]})},u={render:t=>e.jsxs("div",{children:[e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Option 1"}),e.jsx(n.Item,{value:"2",children:"Option 2"}),e.jsx(n.Item,{value:"3",children:"Option 3"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},g={render:t=>{const[o,l]=d.useState("2");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(n.Root,{...t,value:o,onChange:i=>{var s;l(i),(s=t.onChange)==null||s.call(t,i)},style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Option 1"}),e.jsx(n.Item,{value:"2",children:"Option 2"}),e.jsx(n.Item,{value:"3",children:"Option 3"})]}),e.jsxs("div",{children:["Selected value: ",o]}),e.jsx(S,{code:`import { useState } from 'react';
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
}`})]})}},c={render:t=>e.jsxs("div",{children:[e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Active Option"}),e.jsx(n.Item,{disabled:!0,value:"2",children:"Disabled Option"}),e.jsx(n.Item,{value:"3",children:"Another Option"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},p={render:t=>e.jsxs("div",{children:[e.jsx(z,{variant:"pi",style:{display:"block",marginBottom:"1rem"},children:"If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, “first”)."}),e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"first",children:"First Item"}),e.jsx(n.Item,{value:"second",children:"Second Item"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

// No 'value' or 'defaultValue' provided
<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
</SegmentedControl.Root>`})]})};var x,h,f;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(h=u.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,O,j;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(O=g.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var R,b,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(b=c.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var V,A,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const P=["Default","Controlled","WithDisabled","AutoSelectsFirst"];export{p as AutoSelectsFirst,g as Controlled,u as Default,c as WithDisabled,P as __namedExportsOrder,M as default};
