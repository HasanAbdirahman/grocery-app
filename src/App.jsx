import './Components/Components.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import AllProducts from './Components/AllProducts';
import Detail from './Components/Detail';

export default function App() {
  return (
    <BrowserRouter basename="/">
      <CartProvider>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allProducts" element={<AllProducts />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
