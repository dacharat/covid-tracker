import { useState, useEffect } from 'react'
import { NextPageContext, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Axios from 'axios'

import { internalAPI } from '@utils/constant'
import { CountryProps } from '@interface/props'
import { toCapitalize } from '@utils/utils'
import Logo from '@components/common/Logo'
import Navbar, { ElementsWrapper } from '@components/common/Navbar'
import Overview from '@components/country/Overview'
import { Container as C } from '@components/common/components'
import Case from '@components/home/Case'
import AdditionCircleProgress from '@components/country/AdditionCircleProgress'
import Line from '@components/country/Line'

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

const Container = styled(C)`
  padding: 10px 0;
  margin: auto;
  width: 100%;
  max-width: 1250px;
`

const Country = ({ data }: CountryProps) => {
  const router = useRouter()
  const [country, setCountry] = useState(data)

  useEffect(() => {
    if (!data.country) {
      fetchCountry()
    }
  }, [])

  const fetchCountry = async () => {
    const { data: countryData } = await internalAPI.get(`/countries/${router.query.country}`)
    // const { data: countryData } = await Axios.get(
    //   `http://localhost:3000/api/countries/${router.query.country}`,
    // )
    setCountry(countryData)
    console.log(countryData)
  }

  return (
    <>
      <Navbar
        header={<Logo />}
        items={navbarItems}
        offset={-80}
        duration={500}
        delay={0}
        height={60}
      />

      <ElementsWrapper items={navbarItems}>
        <Container>
          <Overview
            name={toCapitalize(router.query.country as string)}
            countryCode={country.countryInfo?.iso2}
          />
          <Case caseData={country} />
          <AdditionCircleProgress country={country} />
        </Container>
        <div>{country.timeline && <Line country={country} />}</div>
      </ElementsWrapper>
    </>
  )
}

Country.getInitialProps = async ({ req, query }: NextPageContext) => {
  if (!req) {
    return { data: {} }
  }

  const { data } = await internalAPI.get(`/countries/${query.country}`)

  return { data }
}

export default Country
