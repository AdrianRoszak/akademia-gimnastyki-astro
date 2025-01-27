import { sanityClient } from 'sanity:client'

export async function getRegistrationSlugs() {
  const query = '*[_type == "registration_item"] { registration_item_slug {current} }'
  const data = await sanityClient.fetch(query)
  return data
}
