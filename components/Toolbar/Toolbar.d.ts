import { default as React, ComponentProps } from '../../../node_modules/react';
import { Toolbar as ToolbarPrimative } from 'radix-ui';
import { Button as StrapiButton, Link as StrapiLink, IconButton } from '@strapi/design-system';

declare const _default: {
    Root: ({ children, ...props }: ComponentProps<typeof ToolbarPrimative.Root>) => React.JSX.Element;
    ToggleGroup: ({ children, value: valueProp, defaultValue, onValueChange, type, ...props }: ComponentProps<typeof ToolbarPrimative.ToggleGroup>) => React.JSX.Element;
    ToggleItem: ({ children, label, active, ...props }: Omit<ComponentProps<typeof ToolbarPrimative.ToggleItem>, "asChild"> & ComponentProps<typeof IconButton> & {
        active?: boolean;
    }) => React.JSX.Element;
    Separator: ({ className, ...props }: ComponentProps<typeof ToolbarPrimative.Separator>) => React.JSX.Element;
    Link: ({ children, ...props }: Omit<ComponentProps<typeof ToolbarPrimative.Link>, "asChild"> & ComponentProps<typeof StrapiLink>) => React.JSX.Element;
    Button: ({ className, children, ...props }: Omit<ComponentProps<typeof ToolbarPrimative.Button>, "asChild"> & ComponentProps<typeof StrapiButton>) => React.JSX.Element;
};
export default _default;
