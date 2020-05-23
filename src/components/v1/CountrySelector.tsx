import { useContext } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'

import { HomeV1Context } from '@utils/context'
import Flag from '@components/common/Flag'
import { OverviewText } from '@components/common/components'

const { Option } = Select

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 5px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: space-between;
  }
`
const Overview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Selector = styled(Select)`
  margin: 0 20px;
`

const CountrySelector = () => {
  const { data, country, selectedCountry = { CountryCode: 'TH' }, setCountry } = useContext(
    HomeV1Context,
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
      <Selector
        showSearch
        defaultValue={country}
        style={{ width: 250 }}
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
      </Selector>
    </Container>
  )
}

export default CountrySelector
