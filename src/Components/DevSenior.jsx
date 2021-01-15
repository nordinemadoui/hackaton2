import React from "react";
import chef from "../images/chef.jpeg";
import boss from "../images/boss.jpeg";
import architecte from "../images/architecte.jpeg";
import consultant from "../images/consultant.jpeg";

import Carousel from "react-elastic-carousel";
import {
    Item,
    Formation,
    Container
  } from "../styled-components/DevSenior";
//import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function DevSenior() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Candidat senior, tu veux évoluer ?</h1>
      <div>
        <Carousel breakPoints={breakPoints}>
        <a href="https://3wa.fr/metiers/lead-developpeur/lead-developpeur-metier/" target="blank">
          <Item><img src={chef} alt="leaddev" title="Lead dev"/></Item></a>
          <Item><img src={boss} alt="boss" /></Item>
          <Item><img src={architecte} alt="architecte" /></Item>
          <Item><img src={consultant} alt="consultant" /></Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
          
        </Carousel>
        <Formation>Voici une liste de formation dans les domaines vers lesquels, tu es succeptible de te plaire</Formation>
    
      </div>
    </Container>
  );
}

export default DevSenior;