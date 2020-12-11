<script>
    import { Button, Container } from "sveltestrap";
    import { Link } from "svelte-routing";
    import AppNavBar from "./AppNavBar.svelte";

    export let location;
</script>

<div>
    <AppNavBar />
    <Container fluid>
        <Button color="light" block>
            <Link to="/groups">Manage Tech Communities</Link>
        </Button>
    </Container>
</div>
