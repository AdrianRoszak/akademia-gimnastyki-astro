import { sanityClient } from 'sanity:client'

export async function getCampPageSlugs() {
  const data = await fetchCampPageSlugs()
  return data
}

export async function fetchCampPageSlugs() {
  const query = `*[_type == "camp_item"] { camp_item_slug {current} }`
  const data = await sanityClient.fetch(query)

  console.log(data)
  return data
}
