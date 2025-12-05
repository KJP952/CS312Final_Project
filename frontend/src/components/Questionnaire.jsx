import React, { useState } from "react";
import WeekEnvironmentImpact from './calculations';

//TODO: ADD STYLING
function Questionnaire({onSubmit}) {
  const [model, setModel] = useState("");
  const [days, setDays] = useState("");
  const [prompts, setPrompts] = useState("");
  const [estimate, setEstimate] = useState("");
  const [batching, setBatching] = useState("");

    const handleSubmit = () => {
      let promptsperday = 0;

      if (prompts == "1-10") {
        promptsperday = 10;
      } 
      else if (prompts == "10-20") {
        promptsperday = 20;
      }
      else if (prompts == "20-30") {
        promptsperday = 30;
      }
      else if (prompts == "30-40") {
        promptsperday = 40;
      }
      else if (prompts == "40+") {
        promptsperday = Number(estimate);
      }

      const impact = WeekEnvironmentImpact(model, promptsperday, Number(days));
      
            fetch("http://localhost:5001/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          daysPerWeek: days,
          promptsPerDay: promptsperday,
          batching,
          weeklyEnergy: impact.wattHours,
          weeklyWater: impact.waterML,
          weeklyCO2: impact.co2Grams,
          yearlyLightbulbHours: impact.lightbulbHours,
          yearlyWaterBottles: impact.waterBottles,
          yearlyMilesDriven: impact.milesDriven
        })
      });

      onSubmit({ impact, model, days, promptsperday, batching});
  };



  return (
    <div>
      <h2>Questions</h2>
      <h3>1. What AI model or tool do you use the most?</h3>
      <label><input type="radio" name="model" value="ChatGPT" onChange={(e) => setModel(e.target.value)}/>ChatGPT</label><br/>
      <label><input type="radio" name="model" value="Gemini" onChange={(e) => setModel(e.target.value)}/>Gemini</label><br/>
      <label><input type="radio" name="model" value="Claude" onChange={(e) => setModel(e.target.value)}/>Claude</label><br/>
      <label><input type="radio" name="model" value="Microsoft Copilot" onChange={(e) => setModel(e.target.value)}/>Microsoft Copilot</label><br/>
      <label><input type="radio" name="model" value="Other" onChange={(e) => setModel(e.target.value)}/>Other</label>

      <h3>2. How many days per week do you use AI?</h3>
      <label><input type="radio" name="days" value="0" onChange={(e) => setDays(e.target.value)}/>0</label><br/>
      <label><input type="radio" name="days" value="1" onChange={(e) => setDays(e.target.value)}/>1</label><br/>
      <label><input type="radio" name="days" value="2" onChange={(e) => setDays(e.target.value)}/>2</label><br/>
      <label><input type="radio" name="days" value="3" onChange={(e) => setDays(e.target.value)}/>3</label><br/>
      <label><input type="radio" name="days" value="4" onChange={(e) => setDays(e.target.value)}/>4</label><br/>
      <label><input type="radio" name="days" value="5" onChange={(e) => setDays(e.target.value)}/>5</label><br/>
      <label><input type="radio" name="days" value="6" onChange={(e) => setDays(e.target.value)}/>6</label><br/>
      <label><input type="radio" name="days" value="7" onChange={(e) => setDays(e.target.value)}/>7</label><br/>

      <h3>3. On a typical day, how many prompts do you send?</h3>
      <label><input type="radio" name="prompts" value="1-10" onChange={(e) => setPrompts(e.target.value)}/>1–10</label><br/>
      <label><input type="radio" name="prompts" value="10-20" onChange={(e) => setPrompts(e.target.value)}/>10–20</label><br/>
      <label><input type="radio" name="prompts" value="20-30" onChange={(e) => setPrompts(e.target.value)}/>20–30</label><br/>
      <label><input type="radio" name="prompts" value="30-40" onChange={(e) => setPrompts(e.target.value)}/>30–40</label><br/>
      <label><input type="radio" name="prompts" value="40+" onChange={(e) => setPrompts(e.target.value)}/>40+</label><br/>

      {prompts === "40+" && (<input type="number" 
                              placeholder="Please Enter Estimate" 
                              value={estimate} 
                              onChange={(e) => setEstimate(e.target.value)}/>)}

      <h3>4. How frequently do you batch prompts?</h3>
      <label><input type="radio" name="batching" value="Never" onChange={(e) => setBatching(e.target.value)}/>Never</label><br/>
      <label><input type="radio" name="batching" value="Rarely" onChange={(e) => setBatching(e.target.value)}/>Rarely</label><br/>
      <label><input type="radio" name="batching" value="Sometimes" onChange={(e) => setBatching(e.target.value)}/>Sometimes</label><br/>
      <label><input type="radio" name="batching" value="Often" onChange={(e) => setBatching(e.target.value)}/>Often</label><br/>
      <label><input type="radio" name="batching" value="Always" onChange={(e) => setBatching(e.target.value)}/>Always</label><br/>

      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>

    
  );
};

export default Questionnaire;



