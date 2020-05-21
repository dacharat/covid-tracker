import styled from 'styled-components'
import { OverviewText } from '@components/common/components'
import { HomeContext } from '@utils/context'
import { useContext } from 'react'

import Case from './Case'
import MapChart from './MapChart'
import CountriesCaseTable from './CountriesCaseTable'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`
const Overview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: auto;
`
const MapView = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1000px) {
    display: grid;
    padding: 15px 0;
    grid-template-columns: 30% 70%;
  }
`

const GlobalCase = () => {
  const { data } = useContext(HomeContext)
  const global = data.Global

  return (
    <Container>
      <Overview>
        <OverviewText>Global Overview</OverviewText>
      </Overview>
      <Case caseData={global} />
      <MapView>
        <CountriesCaseTable />
        <MapChart />
      </MapView>
    </Container>
  )
}

export default GlobalCase
