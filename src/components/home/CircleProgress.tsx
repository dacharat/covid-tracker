import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import { CircleProgressProps } from '@interface/props'
import styled from 'styled-components'

const Container = styled.div`
  width: 180px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        strokeWidth={10}
      />
      <Text>{text}</Text>
    </Container>
  )
}

export default CircleProgress
