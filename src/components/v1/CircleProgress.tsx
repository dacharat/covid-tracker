import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import { CircleProgressProps } from '@interface/v1/props'
import { Container as C } from '@components/common/components'

const Container = styled(C)`
  min-width: 120px;
  max-width: 180px;
  padding: 10px;
`
const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 7px 0;
`

const CircleProgress = ({ value, text, color = '#4db0f7' }: CircleProgressProps) => {
  return (
    <Container>
      <CircularProgressbar
        styles={buildStyles({
          textColor: color,
          pathColor: color,
        })}
        value={value}
        text={`${value}%`}
        strokeWidth={8}
      />
      <Text>{text}</Text>
    </Container>
  )
}

export default CircleProgress
