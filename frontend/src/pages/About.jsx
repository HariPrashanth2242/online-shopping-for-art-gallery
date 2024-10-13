import React from 'react'
import Title from '../components/Title'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={"ABOUT"} text2={"US"}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <div className='flex flex-col text-center justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Discover a vibrant online art gallery that brings creativity to your doorstep. Our eCommerce platform showcases a curated collection of original artworks from talented artists worldwide. From stunning paintings to intricate sculptures, we offer pieces that suit every taste. Shop now and add unique artistic flair to your space!</p>
            <p>Discover a world of creativity with our online art marketplace, where unique and captivating artworks come to life. From stunning paintings to intricate sculptures, our e-commerce platform connects art lovers with talented artists worldwide. Explore diverse styles and find the perfect piece to elevate your space today!</p>

            </div>
        </div>
    </div>
  )
}

export default About