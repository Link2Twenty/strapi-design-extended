type SegmentedControlRootProps = {
    className?: HTMLElement['className'];
    children?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    style?: React.CSSProperties;
};
type SegmentedControlItemProps = {
    className?: HTMLElement['className'];
    value: string;
    children: string;
    style?: React.CSSProperties;
    disabled?: boolean;
};
declare const _default: {
    Root: ({ className, children, value: valueProp, defaultValue, onChange, style }: SegmentedControlRootProps) => import("react").JSX.Element;
    Item: ({ className, value, children, style, disabled }: SegmentedControlItemProps) => import("react").JSX.Element;
};
export default _default;
