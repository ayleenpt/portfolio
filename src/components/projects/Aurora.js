import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/aurora/Homescreen.gif';
import ProjectPage from './ProjectPage';

function Aurora() {
  const location = useLocation();
  const description = "Aurora features a night sky with twinkling stars that react to mouse movements, built using React.js's useState, useEffect, and useCallback. This project required extensive research and iteration, enhancing my web development skills as I reduced re-renders and streamlined animations to optimize performance and reduce lag. This project not only strengthened my technical abilities but also deepened my understanding of building efficient, interactive web applications.";
  return (
    <ProjectPage
      title="Aurora"
      date="Jan 2025"
      description={description}
      homescreen={Homescreen}
      projectTools="React, Javascript, HTML, CSS, GitHub Pages"
      location={location}
      visitProject="Visit Aurora"
      projectLink="https://ayleenpt.github.io/aurora/"
    >
    </ProjectPage>
  );
}

export default Aurora;
