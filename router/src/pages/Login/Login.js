import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginAction } from '../../redux/auth';
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        dispatch(LoginAction({ email, password, navigate }));
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input value={email} onChange={handleChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input value={password} onChange={handleChangePassword} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button onClick={handleClick} type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
