import { useLocation } from "react-router-dom";
import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';

function IconMaker() {
  const location = useLocation();

  return (
    <div className="icon-maker">
      <Background />
      <h1>Icon Maker</h1>
      <Menu key={location.pathname} />
    </div>
  );
}

export default IconMaker;
