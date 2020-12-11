import { writable } from "svelte/store";
import { fetchGroups, removeGroup } from "./groupsApi.js";

const { set, update, subscribe } = writable([]);

fetchGroups().then(
  (groups) => set(groups),
  (error) => set({ error })
);

export default {
  subscribe,
};

export function deleteGroup(id) {
  removeGroup(id).then((res) => res.json);
  update(($groups) => {
    if ($groups === null || $groups.error) {
      return $groups;
    }
    return [...$groups].filter((grp) => grp.id !== id);
  });
}
