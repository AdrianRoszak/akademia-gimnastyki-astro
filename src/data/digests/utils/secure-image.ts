import type { ImageType } from '@/data/types'

//@ts-ignore
export function secureImage(image): ImageType | null {
  if (!image) return null
  if (Object.prototype.hasOwnProperty.call(image, 'image')) {
    return {
      alt: image.alt,
      source: image.image.asset._ref,
    }
  }
  return null
}
