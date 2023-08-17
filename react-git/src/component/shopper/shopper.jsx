import { useState, useEffect } from "react";
import axios from 'axios';

export function Shooper(){

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:'', title:'', image:'', price:'', rating:{rate:'', count:''}}]);
    const [items] = useState([]);
    const [count, setCount] = useState(0)
    const loadCategorise = () => {
        axios.get("http://fakestoreapi.com/products/categories")
        .then(response => {
            response.data.unshift('all')
            setCategories(response.data)
        })
    }

    const loadProduct = (url) => {
        axios.get(url)
        .then(response => {
            setProducts(response.data);
        })
    }

    const getCartCount = () => {
        setCount(items.length)
    }

    const handleCategoryChange = (e) => {
        if(e.target.value == "all"){
            loadProduct("http://fakestoreapi.com/products")
        } else {
            loadProduct(`http://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }

    useEffect(() => {
        loadCategorise();
        loadProduct("http://fakestoreapi.com/products");
        getCartCount()
    },[]);

    const handleBuyClick = (e) => {
        axios.get(`http://fakestoreapi.com/products/${e.target.valu}`)
        .then(response => {
            items.push(response.data)
            alert(`${response.data.title}\nAdded to Cart`);
            getCartCount();
        })
    }
    return(
        <div className="container-fluid">
            <header className="bg-danger text-center text-white p-2">
                <h3>FakeStore Api <span className="bi bi-cart"></span></h3>
            </header>
            <section className="mt-2 row">
                <nav className="col-2">
                    <label className="form-label">Categories</label>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category => 
                                <option value={category} key={category}>{category.toUpperCase()}</option>    
                            )
                        }
                    </select>
                </nav>
                <main className="col-7 d-flex flex-wrap overflow-auto" style={{height:'660px'}}>
                    {
                        products.map(item => 
                            <div className="card p-2 m-2" style={{width:'250px'}}>
                                <img src={item.image} className="card-img-top" width={'150px'} height={'150px'}/>
                                <div className="card-header">
                                    <p>{item.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price <span className="text-success">{item.price}</span></dt>
                                        <dt>Rating</dt>
                                        <dd>
                                            {item.rating.rate} <span className="bi bi-star-fill text-success"></span> [{item.rating.count}]
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={handleBuyClick} className="btn btn-primary w-100">Buy Now <span className="bi bi-cart4"></span></button>
                                </div>
                            </div>   
                        )
                    }
                </main>
                <aside className="col-3">
                    <label className="form-label">User Items</label>
                    <div>
                        <button className="btn btn-dark w-100">Items [ {count} ]</button>
                    </div>
                    <div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Viwe</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </aside>
            </section>
        </div>
    )
}