import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReduxHome } from '../pages/home';
import { ReduxCart } from '../pages/cart';
import { Navbar } from '../navbar/navbar';
import { Provider } from 'react-redux';
import store from '../store/store';

export function ReactRedux(){
    return(
        <div className="container-fluid">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={ <ReduxHome /> }></Route>
                        <Route path='/cart' element={ <ReduxCart /> }></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    )
}