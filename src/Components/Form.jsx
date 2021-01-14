import { useState } from "react";
import axios from "axios";
import {
  Container,
  Button
} from "../styled-components/Form";
import React from 'react';


function App() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    ville: "",
    contrat: "",
    teletravail : "",
    competences: "",
    salaire: "",
    experience: "",

  });

  const handleChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5050/comics", form).then(({ data }) => {
      console.log("Comic was created")
    }).catch((err) => {
      console.warn("Something went poorly")
    })
    console.log(form);
  };


  return (
  
    <Container>
    <h1>Faisons connaissance</h1>
      <p>J'ai besoin de quelques renseignements afin de t'aider au mieux</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={form.author}
          />
        </label>
        <br />
        <label>
          Prénom:
          <input
            name="lastname"
            type="text"
            onChange={handleChange}
            value={form.title}
          />
        </label>
        <br />
        <label>
          Ville:
          <input
            name="experience"
            type="text"
            onChange={handleChange}
            value={form.Illustrator}
          />
        </label>
        <br />
        <label>
          Type de contrat:
          <select value={form.picture} onChange={handleChange}>
            <option value=".."></option>       
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
            <option value="STAGE">Stage</option>
            <option value="Freelance">Freelance</option>

          </select>
        </label>
        <br />
        <label>
          Télétravail :
          <select value={form.picture} onChange={handleChange}>
            <option value="..."></option>          
            <option value="Yes">Oui</option>
            <option value="No">Non</option>
          </select>
        </label>
        <br />
        <label>
          Compétences:
          <input
            name="competence"
            type="text"
            onChange={handleChange}
            value={form.picture}
          />
        </label>
        <br />
        <label>
          Prétentions salariales:
          <input
            name="salaire"
            type="text"
            onChange={handleChange}
            value={form.picture}
          />
        </label>
        <br />
        <label>
          Expérience:
          <input
            name="experience"
            type="checkbox"
            onChange={handleChange}
            value={form.picture}
          />
        </label>
        <br />
        <label>
          Disponibilité:
          <select value={form.picture} onChange={handleChange}>
            <option value="..."></option>       
            <option value="ASAP">De suite</option>
            <option value="3mois">D'ici 3 mois</option>
            <option value="6mois">D'ici 6 mois</option>
          </select>
        </label>
        <br />
        <input type="Submit" readOnly value="Envoyer" />
      </form>
    </Container>
  );
}
export default App;