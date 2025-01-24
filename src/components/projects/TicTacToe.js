import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/tictactoe/Homescreen.png';
import ProjectPage from './ProjectPage';

function TicTacToe() {
  const location = useLocation();
  const description = "I started this project with the intention of creating a tic tac toe game that was impossible to beat. The result features a custom algorithm designed to analyze and counter every possible user move, ensuring that the game always ends in either a draw or a win in the computer’s favor. I also created custom graphics to play the game on a box of mochi, with flour dustings to represent an X or an O. If you manage to beat my algorithm, you can let me know through the contact form on my About page!";

  return (
    <ProjectPage
      title="Tic Tac Toe"
      date="Jan 2025"
      description={description}
      homescreen={Homescreen}
      projectTools="React, Javascript, HTML, CSS, GitHub Pages"
      location={location}
      visitProject="Play Tic Tac Toe"
      projectLink="https://ayleenpt.github.io/tictactoe/"
    >
    </ProjectPage>
  );
}

export default TicTacToe;
