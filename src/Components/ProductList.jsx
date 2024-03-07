import { Link } from 'react-router-dom';
import './Components.css';
import { useEffect, useState } from 'react';
import user from '../../Backend/models/user';

export default function ProductList({ eachData }) {
  const [reviews, setReviews] = useState(null) // this is where reviews will be stored when  fetched
  const [rating, setRating]= useState(1)
  const [description, setDescription]= useState('')
  const [loading, setLoading]= useState(true)


function handleOptionChange(e){
  setRating(()=> e.target.value)
}
function handleDescriptionChange(e){
  setDescription(()=> e.target.value)
}

useEffect(()=>{

  async function fetchData(){
    const response = await fetch('/v1/product/:productId/reviews');
    if (!response.ok){
      throw new Error('Reviews is not received')
    }
    let data = result.json();
    setReviews([...data])
    setLoading(false)
  }
fetchData()
})

  return (
    <>
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
    <section id='reviews-form-inputing'>
      <h1>Reviews</h1>
      <form>
        <label htmlFor='rating'>
          Rating      
        </label>
        <select id="rating" onChange={handleOptionChange} name="rating"  value={rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea  rows="4" cols="50" value={description} name='description' onChange={handleDescriptionChange}></textarea>
      </form>
    </section>
    <section id='all-reviews'>
      {reviews.map(review => {
        <div>
          <p>{user.firstName} {user.lastName}</p>
          <div>
            <
          </div>
        </div>
      })}
    </section>
    </>
  );
}
