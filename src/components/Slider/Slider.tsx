// Components
import { Slider as SliderPrimative } from 'radix-ui';
import { Box, Flex } from '@strapi/design-system';

// Types
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
  const initialValue = value || defaultValue || [min];

  return (
    <SliderPrimative.Root
      asChild
      className={className}
      value={value}
      defaultValue={initialValue}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      style={style}
    >
      <Flex position="relative" alignItems="center" justifyContent="center" width="200px" height="2rem">
        <SliderPrimative.Track asChild>
          <Box position="relative" flex="1 0 0" height="1rem" background="neutral200" borderRadius={1}>
            <SliderPrimative.Range asChild>
              <Box position="absolute" background="primary600" borderRadius={1} height="100%" />
            </SliderPrimative.Range>
          </Box>
        </SliderPrimative.Track>
        {initialValue.map((_, index) => (
          <SliderPrimative.Thumb key={index} aria-label={label} asChild>
            <Box
              tag="span"
              display="block"
              width="1rem"
              height="2rem"
              background="neutral0"
              borderWidth="1px"
              borderColor="neutral500"
              borderRadius={1}
              style={{ outlineOffset: '-1px', touchAction: 'none' }}
              cursor="pointer"
            />
          </SliderPrimative.Thumb>
        ))}
      </Flex>
    </SliderPrimative.Root>
  );
}
