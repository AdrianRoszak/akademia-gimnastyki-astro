import { fetchSanityData } from '.'
import { digestFaqData } from './digests'
import { queryFaqData } from './queries'

export async function getFaqData() {
  const data = await fetchSanityData(queryFaqData)
  const digestedData = digestFaqData(data)
  return digestedData
}
