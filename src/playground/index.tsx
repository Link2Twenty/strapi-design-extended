import { useState } from 'react';

import { createRoot } from 'react-dom/client';
import { DesignSystemProvider, lightTheme, Typography } from '@strapi/design-system';

import useDesignTokens from '../hooks/useDesignTokens';
import { SegmentedControl, Slider } from '../components';

function App() {
  const [view, setView] = useState('1');
  const [value, setValue] = useState([75]);

  return (
    <DesignSystemProvider theme={lightTheme} locale="en">
      <DesignToken />
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
    </DesignSystemProvider>
  );
}

const DesignToken = () => {
  const { color } = useDesignTokens();

  return (
    <div style={{ backgroundColor: color('danger500'), padding: '1rem' }}>
      <Typography variant="epsilon" textColor="neutral0">
        This box uses the danger500 color from the design tokens.
      </Typography>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
