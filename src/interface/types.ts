export interface CovidResponse {
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

export interface Global {
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

export interface Rate {
  recoveredRate: number
  deathsRate: number
}
