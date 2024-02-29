import data from './data.js';
import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
import NavBar from '../Components/NavBar.jsx';
export default function AllProduct() {
  return (
    <>
      <NavBar />
      <div className="above-container">
        <h1> Products</h1>
        <div className="products-container">
          {data.map((eachData) => (
            <div className="product-card" key={eachData.id}>
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
          ))}
        </div>
      </div>
    </>
  );
}
