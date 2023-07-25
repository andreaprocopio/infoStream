import React from 'react'
import PageContent from '@/components/PageContent'
import GenreSelect from '@/components/GenreSelect'
import { getMoviesGenres, getTvGenres, getTitlesByGenre } from '@/helpers/api'
import { useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import LoadingSpinner from '@/components/LoadingSpinner'
import CarouselCard from '@/components/CarouselCard'


const genres = (props) => {
  const movieGenres = props.movieGenres.genres
  const tvGenres = props.tvGenres.genres

  const [isMovie, setIsMovie] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [pagination, setPagination] = useState(1)
  const [titlesList, setTitlesList] = useState(undefined)

  const switchToTv = () => {
    setIsMovie(false)
  }

  const switchToMovie = () => {
    setIsMovie(true)
  }

  const selectGenres = isMovie ? movieGenres : tvGenres

  const activeClass = "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br"
  const deactiveClass = "text-purple-600 bg-white border border-purple-600"

  const movieButtonClasses = isMovie ? activeClass : deactiveClass
  const tvButtonClasses = !isMovie ? activeClass : deactiveClass


  // Getting titles by the genre
  const titlesByGenre = async (genre) => {
    setIsLoading(true)
    const mediaType = isMovie ? 'movie' : 'tv'
    const data = await getTitlesByGenre(genre, pagination, mediaType)
    setIsLoading(false)
    setTitlesList(data.results)
  }

  return (
    <PageContent>
      <h4 className={"text-2xl font-bold mb-4 w-full"}>Genres</h4>
      <div className='flex flex-col md:flex-row gap-4 md:items-center'>

        <div className='flex flex-col md:flex-row gap-4'>
          <button onClick={switchToMovie} className={movieButtonClasses + ` focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
            Movies
          </button>
          <button onClick={switchToTv} className={tvButtonClasses + ` focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
            Tv Series
          </button>
        </div>

        <GenreSelect genres={selectGenres} titlesByGenre={titlesByGenre} />
      </div>

      <div className='flex items-center flex-col mt-8'>
        {isLoading && <LoadingSpinner />}
        {!isLoading && titlesList != undefined && titlesList.map((movie) => (
          <div className='mb-4'>
            <CarouselCard key={movie.id} movie={movie} genres={[]} />
          </div>
        ))}
      </div>
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
