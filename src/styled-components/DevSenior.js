import styled from "styled-components";
import societe from "../images/societe.jpeg";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  background-color:#87CEEB;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  bottom: 50%;
  padding-top: 20px;
`;

export const Formation = styled.h2`
  text-align: center;
  font-family: 'Yusei Magic', sans-serif;
  color:#00008B;
  font-weight:bolder;
  `

export const Container = styled.div`
   background-image: url(${societe});
   background-color: #1fe0;
   background:cover;
   width:100%;
   height:100vh;
    
    h1 {
        margin-top:0;
        bottom: 50%;
        font-size:40px;
        color:#00008B;
        font-weight:bolder;
      }
`
