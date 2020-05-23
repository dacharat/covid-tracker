import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { CountriesResponse } from '@interface/api'
import { createCountryData } from '@utils/api'

const getCountries = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { data: today }: CountriesResponse = await diseaseAPI.get('/v2/countries')
      const { data: yesterday }: CountriesResponse = await diseaseAPI.get(
        '/v2/countries?yesterday=true',
      )

      const countries = today.map(t => {
        const yesterdayData = yesterday.find(y => y.country === t.country)
        return createCountryData(t, yesterdayData)
      })

      res.json({ countries })
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getCountries
