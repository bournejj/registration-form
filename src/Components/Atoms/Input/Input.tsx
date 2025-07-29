import React from 'react';

interface inputProps {
    value: string,
    placeholder: string,
    name: string,
    type: string,
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({value, placeholder, type, name, Icon, onChange}) => {
    return (
        <div>
          <div className='relative'>
            {Icon && <Icon className='absolute left-3 -translate-y-1/2 top-1/2'/> }   
             <input
             className='w-full border border-solid rounded-2xl py-2.5 px-3 pl-10' 
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