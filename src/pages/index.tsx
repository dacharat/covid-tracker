import React, { useState } from 'react'
import { GetServerSideProps } from 'next'

import Hello from '@components/common/Hello'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import styled from 'styled-components'

import { Props } from '../interface/types'
import MapChart from '@components/home/MapChart'

const Map = styled(MapChart)`
  border: 1px solid #000;
`

const App = ({ data }: Props) => {
  const [content, setContent] = useState('')

  return (
    <div>
      <Hello />
      <Map setTooltipContent={setContent} />
      <ReactTooltip html={true}>{content}</ReactTooltip>
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
