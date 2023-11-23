import React from 'react'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'
import  Button  from './Button'

const ProductCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <img className='rounded-lg' src={props.img} alt="image" />

      <div className='flex flex-col items-center mt-5 gap-3'>
        <h2 className=' font-semibold text-xl '>{props.title}</h2>
        <div className='flex flex-row'>
            <BsStarFill className = "text-brightColor "/>
            <BsStarFill className = "text-brightColor "/>
            <BsStarFill className = "text-brightColor "/>
            <BsStarFill className = "text-brightColor "/>
            <BsStarHalf className = "text-brightColor "/>
        </div>
        <h3> ₹ 999/-</h3>
        <Button title='ADD TO CART'/>
      </div>
    </div>
  )
}

export default ProductCard
