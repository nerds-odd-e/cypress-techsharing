const fetchGroups = async () => {
  let groups;
  await fetch(`/api/groups`)
    .then((r) => r.json())
    .then((data) => (groups = data))
    .catch((error) => {
      groups = [];
      alert(`REST API call error: ${error}`);
    });
  return groups;
};

const removeGroup = async (id) => {
  let response;
  await fetch(`/api/group/${id}`, {
    method: "DELETE",
  })
    .then((r) => (response = r))
    .catch((error) => {
      response = error;
      alert(`REST API call error: ${error}`);
    });
  return response;
};

const fetchGroup = async (id) => {
  let group;
  await fetch(`/api/group/${id}`)
    .then((r) => r.json())
    .then((data) => (group = data))
    .catch((error) => {
      group = {};
      alert(`REST API call error: ${error}`);
    });
  return group;
};

const updateGroup = async (id, group) => {
  let response;
  await fetch(`/api/group/${id}`, {
    method: "PUT",
    body: { group },
  })
    .then((r) => (response = r))
    .catch((error) => {
      response = error;
      alert(`REST API call error: ${error}`);
    });
  return response;
};

export { fetchGroups, removeGroup, fetchGroup, updateGroup };
