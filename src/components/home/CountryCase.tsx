import { useState, useEffect } from 'react'
import { Statistic, Card, Row, Col, Typography, Select } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import CountryCaseCard from './CountryCaseCard'
import { Country } from '@interface/types'
import { CountryCaseProps } from '@interface/props'
import {
  getConfirmedCase,
  getDeathsCase,
  getRecoveredCase,
  getActiveCase,
  getRecoveredRate,
  getDeathsRate,
} from '@utils/utils'

interface Rate {
  recoveredRate: number
  deathsRate: number
}

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
          <Col span={12}>
            <Card>
              <Statistic
                title="Actived"
                value={data ? getActiveCase(data) : 0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={4}>
            <Card>
              <Statistic
                title="Confirmed"
                value={data ? getConfirmedCase(data) : 0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Death"
                value={data ? getDeathsCase(data) : 0}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Recovered"
                value={data ? getRecoveredCase(data) : 0}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          {/* <CountryCaseCard title={'test'} /> */}
        </Row>
      </CardContainer>

      <Row justify="center">
        <Col span={4}>
          <CircularProgressbar
            styles={buildStyles({
              textColor: '#38a169',
              pathColor: '#c6f6d5',
            })}
            value={rate.recoveredRate}
            text={`${rate.recoveredRate}% `}
          />
          <Title level={4}>Recovery Rate</Title>
        </Col>
        <Col span={4}>
          <CircularProgressbar
            styles={buildStyles({
              textColor: '#e53e3e',
              pathColor: '#e53e3e',
            })}
            value={rate.deathsRate}
            text={`${rate.deathsRate}%`}
          />
          <Title level={4}>Death Rate</Title>
        </Col>
      </Row>
    </>
  )
}

export default CountryCase
