import { fetchSanityData } from '.'
import { digestCampsData } from './digests'
import type { CampsData } from './digests/digest-camps-data'
import { queryCampsPageData } from './queries'

export async function getCampsData(): Promise<CampsData | null> {
  const data = await fetchSanityData(queryCampsPageData)
  const digestedData = digestCampsData(data)
  return digestedData
}
