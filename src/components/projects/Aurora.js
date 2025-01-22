import { useLocation } from "react-router-dom";
import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';

function Aurora() {
  const location = useLocation();

  return (
    <div className="aurora">
      <Background />
      <h1>Aurora</h1>
      <Menu key={location.pathname} />
    </div>
  );
}

export default Aurora;
