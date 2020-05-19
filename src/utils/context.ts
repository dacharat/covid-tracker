import { createContext } from 'react'
import { CovidResponse, Country } from '@interface/types'

interface HomeContextProps {
  data?: CovidResponse
  country?: string
  setCountry?: Function
  selectedCountry?: Country
}

export const HomeContext = createContext<HomeContextProps>({})
