import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import Image from 'next/image'

const CarouselCardSmall = (props) => {
  const movie = props.movie
  const rating = movie.vote_average.toFixed(1)
  let releaseDate

  if (movie.release_date) {
    releaseDate = movie.release_date
  } else if (movie.first_air_date) {
    releaseDate = movie.first_air_date
  }


  return (
    <div className="bg-white border-gray-200 rounded-lg shadow w-4/5 mx-auto">
      <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={300} height={450} className='rounded-t-lg w-full max-h-[112px] h-[112px] object-cover' alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
      <div className="p-2 h-[130px] max-h-[130px]">
        <h5 className="mb-2 text-sm h-[45px] font-bold tracking-tight line-clamp-2">{movie.title ? movie.title : movie.original_title ? movie.original_title : movie.name}</h5>
        <p className="mb-1 text-xs font-normal text-gray-400">{releaseDate}</p>
        <div className='flex items-center gap-1 justify-start'>
          <p className="font-normal text-xs text-gray-400">{rating}</p>
          <AiOutlineStar size={15} className='text-amber-400'/>
        </div>
      </div>
    </div>

  )
}

export default CarouselCardSmall