import React from 'react'
import Popup from './Popup'

const Footer = () => {
  return (
    <footer className='relative h-20 border-t-2 border-indigo-400 bg-indigo-900 text-indigo-300 flex justify-center items-center flex-col text-sm'>
      <span>©</span>
      <p className='text-indigo-100'>InfoStream - 2023</p>
      <p>All rights reserved.</p>
      <Popup />
    </footer>
  )
}

export default Footer
