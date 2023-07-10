import React from 'react'
import PageContent from '@/components/PageContent'
import { getById, getCreditsById, getSimilarMovies } from '@/helpers/api'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Badge from '@/components/Badge'
import Rating from '@/components/Rating'
import CastingTable from '@/components/CastingTable'
import SimilarTitlesCarousel from '@/components/SimilarTitlesCarousel'

const MovieDetail = (props) => {

  const movie = props.movieData
  const similarMovies = props.similarMovies
  const genres = movie.genres
  const rating = movie.vote_average.toFixed(1)

  return (
    <>
      <PageContent>
        <h4 className={"text-2xl font-bold mb-4 w-full"}>{movie.title ? movie.title : movie.original_title}</h4>
        <div className='flex flex-col md:flex-row md:gap-8 justify-start w-full'>
          <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={295} height={442} className='rounded-lg w-full md:w-1/3 max-h-96 max-w-xs object-cover mb-4 md:mb-0' alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
          <div className='md:pt-5 flex-col flex gap-4'>
            <p className="text-lg w-full">{movie.overview}</p>
            <div className='flex flex-wrap gap-3'>
              {genres.map(genre => (
                <Badge key={genre.id} genre={genre.name} />
              ))}
            </div>

            <Rating rating={rating} />

            <p className='font-normal text-gray-400'>Released: {movie.release_date}</p>
          </div>
        </div>

        <CastingTable cast={props.movieCredits.cast} />

        {similarMovies.total_results > 0 && <SimilarTitlesCarousel titles={similarMovies.results} />}
        
      </PageContent>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { MovieDetail, type } = context.query
  const movieData = await getById(MovieDetail, type)
  const movieCredits = await getCreditsById(MovieDetail, type)
  const similarMovies = await getSimilarMovies(MovieDetail, type)

  return {
    props: {
      movieData: movieData,
      movieCredits: movieCredits,
      similarMovies: similarMovies
    }
  }
}

export default MovieDetail