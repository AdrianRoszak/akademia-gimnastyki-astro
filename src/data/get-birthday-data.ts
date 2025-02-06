import { fetchSanityData } from '.';
import { digestBirthdayData } from './digests';
import { queryBirthdayPageData } from './queries';

export async function getBirthdayData() {
	const data = await fetchSanityData(queryBirthdayPageData);
	const digestedData = digestBirthdayData(data);
	return digestedData;
}
