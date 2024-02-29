import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  // this is a state where I want to store the ID's of the product then check if the ID is in there
  const [itemID, setItemID] = useState([]);

  // this new state is where i will know the pecific amount of item in that type of product which is going to be array of object and am going to use with their ID to differentiate the different types
  const [specificItemCount, setSpecificItemCount] = useState({});
  const navigate = useNavigate();

  const addToCart = (newItem) => {
    if (itemID.length === 0) {
      itemID.push(newItem.id);
      setItemsInCart((prevItems) => [...prevItems, newItem]);
      setSpecificItemCount((prevSpecificItemCount) => ({
        ...prevSpecificItemCount,
        [newItem.id]: 1,
      }));
      console.log('firsttime' + specificItemCount[newItem.id]);
      setNumberOfItemsInCart((prevCount) => prevCount + 1);
    } else {
      if (itemID.includes(newItem.id)) {
        setNumberOfItemsInCart((prevCount) => prevCount + 1);
        setSpecificItemCount((prevSpecificItemCount) => ({
          ...prevSpecificItemCount,
          [newItem.id]: prevSpecificItemCount[newItem.id] + 1,
        }));
        console.log('other time ' + specificItemCount[newItem.id]);
      } else {
        setItemsInCart((prevItems) => [...prevItems, newItem]);
        setNumberOfItemsInCart((prevCount) => prevCount + 1);
        setItemID((prevItemIDs) => [...prevItemIDs, newItem.id]);
        setSpecificItemCount((prevSpecificItemCount) => ({
          ...prevSpecificItemCount,
          [newItem.id]: 1,
        }));
      }
    }
  };

  // numberOfItemsInCart itemsInCart itemID  specificItemCount

  //
  function removeFromCart(id) {
    if (numberOfItemsInCart === 1) {
      navigate('/');
      // Reset itemID to an empty array
      setItemID([]);
      setItemsInCart([]);
    }

    // Check if specificItemCount[id] exists and is greater than 0 before decrementing
    if (specificItemCount[id] && specificItemCount[id] > 0) {
      setSpecificItemCount((prevSpecificItemCount) => ({
        ...prevSpecificItemCount,
        [id]: prevSpecificItemCount[id] - 1,
      }));
      setNumberOfItemsInCart((prevNumbersInCart) => prevNumbersInCart - 1);
      // If specificItemCount[id] becomes zero, remove id from itemID
      if (specificItemCount[id] === 1) {
        setItemID((prevItemID) => prevItemID.filter((item) => item !== id));
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        setItemsInCart,
        numberOfItemsInCart,
        setNumberOfItemsInCart,
        addToCart,
        setItemID,
        itemID,
        specificItemCount,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
