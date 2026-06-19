import { Children, isValidElement, useEffect, useMemo, useState } from 'react';
import { ToggleGroup } from 'radix-ui';

// Components
import { Typography } from '@strapi/design-system';

// Hooks
import { useDesignTokens } from '../../hooks';

// Styles
import styles from './SegmentedControl.module.scss';
import { classCurried } from '../../utils/styles';

const cn = classCurried(styles);

type SegmentedControlRootProps = {
  className?: HTMLElement['className'];
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
};
const Root = ({ className, children, value: valueProp, defaultValue, onChange, style }: SegmentedControlRootProps) => {
  useDesignTokens();

  const firstValue = useMemo(() => {
    return Children.toArray(children)
      .map((child) => (isValidElement<{ value?: string }>(child) ? child.props.value : undefined))
      .find((val) => typeof val === 'string');
  }, [children]);

  const [localValue, setLocalValue] = useState<string>(() => {
    if (defaultValue !== undefined) return defaultValue;
    return firstValue ?? '';
  });

  useEffect(() => {
    if (valueProp === undefined && defaultValue === undefined && !localValue && firstValue) {
      setLocalValue(firstValue);
    }
  }, [firstValue, valueProp, defaultValue, localValue]);

  const value = valueProp !== undefined ? valueProp : localValue;

  const handleValueChange = (newValue: string) => {
    if (newValue) {
      if (valueProp === undefined) {
        setLocalValue(newValue);
      }
      onChange?.(newValue);
    }
  };

  return (
    <ToggleGroup.Root
      value={value}
      className={cn('segmented-control') + (className ? ` ${className}` : '')}
      style={style}
      type="single"
      onValueChange={handleValueChange}
    >
      {children}
    </ToggleGroup.Root>
  );
};

type SegmentedControlItemProps = {
  className?: HTMLElement['className'];
  value: string;
  children: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};
const Item = ({ className, value, children, style, disabled }: SegmentedControlItemProps) => {
  return (
    <ToggleGroup.Item
      disabled={disabled}
      className={cn('segmented-control__item') + (className ? ` ${className}` : '')}
      value={value}
      style={style}
    >
      <Typography
        variant="pi"
        fontWeight="bold"
        textTransform="uppercase"
        textColor={disabled ? 'neutral400' : 'neutral600'}
      >
        {children}
      </Typography>
    </ToggleGroup.Item>
  );
};

export default { Root, Item };
