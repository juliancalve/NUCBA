import { useState } from 'react'
import axios from 'axios';
import Constants from '../../constants/Constants';
const CreateUser = () => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeJob = (e) => {
        setJob(e.target.value);
    }

    const handleCreateUser = async () => {
        try {
            const response = await axios.post(Constants.createUser, {name, job});
            console.log(response.data);
        } catch( error ) {
            alert(error);
        }
    }

    return (
        <div>
            <form>
                <input onChange={handleChangeName} type='text' value={name} placeholder='...Name'/>
                <input onChange={handleChangeJob} type='text' value={job} placeholder='...Job'/>
                <button onClick={handleCreateUser} type='button'>Create user</button>
            </form>
        </div>
    )
}

export default CreateUser
