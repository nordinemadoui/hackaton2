import styled from "styled-components";
import job from "../images/job.jpeg";





export const Container = styled.div`
    background-image: url(${job});
    background-size: cover;
    text-align:center;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 22px;
    display:block;
    width:100%;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    height:100vh;
    color: white;
    
    h1 {
        margin-top: 0;
    }

    label input {
        margin: O;
        border-radius:2px;
        text-align:center;
        padding: 8px;
        display: block;
	    width: 250px;
        margin-left:700px;
    }

label select {
    margin-top:0;
    border-radius:2px;
        text-align:center;
        padding: 8px;
        display: block;
	    width: 270px;
        margin-left:700px;
}`
    
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

export const Label = styled.label`
         margin: O;
        border-radius:2px;
        text-align:center;
        padding: 8px;
        font-size:15px;
        display: block;
	    width: 250px;
        margin-left:700px;`

export const Div = styled.div`
         text-align:center;
         margin-left:-290px;
         margin-bottom:-40px;`