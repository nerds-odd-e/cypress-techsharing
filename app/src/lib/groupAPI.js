const baseUrl = 'http://localhost:8080/api';

export const fetchGroups = async () => {
	const url = `${baseUrl}/groups`;
	const res = await fetch(url);
	const data = await res.json();
	return [...data];
};

export const fetchGroup = async (id) => {
	const res = await fetch(`${baseUrl}/group/${id}`);
	const group = await res.json();
	return group;
};

export const updateGroup = async (group) => {
	await fetch(`${baseUrl}/group/${group.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(group)
	});
};

export const deleteGroup = async (groupId) => {
	await fetch(`${baseUrl}/group/${groupId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
