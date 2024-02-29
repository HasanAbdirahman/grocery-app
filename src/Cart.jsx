import NavBar from './Components/NavBar';
import CartContext from './CartContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {
    addToCart,
    itemsInCart,
    specificItemCount,
    removeFromCart,
    numberOfItemsInCart,
  } = useContext(CartContext);
  const navigate = useNavigate();

  function backToHome() {
    if (itemsInCart.length === 0) {
      return navigate('/');
    }
  }
  useEffect(() => {
    backToHome();
  }, [itemsInCart]);
  return (
    <>
      <NavBar />
      <div className="cart-container">
        {itemsInCart.length === 0
          ? backToHome
          : itemsInCart.map((eachProduct) => (
              <div className="cart-item" key={eachProduct.id}>
                <div className="cart-image-holder">
                  <img
                    className="cart-image"
                    src={eachProduct.imgLink}
                    alt={eachProduct.name}
                  />
                </div>
                <div className="cart-details">
                  <p className="cart-name">{eachProduct.name}</p>
                  <div className="signs-holder">
                    <button
                      className="cart-sign"
                      onClick={() => addToCart(eachProduct)}
                    >
                      +
                    </button>
                    <span> {specificItemCount[eachProduct.id]}</span>
                    <button
                      className="cart-sign btn-2"
                      onClick={() => removeFromCart(eachProduct.id)}
                    >
                      -
                    </button>
                  </div>
                  <p className="cart-price">
                    Total: &#160;&#160;
                    {(
                      eachProduct.price * specificItemCount[eachProduct.id]
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
