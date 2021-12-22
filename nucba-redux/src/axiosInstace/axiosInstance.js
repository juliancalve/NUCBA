import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://back-sandbox.herokuapp.com/api'
});

export default instance;
