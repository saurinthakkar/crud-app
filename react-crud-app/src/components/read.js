import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  const setData = (data) => {
    // console.log(data);
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };
  useEffect(() => {
    axios
      .get("https://6228ee829fd6174ca833f4d0.mockapi.io/fakeData")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div className="main">
      <h2 className="main-header">React crud operations</h2>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <button onClick={() => setData(data)}>Update</button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
