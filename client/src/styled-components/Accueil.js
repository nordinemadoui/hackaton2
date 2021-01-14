import styled from "styled-components";
import job from "../images/job.jpeg";


export const Container = styled.div`
    background-image: url(${job});
    background-size: cover;
    text-align:center;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 40px;
    bottom:50px;
    width:100%;
    height:100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-top:0;
        bottom: 50%;
        
        
    }
`

export const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border-radius: 12px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    font-family: 'Yusei Magic', sans-serif;`

