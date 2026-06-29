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
    to { opacity: 1; }
  `;

const Overlay = styled(SheetPrimitive.Overlay)`
  &[data-state='open'] {
    background: ${(props) => setOpacity(props.theme.colors.neutral800, 0.2)};
    position: fixed;
    inset: 0;
    z-index: ${(props) => props.theme.zIndices.overlay};
    will-change: opacity;

    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${overlayFadeIn};
      animation-duration: ${(props) => props.theme.motion.timings['200']};
      animation-timing-function: ${(props) => props.theme.motion.easings.easeInOutCubic};
    }
  }
`;

const contentShow = {
  left: keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,
  top: keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
  right: keyframes`
	from {
		opacity: 0;
		transform: translateX(100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`,
  bottom: keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
  reverse: {
    left: keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`,
    top: keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);

  }
`,
    right: keyframes`
	from {
		opacity: 1;
		transform: translateX(0);
	}
	to {
		opacity: 0;
		transform: translateX(100%);
	}
`,
    bottom: keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`,
  },
};

const StyledContent = styled(Grid.Root)`
  will-change: transform, opacity;
  animation-duration: ${(props) => props.theme.motion.timings['200']};
  animation-timing-function: ${(props) => props.theme.motion.easings.easeInOutCubic};
  grid-template-rows: 1fr;

  &[data-title='true'] {
    grid-template-rows: auto 1fr;

    &[data-footer='true'] {
      grid-template-rows: auto 1fr auto;
    }
  }

  &[data-title='false'][data-footer='true'] {
    grid-template-rows: 1fr auto;
  }

  &[data-side='top'] {
    animation-name: ${contentShow.top};

    &[data-state='closed'] {
      animation-name: ${contentShow.reverse.top};
    }
  }

  &[data-side='bottom'] {
    animation-name: ${contentShow.bottom};

    &[data-state='closed'] {
      animation-name: ${contentShow.reverse.bottom};
    }
  }

  &[data-side='left'] {
    animation-name: ${contentShow.left};

    &[data-state='closed'] {
      animation-name: ${contentShow.reverse.left};
    }
  }

  &[data-side='right'] {
    animation-name: ${contentShow.right};

    &[data-state='closed'] {
      animation-name: ${contentShow.reverse.right};
    }
  }
`;

const Content = ({
  children,
  width = '440px',
  height = '600px',
  side = 'right',
  hasTitle = false,
  hasFooter = false,
  ...props
}: Omit<React.ComponentProps<typeof SheetPrimitive.Content>, 'asChild' | 'onCloseAutoFocus'> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  hasTitle?: boolean;
  hasFooter?: boolean;
} & React.ComponentProps<typeof Flex>) => {
  return (
    <Portal>
      <Overlay />
      <SheetPrimitive.Content
        data-side={side}
        {...props}
        asChild
        onCloseAutoFocus={() => (document.body.style.pointerEvents = '')}
      >
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
          data-footer={hasFooter}
          data-title={hasTitle}
        >
          {children}
        </StyledContent>
      </SheetPrimitive.Content>
    </Portal>
  );
};

const Body = (props: React.ComponentProps<typeof Grid.Item>) => {
  return (
    <Grid.Item
      {...props}
      padding={6}
      width="100%"
      height="100%"
      margin={0}
      overflow="auto"
      style={{ display: 'block' }}
    />
  );
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

type SheetDialogProps = {
  /**
   * The title of the sheet dialog. If not provided, no title will be displayed.
   */
  title?: string;
  /**
   * Whether the sheet dialog is open or not. If not provided, the sheet dialog will be uncontrolled.
   */
  open?: boolean;
  /**
   * The width of the sheet dialog (left or right). If not provided, the default width will be used.
   */
  width?: React.CSSProperties['width'];
  /**
   * The height of the sheet dialog (top or bottom). If not provided, the default height will be used.
   */
  height?: React.CSSProperties['height'];
  /**
   * The content of the sheet dialog. If not provided, no content will be displayed.
   */
  children?: React.ReactNode;
  /**
   * Callback function that is called when the sheet dialog is closed. If not provided, no callback will be called.
   */
  onClose?: () => void;
  /**
   * The action buttons of the sheet dialog. If not provided, no action buttons will be displayed.
   */
  actionButtons?: React.ReactNode;
  /**
   * The side of the sheet dialog. If not provided, the default side will be used.
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export const SheetDialog = ({
  title,
  open,
  children,
  width,
  height,
  onClose,
  actionButtons,
  side,
}: SheetDialogProps) => {
  return (
    <Root open={open} onOpenChange={(state) => !state && onClose?.()}>
      <Content side={side} width={width} height={height} hasTitle={!!title} hasFooter={!!actionButtons}>
        {title && <Title>{title}</Title>}
        <Body>{children}</Body>
        {actionButtons && <Footer>{actionButtons}</Footer>}
      </Content>
    </Root>
  );
};

export default { Root, Trigger, Close, Content, Body, Footer, Title };
