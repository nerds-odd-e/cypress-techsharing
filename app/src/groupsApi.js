const fetchGroups = async () => {
  let groups;
  await fetch(`http://localhost:8080/api/groups`)
    .then((r) => r.json())
    .then((data) => {
      groups = data;
    });
  return groups;
};

const removeGroup = async (id) => {
  let response;
  await fetch(`http://localhost:8080/api/group/${id}`, {
    method: "DELETE",
  }).then((r) => (response = r));
  console.log(response);
  return response;
};

export { fetchGroups, removeGroup };
