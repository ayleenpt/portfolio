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
      <Name
        nameClass={NameStyles.homeAlign}
        letterClass={NameStyles.homeLetter}
      />
      <Footer
        customStyle={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
          bottom: '30px',
          width: '100%',
          fontSize: '1em',
        }}
      />
    </div>
  );
}

export default Homepage;
