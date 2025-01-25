import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/page/Menu.css";
import Bubble from "../../assets/page/Bubble.png";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setIsActive(!isActive);
  };

  const navigateTo = (path) => {
    if (isActive) {
      setIsActive(false);
      navigate(path);
    }
  };

  const renderMenuItems = () => {
    return (
      <>
        <button className="menu-item home-button" onClick={() => navigateTo("/")}>
          <img src={Bubble} alt="home" />
          <div className="label">home</div>
        </button>
        <button className="menu-item about-button" onClick={() => navigateTo("/about")}>
          <img src={Bubble} alt="about" />
          <div className="label">about</div>
        </button>
        <button className="menu-item project-button" onClick={() => navigateTo("/projects")}>
          <img src={Bubble} alt="projects" />
          <div className="label">projects</div>
        </button>
      </>
    );
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
