import { useNavigate } from "react-router-dom";
import '../styles/ProjectLink.css';

function ProjectLink({ projectName, thumbnail, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="project-link" onClick={handleClick}>
      <img className="thumbnail" src={thumbnail} alt={projectName} />
    </div>
  );
}

export default ProjectLink;
