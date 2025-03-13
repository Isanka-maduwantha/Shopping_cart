import React, { useEffect, useState } from "react";
// import "./Card.css";
import { FaCartPlus, FaStar } from "react-icons/fa";
const CheckoutCard = ({cartList}) => {
const stars = Array(5).fill(0);

  const handleAddToCart = (obj) => {

    setCartList(obj)
  };
  return (
    <>
      <div className="product_cart_container gird  w-4xl gap-12 p-4  " style={{}}>
        {cartList.map((product,index) => {
          return (
            <div
              id={product.meta.barcode}
              key={index}
              className="product_card flex justify-start h-full bg-white-back box-border p-5 gap-2 rounded-2xl shadow-md hover:shadow-lg m-3 "
            >
              <div className="product_thumbnail h-50 w-35 self-center p-3">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="product_details">
              <h3 className="product_title text-2xl font-semibold hover:underline font-(family-name:--font-poppins)">
                  {" "}
                  {product.title}
                </h3>
                <div className="special_details mb-4 mt-2  flex items-center gap-3">
                <div className="delivery text-emerald-500 font-semibold mb-1">
                    {product.shippingInformation === "Ships in 2 weeks"
                      ? "Fast Delivery"
                      : ""}
                  </div>
                  <span className="discount pl-1 pr-3 pt-1 pb-2 bg-eye-catching-300 cursor-pointer hover:bg-eye-catching-400 text-eye-catching-600 font-semibold rounded-xl hover:shadow-2xs">
                    {Math.round(product.discountPercentage * 10) / 10}% off
                  </span>
                </div>
                <div className="extra_special_details"></div>

                <div className="product_info m-1 ml-0 flex justify-between items-center">
                  <div className="ratings flex  items-center">
                    {stars.map((_, index) => (
                      <>
                        <FaStar
                          color={
                            index < Math.round(product.rating)
                              ? "orange"
                              : "grey"
                          }
                        />
                      </>
                    ))}{" "}
                    <span className="ml-3">{product.rating}</span>
                    <span className="avalability m-5 cursor-pointer">
                      {product.availabilityStatus === "In Stock" ? (
                        <span className="bg-emerald-100 p-2 text-emerald-500 font-bold rounded-2xl">
                          In Stock
                        </span>
                      ) : (
                        <span className="bg-gray-200 p-2  font-semibold rounded-xl">
                          {product.availabilityStatus}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="product_action flex justify-between w-full p-1 items-center self-end">
                <div className="product_price">
                  <span className="text-2xl font-semibold">
                    ${product.price}
                  </span>
                </div>
                <div className="product_add_cart">
                  <button
                    className="bg-acent-red text-white p-3 rounded-xl flex items-center gap-2 font-semibold shadow-sm hover:shadow-md cursor-pointer"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus color="white" />
                    Add to Cart
                  </button>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CheckoutCard