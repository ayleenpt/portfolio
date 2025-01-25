import { useNavigate } from "react-router-dom";
import '../../styles/projects/ProjectLink.css';

function ProjectLink({ projectName, thumbnail, link }) {
  const navigate = useNavigate();

  return (
    <a href={`https://ayleenpt.github.io/portfolio/#/projects${link}`}>
      <div className="project-link">
        <img className="thumbnail" src={thumbnail} alt={projectName} />
        <h1 className="project-name">{projectName}</h1>
      </div>
    </a>
  );
}

export default ProjectLink;
