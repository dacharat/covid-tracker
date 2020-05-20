import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Title from 'antd/lib/typography/Title'

import { CircleProgressProps } from '@interface/props'

const CircleProgress = ({ value, text, color = '#4db0f7' }: CircleProgressProps) => {
  return (
    <>
      <CircularProgressbar
        styles={buildStyles({
          textColor: color,
          pathColor: color,
        })}
        value={value}
        text={`${value}%`}
      />
      <Title level={4}>{text}</Title>
    </>
  )
}

export default CircleProgress
