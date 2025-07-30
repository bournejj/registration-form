import { tv } from 'tailwind-variants';

export const button = tv({
    base: 'py-[13px] px-[20px]',
    variants: {
        variant: {
            primary: 'bg-everwayBlue rounded-[96px] text-white hover:bg-[#1A407A]  hover:text-everywayBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300',
            secondary: 'hover:text-[#474747] text-everywayBlack'
        },
    },
    defaultVariants: {
            variant: 'primary',
        },
});
