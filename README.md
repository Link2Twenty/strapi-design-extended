# Strapi Design Extended

> **Note**: This project is currently a **work in progress** (WIP). The collection contains initial components and hooks, with additional utilities planned.

`strapi-design-extended` extends the existing `@strapi/design-system` with additional React components and hooks.

Please note that this package is a developer library intended for use within other Strapi plugins or customized Strapi configurations; it is not a standalone Strapi plugin.

> **Vite Optimization Note**: To use this package successfully in your Strapi project, you must instruct Vite not to optimize `strapi-design-extended`. Add or merge the following configuration in `./src/admin/vite.config.ts` (or yours/the example one) within the admin configuration of your Strapi project:
>
> ```ts
> import { mergeConfig, type UserConfig } from "vite";
> 
> export default (config: UserConfig) => {
>   return mergeConfig(config, {
>     optimizeDeps: {
>       exclude: ["strapi-design-extended"],
>     },
>   });
> };
> ```

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

##### SegmentedControl Usage

```tsx
import { SegmentedControl } from 'strapi-design-extended';

function MyApp() {
  return (
    <SegmentedControl.Root defaultValue="1" onChange={(val) => console.log(val)}>
      <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
      <SegmentedControl.Item disabled value="2">
        Option 2
      </SegmentedControl.Item>
      <SegmentedControl.Item value="3">Option 3</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}
```

#### `Sheet`

A highly flexible slide-out drawer/panel component based on Radix UI's `Dialog` primitive, designed to match modern design layouts and visual styling.

- **Granular Composition**: Leverages multiple sub-components (`Sheet.Root`, `Sheet.Trigger`, `Sheet.Content`, `Sheet.Body`, `Sheet.Footer`, `Sheet.Title`, `Sheet.Close`) for deep customizability of templates and content layout.
- **Positioning Support**: Supports sliding drawers in from any side of the viewport: `right` (default), `left`, `top`, or `bottom` via the `side` prop.
- **Sizing Control**: Allows developers to adjust the `width` of side sheets (when utilizing `left` or `right` positioning) and the `height` of top/bottom sheets dynamically.
- **Accessibility & Animations**: Seamlessly integrates focus trapping and close triggers (supporting outside backdrop click and the Escape key) combined with custom entry and exit animations.

##### Sheet Composable Usage

```tsx
import { Sheet } from 'strapi-design-extended';
import { Button, Typography } from '@strapi/design-system';

function MyApp() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>Open Sheet</Sheet.Trigger>
      <Sheet.Content side="right" width="440px">
        <Sheet.Title>Sheet Title</Sheet.Title>
        <Sheet.Body>
          <Typography variant="pi">This is the content of the sheet panel.</Typography>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <Button variant="secondary">Close</Button>
          </Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  );
}
```

#### `SheetDialog`

A simplified, props-driven packaging of the `Sheet` component for clean, boilerplate-free overlay implementations.

- **Props-centric**: Exposes properties like `title`, `side`, `width`, `height`, and `actionButtons` directly, wrapping child content and boilerplate layout automatically.
- **Controlled Flow**: Simple `open` state and `onClose` callback trigger are bundled inside to facilitate streamlined modal dialog lifecycle management.

##### SheetDialog Usage

```tsx
import React, { useState } from 'react';
import { SheetDialog } from 'strapi-design-extended';
import { Button, Typography } from '@strapi/design-system';

function MyApp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <SheetDialog
        open={open}
        showClose={true}
        onClose={() => setOpen(false)}
        title="Sheet Title"
        side="right"
        width="440px"
        actionButtons={
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <Typography variant="pi">This is the content inside the SheetDialog wrapper.</Typography>
      </SheetDialog>
    </>
  );
}
```

#### `Slider`

A slider component based on Radix UI's `Slider` primitive, designed to match the Strapi design tokens and visual style.

- **Single or Range Selection**: Supports single-value selections or multi-thumb range selections depending on the size of the array passed to `value` or `defaultValue`.
- **Customizable**: Configurable minimum (`min`), maximum (`max`), and step (`step`) increments.
- **Design Token Integration**: Integrates with Strapi's design tokens using `useDesignTokens`.

##### Slider Usage

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

#### `Toolbar`

A container toolbar component based on Radix UI's `Toolbar` primitive, visually matching Strapi design system guidelines.

- **Single vs Multiple Selection Groups**: Supports multiple choice toggle sub-groups (multiple checkbox behavior) or single choice toggle sub-groups (radio group behavior).
- **Auto-Selection**: In `single` selection mode, if no default-selected item starts selected (`value` or `defaultValue`), the first item's value is automatically chosen.
- **Strict Single-Selection Constraint**: Single selection groups enforce that at least one option always remains active and selected; users cannot click to clear the selected item entirely.
- **Sub-Component Integration**: Integrates directly with standalone buttons, links, and separators formatted for perfect alignment.

##### Toolbar Usage

```tsx
import { Toolbar } from 'strapi-design-extended';
import { Bold, Italic, AlignLeft, AlignCenter, Write } from '@strapi/icons';

function MyApp() {
  return (
    <Toolbar.Root aria-label="Formatting options">
      {/* Multiple Selection Toggle Group */}
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <Bold />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic">
          <Italic />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator />

      {/* Single Selection Toggle Group */}
      <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <Toolbar.ToggleItem value="left" aria-label="Left aligned">
          <AlignLeft />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="center" aria-label="Center aligned">
          <AlignCenter />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator />

      <Toolbar.Link href="#" target="_blank">
        Edited 2 mins ago
      </Toolbar.Link>
      <Toolbar.Button startIcon={<Write />} style={{ marginLeft: 'auto' }}>
        Submit
      </Toolbar.Button>
    </Toolbar.Root>
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

##### useDesignTokens Usage

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
