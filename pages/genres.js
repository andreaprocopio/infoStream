import React, { useEffect } from 'react'
import PageContent from '@/components/PageContent'
import GenreSelect from '@/components/GenreSelect'
import { getMoviesGenres, getTvGenres, getTitlesByGenre } from '@/helpers/api'
import { useState } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import ResultListCard from '@/components/ResultListCard'
import Footer from '@/components/Footer'


const genres = (props) => {
  const movieGenres = props.movieGenres.genres
  const tvGenres = props.tvGenres.genres

  const [isMovie, setIsMovie] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [pagination, setPagination] = useState(1)
  const [titlesList, setTitlesList] = useState(undefined)
  const [genre, setGenre] = useState(null)

  console.log(pagination)

  const switchToTv = () => {
    setIsMovie(false)
  }

  const switchToMovie = () => {
    setIsMovie(true)
  }

  const incrementPage = () => {
    setPagination(page => page + 1)
  }

  const decrementPage = () => {
    setPagination(page => page - 1)
  }

  const selectGenres = isMovie ? movieGenres : tvGenres

  const activeClass = "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br"
  const deactiveClass = "text-purple-600 bg-white border border-purple-600"

  const movieButtonClasses = isMovie ? activeClass : deactiveClass
  const tvButtonClasses = !isMovie ? activeClass : deactiveClass


  // Getting titles by the genre
  const titlesByGenre = async (genre) => {
    setGenre(genre)
    setIsLoading(true)
    const mediaType = isMovie ? 'movie' : 'tv'
    const data = await getTitlesByGenre(genre, pagination, mediaType)
    setIsLoading(false)
    setTitlesList(data.results)
  }

  useEffect(() => {
    titlesByGenre(genre);
  }, [pagination]);

  console.log(genre)

  return (
    <>
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

        {isLoading && <LoadingSpinner />}

        <div className='grid gap-6 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-10 pb-4'>
          {!isLoading && titlesList != undefined && titlesList.map((movie) => (
            <ResultListCard key={movie.id} movie={movie} genres={[]} />
          ))}
        </div>

        {titlesList != undefined && (
          <div className="flex">
            <button onClick={decrementPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              Previous
            </button>

            <button onClick={incrementPage} href="#" className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              Next
            </button>
          </div>
        )}
      </PageContent>
      <Footer />
    </>
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
