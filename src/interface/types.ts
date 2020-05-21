export interface CovidResponse {
  Global: Global
  Countries: Country[]
  Date: Date
}

export interface Country extends Case {
  Country?: string
  CountryCode?: string
  Slug?: string
  Date?: Date
}

export interface Global extends Case {}

export interface Case {
  NewConfirmed?: number
  TotalConfirmed?: number
  NewDeaths?: number
  TotalDeaths?: number
  NewRecovered?: number
  TotalRecovered?: number
}

export interface Rate {
  recoveredRate: number
  deathsRate: number
}
