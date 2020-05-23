import { createContext } from 'react'
import { Country, Global } from '@interface/props'

interface HomeContextProps {
  global?: Global
  country?: string
  selectedCountry?: Country
  setContent?: Function
  setCountry?: Function
  countries?: Country[]
}

export const HomeContext = createContext<HomeContextProps>({})
