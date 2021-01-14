import styled from "styled-components";
import job from "../images/job.jpeg";


export const Container = styled.div`
    background-image: url(${job});
    background-size: cover;
    text-align:center;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 20px;
    width:100%;
    height:100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
export const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border-radius: 12px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Yusei Magic', sans-serif;
    width: 120px;
    height: 40px;   
    margin: 5px;`

export const Input = styled.p`
    display:block;
	width: 150px;
    float: right;
    margin-right:50px;`
