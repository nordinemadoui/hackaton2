import React from "react";
import {
    Container,
    Button
} from "../styled-components/FinalStep";



function FinalStep(props) {
  return (
    <Container>
      <p>Name: {props.state.name}</p>
      <p>Surname: {props.state.surname}</p>
      <p>Email: {props.state.email}</p>
      <p>Phone: {props.state.phone}</p>
      <p>Langage: {props.state.langages}</p>
      <p>
        <Button onClick={props.prev}>Retour</Button>
        <Button onClick={props.next}>Envoyer</Button>
      </p>
     
    </Container>
  );
}

export default FinalStep;
