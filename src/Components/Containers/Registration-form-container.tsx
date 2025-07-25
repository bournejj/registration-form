import React, {useState} from 'react';
import RegistrationForm from '../Molecules/Registration-form';

interface registrationFormData {
    email: String,
    password: String,
    plan: String
}

const RegistrationFormContainer: React.FC = () => {
    const [registrationFormData, setRegistrationFormData] = useState<registrationFormData>({
        email: 'hello',
        password: 'hello',
        plan: ''
    })
    return (
        <div>
            <h1>{registrationFormData.email}</h1>
            <RegistrationForm
            registrationFormData={registrationFormData}
            />
        </div>
    ) 
}

export default RegistrationFormContainer;