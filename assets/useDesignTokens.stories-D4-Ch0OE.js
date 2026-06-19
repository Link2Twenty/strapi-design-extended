import{j as e,I as s,r as c,z as p}from"./iframe-D1Mq1i-M.js";import{u as m}from"./useDesignTokens-BXKcpHEd.js";import"./preload-helper-C1FmrZbK.js";const g=({code:r})=>{const[o,n]=c.useState(!1);return e.jsxs("div",{style:{marginTop:"1.5rem",borderTop:"1px solid #eee",paddingTop:"1rem"},children:[e.jsx(p,{variant:"tertiary",onClick:()=>n(!o),children:o?"Hide Code":"Show Code"}),o&&e.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:"#f6f8fa",borderRadius:"6px",overflowX:"auto",fontSize:"13px",fontFamily:"monospace",border:"1px solid #e1e4e8"},children:e.jsx("code",{children:r})})]})},u=()=>{const r=m();if(!r||!r.theme)return e.jsx(s,{children:"Loading design system context styled-theme..."});const o=String(r.color("danger500")),n=String(r.color("success600")),l=String(r.space("4"));return e.jsxs("div",{style:{padding:"1rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{variant:"beta",children:"useDesignTokens API"}),e.jsx(s,{variant:"pi",children:"This renders styled-components tokens retrieved dynamically, while simultaneously registering high-performance CSS custom property variables on `document.head` (e.g. `--strapi-colors-neutral0`)."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsxs("div",{style:{border:"1px solid #ccc",padding:"1rem",borderRadius:"4px"},children:[e.jsx(s,{variant:"delta",children:"Sample Color Getter"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginTop:"0.5rem"},children:[e.jsx("div",{style:{width:"20px",height:"20px",backgroundColor:o,borderRadius:"50%"}}),e.jsxs(s,{children:["tokens.color('danger500'): ",o]})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginTop:"0.5rem"},children:[e.jsx("div",{style:{width:"20px",height:"20px",backgroundColor:n,borderRadius:"50%"}}),e.jsxs(s,{children:["tokens.color('success600'): ",n]})]})]}),e.jsxs("div",{style:{border:"1px solid #ccc",padding:"1rem",borderRadius:"4px"},children:[e.jsx(s,{variant:"delta",children:"Spacing and Borders"}),e.jsx("div",{children:e.jsxs(s,{style:{marginTop:"0.5rem"},children:["tokens.space(4): ",l]})})]})]}),e.jsx(g,{code:`import { useDesignTokens } from 'strapi-design-extended';
import { Typography } from '@strapi/design-system';

function CustomComponent() {
  const tokens = useDesignTokens();
  
  return (
    <div style={{ 
      backgroundColor: tokens.color('danger500'), 
      padding: tokens.space('4') 
    }}>
      <Typography textColor="neutral0">Styled content</Typography>
    </div>
  );
}`})]})},f={title:"Hooks/useDesignTokens",component:u},t={};var i,d,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,f as default};
