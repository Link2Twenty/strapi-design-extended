import{r as s,j as e,I as V,z as E}from"./iframe-CllKucp9.js";import{u as F}from"./useDesignTokens-DUjSYEOC.js";import{c as k}from"./styles-CSqyiJnQ.js";import{T as z,a as q}from"./index-CDfwgoTt.js";import"./preload-helper-C1FmrZbK.js";const B={"segmented-control":"_segmented-control_1smvi_1","segmented-control__item":"_segmented-control__item_1smvi_10"},A=k(B),G=({className:t,children:n,value:r,defaultValue:m,onChange:d,style:i})=>{F();const a=s.useMemo(()=>s.Children.toArray(n).map(l=>s.isValidElement(l)?l.props.value:void 0).find(l=>typeof l=="string"),[n]),[C,v]=s.useState(()=>m!==void 0?m:a??"");s.useEffect(()=>{r===void 0&&m===void 0&&!C&&a&&v(a)},[a,r,m,C]);const D=r!==void 0?r:C,w=l=>{l&&(r===void 0&&v(l),d==null||d(l))};return e.jsx(z,{value:D,className:A("segmented-control")+(t?` ${t}`:""),style:i,type:"single",onValueChange:w,children:n})},N=({className:t,value:n,children:r,style:m,disabled:d})=>e.jsx(q,{disabled:d,className:A("segmented-control__item")+(t?` ${t}`:""),value:n,style:m,children:e.jsx(V,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:d?"neutral400":"neutral600",children:r})}),o={Root:G,Item:N},X={title:"Components/SegmentedControl",component:o.Root,argTypes:{onChange:{action:"onChange"}}},S=({code:t})=>{const[n,r]=s.useState(!1);return e.jsxs("div",{style:{marginTop:"1.5rem",borderTop:"1px solid #eee",paddingTop:"1rem"},children:[e.jsx(E,{variant:"tertiary",onClick:()=>r(!n),children:n?"Hide Code":"Show Code"}),n&&e.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:"#f6f8fa",borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:"1px solid #e1e4e8"},children:e.jsx("code",{children:t})})]})},c={render:t=>e.jsxs("div",{children:[e.jsxs(o.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(o.Item,{value:"1",children:"Option 1"}),e.jsx(o.Item,{value:"2",children:"Option 2"}),e.jsx(o.Item,{value:"3",children:"Option 3"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},g={render:t=>{const[n,r]=s.useState("2");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(o.Root,{...t,value:n,onChange:d=>{var i;r(d),(i=t.onChange)==null||i.call(t,d)},style:{maxWidth:"550px"},children:[e.jsx(o.Item,{value:"1",children:"Option 1"}),e.jsx(o.Item,{value:"2",children:"Option 2"}),e.jsx(o.Item,{value:"3",children:"Option 3"})]}),e.jsxs("div",{children:["Selected value: ",n]}),e.jsx(S,{code:`import { useState } from 'react';
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
}`})]})}},u={render:t=>e.jsxs("div",{children:[e.jsxs(o.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(o.Item,{value:"1",children:"Active Option"}),e.jsx(o.Item,{disabled:!0,value:"2",children:"Disabled Option"}),e.jsx(o.Item,{value:"3",children:"Another Option"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},p={render:t=>e.jsxs("div",{children:[e.jsx(V,{variant:"pi",style:{display:"block",marginBottom:"1rem"},children:"If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, “first”)."}),e.jsxs(o.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(o.Item,{value:"first",children:"First Item"}),e.jsx(o.Item,{value:"second",children:"Second Item"})]}),e.jsx(S,{code:`import { SegmentedControl } from 'strapi-design-extended';

// No 'value' or 'defaultValue' provided
<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
</SegmentedControl.Root>`})]})};var I,x,h;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,y,O;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(O=(y=g.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var j,R,W;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var b,_,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(_=p.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const J=["Default","Controlled","WithDisabled","AutoSelectsFirst"];export{p as AutoSelectsFirst,g as Controlled,c as Default,u as WithDisabled,J as __namedExportsOrder,X as default};
