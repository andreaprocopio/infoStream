import Footer from "@/components/Footer";
import MovieCarousel from "@/components/MovieCarousel";
import { getTrendingMovies, getTrendingTv, getUpcomingMovies } from "@/helpers/api";
import Hero from "@/components/Hero";

export default function Homepage(props) {

  const trendingMovies = props.trendingMovies
  const trendingTv = props.trendingTv
  const upcomingMovies = props.upcomingMovies

  return (
    <>
      <Hero />
      <MovieCarousel color={0} content={'Trending movies:'} movies={trendingMovies.results} />
      <MovieCarousel color={900} content={'Trending Tv:'} movies={trendingTv.results} />
      <MovieCarousel color={0} content={'Upcoming Movies:'} movies={upcomingMovies.results} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies()
  const trendingTv = await getTrendingTv()
  const upcomingMovies = await getUpcomingMovies()

  return {
    props: {
      trendingMovies,
      trendingTv,
      upcomingMovies
    },
    revalidate: 900 //15 m
  }
}