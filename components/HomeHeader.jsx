import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const HomeHeader = () => {

  const [navbarScrolled, setNavbarScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const mobileMenuHandler = () => {
    setMobileMenu((prev) => !prev)
  }

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setNavbarScrolled(true)
      } else {
        setNavbarScrolled(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const navBackground = navbarScrolled ? 'bg-white text-gray-900 shadow-lg' : 'bg-transparent text-white'
  const navText = navbarScrolled ? 'bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent' : 'text-white'
  const mobileMenuLeft = mobileMenu ? 'left-0' : 'left-full'

  return (
    <>
      <div className={'fixed top-0 left-0 right-0 z-[9999] ' + navBackground}>
        <header className='max-w-6xl mx-auto p-4 flex justify-between items-center'>
          <h1 class="text-3xl font-bold leading-none tracking-tight">
            Info<span className='font-extrabold bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent'>Stream</span>
          </h1>

          {/* Desktop Menu */}
          <div class="hidden w-full md:block md:w-auto">
            <ul class="font-medium flex space-x-8">
              <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 ' + navText}>
                Home
              </li>
              <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 ' + navText}>
                Genres
              </li>
              <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 ' + navText}>
                Search
              </li>
              <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 ' + navText}>
                Contact
              </li>
            </ul>
          </div>

          {/* Hamburger button */}
          <button class="md:hidden relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 z-[10001]" onClick={mobileMenuHandler}>
            <span class="relative px-2.5 py-1 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            <GiHamburgerMenu size={30} className='text-white' />
            </span>
          </button>

        </header>
      </div>

      {/* Mobile Menu */}
      <div class={"block w-full md:hidden bg-gradient-to-br from-purple-600 to-blue-500 fixed top-0 h-screen z-[10000] transition-all duration-300 " + mobileMenuLeft}>
        <AiOutlineClose size={30} className='border rounded-md absolute right-10 top-10 text-white hover:cursor-pointer' onClick={mobileMenuHandler}/>

        <ul class="h-full font-extrabold uppercase flex flex-col space-y-10 justify-center items-center text-3xl">
          <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 text-white'}>
            Home
          </li>
          <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 text-white'}>
            Genres
          </li>
          <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 text-white'}>
            Search
          </li>
          <li className={'hover:-translate-y-0.5 hover:cursor-pointer transition-all ease-in duration-150 text-white'}>
            Contact
          </li>
        </ul>
      </div>      
    </>
  )
}

export default HomeHeader