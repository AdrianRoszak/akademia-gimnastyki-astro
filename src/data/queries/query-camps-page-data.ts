import { getCurrentDate } from '..';

const currentDate = getCurrentDate();

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
  },
  camp_item_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  }
`;

export const queryCampsPageData = `*[_type == 'camps'] {
  camps_page_title,
  camps_intro,
  camps_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  },
  "upcomingCamps": *[_type == 'camp_item' && camp_item_start_date > "${currentDate}"] | order(camp_item_start_date asc) {
    ${campsItemFragment}
  },
  "pastCamps": *[_type == 'camp_item' && camp_item_end_date < "${currentDate}"] {
    ${campsItemFragment}
  }
}`;

export const querySingleCampItemData = `*[_type == 'camp_item' && camp_item_slug.current == $slug] {
  camp_item_intro,
  ${campsItemFragment},
  camp_item_long_description,
  camp_item_program,
  camp_item_price_details,
  camp_item_gallery,
  camp_item_registration-> {
    registration_item_slug,
  }
}`;
