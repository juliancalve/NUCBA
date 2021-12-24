import { useState } from 'react'

const useFetch = ({service}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const apiCall = async () => {
        try {
            const response = await service();
            const json = await response.json();
            if(json.error){
                setError(json.error);
            } else {
                setError(null)
                setData(json)
            }
        } catch( error ){
            setError('error');
        }
    };

    return [data, error, apiCall];
}

export default useFetch;
