import React from 'react';
import InputField from '../Molecules/InputField';
import Input from '../Atoms/Input/Input'
import Button from '../Atoms/Button/Button';
import {ReactComponent as EmailIcon} from '../../assets/icons/email.svg';
import {ReactComponent as PasswordIcon} from '../../assets/icons/password.svg'
import personWorking from '../../assets/Images/person-working.jpg'

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
          <div className="border rounded-lg">
            <img className='w-full' src={personWorking} alt="" />
              {/* <h1> email: {registrationFormData.email} </h1>
              <h1> password: {registrationFormData.password} </h1>
              <h1> plan: {registrationFormData.plan} </h1> */}
            <form className='p-6' action="">
               <h1 className='text-xl font-normal'>Register</h1>
              <div className=''>
                <div className='py-4'>
                  <InputField
                  label='Email' 
                  type="email" 
                  name="email"
                  placeholder='email@example.com'
                  Icon={EmailIcon}
                  value={registrationFormData.email}
                  onChange={handleFormChange}
                  />
                </div>
                <div className='py-4'>
                  <InputField 
                  label='Password'
                  type="password"
                  name="password"
                  placeholder='Password'
                  Icon={PasswordIcon}
                  value={registrationFormData.password} 
                  onChange={handleFormChange}
                  />
                </div>
                <div className='flex pt-4 gap-4'>
                  <div className='flex gap-3'>
                    <InputField
                    labelPosition='right'
                    label='Basic'
                    type="radio" 
                    name="plan"
                    value="Basic"
                    placeholder='please add plan'
                    onChange={handleFormChange} 
                    />
                  </div>
                  <div className='flex gap-3'>
                    <InputField
                    labelPosition='right'
                    label='Pro'
                    type="radio" 
                    name="plan"
                    value="Pro" 
                    placeholder='please add plan'
                    onChange={handleFormChange} 
                    />
                  </div>
                  <div className='flex gap-3'>
                    <InputField
                    labelPosition='right'
                    label='Enterprise'
                    type="radio" 
                    name="plan"
                    value="Enterprise"
                    placeholder='please add plan' 
                    onChange={handleFormChange} 
                    />
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
      </div>
    )
}

export default RegistrationForm;