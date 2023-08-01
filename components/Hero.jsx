import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='h-screen lg:h-[75vh] relative'>
      {/* Overlay */}
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-black/75 z-20 flex justify-center items-center text-white flex-col px-4'>

        <h1 className="mb-4 text-4xl font-extrabold leading-normal tracking-tight md:text-5xl lg:text-6xl w-full max-w-6xl text-center lg:text-left">A gateway to the <mark className="px-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded">cinema</mark></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 w-full max-w-6xl text-center lg:text-left">Discover, Explore, and Unveil the Magic of Cinema, One Frame at a Time.</p>


      </div>
      <div className='absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-white/75'>
        <AiOutlineArrowDown size={30} />
      </div>
      {/* Image */}
      <Image src="/hero-background.jpg" width={2400} height={3600} className='absolute top-0 right-0 left-0 object-cover h-full z-10' />

    </section>
  )
}

export default Hero
