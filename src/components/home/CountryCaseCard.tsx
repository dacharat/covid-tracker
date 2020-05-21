import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import { CountryCaseCardProps } from '@interface/props'
import { Container } from '@components/common/components'

const Card = styled(Container)`
  padding: 7px 0;
`
const Total = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: ${({ color }) => color};
  margin: 0;
`
const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #a6a6a6;
  margin: 0;
`

const CountryCaseCard = ({
  title = 'empty',
  value,
  increment = 0,
  reverseColor,
}: CountryCaseCardProps) => {
  const getPrefix = () => {
    if (increment > 0) {
      return <ArrowUpOutlined />
    } else if (increment < 0) {
      return <ArrowDownOutlined />
    } else {
      return null
    }
  }

  const getColor = () => {
    const finalIncrement = reverseColor ? increment * -1 : increment
    if (finalIncrement < 0) {
      return '#cf1322'
    } else if (finalIncrement > 0) {
      return '#3f8600'
    } else {
      return '#f2c94c'
    }
  }

  return (
    <Card>
      <Text>{title}</Text>
      <Total color={getColor()}>
        {getPrefix()}
        {` ${value}`}
      </Total>
    </Card>
  )
}

export default CountryCaseCard
