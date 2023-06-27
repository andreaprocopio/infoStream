import Footer from "@/components/Footer";
import CarouselBig from "@/components/CarouselBig";
import CarouselSmall from '@/components/CarouselSmall';
import { getTrendingMovies, getTrendingTv, getUpcomingMovies, getMoviesGenres, getTvGenres } from "@/helpers/api";
import Hero from "@/components/Hero";

export default function Homepage(props) {

  const trendingMovies = props.trendingMovies.results
  const trendingTv = props.trendingTv.results
  const upcomingMovies = props.upcomingMovies.results
  const movieGenres = props.movieGenres
  const tvGenres = props.tvGenres

  return (
    <>
      <Hero />
      <CarouselBig color={0} content={'Trending movies:'} movies={trendingMovies} genres={movieGenres.genres} />
      <CarouselSmall content={'Upcoming Movies:'} movies={upcomingMovies} genres={movieGenres.genres} />
      <CarouselBig color={900} content={'Trending Tv:'} movies={trendingTv} genres={tvGenres.genres} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies()
  const trendingTv = await getTrendingTv()
  const upcomingMovies = await getUpcomingMovies()
  const movieGenres = await getMoviesGenres()
  const tvGenres = await getTvGenres()

  return {
    props: {
      trendingMovies,
      trendingTv,
      upcomingMovies,
      movieGenres,
      tvGenres
    },
    revalidate: 900 //15 m
  }
}