import { useContext } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'

import Flag from '@components/common/Flag'
import { OverviewText } from '@components/common/components'
import { HomeContext } from '@utils/context'

const { Option } = Select

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 5px;
  padding: 0 10px;
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
  const { countries, setCountry, country, selectedCountry } = useContext(HomeContext)

  const handleOnChange = (value: string) => {
    setCountry(value)
  }

  return (
    <Container>
      <Overview>
        <Flag countryCode={selectedCountry?.countryInfo.iso2} size={3} />
        <OverviewText>{`${country} Overview`}</OverviewText>
      </Overview>
      <Selector
        showSearch
        defaultValue={'Thailand'}
        style={{ width: 250 }}
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={handleOnChange}
      >
        {countries.map(country => (
          <Option key={country.slug} value={country.country}>
            {country.country}
          </Option>
        ))}
      </Selector>
    </Container>
  )
}

export default CountrySelector
