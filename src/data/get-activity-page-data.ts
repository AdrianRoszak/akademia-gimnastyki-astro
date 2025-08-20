import { fetchSanityData } from '.';
import { digestActivityItem } from './digests/digest-activity-data';
import { queryActivityPage } from './queries';

export async function getActivityPageData(slug: string) {
	const data = await fetchSanityData(queryActivityPage, slug);
	const digestedData = digestActivityItem(data[0]);
	return digestedData;
}
