import data from './data.js';
import ProductList from './ProductList';
import './Components.css';

export default function Products({
  filteredData,
  isSearched,
  allPrices,
  isPriceClicked,
}) {
  const filteredList = isPriceClicked
    ? allPrices
    : isSearched
    ? filteredData
    : data;

  const dataList = filteredList.map((eachData) => (
    <ProductList key={eachData.id} eachData={eachData} />
  ));

  return (
    <div className="">
      <h1 className="heading">Products Available </h1>
      <div className="product-container">{dataList}</div>
    </div>
  );
}
