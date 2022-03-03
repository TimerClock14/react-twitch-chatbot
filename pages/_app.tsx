import { AppProps } from 'next/app'
import { TopBar } from '../components/TopBar'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar></TopBar>
      <Component {...pageProps} />
    </>
  )
}

export default App
