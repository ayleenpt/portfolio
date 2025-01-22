import { useLocation } from "react-router-dom";
import Background from "./Background";
import Menu from "./Menu";
import ProjectLink from "./ProjectLink";

function Projects() {
  const location = useLocation(); // Get the current path

  return (
    <div className="Projects">
      <Background />
      <h1>Projects</h1>
      <Menu key={location.pathname} />
      <ProjectLink projectName="Icon Maker" thumbnail="" link="/icon-maker" />
    </div>
  );
}

export default Projects;
