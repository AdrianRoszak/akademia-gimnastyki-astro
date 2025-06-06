import type { ImageType } from '@/data/types';

//@ts-ignore
export function secureImage(image): ImageType | null {
	if (!image) return null;
	if (Object.prototype.hasOwnProperty.call(image, 'image')) {
		return {
			alt: image.alt,
			source: image.image.asset._ref,
		};
	}
	return null;
}

// @ts-ignore
export function secureFile(file): string | null {
	if (!file) return null;
	return file.asset._ref;
}
