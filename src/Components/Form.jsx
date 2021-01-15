import { useState } from "react";
import axios from "axios";
import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';


import {
  Container,
  Div,
} from "../styled-components/Form";




function Form() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    ville: "",
    contrat: "",
    teletravail : "",
    competences: [],
    salaire: "",
    experience: "",
    disponibilite: "",
    langue: "",
    data: [],
  });
  
  const options = [
    {name: 'python', id:1 },
    {name: 'javascript', id:2},
    {name: 'java', id:1 },
    {name: 'mongodb', id:2},
    {name: 'html', id:1 },
    {name: 'django', id:2}
  ];

  const [data] = useState(options);
  

  const handleChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5090", form).then(({ data }) => {
      console.log("Send")
    }).catch((err) => {
      console.warn("problem")
    })
    console.log(form);
  };


  return (
  
    <Container>
    <h1>Faisons connaissance</h1>
      <p>J'ai besoin de quelques renseignements afin de t'aider au mieux</p>
      <form onSubmit={handleSubmit}>
        <label>
         <Div>Nom:</Div>
          <input
            name="nom"
            type="text"
            onChange={handleChange}
            value={form.nom}
          />
        </label>
        <br />
        <label>
         <Div>Prénom:</Div>
          <input
            name="prenom"
            type="text"
            onChange={handleChange}
            value={form.prenom}
          />
        </label>
        <br />
        <label>
         <Div>Ville:</Div>
          <input
            name="ville"
            type="text"
            onChange={handleChange}
            value={form.ville}
          />
        </label>
        <br />
        <label>
         <Div>Type de contrat:</Div>
          <select value={form.contrat} name="contrat"
            type="select" onChange={handleChange}>
          
            <option value=".."></option>       
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
            <option value="STAGE">Stage</option>
            <option value="Freelance">Freelance</option>

          </select>
        </label>
        <br />
        <label>
         <Div>Télétravail :</Div>
          <select value={form.teletravail} name="teletravail"
            type="select"  onChange={handleChange}>
            <option value="..."></option>          
            <option value="Yes">Oui</option>
            <option value="No">Non</option>
          </select>
        </label>
        <br />
        <Div>Compétences:</Div>
        <label>
        <Multiselect options= {data} displayValue="name" />
        
        </label>
        <br />
        <label>
        <Div>Prétentions salariales (ke):</Div>
          <input
            name="salaire"
            type="number"
            onChange={handleChange}
            value={form.salaire}
          />
        </label>
        <br />
        <label>
        <Div>Expérience:</Div>
          <input
            name="experience"
            type="number"
            onChange={handleChange}
            value={form.experience}
          />
        </label>
        <br />
      
        <label>
        <Div>Disponibilité:</Div>
          <select value={form.disponibilite}   name="disponibilite"
            type="select" onChange={handleChange}>
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