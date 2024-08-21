import { sanityClient } from 'sanity:client'

export const queryHomePage = `*[_type == 'home'] {
  home_values_block
}`

export async function getHomePageData() {
  const data = await fetchSanityData(queryHomePage)
  return data
}

export async function fetchSanityData(query: string, slug?: string) {
  const params = slug ? { slug } : {}
  const data = await sanityClient.fetch(query, params)
  return data
}
