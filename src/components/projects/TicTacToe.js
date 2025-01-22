import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';

function TicTacToe() {
  return (
    <div className="tic-tac-toe">
      <Background />
      <h1>About</h1>
      <Menu />
    </div>
  );
}

export default TicTacToe;
