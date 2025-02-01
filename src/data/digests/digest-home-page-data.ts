import type { TypedObject } from 'astro-portabletext/types'
import type { PortableTextBlock } from 'sanity'
import type { ImageType } from '../types'
import { type CampItem, digestCampItem } from './digest-camps-data'
import { secureImage } from './utils'

export type MetaDataType = {
  metaTitle: string
  metaDescription: string
}

export type DateTimeType = {
  date: string
  time: string
}

export type BannerType = {
  title: string
  lead: string
  images: ImagesType | null
  button?: {
    text: string
    link: string
  }
}

export type ValueType = {
  title: string
  description: string
  icon: {
    alt: string
    source: string
  }
}

export type CampType = {
  name: string
}

export type ActivityType = {
  name: string
  description: string
  image: ImageType
}

export interface HomePage {
  banners: BannerType[]
  about: {
    title: string
    lead: string
    body: TypedObject
  }
  activities: {
    title: string
    lead: string
    activities: ActivityType[] | null
  }
  values: {
    title: string
    lead: string
    values: ValueType[]
  }
  camps: {
    title: string
    lead: string
    camps: CampItem[] | null
  }
  events: {
    title: string
    lead: string
    events:
      | {
          name: string
          link: string
          place: string
          price: string
          description: TypedObject
          image: ImageType
          bgColor: string
          startDate: DateTimeType
          endDate: DateTimeType
        }[]
      | null
  }
  team: Team | null
  metaData: MetaDataType
}

//@ts-ignore
export function digestHomePageData(source): HomePage | null {
  if (!source) return null

  return {
    banners: digestBanners(source[0].home_banner_selector),
    about: {
      title: source[0].home_about_us_block.about_us_block_heading,
      lead: source[0].home_about_us_block.about_us_block_lead,
      body: source[0].home_about_us_block.about_us_block_content,
    },
    camps: {
      title: source[0].home_camp_block.camps_block_heading,
      lead: source[0].home_camp_block.camps_block_lead,
      camps:
        source[0].home_camp_block.camps_block_camps_selector &&
        digestCamps(source[0].home_camp_block.camps_block_camps_selector),
    },
    activities: (source[0].home_activities_block && digestActivities(source[0].home_activities_block)) || null,
    values: digestValues(source[0].home_values_block),
    events: (source[0].home_events_block && digestEvents(source[0].home_events_block)) || null,
    team: digestTeam(source[0].home_team_block),
    metaData: {
      metaTitle: source[0].home_meta_data_block.meta_data_site_title,
      metaDescription: source[0].home_meta_data_block.meta_data_site_description,
    },
  }
}

type TeamMember = {
  name: string
  bio: PortableTextBlock | null
  image: ImageType
}

type Team = {
  title: string
  teamMembers: TeamMember[] | null
}

//@ts-ignore
function digestTeamMember(source): TeamMember | null {
  if (!source) return null

  return {
    name: source.team_member_name,
    bio: source.team_member_bio,
    image: source.team_member_image && secureImage(source.team_member_image),
  }
}

//@ts-ignore
function digestTeam(source): Team | null {
  if (!source) return null
  return {
    title: source.team_block_title,
    teamMembers: source.team_block_team_members.team_member_selector_list.map(digestTeamMember),
  }
}

//@ts-expect-error
function digestCamps(source): CampType[] {
  // @ts-expect-error
  return source.camp_selector_list.map((camp) => digestCampItem(camp))
}

function digestDate(source: string): DateTimeType {
  const date = new Date(source)

  return {
    date: date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    time: date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Warsaw',
    }),
  }
}

//@ts-ignore
function digestEvents(source): HomePage['events'] {
  return {
    title: source.events_block_heading,
    lead: source.events_block_lead,
    events: source.events_block_events_selector
      ? source.events_block_events_selector.event_selector_list.map(
          //@ts-ignore
          (event) => {
            return {
              name: event.event_item_name,
              link: event.event_item_link
                ? event.event_item_link
                : `/zapisy/${event.event_item_internal_link.registration_item_slug.current}`,
              place: event.event_item_place,
              description: event.event_item_description,
              image: secureImage(event.event_item_image),
              bgColor: event.event_item_background_color,
              startDate: digestDate(event.event_start_date),
              endDate: digestDate(event.event_end_date),
              price: event.event_item_price !== 0 ? `${event.event_item_price} zł` : 'Wydarzenie bezpłatne',
            }
          },
        )
      : null,
  }
}

//@ts-ignore
function digestActivities(source): HomePage['activities'] {
  return {
    title: source.activities_block_heading,
    lead: source.activities_block_lead,
    activities: source.activities_block_activities_selector.activity_selector_list.map(
      //@ts-ignore
      (activity) => {
        return {
          name: activity.activity_item_name,
          description: activity.activity_item_description,
          image: secureImage(activity.activity_item_image),
        }
      },
    ),
  }
}

export function processButtonLink(link: string): string {
  if (link.includes('@')) {
    return `mailto:${link}`
  }
  return link
}

//@ts-ignore
export function digestBanners(source): BannerType[] {
  //@ts-ignore
  return source.banner_selector_list.map((banner) => {
    return {
      title: banner.banner_item_heading,
      lead: banner.banner_item_lead,
      images: digestImages(banner.banner_item_images),
      //TODO: it should be prepared for more than one button in the future
      button: banner.banner_item_button
        ? {
            text: banner.banner_item_button.button_block_text,
            link: processButtonLink(banner.banner_item_button.button_block_link),
          }
        : banner.banner_item_internal_link
          ? {
              text: banner.banner_item_internal_link.registration_item_name,
              link: `/zapisy/${banner.banner_item_internal_link.registration_item_slug.current}`,
            }
          : null,
    }
  })
}

//@ts-ignore
function digestValues(source) {
  return {
    title: source.values_block_title,
    lead: source.values_block_lead,
    //@ts-ignore
    values: source.values_block_values_selector.value_selector_list.map((value) => {
      return {
        title: value.value_item_title,
        description: value.value_item_description,
        icon: {
          alt: value.value_item_title,
          source: value.value_item_icon,
        },
      }
    }),
  }
}

type ImagesType = {
  mainImage: ImageType | null
  tabletImage: ImageType | false
  mobileImage: ImageType | false
}

//@ts-ignore
export function digestImages(images): ImagesType | null {
  if (!images) return null

  return {
    mainImage: secureImage(images.baner_image_block_main_image),
    tabletImage: false,
    mobileImage: false,
  }
}
