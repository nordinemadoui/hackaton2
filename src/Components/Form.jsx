import { useState } from "react";
import axios from "axios";
import {
  Container,
  Button,
  Competence
} from "../styled-components/Form";
import { Multiselect } from 'multiselect-react-dropdown';
import React from 'react';


function Form() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    ville: "",
    contrat: "",
    teletravail : "",
    competences: "",
    salaire: "",
    experience: "",
    disponibilité: "",

  });
  
  const data = [
    {langage: "python", id: 1},
    {langage: "java", id:2},
    {langage: "react", id:1},
    {langage: "Django", id:1},
    {langage: "NOSQL", id:1},
    {langage: "sql", id:1},
    {langage: "JSAngular JS", id:1},
    {langage: "C++", id:1},
    {langage: "Magento", id:1},
    {langage: "Java", id:1},
    {langage: "Gunicorn", id:1},
    {langage: "Symphony", id:1},
    {langage: "php", id:1},
    {langage: "vueJS", id:1}
  ]
  
  const [options] = useState(data);


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
            value={form.nom}
          />
        </label>
        <br />
        <label>
          Prénom:
          <input
            name="lastname"
            type="text"
            onChange={handleChange}
            value={form.prenom}
          />
        </label>
        <br />
        <label>
          Ville:
          <input
            name="ville"
            type="text"
            onChange={handleChange}
            value={form.ville}
          />
        </label>
        <br />
        <label>
          Type de contrat:
          <select value={form.contrat} onChange={handleChange}>
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
          <select value={form.teletravail} onChange={handleChange}>
            <option value="..."></option>          
            <option value="Yes">Oui</option>
            <option value="No">Non</option>
          </select>
        </label>
        <br />
        Compétences:
        <Competence>
        <select value={form.competences} onChange={handleChange}>
          <Multiselect options={options} displayValue="langage" />
        </select>
        </Competence>
        <br />
        <label>
          Prétentions salariales:
          <input
            name="salaire"
            type="text"
            onChange={handleChange}
            value={form.salaire}
          />
        </label>
        <br />
        <label>
          Expérience:
          <input
            name="experience"
            type="text"
            onChange={handleChange}
            value={form.experience}
          />
        </label>
        <br />
      
        <label>
          Disponibilité:
          <select value={form.disponibilité} onChange={handleChange}>
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
export default Form;