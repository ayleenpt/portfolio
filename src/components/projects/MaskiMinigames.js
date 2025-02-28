import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/maskiminigames/Homescreen.png'
import ProjectPage from './ProjectPage';

function MaskiMinigames() {
  const location = useLocation();
  const description = "MASKI Minigames features two classic mini games developed in a collaborative project using React.js. I led the design and construction of the homepage, user interfaces, graphics, and page setup. I also assisted with decoupling and refactoring game components to streamline the final product, working iteratively with my team through refinement, development, and review sessions to deliver the final website you see now.";
  const projectTools =
    <div className="collaboration">
      React, Javascript, HTML, CSS, GitHub Pages
      <div className="created-with">In collaboration with</div>
      Shaun Cushman, Khushmeet Gobindpuri, Ishaan Kapil, Minh Pham
    </div>;
  return (
    <ProjectPage
      title="MASKI Minigames"
      date="Nov-Dec 2024"
      description={description}
      homescreen={Homescreen}
      projectTools={projectTools}
      location={location}
      visitProject="Visit MASKI Minigames"
      projectLink="https://bubseatbubs.github.io/maskiminigames/"
    >
    </ProjectPage>
  );
}

export default MaskiMinigames;