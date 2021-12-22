import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const Lacteos = () => {
    return (
        <div>
            <h1>Soy Lacteos</h1>
            <Link to='/products/lacteos/quesos'>ir a aquesos</Link>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Lacteos
