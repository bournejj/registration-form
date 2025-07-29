import { tv } from 'tailwind-variants';

export const button = tv({
    base: 'p-4',
    variants: {
        variant: {
            primary: 'bg-everwayBlue rounded-[96px] text-white',
            secondary: ''
        },
    },
    defaultVariants: {
            variant: 'primary',
        },
});
