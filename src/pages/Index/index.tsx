import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Hello from '@components/common/Hello'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { Props } from './types'

const App = ({ data }: Props) => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hello />
    <Link href="/about">
      <a>about</a>
    </Link>
    <div>
      <p>{`NewConfirmed: ${data.Global.NewConfirmed}`}</p>
      <p>{data.Global.NewDeaths}</p>
      <p>{data.Global.NewRecovered}</p>
      <p>{data.Global.TotalConfirmed}</p>
      <p>{data.Global.TotalDeaths}</p>
      <p>{data.Global.TotalRecovered}</p>
    </div>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://api.covid19api.com/summary')
  console.log('load')
  return { props: { data } }
}

export default App
