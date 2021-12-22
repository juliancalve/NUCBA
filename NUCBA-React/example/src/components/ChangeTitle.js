// useState
import { useState } from 'react';

const ChangeTitle = ({ firstName }) => {

    // let title = 'soy un titulo';
    //Un estado, se crea primero definiendo el tipo de dato ( siempre va a ser const )
    // despues tenemos que crear un arreglo, el cual va a contener como primer dato
    // el identificador de nuestro estado ( [name]).
    // despues del identificador va a ser el setter ( setName ) // [ name, setName ]
    // y por ultimo se iguala a useState() y dentro de los parametros se define el valor inicial
    // qudaria asi : const [name, setName] = useState(firstName);
    // para modificarlo, se utiliza su settet ejemplo:  setName('juan') 
    const [title, setTitle] = useState('soy un titulo');
    const [title1, setTitle1] = useState('soy el titulo1');

    const cambiarElValorDelEstado = (nuevoTitulo) => {
        setTitle(nuevoTitulo);
        setTitle1('Che cambie');
    }

    return (
        <div>
            <h1>{title}</h1>
            <h1>{title1}</h1>
            <button
                onClick={() => cambiarElValorDelEstado('ahora el estado cambio')}
                >
                    cambiar titulo
            </button>
        </div>
    )
}

export default ChangeTitle
