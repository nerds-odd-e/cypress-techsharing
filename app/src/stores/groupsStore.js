import { writable } from 'svelte/store';
import { fetchGroups, updateGroup, deleteGroup } from '$lib/groupAPI.js';

const { subscribe, set, update } = writable([]);

export default {
	subscribe
};

export const retrieveGroups = () => {
	fetchGroups().then((groups) => set(groups));
};

export const removeGroup = (groupId) => {
	deleteGroup(groupId);
	update(($groups) => {
		if ($groups == null || $groups.error) {
			return $groups;
		}
		return [...$groups].filter((group) => group.id !== groupId);
	});
};

export const editGroup = (group) => {
	updateGroup(group);
};

retrieveGroups();
