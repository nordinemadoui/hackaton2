import Accueil from "./Components/Accueil";

import Form from "./Components/Form";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BarChart from "./Components/BarChart";


function App() {
  return (
    <div className="App">
  
    <HomePage />
    
    <Switch>
      <Route path="/barchart">
      <BarChart/>
      </Route>
        <Route exact path="/">
          <Accueil />
        </Route>
          <Route path="/form">
          <Form />
        </Route>
    </Switch>
  
    </div>
  );
}

export default App;
