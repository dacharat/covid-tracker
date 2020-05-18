import React, { useState } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import styled from 'styled-components'

import { Props } from '../interface/types'
import MapChart from '@components/home/MapChart'
import CountryCase from '@components/home/CountryCase'
import CountriesCaseTable from '@components/home/CountriesCaseTable'

const MapView = styled.div`
  border: 1px solid #000;
`

const App = ({ data }: Props) => {
  const [content, setContent] = useState('')

  return (
    <div>
      <CountryCase countries={data.Countries} />
      <MapView>
        <MapChart countries={data.Countries} setTooltipContent={setContent} />
      </MapView>
      <ReactTooltip border multiline type="light" html={true}>
        {content}
      </ReactTooltip>
      <CountriesCaseTable countries={data.Countries} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('https://api.covid19api.com/summary')
  return { props: { data } }
}

export default App
