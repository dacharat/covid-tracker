import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

import NavBar, { ElementsWrapper } from '@components/common/Navbar'
import { HomeContext } from '@utils/context'

import { internalAPI } from '@utils/constant'
import { HomeProps, Country } from '@interface/props'
import CountryCase from '@components/home/CountryCase'
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

const App = ({ global, countries }: HomeProps) => {
  const [content, setContent] = useState('')
  const [country, setCountry] = useState<string>('Thailand')
  const [selectedCountry, setSelectedCountry] = useState<Country>()

  useEffect(() => {
    const selected = countries.find(c => c.country === country)
    setSelectedCountry(selected)
  }, [country])

  return (
    <HomeContext.Provider
      value={{ global, setContent, selectedCountry, setCountry, country, countries }}
    >
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

      <ReactTooltip border multiline type="light" html={true}>
        {content}
      </ReactTooltip>
    </HomeContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await internalAPI.get('/home?sortBy=cases')

  return { props: { ...data } }
}

export default App
