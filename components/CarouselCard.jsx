import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import Image from 'next/image'

const CarouselCard = (props) => {
  const movie = props.movie
  const rating = movie.vote_average.toFixed(1)
  let releaseDate
  if (movie.release_date) {
    releaseDate = movie.release_date.substring(0, 4)
  }
  return (
    // <div className={'px-10 py-5 hover:cursor-pointer text-indigo-' + props.textColor}>
    //   <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={295} height={442} className={'rounded-lg object-cover h-auto md:h-93 md:max-h-96 shadow-xl w-full shadow-indigo-' + props.textColor} alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
    //   <div className=''>
    //     <h3 className='text-base font-semibold tracking-wide mt-3'>{movie.title}</h3>
    //     <p className='text-xs font-thin mt-1'>{releaseDate}</p>
    //     <div className={'text-xs font-light flex gap-1 mt-1 text-indigo-' + props.textColor}>
    //       <p>{rating}</p>
    //       <AiOutlineStar size={15} className='text-amber-400'/>
    //     </div>
    //   </div>
    // </div>


    <div class="max-w-sm bg-white border-gray-200 rounded-lg shadow w-4/5 mx-auto">
      <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={295} height={442} className='rounded-t-lg w-full max-h-96 object-cover' alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
        <div class="p-4">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{movie.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-400">{releaseDate}</p>
            <p class="mb-3 font-normal text-gray-400">{rating}</p>
            <AiOutlineStar size={15} className='text-amber-400'/>
        </div>
    </div>

  )
}

export default CarouselCard