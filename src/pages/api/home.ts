import { NextApiRequest, NextApiResponse } from 'next'

import { getGlobalCase, getCountries } from '@utils/api'

const getHome = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const key = req.query.sortBy as string

    try {
      const global = await getGlobalCase()
      const countries = await getCountries(true)

      if (key) {
        res.json({
          global,
          countries: countries.sort((countryA, countryB) => countryB[key] - countryA[key]),
        })
      } else {
        res.json({
          global,
          countries,
        })
      }
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getHome
