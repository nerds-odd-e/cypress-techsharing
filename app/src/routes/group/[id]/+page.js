import { fetchGroup } from '$lib/groupAPI.js';
export async function load({ params }) {
	const id = params.id;
	const group = await fetchGroup(id);
	return { group };
}
