import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{B as n,Gt as r,H as i,U as a,V as o,i as s,l as c,o as l,s as u,t as d}from"./iframe-BM9vcPRP.js";import{C as f,S as p,_ as m,b as h,t as g,v as _,x as v,y}from"./dist-CcL6E-Xv.js";import{r as b,t as x}from"./useDesignTokens-UWpXdrOz.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=e((()=>{g(),l(),a(),S=n(),C=e=>(0,S.jsx)(m,{...e}),w=e=>(0,S.jsx)(f,{...e,asChild:!0,children:(0,S.jsx)(c,{children:e.children})}),T=e=>(0,S.jsx)(_,{...e}),E=e=>(0,S.jsx)(v,{...e}),D=o`
    from { opacity: 0; }
    to { opacity: 1; }
  `,O=i(h)`
  &[data-state='open'] {
    background: ${e=>u(e.theme.colors.neutral800,.2)};
    position: fixed;
    inset: 0;
    z-index: ${e=>e.theme.zIndices.overlay};
    will-change: opacity;

    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${D};
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeInOutCubic};
    }
  }
`,k={left:o`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,top:o`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,right:o`
	from {
		opacity: 0;
		transform: translateX(100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}`,bottom:o`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,reverse:{left:o`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`,top:o`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);

  }
`,right:o`
	from {
		opacity: 1;
		transform: translateX(0);
	}
	to {
		opacity: 0;
		transform: translateX(100%);
	}
}`,bottom:o`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`}},A=i(s.Root)`
  will-change: transform, opacity;
  animation-duration: ${e=>e.theme.motion.timings[200]};
  animation-timing-function: ${e=>e.theme.motion.easings.easeInOutCubic};

  &[data-side='top'] {
    animation-name: ${k.top};

    &[data-state='closed'] {
      animation-name: ${k.reverse.top};
    }
  }

  &[data-side='bottom'] {
    animation-name: ${k.bottom};

    &[data-state='closed'] {
      animation-name: ${k.reverse.bottom};
    }
  }

  &[data-side='left'] {
    animation-name: ${k.left};

    &[data-state='closed'] {
      animation-name: ${k.reverse.left};
    }
  }

  &[data-side='right'] {
    animation-name: ${k.right};

    &[data-state='closed'] {
      animation-name: ${k.reverse.right};
    }
  }
`,j=({className:e,children:t,width:n=`440px`,height:r=`600px`,side:i=`right`,...a})=>(0,S.jsxs)(E,{children:[(0,S.jsx)(O,{}),(0,S.jsx)(y,{"data-side":i,className:e,...a,asChild:!0,children:(0,S.jsx)(A,{gap:2,gridCols:1,background:`neutral0`,shadow:`filterShadow`,zIndex:`modal`,position:`fixed`,top:i===`bottom`?`auto`:0,right:i===`left`?`auto`:0,bottom:i===`top`?`auto`:0,left:i===`right`?`auto`:0,width:i===`top`||i===`bottom`?`100%`:n,maxWidth:i===`top`||i===`bottom`?`100%`:`98%`,height:i===`left`||i===`right`?`100%`:r,maxHeight:i===`left`||i===`right`?`100%`:`98%`,style:{gridTemplateRows:`auto 1fr auto`},children:t})})]}),M=e=>(0,S.jsx)(s.Item,{...e,padding:6,width:`100%`,height:`100%`,margin:0,overflow:`auto`,style:{display:`block`}}),N=i(s.Item)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
`,P=e=>(0,S.jsx)(N,{...e,padding:6,width:`100%`}),F=i(d)`
  text-align: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,I=e=>(0,S.jsx)(s.Item,{width:`100%`,children:(0,S.jsx)(p,{asChild:!0,...e,children:(0,S.jsx)(F,{variant:`beta`,textColor:`neutral800`,tag:`h2`,padding:6,width:`100%`,children:e.children})})}),L=({title:e,open:t,children:n,width:r,height:i,onClose:a,actionButtons:o,side:s})=>(0,S.jsx)(C,{open:t,onOpenChange:e=>!e&&a?.(),children:(0,S.jsxs)(j,{side:s,width:r,height:i,children:[e&&(0,S.jsx)(I,{children:e}),(0,S.jsx)(M,{children:n}),o&&(0,S.jsx)(P,{children:o})]})}),R={Root:C,Trigger:w,Close:T,Content:j,Body:M,Footer:P,Title:I},L.__docgenInfo={description:``,methods:[],displayName:`SheetDialog`,props:{title:{required:!1,tsType:{name:`string`},description:`The title of the sheet dialog. If not provided, no title will be displayed.`},open:{required:!1,tsType:{name:`boolean`},description:`Whether the sheet dialog is open or not. If not provided, the sheet dialog will be uncontrolled.`},width:{required:!1,tsType:{name:`ReactCSSProperties['width']`,raw:`React.CSSProperties['width']`},description:`The width of the sheet dialog (left or right). If not provided, the default width will be used.`},height:{required:!1,tsType:{name:`ReactCSSProperties['height']`,raw:`React.CSSProperties['height']`},description:`The height of the sheet dialog (top or bottom). If not provided, the default height will be used.`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content of the sheet dialog. If not provided, no content will be displayed.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function that is called when the sheet dialog is closed. If not provided, no callback will be called.`},actionButtons:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The action buttons of the sheet dialog. If not provided, no action buttons will be displayed.`},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'right' | 'bottom' | 'left'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`}]},description:`The side of the sheet dialog. If not provided, the default side will be used.`}}}})),B,V,H,U,W,G,K,q;e((()=>{B=t(r()),z(),l(),x(),V=n(),H={title:`Components/Sheet`,component:R.Root,argTypes:{onOpenChange:{action:`onOpenChange`}}},U=({code:e})=>{let[t,n]=(0,B.useState)(!1),{color:r}=b();return(0,V.jsxs)(`div`,{style:{marginTop:`1.5rem`,borderTop:`1px solid ${r(`neutral200`)}`,paddingTop:`1rem`},children:[(0,V.jsx)(c,{variant:`tertiary`,onClick:()=>n(!t),children:t?`Hide Code`:`Show Code`}),t&&(0,V.jsx)(`pre`,{style:{marginTop:`1rem`,padding:`1rem`,background:r(`neutral100`),color:r(`neutral800`),borderRadius:`6px`,overflowX:`auto`,fontSize:`13px`,fontFamily:`monospace`,border:`1px solid ${r(`neutral200`)}`},children:(0,V.jsx)(`code`,{children:e})})]})},W={render:e=>(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(R.Root,{...e,children:[(0,V.jsx)(R.Trigger,{children:`Open`}),(0,V.jsxs)(R.Content,{children:[(0,V.jsx)(R.Title,{children:`Sheet Title`}),(0,V.jsx)(R.Body,{children:(0,V.jsx)(d,{variant:`pi`,children:`This is the content of the sheet.`})}),(0,V.jsx)(R.Footer,{children:(0,V.jsx)(R.Close,{asChild:!0,children:(0,V.jsx)(c,{variant:`secondary`,children:`Close`})})})]})]}),(0,V.jsx)(U,{code:`import { Sheet } from 'strapi-design-extended';import { Button, Typography } from '@strapi/design-system';

<Sheet.Root>
  <Sheet.Trigger>Open</Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Title>Sheet Title</Sheet.Title>
    <Sheet.Body>
      <Typography variant="pi">This is the content of the sheet.</Typography>
    </Sheet.Body>
    <Sheet.Footer>
      <Sheet.Close asChild>
        <Button variant="secondary">Close</Button>
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>`})]})},G={render:e=>{let[t,n]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{children:[(0,V.jsx)(c,{onClick:()=>n(!0),children:`Open`}),(0,V.jsx)(R.Root,{...e,open:t,onOpenChange:n,children:(0,V.jsxs)(R.Content,{children:[(0,V.jsx)(R.Title,{children:`Sheet Title`}),(0,V.jsx)(R.Body,{children:(0,V.jsx)(d,{variant:`pi`,children:`This is the content of the sheet.`})}),(0,V.jsx)(R.Footer,{children:(0,V.jsx)(c,{variant:`secondary`,onClick:()=>n(!1),children:`Close`})})]})}),(0,V.jsx)(U,{code:`import { Sheet } from 'strapi-design-extended';
import { Button, Typography } from '@strapi/design-system';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Sheet.Root open={open} onOpenChange={setOpen}>
    <Sheet.Content>
      <Sheet.Title>Sheet Title</Sheet.Title>
      <Sheet.Body>
        <Typography variant="pi">This is the content of the sheet.</Typography>
      </Sheet.Body>
      <Sheet.Footer>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Sheet.Footer>
    </Sheet.Content>
  </Sheet.Root>
</>`})]})}},K={render:e=>{let[t,n]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{children:[(0,V.jsx)(c,{onClick:()=>n(!0),children:`Open`}),(0,V.jsx)(L,{open:t,onClose:()=>n(!1),title:`Sheet Title`,...e,actionButtons:(0,V.jsx)(c,{variant:`secondary`,onClick:()=>n(!1),children:`Close`}),children:(0,V.jsx)(d,{variant:`pi`,children:`This is the content of the sheet.`})}),(0,V.jsx)(U,{code:`import { SheetDialog } from 'strapi-design-extended';
import { Button, Typography } from '@strapi/design-system';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <SheetDialog
    open={open}
    onClose={() => setOpen(false)}
    title="Sheet Title"
    actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>}
  >
    <Typography variant="pi">This is the content of the sheet.</Typography>
  </SheetDialog>
</>`})]})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const code = \`import { Sheet } from 'strapi-design-extended';import { Button, Typography } from '@strapi/design-system';\\n\\n<Sheet.Root>\\n  <Sheet.Trigger>Open</Sheet.Trigger>\\n  <Sheet.Content>\\n    <Sheet.Title>Sheet Title</Sheet.Title>\\n    <Sheet.Body>\\n      <Typography variant="pi">This is the content of the sheet.</Typography>\\n    </Sheet.Body>\\n    <Sheet.Footer>\\n      <Sheet.Close asChild>\\n        <Button variant="secondary">Close</Button>\\n      </Sheet.Close>\\n    </Sheet.Footer>\\n  </Sheet.Content>\\n</Sheet.Root>\`;
    return <div>
        <Sheet.Root {...args}>
          <Sheet.Trigger>Open</Sheet.Trigger>
          <Sheet.Content>
            <Sheet.Title>Sheet Title</Sheet.Title>
            <Sheet.Body>
              <Typography variant="pi">This is the content of the sheet.</Typography>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close asChild>
                <Button variant="secondary">Close</Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const code = \`import { Sheet } from 'strapi-design-extended';\\nimport { Button, Typography } from '@strapi/design-system';\\n\\nconst [open, setOpen] = useState(false);\\n\\n<>\\n  <Button onClick={() => setOpen(true)}>Open</Button>\\n  <Sheet.Root open={open} onOpenChange={setOpen}>\\n    <Sheet.Content>\\n      <Sheet.Title>Sheet Title</Sheet.Title>\\n      <Sheet.Body>\\n        <Typography variant="pi">This is the content of the sheet.</Typography>\\n      </Sheet.Body>\\n      <Sheet.Footer>\\n        <Button variant="secondary" onClick={() => setOpen(false)}>\\n          Close\\n        </Button>\\n      </Sheet.Footer>\\n    </Sheet.Content>\\n  </Sheet.Root>\\n</>\`;
    return <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Sheet.Root {...args} open={open} onOpenChange={setOpen}>
          <Sheet.Content>
            <Sheet.Title>Sheet Title</Sheet.Title>
            <Sheet.Body>
              <Typography variant="pi">This is the content of the sheet.</Typography>
            </Sheet.Body>
            <Sheet.Footer>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
        <CodePreview code={code} />
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const code = \`import { SheetDialog } from 'strapi-design-extended';\\nimport { Button, Typography } from '@strapi/design-system';\\n\\nconst [open, setOpen] = useState(false);\\n\\n<>\\n  <Button onClick={() => setOpen(true)}>Open</Button>\\n  <SheetDialog\\n    open={open}\\n    onClose={() => setOpen(false)}\\n    title="Sheet Title"\\n    actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>}\\n  >\\n    <Typography variant="pi">This is the content of the sheet.</Typography>\\n  </SheetDialog>\\n</>\`;
    return <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <SheetDialog open={open} onClose={() => setOpen(false)} title="Sheet Title" {...args} actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>}>
          <Typography variant="pi">This is the content of the sheet.</Typography>
        </SheetDialog>
        <CodePreview code={code} />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`Controlled`,`Simplified`]}))();export{G as Controlled,W as Default,K as Simplified,q as __namedExportsOrder,H as default};