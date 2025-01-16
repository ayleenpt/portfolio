import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Menu.css';
import Bubble from '../assets/Bubble.png';

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const onClick = () => {
    setIsActive(!isActive);
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const renderMenuItems = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <button className="menu-item right" onClick={() => navigateTo("/portfolio/#/about")}>
              <img src={Bubble} alt="about" />
              <div className="label">about</div>
            </button>
            <button className="menu-item top" onClick={() => navigateTo("/portfolio/#/projects")}>
              <img src={Bubble} alt="projects" />
              <div className="label">projects</div>
            </button>
          </>
        );
      case '/about':
        return (
          <>
            <button className="menu-item right" onClick={() => navigateTo("/portfolio")}>
              <img src={Bubble} alt="home" />
              <div className="label">home</div>
            </button>
            <button className="menu-item top" onClick={() => navigateTo("/portfolio/#/projects")}>
              <img src={Bubble} alt="projects" />
              <div className="label">projects</div>
            </button>
          </>
        );
      case '/projects':
        return (
          <>
            <button className="menu-item right" onClick={() => navigateTo("/portfolio/#/about")}>
              <img src={Bubble} alt="about" />
              <div className="label">about</div>
            </button>
            <button className="menu-item top" onClick={() => navigateTo("/portfolio")}>
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
    <button className={`menu-button ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="menu-line higher" />
      <div className="menu-line middle" />
      <div className="menu-line lower" />
      {renderMenuItems()}
    </button>
  );
}

export default Menu;
