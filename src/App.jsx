import { useState,useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import './App.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';
import DataFetching from './Components/DataFetching';
import Card from './Components/Card';
import Header from './Components/Header';
import Main from './Components/Home/Main';
import CardContainer from './Components/Home/CardContainer';

function App() {
  const [loading,setLoading] = useState(true);
  const [productList,setProductList] = useState([]);
  const [cartList,setCartList] = useState([])
  const navigate = useNavigate();
  const UpdateCartList = (item) => {
 
    
    setCartList(
      [...cartList,item]
    )
  }
  console.log(cartList)
  const changeLoading = () => {
    setLoading(loading => !loading)
  }
  const UpdateProduct = (data) => {
    setProductList(data)
    
  }


  return (
    <>  
 
          <div className='relative'>
            <Header setProductList={UpdateProduct} cartList={cartList}/>
            <div className="header ">
            
            </div>
            <Main setProductList={UpdateProduct} > 

          
            </Main>
           
            <CardContainer productList={productList} setCartList={UpdateCartList}/>

    </div>
    </>
  )
}

export default App
