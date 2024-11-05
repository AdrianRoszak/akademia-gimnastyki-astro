export const queryBirthdayPageData = `*[_type == 'birthday'] {
  birthday_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  },
  birthday_title,
  birthday_banner {
    banner_item_heading,
    banner_item_images,
    banner_item_lead
  },
  birthday_price_block {
    birthday_price_block_price,
      birthday_price_block_description,
      birthday_price_block_heading,
      birthday_price_block_lead,
      birthday_price_block_extra_services {
        birthday_extra_item_name,
        birthday_extra_item_price
      }
    },
  birthday_intro,
  birthday_location_block {
    birthday_location_block_location_selector {
      birthday_location_selector_list[]-> {
        birthday_location_item_info,
        birthday_location_item_location_selector
      }
    }
  }
}`
