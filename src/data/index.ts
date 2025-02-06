import { sanityClient } from 'sanity:client';

export function getCurrentDate() {
	const currentDate = new Date().toISOString().split('T')[0];
	return currentDate;
}

export async function fetchSanityData(query: string, slug?: string) {
	const params = slug ? { slug } : {};
	const data = await sanityClient.fetch(query, params);
	return data;
}
