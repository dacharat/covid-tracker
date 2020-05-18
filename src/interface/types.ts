interface CovidResponse {
  Global: Global
  Countries: Country[]
  Date: Date
}

export interface Country {
  Country: string
  CountryCode: string
  Slug: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: Date
}

interface Global {
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

export interface Props {
  data: CovidResponse | null
}

export interface MapChartProps {
  countries: Country[]
  setTooltipContent: Function
}
