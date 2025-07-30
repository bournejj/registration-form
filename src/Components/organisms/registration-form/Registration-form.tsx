import React from 'react';
import InputField from '../../molecules/registration-form/InputField';
import Button from '../../atoms/button/Button';
import {ReactComponent as EmailIcon} from '../../../assets/icons/email.svg';
import {ReactComponent as PasswordIcon} from '../../../assets/icons/password.svg'
import {ReactComponent as LockIcon} from '../../../assets/icons/lock.svg'
import personWorking from '../../../assets/Images/person-working.jpg'

interface registrationFormData {
  email: string,
  password: string,
  plan: string
}

interface registrationFormProps {
  registrationFormData: registrationFormData,
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegistrationForm: React.FC<registrationFormProps> = ({registrationFormData, handleFormChange}: registrationFormProps) => {
    return (
      <div>
        <div className='w-full px-11 py-[11px] border-b-2'>
          <h1 className='text-[20px]'>Productivity Pro</h1>
          <p>Unlocking the full productivity of every person</p>
        </div>
        <div className='p-6 max-w-[482px] max-h-[584px] m-auto'>
          <div className="shadow-lg rounded-[20px] overflow-hidden">
            <img className='w-full' src={personWorking} alt="" />
            <form action="">
              <div className='px-6 pt-6 pb-[26px]'>
                <h2 className='text-xl font-semibold text-everywayBlack'>Register</h2>
                <div className='py-4'>
                  <InputField
                  id='Email'
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
                  id='Password'
                  label='Password'
                  type="password"
                  name="password"
                  placeholder='Password'
                  Icon={LockIcon}
                  value={registrationFormData.password} 
                  onChange={handleFormChange}
                  />
                </div>
                <div>
                  <fieldset>
                    <legend className='pb-1 text-everywayBlack'>Plan</legend>
                    <div className='flex gap-4'>
                      <div className='flex gap-3'>
                        <InputField
                        id='Basic'
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
                        variant='radio'
                        id='Pro'
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
                        id='Enterprise'
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
                  </fieldset>
                </div>
              </div>
              <div className='flex justify-end gap-4 border-t-[1px] py-4 px-6'>
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