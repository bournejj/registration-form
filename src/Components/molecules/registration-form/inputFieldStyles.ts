import { tv } from 'tailwind-variants';

export const inputField = tv({
    base: 'flex pb-1 text-sm font-normal text-everywayBlack',
    variants: {
        labelPosition: {
            top: 'flex-col',
            right: 'flex-row order-2 gap-2 items-center justify-center'
        },
    },
    defaultVariants: {
            labelPosition: 'top',
        },
});
