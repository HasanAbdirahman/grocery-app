import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import About from './Components/About';
import Products from './Components/Products';
import data from './Components/data.js';
import _ from 'lodash';

export default function Home() {
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [allPrices, setAllPrices] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isPriceClicked, setIsPriceCLicked] = useState(false);
  // coming for this
  function handlePriceFilter() {
    setIsPriceCLicked(true);
    let sortedPrices = [...data].sort((a, b) => a.price - b.price);
    setAllPrices(sortedPrices);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSearched(true);
    // what I want to return is the whole data to disappear and only the product that was searched to appear. that means there has to be correlation between the productList and sideBar in the home hence
    let filter = data.filter((item) => {
      let lowerText = text.toLowerCase();
      let lowerName = item.name.toLowerCase();
      let includes = lowerName.includes(lowerText);
      return includes;
    });
    setFilteredData(filter);
    setText('');
  };

  return (
    <>
      <NavBar />
      <SideBar
        handlePriceFilter={handlePriceFilter}
        handleSubmit={handleSubmit}
        text={text}
        setText={setText}
      />
      <About />
      <Products
        isPriceClicked={isPriceClicked}
        allPrices={allPrices}
        filteredData={filteredData}
        isSearched={isSearched}
      />
    </>
  );
}
