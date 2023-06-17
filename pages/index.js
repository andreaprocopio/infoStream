import Footer from "@/components/Footer";
import MovieCarousel from "@/components/MovieCarousel";

export default function Homepage() {
  return (
    <>
      <MovieCarousel color={100} content={'featured'}/>
      <MovieCarousel color={900} content={'latest'} />
      <Footer />
    </>
  )
}
