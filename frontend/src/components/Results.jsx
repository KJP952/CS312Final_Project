import React from "react";
//TODO: ADD STYLING
function Results({data}) {
  const { impact, model, days, promptsperday } = data;

  return (
    <div className="results">
      <h2>Your Environmental Impact</h2>

      <h3>Results</h3>
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

     <div className="Recommendation">
        <h3>Pick One (Or More) Recommendations That You Want To Try This Week</h3>

        <div className="Recommend">
          <label>
            <input type="checkbox" />
            <strong> Prompt Batching</strong>
            <br />
            <span>Use one structured prompt instead of multiple short messages.</span>
          </label>
        </div>

        <div className="Recommend">
          <label>
            <input type="checkbox" />
            <strong> Use a More Energy-Efficient Model</strong>
            <br />
            <span>For quick tasks, switch to lighter models like Gemini, GPT-3.5, or Claude Haiku.</span>
          </label>
        </div>

        <div className="Recommend">
          <label>
            <input type="checkbox" />
            <strong> Take an Additional AI-Free Day</strong>
            <br />
            <span>Reducing AI usage by one extra day per week lowers your yearly footprint.</span>
          </label>
        </div>
      </div>
  </div>
  );
}

export default Results;
