import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { HistoricalResponse } from '@interface/api'
import { getCountryByName } from '@utils/api'

const getCountry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const country = req.query.country as string
    try {
      const countryData = await getCountryByName(country)
      const { data: historical }: HistoricalResponse = await diseaseAPI.get(
        `/v2/historical/${countryData.countryInfo.iso2}?lastdays=${500}`,
      )

      res.json({
        ...countryData,
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
