import { Global as Gb, DefaultCountry, Timeline, Additional } from './api'
import { Case } from './types'
import { ReactNode, ReactText, CSSProperties } from 'react'

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
  description?: string
}

export interface CountryCaseCardProps {
  title: ReactText
  increment?: number
  totalCase: number
  cardColor?: string
  caseFontSize?: string
  increaseFontSize?: string
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

export interface CaseTextProps {
  size?: string
}

export interface BarProps {
  title: string
  data: any
  sumValue?: boolean
}

export interface Global extends Gb {
  todayRecovered: number
  todayActived: number
}

export interface Country extends Additional, DefaultCountry {
  todayRecovered: number
  todayActived: number
  slug: string
}

export interface FullCountry extends Country {
  timeline: Timeline
}

export interface HomeProps {
  global: Global
  countries: Country[]
}

export interface CaseProps {
  caseData: Case
}

export interface FlagProps {
  countryCode: string
  size?: number
  radius?: number
}

export interface CountryProps {
  data?: FullCountry
}

export interface OverviewProps {
  name: string
  countryCode: string
}
