import { NextApiRequest, NextApiResponse } from 'next'
import { diseaseAPI } from '@utils/constant'
import { HistoricalResponse } from '@interface/api'
import { getCountryByName } from '@utils/api'

const getCountry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const country = req.query.country as string
    try {
      const countryData = await getCountryByName(country)

      try {
        const { data: historical }: HistoricalResponse = await diseaseAPI.get(
          `/v2/historical/${countryData.countryInfo.iso2}?lastdays=${500}`,
        )

        const { cases: casesobj, recovered: recoveredobj, deaths: deathsobj } = historical.timeline
        const cases = Object.keys(casesobj).map(c => ({
          date: c,
          value: casesobj[c],
        }))
        const recovered = Object.keys(recoveredobj).map(c => ({
          date: c,
          value: recoveredobj[c],
        }))
        const deaths = Object.keys(deathsobj).map(c => ({
          date: c,
          value: deathsobj[c],
        }))

        res.json({
          ...countryData,
          timeline: { cases, recovered, deaths },
        })
      } catch {
        res.json({
          ...countryData,
          timeline: null,
        })
      }
    } catch (e) {
      res.status(429).json({ message: e })
    }
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getCountry
