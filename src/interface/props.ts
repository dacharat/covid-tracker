import { CovidResponse, Country, Case } from '@interface/types'
import { ReactNode, ReactText, CSSProperties } from 'react'

export interface Props {
  data: CovidResponse | null
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

export interface ElementsWrapperProps {
  children?: ReactNode[]
  items: any[]
  style?: CSSProperties
  className?: string
}

export interface NavProps {
  items: any[]
  offset: number
  duration: number
  delay: number
  coverWidth?: number
  navWidth: number
  children?: ReactNode[]
}

export interface FlagProps {
  country: Country
  size?: number
  radius?: number
}

export interface CaseProps {
  caseData: Case
}
