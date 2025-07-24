import React from 'react';

interface registrationformProps {
}

const RegistrationForm: React.FC<registrationformProps> = ({}) => {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="">
              <h1> Registration Form </h1>
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