
import { Products } from "../productRedux/products"

export function ReduxHome(){
    return(
        <div className="container-fluid">
            <h3 className="text-center text-danger">Welcome To Redux Toolkit Store</h3>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    )
}