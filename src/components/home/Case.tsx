import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CountryCaseCard from './CountryCaseCard'
import { Rate } from '@interface/types'
import {
  getConfirmedCase,
  getDeathsCase,
  getRecoveredCase,
  getActiveCase,
  getRecoveredRate,
  getDeathsRate,
} from '@utils/utils'
import { CaseProps } from '@interface/props'
import CircleProgress from './CircleProgress'

const CardContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: grid;
  padding: 10px;
  grid-row-gap: 10px;
`
const RowCardContainer = styled.div`
  border: 1px solid #d6d6d6;
  padding: 5px 0;
  border-radius: 20px;
  display: grid;
  @media (min-width: 767px) {
    padding: 15px 0;
    grid-template-columns: repeat(3, 1fr);
  }
`
const RowGraphContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 5px 0;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  @media (min-width: 767px) {
    padding: 15px 0;
    grid-template-columns: repeat(2, 1fr);
  }
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

        <RowCardContainer>
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

      <RowGraphContainer>
        <CircleProgress color="#38a169" value={rate.recoveredRate} text="Recovery Rate" />
        <CircleProgress color="#e53e3e" value={rate.deathsRate} text="Death Rate" />
      </RowGraphContainer>
    </>
  )
}

export default Case
