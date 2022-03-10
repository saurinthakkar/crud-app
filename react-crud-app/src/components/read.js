import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  //const [stateHistory, setStateHistory] = useState(getData());

  const setData = (data) => {
    // console.log(data);
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    //console.log(typeof checkbox);
    //let newCheckboxValue = Boolean(localStorage.getItem("Checkbox Value"));
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get("https://6228ee829fd6174ca833f4d0.mockapi.io/fakeData")
      .then((getData) => {
        setAPIData(getData.data);
      });
    // window.reload;
  };

  useEffect(() => {
    axios
      .get("https://6228ee829fd6174ca833f4d0.mockapi.io/fakeData")
      .then((response) => {
        setAPIData(response.data);
      });
  }, [APIData]);

  const onDelete = (id) => {
    axios
      .delete(`https://6228ee829fd6174ca833f4d0.mockapi.io/fakeData/${id}`)
      .then(() => getData());
    //window.location.reload();
  };

  return (
    <div className="main">
      <h2 className="main-header">React crud operations</h2>
      <Table singleLine className="read-form">
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

                <Table.Cell>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
