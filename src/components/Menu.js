import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Menu.css";
import Bubble from "../assets/Bubble.png";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    setIsActive(!isActive);
  };

  const navigateTo = (path) => {
    if (isActive) {
      setIsActive(false); // Close menu after navigating
      navigate(path); // Use React Router navigation
    }
  };

  const renderMenuItems = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <button className="menu-item right" onClick={() => navigateTo("/about")}>
              <img src={Bubble} alt="about" />
              <div className="label">about</div>
            </button>
            <button className="menu-item top" onClick={() => navigateTo("/projects")}>
              <img src={Bubble} alt="projects" />
              <div className="label">projects</div>
            </button>
          </>
        );
      case "/about":
        return (
          <>
            <button className="menu-item right" onClick={() => navigateTo("/")}>
              <img src={Bubble} alt="home" />
              <div className="label">home</div>
            </button>
            <button className="menu-item top" onClick={() => navigateTo("/projects")}>
              <img src={Bubble} alt="projects" />
              <div className="label">projects</div>
            </button>
          </>
        );
      case "/projects":
        return (
          <>
            <button className="menu-item right" onClick={() => navigateTo("/about")}>
              <img src={Bubble} alt="about" />
              <div className="label">about</div>
            </button>
            <button className="menu-item top" onClick={() => navigateTo("/")}>
              <img src={Bubble} alt="home" />
              <div className="label">home</div>
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <button
      className={`menu-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="menu-line higher" />
      <div className="menu-line middle" />
      <div className="menu-line lower" />
      {renderMenuItems()}
    </button>
  );
}

export default Menu;
