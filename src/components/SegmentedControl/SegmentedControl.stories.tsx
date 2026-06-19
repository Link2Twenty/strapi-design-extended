import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SegmentedControl from './SegmentedControl';
import { Button, Typography } from '@strapi/design-system';

const meta: Meta<typeof SegmentedControl.Root> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl.Root,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl.Root>;

const CodePreview = ({ code }: { code: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginTop: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
      <Button variant="tertiary" onClick={() => setShow(!show)}>
        {show ? 'Hide Code' : 'Show Code'}
      </Button>
      {show && (
        <pre style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#f6f8fa',
          borderRadius: '6px',
          overflowX: 'auto',
          fontSize: '13px',
          fontFamily: 'monospace',
          border: '1px solid #e1e4e8'
        }}>
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => {
    const code = `import { SegmentedControl } from 'strapi-design-extended';\n\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\n  <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>\n  <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>\n  <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>\n</SegmentedControl.Root>`;
    return (
      <div>
        <SegmentedControl.Root {...args} style={{ maxWidth: '550px' }}>
          <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
          <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('2');
    const code = `import { useState } from 'react';\nimport { SegmentedControl } from 'strapi-design-extended';\n\nfunction ControlledExample() {\n  const [value, setValue] = useState('2');\n  return (\n    <SegmentedControl.Root value={value} onChange={setValue} style={{ maxWidth: '550px' }}>\n      <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>\n      <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>\n      <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>\n    </SegmentedControl.Root>\n    <div>Selected value: {value}</div>\n  );\n}`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SegmentedControl.Root
          {...args}
          value={value}
          onChange={(val) => {
            setValue(val);
            args.onChange?.(val);
          }}
          style={{ maxWidth: '550px' }}
        >
          <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
          <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
        </SegmentedControl.Root>
        <div>Selected value: {value}</div>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const WithDisabled: Story = {
  render: (args) => {
    const code = `import { SegmentedControl } from 'strapi-design-extended';\n\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\n  <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>\n  <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>\n  <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>\n</SegmentedControl.Root>`;
    return (
      <div>
        <SegmentedControl.Root {...args} style={{ maxWidth: '550px' }}>
          <SegmentedControl.Item value="1">Active Option</SegmentedControl.Item>
          <SegmentedControl.Item disabled value="2">Disabled Option</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Another Option</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const AutoSelectsFirst: Story = {
  render: (args) => {
    const code = `import { SegmentedControl } from 'strapi-design-extended';\n\n// No 'value' or 'defaultValue' provided\n<SegmentedControl.Root style={{ maxWidth: '550px' }}>\n  <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>\n  <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>\n</SegmentedControl.Root>`;
    return (
      <div>
        <Typography variant="pi" style={{ display: 'block', marginBottom: '1rem' }}>
          If neither value nor defaultValue is specified, the SegmentedControl automatically selects the first item (in this case, &ldquo;first&rdquo;).
        </Typography>
        <SegmentedControl.Root {...args} style={{ maxWidth: '550px' }}>
          <SegmentedControl.Item value="first">First Item</SegmentedControl.Item>
          <SegmentedControl.Item value="second">Second Item</SegmentedControl.Item>
        </SegmentedControl.Root>
        <CodePreview code={code} />
      </div>
    );
  },
};
