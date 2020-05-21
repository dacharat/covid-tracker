import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CountryCaseCard from './CountryCaseCard'
import { Rate } from '@interface/types'
import { CaseProps, RowGridProps } from '@interface/props'
import {
  getConfirmedCase,
  getDeathsCase,
  getRecoveredCase,
  getActiveCase,
  getRecoveredRate,
  getDeathsRate,
} from '@utils/utils'
import CircleProgress from './CircleProgress'

const CardContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: grid;
  padding: 10px;
  grid-row-gap: 10px;
`
const RowGrid = styled.div<RowGridProps>`
  padding: 5px 0;
  display: grid;
  @media (min-width: 767px) {
    padding: 15px 0;
    grid-template-columns: repeat(${({ item }) => item}, 1fr);
  }
`
const RowCardContainer = styled(RowGrid)`
  border: 1px solid #d6d6d6;
  border-radius: 20px;
`
const RowGraphContainer = styled(RowGrid)`
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  justify-items: center;
`

const Case = ({ caseData }: CaseProps) => {
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
    <>
      <CardContainer>
        <CountryCaseCard
          reverseColor
          title="Actived"
          value={caseData ? getActiveCase(caseData) : 0}
          increment={
            caseData ? caseData.NewConfirmed - caseData.NewRecovered - caseData.NewDeaths : 0
          }
        />

        <RowCardContainer item={3}>
          <CountryCaseCard
            reverseColor
            title="Confirmed"
            value={caseData ? getConfirmedCase(caseData) : 0}
            increment={caseData ? caseData.NewConfirmed : 0}
          />
          <CountryCaseCard
            title="Recovered"
            value={caseData ? getRecoveredCase(caseData) : 0}
            increment={caseData ? caseData.NewRecovered : 0}
          />
          <CountryCaseCard
            reverseColor
            title="Death"
            value={caseData ? getDeathsCase(caseData) : 0}
            increment={caseData ? caseData.NewDeaths : 0}
          />
        </RowCardContainer>
      </CardContainer>

      <RowGraphContainer item={2}>
        <CircleProgress color="#38a169" value={rate.recoveredRate} text="Recovery Rate" />
        <CircleProgress color="#e53e3e" value={rate.deathsRate} text="Death Rate" />
      </RowGraphContainer>
    </>
  )
}

export default Case
