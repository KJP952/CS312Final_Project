//chatgpt
//Gemini
//Claude
//Microsoft Copilot
//Other

function WeekEnvironmentImpact(model, promptsPerDay, daysPerWeek) {
  let watthour = 0;
  let waterMl = 0;
  let co2 = 0;

  if (model === "ChatGPT") {
    watthour = 0.34;
    waterMl = 0.32;
    co2 = 0.136;
  } else if (model === "Gemini") {
    watthour = 0.24;
    waterMl = 0.26;
    co2 = 0.03;
  } else if (model === "Claude") {
    watthour = 0.28;
    waterMl = 0.27;
    co2 = 0.064;
  } else if (model === "Microsoft Copilot") {
    watthour = 0.34;
    waterMl = 0.32;
    co2 = 0.136;
  } else {
    watthour = 0.3;
    waterMl = 0.2925;
    co2 = 0.0915;
  }
  const weekWh = watthour * promptsPerDay * daysPerWeek;
  const weekWater = waterMl * promptsPerDay * daysPerWeek;
  const weekCo2 = co2 * promptsPerDay * daysPerWeek;

  const YeartotalPrompts = promptsPerDay * daysPerWeek * 52;

  const yearlyWh = watthour * YeartotalPrompts;
  const yearlyWater = waterMl * YeartotalPrompts;
  const yearlyCo2 = co2 * YeartotalPrompts;

  const lightbulbHours = yearlyWh / 9;
  const waterBottles = yearlyWater / 500;
  const milesDriven = yearlyCo2 / 404;

  return {
    wattHours: weekWh,
    waterML: weekWater,
    co2Grams: weekCo2,
    lightbulbHours: lightbulbHours,
    waterBottles: waterBottles,
    milesDriven: milesDriven
  };
}

export default WeekEnvironmentImpact;
