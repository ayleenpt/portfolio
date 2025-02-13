import { useLocation } from "react-router-dom";
import Background from "../page/Background";
import Menu from "../page/Menu";
import Name from "./Name";
import Footer from "../page/Footer";
import NameStyles from "../../styles/home/NameStyles.module.css";
import '../../styles/home/Homepage.css';

function Homepage() {
  const location = useLocation();

  return (
    <div className="homepage">
      <Background />
      <Menu key={location.pathname} className="menu" />
      <div className="name-wrapper">
        <Name
          nameClass={NameStyles.homeAlign}
          letterClass={NameStyles.homeLetter}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
