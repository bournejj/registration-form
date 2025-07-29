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
           className='form-radio border border-solid rounded-full py-2.5 px-3 text-yellow-400 checked:bg-yellow-600' 
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