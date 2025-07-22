import React from 'react'
import { assets } from '../assets/assets (2)'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] ' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>LOCATION</p>
          <p className='text-gray-500'>7th Crosscut Road,<br /> Kavitha Jewellary Opp. Gandhipuram</p>
          <p className='text-gray-500'>+91 8220345617 <br /> medislot@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at MEDISLOT</p>
          <p className='text-gray-500'>Learn more about our Teams</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Contact</button>
        </div>
      </div>

    </div>
  )
}

export default Contact