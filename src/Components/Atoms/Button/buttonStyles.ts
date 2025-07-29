import { tv } from 'tailwind-variants';

export const button = tv({
    base: 'p-4',
    variants: {
        variant: {
            primary: 'bg-red',
            secondary: 'bg-black'
        },
    },
    defaultVariants: {
            variant: 'primary',
        },
});
