import type { TypedObject } from 'astro-portabletext/types';
import type { ImageType } from '../types';
import { secureImage } from './utils';

export type ActivityCharacteristic = {
	name: string;
	description: string;
};

export type ActivityButton = {
	text: string;
	link: string;
};

export type ActivityInternalLink = {
	name: string;
	slug: string;
};

export type ActivityItem = {
	name: string;
	image: ImageType | null;
	description: TypedObject;
	characteristics: ActivityCharacteristic[] | null;
	gallery: ImageType[] | null;
	button: ActivityButton | null;
	internalLink: ActivityInternalLink | null;
	slug: string;
	meta: {
		title: string;
		description: string;
	};
};

//@ts-ignore
export function digestActivityItem(source): ActivityItem | null {
	if (!source) return null;

	return {
		name: source.activity_item_name,
		image: secureImage(source.activity_item_image),
		description: source.activity_item_description,
		characteristics: source.activity_item_characteristics
			? // @ts-expect-error
				source.activity_item_characteristics.map((char) => ({
					name: char.activity_item_characteristic_name,
					description: char.activity_item_characteristic_description,
				}))
			: null,
		gallery: source.activity_item_gallery
			? // @ts-expect-error
				source.activity_item_gallery
					.map((img) => secureImage(img))
					.filter(Boolean)
			: null,
		button: source.activity_item_button
			? {
					text: source.activity_item_button.button_block_text,
					link: source.activity_item_button.button_block_link,
				}
			: null,
		internalLink: source.activity_item_internal_link
			? {
					name: source.activity_item_internal_link.registration_item_name,
					slug: source.activity_item_internal_link.registration_item_slug.current,
				}
			: null,
		slug: source.activity_item_slug.current,
		meta: {
			title:
				source.activity_item_meta_data_block?.meta_data_site_title || source.activity_item_name,
			description: source.activity_item_meta_data_block?.meta_data_site_description || '',
		},
	};
}
