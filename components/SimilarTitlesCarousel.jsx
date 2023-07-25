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
    items: 2
  }
};
const SimilarTitlesCarousel = (props) => {
  return (
    <div className={'w-full mt-10'}>
      <h4 className={"text-xl mx-auto font-bold max-w-6xl mb-4"}>Similar Contents:</h4>
      <Carousel responsive={responsive}
                infinite={false}
                autoPlay={false}
                className='max-w-6xl mx-auto pb-5'>
        {props.titles.map(movie => (
          <CarouselCardSmall key={movie.id} movie={movie} isUpcoming={false} />
        ))}
      </Carousel>
    </div>
  )
}

export default SimilarTitlesCarousel
