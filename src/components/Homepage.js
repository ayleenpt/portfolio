import { useLocation } from "react-router-dom";
import Background from "./Background";
import Menu from "./Menu";
import Name from "./Name";
import '../styles/Homepage.css';

function Homepage() {
  const location = useLocation();

  return (
    <div className="homepage">
      <Background />
      <Menu key={location.pathname} className="menu" />
      <div className="text intro">hello, my name is</div>
      <Name className="title" />
      <div className="text pronunciation">i &bull; leen</div>
    </div>
  );
}

export default Homepage;
