//@ts-ignore
export function secureImage(image) {
  if (!image) return null
  if (Object.prototype.hasOwnProperty.call(image, 'image')) {
    return {
      alt: image.alt,
      source: image.image.asset._ref,
    }
  }
  return null
}
