import Background from "../page/Background";
import Menu from '../page/Menu';
import Bio from './Bio';
import Contact from './Contact';
import ResumePDF from '../../assets/about/AyleenPiteoTarpy_Resume.pdf';
import ResumePNG from '../../assets/about/AyleenPiteoTarpy_Resume.png';
import Footer from '../page/Footer';
import '../../styles/about/About.css';

function About() {
  const quoteText =
    <div className="quote-text">
      "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers; no time to be beginners."
    </div>

  const statementText =
    <div className="statement-text">
      "i'm gonna put the artist statement here once I finish writing it :D For now, enjoy this latin.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
  
  return (
    <div className="about">
      <Background />
      <Menu />
      <Bio />

      <div className="quote">
        { quoteText }
        <div className="credit">Margaret Hamilton</div>
      </div>

      <div className="artist-statement">
        { statementText }
      </div>

      <div className="resume-contact">
        <div className="resume-buttons">
          <button className="resume-button view" type="button">View Resume</button>
          
          <a className="download-resume-link" href={ ResumePDF } download="AyleenPiteoTarpy_Resume" target='_blank'>
            <button className="resume-button download" type="button">Download Resume</button>
          </a>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default About;
