import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export function Products(){
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("http://fakestoreapi.com/products");

            const data = await res.json();
            console.log(data)
            setProducts(data)
        }
        fetchProduct();
    },[]);

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    return(
        <div className="d-flex flex-wrap overflow-auto">
            {
                products.map(product => 
                    <div className="card p-2 m-2" style={{width:'220px'}}>
                        <img src={product.image} className="card-img-top" width={'150px'} height={'150px'} />
                        <div className="card-header" height="150px">
                            <p className="text-center fw-bold text-success">{product.price}</p>
                            <p className="text-center">
                                {product.rating.rate} <span className="bi bi-star-fill text-success"></span> [{product.rating.count}]
                            </p>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => handleAdd(product)} className="btn btn-primary w-100">Add To Cart <span className="bi bi-cart4"></span></button>
                        </div>
                    </div>    
                )
            }
        </div>
    )
}