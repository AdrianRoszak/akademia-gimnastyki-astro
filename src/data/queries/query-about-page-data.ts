import { bannerFragment } from './fragments';

export const queryAboutPage = `*[_type == 'about'] {
  about_banner_selector {
    banner_selector_list[]-> {
      ${bannerFragment}
    }
  },
  about_intro,
  about_values {
    values_block_title,
    values_block_lead,
    values_block_values_selector {
      value_selector_list[]-> {
        value_item_description,
        value_item_title,
        value_item_add_description
      }
    }
  },
  about_locations {
    location_selector_list[]-> {
      location_name,
      location_address,
      location_image,
      location_map_link
    }
  },
  about_team_block {
    team_block_title,
    team_block_team_members {
      team_member_selector_list[]-> {
        team_member_name,
        team_member_bio,
        team_member_image
      }
    }
  },
  about_meta_data_block {
    meta_data_site_title,
    meta_data_site_description  
  }
}`;
