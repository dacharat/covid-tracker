import { Statistic, Card } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

import { CountryCaseCardProps } from '@interface/props'

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
      <Statistic
        title={title}
        value={value}
        precision={2}
        valueStyle={{ color: getColor() }}
        prefix={getPrefix()}
      />
    </Card>
  )
}

export default CountryCaseCard
