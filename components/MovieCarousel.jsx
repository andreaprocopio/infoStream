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

  const title = props.content === 'featured' ? 'In Primo Piano:' : 'Ultimi Arrivi:'
  const textColor = props.color === 900 ? 100 : 850
  const movies = props.movies

  return (
    <div className={'w-full'}>
      <h4 class={"text-2xl mx-auto font-bold px-10 pt-5 max-w-6xl mb-2 text-indigo-" + textColor}>{title}</h4>      
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