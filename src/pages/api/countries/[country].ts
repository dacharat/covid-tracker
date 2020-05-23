import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { CountryResponse, HistoricalResponse } from '@interface/api'
import { createCountryData } from '@utils/api'

const getCountry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const country = req.query.country
    try {
      const { data: today }: CountryResponse = await diseaseAPI.get(`/v2/countries/${country}`)
      const { data: yesterday }: CountryResponse = await diseaseAPI.get(
        `/v2/countries/${country}?yesterday=true`,
      )
      const { data: historical }: HistoricalResponse = await diseaseAPI.get(
        `/v2/historical/${today.countryInfo.iso2}?lastdays=${500}`,
      )

      res.json({
        ...createCountryData(today, yesterday),
        timeline: historical ? historical.timeline : [],
      })
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getCountry
