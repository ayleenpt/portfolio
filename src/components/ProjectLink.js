import { useNavigate } from "react-router-dom";
import '../styles/ProjectLink.css';

function ProjectLink({ projectName, thumbnail, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="project-link" onClick={handleClick}>
      {projectName}
    </div>
  );
}

export default ProjectLink;
