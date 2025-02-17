import Background from '../../../assets/projects/notestoself/SquareBG.png';
import WelcomeImg from '../../../assets/projects/notestoself/Welcome.png'
import WelcomeOverlay from '../../../assets/projects/notestoself/WelcomeOverlay.png'
import Styles from '../../../styles/projects/notestoself/NotesToSelfStyles.module.css';
import '../../../styles/projects/notestoself/Welcome.css';

function Welcome() {
  const handleHover = () => {
    const welcomeActive = document.querySelector('.welcome-active');
    welcomeActive.style.backgroundImage = `url(${WelcomeOverlay})`;
  };

  const handleLeave = () => {
    const welcomeActive = document.querySelector('.welcome-active');
    welcomeActive.style.backgroundImage = "";
  };

  return (
    <div className="welcome-wrapper">
      <div className={`welcome ${Styles.squareImageWrapper}`}>
        <img src={Background} alt="background"></img>
        <img className="welcome-img" src={WelcomeImg} alt="welcome" />
        <div className="welcome-active" onMouseEnter={handleHover} onMouseLeave={handleLeave} />
      </div>
      <text>Accessible handwritten elements</text>
    </div>
  );
}

export default Welcome;