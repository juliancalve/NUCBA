import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { post } from '../../services/auth';

const Login = () => {

    const [values, errors, onChange, disabled] = useForm(3);
    const [data, error, apiCall] = useFetch(
        {
            service: () => post('https://reqres.in/api/login', values)
        }
    );

    return (
        <div>
            <input name='email' onChange={onChange} value={values.email}/>
            <p style={{color:'red'}}>{errors.email}</p>
            <input name='password' onChange={onChange} value={values.password} />
            <p style={{color: 'red'}}>{errors.password}</p>
            <input name='age' onChange={onChange} value={values.age} />
            <p style={{color: 'red'}}>{errors.age}</p>
            <button disabled={disabled} onClick={apiCall}>Submit</button>
        </div>
    )
}

export default Login;
