import { Products } from "../Nav&Product/products";

export function Home(){
    return(
        <div>
            <h3 className="homeHeading">Welcome to the Redux toolkit store</h3>
            <section>
                <h4 className="allProducts">All Products</h4>
                <Products />
            </section>
        </div>
    )
}