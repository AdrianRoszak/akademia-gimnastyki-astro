import type { TypedObject } from 'astro-portabletext/types';
import type { ImageType } from '../types';
import {
	type BannerType,
	type MetaDataType,
	type Team,
	digestBanners,
	digestTeam,
} from './digest-home-page-data';

export interface AboutPage {
	banners: BannerType[];
	intro: TypedObject;
	// values: {
	// 	title: string;
	// 	lead: string;
	// 	values: ValueType[];
	// };
	team: Team | null;
	locations: {
		name: string;
		address: string;
		image: ImageType;
		mapLink: string;
	}[];
	metaData: MetaDataType;
}

//@ts-ignore
export function digestAboutPageData(source): AboutPage | null {
	if (!source) return null;

	return {
		banners: digestBanners(source[0].about_banner_selector),
		intro: source[0].about_intro,
		// values: digestValues(source[0].about_values_block),
		team: digestTeam(source[0].about_team_block),
		//@ts-expect-error
		locations: source[0].about_locations.location_selector_list.map((location) => {
			return {
				name: location.location_name,
				address: location.location_address,
				image: location.location_image as ImageType,
				mapLink: location.location_map_link,
			};
		}),
		metaData: {
			metaTitle: source[0].about_meta_data_block.meta_data_site_title,
			metaDescription: source[0].about_meta_data_block.meta_data_site_description,
		},
	};
}
