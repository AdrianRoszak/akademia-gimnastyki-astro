export const queryActivityPage = `*[_type == 'activity_item' && activity_item_slug.current == $slug] {
    activity_item_name,
    activity_item_description,
    activity_item_image,
    activity_item_characteristics[] {
      activity_item_characteristic_name,
      activity_item_characteristic_description
    },
    activity_item_gallery,
    activity_item_button {
      button_block_text,
      button_block_link
    },
    activity_item_internal_link-> {
      registration_item_name,
      registration_item_slug {
        current
      }
    },
    activity_item_slug,
    activity_item_meta_data_block {
      meta_data_site_title,
      meta_data_site_description
    }
  } 
`;
