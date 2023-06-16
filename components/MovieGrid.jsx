import React from 'react'
import { getAllMovies } from '@/data/dummy-data'
import MovieCard from './MovieCard'

const MovieGrid = () => {
  const movies = getAllMovies()

  return (
    <div className='mt-10 p-4 md:p-12 max-w-6xl mx-auto'>
      <h2 className='text-indigo-950 uppercase font-bold text-xl text-center md:text-left'>Top Picks:</h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieGrid