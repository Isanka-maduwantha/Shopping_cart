import React, { useEffect, useState } from "react";
import "./Card.css";
import { FaCartPlus, FaStar } from "react-icons/fa";
const useCustomFetch = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((Response) => Response.json())
      .then((json) => {
        setProductList(json.products);
      })
      .catch((err) => console.log(err));
    return (
      <>
        <Card productList={productList} />
      </>
    );
  }, []);

  return productList;
};

const CardTitle = ({ title }) => {
  return (
    <>
      <h3 className="product_title text-3xl font-semibold hover:underline font-(family-name:--font-poppins)">
        {" "}
        {title}
      </h3>
    </>
  );
};
const CardRating = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <>
      <div className="ratings flex  items-center">
        {stars.map((_, index) => (
          <>
            <FaStar
              color={index < Math.round(rating) ? "orange" : "grey"}
            />
          </>
        ))}{" "}
        <span className="ml-3">{rating}</span>
   
      </div>
    </>
  );
};
const CardAvailability = ({availability}) => {
  return (
    <>
           <span className="avalability m-5 cursor-pointer">
          {availability === "In Stock" ? (
            <span className="bg-emerald-100 p-2 text-emerald-500 font-bold rounded-2xl">
              In Stock
            </span>
          ) : (
            <span className="bg-gray-200 p-2  font-semibold rounded-xl">
              {availability}
            </span>
          )}
        </span>
    
    </>
  )
}
const CardPrice = ({price}) => {
  return (
    <>
                      <div className="product_price">
                  <span className="text-2xl font-semibold">
                    ${price}
                  </span>
                </div>
    </>
  )
}
const CardAddCart = ({addToCart,product}) => {
  return (
    <>
                      <div className="product_add_cart">
                  <button
                    className="bg-acent-red text-white p-3 rounded-xl flex items-center gap-2 font-semibold shadow-sm hover:shadow-md cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    <FaCartPlus color="white" />
                    Add to Cart
                  </button>
                </div>
    </>
  )
}
const Card = ({ productList, setCartList }) => {
  const handleAddToCart = (obj) => {
    setCartList(obj);
  };
  return (
    <>
      <div className="product_container gap-10 p-4  " style={{}}>
        {productList.map((product, index) => {
          return (
            <div
              id={product.meta.barcode}
              key={index}
              className="product_card flex flex-col row-span-1 h-full bg-white-back box-border p-5 justify-between rounded-2xl shadow-md hover:shadow-lg"
            >
              <div className="product_thumbnail h-100 w-75 self-center p-3">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="product_details">
                <div className="special_details mb-4 mt-1 flex items-center gap-3">
                  <span className="discount pl-3 pr-3 pt-2 pb-2 bg-eye-catching-300 cursor-pointer hover:bg-eye-catching-400 text-eye-catching-600 font-semibold rounded-xl hover:shadow-2xs">
                    {Math.round(product.discountPercentage * 10) / 10}% off
                  </span>
                  <div className="delivery text-emerald-500 font-semibold mb-1">
                    {product.shippingInformation === "Ships in 2 weeks"
                      ? "Fast Delivery"
                      : ""}
                  </div>
                </div>
                <div className="extra_special_details"></div>
                <CardTitle title={product.title} />
                <div className="product_info m-3 ml-0 flex justify-between items-center">
                  <CardRating  rating={product.rating}/>
                  <CardAvailability availability={product.availabilityStatus}/>
                </div>
              </div>
              <div className="product_action flex justify-between w-full p-1 items-center self-end">
                <CardPrice price={product.price}/>
                <CardAddCart product={product} addToCart={handleAddToCart}/>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
