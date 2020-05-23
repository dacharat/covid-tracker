import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'

import NavBar, { ElementsWrapper } from '@components/common/Navbar'
import { HomeContext } from '@utils/context'

import { internalAPI } from '@utils/constant'
import { HomeProps, Country } from '@interface/props'
import CountryCase from '@components/home/CountryCase'
import GlobalCase from '@components/home/GlobalCase'
import Logo from '@components/common/Logo'

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
        header={<Logo />}
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
