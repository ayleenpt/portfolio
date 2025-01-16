import '../styles/Homepage.css';
import Background from './Background';
import Menu from './Menu';
import Name from './Name';

function Homepage() {
  return (
    <div className="homepage">
      <Background />
      <Menu className="menu" />
      <div className="text intro">hello, my name is</div>
      <Name className="title"/>
      <div className="text pronunciation">i &bull; leen</div>
    </div>
  );
}

export default Homepage;
