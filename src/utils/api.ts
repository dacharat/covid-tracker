import { Country } from '@interface/api'

export const createCountryData = (today: Country, yesterday: Country) => {
  return {
    ...today,
    todayRecovered: today.recovered - yesterday.recovered,
    todayActived: today.active - yesterday.active,
    slug: today.country.toLowerCase(),
  }
}
