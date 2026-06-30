import { HoverCard as HoverCardPrimitive } from 'radix-ui';
import styled, { keyframes } from 'styled-components';
import { Box } from '@strapi/design-system';

// Types
import type { ComponentProps } from 'react';

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledContent = styled(Box)`
  animation-duration: ${(props) => props.theme.motion.timings['200']};
  animation-timing-function: ${(props) => props.theme.motion.easings.easeInOutCubic};
  will-change: transform, opacity;

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side='right'] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side='left'] {
      animation-name: ${slideRightAndFade};
    }
  }
`;

const Content = ({ children, ...props }: ComponentProps<typeof HoverCardPrimitive.Content>) => {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content {...props} asChild>
        <StyledContent
          hasRadius
          padding={4}
          width="auto"
          minWidth={120}
          background="neutral0"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="neutral150"
          shadow="filterShadow"
          zIndex="overlay"
        >
          {children}
        </StyledContent>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
};

type HoverElementProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
} & ComponentProps<typeof HoverCardPrimitive.Content>;

export const HoverElement = ({ trigger, children, ...props }: HoverElementProps) => {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>{trigger}</HoverCardPrimitive.Trigger>
      <Content {...props}>{children}</Content>
    </HoverCardPrimitive.Root>
  );
};

export default {
  Root: HoverCardPrimitive.Root,
  Trigger: HoverCardPrimitive.Trigger,
  Content,
};
