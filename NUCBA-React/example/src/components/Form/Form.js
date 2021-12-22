import { useState } from 'react';
import './Form.css';

const Form = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [accept, setAccept] = useState(false);
    // const [disable, setDisable] = useState(true);

    // const [data, setData] = useState({ name: 'pepe', age: 0 });
    // const handleChangeData = (e) => {
    //     console.log(data[e.target.name])

    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value
    //     });
    // }

    //En el estado, no podemos setearle un nuevo valor con =
    // por ejemplo name = 'otro nombre' NO SE PUEDE HACER
    // setName('otro nombre');

    const handleChangeName = (e) => {
        setName(e.target.value);
        // checkDisable();
    }

    const handleChangeAge = (e) => {
        setAge(e.target.value);
        // checkDisable();
    }

    const handleClick = () => {
        alert(`Hola mi nombre es ${name} y mi edad es ${age}`);
    }

    const handleChangeCountry = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
        // checkDisable();
    }

    const handleCheck = (e) => {
        setAccept(e.target.checked);
        // checkDisable();
    }

    // const checkDisable = () => {
    //     console.log('Estoy checkeando');
    //     let flag = true;
    //     if(name && age > 18 && accept){
    //         console.log('esta ok');
    //         flag = false;
    //     }
    //     setDisable(flag);
    // }

    // El onChange, es un evento que caputra el cambio de valor de un input
    return (
        <div>
            <form>
                <input onChange={handleChangeName} type='text' placeholder='Name' value={name}/>
                <input onChange={handleChangeAge} type='number' placeholder='Age' value={age}/>
                <select onChange={handleChangeCountry} value={country}>
                    <option disabled defaultChecked value="">Select Country</option>
                    <option className='form-option' value="ARG">Argentina</option>
                    <option className='form-option' value="USA">Estados Unidos</option>
                </select>
                <div>
                    
                    <label htmlFor='accept'>Accepto terminos y condiciones</label>
                    <input id='accept' onChange={handleCheck} type='checkbox' checked={accept} />
                </div>
                <button disabled={!(name && age >= 18 && accept)} type='button' onClick={handleClick}>Clickeame</button>
                {/* <button disabled={!accept} type='button' onClick={handleClick}>Clickeame</button> */}
                {/* <input onChange={handleChangeData} type='text' name='name' placeholder='Name' value={data.name}/>
                <input onChange={handleChangeData} type='number' name='age' placeholder='Age' value={data.age}/> */}
            </form>
        </div>
    )
}

export default Form;
