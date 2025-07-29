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
          <div className='relative'>
             <input
             className='w-full border border-solid rounded-full py-2.5 px-3' 
             type={type} 
             name={name}
             value={value}
             placeholder={placeholder}
             onChange={onChange}
             />
          </div>
        </div>
    )
}

export default Input;