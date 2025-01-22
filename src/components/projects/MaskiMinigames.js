import { useLocation } from "react-router-dom";
import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';

function MaskiMinigames() {
  const location = useLocation();

  return (
    <div className="maski-minigames">
      <Background />
      <h1>MASKI Minigames</h1>
      <Menu key={location.pathname} />
    </div>
  );
}

export default MaskiMinigames;
