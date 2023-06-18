import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const MovieCard = (props) => {
  const movie = props.movie
  return (
    <div className='bg-indigo-900 py-4 px-4 rounded-lg text-indigo-100 w-full sm:w-3/5 mx-auto md:w-full shadow-md shadow-indigo-950'>
      { movie.image && <img src={movie.image} className='w-full h-auto rounded-lg -translate-y-7 object-cover max-h-96' alt={movie.title} /> }
      <h3 className='text-lg font-semibold tracking-wide -mt-5'>{movie.title}</h3>
      <div className='text-xs font-light text-amber-400 flex gap-1'>
        <p>{movie.rating}</p>
        <AiOutlineStar size={15}/>
      </div>
      <span className='text-indigo-100 bg-pink-800 py-1 px-2 rounded-full inline-block mt-4 text-xs font-light'>
        {movie.genre}
      </span>
      <p className='mt-5 text-sm text-indigo-200'>
        {movie.description}
      </p>
    </div>
  )
}

export default MovieCard