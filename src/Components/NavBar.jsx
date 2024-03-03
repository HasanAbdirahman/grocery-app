import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../CartContext';
import './Components.css';

export default function NavBar() {
  const { numberOfItemsInCart } = useContext(CartContext);
  return (
    <div className="NavBar">
      <img src="" alt="logo" />
      <div>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/cart" className="links">
          ADD TO CART
          <span style={{ marginLeft: '7px' }}> [{numberOfItemsInCart}]</span>
        </Link>

        <Link to="/allProducts" className="links">
          All Products
        </Link>
        <Link to="/login" className="links">
          Login
        </Link>
        <Link to="/signup" className="links">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
