import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { CountriesResponse } from '@interface/api'

const getCountriesName = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { data: countries }: CountriesResponse = await diseaseAPI.get('/v2/countries')

      res.json({ countries: countries.map(country => country.country.toLowerCase()) })
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getCountriesName
