<script>
    import { Link } from "svelte-routing";
    import { Button, Container } from "sveltestrap";
    import GroupTable from "./GroupTable.svelte";
    import AppNavBar from "./AppNavBar.svelte";

    export let location;
</script>

<div>
    <AppNavBar />
    <Container fluid>
        <div class="float-right">
            <Button color="success" tag={Link} to="/api/groups/new">
                Add Group
            </Button>
        </div>
        <h3>Tech Community Events</h3>
        <GroupTable />
    </Container>
</div>
