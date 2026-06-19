type SliderProps = {
    value?: number[];
    defaultValue?: [number] | [number, number];
    onValueChange?: (value: number[]) => void;
    min?: number;
    max?: number;
    step?: number;
    style?: React.CSSProperties;
    label?: string;
    className?: HTMLElement['className'];
};
export default function Slider({ className, defaultValue, label, min, max, onValueChange, step, style, value, }: SliderProps): import("react").JSX.Element;
export {};
