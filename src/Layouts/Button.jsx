import React from 'react'

const Button = (properties) => {
  return (
    <div>
      <button className='px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-red-600  rounded-full transition-all ' >
        {properties.title}
      </button>
    </div>
  )
}

export default Button
