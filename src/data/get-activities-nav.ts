import { sanityClient } from 'sanity:client';

export type ActivityNavItem = {
	name: string;
	slug: string;
};

export async function getActivitiesNav(): Promise<ActivityNavItem[]> {
	const query = `*[_type == "activity_item"] | order(activity_item_name asc) {
		activity_item_name,
		activity_item_slug {
			current
		}
	}`;

	const data = await sanityClient.fetch(query);

	// @ts-expect-error
	return data.map((item) => ({
		name: item.activity_item_name,
		slug: item.activity_item_slug ? item.activity_item_slug.current : '',
	}));
}
