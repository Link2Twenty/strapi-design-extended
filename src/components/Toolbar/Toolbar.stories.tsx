import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toolbar from './Toolbar';
import { Button, Typography } from '@strapi/design-system';
import { ArrowLineLeft, ArrowLineRight, Bold, Italic, StrikeThrough } from '@strapi/icons';

const meta: Meta<typeof Toolbar.Root> = {
  title: 'Components/Toolbar',
  component: Toolbar.Root,
};

export default meta;
type Story = StoryObj<typeof Toolbar.Root>;

const CodePreview = ({ code }: { code: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginTop: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
      <Button variant="tertiary" onClick={() => setShow(!show)}>
        {show ? 'Hide Code' : 'Show Code'}
      </Button>
      {show && (
        <pre
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: '#f6f8fa',
            borderRadius: '6px',
            overflowX: 'auto',
            fontSize: '13px',
            fontFamily: 'monospace',
            border: '1px solid #e1e4e8',
          }}
        >
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => {
    const code = `import { Toolbar } from 'strapi-design-extended';\nimport { Bold, Italic, StrikeThrough } from '@strapi/icons';\n\n<Toolbar.Root aria-label="Formatting options">\n  <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">\n    <Toolbar.ToggleItem value="bold" label="Bold">\n      <Bold />\n    </Toolbar.ToggleItem>\n    <Toolbar.ToggleItem value="italic" label="Italic">\n      <Italic />\n    </Toolbar.ToggleItem>\n    <Toolbar.ToggleItem value="strikethrough" label="Strike through">\n      <StrikeThrough />\n    </Toolbar.ToggleItem>\n  </Toolbar.ToggleGroup>\n  <Toolbar.Separator />\n  <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">\n    <Toolbar.ToggleItem value="left" label="Left aligned">\n      <AlignLeft />\n    </Toolbar.ToggleItem>\n    <Toolbar.ToggleItem value="center" label="Center aligned">\n      <AlignCenter />\n    </Toolbar.ToggleItem>\n    <Toolbar.ToggleItem value="right" label="Right aligned">\n      <AlignRight />\n    </Toolbar.ToggleItem>\n  </Toolbar.ToggleGroup>\n  <Toolbar.Separator />\n  <Toolbar.Link href="#" target="_blank">\n    Edited 2 hours ago\n  </Toolbar.Link>\n  <Toolbar.Button style={{ marginLeft: 'auto' }}>\n    Share\n  </Toolbar.Button>\n</Toolbar.Root>`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options" style={{ width: '100%' }}>
          <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="bold" label="Bold">
              <Bold />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="italic" label="Italic">
              <Italic />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="strikethrough" label="Strike through">
              <StrikeThrough />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator className="ToolbarSeparator" />
          <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="left" label="Left aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="center" label="Center aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="right" label="Right aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator className="ToolbarSeparator" />
          <Toolbar.Link className="ToolbarLink" href="#" target="_blank" style={{ marginRight: 10 }}>
            Edited 2 hours ago
          </Toolbar.Link>
          <Toolbar.Button className="ToolbarButton" style={{ marginLeft: 'auto' }}>
            Share
          </Toolbar.Button>
        </Toolbar.Root>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const ControlledSingle: Story = {
  render: (args) => {
    const [alignment, setAlignment] = useState('center');
    const code = `import { useState } from 'react';\nimport { Toolbar } from 'strapi-design-extended';\n\nfunction ControlledExample() {\n  const [alignment, setAlignment] = useState('center');\n  return (\n    <Toolbar.Root aria-label="Formatting options">\n      <Toolbar.ToggleGroup type="single" value={alignment} onValueChange={setAlignment} aria-label="Text alignment">\n        <Toolbar.ToggleItem value="left" label="Left aligned"><AlignLeft /></Toolbar.ToggleItem>\n        <Toolbar.ToggleItem value="center" label="Center aligned"><AlignCenter /></Toolbar.ToggleItem>\n        <Toolbar.ToggleItem value="right" label="Right aligned"><AlignRight /></Toolbar.ToggleItem>\n      </Toolbar.ToggleGroup>\n    </Toolbar.Root>\n  );\n}`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Toolbar.Root {...args} aria-label="Formatting options">
          <Toolbar.ToggleGroup type="single" value={alignment} onValueChange={setAlignment} aria-label="Text alignment">
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="left" label="Left aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="center" label="Center aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem className="ToolbarToggleItem" value="right" label="Right aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
        </Toolbar.Root>
        <div>Selected alignment: {alignment}</div>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const AutoSelectsFirstSingle: Story = {
  render: (args) => {
    const code = `import { Toolbar } from 'strapi-design-extended';\nimport { ArrowLineLeft, ArrowLineRight } from '@strapi/icons';\n\n// No 'value' or 'defaultValue' provided on a 'single' ToggleGroup\n<Toolbar.Root aria-label="Formatting options">\n  <Toolbar.ToggleGroup type="single" aria-label="Select first">\n    <Toolbar.ToggleItem value="first" label="First item">\n      <ArrowLineLeft />\n    </Toolbar.ToggleItem>\n    <Toolbar.ToggleItem value="second" label="Second item">\n      <ArrowLineRight />\n    </Toolbar.ToggleItem>\n  </Toolbar.ToggleGroup>\n</Toolbar.Root>`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
      </div>
    );
  },
};

const svgProps = {
  width: '16',
  height: '16',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
};
