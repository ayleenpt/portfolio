import { useLocation } from "react-router-dom";
import React from 'react';
import PlayButton from './PlayButton';
import ProgressBar from './ProgressBar';
import ProjectPage from '../ProjectPage';
import Homescreen from '../../../assets/projects/notestoself/Homescreen.png';
import '../../../styles/projects/notestoself/NotesToSelf.css';

function bonusContent() {
  return(
    <div className="project-features" >
      <div className="features-title">Features</div>
        <PlayButton />
        <div className="progress-bar">
        <ProgressBar />
      </div>
    </div>
  );
}

function NotesToSelf() {
  const location = useLocation();
  const description = "Notes to Self was a limited release art piece commissioned by and created in collaboration with musician Amelia Day. It contained demos of five unreleased EPs and a store front where users could purchase votes with merch prizes, and then place their votes on an EP for Amelia to fully produce. This was my first ever web development project, and my first public facing software creation. It was built over the course of two months with a continuous feedback loop between myself and Amelia, with iterative development and improvement as the design came together.";
  
  return (
    <div>
      <ProjectPage
        title="Notes to Self"
        date="Jun-Jul 2024"
        description={description}
        homescreen={Homescreen}
        projectTools="React, Javascript, HTML, CSS, GitHub Pages"
        location={location}
        bonusContent={bonusContent()}
      >
      </ProjectPage>
    </div>
  );
}

export default NotesToSelf;