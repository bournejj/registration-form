import React from 'react';

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
              <form action="">
                <div>
                  <input 
                  type="email" 
                  name="email"
                  value={registrationFormData.email}
                  onChange={handleFormChange}
                  />
                </div>
                <div>
                  <input 
                  type="password"
                  name="password"
                  value={registrationFormData.password} 
                  onChange={handleFormChange}
                  />
                </div>
                <div>
                    <input type="radio" name="" id="" />
                    <input type="radio" name="" id="" />
                    <input type="radio" name="" id="" />
                </div>
                <button>Cancel</button>
                <button>Register</button>
              </form>
            </div>
        </div>
    )
}

export default RegistrationForm;