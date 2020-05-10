import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About me</h1>
      {/* <h1>Dacharat Pankong</h1>
      <h1>5910546643</h1> */}
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default About
