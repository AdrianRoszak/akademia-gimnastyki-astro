import { sanityClient } from 'sanity:client';

export async function getActivitySlugs() {
	const data = await fetchActivitySlugs();
	return data;
}

export async function fetchActivitySlugs() {
	const query = `*[_type == "activity_item"] { activity_item_slug {current} }`;
	const data = await sanityClient.fetch(query);
	return data;
}
