import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { post } from '../../services/auth';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, error, apiCall] = useFetch({
        service: () => post('https://reqres.in/api/register', { email, password })
    })

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <input onChange={handleEmailChange} value={email}/>
            <input onChange={handlePasswordChange} value={password} />
            { error && <p style={{color: 'red'}}>Hubo un error y fue {error}</p>}
            <button onClick={apiCall}>Submit</button>
        </div>
    )
}

export default Register
