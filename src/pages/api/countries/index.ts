import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { CountriesResponse } from '@interface/api'
import { getCountries as getCountriesResponse } from '@utils/api'

const getCountries = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const countries = await getCountriesResponse()

      res.json({ countries })
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getCountries
