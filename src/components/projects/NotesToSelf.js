import { useLocation } from "react-router-dom";
import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';

function NotesToSelf() {
  const location = useLocation();

  return (
    <div className="notes-to-self">
      <Background />
      <h1>Notes To Self</h1>
      <Menu key={location.pathname} />
    </div>
  );
}

export default NotesToSelf;
