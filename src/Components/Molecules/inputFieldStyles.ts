import { tv } from 'tailwind-variants';

export const inputField = tv({
    base: 'flex',
    variants: {
        labelPosition: {
            top: 'flex-col',
            right: 'flex-row order-2 gap-2'
        },
    },
    defaultVariants: {
            labelPosition: 'top',
        },
});
