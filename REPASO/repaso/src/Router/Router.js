import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import ProductId from "../pages/Products/ProductId/ProductId";
import Products from "../pages/Products/Products";
import { PATHS } from './Paths';

const Router = () => {

    // localStorage.clear();

    // const generateRoutes = () => {

        // const token = localStorage.getItem('token');
    //     const routes = [];

    //     if (token) {
    //         PATHS.privated.forEach( r => {
    //             routes.push(<Route {...r}/>);
    //         });
    // EJEMPLOS MAP
            // const routes = PATHS.privated.map( p => {
            //     return <Route {...p} />
            // })
    //         routes.push(<Redirect to={PATHS.privated[0].path} />)
    //     } else {
    //         PATHS.public.forEach( r => {
    //             routes.push(<Route {...r}/>);
    //         })
    //         routes.push(<Redirect to={PATHS.public[0].path} />)
    //     }

    //     return routes;
    // }
    // localStorage.setItem('token', 'soy un token');
    
    localStorage.clear();
    
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Switch>
                {!token && <Route exact={true} path='/login' component={Login} />}
                {token && <Route exact={true} path='/products' component={Products} />}
                {token && <Route path='/products/:id' component={ProductId} />}
                {/* {generateRoutes()} */}
                {!token && <Redirect to='/login' />}
                {token && <Redirect to='/products' />}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
