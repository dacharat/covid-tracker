import { NextApiRequest, NextApiResponse } from 'next'

import { getGlobalCase, getCountryByName } from '@utils/api'

const getHome = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const global = await getGlobalCase()
      const country = await getCountryByName('thailand')

      res.json({
        global,
        country,
      })
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getHome
