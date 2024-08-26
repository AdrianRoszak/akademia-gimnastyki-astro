export const queryHomePage = `*[_type == 'home'] {
  home_banner_selector {
    banner_selector_list[]-> {
      banner_item_heading,
      banner_item_lead,
      banner_item_images
    }
  },
  home_values_block
}`
