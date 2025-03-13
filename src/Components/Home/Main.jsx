import React, { useState,useEffect } from 'react'
import './Main.css'
import { FaSearch } from 'react-icons/fa'
const Main = ({setProductList,children}) => {
   const [query,setQuery] = useState('')
    const setProduct =(list) =>{
      setProductList(list)
    }
   useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then(json => setProduct(json.products))
      .catch((err)=> console.log(err))
  },[query]);
  const handleClick = (formData) => {
    const query = formData.get('query');
    setQuery(query)

  }
  return (
    <> <div className="main_container relative">
      {children}
      <main className='h-120 flex flex-col bg-[url({mainImg})]   items-center justify-center'>
       
        <div className="main-Title">
        <h1 className='md:text-5xl text-white font-bold w-4xl sm:text-2xl [text-shadow:_0_2px_4px_rgb(241_102_99_/_0.8)] hover:[text-shadow:_0_2px_4px_rgb(241_102_99_/_0.9)] text-center'>Shopping Made Easy, Savings Made Bigger!</h1>
        
        </div>
        <div className="search">
            <form action={handleClick} className='flex items-center gap-2 relative mt-7'>
              <input type="text" placeholder="name your desire" name="query" autofocus className='p-5 md:text-2xl sm:text-2xl sm:w-1xl  bg-white md:w-3xl rounded-2xl  focus:outline-0 ' />
              <button className='text-white -ml-14'> <FaSearch size={'2em'}  color='#0007' /> </button>
            </form>
          </div>
          <p className='text-white font-semibold text-1xl mt-6 [text-shadow:_0_2px_4px_rgb141_102_199_/_0.8)] text-center w-full'>Your favorite products, all in one place. Great deals just for you!</p>
      </main>
    </div>
    </>
  )
}

export default Main