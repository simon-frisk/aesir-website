import '../styles/global.css'
import NavBar from '../components/NavBar'

export default ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
