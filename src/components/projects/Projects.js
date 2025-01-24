import { useLocation } from "react-router-dom";
import Background from "../page/Background";
import Menu from "../page/Menu";
import ProjectLink from "./ProjectLink";
import Footer from "../page/Footer";
import AuroraThumbnail from "../../assets/thumbnails/thumbnail_aurora.png";
import IconMakerThumbnail from "../../assets/thumbnails/thumbnail_icon_maker.png";
import MaskiMinigamesThumbnail from "../../assets/thumbnails/thumbnail_maski_minigames.png";
import NotesToSelfThumbnail from "../../assets/thumbnails/thumbnail_notes_to_self.png";
import TicTacToeThumbnail from "../../assets/thumbnails/thumbnail_tictactoe.png";
import "../../styles/projects/Projects.css";

function Projects() {
  const location = useLocation();

  return (
    <div className="projects">
      <Background />
      <Menu key={location.pathname} />
      <div className="project-grid">
        <div className="project-row">
          <ProjectLink projectName="Tic Tac Toe" thumbnail={TicTacToeThumbnail} link="/tic-tac-toe" />
          <ProjectLink projectName="Aurora" thumbnail={AuroraThumbnail} link="/aurora" />
        </div>
        <div className="project-row">
          <ProjectLink projectName="Icon Maker" thumbnail={IconMakerThumbnail} link="/icon-maker" />
          <ProjectLink projectName="MASKI Minigames" thumbnail={MaskiMinigamesThumbnail} link="/maski-minigames" />
        </div>
        <div className="project-row">
        <ProjectLink projectName="Notes to Self" thumbnail={NotesToSelfThumbnail} link="/notes-to-self" />  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
