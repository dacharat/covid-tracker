import { Country, Case } from '@interface/types'
import { MAX_COMFIRMED } from './constant'

export const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
  return `Country: ${country.Country}<br />
  Date: ${new Date(country.Date).toLocaleDateString('th-TH')}<br />
  TotalConfirmed: ${getConfirmedCase(country)}<br />
  TotalDeaths: ${getDeathsCase(country)}<br />
  TotalRecovered: ${getRecoveredCase(country)}<br />
  `
}

export const getConfirmedCase = ({ TotalConfirmed, NewConfirmed }: Case) => {
  return `${numberWithCommas(TotalConfirmed)}(+${NewConfirmed})`
}

export const getDeathsCase = ({ TotalDeaths, NewDeaths }: Case) => {
  return `${numberWithCommas(TotalDeaths)}(+${NewDeaths})`
}

export const getRecoveredCase = ({ TotalRecovered, NewRecovered }: Case) => {
  return `${numberWithCommas(TotalRecovered)}(+${NewRecovered})`
}

export const getActiveCase = ({
  TotalConfirmed,
  NewConfirmed,
  TotalDeaths,
  NewDeaths,
  TotalRecovered,
  NewRecovered,
}: Case) => {
  const totalActived = TotalConfirmed - TotalDeaths - TotalRecovered
  const newActived = NewConfirmed - NewDeaths - NewRecovered
  const newActivedSign = newActived < 0 ? '-' : '+'

  return `${numberWithCommas(totalActived)}(${newActivedSign}${Math.abs(newActived)})`
}

export const getRecoveredRate = ({ TotalRecovered, TotalConfirmed }: Case) => {
  return +((TotalRecovered * 100) / TotalConfirmed).toFixed(2)
}

export const getDeathsRate = ({ TotalDeaths, TotalConfirmed }: Case) => {
  return +((TotalDeaths * 100) / TotalConfirmed).toFixed(2)
}
