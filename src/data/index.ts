import { sanityClient } from 'sanity:client'

export async function fetchSanityData(query: string, slug?: string) {
  const params = slug ? { slug } : {}
  const data = await sanityClient.fetch(query, params)
  return data
}
