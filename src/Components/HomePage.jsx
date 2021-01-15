import React from "react";
import {
    Page,
} from "../styled-components/HomePage";
import { Link } from "react-router-dom";




const HomePage = () => {
    return (
      <Page>
        <div id="container">
        <Link to="/barchart">
              <div>Les tendances</div>
        </Link>
            </div>
            <div>
        <Link to="/devsenior">
              <div>Pour les vétérans du dev</div>
        </Link>
            </div>
            <div>
              <div>Référence du junior</div>
              </div>
      </Page>
        
        );
        };
      

export default HomePage;