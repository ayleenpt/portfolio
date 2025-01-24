import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/aurora/Homescreen.gif';
import ProjectPage from './ProjectPage';

function Aurora() {
  const location = useLocation();
  const description = "Aurora features a night sky with twinkling stars that react to the movements of the mouse. Bringing the stars behavior to life was challenging, but through many cycles of research, trial, and iteration, I achieved the interactive effect I had imagined, even adding interesting effects for when the mouse is still. I optimized the site’s performance by minimizing re-renders and streamlining the animations that create the twinkling effect, leading to a simpler and more efficient final product. Aurora was a rewarding challenge that remains a flexible project, with room for me to continue building off of and improving as I develop my talents.";
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
