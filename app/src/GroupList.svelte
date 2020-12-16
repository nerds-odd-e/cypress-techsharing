<script>
    import { Button, Container, Row, Col } from "sveltestrap";
    import { Link } from "svelte-routing";
    import GroupTable from "./GroupTable.svelte";
    import AppNavBar from "./AppNavBar.svelte";

    export let location;
    let id = "";
</script>

<div>
    <AppNavBar />
    <Container fluid>
        <Row>
            <Col sm="4" class="d-flex justify-content-start align-items-center">
                <img src="/learn-and-lead.webp" alt="learn-and-lead" />
            </Col>
            <Col xs="4" sm="4" class="d-flex align-items-center">
                <h3>Tech Community Events</h3>
            </Col>
            <Col sm="4" class="d-flex justify-content-end align-items-center">
                <Button color="success">
                    <Link to="/groups/new">Add Group</Link>
                </Button>
            </Col>
        </Row>
        <Row>
            <GroupTable />
        </Row>
    </Container>
</div>
