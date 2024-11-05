import type { TypedObject } from 'astro-portabletext/types'
import { type BannerType, digestImages } from './digest-home-page-data'

export type BirthdayData = {
  banner: BannerType
  intro: TypedObject
  meta: {
    title: string
    description: string
  }
}

//@ts-ignore
export function digestBirthdayData(source): BirthdayData | null {
  if (!source) return null

  return {
    banner: {
      title: source[0].birthday_banner.banner_item_heading,
      images: digestImages(source[0].birthday_banner.banner_item_images),
      lead: source[0].birthday_banner.banner_item_lead,
    },
    intro: source[0].birthday_intro,
    meta: {
      title: source[0].birthday_meta_data_block.meta_data_site_title,
      description: source[0].birthday_meta_data_block.meta_data_site_description,
    },
  }
}
