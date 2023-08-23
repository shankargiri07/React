import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice"

export function Products(){
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch("http://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        };
        loadProducts();
    },[]);

    const handleAdd = (product) => {
        dispatch(add(product));
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