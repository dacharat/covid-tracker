import styled from 'styled-components'

import { FullCountry } from '@interface/props'
import { COLOR } from '@utils/constant'
import CaseData from './CaseData'
import AdditionCircleProgress from './CountryCircleProgress'

interface CaseOverviewProps {
  country: FullCountry
}

const Box = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 7px;
  width: 100%;
  padding: 15px;
  margin: 20px 0;
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const HeaderCase = styled.div`
  @media (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`
const Container = styled.div`
  padding: 0 10px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CaseOverview = ({ country }: CaseOverviewProps) => {
  return (
    <Container>
      <Box>
        <HeaderCase>
          <CaseData
            title="Confirmed"
            value={country.cases}
            increase={country.todayCases}
            color={COLOR.pink}
          />
        </HeaderCase>
        <CaseData
          title="Actived"
          value={country.active}
          increase={country.todayActived}
          color={COLOR.yellow}
        />
        <CaseData
          title="Recovered"
          value={country.recovered}
          increase={country.todayRecovered}
          color={COLOR.green}
        />
        <CaseData
          title="Deaths"
          value={country.deaths}
          increase={country.todayDeaths}
          color={COLOR.red}
        />
      </Box>

      <AdditionCircleProgress country={country} />
    </Container>
  )
}

export default CaseOverview
