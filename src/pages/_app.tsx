import Head from 'next/head'
import { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import 'react-circular-progressbar/dist/styles.css'

import Footer from '@components/common/Footer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Covid Tracker</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
