import React from 'react';
import Input from '../Atoms/Input/Input';
import Button from '../Atoms/Button/Button';
import {ReactComponent as EmailIcon} from '../../assets/icons/email.svg';
import {ReactComponent as PasswordIcon} from '../../assets/icons/password.svg'

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
      <div>
        <div className='p-6'>
        <h1 className='text-xl font-normal'>Register</h1>
          {/* <img className='w-11' src={person-working} alt="" /> */}
              {/* <h1> email: {registrationFormData.email} </h1>
              <h1> password: {registrationFormData.password} </h1>
              <h1> plan: {registrationFormData.plan} </h1> */}
              <form action="">
                <div className='py-6'>
                <div className='py-4'>
                  <span>Email</span>
                  <Input 
                  type="email" 
                  name="email"
                  placeholder='please add email'
                  Icon={EmailIcon}
                  value={registrationFormData.email}
                  onChange={handleFormChange}
                  />
                </div>
                <div className='py-4'>
                  <span>Password</span>
                  <Input 
                  type="password"
                  name="password"
                  placeholder='please add password'
                  Icon={PasswordIcon}
                  value={registrationFormData.password} 
                  onChange={handleFormChange}
                  />
                </div>
                <span>Plan</span>
                <div className='flex pt-4 gap-4'>
                  <div className='flex gap-3'>
                    <Input 
                    type="radio" 
                    name="plan"
                    value="Basic"
                    placeholder='please add plan'
                    onChange={handleFormChange} 
                    />
                    <span>Basic</span>
                  </div>
                   <div className='flex gap-3'>
                    <Input 
                    type="radio" 
                    name="plan"
                    value="Pro" 
                    placeholder='please add plan'
                    onChange={handleFormChange} 
                    />
                    <span>Pro</span>
                    </div>
                    <div className='flex gap-3'>
                    <Input 
                    type="radio" 
                    name="plan"
                    value="Enterprise"
                    placeholder='please add plan' 
                    onChange={handleFormChange} 
                    />
                    <span>Enterprise</span>
                    </div>
                </div>
                </div>
                <div className='flex justify-end'>
                 <Button
                label='Cancel'
                variant='secondary'
                />
               <Button
                label='Register'
                variant='primary'
                />
                </div>
              </form>
        </div>
      </div>
    )
}

export default RegistrationForm;