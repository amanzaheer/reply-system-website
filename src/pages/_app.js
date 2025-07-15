import '../styles/globals.css'
import AnyQueryButton from '../../components/AnyQueryButton'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <AnyQueryButton /> */}
    </>
  )
}

export default MyApp
