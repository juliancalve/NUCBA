import axios from "axios";
import { useState } from "react";

const Login = () => {

    const baseURL = 'http://localhost:3100/api';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = async () => {
        try {
            const response = await axios.post(`${baseURL}/login`, {
                email,
                password
            });
            const { data, problem } = response.data;
            if(problem) {
                setError(problem.message);
            } else {
                setError(null);
                setToken(data.token);
            }
        } catch( error ){
            alert(error);
        }
    }

    return (
        <div>
            <input value={email} onChange={handleEmailChange} placeholder='Email'/>
            <input value={password} onChange={handlePasswordChange} placeholder='Password' type='password'/>
            <button onClick={handleClick}>Login</button>
            {error ? <p style={{color: 'red'}}>{error}</p> : <h4>{token}</h4>}
        </div>
    )
}

export default Login
