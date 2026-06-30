import{r as d,j as e,U as O,z as x,I as j}from"./iframe-DuNcTt-v.js";import{T as R,a as b}from"./index-DyKvdNKr.js";import{u as W}from"./useDesignTokens-DV3FUd1L.js";import"./preload-helper-PPVm8Dsz.js";const V=({children:t,value:o,defaultValue:l,onChange:m,...s})=>{const a=d.useMemo(()=>d.Children.toArray(t).map(r=>d.isValidElement(r)?r.props.value:void 0).find(r=>typeof r=="string"),[t]),[C,S]=d.useState(()=>l!==void 0?l:a??"");d.useEffect(()=>{o===void 0&&l===void 0&&!C&&a&&S(a)},[a,o,l,C]);const v=o!==void 0?o:C,h=r=>{r&&(o===void 0&&S(r),m?.(r))},I=d.Children.map(t,r=>{if(d.isValidElement(r)){const f=r.props.value,y=v===f;return d.cloneElement(r,{active:y})}return r});return e.jsx(R,{asChild:!0,type:"single",...s,onValueChange:h,value:v,children:e.jsx(O.Root,{background:"neutral100",borderColor:"neutral200",borderWidth:"1px",gap:1,gridCols:I?.length??0,hasRadius:!0,padding:1,children:I})})},A=({active:t,children:o,...l})=>e.jsx(b,{asChild:!0,...l,children:e.jsx(x,{variant:t?"tertiary":"ghost",style:t?{pointerEvents:"none"}:void 0,children:o})}),n={Root:V,Item:A},F={title:"Components/SegmentedControl",component:n.Root,argTypes:{onChange:{action:"onChange"}}},p=({code:t})=>{const[o,l]=d.useState(!1),{color:m}=W();return e.jsxs("div",{style:{marginTop:"1.5rem",borderTop:`1px solid ${m("neutral200")}`,paddingTop:"1rem"},children:[e.jsx(x,{variant:"tertiary",onClick:()=>l(!o),children:o?"Hide Code":"Show Code"}),o&&e.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:m("neutral100"),color:m("neutral800"),borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:`1px solid ${m("neutral200")}`},children:e.jsx("code",{children:t})})]})},i={render:t=>e.jsxs("div",{children:[e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Option 1"}),e.jsx(n.Item,{value:"2",children:"Option 2"}),e.jsx(n.Item,{value:"3",children:"Option 3"})]}),e.jsx(p,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},g={render:t=>{const[o,l]=d.useState("2");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(n.Root,{...t,value:o,onChange:s=>{l(s),t.onChange?.(s)},style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Option 1"}),e.jsx(n.Item,{value:"2",children:"Option 2"}),e.jsx(n.Item,{value:"3",children:"Option 3"})]}),e.jsxs("div",{children:["Selected value: ",o]}),e.jsx(p,{code:`import { useState } from 'react';
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
}`})]})}},u={render:t=>e.jsxs("div",{children:[e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"1",children:"Active Option"}),e.jsx(n.Item,{disabled:!0,value:"2",children:"Disabled Option"}),e.jsx(n.Item,{value:"3",children:"Another Option"})]}),e.jsx(p,{code:`import { SegmentedControl } from 'strapi-design-extended';

<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
</SegmentedControl.Root>`})]})},c={render:t=>e.jsxs("div",{children:[e.jsx(j,{variant:"pi",style:{display:"block",marginBottom:"1rem"},children:"If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, “first”)."}),e.jsxs(n.Root,{...t,style:{maxWidth:"550px"},children:[e.jsx(n.Item,{value:"first",children:"First Item"}),e.jsx(n.Item,{value:"second",children:"Second Item"})]}),e.jsx(p,{code:`import { SegmentedControl } from 'strapi-design-extended';

// No 'value' or 'defaultValue' provided
<SegmentedControl.Root style={{ maxWidth: '550px' }}>
  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
</SegmentedControl.Root>`})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const k=["Default","Controlled","WithDisabled","AutoSelectsFirst"];export{c as AutoSelectsFirst,g as Controlled,i as Default,u as WithDisabled,k as __namedExportsOrder,F as default};
