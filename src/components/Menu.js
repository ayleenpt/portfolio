import React, { useState } from 'react';
import '../styles/Menu.css';

function Menu() {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`menu-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="menu-line top" />
      <div className="menu-line middle" />
      <div className="menu-line bottom" />
    </button>
  );
}

export default Menu;
