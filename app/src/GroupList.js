import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";

export default function GroupList() {
  const [groups, setGroups] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    await fetch("api/groups")
      .then((r) => r.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  const removeGroup = async (id) => {
    await fetch(`/api/group/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      setGroups([...groups].filter((i) => i.id !== id));
    });
  };

  if (isLoading || groups === null) {
    return <p>Loading...</p>;
  } else {
    const groupList = groups.map((group) => {
      const address = `${group.address || ""}
        ${group.city || ""}
        ${group.stateOrProvince || ""}
        ${group.postalCode || ""}`;
      return (
        <tr key={group.id}>
          <td style={{ whiteSpace: "nowrap" }}>{group.name}</td>
          <td>{address}</td>
          <td>
            {group.events.map((event) => {
              return (
                <div key={event.id}>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(event.date))}
                  : {event.title}
                </div>
              );
            })}
          </td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/groups/" + group.id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => removeGroup(group.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <AppNavBar />
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/groups/new">
              Add Group
            </Button>
          </div>
          <h3>Tech Community Events</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Name</th>
                <th width="20%">Location</th>
                <th>Events</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>{groupList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
