import { useNavigate } from "react-router-dom";
import farm from "../assets/farm.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="home-container">
        <div className="hero-card">
          <h1>🌱 FarmGuard AI</h1>

          <p>
            Predict crop risks before they occur using AI-powered agriculture
            analytics.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            style={{ marginTop: "20px" }}
          >
            Get Started
          </button>
        </div>

        <img src={farm} alt="Farm" className="home-image" />
      </div>
    </div>
  );
}

export default Home;