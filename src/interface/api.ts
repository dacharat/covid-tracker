export interface Default {
  updated: number
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  active: number
}

export interface Additional {
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
export interface Global extends Default, Additional {}

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

export interface DefaultCountry extends Default {
  country: string
  countryInfo: CountryInfo
}

export interface Country extends Additional, DefaultCountry {
  continent: string
}

export interface CountriesResponse {
  data: Country[]
}

export interface CountryResponse {
  data: Country
}

export interface TimelineObject {
  cases: object
  deaths: object
  recovered: object
}

export interface Historical {
  country: string
  province: string[]
  timeline: TimelineObject
}

export interface HistoricalResponse {
  data: Historical
}

interface Time {
  date: string
  value: number
}

export interface Timeline {
  cases: Time[]
  deaths: Time[]
  recovered: Time[]
}
