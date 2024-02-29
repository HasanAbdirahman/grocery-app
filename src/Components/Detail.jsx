import { useParams } from 'react-router-dom';
import data from './data.js';
import NavBar from './NavBar';
import SideBar from './SideBar';

import { useContext } from 'react';
import CartContext from '../CartContext';

export default function Detail() {
  let params = useParams();
  const productId = parseInt(params.id);
  const eachData = data.find((product) => product.id === productId);
  const { addToCart } = useContext(CartContext);

  if (!eachData) {
    return <div>Product not found</div>;
  }
  const handleClick = () => {
    if (eachData) {
      addToCart(eachData);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="detail-product">
        <div className="product-card">
          <img
            className="product-image"
            src={eachData.imgLink}
            alt={eachData.name}
          />
          <div className="product-details">
            <div className="product-name">{eachData.name}</div>
            <div className="product-price">${eachData.price}</div>
            <div className="product-category">{eachData.category}</div>
          </div>
          <button onClick={handleClick}> ADD TO CART </button>
        </div>
      </div>
    </>
  );
}
