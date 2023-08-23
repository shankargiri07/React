import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Navbar(){

    const items = useSelector((state) => state.cart)

    return(
        <div className="mainContainer">
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="linkContainer" to='/'>Home</Link>
                <Link className="linkContainer" to='/cart'>Cart</Link>
            </div>
            <div>
                Cart Items: {items.length}
            </div>
        </div>
    )
}