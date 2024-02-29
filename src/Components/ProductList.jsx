import { Link } from 'react-router-dom';
import './Components.css';

export default function ProductList({ eachData }) {
  // let arrProduct = [];
  // arrProduct.push(eachData.price);
  // arrProduct.sort((a, b) => a - b);
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={eachData.imgLink}
        alt={eachData.name}
      />
      <div className="eachData-details">
        <Link to={`/product/${eachData.id}`}>
          <div className="product-name">{eachData.name}</div>
        </Link>
        <div className="product-price">${eachData.price}</div>
        <div className="product-category">{eachData.category}</div>
      </div>
    </div>
  );
}
