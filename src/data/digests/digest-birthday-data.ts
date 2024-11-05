import type { TypedObject } from 'astro-portabletext/types'
import { type BannerType, digestImages } from './digest-home-page-data'

export type BirthdayData = {
  banner: BannerType
  intro: TypedObject
  priceSection: {
    heading: string
    lead: string
    price: string
    description: TypedObject
    extraServices: {
      name: string
      price: string
    }[]
  }
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
    priceSection: {
      heading: source[0].birthday_price_block.birthday_price_block_heading,
      lead: source[0].birthday_price_block.birthday_price_block_lead,
      price: source[0].birthday_price_block.birthday_price_block_price,
      description: source[0].birthday_price_block.birthday_price_block_description,
      extraServices: source[0].birthday_price_block.birthday_price_block_extra_services.map(
        (
          item,
        ): {
          name: string
          price: string
        } => {
          return {
            name: item.birthday_extra_item_name,
            price: item.birthday_extra_item_price,
          }
        },
      ),
    },
    meta: {
      title: source[0].birthday_meta_data_block.meta_data_site_title,
      description: source[0].birthday_meta_data_block.meta_data_site_description,
    },
  }
}
