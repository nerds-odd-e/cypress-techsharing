<script>
  import { goto } from '$app/navigation';
  import { retrieveGroups, removeGroup } from "../stores/groupsStore.js";
  import groups from "../stores/groupsStore.js";

  const handleDelete = (groupId) => {
    removeGroup(groupId);
  };

  const formatLocation = (group) => {
    let result = `${group.address || ''} ${group.city || ''} \
                    ${group.stateOrProvince || ''} ${group.country || ''} \
                    ${group.postalCode || ''}`.trim();
    if (!result && result.length == 0) {
      return '-';
    } else {
      return result;
    }
  };

  const formatEvents = (events) => {
    if (events.length == 0) return '-';
    return events.map((event) => {
      return `${new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }).format(new Date(event.date))} : ${event.title}`;
    });
  };
</script>

<body class="flex items-center justify-center">
	<div class="container">
		<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-black">
      {#if $groups !== null}
        {#each $groups as group}
          <tr class="bg-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th class="p-3 text-left truncate">Group Name</th>
            <th class="p-3 text-left">Location</th>
            <th class="p-3 text-left">Events</th>
            <th class="p-3 text-left" width="130">Actions</th>
          </tr>
        {/each}
      {/if}
			</thead>

			<tbody class="flex-1 sm:flex-none">
      {#if $groups !== null}
        {#each $groups as group}
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td class="border-grey-light border hover:bg-gray-100 p-3">{ group.name }</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{ formatLocation(group) }</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{ formatEvents(group.events) }</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 hover:font-medium">
                <button type="button" on:click={() => goto(`/group/${group.id}`)} class="bg-blue-500 text-gray-100 text-sm rounded hover:bg-blue-600 px-2 focus:outline-none cursor-pointer">Edit</button>
                <button type="button" on:click={() => handleDelete(group.id)} class="bg-red-500 text-gray-100 text-sm rounded hover:bg-red-600 px-2 focus:outline-none cursor-pointer">Delete</button>
            </td>
          </tr>
        {/each}
      {/if}
			</tbody>
		</table>
	</div>
</body>

<style>
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>
