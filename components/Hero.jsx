import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='h-screen relative'>
      {/* Overlay */}
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-black/75 z-20 flex justify-center items-center text-white flex-col px-4'>
        <h2 className='w-full text-2xl uppercase font-normal tracking-wide text-center'>A gateway to the <span className='text-indigo-500 font-bold'>Cinema</span></h2>
        <p className='mt-3 text-center text-base font-light'>Discover, Explore, and Unveil the Magic of Cinema, One Frame at a Time</p>
      </div>
      <div className='absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-white/75'>
        <AiOutlineArrowDown size={30} />
      </div>
      {/* Image */}
      <Image src="/hero-background.jpg" width={1000} height={1700} className='absolute top-0 right-0 left-0 object-cover h-full z-10' />
    </section>
  )
}

export default Hero