import '../styles/Homepage.css';
import Background from './Background';
import Name from './Name';

function Homepage() {
  return (
    <div className="homepage">
      <Background />
      <div className="intro">hello, my name is</div>
      <Name className="title"/>
    </div>
  );
}

export default Homepage;
