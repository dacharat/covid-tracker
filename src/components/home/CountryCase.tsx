import { useState, useEffect } from 'react'
import { Statistic, Card, Row, Col, Typography, Select } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import CountryCaseCard from './CountryCaseCard'
import { CountryCaseProps, Country } from '@interface/types'
import { getConfirmedCase, getDeathsCase, getRecoveredCase, getActiveCase } from '@utils/utils'

const { Option } = Select
const { Title } = Typography
const CardContainer = styled.div.attrs({ className: 'site-statistic-demo-card' })`
  max-width: 1000px;
  margin: auto;
`

const CountryCase = ({ countries }: CountryCaseProps) => {
  const [country, setCountry] = useState<string>('Thailand')
  const [data, setData] = useState<Country | undefined>(undefined)

  useEffect(() => {
    const selectedCountry = countries.find(c => c.Country === country)
    setData(selectedCountry)
  }, [country])

  const handleOnChange = (value: string) => {
    setCountry(value)
  }

  return (
    <>
      <Title level={2}>Country Case Summary</Title>

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
    </>
  )
}

export default CountryCase
