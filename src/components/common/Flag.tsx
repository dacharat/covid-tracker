import ReactCountryFlag from 'react-country-flag'
import styled from 'styled-components'

import { FlagProps } from '@interface/props'

const CountryFlag = styled(ReactCountryFlag)`
  border-radius: ${({ radius }) => `${radius}px`};
  padding: 0 5px;
`

const Flag = ({ countryCode, size = 1, radius = 0 }: FlagProps) => {
  return (
    <CountryFlag
      svg
      radius={radius}
      style={{
        width: `${size}em`,
        height: `${size}em`,
      }}
      countryCode={countryCode}
    />
  )
}

export default Flag
