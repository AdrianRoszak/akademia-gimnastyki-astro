// import { secureImage } from "./utils/secure-image"

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

export interface HomePage {
  banners: BannerType[]
  values: {
    title: string
  }
}

//@ts-ignore
export function digestHomePageData(source): HomePage | null {
  if (!source) return null

  console.log(source)

  return {
    banners: digestBanners(source[0].home_banner_selector),
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
