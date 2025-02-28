import { useLocation } from "react-router-dom";
import React from 'react';
import Homescreen from '../../assets/projects/iconmaker/Homescreen.png';
import ProjectPage from './ProjectPage';

function IconMaker() {
  const location = useLocation();
  const description = "Icon Maker was a small, single day project I made when I was bored, and wanted to re-familiarize myself with React.js by making a silly app to show my friends. It involves a few different selection of transparent images that stack and compress into a single downloadable image. I also created all of the art present in this project, so it was a fun intersection of digital and traditional art.";
  return (
    <ProjectPage
      title="Icon Maker"
      date="Jan 2025"
      description={description}
      homescreen={Homescreen}
      projectTools="React, Javascript, HTML, CSS, GitHub Pages, Procreate"
      location={location}
      visitProject="Make your own icon"
      projectLink="https://ayleenpt.github.io/icon_maker/"
    >
    </ProjectPage>
  );
}

export default IconMaker;
