import type { Meta, StoryObj } from '@storybook/react';
import { useDesignTokens } from '../../hooks';
import { Typography, Button } from '@strapi/design-system';
import { useState } from 'react';

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

const DisplayTokensComponent = () => {
  const tokens = useDesignTokens();

  if (!tokens || !tokens.theme) {
    return <Typography>Loading design system context styled-theme...</Typography>;
  }

  // Cast token return values safely to satisfy the union types resolved by typescript
  const dangerousColorOutput = String(tokens.color('danger500'));
  const successColorOutput = String(tokens.color('success600'));
  const spaceFourOutput = String(tokens.space('4' as any));

  const code = `import { useDesignTokens } from 'strapi-design-extended';\nimport { Typography } from '@strapi/design-system';\n\nfunction CustomComponent() {\n  const tokens = useDesignTokens();\n  \n  return (\n    <div style={{ \n      backgroundColor: tokens.color('danger500'), \n      padding: tokens.space('4') \n    }}>\n      <Typography textColor="neutral0">Styled content</Typography>\n    </div>\n  );\n}`;

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="beta">useDesignTokens API</Typography>
      <Typography variant="pi">
        This renders styled-components tokens retrieved dynamically, while simultaneously registering high-performance
        CSS custom property variables on `document.head` (e.g. `--strapi-colors-neutral0`).
      </Typography>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
          <Typography variant="delta">Sample Color Getter</Typography>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: dangerousColorOutput, borderRadius: '50%' }}
            />
            <Typography>tokens.color(&apos;danger500&apos;): {dangerousColorOutput}</Typography>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: successColorOutput, borderRadius: '50%' }} />
            <Typography>tokens.color(&apos;success600&apos;): {successColorOutput}</Typography>
          </div>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
          <Typography variant="delta">Spacing and Borders</Typography>
          <div>
            <Typography style={{ marginTop: '0.5rem' }}>tokens.space(4): {spaceFourOutput}</Typography>
          </div>
        </div>
      </div>
      <CodePreview code={code} />
    </div>
  );
};

const meta: Meta = {
  title: 'Hooks/useDesignTokens',
  component: DisplayTokensComponent,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
