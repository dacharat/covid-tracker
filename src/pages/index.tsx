import React, { useState } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import styled from 'styled-components'

import { Props } from '../interface/props'
import MapChart from '@components/home/MapChart'
import CountryCase from '@components/home/CountryCase'
import CountriesCaseTable from '@components/home/CountriesCaseTable'
import NavBar, { ElementsWrapper } from '@components/common/Navbar'
import { mock } from '@utils/mock'

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

  return (
    <div>
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
          <CountryCase countries={data.Countries} />
          <MapView>
            <MapChart countries={data.Countries} setTooltipContent={setContent} />
          </MapView>
          <CountriesCaseTable countries={data.Countries} />
        </ElementsWrapper>
        <ReactTooltip border multiline type="light" html={true}>
          {content}
        </ReactTooltip>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data } = await axios.get('https://api.covid19api.com/summary')
  const data = mock
  return { props: { data } }
}

export default App
