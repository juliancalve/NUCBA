import { useState } from 'react';
import Constants from '../../constants/Constants';
import Card from '../Card/Card';

const FetchComponent = () => {

    const [users, setUsers] = useState([]);
    // const [numbers, setNumbers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch(Constants.getUsers, {
                method: 'GET'
            });
            const json = await response.json();
            console.log(json.data);
            setUsers(json.data);
        } catch( error ) {
            alert(error);
        }
    };

    // const onSetNumbers = () => {
    //     setNumbers([1,2,3,4,5]);
    // }

    return (
        <div style={{width: '100vw', display: 'flex'}}>
            {users.map( (u, i) => <Card key={i} {...u} /> )}
            {/* // id={u.id}
            // email={u.email}
            // first_name={u.first_name}
            // last_name={u.last_name}
            // avatar={u.avatar} */}
            {/* {users.map( (u, i) => <h5 key={i}>{u.email}</h5>)} */}
            {/* {numbers.map( (n, i) => {
                return <div key={i}>
                    <b>{`${i}-pasdewed`}</b>
                    <p>El numero es: </p>
                    <strong>{n}</strong>
                </div>
            })} */}
            <button onClick={getUsers}>Obtener usuarios</button>
        </div>
    )
}

export default FetchComponent;
