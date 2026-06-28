import { Dialog as SheetPrimitive } from 'radix-ui';

// Components
import { Button, Flex, Grid, setOpacity, Typography } from '@strapi/design-system';

// Styled
import styled, { keyframes } from 'styled-components';

// Types
import type { TypographyComponent } from '@strapi/design-system';

const Root = (props: React.ComponentProps<typeof SheetPrimitive.Root>) => {
  return <SheetPrimitive.Root {...props} />;
};

const Trigger = (
  props: Omit<React.ComponentProps<typeof SheetPrimitive.Trigger>, 'asChild'> & React.ComponentProps<typeof Button>,
) => {
  return (
    <SheetPrimitive.Trigger {...props} asChild>
      <Button>{props.children}</Button>
    </SheetPrimitive.Trigger>
  );
};

const Close = (props: React.ComponentProps<typeof SheetPrimitive.Close>) => {
  return <SheetPrimitive.Close {...props} />;
};

const Portal = (props: React.ComponentProps<typeof SheetPrimitive.Portal>) => {
  return <SheetPrimitive.Portal {...props} />;
};

const overlayFadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 0.2; }
  `;

const Overlay = styled(SheetPrimitive.Overlay)`
  background: ${(props) => setOpacity(props.theme.colors.neutral800, 0.2)};
  position: fixed;
  inset: 0;
  z-index: ${(props) => props.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayFadeIn} ${(props) => props.theme.motion.timings['200']}
      ${(props) => props.theme.motion.easings.authenticMotion};
  }
`;

const StyledContent = styled(Grid.Root)`

`;

const Content = ({
  className,
  children,
  width = '500px',
  height = '600px',
  side = 'right',
  showCloseButton = true,
  ...props
}: Omit<React.ComponentProps<typeof SheetPrimitive.Content>, 'asChild'> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
} & React.ComponentProps<typeof Flex>) => {
  return (
    <Portal>
      <Overlay />
      <SheetPrimitive.Content data-side={side} className={className} {...props} asChild>
        <StyledContent
          gap={2}
          gridCols={1}
          background="neutral0"
          shadow="filterShadow"
          zIndex="modal"
          position="fixed"
          top={side === 'bottom' ? 'auto' : 0}
          right={side === 'left' ? 'auto' : 0}
          bottom={side === 'top' ? 'auto' : 0}
          left={side === 'right' ? 'auto' : 0}
          width={side === 'top' || side === 'bottom' ? '100%' : width}
          maxWidth={side === 'top' || side === 'bottom' ? '100%' : '98%'}
          height={side === 'left' || side === 'right' ? '100%' : height}
          maxHeight={side === 'left' || side === 'right' ? '100%' : '98%'}
          style={{ gridTemplateRows: 'auto 1fr auto' }}
        >
          {children}
        </StyledContent>
      </SheetPrimitive.Content>
    </Portal>
  );
};

const Body = (props: React.ComponentProps<typeof Grid.Item>) => {
  return <Grid.Item {...props} padding={6} width="100%" height="100%" margin={0} alignItems="none" overflow="auto" />;
};

const StyledFooter = styled(Grid.Item)`
  border-top: solid 1px ${(props) => props.theme.colors.neutral150};
`;

const Footer = (props: React.ComponentProps<typeof Grid.Item>) => {
  return <StyledFooter {...props} padding={6} width="100%" />;
};

const StyledTitle = styled<TypographyComponent<'h2'>>(Typography)`
  text-align: center;
  border-bottom: solid 1px ${(props) => props.theme.colors.neutral150};
`;

const Title = (
  props: Omit<React.ComponentProps<typeof SheetPrimitive.Title>, 'asChild'> & React.ComponentProps<typeof Typography>,
) => {
  return (
    <Grid.Item width="100%">
      <SheetPrimitive.Title asChild {...props}>
        <StyledTitle variant="beta" textColor="neutral800" tag="h2" padding={6} width="100%">
          {props.children}
        </StyledTitle>
      </SheetPrimitive.Title>
    </Grid.Item>
  );
};

export default { Root, Trigger, Close, Content, Body, Footer, Title };
