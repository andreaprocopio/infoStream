import React from 'react'
import PageContent from '@/components/PageContent'
import { getById } from '@/helpers/api'
import Image from 'next/image'
import Footer from '@/components/Footer'

const MovieDetail = (props) => {

  const movie = props.movieData
  console.log(movie)

  return (
    <>
      <PageContent>
        <h4 className={"text-2xl mx-auto font-bold mb-4"}>{movie.title ? movie.title : movie.original_title}</h4>
        <div className='flex flex-col md:flex-row md:gap-8'>
          <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={295} height={442} className='rounded-lg w-full md:w-1/3 max-h-96 max-w-xs object-cover mb-4 md:mb-0' alt={movie.original_title != undefined ? movie.original_title : 'movie poster'} />
          <p class="text-lg md:px-5 md:max-w-lg">{movie.overview}</p>
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