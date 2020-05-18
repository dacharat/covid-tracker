import { Statistic, Card, Row, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { ReactText } from 'react'

interface CountryCaseCardProps {
  title: ReactText
}

const CountryCaseCard = ({ title = 'empty' }: CountryCaseCardProps) => {
  return (
    <Col span={4}>
      <Card>
        <Statistic
          title="Idle"
          value={title}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  )
}

export default CountryCaseCard
