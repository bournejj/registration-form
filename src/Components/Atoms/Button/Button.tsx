import React from 'react';
import {button} from './buttonStyles'

interface buttonProps {
    label: string;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<buttonProps> = ({label, variant}) => {
    return (
       <button
       className={button({variant})}
       >
       {label}
       </button>
    )
}

export default Button;