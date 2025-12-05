// App.jsx
import React, { useState } from "react";
import Questionnaire from "./components/Questionnaire";
import Results from "./components/Results";

//TODO: ADD STYLING
function App() {
    const [resultsData, setResultsData] = useState(null);

    function displayQuestions() {
  if (resultsData === null) {
    return (
      <Questionnaire onSubmit={function (data) { setResultsData(data)}}/>);
  }
  return null;
}

function displayResults() {
  if (resultsData !== null) {
    return <Results data={resultsData}/>;
  }

  return null;
}

  return (


    <div className="App">
      <h1>AI Environmental Impact Calculator</h1>

      {displayQuestions()}
      {displayResults()}
    </div>
  
  );
}

export default App;

