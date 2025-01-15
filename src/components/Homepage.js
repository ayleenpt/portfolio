import '../styles/Homepage.css';
import Background from './Background';
import Name from './Name';

function Homepage() {
  return (
    <div className="homepage">
      <Background />
      <div className="text">hello, my name is</div>
      <Name />
    </div>
  );
}

export default Homepage;
