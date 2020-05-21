import { useContext } from 'react'
import styled from 'styled-components'

import { HomeContext } from '@utils/context'
import CountrySelector from './CountrySelector'
import Case from './Case'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  margin: auto;
  width: 100%;
  max-width: 1250px;
`

const CountryCase = () => {
  const { selectedCountry } = useContext(HomeContext)

  return (
    <Container>
      <CountrySelector />
      <Case caseData={selectedCountry} />
    </Container>
  )
}

export default CountryCase
