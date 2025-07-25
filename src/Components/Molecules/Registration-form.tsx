import React from 'react';

interface registrationFormData {
  email: String,
  password: String,
  plan: String
}

interface registrationFormProps {
  registrationFormData: registrationFormData,
}

const RegistrationForm: React.FC<registrationFormProps> = ({registrationFormData}) => {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="">
              <h1> Registration form </h1>
              <form action="">
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
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