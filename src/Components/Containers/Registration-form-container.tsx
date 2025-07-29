import React, {useState} from 'react';
import RegistrationForm from '../Organism/Registration-form';

interface registrationFormData {
    email: string,
    password: string,
    plan: string
}

const RegistrationFormContainer: React.FC = () => {
    const [registrationFormData, setRegistrationFormData] = useState<registrationFormData>({
        email: '',
        password: '',
        plan: ''
    })

    const handleFormSubmit = () => {
      console.log('submitted')
    }
    
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
    
      setRegistrationFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };
    return (
        <div>
            <RegistrationForm
            registrationFormData={registrationFormData}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
            />
        </div>
    ) 
}

export default RegistrationFormContainer;