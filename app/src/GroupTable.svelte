<script>
    import { Button, ButtonGroup, Table } from "sveltestrap";
    import { Link } from "svelte-routing";
    import GroupAPI from "./GroupAPI.svelte";
    import { deleteGroup } from "./groupsStore.js";

    const formatDate = (date) => {
        return date
            ? new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
              }).format(new Date(date))
            : "";
    };
</script>

<Table class="mt-4">
    <thead>
        <tr>
            <th width="20%">Name</th>
            <th width="20%">Location</th>
            <th>Events</th>
            <th width="10%">Actions</th>
        </tr>
    </thead>
    <tbody>
        <GroupAPI let:groups={$groups}>
            {#if $groups !== null}
                {#each $groups as { id, name, address, city, stateOrProvince, events } (id)}
                    <tr>
                        <td style="whitespace: 'nowwrap'">{name}</td>
                        <td>
                            {`${address || ''} ${city || ''} ${stateOrProvince || ''}`}
                        </td>
                        <td>
                            {#each events as { id, date, description } (id)}
                                <div>{formatDate(date)} : {description}</div>
                            {/each}
                        </td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary">
                                    <Link to={'/groups/' + id}>Edit</Link>
                                </Button>
                                <Button
                                    size="sm"
                                    color="danger"
                                    on:click={() => deleteGroup(id)}>
                                    Delete
                                </Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                {/each}
            {/if}
        </GroupAPI>
    </tbody>
</Table>
