import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { AllResponse } from '@interface/api'

const getHome = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { data: today }: AllResponse = await diseaseAPI.get('/v2/all')
      const { data: yesterday }: AllResponse = await diseaseAPI.get('/v2/all?yesterday=true')

      res.json({
        ...today,
        todayRecovered: today.recovered - yesterday.recovered,
        todayActived: today.active - yesterday.active,
      })
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getHome
