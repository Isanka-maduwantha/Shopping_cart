import React, { useEffect, useState } from "react";
import Card from "./Card";
import Product from '../product'
const Header = ({setProductList}) => {
  // const [productList,setProductList] = useState([])
  const [query,setQuery] = useState('')
  useEffect(() => {
    // fetch(`https://dummyjson.com/products/search?q=${query}`)
    fetch(`https://dummyjson.com/products?limit=30`)
      .then((res) => res.json())
      .then(json => setProductList(json.products))
      .catch((err)=> {setProductList(Product)})
  },[]);
  const handleClick = (formData) => {
    const query = formData.get('query');
    setQuery(query)

  }
  return (
    <>
      <header>
        <nav>
          <div className="logo">Futura</div>
          <div className="search">
            <form action={handleClick}>
              <input type="text" placeholder="name your desire" name="query"/>
              <button>Search</button>
            </form>
          </div>
          <div className="action">
            <button className="cart">Cart</button>
          </div>
        </nav>
      </header>
      <div>
      
      </div>
    </>
  );
};

export default Header;
