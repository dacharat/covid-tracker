import { useState, useEffect } from 'react'
import { Statistic, Card, Row, Col, Typography, Select } from 'antd'
import styled from 'styled-components'

import CountryCaseCard from './CountryCaseCard'
import { Country, Rate } from '@interface/types'
import { CountryCaseProps } from '@interface/props'
import {
  getConfirmedCase,
  getDeathsCase,
  getRecoveredCase,
  getActiveCase,
  getRecoveredRate,
  getDeathsRate,
} from '@utils/utils'
import CircleProgress from './CircleProgress'

const { Option } = Select
const { Title } = Typography

const CardContainer = styled.div.attrs({ className: 'site-statistic-demo-card' })`
  max-width: 1000px;
  margin: auto;
`

const CountryCase = ({ countries }: CountryCaseProps) => {
  const [country, setCountry] = useState<string>('Thailand')
  const [data, setData] = useState<Country | undefined>(undefined)
  const [rate, setRate] = useState<Rate>({ recoveredRate: 0, deathsRate: 0 })

  useEffect(() => {
    const selectedCountry = countries.find(c => c.Country === country)
    setData(selectedCountry)
    setRate({
      recoveredRate: getRecoveredRate(selectedCountry),
      deathsRate: getDeathsRate(selectedCountry),
    })
    console.log(getRecoveredRate(selectedCountry), getDeathsRate(selectedCountry))
  }, [country])

  const handleOnChange = (value: string) => {
    setCountry(value)
  }

  return (
    <>
      <Select
        showSearch
        defaultValue={country}
        style={{ width: 200 }}
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={handleOnChange}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
      >
        {countries.map(c => (
          <Option key={c.CountryCode} value={c.Country}>
            {c.Country}
          </Option>
        ))}
      </Select>
      <CardContainer>
        <Row justify="center">
          <Col span={18}>
            <CountryCaseCard
              reverseColor
              title="Actived"
              value={data ? getActiveCase(data) : 0}
              increment={data ? data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths : 0}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={6}>
            <CountryCaseCard
              reverseColor
              title="Confirmed"
              value={data ? getConfirmedCase(data) : 0}
              increment={data ? data.NewConfirmed : 0}
            />
          </Col>
          <Col span={6}>
            <CountryCaseCard
              reverseColor
              title="Death"
              value={data ? getDeathsCase(data) : 0}
              increment={data ? data.NewDeaths : 0}
            />
          </Col>
          <Col span={6}>
            <CountryCaseCard
              title="Recovered"
              value={data ? getRecoveredCase(data) : 0}
              increment={data ? data.NewRecovered : 0}
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
