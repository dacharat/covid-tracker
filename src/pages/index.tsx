import React from 'react'
import { GetServerSideProps } from 'next'

import Hello from '@components/common/Hello'
import World from '@svg/world.svg'
// import World from '@svg-maps/world'
import { world } from '../components/common/world'
import { SVGMap, RadioSVGMap } from 'react-svg-map'
import axios from 'axios'

import { Props } from '../interface/types'
// event.target.attributes.name.value
const App = ({ data }: Props) => {
  const handleMouseOver = (e: { target: { attributes: { name: { value: any } } } }) =>
    console.log(e.target.attributes.name.value)
  return (
    <div>
      <Hello />
      {/* <World
      mapsvgGeoViewBox={'-169.110266 83.600842 190.486279 -58.508473'}
      mapsvggeoviewbox={'-169.110266 83.600842 190.486279 -58.508473'}
    /> */}
      <RadioSVGMap map={world} onLocationMouseOver={handleMouseOver} />

      {data && (
        <div>
          <p>{`NewConfirmed: ${data.Global.NewConfirmed}`}</p>
          <p>{data.Global.NewDeaths}</p>
          <p>{data.Global.NewRecovered}</p>
          <p>{data.Global.TotalConfirmed}</p>
          <p>{data.Global.TotalDeaths}</p>
          <p>{data.Global.TotalRecovered}</p>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data } = await axios.get('https://api.covid19api.com/summary')
  // return { props: { data } }
  return { props: {} }
}

export default App
