import '../styles/Homepage.css';
import Background from './Background';
import Menu from './Menu';
import Name from './Name';

function Homepage() {
  return (
    <div className="homepage">
      <Background />
      <Menu className="menu" />
      <div className="intro">hello, my name is</div>
      <Name className="title"/>
    </div>
  );
}

export default Homepage;
