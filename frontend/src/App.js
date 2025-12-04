// App.jsx
import React, { useState } from "react";
import Questionnaire from "./components/Questionnaire";
import Results from "./components/Results";

function App() {

  return (
    <div className="App">
      <h1>AI Environmental Impact Calculator</h1>
      <Questionnaire></Questionnaire>
      <Results></Results>
    </div>
  );
}

export default App;

