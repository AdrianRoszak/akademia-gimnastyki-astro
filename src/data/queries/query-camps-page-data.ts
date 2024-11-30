import { getCurrentDate } from '..'

const currentDate = getCurrentDate()

export const campsItemFragment = `
  camp_item_name,
  camp_item_image,
  camp_item_start_date,
  camp_item_end_date,
  camp_item_description,
  camp_item_place,
  camp_item_price,
  camp_item_slug {
    current
  }
`

export const queryCampsPageData = `*[_type == 'camps'] {
  camps_intro,
  camps_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  },
  "upcomingCamps": *[_type == 'camp_item' && camp_item_start_date > "${currentDate}"] {
    ${campsItemFragment}
  },
  "pastCamps": *[_type == 'camp_item' && camp_item_end_date < "${currentDate}"] {
    ${campsItemFragment}
  }
}`

export const querySingleCampItemData = `*[_type == 'camp_item' && camp_item_slug.current == $slug] {
  camp_item_intro,
  camp_item_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  },
  ${campsItemFragment}
}`
