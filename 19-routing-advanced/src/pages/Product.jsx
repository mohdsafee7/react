import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div className='p-8 text-2xl font-bold h-112 flex items-center justify-center'>
      <div>
        <h1>Products Here</h1>
        <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
      </div>
      <Outlet /> {/*Nested Route Component, it will render the nested route component here*/}
    </div>
  )
}

export default Product
