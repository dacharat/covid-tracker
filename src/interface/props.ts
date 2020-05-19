import { CovidResponse, Country } from '@interface/types'

export interface Props {
  data: CovidResponse | null
}

export interface MapChartProps {
  countries: Country[]
  setTooltipContent: Function
}

export interface CountryCaseProps {
  countries: Country[]
}
