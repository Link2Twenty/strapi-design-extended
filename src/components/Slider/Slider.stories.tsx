import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';
import { Button, Typography } from '@strapi/design-system';
import useDesignTokens from '../../hooks/useDesignTokens';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    onValueChange: { action: 'onValueChange' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

const CodePreview = ({ code }: { code: string }) => {
  const [show, setShow] = useState(false);
  const { color } = useDesignTokens();

  return (
    <div style={{ marginTop: '1.5rem', borderTop: `1px solid ${color('neutral200')}`, paddingTop: '1rem' }}>
      <Button variant="tertiary" onClick={() => setShow(!show)}>
        {show ? 'Hide Code' : 'Show Code'}
      </Button>
      {show && (
        <pre
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: color('neutral100'),
            color: color('neutral800'),
            borderRadius: '6px',
            overflowX: 'auto',
            fontSize: '13px',
            fontFamily: 'monospace',
            border: `1px solid ${color('neutral200')}`,
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
    const code = `import { Slider } from 'strapi-design-extended';\n\n<Slider defaultValue={[20]} label="Slider" style={{ width: '550px' }} />`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Slider {...args} defaultValue={[20]} label="Slider" style={{ width: '550px', maxWidth: '100%' }} />
        <CodePreview code={code} />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([40]);
    const code = `import { useState } from 'react';\nimport { Slider } from 'strapi-design-extended';\n\nfunction ControlledExample() {\n  const [value, setValue] = useState<number[]>([40]);\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>\n      <Slider\n        value={value}\n        onValueChange={setValue}\n        style={{ width: '550px' }}\n        label="Controlled Slider"\n      />\n      <div>Value: {value[0]}</div>\n    </div>\n  );\n}`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Slider
          {...args}
          value={value}
          onValueChange={(val) => {
            setValue(val);
            args.onValueChange?.(val);
          }}
          style={{ width: '550px', maxWidth: '100%' }}
          label="Controlled Slider"
        />
        <div>Value: {value[0]}</div>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const Range: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([20, 80]);
    const code = `import { useState } from 'react';\nimport { Slider } from 'strapi-design-extended';\n\nfunction RangeExample() {\n  const [value, setValue] = useState<number[]>([20, 80]);\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>\n      <Slider\n        value={value}\n        onValueChange={setValue}\n        style={{ width: '550px' }}\n        label="Range Slider"\n      />\n      <div>Selected Range: {value[0]} - {value[1]}</div>\n    </div>\n  );\n}`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Slider
          {...args}
          value={value}
          onValueChange={(val) => {
            setValue(val);
            args.onValueChange?.(val);
          }}
          style={{ width: '550px', maxWidth: '100%' }}
          label="Range Slider"
        />
        <div>
          Selected Range: {value[0]} - {value[1]}
        </div>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const CustomStep: Story = {
  render: (args) => {
    const code = `import { Slider } from 'strapi-design-extended';\n\n<Slider defaultValue={[50]} step={10} min={0} max={100} label="Custom Step Slider" style={{ width: '550px' }} />`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="pi" style={{ display: 'block' }}>
          This slider has custom properties applied: min: 0, max: 100, and step: 10.
        </Typography>
        <Slider
          {...args}
          defaultValue={[50]}
          step={10}
          min={0}
          max={100}
          label="Custom Step Slider"
          style={{ width: '550px', maxWidth: '100%' }}
        />
        <CodePreview code={code} />
      </div>
    );
  },
};
