import './Login.scss';


// BEM Bloque Elemento Modificador
// Bloque__Elemento--Modificador

const Login = () => {
    return (
        <div className='login__container'>
            <h1>Hola</h1>
            <input className='login__input'/>
            <button className='login__button--green'>Aceptar</button>
            <button className='login__button--red'>Cancelar</button>
        </div>
    )
}

export default Login
