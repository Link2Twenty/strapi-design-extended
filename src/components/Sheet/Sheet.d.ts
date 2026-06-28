import { Dialog as SheetPrimitive } from 'radix-ui';
import { Button, Flex, Grid, Typography } from '@strapi/design-system';

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
export declare const SheetDialog: ({ title, open, children, width, height, onClose, actionButtons, side, }: SheetDialogProps) => import("react").JSX.Element;
declare const _default: {
    Root: (props: React.ComponentProps<typeof SheetPrimitive.Root>) => import("react").JSX.Element;
    Trigger: (props: Omit<React.ComponentProps<typeof SheetPrimitive.Trigger>, "asChild"> & React.ComponentProps<typeof Button>) => import("react").JSX.Element;
    Close: (props: React.ComponentProps<typeof SheetPrimitive.Close>) => import("react").JSX.Element;
    Content: ({ className, children, width, height, side, ...props }: Omit<React.ComponentProps<typeof SheetPrimitive.Content>, "asChild"> & {
        side?: "top" | "right" | "bottom" | "left";
    } & React.ComponentProps<typeof Flex>) => import("react").JSX.Element;
    Body: (props: React.ComponentProps<typeof Grid.Item>) => import("react").JSX.Element;
    Footer: (props: React.ComponentProps<typeof Grid.Item>) => import("react").JSX.Element;
    Title: (props: Omit<React.ComponentProps<typeof SheetPrimitive.Title>, "asChild"> & React.ComponentProps<typeof Typography>) => import("react").JSX.Element;
};
export default _default;
