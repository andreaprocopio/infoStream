import { Html, Head, Main, NextScript } from 'next/document'
import MainHeader from '@/components/MainHeader'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MainHeader />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
