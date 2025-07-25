import React, {useState} from 'react';
import RegistrationForm from '../Molecules/Registration-form';

const RegistrationFormContainer: React.FC = () => {
    const [registrationFormData, setRegistrationFormData] = useState({
        email: '',
        password: '',
        plan: ''
    })
    return (
        <div>
            <RegistrationForm/>
        </div>
    ) 
}

export default RegistrationFormContainer;