import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  let navigate = useNavigate();
  const postData = () => {
    //console.log(firstName, lastName, checkbox);
    axios.post("https://6228ee829fd6174ca833f4d0.mockapi.io/fakeData", {
      firstName,
      lastName,
      checkbox,
    });
  };
  return (
    <div className="main">
      <h2 className="main-header">React crud operations</h2>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Link to="/read">
          <Button type="submit" onClick={postData}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
