import { fetchSanityData } from '.'
import { digestGlobalData } from './digests'
import { queryGlobalData } from './queries'

export async function getGlobalData() {
  const data = await fetchSanityData(queryGlobalData)
  const digestedData = digestGlobalData(data)
  return digestedData
}
