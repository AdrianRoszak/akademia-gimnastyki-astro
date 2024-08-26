export const queryHomePage = `*[_type == 'home'] {
  home_banner_selector {
    banner_selector_list[]-> {
      banner_item_heading,
      banner_item_lead,
      banner_item_images
    }
  },
  home_about_us_block {
    about_us_block_heading,
    about_us_block_lead,
  },
  home_values_block {
    values_block_title,
    values_block_lead,
    values_block_values_selector {
      value_selector_list[]-> {
      value_item_description,
      value_item_title,
      }
    }
  }
}`
