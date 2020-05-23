import { Global as Gb, Country as C } from './api'

export interface Global extends Gb {
  todayRecovered: number
  todayActived: number
}

export interface Country extends C {
  todayRecovered: number
  todayActived: number
  slug: string
}
export interface HomeProps {
  global: Global
  country: Country
  countries?: string[]
}
