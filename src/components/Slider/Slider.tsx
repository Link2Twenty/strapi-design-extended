import { Slider as SliderPrimative } from 'radix-ui';

// Hooks
import { useDesignTokens } from '../../hooks';

// Styles
import styles from './Slider.module.scss';
import { classCurried } from '../../utils/styles';

const cn = classCurried(styles);

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

export default function Slider({
  className,
  defaultValue,
  label,
  min = 0,
  max = 100,
  onValueChange,
  step = 1,
  style,
  value,
}: SliderProps) {
  useDesignTokens();

  const initialValue = value || defaultValue || [min];

  return (
    <SliderPrimative.Root
      className={cn('slider') + (className ? ` ${className}` : '')}
      value={value}
      defaultValue={initialValue}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      style={style}
    >
      <SliderPrimative.Track className={cn('slider__track')}>
        <SliderPrimative.Range className={cn('slider__range')} />
      </SliderPrimative.Track>
      {initialValue.map((_, index) => (
        <SliderPrimative.Thumb key={index} className={cn('slider__thumb')} aria-label={label} />
      ))}
    </SliderPrimative.Root>
  );
}
