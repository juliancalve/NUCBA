import Login from '../pages/Login/Login';
import Products from '../pages/Products/Products';

export const PATHS = {
    private: [
        {
            path: '/',
            exact: true,
            component: Products
        },
        {
            path: '/products',
            exact: true,
            component: Products
        },
    ],
    noLoggedIn: [
        {
            path: '/login',
            exact: true,
            component: Login
        },
        {
            path: '/register',
            exact: true,
            component: Login
        }
    ]
}