import { useLocation } from "react-router-dom";
import Background from "./Background";
import Menu from "./Menu";
import ProjectLink from "./ProjectLink";

function Projects() {
  const location = useLocation(); // Get the current path

  return (
    <div className="Projects">
      <Background />
      <Menu key={location.pathname} />
      <ProjectLink projectName="Icon Maker" thumbnail="" link="/icon-maker" />
      <ProjectLink projectName="Notes to Self" thumbnail="" link="/notes-to-self" />
      <ProjectLink projectName="Tic Tac Toe" thumbnail="" link="/tic-tac-toe" />
      <ProjectLink projectName="MASKI Minigames" thumbnail="" link="/maski-minigames" />
      <ProjectLink projectName="Aurora" thumbnail="" link="/aurora" />
    </div>
  );
}

export default Projects;
