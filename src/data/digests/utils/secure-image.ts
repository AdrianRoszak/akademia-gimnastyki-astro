import type { ImageType } from '@/data/types';

//@ts-expect-error
export function secureImage(image): ImageType | null {
	if (!image) return null;
	if (Object.hasOwn(image, 'image')) {
		return {
			alt: image.alt,
			source: image.image.asset._ref,
		};
	}
	return null;
}

// @ts-expect-error
export function secureFile(file): string | null {
	if (!file) return null;
	return file.asset._ref;
}
