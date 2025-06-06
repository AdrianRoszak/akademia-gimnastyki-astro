import { fetchSanityData } from '.';
import { secureFile } from './digests/utils';

const queryInfoPage = `
*[_type == "poster"]{
  poster_file,
  poster_image
}`;

export async function getInfoPageData() {
	const data = await fetchSanityData(queryInfoPage);
	const digestedData = digestInfoPageData(data);
	return digestedData;
}

// @ts-ignore
function digestInfoPageData(source) {
	return {
		file: secureFile(source[0]?.poster_file),
		image: source[0].poster_image
			? {
					source: source[0]?.poster_image?.asset?._ref,
					alt: 'plakat',
				}
			: null,
	};
}
