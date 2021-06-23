export const fetchGroups = async () => {
	const url = `http://localhost:8080/api/groups`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedGroups = data.map((group, index) => {
		return {
			name: group.name,
			id: group.id,
			location: location(group),
			events: events(group.events)
		};
	});
	return loadedGroups;
};

export const updateGroup = async (group) => {
	const res = await fetch(`http://localhost:8080/api/group/${group.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(group)
	});
	const data = await res.json();
};

export const deleteGroup = async (groupId) => {
	const res = await fetch(`http://localhost:8080/api/group/${groupId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

const location = (group) => {
	let result = `${group.address || ''} ${group.city || ''} ${group.stateOrProvince || ''} ${
		group.postalCode || ''
	}`.trim();
	if (!result && result.length == 0) {
		return '-';
	} else {
		return result;
	}
};

const events = (events) => {
	if (events.length == 0) return '-';
	return events.map((event) => {
		return `${new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit'
		}).format(new Date(event.date))} : ${event.title}`;
	});
};
