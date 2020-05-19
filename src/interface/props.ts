import { CovidResponse, Country } from '@interface/types'
import { ReactNode, ReactText } from 'react'

export interface Props {
  data: CovidResponse | null
}

export interface MapChartProps {
  setTooltipContent: Function
}

export interface ListProps {
  width: number
}

export interface NavItemProps {
  item: any
  offset: number
  duration: number
  delay: number
  width: number
}

export interface NavViewProps {
  height: number
  backgroundColor: string
}
export interface NavBarProps {
  items: any[]
  offset?: number
  duration?: number
  delay?: number
  height?: number
  backgroundColor?: string
  children?: ReactNode[] | ReactNode
  coverWidth?: number
  navWidth?: number
  linkClass?: string
  activeLinkClass?: string
  header: ReactNode
}

export interface CircleProgressProps {
  value: number
  text: string
  color?: string
}

export interface CountryCaseCardProps {
  title: ReactText
  value: ReactText
  increment?: number
  reverseColor?: boolean
}
