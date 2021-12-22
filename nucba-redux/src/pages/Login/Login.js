import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginAction } from '../../redux/auth';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = () => {
        dispatch(loginAction({ email, password }));
    }

    return (
        <div>
            <h1>login</h1>
            <form>
                <input
                    type='text'
                    value={email}
                    placeholder='Email'
                    onChange={handleEmailChange}
                />
                <input
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={handlePasswordChange}
                />
                <button type='button' onClick={onLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login
