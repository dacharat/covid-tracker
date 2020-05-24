import { MAX_COMFIRMED } from './constant'
import { Case, AdditionCase } from '@interface/types'
import { Country } from '@interface/props'

export const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const toCapitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1, word.length)
}

export const getLimitTextByLength = (text: string, length = 15) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`
  } else {
    return text
  }
}

export const isEmpty = (obj: object) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const getColor = (totalConfirmed: number) => {
  switch (true) {
    case totalConfirmed >= MAX_COMFIRMED:
      return 'rgb(255,60,137)'
    case totalConfirmed >= MAX_COMFIRMED * 0.8:
      return 'rgb(255,91,155)'
    case totalConfirmed >= MAX_COMFIRMED * 0.6:
      return 'rgb(255,121,173)'
    case totalConfirmed >= MAX_COMFIRMED * 0.4:
      return 'rgb(255,166,201)'
    case totalConfirmed >= MAX_COMFIRMED * 0.2:
    default:
      return 'rgb(255,181,210)'
  }
}

export const getDisplayFontSize = (size: number) => {
  if (size > 15) return 15
  else if (size < 8) return 0
  else return size
}

export const getLength = (point1: number, point2: number) => {
  if (point1 < 0 && point2 < 0) {
    return Math.abs(point1 - point2)
  } else if (point1 < 0) {
    return Math.abs(point1 + point2)
  } else {
    return Math.abs(point2 - point1)
  }
}

export const getCountryStatus = (name: string, country: Country) => {
  if (country) return generateCountryStatus(country)
  else return name
}

const generateCountryStatus = (country: Country) => {
  return `Country: ${country.country}<br />
  Date: ${new Date(country.updated).toLocaleDateString('th-TH')}<br />
  TotalConfirmed: ${getConfirmedCase(country)}<br />
  TotalDeaths: ${getDeathsCase(country)}<br />
  TotalRecovered: ${getRecoveredCase(country)}<br />
  `
}

export const getConfirmedCase = ({ cases, todayCases }: Case) => {
  return `${numberWithCommas(cases)}(+${todayCases})`
}

export const getDeathsCase = ({ deaths, todayDeaths }: Case) => {
  return `${numberWithCommas(deaths)}(+${todayDeaths})`
}

export const getRecoveredCase = ({ recovered, todayRecovered }: Case) => {
  return `${numberWithCommas(recovered)}(+${todayRecovered})`
}

export const getActiveCase = ({ active, todayActived }: Case) => {
  const newActivedSign = todayActived < 0 ? '-' : '+'

  return `${numberWithCommas(active)}(${newActivedSign}${Math.abs(todayActived)})`
}

export const getRecoveredRate = ({ recovered, cases }: Case) => {
  return +((recovered * 100) / cases).toFixed(2)
}

export const getDeathsRate = ({ deaths, cases }: Case) => {
  return +((deaths * 100) / cases).toFixed(2)
}

export const getActivedRate = ({ active, cases }: AdditionCase) => {
  return +((active * 100) / cases).toFixed(2)
}

export const getInfectionRate = ({ tests, cases }: AdditionCase) => {
  return +((cases * 100) / tests).toFixed(2)
}

export const getCriticalRate = ({ critical, active }: AdditionCase) => {
  return +((critical * 100) / active).toFixed(2)
}

export const getTestRate = ({ tests, population }: AdditionCase) => {
  return +((tests * 100) / population).toFixed(2)
}
