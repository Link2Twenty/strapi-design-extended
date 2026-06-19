# Strapi Design Extended

> **Note**: This project is currently a **work in progress** (WIP). The collection contains initial components and hooks, with additional utilities planned.

`strapi-design-extended` extends the existing `@strapi/design-system` with additional React components and hooks. 

Please note that this package is a developer library intended for use within other Strapi plugins or customized Strapi configurations; it is not a standalone Strapi plugin.

Interactive documentation and component previews are available in the [Storybook](https://link2twenty.github.io/strapi-design-extended).

Built with **React**, **TypeScript**, and bundled using **Vite**.

---

## Features & Current Capabilities

### 1. Components

#### `SegmentedControl`
A control component based on Radix UI's `ToggleGroup` primitive, designed to match the Strapi design tokens and visual style.
- **Auto-selection**: If no string `value` or `defaultValue` is provided, it select the first available item.
- **Strict Single-selection**: Clicking the already-selected item does not deselect it, ensuring a selection remains active.
- **Disabled State**: Supports standard Radix and design system disabled attributes on item buttons.

##### Usage Example:
```tsx
import { SegmentedControl } from 'strapi-design-extended';

function MyApp() {
  return (
    <SegmentedControl.Root defaultValue="1" onChange={(val) => console.log(val)}>
      <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
      <SegmentedControl.Item disabled value="2">Option 2</SegmentedControl.Item>
      <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}
```

#### `Slider`
A slider component based on Radix UI's `Slider` primitive, designed to match the Strapi design tokens and visual style.
- **Single or Range Selection**: Supports single-value selections or multi-thumb range selections depending on the size of the array passed to `value` or `defaultValue`.
- **Customizable**: Configurable minimum (`min`), maximum (`max`), and step (`step`) increments.
- **Design Token Integration**: Integrates with Strapi's design tokens using `useDesignTokens`.

##### Usage Example:
```tsx
import { Slider } from 'strapi-design-extended';

function MyApp() {
  return (
    <div style={{ width: '500px' }}>
      {/* Single Value Slider */}
      <Slider defaultValue={[20]} label="Simple Slider" />

      {/* Range Slider */}
      <Slider defaultValue={[20, 80]} label="Range Slider" />
    </div>
  );
}
```

---

### 2. Hooks

#### `useDesignTokens`
A utility hook that integrates with the Strapi styled-components `ThemeContext`.
- **Dynamic CSS Injection**: Generates and injects CSS custom properties (prefixed with `--strapi-`) into the document head when the theme changes.
- **Token Accessors**: Provides getter functions for accessing various theme tokens, including:
  - `borderRadius(token)`
  - `breakpoint(token)`
  - `color(token)`
  - `fontSize(token)`
  - `fontWeight(token)`
  - `lineHeight(token)`
  - `motion(token)`
  - `shadow(token)`
  - `size(token)`
  - `space(token)`
  - `transition(token)`
  - `zIndex(token)`

##### Usage Example:
```tsx
import { useDesignTokens } from 'strapi-design-extended';
import { Typography } from '@strapi/design-system';

function ThemeConsumer() {
  const { color } = useDesignTokens();

  return (
    <div style={{ backgroundColor: color('danger500'), padding: '1rem' }}>
      <Typography variant="epsilon" textColor="neutral0">
        This box uses the danger500 color from the design tokens.
      </Typography>
    </div>
  );
}
```

---

## Development & Build Commands

Maintain and build the package locally using these npm scripts:

```bash
# Start Vite development playground/server
npm run dev

# Compile TypeScript type compiler check
npm run typecheck

# Build the ready-to-publish production package (dist/)
npm run build
```

## Future Roadmap

Additional components and utilities will be added to this library over time. Contributions and feature requests are welcome.
