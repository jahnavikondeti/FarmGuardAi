import tractor from "../assets/tractor.jpg";
import crops from "../assets/crops.jpg";
import field from "../assets/field.jpg";

function About() {
  return (
    <div className="page">
      <h1>ℹ️ About FarmGuard AI</h1>

      <div className="hero-card">
        <p>
          FarmGuard AI helps farmers predict crop risks before they occur.
        </p>

        <p>
          It analyzes crop type, soil conditions, temperature, humidity,
          rainfall and season data.
        </p>
      </div>

      <div className="gallery">
        <img src={tractor} alt="" />
        <img src={crops} alt="" />
        <img src={field} alt="" />
      </div>
    </div>
  );
}

export default About;