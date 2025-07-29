import React from 'react';
import Input from '../Atoms/Input/Input';
import {inputField} from './inputFieldStyles'

interface inputFieldProps {
    label: string,
    labelPosition?: 'top' | 'right';
    value: string,
    placeholder: string,
    name: string,
    type: string,
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<inputFieldProps> = ({label, labelPosition, value, placeholder, type, name, Icon, onChange}) => {
    return (
        <div>
          <div className={inputField({labelPosition})}>
            <label className={inputField({labelPosition})} >{label}</label>
            <Input
            type={type} 
            name={name}
            placeholder={placeholder}
            Icon={Icon}
            value={value}
            onChange={onChange}
            />
          </div>
        </div>
    )
}

export default InputField