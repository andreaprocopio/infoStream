import React from 'react'

const SearchMovie = () => {
  return (
    <div className='mt-10 p-4 md:p-12 max-w-6xl mx-auto'>
      <h2 className='text-indigo-950 uppercase font-bold text-xl text-center md:text-left'>Search:</h2>
      <input type="text" className='w-full rounded-md mt-4 p-3 focus:outline-indigo-500 text-indigo-800' placeholder='Search any movie...'/>
    </div>
  )
}

export default SearchMovie