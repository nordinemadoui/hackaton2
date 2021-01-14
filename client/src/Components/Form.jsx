import React from 'react'

import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FinalStep from "./FinalStep";

const Navigation = (props) => {
return (
  <div>
    <button onClick={props.prev}>Global Previous</button>
    <button onClick={props.next}>Global Next</button>
  </div>
);
};

  
function App() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "before" // or after
    }
  };

  

  return (
    <div className="App">
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
        <Step component={FinalStep} />
      </Steps>
      
    </div>
  );
}

export default App;
