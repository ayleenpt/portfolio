import { useLocation } from "react-router-dom";
import Background from "../page/Background";
import Menu from "../page/Menu";
import Name from "./Name";
import Footer from "../page/Footer";
import '../../styles/home/Homepage.css';

function Homepage() {
  const location = useLocation();

  return (
    <div className="homepage">
      <Background />
      <Menu key={location.pathname} className="menu" />
      <div className="text intro">hello, my name is</div>
      <Name className="title" />
      <div className="text pronunciation">i &bull; leen</div>
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
