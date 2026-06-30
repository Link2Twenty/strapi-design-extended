import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HoverCard, { HoverElement } from './HoverCard';
import { Button, Typography, Flex, Box, Avatar } from '@strapi/design-system';
import useDesignTokens from '../../hooks/useDesignTokens';

const meta: Meta<typeof HoverElement> = {
  title: 'Components/HoverCard',
  component: HoverElement,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HoverElement>;

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
    const code = `import { HoverCard } from 'strapi-design-extended';\nimport { Typography, Flex, Box, Avatar } from '@strapi/design-system';\n\n<HoverCard.Root>\n  <HoverCard.Trigger asChild>\n    <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{ color: '#4945ff', fontWeight: 'bold' }}>\n      @strapi\n    </a>\n  </HoverCard.Trigger>\n  <HoverCard.Content sideOffset={5}>\n    <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>\n      <Avatar.Item src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />\n      <Box>\n        <Typography fontWeight="bold" tag="div" fontSize={2}>\n          Strapi\n        </Typography>\n        <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>\n          @strapi\n        </Typography>\n        <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px' }}>\n          The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully customizable.\n        </Typography>\n        <Flex gap={4} style={{ marginTop: '12px' }}>\n          <Flex gap={1}>\n            <Typography fontWeight="bold" fontSize={1}>0</Typography>\n            <Typography textColor="neutral600" fontSize={1}>Following</Typography>\n          </Flex>\n          <Flex gap={1}>\n            <Typography fontWeight="bold" fontSize={1}>10.5k</Typography>\n            <Typography textColor="neutral600" fontSize={1}>Followers</Typography>\n          </Flex>\n        </Flex>\n      </Box>\n    </Flex>\n  </HoverCard.Content>\n</HoverCard.Root>`;

    return (
      <div>
        <Typography variant="beta" tag="h2" style={{ marginBottom: '1.5rem' }}>
          Hover over the link below (Standard Composable HoverCard):
        </Typography>
        <div style={{ padding: '2rem', display: 'inline-block' }}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <a
                href="https://github.com/strapi"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#4945ff', fontWeight: 'bold', textDecoration: 'none' }}
              >
                @strapi
              </a>
            </HoverCard.Trigger>
            <HoverCard.Content sideOffset={5}>
              <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>
                <Avatar.Item
                  style={{ flexShrink: 0 }}
                  src="https://avatars.githubusercontent.com/u/5428414?v=4"
                  alt="Strapi"
                  fallback="S"
                />
                <Box>
                  <Typography fontWeight="bold" tag="div" fontSize={2}>
                    Strapi
                  </Typography>
                  <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>
                    @strapi
                  </Typography>
                  <Typography
                    tag="p"
                    textColor="neutral800"
                    fontSize={2}
                    style={{ marginTop: '8px', lineHeight: '1.4' }}
                  >
                    The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully
                    customizable.
                  </Typography>
                  <Flex gap={4} style={{ marginTop: '12px' }}>
                    <Flex gap={1}>
                      <Typography fontWeight="bold" fontSize={1}>
                        0
                      </Typography>
                      <Typography textColor="neutral600" fontSize={1}>
                        Following
                      </Typography>
                    </Flex>
                    <Flex gap={1}>
                      <Typography fontWeight="bold" fontSize={1}>
                        10.5k
                      </Typography>
                      <Typography textColor="neutral600" fontSize={1}>
                        Followers
                      </Typography>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <CodePreview code={code} />
      </div>
    );
  },
};

export const DirectElement: Story = {
  render: (args) => {
    const code = `import { HoverElement } from 'strapi-design-extended';\nimport { Typography, Flex, Box, Avatar } from '@strapi/design-system';\n\n<HoverElement\n  sideOffset={5}\n  trigger={\n    <a href="https://github.com/strapi" target="_blank" rel="noreferrer" style={{ color: '#4945ff', fontWeight: 'bold' }}>\n      @strapi\n    </a>\n  }\n>\n  <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>\n    <Avatar.Item src="https://avatars.githubusercontent.com/u/5428414?v=4" alt="Strapi" fallback="S" />\n    <Box>\n      <Typography fontWeight="bold" tag="div" fontSize={2}>\n        Strapi\n      </Typography>\n      <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>\n        @strapi\n      </Typography>\n      <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px' }}>\n        The leading open-source headless CMS.\n      </Typography>\n    </Box>\n  </Flex>\n</HoverElement>`;

    return (
      <div>
        <Typography variant="beta" tag="h2" style={{ marginBottom: '1.5rem' }}>
          Hover over the link below (Props-driven HoverElement wrapper):
        </Typography>
        <div style={{ padding: '2rem', display: 'inline-block' }}>
          <HoverElement
            {...args}
            sideOffset={5}
            trigger={
              <a
                href="https://github.com/strapi"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#4945ff', fontWeight: 'bold', textDecoration: 'none' }}
              >
                @strapi
              </a>
            }
          >
            <Flex gap={3} alignItems="flex-start" style={{ width: '300px' }}>
              <Avatar.Item
                style={{ flexShrink: 0 }}
                src="https://avatars.githubusercontent.com/u/5428414?v=4"
                alt="Strapi"
                fallback="S"
              />
              <Box>
                <Typography fontWeight="bold" tag="div" fontSize={2}>
                  Strapi
                </Typography>
                <Typography textColor="neutral600" tag="div" fontSize={1} style={{ marginTop: '2px' }}>
                  @strapi
                </Typography>
                <Typography tag="p" textColor="neutral800" fontSize={2} style={{ marginTop: '8px', lineHeight: '1.4' }}>
                  The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully
                  customizable.
                </Typography>
              </Box>
            </Flex>
          </HoverElement>
        </div>
        <CodePreview code={code} />
      </div>
    );
  },
};
