import { useState } from "react";

function Features() {
  const [message, setMessage] = useState("");

  return (
    <div className="page">
      <h1>✨ Features</h1>

      <div className="cards">

        <div
          className="card"
          onClick={() =>
            setMessage(
              "Detect possible crop diseases before symptoms become severe."
            )
          }
        >
          🌾 Crop Disease Prediction
        </div>

        <div
          className="card"
          onClick={() =>
            setMessage(
              "Analyze temperature, humidity and rainfall conditions."
            )
          }
        >
          🌦 Weather Risk Analysis
        </div>

        <div
          className="card"
          onClick={() =>
            setMessage(
              "Evaluate soil conditions for better crop health."
            )
          }
        >
          🌱 Soil Health Monitoring
        </div>

        <div
          className="card"
          onClick={() =>
            setMessage(
              "Get preventive recommendations to avoid crop loss."
            )
          }
        >
          🚜 Smart Prevention Guide
        </div>

      </div>

      {message && (
        <div className="hero-card">
          <h2>Feature Details</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Features;