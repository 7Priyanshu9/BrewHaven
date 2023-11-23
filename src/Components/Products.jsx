import React from 'react'
import ProductCard from '../Layouts/ProductCard' 
import Product1 from "../assets/Product1.jpg"
import Product2 from "../assets/Product2.jpg"
import Product3 from "../assets/Product3.jpg"
import Nespresso from "../assets/Nespresso.jpg"

const Products = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor '>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 '>Our Products </h1>


      <div className='flex flex-col lg:flex-row gap-12'>
        <ProductCard img={Product1} title='Sibaristica'    />
        <ProductCard img={Product2} title='Flora Alba'    />
        <ProductCard img={Product3} title="Mc'cafe"    />
        <ProductCard img={Nespresso} title='Nespresso'    />
        </div>
    </div>
  )
}

export default Products
