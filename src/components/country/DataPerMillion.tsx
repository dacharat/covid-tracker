import styled from 'styled-components'
import { Country } from '@interface/props'
import DataPerMillionBox from './DataPerMilionBox'

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

interface DataPerMillionProps {
  country: Country
}

const DataPerMillion = ({ country }: DataPerMillionProps) => {
  return (
    <Container>
      <DataPerMillionBox value={country.casesPerOneMillion} title="Confirmed cases" />
      <DataPerMillionBox value={country.deathsPerOneMillion} title="Deaths cases" />
      <DataPerMillionBox value={country.testsPerOneMillion} title="Tested cases" />
      <DataPerMillionBox value={country.activePerOneMillion} title="Actived cases" />
      <DataPerMillionBox value={country.recoveredPerOneMillion} title="Recovered cases" />
      <DataPerMillionBox value={country.criticalPerOneMillion} title="Critical cases" />
    </Container>
  )
}

export default DataPerMillion
