export interface Global {
  updated: number
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
  activePerOneMillion: number
  recoveredPerOneMillion: number
  criticalPerOneMillion: number
  affectedCountries: number
}

export interface AllResponse {
  data: Global
}

interface CountryInfo {
  _id: number
  iso2: string
  iso3: string
  lat: number
  long: number
  flag: string
}

export interface Country extends Global {
  country: string
  countryInfo: CountryInfo
  continent: string
}

export interface CountriesResponse {
  data: Country[]
}

export interface CountryResponse {
  data: Country
}

interface CaseObject {
  key: string
  value: number
}

export interface Timeline {
  cases: CaseObject[]
  deaths: CaseObject[]
  recovered: CaseObject[]
}

export interface Historical {
  country: string
  province: string[]
  timeline: Timeline
}

export interface HistoricalResponse {
  data: Historical
}
