import Login from "../pages/Login/Login";
import ProductId from "../pages/Products/ProductId/ProductId";
import Products from "../pages/Products/Products";

export const PATHS = {
    privated: [
        {
            path: '/products',
            component: Products,
            exact: true
        },
        {
            path: '/products/:id',
            component: ProductId,
        },
    ],
    public: [
        {
            path: '/login',
            component: Login,
            exact: true
        }
    ]
}