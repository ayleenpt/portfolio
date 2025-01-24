import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/maskiminigames/Homescreen.png'
import ProjectPage from './ProjectPage';

function MaskiMinigames() {
  const location = useLocation();
  const description = "MASKI Minigames features two classic mini games, snake and endless racing, developed in a collaborative project with React.js. I led the design and construction of the homepage, user interfaces, and page setup. I also assisted with decoupling and refactoring game components to streamline the final product, working iteratively with my team through refinement, development, and review sessions to deliver the final website you see now.";
  return (
    <ProjectPage
      title="MASKI Minigames"
      date="Nov-Dec 2024"
      description={description}
      homescreen={Homescreen}
      projectTools="React, Javascript, HTML, CSS, GitHub Pages"
      location={location}
      visitProject="Visit MASKI Minigames"
      projectLink="https://bubseatbubs.github.io/maskiminigames/"
    >
    </ProjectPage>
  );
}

export default MaskiMinigames;