import { Link } from 'react-router-dom'

export function Navbar(){
    return(
        <div className='d-flex justify-content-between bg-dark p-1 text-white'>
            <span className='fw-bold'>Redux Store</span>
            <div>
                <Link className='ms-4' to='/'>Home</Link>
                <Link className='ms-4' to='/cart'>Cart</Link>
                <span className='ms-4'>Cart Items: 0</span>
            </div>
        </div>
    )
}