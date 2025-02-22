import type { TypedObject } from 'astro-portabletext/types';
import type { ImageType } from '../types';
import { type BannerType, digestBanners } from './digest-home-page-data';
import { secureImage } from './utils';

export type BirthdayData = {
	banners: BannerType[];
	intro: TypedObject;
	priceSection: {
		heading: string;
		lead: string;
		price: string;
		description: TypedObject;
		extraServices:
			| {
					name: string;
					price: string;
			  }[]
			| null;
	};
	locationSection: {
		heading: string;
		locations: {
			info: TypedObject;
			location: {
				name: string;
				address: string;
				image: ImageType;
				directionsLink: string;
				slug: string;
			};
		}[];
	};
	meta: {
		title: string;
		description: string;
	};
};

//@ts-ignore
export function digestBirthdayData(source): BirthdayData | null {
	if (!source) return null;

	return {
		banners: digestBanners(source[0].birthday_banner_selector),
		intro: source[0].birthday_intro,
		priceSection: {
			heading: source[0].birthday_price_block.birthday_price_block_heading,
			lead: source[0].birthday_price_block.birthday_price_block_lead,
			price: `${source[0].birthday_price_block.birthday_price_block_price} zł`,
			description: source[0].birthday_price_block.birthday_price_block_description,
			extraServices: source[0].birthday_price_block.birthday_price_block_extra_services
				? // @ts-expect-error
					source[0].birthday_price_block.birthday_price_block_extra_services.map((item) => {
						return {
							name: item.birthday_extra_item_name,
							price: `${item.birthday_extra_item_price} zł`,
						};
					})
				: null,
		},
		locationSection: {
			heading: source[0].birthday_location_block.birthday_location_block_title,
			locations:
				source[0].birthday_location_block.birthday_location_block_location_selector.birthday_location_selector_list.map(
					// @ts-expect-error
					(item) => {
						return {
							info: item.birthday_location_item_info,
							location: {
								name: item.birthday_location_item_location_list[0].location_item_name,
								address: item.birthday_location_item_location_list[0].location_item_address,
								image: secureImage(
									item.birthday_location_item_location_list[0].location_item_image,
								),
								directionsLink:
									item.birthday_location_item_location_list[0].location_item_directions_link,
								slug: item.birthday_location_item_location_list[0].location_item_slug,
							},
						};
					},
				),
		},
		meta: {
			title: source[0].birthday_meta_data_block.meta_data_site_title,
			description: source[0].birthday_meta_data_block.meta_data_site_description,
		},
	};
}
