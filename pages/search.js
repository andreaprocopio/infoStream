import React from 'react'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import SearchInput from '@/components/SearchInput'
import { getMoviesByQuery } from '@/helpers/api'
import { useState, useEffect } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import ResultListCard from '@/components/ResultListCard'

const search = () => {

  const [foundTitles, setFoundTitles] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [pagination, setPagination] = useState(1)
  const [query, setQuery] = useState("")
  const [isMovie, setIsMovie] = useState(true)

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

  const searchQuery = async (query) => {

    if (query === "") {
      return
    }

    if (query.length <= 1) {
      setError(true)
      return
    }

    setQuery(query)
    setError(false)
    setIsLoading(true)
    const mediaType = isMovie ? 'movie' : 'tv'
    const data = await getMoviesByQuery(query, pagination, mediaType)
    setIsLoading(false)

    setFoundTitles(data.results)
  }

  useEffect(() => {
    searchQuery(query);
  }, [pagination]);

  useEffect(() => {
    setPagination(1)
  }, [query])

  useEffect(() => {
    setFoundTitles(undefined)
  }, [isMovie])

  const activeClass = "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br"
  const deactiveClass = "text-purple-600 bg-white border border-purple-600"

  const movieButtonClasses = isMovie ? activeClass : deactiveClass
  const tvButtonClasses = !isMovie ? activeClass : deactiveClass

  return (
    <>
      <PageContent>
        <h4 className={"text-2xl font-bold mb-4 w-full"}>Search</h4>

        <div className='flex flex-col md:flex-row gap-4 mb-4'>
          <button onClick={switchToMovie} className={movieButtonClasses + ` focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
            Movies
          </button>
          <button onClick={switchToTv} className={tvButtonClasses + ` focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
            Tv Series
          </button>
        </div>

        <SearchInput onSearchTermChange={searchQuery} />

        {isError && <p className='text-red-500'>You have to at least type 2 characters!</p>}

        {isLoading && <LoadingSpinner />}

        <div className='grid gap-6 md:gap-8 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-10 pb-4'>
          {!isLoading && foundTitles != undefined && foundTitles.map((movie) => (
            <ResultListCard key={movie.id} movie={movie} genres={[]} />
          ))}
        </div>

        {foundTitles != undefined && (
          <div className="flex justify-between md:justify-center gap-10 mt-10">
            <button onClick={decrementPage} className="flex items-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
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

export default search
