import { Country } from '../interface/types'

const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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

export const getConfirmedCase = ({ TotalConfirmed, NewConfirmed }: Country) => {
  return `${numberWithCommas(TotalConfirmed)}(+${NewConfirmed})`
}

export const getDeathsCase = ({ TotalDeaths, NewDeaths }: Country) => {
  return `${numberWithCommas(TotalDeaths)}(+${NewDeaths})`
}

export const getRecoveredCase = ({ TotalRecovered, NewRecovered }: Country) => {
  return `${numberWithCommas(TotalRecovered)}(+${NewRecovered})`
}

export const getActiveCase = (country: Country) => {
  const {
    TotalConfirmed,
    NewConfirmed,
    TotalDeaths,
    NewDeaths,
    TotalRecovered,
    NewRecovered,
  } = country

  const totalActived = TotalConfirmed - TotalDeaths - TotalRecovered
  const newActived = NewConfirmed - NewDeaths - NewRecovered
  const newActivedSign = newActived < 0 ? '-' : '+'

  return `${numberWithCommas(totalActived)}(${newActivedSign}${Math.abs(newActived)})`
}

export const getRecoveredRate = (country: Country) => {
  return +((country.TotalRecovered * 100) / country.TotalConfirmed).toFixed(2)
}

export const getDeathsRate = (country: Country) => {
  return +((country.TotalDeaths * 100) / country.TotalConfirmed).toFixed(2)
}
