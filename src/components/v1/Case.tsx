import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Rate } from '@interface/v1/types'
import { CaseProps } from '@interface/v1/props'
import { getRecoveredRate, getDeathsRate } from '@utils/utils'
import { COLOR } from '@utils/constant'
import CountryCaseCard from './CountryCaseCard'
import CircleProgress from './CircleProgress'

const RowGraphContainer = styled.div`
  width: 100%;
  max-width: 800px;
  justify-items: center;
  display: grid;
  @media (max-width: 550px) {
    padding: 15px 0;
    grid-template-columns: repeat(2, 1fr);
  }
`
const CaseCardGrid = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const ConfirmedCaseGrid = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
`
const CaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const Case = ({
  caseData = {
    NewConfirmed: undefined,
    TotalConfirmed: undefined,
    NewDeaths: undefined,
    TotalDeaths: undefined,
    NewRecovered: undefined,
    TotalRecovered: undefined,
  },
}: CaseProps) => {
  const [rate, setRate] = useState<Rate>({ recoveredRate: 0, deathsRate: 0 })

  useEffect(() => {
    if (caseData) {
      setRate({
        recoveredRate: getRecoveredRate(caseData),
        deathsRate: getDeathsRate(caseData),
      })
    }
  }, [caseData])

  return (
    <CaseContainer>
      <CaseCardGrid>
        <ConfirmedCaseGrid>
          <CountryCaseCard
            title="Confirmed"
            cardColor={COLOR.gradientPink}
            totalCase={caseData.TotalConfirmed}
            increment={caseData.NewConfirmed}
            caseFontSize="50px"
            increaseFontSize="25px"
          />
        </ConfirmedCaseGrid>

        <CountryCaseCard
          title="Actived"
          cardColor={COLOR.gradientYellow}
          totalCase={caseData.TotalConfirmed - caseData.TotalRecovered - caseData.TotalDeaths}
          increment={caseData.NewConfirmed - caseData.NewRecovered - caseData.NewDeaths}
        />
        <CountryCaseCard
          title="Recovered"
          cardColor={COLOR.gradientGreen}
          totalCase={caseData.TotalRecovered}
          increment={caseData.NewRecovered}
        />
        <CountryCaseCard
          title="Death"
          cardColor={COLOR.gradientRed}
          totalCase={caseData.TotalDeaths}
          increment={caseData.NewDeaths}
        />
      </CaseCardGrid>

      <RowGraphContainer>
        <CircleProgress color="#38a169" value={rate.recoveredRate} text="Recovery Rate" />
        <CircleProgress color="#e53e3e" value={rate.deathsRate} text="Death Rate" />
      </RowGraphContainer>
    </CaseContainer>
  )
}

export default Case
