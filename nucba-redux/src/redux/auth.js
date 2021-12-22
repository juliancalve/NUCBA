import axiosInstance from '../axiosInstace/axiosInstance';

// Valor inicial
const defaultValue = {
    token: null,
    userInfo: {}
}

// Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER_INFO = 'GET_USER_INFO'
// REDUCER

export default function AuthReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case LOGIN: return {...state, token: payload };
        case LOGOUT: return defaultValue;
        case GET_USER_INFO: return {...state, userInfo: payload }
        default: return state;
    }
}

//Actions 

export const loginAction = ({ email, password }) => async dispatch => {

    // llamada al back y obtener el token
    try{
        const response = await axiosInstance.post('/auth/login', { email, password });
        const token = response.data.token;
        console.log(response.data);
        dispatch({ type: LOGIN , payload: token });
    } catch( error ) {
        alert('error', error);
    }
}

export const logoutAction = () => dispatch => {
    dispatch({type: LOGOUT})
}