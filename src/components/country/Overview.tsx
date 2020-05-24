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
  padding: 0 10px;
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
const DateText = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
`

const Overview = ({ name, countryCode, date }: OverviewProps) => {
  return (
    <Container>
      <View>
        <Flag countryCode={countryCode} size={3} />
        <OverviewText>{`${name} Overview`}</OverviewText>
      </View>
      <DateText>{`Last update: ${new Date(date).toDateString()}`}</DateText>
    </Container>
  )
}

export default Overview
