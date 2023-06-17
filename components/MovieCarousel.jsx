import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getAllMovies } from '@/data/dummy-data'
import CarouselCard from './CarouselCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MovieCarousel = (props) => {

  const title = props.content === 'featured' ? 'In Primo Piano:' : 'Ultimi Arrivi:'
  const textColor = props.color === 900 ? 100 : 850
  const movies = getAllMovies()

  return (
    <div className={'w-full ' + 'bg-indigo-' + props.color}>
      <h2 className={"text-xl max-w-6xl mx-auto font-semibold px-10 pt-10 " + 'bg-indigo-' + props.color + ' text-indigo-' + textColor}>{title}</h2>      
      <Carousel responsive={responsive} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className='max-w-6xl mx-auto'>
        {movies.map(movie => (
          <CarouselCard key={movie.id} movie={movie} textColor={textColor} />
        ))}
      </Carousel>
    </div>
  )
}

export default MovieCarousel