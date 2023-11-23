import React from 'react'
import Button from '../Layouts/Button'
import coffee_latte from '../assets/coffee_latte.png'

const Home = () => {
    return (
        <div
            className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
            <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
                <h1 className='font-bold text-center lg:text-start  leading-tight text-5xl'>Awaken Your Senses with Every Brew</h1>
                <p>Indulge in the Extraordinary , Taste the Passion in Every Cup. Awaken Your
                    Senses to the Finest Coffee Experience.</p>

                <div className='flex flex-row gap-6'>
                    <Button title=" ADD TO CART "/>
                    <Button title=" MORE MENU "/>
                </div>
            </div>

            <div className='relative'>
                <img
                    src={coffee_latte}
                    alt="Coffee"
                    style={{
                    width: '300px',
                    height: '200px'
                }}/>
            </div>

            {/* <div
                className='absolute bg-white px-4 py-1 rounded-full bottom-80 right-32 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                <h2>14K</h2>
            </div>

            <div className='absolute bg-white px-8 py-2 bottom-48 right-80 rounded-full'>
                <h2>Cappuccino</h2>
            </div> */}
        </div>
    )
}

export default Home
