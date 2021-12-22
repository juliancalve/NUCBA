import { Link, Outlet } from "react-router-dom"
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { LogoutAction } from "../../redux/auth";

const Products = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(LogoutAction(navigate));
    }

    return (
        <div>
            <h1>Products</h1>
            <button onClick={() => navigate(-1)} >Lacteos</button>
            <br/>
            <Link to='/products/verduras'>Verduras</Link>
            <br/>
            <Link to='/products'>Limpiar</Link>
            <div style={{border: '2px solid  red'}}>
                <p>Tipo de producto</p>
                <Outlet />
            </div>
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    )
}

export default Products
