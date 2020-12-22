import '../styles/global.css'
import NavBar from '../components/NavBar'
import Head from 'next/head'

export default ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>ÆSIR</title>
        <link rel="icon" type="image/jpg" sizes="16x16" href="/favicon.jpg" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
