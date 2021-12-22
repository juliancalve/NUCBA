import { useState } from 'react'
import axios from 'axios';
import Constants from '../../constants/Constants';
import Card from '../Card/Card';

const AxiosComponent = () => {

    const [users, setUsers] = useState([]);


    const onGetUsers = async () => {
        try{
            const response = await axios.get(Constants.getUsers);
            setUsers(response.data.data);
        } catch( error ) {
            alert(error);
        }
    }

    return (
        <div  style={{width: '100vw', display: 'flex'}}>
            {users.map( (u, i) => <Card key={i} {...u} />)}
            <button onClick={onGetUsers}>Get users</button>
        </div>
    )
}

export default AxiosComponent
