import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';


const useForm = (fields) => {
    
    const [values, setValues] = useState({});
    
    const [errors, setErrors] = useState({});

    const [disabled, setDisabled] = useState(true);
    
    const checkErrors = () => {
        const newErrors = {};
        for(const value in values){
            const currValue = values[value];
            if(value === 'email'){
                if(currValue.length < 6 || !currValue.includes('@') || !currValue.includes('.com')){
                    newErrors.email = 'El Email no es valido'
                }
            } else if (value === 'password') {
                if(currValue.length < 6) {
                    newErrors.password = 'La contraseña no es lo suficientemente larga';
                }
            } else if (value === 'age') {
                if(currValue < 18) {
                    newErrors.age = 'La persona debe ser mayor de edad';
                }
            }
            
        }

        setErrors(newErrors);
    };


    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        checkErrors();
    }, [values]);
    
    useEffect(() => {
        if(Object.entries(values).length === fields && !Object.values(values).some(x => x === '') && Object.entries(errors).length === 0) {
            setDisabled(false);
        } else {
            setDisabled(true);

        }
    }, [values, errors])

    
    return [values, errors, onChange, disabled];
}

export default useForm
