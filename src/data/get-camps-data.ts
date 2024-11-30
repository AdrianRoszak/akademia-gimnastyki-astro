import { fetchSanityData } from '.'
import { digestCampsData } from './digests'
import type { CampsData } from './digests/digest-camps-data'
import { queryCampsPageData, querySingleCampItemData } from './queries'

export async function getCampsData(): Promise<CampsData | null> {
  const data = await fetchSanityData(queryCampsPageData)
  const digestedData = digestCampsData(data)
  return digestedData
}

export async function getSingleCampData(slug: string): Promise<CampsData | null> {
  const data = await fetchSanityData(querySingleCampItemData, slug)
  const digestedData = digestCampsData(data)
  return digestedData
}
