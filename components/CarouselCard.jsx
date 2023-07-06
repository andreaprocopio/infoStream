import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Badge from './Badge'
import Rating from './Rating'

const CarouselCard = (props) => {
  const movie = props.movie
  const rating = movie.vote_average.toFixed(1)
  let releaseDate

  if (movie.release_date) {
    releaseDate = movie.release_date.substring(0, 4)
  } else if (movie.first_air_date) {
    releaseDate = movie.first_air_date.substring(0, 4)
  }

  const movieGenreNames = props.genres
  .filter(genre => movie.genre_ids.includes(genre.id))
  .map(genre => genre.name);

  return (
    <Link href={`/${movie.id}`} className="bg-white border-gray-200 rounded-lg relative shadow block w-4/5 mx-auto">
      <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={295} height={442} className='rounded-t-lg w-full max-h-96 h-96 object-cover' alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
      <div className="p-2 h-[130px] max-h-[130px]">
        <h5 className="mb-2 text-xl font-bold tracking-tight h-[56px] border-b line-clamp-2">{movie.title ? movie.title : movie.original_title ? movie.original_title : movie.name}</h5>
        <p className="mb-1 font-normal text-gray-400">{releaseDate}</p>
        <Rating rating={rating} />
      </div>
      <div className='absolute bottom-2 right-2 flex gap-2'>
        {movieGenreNames.slice(0,2).map(genre => (
          <Badge key={genre} genre={genre} />
        ))}
        {movieGenreNames.length > 2 && <Badge />}
      </div>
    </Link>
  )
}

export default CarouselCard