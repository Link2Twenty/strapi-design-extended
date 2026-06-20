import React, { useState, useEffect, useMemo, isValidElement, Children } from 'react';
import { Toolbar as ToolbarPrimative } from 'radix-ui';

// Components
import { Button as StrapiButton, Link as StrapiLink, IconButton, Flex, Box } from '@strapi/design-system';

// Hooks
import { useDesignTokens } from '../../hooks';

// Types
import type { ComponentProps, ReactElement } from 'react';

const Root = ({ children, ...props }: ComponentProps<typeof ToolbarPrimative.Root>) => {
  useDesignTokens();

  return (
    <ToolbarPrimative.Root {...props} asChild>
      <Flex hasRadius background="neutral100" padding={1} gap={1} borderColor="neutral200" borderWidth="1px">
        {children}
      </Flex>
    </ToolbarPrimative.Root>
  );
};

const ToggleGroup = ({
  children,
  value: valueProp,
  defaultValue,
  onValueChange,
  type,
  ...props
}: ComponentProps<typeof ToolbarPrimative.ToggleGroup>) => {
  const isSingle = type === 'single';

  const firstValue = useMemo(() => {
    return Children.toArray(children)
      .map((child) => (isValidElement(child) ? (child.props as any).value : undefined))
      .find((val) => typeof val === 'string');
  }, [children]);

  // Determine initial local value
  const [localValue, setLocalValue] = useState<any>(() => {
    if (defaultValue !== undefined) return defaultValue;
    if (isSingle) return firstValue;
    return undefined;
  });

  // Keep it sync'd with firstValue changing when no default/value is supplied
  useEffect(() => {
    if (isSingle && valueProp === undefined && defaultValue === undefined && !localValue && firstValue) {
      setLocalValue(firstValue);
    }
  }, [isSingle, firstValue, valueProp, defaultValue, localValue]);

  const value = valueProp !== undefined ? valueProp : localValue;

  const handleValueChange = (newValue: any) => {
    // If it is single selection, there must always be at least one selected.
    // So if newValue is empty/falsy, do not change the value.
    if (isSingle) {
      if (newValue) {
        if (valueProp === undefined) {
          setLocalValue(newValue);
        }
        (onValueChange as any)?.(newValue);
      }
    } else {
      if (valueProp === undefined) {
        setLocalValue(newValue);
      }
      (onValueChange as any)?.(newValue);
    }
  };

  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const childValue = (child.props as any).value;
      const isActive = isSingle ? value === childValue : Array.isArray(value) ? value.includes(childValue) : false;

      return React.cloneElement(child as ReactElement<any>, { active: isActive });
    }
    return child;
  });

  return (
    <ToolbarPrimative.ToggleGroup
      asChild
      value={value}
      onValueChange={handleValueChange}
      type={type}
      {...(props as any)}
    >
      <Flex gap={1}>{clonedChildren}</Flex>
    </ToolbarPrimative.ToggleGroup>
  );
};

const ToggleItem = ({
  children,
  label,
  active,
  ...props
}: Omit<ComponentProps<typeof ToolbarPrimative.ToggleItem>, 'asChild'> &
  ComponentProps<typeof IconButton> & { active?: boolean }) => {
  return (
    <ToolbarPrimative.ToggleItem asChild {...props}>
      <IconButton label={label} variant={active ? 'tertiary' : 'ghost'}>
        {children}
      </IconButton>
    </ToolbarPrimative.ToggleItem>
  );
};

const Separator = ({ className, ...props }: ComponentProps<typeof ToolbarPrimative.Separator>) => {
  return (
    <ToolbarPrimative.Separator {...props} asChild>
      <Box
        width="1px"
        marginLeft={2}
        marginRight={2}
        marginTop={1}
        marginBottom={1}
        background="neutral200"
        style={{ alignSelf: 'stretch' }}
      />
    </ToolbarPrimative.Separator>
  );
};

const Link = ({
  children,
  ...props
}: Omit<ComponentProps<typeof ToolbarPrimative.Link>, 'asChild'> & ComponentProps<typeof StrapiLink>) => {
  return (
    <ToolbarPrimative.Link asChild {...props}>
      <StrapiLink margin="auto 0">{children}</StrapiLink>
    </ToolbarPrimative.Link>
  );
};

const Button = ({
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof ToolbarPrimative.Button>, 'asChild'> & ComponentProps<typeof StrapiButton>) => {
  return (
    <ToolbarPrimative.Button asChild {...props}>
      <StrapiButton>{children}</StrapiButton>
    </ToolbarPrimative.Button>
  );
};

export default { Root, ToggleGroup, ToggleItem, Separator, Link, Button };
