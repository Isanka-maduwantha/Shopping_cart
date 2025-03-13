import React, { useEffect, useState } from "react";
import Card from "./Card";
import Product from '../product'
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Header = ({setProductList,cartList}) => {
  // const [productList,setProductList] = useState([])
 const navigate = useNavigate()
  useEffect(() => {
    // fetch(`https://dummyjson.com/products/search?q=${query}`)
    fetch(`https://dummyjson.com/products?limit=30`)
      .then((res) => res.json())
      .then(json => setProductList(json.products))
      .catch(()=> {setProductList(Product)})
  },[]);

  const handleClick =()=>{
    navigate('/checkout', { state: {cartItems: cartList }})
  }
  return (
    <>
      <header className="sticky top-0 bg-acent-grey-300 z-30 text-white p-3 pl-7 pr-7 w-full">
        <nav className="  flex items-center justify-between w-full">
          <div className="logo text-acent-red text-4xl font-bold font-(family-name:--font-poppins)"><Link to='/'>Futura</Link></div>
          
          <div className="action">
            <button className="cart" onClick={()=>handleClick()} > <FaCartArrowDown size={'2em'} color="grey" className="cursor-pointer" /> <span className="bg-acent-red text-white  pl-2 pr-2 rounded-4xl inline-block -mt-7 relative -top-4  ">{cartList.length}</span> </button>
          </div>
        </nav>
      </header>
      <div>
      
      </div>
    </>
  );
};

export default Header;
