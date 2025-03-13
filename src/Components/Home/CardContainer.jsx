import React from 'react'
import Card from '../Card'
const CardContainer = ({productList, setCartList}) => {
  return (
    <>
        <div className="main_Container grid  grid-cols-6 mb-5">

         <div className="card_container col-span-5 pt-10">
          <h2 className='text-3xl font-semibold pl-5'>Products</h2>
         <Card productList={productList} setCartList={setCartList}/>
         </div>
         <div className="card_Catagory_container col-span-1"></div>
        </div>
    </>
  )
}

export default CardContainer