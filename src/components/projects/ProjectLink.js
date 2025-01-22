import { useNavigate } from "react-router-dom";
import '../../styles/projects/ProjectLink.css';

function ProjectLink({ projectName, thumbnail, link }) {
  const navigate = useNavigate();
  const handleClick = () => { navigate(`/projects${link}`); };

  return (
    <div className="project-link" onClick={handleClick}>
      <img className="thumbnail" src={thumbnail} alt={projectName} />
      <h1 className="project-name">{projectName}</h1>
    </div>
  );
}

export default ProjectLink;
