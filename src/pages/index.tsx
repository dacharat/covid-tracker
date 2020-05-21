import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import styled from 'styled-components'

import { Props } from '@interface/props'
import { Country } from '@interface/types'
import CountryCase from '@components/home/CountryCase'
import NavBar, { ElementsWrapper } from '@components/common/Navbar'
import { HomeContext } from '@utils/context'

import { mock } from '@utils/mock'
import GlobalCase from '@components/home/GlobalCase'

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
  /* background: linear-gradient(to bottom, #fbd3e9, #fff); */
  /* background: linear-gradient(tso bottom, #a1ffce, #fff); */
`
const Container2 = styled.div`
  /* background: linear-gradient(to top, #fbd3e9, #fff); */
  /* background: linear-gradient(to top, #a1ffce, #fff); */
`

const navbarItems = [
  {
    label: 'Country',
    target: 'Country',
  },
  {
    label: 'World',
    target: 'world',
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
    <HomeContext.Provider value={{ data, country, setCountry, selectedCountry, setContent }}>
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

      <ElementsWrapper items={navbarItems}>
        <Container>
          <CountryCase />
        </Container>
        <Container2>
          <GlobalCase />
        </Container2>
      </ElementsWrapper>
      <ReactTooltip border multiline type="light" html={true}>
        {content}
      </ReactTooltip>
    </HomeContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data } = await axios.get('https://api.covid19api.com/summary')
  // data.Countries = data.Countries.sort(
  //   (a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed,
  // )
  const data = mock
  data.Countries = data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
  return { props: { data } }
}

export default App
