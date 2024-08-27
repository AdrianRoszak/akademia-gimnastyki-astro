import { fetchSanityData } from '.'
import { digestGlobalData } from './digests'
import { queryCompanyData } from './queries'

export async function getGlobalData() {
  const data = await fetchSanityData(queryCompanyData)
  const digestedData = digestGlobalData(data)
  return digestedData
}
