import { tv } from 'tailwind-variants';

export const input = tv({
    base: 'border border-solid rounded-2xl py-2.5 px-3 pl-10 accent-everwayBlue',
    variants: {
        variant: {
            radio: '',
            text: 'w-full'
        },
    },
    defaultVariants: {
            variant: 'text',
        },
});
