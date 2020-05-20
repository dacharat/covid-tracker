import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import styled from 'styled-components'

import { Props } from '../interface/props'
import MapChart from '@components/home/MapChart'
import CountryCase from '@components/home/CountryCase'
import CountriesCaseTable from '@components/home/CountriesCaseTable'
import NavBar, { ElementsWrapper } from '@components/common/Navbar'
// import { mock } from '@utils/mock'
import { HomeContext } from '@utils/context'
import { Country, CovidResponse } from '@interface/types'

const MapView = styled.div`
  border: 1px solid #000;
`
const Header = styled.h1`
  margin: 0;
  padding: 0 5px;
`
const Image = styled.img`
  width: 40px;
  height: 40px;
`
const HeaderView = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1250px;
`

const navbarItems = [
  {
    label: 'Overview',
    target: 'overview',
  },
  {
    label: 'World Map',
    target: 'world-map',
  },
  {
    label: 'World Table',
    target: 'world-table',
  },
]

const App = ({ data }: Props) => {
  const [content, setContent] = useState('')
  const [country, setCountry] = useState<string>('Thailand')
  const [selectedCountry, setSelectedCountry] = useState<Country>()

  useEffect(() => {
    const selected = data.Countries.find(c => c.Country === country)
    setSelectedCountry(selected)
  }, [country])

  return (
    <HomeContext.Provider value={{ data, country, setCountry, selectedCountry }}>
      <NavBar
        header={
          <HeaderView>
            <Image src="https://img.icons8.com/doodle/48/000000/coronavirus.png" />
            <Header>Covid Tracker</Header>
          </HeaderView>
        }
        items={navbarItems}
        offset={-80}
        duration={500}
        delay={0}
        height={60}
      />
      <Container>
        <ElementsWrapper items={navbarItems}>
          <CountryCase />
          <MapView>
            <MapChart setTooltipContent={setContent} />
          </MapView>
          <CountriesCaseTable />
        </ElementsWrapper>
        <ReactTooltip border multiline type="light" html={true}>
          {content}
        </ReactTooltip>
      </Container>
    </HomeContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('https://api.covid19api.com/summary')
  // const data = mock
  data.Countries = data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
  return { props: { data } }
}

// App.getInitialProps = async () => {
//   const { data } = await axios.get('https://api.covid19api.com/summary')
//   data.Countries = data.Countries.sort(
//     (a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed,
//   )
//   return { data }
// }

export default App
