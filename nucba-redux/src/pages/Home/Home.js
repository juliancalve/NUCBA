import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutAction } from "../../redux/auth";

const Home = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutAction());
    }

    const onRedirectProducts = () => {
        history.push('/products');
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={onLogout}>Logout</button>
            <button onClick={onRedirectProducts} >Ir a products</button>
        </div>
    )
}

export default Home;
