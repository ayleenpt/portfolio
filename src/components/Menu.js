import React, { useState } from 'react';
import '../styles/Menu.css';
import Bubble from '../assets/Bubble.png';

function Menu() {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  const aboutAction = () => {
    console.log("clicked about");
  };

  const projectsAction = () => {
    console.log("clicked projects");
  }

  return (
    <button
      className={`menu-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="menu-line top" />
      <div className="menu-line middle" />
      <div className="menu-line bottom" />

      <button
        className="menu-item about"
        onClick={aboutAction}
      >
        <img src={Bubble} alt="bubble" />
        <div className="label">about</div>
      </button>

      <button
        className="menu-item projects"
        onClick={projectsAction}
      >
        <img src={Bubble} alt="bubble" />
        <div className="label">projects</div>
      </button>
    </button>
  );
}

export default Menu;
