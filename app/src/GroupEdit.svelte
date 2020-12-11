<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import {
        Button,
        Container,
        Form,
        FormGroup,
        Input,
        Label,
    } from "sveltestrap";
    import AppNavBar from "./AppNavBar.svelte";
    import { fetchGroup } from "./groupsApi.js";

    export let id;

    let emptyGroup = {
        name: "",
        address: "",
        city: "",
        stateOrProvince: "",
        country: "",
        postalCode: "",
    };

    let group=emptyGroup;
    let title=`${group.id ? 'Edit Group' : 'Add Group'}`;

    onMount(async() => {
        group = retrieveGroup(id);
    });

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let candidateGroupForUpdate = { ...group };
        console.log(`handleChange -> candidateGroupForUpdate: ${JSON.stringify(candidateGroupForUpdate)}`);
        console.log(`handleChange -> value: ${value}`);
        candidateGroupForUpdate[name] = value;
        group = { candidateGroupForUpdate };
        console.log(`handleChange -> value: ${value}`);
    }

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
        $group = candidateGroupForUpdate;
    }
</script>

<div>
    <AppNavbar/>
    <Container>
    {title}
    <Form on:submit={ () => handleSubmit() }>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={group.name || ''}
                    on:change={ () => handleChange() } autoComplete="name"/>
        </FormGroup>
        <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" value={group.address || ''}
                    on:change={ () => handleChange() } autoComplete="address-level1"/>
        </FormGroup>
        <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city" value={group.city || ''}
                    on:change={ () => handleChange() } autoComplete="address-level1"/>
        </FormGroup>
        <div className="row">
            <FormGroup class="col-md-4 mb-3">
                <Label for="stateOrProvince">State/Province</Label>
                <Input type="text" name="stateOrProvince" id="stateOrProvince" value={group.stateOrProvince || ''}
                        on:change={ () => handleChange() } autoComplete="address-level1"/>
            </FormGroup>
            <FormGroup class="col-md-5 mb-3">
                <Label for="country">Country</Label>
                <Input type="text" name="country" id="country" value={group.country || ''}
                        on:change={ () => handleChange() } autoComplete="address-level1"/>
            </FormGroup>
            <FormGroup class="col-md-3 mb-3">
                <Label for="country">Postal Code</Label>
                <Input type="text" name="postalCode" id="postalCode" value={group.postalCode || ''}
                        on:change={ () => handleChange() } autoComplete="address-level1"/>
            </FormGroup>
        </div>
        <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
        </FormGroup>
    </Form>
    </Container>
</div>
