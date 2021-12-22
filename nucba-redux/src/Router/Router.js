import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import { PATHS } from './paths';

const Router = () => {

    const { token } = useSelector( store => store.user );

    return (
        <BrowserRouter>
            <Switch>
                {/* {token ? PATHS.private.map( r => <Route {...r}/> ) : PATHS.noLoggedIn.map( r => <Route {...r}/> )}
                <Redirect to={token ? PATHS.private[0].path : PATHS.noLoggedIn[0].path} /> */}

                {token && <Route path="/home" component={Home} exact={true}/> }
                {token && <Route path="/products" component={Products} exact={true}/> }

                {!token && <Route path="/login" component={Login} exact={true}/>}
                {!token && <Route path="/Register" component={Register} exact={true}/>}

                {token && <Redirect to="/home"/> }
                {!token && <Redirect to="/login"/> }
            </Switch>
        </BrowserRouter>
    )
}

export default Router
