import { sanityClient } from 'sanity:client';
import { getFileAsset } from '@sanity/asset-utils';
import imageUrlBuilder from '@sanity/image-url';

export function urlForImage(source: string) {
	const builder = imageUrlBuilder(sanityClient);
	return builder.image(source);
}

export function urlForFile(source: string) {
	return getFileAsset(source, sanityClient.config());
}
