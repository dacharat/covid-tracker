import { useState, useEffect, useContext } from 'react'
import { Row, Col, Typography, Select } from 'antd'
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
import CircleProgress from './CircleProgress'
import { HomeContext } from '@utils/context'
import CountrySelector from './CountrySelector'

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
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

const CountryCase = () => {
  const { selectedCountry } = useContext(HomeContext)

  const [rate, setRate] = useState<Rate>({ recoveredRate: 0, deathsRate: 0 })

  useEffect(() => {
    if (selectedCountry) {
      setRate({
        recoveredRate: getRecoveredRate(selectedCountry),
        deathsRate: getDeathsRate(selectedCountry),
      })
    }
  }, [selectedCountry])

  return (
    <Container>
      <CountrySelector />
      <CardContainer>
        <CountryCaseCard
          reverseColor
          title="Actived"
          value={selectedCountry ? getActiveCase(selectedCountry) : 0}
          increment={
            selectedCountry
              ? selectedCountry.TotalConfirmed -
                selectedCountry.TotalRecovered -
                selectedCountry.TotalDeaths
              : 0
          }
        />

        <RowCardContainer>
          <CountryCaseCard
            reverseColor
            title="Confirmed"
            value={selectedCountry ? getConfirmedCase(selectedCountry) : 0}
            increment={selectedCountry ? selectedCountry.NewConfirmed : 0}
          />
          <CountryCaseCard
            reverseColor
            title="Death"
            value={selectedCountry ? getDeathsCase(selectedCountry) : 0}
            increment={selectedCountry ? selectedCountry.NewDeaths : 0}
          />
          <CountryCaseCard
            title="Recovered"
            value={selectedCountry ? getRecoveredCase(selectedCountry) : 0}
            increment={selectedCountry ? selectedCountry.NewRecovered : 0}
          />
        </RowCardContainer>
      </CardContainer>

      <RowGraphContainer>
        <CircleProgress color="#38a169" value={rate.recoveredRate} text="Recovery Rate" />
        <CircleProgress color="#e53e3e" value={rate.deathsRate} text="Death Rate" />
      </RowGraphContainer>
    </Container>
  )
}

export default CountryCase
