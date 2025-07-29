import React from 'react';

interface inputProps {
    value: string,
    placeholder: string,
    name: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({value, placeholder, type, name, onChange}) => {
    return (
        <div>
           <input 
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