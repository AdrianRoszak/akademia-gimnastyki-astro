import type { TypedObject } from 'astro-portabletext/types'

export type CampItem = {
  name: string
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
  }
}
