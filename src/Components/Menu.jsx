import React from 'react'
import MenuCard from '../Layouts/MenuCard'
import Espresso from '../assets/Espresso.jpg'
import Cappuccino from '../assets/Cappuccino.jpg'
import Latte from '../assets/Latte.jpg'
import Americano from '../assets/Americano.jpg'
import Macchiato from '../assets/Macchiato.jpg'
import Doppio from '../assets/Doppio.jpg';
const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
      <h1 className=' font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>

      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        <MenuCard img={Espresso} title="Espresso " price='₹ 180/-'   />
        <MenuCard img={Cappuccino} title="Cappuccino " price='₹ 140/-'  />
        <MenuCard img={Latte} title="Latte " price='₹ 200/-' />
        <MenuCard img={Americano} title="Americano " price='₹ 200/-'  />
        <MenuCard img={Macchiato} title="Macchiato " price='₹ 150/-'  />
        <MenuCard img={Doppio} title="Doppio " price='₹ 160/-'  />
      </div>
    </div>
  )
}

export default Menu
