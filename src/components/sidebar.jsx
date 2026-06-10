
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🌱 FarmGuard AI</h2>

      <Link to="/">🏠 Home</Link>
      <Link to="/dashboard">📊 Dashboard</Link>
      <Link to="/features">✨ Features</Link>
      <Link to="/about">ℹ️ About</Link>
    </div>
  );
}

export default Sidebar;