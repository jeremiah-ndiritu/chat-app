import { Link } from "react-router-dom";
import "../css/pages/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to ChatSphere 💬</h1>
          <p>Connect with friends in real-time. Fast, secure, and fun!</p>
          <div className="cta-buttons">
            <Link to="/login" className="btn login-btn">
              Login
            </Link>
            <Link to="/register" className="btn register-btn">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
