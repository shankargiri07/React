import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Home } from "./Redux-Demo/pages/home";
import { Cart } from "./Redux-Demo/pages/cart";
import { Navbar } from './Redux-Demo/Nav&Product/navbar';
import store from './Redux-Demo/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='/cart' element={ <Cart /> }></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
