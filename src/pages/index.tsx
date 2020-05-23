import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

import CountryCase from '@components/v1/CountryCase'
import NavBar, { ElementsWrapper } from '@components/common/Navbar'
import { HomeV1Context, HomeContext } from '@utils/context'

import GlobalCase from '@components/v1/GlobalCase'
import { internalAPI } from '@utils/constant'
import { HomeProps } from '@interface/props'

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

const App = ({ global, country, countries }: HomeProps) => {
  const [content, setContent] = useState('')
  // const [country, setCountry] = useState<string>('Thailand')
  // const [selectedCountry, setSelectedCountry] = useState<Country>()

  // useEffect(() => {
  //   const selected = data.Countries.find(c => c.Country === country)
  //   setSelectedCountry(selected)
  // }, [country])

  return (
    <HomeContext.Provider
      value={{ global, setContent, selectedCountry: country, countriesName: countries }}
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
        {/* <CountryCase />
        <GlobalCase /> */}
        <div></div>
        <div></div>
      </ElementsWrapper>

      <ReactTooltip border multiline type="light" html={true}>
        {content}
      </ReactTooltip>
    </HomeContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await internalAPI.get('/home')
  const { data: name } = await internalAPI.get('/countriesName')

  return { props: { ...data, ...name } }
}

export default App
