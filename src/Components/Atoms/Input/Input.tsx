import React from 'react';
import { input } from './inputStyles';

interface inputProps {
    id: string,
    value: string,
    placeholder: string,
    name: string,
    type: string,
    variant?: 'radio' | 'text',
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({id, value, placeholder, type, name, variant, Icon, onChange}) => {
    return (
        <div className='relative'>
          {Icon && 
            <Icon className='absolute left-3 -translate-y-1/2 top-1/2'
            aria-hidden="true"
            focusable="false"
            /> 
          }  
          <input
          className={input({variant})}
          id={id}
          type={type} 
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          />
        </div>
    )
}

export default Input;