import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

export function urlForImage(source: string) {
	const builder = imageUrlBuilder(sanityClient);
	return builder.image(source);
}
