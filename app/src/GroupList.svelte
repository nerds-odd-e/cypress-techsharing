<script>
    import { Link } from 'svelte-routing';
    import { Button,  ButtonGroup, Container, Table } from 'sveltestrap';
    import GroupAPI from './GroupAPI.svelte';
    import AppNavBar from './AppNavBar.svelte';
    import { deleteGroup } from './groupsStore.js';

    export let location;

    const formatDate = date => {
        return date ? (new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(date))) : ''
    };
</script>

<div>
    <AppNavBar />
    <Container fluid>
        <div class="float-right">
            <Button color="success" tag={Link} to="/api/groups/new">Add Group</Button>
        </div>
        <h3>Tech Community Events</h3>
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
            {#each $groups as {id, name, address, city, stateOrProvince, events}}
                <tr key={id}>
                    <td style="whitespace: 'nowwrap'">{name}</td>
                    <td>{`${address || ''} ${city || ''} ${stateOrProvince || ''}`}</td>
                    <td>
                        {#each events as {id, date, description} }
                            <div key={id}>{ formatDate(date) } : {description}</div>
                        {/each}
                    </td>
                    <td>
                        <ButtonGroup>
                            <Button size="sm" color="primary">Edit</Button>
                            <Button size="sm" color="danger" on:click={ () => deleteGroup(id) }>Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            {/each}
            </GroupAPI>
            </tbody>
        </Table>
    </Container>
</div>
