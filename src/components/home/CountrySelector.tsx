import { useContext } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'

import { HomeContext } from '@utils/context'
import Flag from '@components/common/Flag'

const { Option } = Select

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Overview = styled.div`
  display: flex;
  flex-direction: row;
`
const OverviewText = styled.h1`
  margin: 0;
`

const CountrySelector = () => {
  const { data, country, selectedCountry = { CountryCode: 'TH' }, setCountry } = useContext(
    HomeContext,
  )
  const countries = data.Countries

  const handleOnChange = (value: string) => {
    setCountry(value)
  }

  return (
    <Container>
      <Overview>
        <Flag country={selectedCountry} size={3} />
        <OverviewText>{`${country} Overview`}</OverviewText>
      </Overview>
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
    </Container>
  )
}

export default CountrySelector
