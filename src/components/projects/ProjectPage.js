import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';
import Footer from '../page/Footer';
import '../../styles/projects/ProjectPage.css';

function ProjectPage({ title, date, description, homescreen, projectTools, location, visitProject, projectLink, bonusContent }) {
  return (
    <div className="project-page">
      <Background />
      <Menu key={location.pathname} />
      <div className="project-title">{title}</div>
      <div className="date">{date}</div>
      <div className="project-intro">
        <img className="project-image" src={homescreen} alt="Project Homescreen" />
        <div className="description">{description}</div>
        <div className="project-details">
          <div className="created-with">Created with</div>
          <div className="project-tools">{projectTools}</div>
          {projectLink && (
            <button
              className="visit-project"
              onClick={() => window.open(projectLink, "_blank")}
            >
              {visitProject}
            </button>
          )}
        </div>
      </div>
      {bonusContent && (
        <div className="bonus-content">
          {bonusContent}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProjectPage;
