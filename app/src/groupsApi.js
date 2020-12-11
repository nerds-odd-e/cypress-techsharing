const fetchGroups = async () => {
  let groups;
  await fetch(`/api/groups`)
    .then((r) => r.json())
    .then((data) => {
      groups = data;
    })
    .catch((error) => alert(error));
  return groups;
};

const removeGroup = async (id) => {
  let response={};
  await fetch(`/api/group/${id}`, {
    method: "DELETE",
  }).then((r) => (response = r))
  .catch((error) => alert(error));
  return response;
};

const fetchGroup = async (id) => {
  return await (await fetch(`/api/group/${id}`)).json()
}

const updateGroup = async (id, group) => {
  let response;
  await fetch(`/api/group/${id}`, {
    method: "PUT",
    body: { group }
  }).then((r) => (response = r));
  return response;
};

export { fetchGroups, removeGroup, fetchGroup, updateGroup };
