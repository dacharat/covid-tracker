import { Country, AllResponse, CountryResponse } from '@interface/api'
import { diseaseAPI } from './constant'

export const createCountryData = (today: Country, yesterday: Country) => {
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
