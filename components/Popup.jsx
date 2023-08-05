import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Popup = () => {
  return (
    <a href="https://github.com/andreaprocopio/infoStream" className="absolute top-1/2 hidden -translate-y-1/2 right-10 z-40 md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
      See on GitHub
      <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-indigo-800 bg-indigo-300 rounded-full">
        <AiFillGithub size={30} />
      </span>
    </a>
  )
}

export default Popup
