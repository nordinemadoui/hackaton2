import React, { Component } from 'react';
import { Link } from "react-router-dom";


import {
    Container,
    Button,
    

} from "../styled-components/Accueil";

export default class accueil extends Component {
    render() {
        return (

            <Container>
                
                <h1>Candidat, debout !</h1>
                <p>Si tu rêves de travailler dans le développement web</p>
                <Link to="/form">
                <Button>C'est par ici</Button>
                </Link>
        
        
            </Container>
        )

    }
}
