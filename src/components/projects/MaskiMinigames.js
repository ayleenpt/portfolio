import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/maskiminigames/Homescreen.png'
import ProjectPage from './ProjectPage';

function MaskiMinigames() {
  const location = useLocation();
  const description = "";
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