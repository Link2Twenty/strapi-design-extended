import { useState } from 'react';

import { createRoot } from 'react-dom/client';
import {
  DesignSystemProvider,
  lightTheme,
  darkTheme,
  Typography,
  Button,
  Flex,
  Field,
  SingleSelect,
  SingleSelectOption,
} from '@strapi/design-system';
import { Bold, Italic, StrikeThrough } from '@strapi/icons';

import useDesignTokens from '../hooks/useDesignTokens';
import { SegmentedControl, Sheet, Slider, Toolbar } from '../components';

function App() {
  const [view, setView] = useState('1');
  const [value, setValue] = useState([75]);
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <DesignSystemProvider theme={theme ? lightTheme : darkTheme} locale="en">
      <DesignToken />
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
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
          <Toolbar.Button className="ToolbarButton" style={{ marginLeft: 'auto' }} onClick={() => setTheme(!theme)}>
            Toggle Theme
          </Toolbar.Button>
        </Toolbar.Root>
      </div>
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
        <SegmentedControl.Root value={view} onChange={setView} style={{ width: '550px' }}>
          <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
          <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
          <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
        </SegmentedControl.Root>
        <Typography variant="epsilon" textColor="neutral600">
          Selected view: {view}
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem', alignItems: 'center' }}>
        <Slider value={value} onValueChange={setValue} max={100} step={1} style={{ width: '550px' }} />
        <Typography variant="epsilon" textColor="neutral600">
          Selected value: {value[0]}
        </Typography>
      </div>

      <Sheet.Root>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content width="400px">
          <Sheet.Title>Confirmation</Sheet.Title>
          <Sheet.Body>
            <Field.Root width="100%">
              <Field.Label>What is your favourite fruit?</Field.Label>
              <SingleSelect placeholder="Pick a fruit...">
                <SingleSelectOption value="apple">Apple</SingleSelectOption>
                <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
                <SingleSelectOption value="banana">Banana</SingleSelectOption>
                <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>
                <SingleSelectOption value="mango">Mango</SingleSelectOption>
                <SingleSelectOption value="orange">Orange</SingleSelectOption>
                <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>
              </SingleSelect>
            </Field.Root>
          </Sheet.Body>
          <Sheet.Footer>
            <Flex width="100%" gap={3}>
              <Sheet.Close asChild>
                <Button fullWidth variant="tertiary">
                  Cancel
                </Button>
              </Sheet.Close>
              <Button fullWidth variant="success-light">
                Confirm
              </Button>
            </Flex>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
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
