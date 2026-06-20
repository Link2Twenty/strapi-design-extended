import { default as React, ComponentProps } from '../../../node_modules/react';
import { Toolbar as ToolbarPrimative } from 'radix-ui';
import { Button as StrapiButton, Link as StrapiLink, IconButton } from '@strapi/design-system';

type ToolbarRootProps = Omit<ComponentProps<typeof ToolbarPrimative.Root>, 'asChild'>;
type ToggleGroupSingleProps = Omit<ComponentProps<typeof ToolbarPrimative.ToggleGroup>, 'asChild' | 'onValueChange' | 'value' | 'defaultValue' | 'type'> & {
    type: 'single';
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
};
type ToggleGroupMultipleProps = Omit<ComponentProps<typeof ToolbarPrimative.ToggleGroup>, 'asChild' | 'onValueChange' | 'value' | 'defaultValue' | 'type'> & {
    type: 'multiple';
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
};
type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;
type ToggleItemProps = Omit<ComponentProps<typeof ToolbarPrimative.ToggleItem>, 'asChild'> & ComponentProps<typeof IconButton> & {
    active?: boolean;
};
type ToolbarSeparatorProps = Omit<ComponentProps<typeof ToolbarPrimative.Separator>, 'asChild'>;
type ToolbarLinkProps = Omit<ComponentProps<typeof ToolbarPrimative.Link>, 'asChild'> & ComponentProps<typeof StrapiLink>;
type ToolbarButtonProps = Omit<ComponentProps<typeof ToolbarPrimative.Button>, 'asChild'> & ComponentProps<typeof StrapiButton>;
declare const _default: {
    Root: ({ children, ...props }: ToolbarRootProps) => React.JSX.Element;
    ToggleGroup: ({ children, value: valueProp, defaultValue, onValueChange, type, ...props }: ToggleGroupProps) => React.JSX.Element;
    ToggleItem: ({ children, label, active, ...props }: ToggleItemProps) => React.JSX.Element;
    Separator: ({ className, ...props }: ToolbarSeparatorProps) => React.JSX.Element;
    Link: ({ children, ...props }: ToolbarLinkProps) => React.JSX.Element;
    Button: ({ className, children, ...props }: ToolbarButtonProps) => React.JSX.Element;
};
export default _default;
