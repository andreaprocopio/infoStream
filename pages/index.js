import Footer from "@/components/Footer";
import CarouselBig from "@/components/CarouselBig";
import CarouselSmall from '@/components/CarouselSmall';
import { getTrendingMovies, getTrendingTv, getUpcomingMovies } from "@/helpers/api";
import Hero from "@/components/Hero";

export default function Homepage(props) {

  const trendingMovies = props.trendingMovies.results
  const trendingTv = props.trendingTv.results
  const upcomingMovies = props.upcomingMovies.results

  return (
    <>
      <Hero />
      <CarouselBig color={0} content={'Trending movies:'} movies={trendingMovies} />
      <CarouselSmall content={'Upcoming Movies:'} movies={upcomingMovies} />
      <CarouselBig color={900} content={'Trending Tv:'} movies={trendingTv} />
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