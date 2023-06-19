import Footer from "@/components/Footer";
import MovieCarousel from "@/components/MovieCarousel";
import { getTrendingMovies } from "@/helpers/api";
import Hero from "@/components/Hero";

export default function Homepage(props) {

  const trendingMovies = props.trendingMovies

  return (
    <>
      <Hero />
      <MovieCarousel color={100} content={'featured'} movies={trendingMovies.results} />
      <MovieCarousel color={900} content={'latest'} movies={trendingMovies.results} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies()

  return {
    props: {
      trendingMovies,
    },
  }
}