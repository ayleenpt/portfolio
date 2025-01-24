import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';
import '../../styles/projects/ProjectPage.css';

function ProjectPage({ title, date, description, homescreen, projectTools, location, visitProject, projectLink }) {
  return (
    <div className="projectPage">
      <Background />
      <div className="projectTitle">{title}</div>
      <div className="date">{date}</div>
      <div className="projectIntro">
        <img className="projectImage" src={homescreen} alt="Project Homescreen" />
        <div className="description">{description}</div>
        <div className="projectDetails">
          <div className="createdWith">Created with</div>
          <div className="projectTools">{projectTools}</div>
          <button
            className="visitProject"
            onClick={() => window.open(projectLink, "_blank")}
          >
            {visitProject}
          </button>
        </div>
      </div>
      <Menu key={location.pathname} />
    </div>
  );
}

export default ProjectPage;
