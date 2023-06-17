import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const CarouselCard = (props) => {
  const movie = props.movie
  console.log(movie)
  return (
    <div className={'px-10 py-5 hover:cursor-pointer text-indigo-' + props.textColor}>
      { movie.image && <img src={movie.image} className={'w-full rounded-lg object-cover h-auto md:h-96 shadow-xl shadow-indigo-' + props.textColor} alt={movie.title} /> }
      <h3 className='text-lg font-semibold tracking-wide mt-3'>{movie.title}</h3>
      <div className='text-xs font-light text-amber-400 flex gap-1 mt-3'>
        <p>{movie.rating}</p>
        <AiOutlineStar size={15}/>
      </div>
    </div>
  )
}

export default CarouselCard