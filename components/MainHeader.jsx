import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <>
      <header className="bg-indigo-900 h-20">
        <div className='mx-auto max-w-6xl h-full flex justify-between items-center p-4'>
          <h1 className='text-2xl uppercase font-bold text-indigo-100 tracking-tight md:text-3xl lg:text-4xl'>You<span className='text-indigo-300 font-light'>Stream</span></h1>
          <AiOutlineMenu size={30} className='text-indigo-100 hover:cursor-pointer 
            hover:-translate-y-0.5 transition duration-150 md:hidden' onClick={toggleMenu} />
          <ul className='hidden md:flex space-x-8 text-indigo-100 overflow'>
            <li className='hover:-translate-y-0.5 transition duration-150 hover:cursor-pointer'>Homepage</li>
            <li className='hover:-translate-y-0.5 transition duration-150 hover:cursor-pointer'>Profile</li>
            <li className='hover:-translate-y-0.5 transition duration-150 hover:cursor-pointer'>Favorites</li>
            <li className='hover:-translate-y-0.5 transition duration-150 hover:cursor-pointer'>Upgrade</li>
          </ul>  
        </div>
      </header>
      { showMenu && <nav className='absolute w-full bg-indigo-900 z-10 top-0 right-0 flex flex-col justify-center items-center gap-5 h-screen'>
        <AiOutlineClose onClick={toggleMenu} size={30} className='text-indigo-100 absolute z-20 top-5 right-5 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150' />
        <h2 className='text-indigo-100 font-bold text-3xl hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>Homepage</h2>
        <h2 className='text-indigo-100 font-bold text-3xl hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>Profile</h2>
        <h2 className='text-indigo-100 font-bold text-3xl hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>Favorites</h2>
        <h2 className='text-indigo-100 font-bold text-3xl hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>Upgrade</h2>
      </nav> }
    </>
  )
}

export default MainHeader