import { fetchSanityData } from '.'
import { queryRegulationsSlugs } from './queries'

export async function getRegulationSlugs() {
  const data = await fetchSanityData(queryRegulationsSlugs)
  return data
}
