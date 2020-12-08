<script>
    import AppNavBar from "./AppNavBar.svelte";
    import { Button, Container } from "sveltestrap";
    import { Link } from "svelte-routing";

    export let location;
</script>

<div>
    <AppNavBar />
    <Container fluid>
        <Button color="light" outline><Link to="/groups">Manage Tech Communities</Link></Button>
    </Container>
</div>
