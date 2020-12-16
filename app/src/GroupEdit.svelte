<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import AppNavBar from "./AppNavBar.svelte";
    import { fetchGroup } from "./groupsApi.js";
    import {
        Button,
        Container,
        Form,
        FormGroup,
        Input,
        Label,
    } from "sveltestrap";

    export let id = "";

    let emptyGroup = {
        name: "",
        address: "",
        city: "",
        stateOrProvince: "",
        country: "",
        postalCode: "",
    };

    export let group = emptyGroup;
    let title = `${group.id ? "Edit Group" : "Add Group"}`;

    // function handleChange(event) {
    //     console.table(event);
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     let candidateGroupForUpdate = { ...group };
    //     console.log(
    //         `handleChange -> candidateGroupForUpdate: ${JSON.stringify(
    //             candidateGroupForUpdate
    //         )}`
    //     );
    //     console.log(`handleChange -> value: ${value}`);
    //     candidateGroupForUpdate[name] = value;
    //     group = { candidateGroupForUpdate };
    //     console.log(group);
    //     console.log(`handleChange -> value: ${value}`);
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        const { candidateGroupForUpdate } = group;

        await fetch(
            "/api/group" +
                (candidateGroupForUpdate.id
                    ? "/" + candidateGroupForUpdate.id
                    : ""),
            {
                method: candidateGroupForUpdate.id ? "PUT" : "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(candidateGroupForUpdate),
            }
        );
        group = candidateGroupForUpdate;
    }
</script>

<div>
    <AppNavBar />
    <Container>
        {title}
        {#await fetchGroup(id)}
            Loading...
        {:then group}
            <Form on:submit={() => handleSubmit()}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={group.name}
                        autoComplete="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                        type="text"
                        name="address"
                        id="address"
                        value={group.address}
                        autoComplete="address-level1" />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        type="text"
                        name="city"
                        id="city"
                        value={group.city}
                        autoComplete="address-level1" />
                </FormGroup>
                <div className="row">
                    <FormGroup class="col-md-4 mb-3">
                        <Label for="stateOrProvince">State/Province</Label>
                        <Input
                            type="text"
                            name="stateOrProvince"
                            id="stateOrProvince"
                            value={group.stateOrProvince}
                            autoComplete="address-level1" />
                    </FormGroup>
                    <FormGroup class="col-md-5 mb-3">
                        <Label for="country">Country</Label>
                        <Input
                            type="text"
                            name="country"
                            id="country"
                            value={group.country}
                            autoComplete="address-level1" />
                    </FormGroup>
                    <FormGroup class="col-md-3 mb-3">
                        <Label for="country">Postal Code</Label>
                        <Input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            value={group.postalCode}
                            autoComplete="address-level1" />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary">
                        <Link to="/groups">Cancel</Link>
                    </Button>
                </FormGroup>
            </Form>
        {:catch error}
            {error}
        {/await}
    </Container>
</div>
