import { fetchSanityData } from '.'
import { digestRegulationData } from './digests'
import { queryRegulationData } from './queries'

export async function getRegulationData(slug: string) {
  const data = await fetchSanityData(queryRegulationData)
  const digestedData = digestRegulationData(data)
  return digestedData
}
