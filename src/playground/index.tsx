import { useState } from 'react';

import { createRoot } from 'react-dom/client';
import {
  DesignSystemProvider,
  lightTheme,
  darkTheme,
  Typography,
  Button,
  Flex,
  Avatar,
  Box,
} from '@strapi/design-system';
import { Bold, Italic, StrikeThrough } from '@strapi/icons';

import useDesignTokens from '../hooks/useDesignTokens';
import { HoverCard, SegmentedControl, SheetDialog, Slider, Toolbar } from '../components';
import { HoverElement } from '../components/HoverCard';

function App() {
  const [view, setView] = useState<'top' | 'right' | 'bottom' | 'left'>('right');
  const [value, setValue] = useState([440]);
  const [theme, setTheme] = useState<boolean>(true);

  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <DesignSystemProvider theme={theme ? lightTheme : darkTheme} locale="en">
      <DesignToken />
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
        <Toolbar.Root aria-label="Formatting options" style={{ width: '100%' }}>
          <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
            <Toolbar.ToggleItem value="bold" label="Bold">
              <Bold />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="italic" label="Italic">
              <Italic />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="strikethrough" label="Strike through">
              <StrikeThrough />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator />
          <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <Toolbar.ToggleItem value="left" label="Left aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M384 128c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="center" label="Center aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M448 128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M96 512c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32" />
              </svg>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="right" label="Right aligned">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...svgProps}>
                <path d="M544 128c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M96 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
              </svg>
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator />
          <Toolbar.Link href="#" target="_blank" style={{ marginRight: 10 }}>
            Edited 2 hours ago
          </Toolbar.Link>
          <Flex gap={2} alignItems="center" style={{ marginLeft: 'auto' }}>
            <Toolbar.Button variant="secondary" onClick={() => setPanelOpen(true)}>
              Open Sheet
            </Toolbar.Button>
            <Toolbar.Button onClick={() => setTheme(!theme)}>Toggle Theme</Toolbar.Button>
          </Flex>
        </Toolbar.Root>
      </div>
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
        <SegmentedControl.Root value={view} onChange={setView as (value: string) => void} style={{ width: '550px' }}>
          <SegmentedControl.Item value="top">Top</SegmentedControl.Item>
          <SegmentedControl.Item value="right">Right</SegmentedControl.Item>
          <SegmentedControl.Item value="bottom">Bottom</SegmentedControl.Item>
          <SegmentedControl.Item value="left">Left</SegmentedControl.Item>
        </SegmentedControl.Root>
        <Typography variant="epsilon" textColor="neutral600">
          Selected view: {view}
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
        <Slider value={value} onValueChange={setValue} min={350} max={800} step={10} style={{ width: '550px' }} />
        <Typography variant="epsilon" textColor="neutral600">
          Selected value: {value[0]}
        </Typography>
      </div>

      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
        <Typography variant="epsilon" textColor="neutral800" fontWeight="bold">
          HoverCard Demo:
        </Typography>
        <HoverElement
          trigger={
            <Typography tag="a" href="https://github.com/strapi" target="_blank" rel="noreferrer">
              @strapi (Hover me!)
            </Typography>
          }
        >
          <Flex gap={3} alignItems="flex-start" style={{ width: '280px' }}>
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
                The leading open-source headless CMS. 100% JavaScript / TypeScript, extensible, and fully customizable.
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
        </HoverElement>
      </div>

      <SheetDialog
        showClose
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        title="Confirmation"
        width={view === 'top' || view === 'bottom' ? '100%' : value[0] + 'px'}
        height={view === 'left' || view === 'right' ? '100%' : value[0] + 'px'}
        side={view}
        actionButtons={
          <Flex width="100%" gap={3}>
            <Button fullWidth variant="tertiary" onClick={() => setPanelOpen(false)}>
              Cancel
            </Button>
            <Button fullWidth variant="success-light">
              Confirm
            </Button>
          </Flex>
        }
      >
        <Typography tag="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum porttitor suscipit. Fusce
          egestas ipsum a eros efficitur porta. Sed sollicitudin, velit fermentum pulvinar aliquet, mi sapien mollis
          nisl, at pellentesque nibh nisi at sapien. Nullam turpis risus, elementum interdum lobortis eget, posuere quis
          magna. In mattis et enim sed rhoncus. In vel augue vestibulum, lobortis est et, placerat urna. Nunc sed semper
          mauris. Etiam hendrerit nibh arcu.
        </Typography>
        <Typography tag="p">
          Integer dignissim, mi ut mollis feugiat, dui neque suscipit purus, ut luctus neque ipsum sit amet lorem.
          Phasellus laoreet nunc et viverra feugiat. Proin nec consequat nulla. Donec ac pellentesque quam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec non neque at lorem tincidunt facilisis. Nunc pretium nisi
          quis sem porta placerat. Proin quis orci vel lorem ultricies convallis. Cras dolor nulla, imperdiet et maximus
          ac, semper accumsan lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent bibendum
          massa quis eros maximus, ac interdum nisi rutrum.
        </Typography>
        <Typography tag="p">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id commodo diam. In
          interdum enim ac est elementum, quis venenatis turpis molestie. Phasellus varius mollis nisl, sed ultricies
          tellus sollicitudin a. Sed ac justo pretium, lacinia nunc in, tempor sapien. Aliquam erat volutpat. Donec a
          porta mauris. Vivamus a velit congue, sodales tortor vel, maximus urna. Maecenas felis mauris, lobortis eget
          vestibulum sed, malesuada sed nibh. Maecenas interdum vulputate ipsum et convallis. Mauris vehicula quam ut
          erat molestie fringilla. Ut imperdiet mauris non orci viverra tempor.
        </Typography>
        <Typography tag="p">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque
          elementum leo quis ex maximus laoreet. Donec sollicitudin urna non urna consectetur, vel gravida ex finibus.
          Phasellus consectetur ligula sit amet augue ornare, at pharetra mi faucibus. Curabitur ut turpis est. Nam
          dapibus elementum sapien, non semper neque. Phasellus non purus eu massa tincidunt accumsan quis nec sapien.
          Integer eget rhoncus velit. Etiam tincidunt dignissim tortor, sed posuere nibh cursus at. Sed pretium vitae
          augue at ultricies. Quisque accumsan tempus diam et molestie. Fusce a ipsum ac augue scelerisque ornare eget
          at enim. Nunc pretium maximus luctus. Nunc laoreet imperdiet lacus, at efficitur libero placerat vitae. Sed
          nisl arcu, semper vel sem vel, semper vestibulum nisi.
        </Typography>
        <Typography tag="p">
          Nulla vulputate ligula eget risus rutrum hendrerit. Proin a ullamcorper sapien, ac ultricies mi. Quisque eu
          nunc id dui consequat tincidunt dapibus eu augue. Proin sed tortor quis nunc viverra dictum quis ac eros.
          Nulla porttitor pulvinar purus quis tempor. Integer at dictum arcu, vel aliquam orci. Maecenas accumsan
          lobortis facilisis. Sed sit amet metus magna.
        </Typography>
      </SheetDialog>
    </DesignSystemProvider>
  );
}

const DesignToken = () => {
  const { color } = useDesignTokens();

  return (
    <div style={{ backgroundColor: color('success200'), padding: '1rem' }}>
      <Typography variant="epsilon" textColor="neutral1000">
        This box uses the success200 color from the design tokens.
      </Typography>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

const svgProps = {
  width: '16',
  height: '16',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
};
