import styled from "styled-components";
import job from "../images/job.jpeg";





export const Container = styled.div`
    background-image: url(${job});
    background-size: cover;
    text-align:center;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 25px;
    width:100%;
    height:100vh;
    color: white;
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    label input {
        margin: O;
        border-radius:2px;
        text-align:center;
        padding: 8px;
       
       
    }

    
    `
export const Button = styled.input`
    background-color: #4CAF50; /* Green */
    border-radius: 12px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Yusei Magic', sans-serif;
    width: 150px;
    height: 60px;
    margin: 5px`

export const Competence = styled.label`
    
    width:300px;
    background-color:white;
    color: black;`