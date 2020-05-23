import styled from 'styled-components'

import Flag from '@components/common/Flag'
import { OverviewText } from '@components/common/components'

import { OverviewProps } from '@interface/props'

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
const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Overview = ({ name, countryCode }: OverviewProps) => {
  return (
    <Container>
      <View>
        <Flag countryCode={countryCode} size={3} />
        <OverviewText>{`${name} Overview`}</OverviewText>
      </View>
    </Container>
  )
}

export default Overview
