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

const CardContainer = styled.div.attrs({ className: 'site-statistic-demo-card' })`
  max-width: 1000px;
  margin: auto;
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
    <>
      <CountrySelector />
      <CardContainer>
        <Row justify="center">
          <Col span={18}>
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
          </Col>
        </Row>
        <Row justify="center">
          <Col span={6}>
            <CountryCaseCard
              reverseColor
              title="Confirmed"
              value={selectedCountry ? getConfirmedCase(selectedCountry) : 0}
              increment={selectedCountry ? selectedCountry.NewConfirmed : 0}
            />
          </Col>
          <Col span={6}>
            <CountryCaseCard
              reverseColor
              title="Death"
              value={selectedCountry ? getDeathsCase(selectedCountry) : 0}
              increment={selectedCountry ? selectedCountry.NewDeaths : 0}
            />
          </Col>
          <Col span={6}>
            <CountryCaseCard
              title="Recovered"
              value={selectedCountry ? getRecoveredCase(selectedCountry) : 0}
              increment={selectedCountry ? selectedCountry.NewRecovered : 0}
            />
          </Col>
        </Row>
      </CardContainer>

      <Row justify="center">
        <Col span={4}>
          <CircleProgress color="#38a169" value={rate.recoveredRate} text="Recovery Rate" />
        </Col>
        <Col span={4}>
          <CircleProgress color="#e53e3e" value={rate.deathsRate} text="Death Rate" />
        </Col>
      </Row>
    </>
  )
}

export default CountryCase
