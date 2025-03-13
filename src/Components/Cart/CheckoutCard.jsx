import React, { useEffect, useState } from "react";
// import "./Card.css";
import { FaCartPlus, FaStar } from "react-icons/fa";
const CheckoutCard = ({ cartList }) => {
  const stars = Array(5).fill(0);
  const [total, setTotal] = useState(0);
  const handleAddToCart = (obj) => {
    setCartList(obj);
  };
  let value = 0;
  console.log();
  return (
    <>
      <div
        className="checkout_cart_container gird  w-4xl  p-4 h-fit "
      >
        {cartList.map((product, index) => {
          value += product.price;
          return (
            <div
              id={product.meta.barcode}
              key={index}
              className="product_card  bg-white-back box-border p-3 gap-1 rounded-b-md  hover:shadow-md m-3 "
            >
              <div className="product_details">
                <li className="product_title flex justify-between w-full font-normal hover:underline font-(family-name:--font-poppins) list-none">
                  <span>{product.title}</span> <span>${product.price}</span>
                </li>
              </div>
            </div>
          );
        })}
        <li className="product_title flex justify-between w-full p-3 font-semibold hover:underline font-(family-name:--font-poppins) list-none"><span>Total</span> <span>${value}</span></li>
      </div>
    </>
  );
};

export default CheckoutCard;
