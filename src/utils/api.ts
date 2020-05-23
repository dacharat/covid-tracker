import { Country, AllResponse, CountryResponse, CountriesResponse } from '@interface/api'
import { diseaseAPI } from './constant'

export const createCountryData = (today: Country, yesterday: Country, small = false) => {
  if (small) {
    const {
      updated,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      active,
      country,
      countryInfo,
    } = today

    return {
      updated,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      active,
      country,
      countryInfo,
      todayRecovered: today.recovered - yesterday.recovered,
      todayActived: today.active - yesterday.active,
      slug: today.country.toLowerCase(),
    }
  }
  return {
    ...today,
    todayRecovered: today.recovered - yesterday.recovered,
    todayActived: today.active - yesterday.active,
    slug: today.country.toLowerCase(),
  }
}

export const getGlobalCase = async () => {
  const { data: today }: AllResponse = await diseaseAPI.get('/v2/all')
  const { data: yesterday }: AllResponse = await diseaseAPI.get('/v2/all?yesterday=true')

  return {
    ...today,
    todayRecovered: today.recovered - yesterday.recovered,
    todayActived: today.active - yesterday.active,
  }
}

export const getCountryByName = async (country: string) => {
  const { data: today }: CountryResponse = await diseaseAPI.get(`/v2/countries/${country}`)
  const { data: yesterday }: CountryResponse = await diseaseAPI.get(
    `/v2/countries/${country}?yesterday=true`,
  )

  return createCountryData(today, yesterday)
}

export const getCountries = async (small = false) => {
  const { data: today }: CountriesResponse = await diseaseAPI.get('/v2/countries')
  const { data: yesterday }: CountriesResponse = await diseaseAPI.get(
    '/v2/countries?yesterday=true',
  )

  return today.map(t => {
    const yesterdayData = yesterday.find(y => y.country === t.country)
    return createCountryData(t, yesterdayData, small)
  })
}
