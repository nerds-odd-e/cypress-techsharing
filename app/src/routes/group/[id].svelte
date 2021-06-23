<script context="module">
 export async function load({page}){
   const id = page.params.id;
   const url = `http://localhost:8080/api/group/${id}`;
   const res = await fetch(url);
   const group = await res.json();
   return { props: { group } };
 }
</script>

<script>
  import { editGroup } from '../../stores/groupsStore.js';
  import { goto } from '$app/navigation';
  export let group;
  const pageTitle = group.id ? 'Edit Group' : 'Add Group';

  const handleSubmit = (grp) => {
    editGroup(grp);
    goto('/groups');
  };

</script>
<svelte:head>
  <title>{ pageTitle }</title>
</svelte:head>
<div class="flex flex-col items-center p-3">
    <h2 class="text-lg font-medium">{ pageTitle }</h2>
    <form class="w-full sm:w-1/2 xl:w-5/12" on:submit|preventDefault={handleSubmit(group)} >
      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <div class="mb-4">
            <label for="name" class="block font-semibold text-gray-800 mb-2 text-left">Group Name</label>
            <input
            id="name"
            name="name"
            type="text"
            class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
            placeholder="Group Name"
            required
            bind:value={ group.name }
            />
        </div>
        <div class="mb-4">
            <label for="address" class="block font-semibold text-gray-800 mb-2 text-left">Address</label>
            <input
            id="address"
            name="address"
            type="text"
            class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
            placeholder="Address"
            bind:value={ group.address }
            />
        </div>
        <div class="mb-4">
            <label for="city" class="block font-semibold text-gray-800 mb-2 text-left">City</label>
            <input
            id="city"
            name="city"
            type="text"
            class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
            placeholder="City"
            bind:value={ group.city }
            />
        </div>
        <div class="mb-4">
            <label for="stateOrProvince" class="block font-semibold text-gray-800 mb-2 text-left">State/Province</label>
            <input
            id="stateOrProvince"
            name="stateOrProvince"
            type="text"
            class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
            placeholder="State or Province"
            bind:value={ group.stateOrProvince }
            />
        </div>
        <div class="mb-4">
            <label for="country" class="block font-semibold text-gray-800 mb-2 text-left">Country</label>
            <input
            id="country"
            name="country"
            type="text"
            class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
            placeholder="Country"
            bind:value={ group.country }
            />
        </div>
        <div class="mb-4">
            <label for="postalCode" class="block font-semibold text-gray-800 mb-2 text-left">Postal Code</label>
            <input
            id="postalCode"
            name="postalCode"
            type="text"
            class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
            placeholder="Postal Code"
            bind:value={ group.postalCode }
            />
        </div>

        <div class="flex pt-4 gap-2">
            <button type="submit" class="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow hover:font-medium hover:bg-gray-600 border-b-4 border-gray-700"
            >Submit</button>
        </div>
      </div>
    </form>
</div>
