import { useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { HomeContext } from '@utils/context'
import CountrySelector from './CountrySelector'
import Case from './Case'
import { Container as C } from '@components/common/components'

const Container = styled(C)`
  padding: 10px 0;
  margin: auto;
  width: 100%;
  max-width: 1250px;
`
const SeeMoreView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d6d6d6;
`
const SeeMore = styled.a`
  font-size: 20px;
  padding: 10px;
  color: #000;
  line-height: 28px;
  transition: font-size 0.5s ease;
  :hover {
    font-size: 22px;
    color: #000;
  }
`

const CountryCase = () => {
  const { selectedCountry } = useContext(HomeContext)

  return (
    <Container>
      <CountrySelector />
      <Case caseData={selectedCountry} />
      {selectedCountry && (
        <SeeMoreView>
          <Link as={`/countries/${selectedCountry.slug}`} href="/countries/[country]">
            <SeeMore>See More</SeeMore>
          </Link>
        </SeeMoreView>
      )}
    </Container>
  )
}

export default CountryCase
