import React from 'react'
import PageContent from '@/components/PageContent'
import GenreSelect from '@/components/GenreSelect'
import { getMoviesGenres, getTvGenres } from '@/helpers/api'
import { useState } from 'react'


const genres = (props) => {
  const movieGenres = props.movieGenres.genres
  const tvGenres = props.tvGenres.genres

  const [isMovie, setIsMovie] = useState(true)

  const switchToTv = () => {
    setIsMovie(false)
  }

  const switchToMovie = () => {
    setIsMovie(true)
  }

  const selectGenres = isMovie ? movieGenres : tvGenres

  const activeClass = "text-white bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500"
  const deactiveClass = "text-purple-600 bg-white border border-purple-600"

  const movieButtonClasses = isMovie ? activeClass : deactiveClass
  const tvButtonClasses = !isMovie ? activeClass : deactiveClass
  return (
    <PageContent>
      <h4 className={"text-2xl font-bold mb-4 w-full"}>Genres</h4>
      <div className='flex flex-col mb-4 gap-4'>
        <p className=''>What are you looking for?</p>

        <div className='flex gap-2'>
          <button onClick={switchToMovie} className={movieButtonClasses + " hover:-translate-y-0.5 transition duration-150 inline-flex items-center justify-center overflow-hidden text-sm font-medium rounded-lg group focus:ring-0 focus:outline-none z-[10001]"}>
            <span className="relative px-2.5 py-1 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              Movies
            </span>
          </button>

          <button onClick={switchToTv} className={tvButtonClasses + " hover:-translate-y-0.5 transition duration-150 inline-flex items-center justify-center overflow-hidden text-sm font-medium rounded-lg group focus:ring-0 focus:outline-none z-[10001]"}>
            <span className="relative px-2.5 py-1 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              Tv series
            </span>
          </button>                     
        </div>

      </div>

      <GenreSelect genres={selectGenres} />
    </PageContent>
  )
}

export async function getStaticProps() {
  const movieGenres = await getMoviesGenres()
  const tvGenres = await getTvGenres()

  return {
    props: {
      movieGenres,
      tvGenres
    },
    revalidate: 900 //15 m
  }  
}

export default genres