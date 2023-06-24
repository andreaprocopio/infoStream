import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCardSmall from './CarouselCardSmall';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};


const CarouselSmall = (props) => {

  const movies = props.movies
  
  return (
    <div className={'w-full bg-indigo-900'}>
      <h4 className={"text-xl mx-auto font-bold px-10 pt-5 max-w-6xl mb-4 text-indigo-50"}>{props.content}</h4>      
      <Carousel responsive={responsive} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className='max-w-6xl mx-auto pb-5'>
        {movies.map(movie => (
          <CarouselCardSmall key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSmall