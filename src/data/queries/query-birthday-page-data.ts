import { bannerFragment } from './fragments'

export const queryBirthdayPageData = `*[_type == 'birthday'] {
birthday_banner_selector {
    banner_selector_list[]-> {
      ${bannerFragment}
    }
  },
  birthday_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  },
  birthday_price_block {
    birthday_price_block_price,
      birthday_price_block_description,
      birthday_price_block_heading,
      birthday_price_block_lead,
      birthday_price_block_extra_services
    },
  birthday_intro,
  birthday_location_block {
    birthday_location_block_title,
    birthday_location_block_location_selector {
      birthday_location_selector_list[]-> {
        birthday_location_item_info,
        birthday_location_item_location_list[]-> {
        location_item_name,
        location_item_address,
        location_item_image,
        location_item_directions_link,
        location_item_slug
        }
      }
    }
  }
}`
