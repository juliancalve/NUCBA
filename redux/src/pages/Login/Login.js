import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/auth";

const Login = () => {

    const dispatch = useDispatch();
    const { token, error } = useSelector( store => store.user );

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleClick = () => {
        dispatch(loginAction({ email, password }));
    }
    
    useEffect(() => {
        console.log(token);
    }, [token])

    return (
        <div>
            <input onChange={handleChangeEmail} value={email} />
            <input onChange={handleChangePassword} value={password} />
            <button onClick={handleClick}>Me logueo</button>
            <h1>{token}</h1>
            {error && <p>Ocurrio un error</p>}
        </div>
    )
}



export default Login
