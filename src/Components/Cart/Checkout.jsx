import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Card from '../Card';
import CheckoutCard from './CheckoutCard';
import Header from '../Header';
import CartList from './CartList';

const Checkout = () => {
  const location = useLocation();
  const checklist = location.state.cartItems;
  console.log(checklist)
  return (
    <div>
      <Header cartList={checklist}/>
      <CartList cartList={checklist}/>
      {/* <Outlet/> */}
    </div>
  )
}

export default Checkout