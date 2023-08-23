import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUS } from "../store/productSlice";

export function Products(){

    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.product);
    //const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(fetchProducts());

        /* const loadProducts = async () => {
            const res = await fetch("http://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        };
        loadProducts(); */
    },[]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if(status === STATUS.LOADING){
        return <h4 className="successMsg">Loading...</h4>
    }
    if(status === STATUS.ERROR){
        return <h4 className="errorMsg"><code>Somthing want's wrong..</code></h4>
    }
    return(
        <div className="d-flex flex-wrap cartContainer">
            {
                products.map(product =>
                    <div className="card p-2 m-2" style={{width:'220px'}}>
                        <img src={product.image} width="150px" height="150px" className="card-img-top" />
                        <div className="card-header">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>
                                    {product.rating.rate} <span className="bi bi-star-fill text-success"></span> [{product.rating.count}]
                                </dd>
                            </dl>
                        </div>
                        <div className="card-body">
                            <button onClick={() => handleAdd(product)} className="btn btn-primary w-100">Add To Cart</button>
                        </div>
                    </div>    
                )
            }
        </div>
    )
}