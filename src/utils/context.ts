import { createContext } from 'react'
import { CovidResponse, Country as V1Country } from '@interface/v1/types'
import { Country, Global } from '@interface/props'

interface HomeV1ContextProps {
  data?: CovidResponse
  country?: string
  setCountry?: Function
  selectedCountry?: V1Country
  setContent?: Function
}
interface HomeContextProps {
  global?: Global
  selectedCountry?: Country
  setContent?: Function
  countriesName?: string[]
}

export const HomeV1Context = createContext<HomeV1ContextProps>({})
export const HomeContext = createContext<HomeContextProps>({})
