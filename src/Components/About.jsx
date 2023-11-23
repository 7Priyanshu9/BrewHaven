import React from 'react'
import Button from '../Layouts/Button'
import CoffeeBeans from '../assets/CoffeeBeans.jpg'


const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor '>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>


      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4 '> 
            <img className='rounded-lg' src={CoffeeBeans} alt="Special" />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-y-3'>
            <h2 className='font-semibold text-3xl'> Why is our coffee so special ? </h2>
            <p>Our coffee is special due to carefully sourced beans from renowned regions, expert roasting, unique flavor profiles, sustainable practices, and a commitment to freshness and quality.</p>


            <Button title="Learn More"/>
        </div>
      </div>
    </div>
  )
}

export default About
