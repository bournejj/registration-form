import React from 'react';
import Input from '../../atoms/input/Input';
import {inputField} from './inputFieldStyles'

interface inputFieldProps {
    id: string,
    label: string,
    labelPosition?: 'top' | 'right';
    value: string,
    placeholder: string,
    name: string,
    type: string,
    variant?: 'radio' | 'text',
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<inputFieldProps> = ({id, label, labelPosition, value, placeholder, type, name, variant, Icon, onChange}) => {
    return (
        <div className={inputField({labelPosition})}>
          <label id={id} htmlFor={id} className={inputField({labelPosition})} >{label}</label>
          <Input
          variant={variant}
          id={id}
          type={type} 
          name={name}
          placeholder={placeholder}
          Icon={Icon}
          value={value}
          onChange={onChange}
          />
        </div>
    )
}

export default InputField