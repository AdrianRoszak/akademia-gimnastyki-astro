import type { TypedObject } from 'astro-portabletext/types'
import type { ImageType } from '../types'
import { secureImage } from './utils'

export type CampItem = {
  name: string
  image: ImageType | null
  startDate: string
  endDate: string
  description: TypedObject
  location: string
  price: string
}

export type CampsData = {
  intro: TypedObject
  meta: {
    title: string
    description: string
  }
  upcomingCamps: CampItem[] | null
  pastCamps: CampItem[] | null
}

//@ts-ignore
export function digestCampsData(source): CampsData | null {
  if (!source) return null

  return {
    intro: source[0].camps_intro,
    meta: {
      title: source[0].camps_meta_data_block.meta_data_site_title,
      description: source[0].camps_meta_data_block.meta_data_site_description,
    },
    upcomingCamps: source[0].upcomingCamps ? source[0].upcomingCamps.map(digestCampItem) : null,
    pastCamps: source[0].pastCamps ? source[0].pastCamps.map(digestCampItem) : null,
  }
}

//@ts-ignore
export function digestCampItem(source): CampItem | null {
  if (!source) return null

  return {
    name: source.camp_item_name,
    image: secureImage(source.camp_item_image),
    startDate: source.camp_item_start_date,
    endDate: source.camp_item_end_date,
    description: source.camp_item_description,
    location: source.camp_item_location,
    price: `${source.camp_item_price} zł`,
  }
}