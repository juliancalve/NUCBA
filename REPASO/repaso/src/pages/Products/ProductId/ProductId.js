import { useParams } from "react-router";

const ProductId = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default ProductId;
