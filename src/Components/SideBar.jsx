export default function SideBar({
  handlePriceFilter,
  handleSubmit,
  text,
  setText,
}) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // useEffect(() => {
  // what is going to happen is search for the text and check it in
  //  the database and then display it on the screen at the main page
  //  we are going to use useEffect here and use an API call to get the data
  // async function getData() {
  //   await console.log('text');
  // }
  // getData();
  // }, [text]);
  return (
    <div className="Sidebar">
      <aside className="main-side">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="textInput"
            value={text}
          />
          <button type="submit">Search</button>
        </form>
        <p className="content">Filter the products </p>
        <ul className="list">
          <li className="list-item" onClick={handlePriceFilter}>
            Price
          </li>
          <li className="list-item"> Rating </li>
          <li className="list-item"> Category </li>
          <li className="list-item"> Brand </li>
        </ul>
      </aside>
    </div>
  );
}
