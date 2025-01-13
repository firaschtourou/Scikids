import React from "react";
import { useNavigate } from "react-router-dom";
import "./savename.css";
import Kid from './Kid.png'
import School from './School.png'
import icon from './icon.png'

const SaveNamePage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Redirige vers la page Dashboard
    navigate("/dashboard");
  };
  return (
    <div className="login-page">
      <div className="background">
        <img src={School} alt="School" className="school-image" />
        <img src={Kid} alt="Character" className="character-image" />
      </div>
      <div className="login-card">
        <div className="icon_bg">
      <img src={icon} alt="Character" className="icon" />
      </div>
        <label htmlFor="matricule" className="Name-label">Your Name:</label>
        <input type="text" id="matricule" className="matricule-input" />
        <button className="login-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SaveNamePage;
