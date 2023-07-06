import React from 'react'
import PageContent from '@/components/PageContent'
import { getById } from '@/helpers/api'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Badge from '@/components/Badge'
import Rating from '@/components/Rating'

const MovieDetail = (props) => {

  const movie = props.movieData
  const genres = movie.genres
  const rating = movie.vote_average.toFixed(1)
  console.log(movie)

  return (
    <>
      <PageContent>
        <h4 className={"text-2xl font-bold mb-4 w-full"}>{movie.title ? movie.title : movie.original_title}</h4>
        <div className='flex flex-col md:flex-row md:gap-8 justify-start w-full'>
          <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={295} height={442} className='rounded-lg w-full md:w-1/3 max-h-96 max-w-xs object-cover mb-4 md:mb-0' alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
          <div className='md:pt-5 flex-col flex gap-5'>
            <p className="text-lg w-full">{movie.overview}</p>
            <div className='flex flex-wrap gap-3'>
              {genres.map(genre => (
                <Badge key={genre.id} genre={genre.name} />
              ))}
            </div>
            <Rating rating={rating} />
          </div>
        </div> 
      </PageContent>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { MovieDetail } = context.query
  const movieData = await getById(MovieDetail)

  return {
    props: {
      movieData: movieData
    }
  }
}

export default MovieDetail