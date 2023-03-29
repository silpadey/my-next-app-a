import NavBarComp from '@/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/dark.sass'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Piu Dey</title>
      </Head>
      <NavBarComp />
      <Component {...pageProps} />
    </>
  )
}
