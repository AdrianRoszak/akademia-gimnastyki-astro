import { fetchSanityData } from '.'

export type RegistrationPage = {
  name: string
  code: string
}

const queryRegistrationPage = `
  *[_type == "registration_item" && registration_item_slug.current == $slug] {
    registration_item_name,
    registration_code
  }
`

export async function getRegistrationPage(slug: string) {
  const data = await fetchSanityData(queryRegistrationPage, slug)
  const digestedData = digestRegistrationPage(data[0])
  return digestedData
}

//@ts-expect-error
function digestRegistrationPage(data): RegistrationPage | null {
  if (!data) return null

  return {
    name: data.registration_item_name,
    code: data.registration_code,
  }
}
