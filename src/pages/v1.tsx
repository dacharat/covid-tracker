import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import styled from 'styled-components'

import { Props } from '@interface/v1/props'
import { Country } from '@interface/v1/types'
import CountryCase from '@components/v1/CountryCase'
import NavBar, { ElementsWrapper } from '@components/common/Navbar'
import { HomeV1Context } from '@utils/context'

import GlobalCase from '@components/v1/GlobalCase'

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
const ApiView = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
    <HomeV1Context.Provider value={{ data, country, setCountry, selectedCountry, setContent }}>
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
        <CountryCase />
        <GlobalCase />
      </ElementsWrapper>

      <ApiView>
        Api from: <a href="https://api.covid19api.com/summary">covid19api.com</a>
      </ApiView>
      <ReactTooltip border multiline type="light" html={true}>
        {content}
      </ReactTooltip>
    </HomeV1Context.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('https://api.covid19api.com/summary')
  data.Countries = data.Countries.sort(
    (a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed,
  )

  return { props: { data } }
}

export default App
