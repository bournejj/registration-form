import { tv } from 'tailwind-variants';

export const button = tv({
    base: 'p-4',
    variants: {
        variant: {
            primary: '',
            secondary: 'bg-everwayBlue'
        },
    },
    defaultVariants: {
            variant: 'primary',
        },
});
