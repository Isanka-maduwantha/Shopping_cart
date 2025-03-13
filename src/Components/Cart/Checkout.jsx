import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Card from '../Card';
import CheckoutCard from './CheckoutCard';
import Header from '../Header';
import CartList from './CartList';
const Checkout = () => {
  const location = useLocation();
  const [userDetails,setUserDetails] = useState({})
  const checklist = location.state.cartItems;
  console.log(checklist)
  const handleSubmit = (form) => {
    setUserDetails(
      {
        email:form.get('email'),
        address:form.get('address'),
        credit:form.get('credit'),
      }
    )
  }
  console.log(userDetails)
  return (
    <div className=''>
      <Header cartList={checklist}/>
      <div className="main_cart flex p-10 ">
        <CartList cartList={checklist}/>
      <div className="checkout bg-white h-fit shadow-md hover:shadow-sm rounded-2xl p-5">
      <Outlet/>
      <form action={handleSubmit}>
        <div className="email flex flex-col pb-1 pt-1 ">
          <label htmlFor="email">Email</label>
          <input className='m-2 ml-0 bg-fuchsia-50 focus:outline-0 p-2 text-xl rounded-xl' id='email' name='email' type="text" />
        </div>
        <div className="adress flex flex-col pb-1 pt-1">
          <label htmlFor="address">Deliver Address</label>
          <input required className='m-2 ml-0 bg-fuchsia-50 focus:outline-0 p-2 text-xl rounded-xl' type="text" id='address' name='address'/>
        </div>
        <div className="creditcard flex flex-col pb-1 pt-1">
          <label htmlFor="credit">Credit/Debit</label>
          <input required className='m-2 ml-0 bg-fuchsia-50 focus:outline-0 p-2 text-xl rounded-xl' type="tel" name="credit" id="credit" placeholder='0000-0000-0000'/>
        </div>
        <button  className='p-2 pr-4 pl-4 bg-amber-300 text-white rounded-2xl'>Checkout</button>
      </form>
     </div>
    </div>
    </div>
  )
}

export default Checkout