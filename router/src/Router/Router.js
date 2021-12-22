import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Products from "../pages/Products/Products"
import Register from "../pages/Register/Register"
import Lacteos from '../pages/Products/Lacteos';
import Verduras from '../pages/Products/Verduras';
import { useSelector } from "react-redux";

const Router = () => {

    const { token } = useSelector( store => store.user );

    return (
        <BrowserRouter>
            <Routes>
                {!token && <Route path='/login' element={<Login />} />}
                {!token && <Route path='/register' element={<Register />} />}
                {token && <Route path='/products' element={<Products />}>
                    {/* <Route index element={<Login />}/> */}
                    <Route path='lacteos' element={<Lacteos/>}>
                        <Route path='quesos' element={<h1>Quesos</h1>} />
                    </Route>
                    <Route path='verduras' element={<Verduras/>} />
                </Route>}
                <Route path='*' element={token ? <Products/> : <Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
