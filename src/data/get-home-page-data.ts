import { fetchSanityData } from '.'
import { digestHomePageData } from './digests'
import { queryHomePage } from './queries/query-home-page-data'

export async function getHomePageData() {
  const data = await fetchSanityData(queryHomePage)
  const digestedData = digestHomePageData(data)
  return digestedData
}
