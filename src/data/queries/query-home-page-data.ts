import { bannerFragment } from './fragments'

export function getCurrentDate() {
  const currentDate = new Date().toISOString().split('T')[0]
  return currentDate
}

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
        event_item_price
      } | order(event_start_date asc)[event_end_date > "${getCurrentDate()}"]
    }
  },
  home_meta_data_block {
    meta_data_site_title,
    meta_data_site_description  
  }
}`
