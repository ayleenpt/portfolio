import { useLocation } from "react-router-dom";
import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';

function TicTacToe() {
  const location = useLocation();

  return (
    <div className="tic-tac-toe">
      <Background />
      <h1>Tic Tac Toe</h1>
      <Menu key={location.pathname} />
    </div>
  );
}

export default TicTacToe;
