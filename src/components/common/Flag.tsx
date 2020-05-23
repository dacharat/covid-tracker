import ReactCountryFlag from 'react-country-flag'
import styled from 'styled-components'

import { FlagProps } from '@interface/v1/props'

const CountryFlag = styled(ReactCountryFlag)`
  border-radius: ${({ radius }) => `${radius}px`};
  padding: 0 5px;
`

const Flag = ({ country, size = 1, radius = 0 }: FlagProps) => {
  return (
    <CountryFlag
      svg
      radius={radius}
      style={{
        width: `${size}em`,
        height: `${size}em`,
      }}
      countryCode={country.CountryCode}
    />
  )
}

export default Flag
