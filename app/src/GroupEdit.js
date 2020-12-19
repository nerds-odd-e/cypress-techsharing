import React, { useState, useEffect, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import AppNavBar from "./AppNavBar";

function GroupEdit(props) {
  const emptyItem = {
    name: "",
    address: "",
    city: "",
    stateOrProvince: "",
    country: "",
    postalCode: "",
  };

  const [item, setItem] = useState(emptyItem);
  const [errorMessage, setErrorMessage] = useState(null);

  const getGroup = useCallback(async (id) => {
    const group = await fetch(`/api/group/${id}`)
      .then((r) => r.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        const errMessage = `Failed to retrieve group record for id: ${id} - ${err.message}`;
        setErrorMessage(errMessage);
      });
    setItem(group);
  }, []);

  useEffect(() => {
    const id = props.match.params.id;
    if (id !== "new") {
      getGroup(id);
    }
  }, [props.match.params.id, getGroup]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedItem = { ...item };
    updatedItem[name] = value;
    setItem(updatedItem);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("/api/group" + (item.id ? "/" + item.id : ""), {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).catch((err) => {
      const errMessage = `Failed to ${item.id ? "create" : "update"} record: ${
        err.message
      }`;
      setErrorMessage(errMessage);
    });
    props.history.push("/groups");
  };

  const title = <h2>{item.id ? "Edit Group" : "Add Group"}</h2>;

  return (
    <div>
      <AppNavBar />
      <Container>
        {title}
        {errorMessage ? <Alert color="warning">{errorMessage}</Alert> : null}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={item.name || ""}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={item.address || ""}
              onChange={handleChange}
              autoComplete="address-level1"
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              value={item.city || ""}
              onChange={handleChange}
              autoComplete="address-level1"
              required
            />
          </FormGroup>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="stateOrProvince">State/Province</Label>
              <Input
                type="text"
                name="stateOrProvince"
                id="stateOrProvince"
                value={item.stateOrProvince || ""}
                onChange={handleChange}
                autoComplete="address-level1"
              />
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="country">Country</Label>
              <Input
                type="text"
                name="country"
                id="country"
                value={item.country || ""}
                onChange={handleChange}
                autoComplete="address-level1"
                required
              />
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="country">Postal Code</Label>
              <Input
                type="text"
                name="postalCode"
                id="postalCode"
                value={item.postalCode || ""}
                onChange={handleChange}
                autoComplete="address-level1"
                required
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">
              Save
            </Button>{" "}
            <Button color="secondary" tag={Link} to="/groups">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default withRouter(GroupEdit);
