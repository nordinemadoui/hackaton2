import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Button,
    Input
} from "../styled-components/Step1";


function Step1(props) {
  return (
    <Container>
      
      <h1>Faisons connaissance</h1>
      <p>J'ai besoin de quelques renseignements afin de t'aider au mieux</p>
      <Input>
      <p>
        Nom{" "}
        <input
          name="Nom"
          value={props.getState("Nom", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Prénom{" "}
        <input
          name="surname"
          value={props.getState("surname", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Age{" "}
        <input
          name="age"
          value={props.getState("age", "")}
          onChange={props.handleChange}
        />
      </p>
      </Input>
      <p>
      <Link to="/">
        <Button onClick={props.prev}>Retour</Button>
        </Link>
        <Button onClick={props.next}>Envoyer</Button>
      </p>
  
    </Container>
  );
}

export default Step1;
