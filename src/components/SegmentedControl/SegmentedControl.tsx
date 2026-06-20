import { Children, isValidElement, ReactElement, useEffect, useMemo, useState, cloneElement } from 'react';
import { ToggleGroup } from 'radix-ui';

// Components
import { Button, Grid } from '@strapi/design-system';

// Types
import type { ComponentProps } from 'react';

type SegmentedControlRootProps = Omit<
  ComponentProps<typeof ToggleGroup.Root>,
  'type' | 'asChild' | 'onValueChange' | 'onChange'
> & {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Root = ({ children, value: valueProp, defaultValue, onChange, ...props }: SegmentedControlRootProps) => {
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

  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const childValue = (child.props as any).value;
      const isActive = value === childValue;

      return cloneElement(child as ReactElement<any>, { active: isActive });
    }
    return child;
  });

  return (
    <ToggleGroup.Root asChild type="single" {...props} onValueChange={handleValueChange} value={value}>
      <Grid.Root
        background="neutral100"
        borderColor="neutral200"
        borderWidth="1px"
        gap={1}
        gridCols={clonedChildren?.length ?? 0}
        hasRadius
        padding={1}
      >
        {clonedChildren}
      </Grid.Root>
    </ToggleGroup.Root>
  );
};

type SegmentedControlItemProps = Omit<ComponentProps<typeof ToggleGroup.Item>, 'asChild'> & {
  active?: boolean;
};

const Item = ({ active, children, ...props }: SegmentedControlItemProps) => {
  return (
    <ToggleGroup.Item asChild {...props}>
      <Button variant={active ? 'tertiary' : 'ghost'} style={active ? { pointerEvents: 'none' } : undefined}>
        {children}
      </Button>
    </ToggleGroup.Item>
  );
};

export default { Root, Item };
