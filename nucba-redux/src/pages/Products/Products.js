import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../redux/products';

const Products = () => {

    const dispatch = useDispatch();
    const { products, total } = useSelector(state => state.products );
    const { token } = useSelector( state => state.user );

    useEffect(() => {
        dispatch(getProductsAction({token}));
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {products.map( p => {
                return <div>
                    <img width="100" height="100" src={p.photo} />
                    <h6>{p.name}</h6>
                    <p>{p.description}</p>
                    <strong>${p.price}</strong>
                </div>
            })}
            <strong>{total}</strong>
        </div>
    )
}

export default Products
