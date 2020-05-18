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
  TotalConfirmed: ${numberWithCommas(country.TotalConfirmed)}(+${country.NewConfirmed})<br />
  TotalDeaths: ${numberWithCommas(country.TotalDeaths)}(+${country.NewDeaths})<br />
  TotalRecovered: ${numberWithCommas(country.TotalRecovered)}(+${country.NewRecovered})<br />
  `
}
