import { useState } from "react";

function Dashboard() {
  const [crop, setCrop] = useState("");
  const [season, setSeason] = useState("");
  const [soil, setSoil] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");

  const [result, setResult] = useState(null);

  const predictRisk = () => {
    let risk = "LOW";
    let percentage = 25;
    let problems = [];
    let prevention = [];

    if (humidity > 80 && rainfall > 200) {
      risk = "HIGH";
      percentage = 85;
      problems = [
        "Fungal Infection",
        "Leaf Disease",
        "Water Logging",
      ];

      prevention = [
        "Improve drainage system",
        "Apply fungicide",
        "Monitor crop leaves regularly",
        "Avoid excess irrigation",
      ];
    } else if (humidity > 60 || rainfall > 120) {
      risk = "MEDIUM";
      percentage = 60;

      problems = [
        "Pest Attack",
        "Nutrient Deficiency",
      ];

      prevention = [
        "Use balanced fertilizer",
        "Monitor pest activity",
        "Maintain proper watering schedule",
      ];
    } else {
      risk = "LOW";
      percentage = 25;

      problems = [
        "No major risk detected",
      ];

      prevention = [
        "Continue regular monitoring",
        "Maintain soil health",
        "Follow normal irrigation practices",
      ];
    }

    setResult({
      risk,
      percentage,
      problems,
      prevention,
    });
  };

  return (
    <div className="page">
      <h1>📊 Smart Farming Dashboard</h1>

      <div className="hero-card">

        <div className="form">

          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          >
            <option value="">Select Crop</option>
            <option>Rice</option>
            <option>Tomato</option>
            <option>Cotton</option>
            <option>Maize</option>
            <option>Wheat</option>
          </select>

          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="">Select Season</option>
            <option>Kharif</option>
            <option>Rabi</option>
            <option>Summer</option>
          </select>

          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
          >
            <option value="">Select Soil Type</option>
            <option>Clay Soil</option>
            <option>Loamy Soil</option>
            <option>Sandy Soil</option>
          </select>

          <input
            type="number"
            placeholder="Temperature (°C)"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />

          <input
            type="number"
            placeholder="Humidity (%)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />

          <input
            type="number"
            placeholder="Rainfall (mm)"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
          />

          <button onClick={predictRisk}>
            Run AI Prediction
          </button>

        </div>
      </div>

      {result && (
        <div className="result-card">

          <div className="output-box">
            <h2>⚠ Risk Level</h2>
            <p>{result.risk}</p>
          </div>

          <div className="output-box">
            <h2>📈 Risk Percentage</h2>
            <p>{result.percentage}%</p>
          </div>

          <div className="output-box">
            <h2>🦠 Possible Problems</h2>
            <ul>
              {result.problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>

          <div className="output-box">
            <h2>✅ Prevention Steps</h2>
            <ul>
              {result.prevention.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;