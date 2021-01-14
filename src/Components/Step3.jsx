import React from "react";
import {
    Container,
    Button
} from "../styled-components/Step3";


function Step3(props) {
  return (
    <Container>
      <p>
        Langages :{" "}
        <input
          name="langages"
          value={props.getState("langages", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Lieu :{" "}
        <input
          name="lieu"
          value={props.getState("lieu", "")}
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

export default Step3;