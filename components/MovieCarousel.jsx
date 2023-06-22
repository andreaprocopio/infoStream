import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  const textColor = props.color === 900 ? 50 : 950
  const movies = props.movies
  const bgColorClass = props.color === 900 ? 'bg-gradient-to-br from-indigo-700 to-indigo-900' : 'bg-white'

  return (
    <div className={'w-full ' + bgColorClass}>
      <h4 className={"text-2xl mx-auto font-bold px-10 pt-5 max-w-6xl mb-2 text-indigo-" + textColor}>{props.content}</h4>      
      <Carousel responsive={responsive} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className='max-w-6xl mx-auto pb-5'>
        {movies.map(movie => (
          <CarouselCard key={movie.id} movie={movie} textColor={textColor} />
        ))}
      </Carousel>
    </div>
  )
}

export default MovieCarousel