import axiosInstance from '../axiosInstace/axiosInstance';

// Default value
const defaultValue = {
    products: [],
    total: 0
}

// Action types
const GET_PRODUCTS = 'GET_PRODUCTS';

// Reducer

export default function ProductsReducer(state = defaultValue, { type, payload }) {
    switch(type){
        case GET_PRODUCTS: return {...state, products: payload.products, total: payload.total };
        default: return defaultValue;
    }
}

// Actions
export const getProductsAction = ({ token }) => async dispatch => {
    try {
        const response = await axiosInstance.get('/products?limit=20&offset=10', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = response.data.data;
        dispatch({
            type: GET_PRODUCTS,
            payload: { products: data.data, total: data.total }
        })
    } catch( error ) {
        alert('error', error);
    }
}
