import React from 'react';
import Input from '../Atoms/Input';

interface registrationFormData {
  email: string,
  password: string,
  plan: string
}

interface registrationFormProps {
  registrationFormData: registrationFormData,
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegistrationForm: React.FC<registrationFormProps> = ({registrationFormData, handleFormChange, handleFormSubmit}: registrationFormProps) => {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="">
              <h1> email: {registrationFormData.email} </h1>
              <h1> password: {registrationFormData.password} </h1>
              <h1> plan: {registrationFormData.plan} </h1>
              <form action="">
                <div>
                  <Input 
                  type="email" 
                  name="email"
                  placeholder='please add email'
                  value={registrationFormData.email}
                  onChange={handleFormChange}
                  />
                </div>
                <div>
                  <Input 
                  type="password"
                  name="password"
                  placeholder='please add password'
                  value={registrationFormData.password} 
                  onChange={handleFormChange}
                  />
                </div>
                <div className='flex'>
                    <Input 
                    type="radio" 
                    name="plan"
                    value="Basic"
                    placeholder='please add plan'
                    onChange={handleFormChange} 
                    />
                    <Input 
                    type="radio" 
                    name="plan"
                    value="Pro" 
                    placeholder='please add plan'
                    onChange={handleFormChange} 
                    />
                    <Input 
                    type="radio" 
                    name="plan"
                    value="Enterprise"
                    placeholder='please add plan' 
                    onChange={handleFormChange} 
                    />
                </div>
                <button>Cancel</button>
                <button>Register</button>
              </form>
            </div>
        </div>
    )
}

export default RegistrationForm;