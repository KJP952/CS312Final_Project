import React from "react";

//TODO: ADD STYLING
function Results({data}) {
  const { impact, model, days, promptsperday } = data;

  return (
    <div className="results">
      <h2>Your Environmental Impact</h2>

      <p><strong>Model Used:</strong> {model}</p>
      <p><strong>Prompts Per Day:</strong> {promptsperday}</p>
      <p><strong>Days Per Week:</strong> {days}</p>

      <h3>Weekly Impact</h3>
      <p>Watt-hours: <strong>{impact.wattHours.toFixed(2)}</strong></p>
      <p>Water (mL): <strong>{impact.waterML.toFixed(2)}</strong></p>
      <p>CO₂ (g): <strong>{impact.co2Grams.toFixed(2)}</strong></p>

      <h3>Yearly Impact</h3>
      <p>Lighting an LED Lightbulb for Hours: <strong>{impact.lightbulbHours.toFixed(2)}</strong></p>
      <p>Water Bottles Used: <strong>{impact.waterBottles.toFixed(2)}</strong></p>
      <p>Car Miles Driven: <strong>{impact.milesDriven.toFixed(2)}</strong></p>

      <h3>Recommendations</h3>
      <ol>
        <li> 
          <strong>Prompt Batching</strong>
          <br/> Use one structured prompt instead of multiple short messages.
        </li>

        <li>
          <strong>Use a More Energy-Efficient Model</strong>
          <br/>For quick tasks, switch to a lighter model like Gemini, GPT-3.5, or Claude Haiku.
        </li>

        <li>
          <strong>Take an Additional AI-Free Day</strong>
          <br/>Reducing AI usage by one extra day per week lowers your yearly energy footprint.
        </li>
    </ol>
  </div>
  );
}

export default Results;
