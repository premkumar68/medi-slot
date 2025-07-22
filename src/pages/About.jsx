import React from 'react'
import { assets } from '../assets/assets (2)'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>MediSlot is a modern healthcare appointment platform built to simplify the way patients connect with doctors. We are a team of passionate developers and healthcare experts aiming to make doctor bookings faster, easier, and more accessible for everyone. </p>
          <p>At MediSlot, we provide a seamless platform where patients can browse doctors by specialization, read reviews, check availability, and instantly book appointments—all from the comfort of their home. Our system is built to reduce waiting times, eliminate paperwork</p>
          <b className='text-gray-800 '>Our Vision</b>
          <p>At MediSlot, our vision is to revolutionize the healthcare experience by making doctor consultations more accessible, efficient, and transparent for everyone. We aim to become the go-to digital platform for medical appointments—where trust, speed, and care come together seamlessly</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white trsansition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>Book appointments in seconds, skip the long queues, and manage your health faster than ever.</p>
        </div>
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white trsansition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Access top doctors anytime, anywhere—right from your phone or computer.</p>
        </div >
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white trsansition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Get tailored doctor suggestions and health services based on your unique needs.</p>
        </div>
      </div>
    </div>
  )
}

export default About