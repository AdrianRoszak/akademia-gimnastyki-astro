import { getCurrentDate } from '..'

const currentDate = getCurrentDate()

export const campsItemFragment = `
  camp_item_name,
  camp_item_image,
  camp_item_start_date,
  camp_item_end_date,
  camp_item_description,
  camp_item_location,
  camp_item_price,
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