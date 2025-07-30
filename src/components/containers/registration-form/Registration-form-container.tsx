import React, {useState} from 'react';
import RegistrationForm from '../../organisms/registration-form/Registration-form';

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
    
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
    
      setRegistrationFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };
    return (
      <RegistrationForm
      registrationFormData={registrationFormData}
      handleFormChange={handleFormChange}
      />
    ) 
}

export default RegistrationFormContainer;