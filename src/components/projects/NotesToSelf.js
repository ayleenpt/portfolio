import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/notestoself/Homescreen.png'
import ProjectPage from './ProjectPage';

function NotesToSelf() {
  const location = useLocation();
  const description = "";
  return (
    <ProjectPage
      title="Notes to Self"
      date="Jun-Jul 2024"
      description={description}
      homescreen={Homescreen}
      projectTools="React, Javascript, HTML, CSS, GitHub Pages"
      location={location}
    >
    </ProjectPage>
  );
}

export default NotesToSelf;