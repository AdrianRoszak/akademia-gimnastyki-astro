import { fetchSanityData } from '.';
import { digestAboutPageData } from './digests';
import { queryAboutPage } from './queries';

export async function getAboutPageData() {
	const data = await fetchSanityData(queryAboutPage);
	const digestedData = digestAboutPageData(data);
	return digestedData;
}
