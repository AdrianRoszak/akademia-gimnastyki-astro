// import { secureImage } from "./utils/secure-image"

import ts from 'typescript'
import { secureImage } from './utils'

export type ImageType = {
  alt: string
  source: string
}

export type BannerType = {
  title: string
  lead: string
  images: {
    mainImage: ImageType
    tabletImage: ImageType | false
    mobileImage: ImageType | false
  }
}

export type ValueType = {
  title: string
  description: string
}

export interface HomePage {
  banners: BannerType[]
  about: {
    title: string
    lead: string
  }
  values: {
    title: string
    lead: string
    values: ValueType[]
  }
}

//@ts-ignore
export function digestHomePageData(source): HomePage | null {
  if (!source) return null

  return {
    banners: digestBanners(source[0].home_banner_selector),
    about: {
      title: source[0].home_about_us_block.about_us_block_heading,
      lead: source[0].home_about_us_block.about_us_block_lead,
    },
    values: digestValues(source[0].home_values_block),
  }
}

//@ts-ignore
function digestBanners(source): HomePage['banners'] {
  //@ts-ignore
  return source.banner_selector_list.map((banner) => {
    return {
      title: banner.banner_item_heading,
      lead: banner.banner_item_lead,
      images: digestImages(banner.banner_item_images),
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
      }
    }),
  }
}

//@ts-ignore
function digestImages(images) {
  return {
    mainImage: secureImage(images.baner_image_block_main_image),
    tabletImage: false,
    mobileImage: false,
  }
}
