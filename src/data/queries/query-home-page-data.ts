import { getCurrentDate } from '..'
import { bannerFragment } from './fragments'
import { campsItemFragment } from './query-camps-page-data'

export const queryHomePage = `*[_type == 'home'] {
  home_banner_selector {
    banner_selector_list[]-> {
      ${bannerFragment}
    }
  },
  home_about_us_block {
    about_us_block_heading,
    about_us_block_lead,
    about_us_block_content,
  },
  home_activities_block {
    activities_block_heading,
    activities_block_lead,
    activities_block_activities_selector {
      activity_selector_list[]-> {
        activity_item_name,
        activity_item_description,
        activity_item_image,
      }
    }
  },
  home_values_block {
    values_block_title,
    values_block_lead,
    values_block_values_selector {
      value_selector_list[]-> {
        value_item_description,
        value_item_title,
        value_item_icon
      }
    }
  },
  home_camp_block {
    camps_block_heading,
    camps_block_lead,
    camps_block_camps_selector {
      camp_selector_list[]-> {
        ${campsItemFragment}
      }
    }
  },
  home_events_block {
    events_block_heading,
    events_block_lead,
    events_block_events_selector {
      event_selector_list[]-> {
        event_item_name,
        event_item_link,
        event_item_place,
        event_item_description,
        event_item_image,
        event_item_background_color,
        event_start_date,
        event_end_date,
        event_item_price,
        event_item_internal_link-> {
          registration_item_slug,
          registration_item_name,
          registration_code,
        },
      } | order(event_start_date asc)[event_end_date > "${getCurrentDate()}"]
    }
  },
  home_team_block {
    team_block_title,
    team_block_team_members {
      team_member_selector_list[]-> {
        team_member_name,
        team_member_bio,
        team_member_image
      }
    }
  },
  home_meta_data_block {
    meta_data_site_title,
    meta_data_site_description  
  }
}`
