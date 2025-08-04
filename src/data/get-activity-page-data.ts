import { fetchSanityData } from '.';
import { secureImage } from './digests/utils';
import { queryActivityPage } from './queries';

export async function getActivityPageData(slug: string) {
	const data = await fetchSanityData(queryActivityPage, slug);
	const digestedData = digestActivityPageData(data);
	return digestedData;
}

//@ts-ignore
export function digestActivityPageData(data) {
	return {
		name: data[0].activity_item_name,
		description: data[0].activity_item_description,
		image: secureImage(data[0].activity_item_image),
	};
}
