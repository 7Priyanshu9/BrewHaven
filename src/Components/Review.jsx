import React from 'react'
import ReviewCard from '../Layouts/ReviewCard'
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

const Review = () => {
    return (
        <div
            className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Review</h1>

            <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
                <ReviewCard
                    img={person1}
                    title='Tori Parker'
                    comment="Rich and Bold Flavor!

            I recently tried the new blend at the local coffee shop, and I must say, it's absolutely fantastic! The coffee has a rich and bold flavor that satisfies my taste buds."/>

                <ReviewCard
                    img={person2}
                    title='Emily Taylor'
                    comment="Smooth and Balanced Blend

                As a coffee enthusiast, I am always on the lookout for a smooth and balanced blend, and I've found it in this coffee. The taste is exquisite, with no overpowering bitterness."/>

                <ReviewCard
                    img={person3}
                    title='Jacob Smith'
                    comment="Elevating my Coffee Experience

                I've never been one to leave reviews, but this coffee deserves some recognition. It has truly elevated my coffee experience. The notes of caramel and hints of chocolate create a heavenly combination."/>
            </div>
        </div>
    )
}

export default Review
