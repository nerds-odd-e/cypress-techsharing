const fetchGroups = async () => {
  let groups;
  await fetch(`/api/groups`)
    .then((r) => r.json())
    .then((data) => {
      groups = data;
    });
  return groups;
};

const removeGroup = async (id) => {
  let response;
  await fetch(`/api/group/${id}`, {
    method: "DELETE",
  }).then((r) => (response = r));
  console.log(response);
  return response;
};

export { fetchGroups, removeGroup };
