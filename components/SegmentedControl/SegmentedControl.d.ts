import { ToggleGroup } from 'radix-ui';
import { ComponentProps } from '../../../node_modules/react';

type SegmentedControlRootProps = Omit<ComponentProps<typeof ToggleGroup.Root>, 'type' | 'asChild' | 'onValueChange' | 'onChange'> & {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
};
type SegmentedControlItemProps = Omit<ComponentProps<typeof ToggleGroup.Item>, 'asChild'> & {
    active?: boolean;
};
declare const _default: {
    Root: ({ children, value: valueProp, defaultValue, onChange, ...props }: SegmentedControlRootProps) => import("react").JSX.Element;
    Item: ({ active, children, ...props }: SegmentedControlItemProps) => import("react").JSX.Element;
};
export default _default;
