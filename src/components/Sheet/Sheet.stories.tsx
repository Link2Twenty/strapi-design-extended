import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Sheet, { SheetDialog } from './Sheet';
import { Button, Typography } from '@strapi/design-system';
import useDesignTokens from '../../hooks/useDesignTokens';

const meta: Meta<typeof Sheet.Root> = {
  title: 'Components/Sheet',
  component: Sheet.Root,
  argTypes: {
    onOpenChange: { action: 'onOpenChange' },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet.Root>;

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
    const code = `import { Sheet } from 'strapi-design-extended';import { Button, Typography } from '@strapi/design-system';\n\n<Sheet.Root>\n  <Sheet.Trigger>Open</Sheet.Trigger>\n  <Sheet.Content>\n    <Sheet.Title>Sheet Title</Sheet.Title>\n    <Sheet.Body>\n      <Typography variant="pi">This is the content of the sheet.</Typography>\n    </Sheet.Body>\n    <Sheet.Footer>\n      <Sheet.Close asChild>\n        <Button variant="secondary">Close</Button>\n      </Sheet.Close>\n    </Sheet.Footer>\n  </Sheet.Content>\n</Sheet.Root>`;
    return (
      <div>
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
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const code = `import { Sheet } from 'strapi-design-extended';\nimport { Button, Typography } from '@strapi/design-system';\n\nconst [open, setOpen] = useState(false);\n\n<>\n  <Button onClick={() => setOpen(true)}>Open</Button>\n  <Sheet.Root open={open} onOpenChange={setOpen}>\n    <Sheet.Content>\n      <Sheet.Title>Sheet Title</Sheet.Title>\n      <Sheet.Body>\n        <Typography variant="pi">This is the content of the sheet.</Typography>\n      </Sheet.Body>\n      <Sheet.Footer>\n        <Button variant="secondary" onClick={() => setOpen(false)}>\n          Close\n        </Button>\n      </Sheet.Footer>\n    </Sheet.Content>\n  </Sheet.Root>\n</>`;
    return (
      <div>
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
      </div>
    );
  },
};

export const Simplified: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const code = `import { SheetDialog } from 'strapi-design-extended';\nimport { Button, Typography } from '@strapi/design-system';\n\nconst [open, setOpen] = useState(false);\n\n<>\n  <Button onClick={() => setOpen(true)}>Open</Button>\n  <SheetDialog\n    open={open}\n    onClose={() => setOpen(false)}\n    title="Sheet Title"\n    actionButtons={<Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>}\n  >\n    <Typography variant="pi">This is the content of the sheet.</Typography>\n  </SheetDialog>\n</>`;
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <SheetDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Sheet Title"
          {...args}
          actionButtons={
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          }
        >
          <Typography variant="pi">This is the content of the sheet.</Typography>
        </SheetDialog>
        <CodePreview code={code} />
      </div>
    );
  },
};
