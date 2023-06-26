import { useRouter } from 'next/router'
import '@/styles/globals.css'
import HomeHeader from '@/components/HomeHeader'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <>
      <HomeHeader />
      <Component {...pageProps} />
    </>
  )
}
