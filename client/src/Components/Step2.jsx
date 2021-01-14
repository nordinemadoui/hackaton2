import React from "react";
import {
    Container,
    Button
} from "../styled-components/Step2";



function Step2(props) {
  return (
    <Container>
      <p>
        Email:{" "}
        <input
          name="email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Phone:{" "}
        <input
          name="phone"
          value={props.getState("phone", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Button onClick={props.prev}>Retour</Button>
        <Button onClick={props.next}>Envoyer</Button>
      </p>
    </Container>
  );
}

export default Step2;
