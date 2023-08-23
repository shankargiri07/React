import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export function Cart(){

    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const handleRemove = (productid) => {
        dispatch(remove(productid))
    }
    return(
        <div>
            <h3>All Cart's Items</h3>
            <div>
                {
                    products.map((product) => 

                        <div>
                            <div className="addCartContainer">
                                <div className="fw-bold">Image</div>
                                <div className="fw-bold">Price</div>
                                <div className="fw-bold">Remove</div>
                            </div>
                            <div className="addCartContainer">
                                <div>
                                    <img src={product.image} width={'50px'} height={'50px'}/>
                                </div>
                                <div>
                                    <p>{product.price}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleRemove(product.id)} className="btn btn-danger"><span className="bi bi-trash-fill"></span></button>
                                </div>
                            </div>
                        </div>

                        //<div className="card p-2 m-2" style={{width: '230px'}}>
                        //    <img src={product.image} className="card-img-top" width="150px" height="150px"/>
                        //    <div className="card-header">
                        //        <dl>
                        //            <dt>Price</dt>
                        //            <dd>{product.price}</dd>
                        //            <dt>Rating</dt>
                        //            <dd>
                        //                {product.rating.rate} <span className="bi bi-star-fill text-success"></span> [{product.rating.count}]
                        //            </dd>
                        //        </dl>
                        //    </div>
                        //    <div className="card-footer">
                        //        <button onClick={() => handleRemove(product.id)} className="btn btn-danger w-100">Remove</button>
                        //    </div>
                        //</div> 

                    )
                }
            </div>
        </div>
    )
}