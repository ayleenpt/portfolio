import { useState } from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';
import Bio from './Bio';
import Contact from './Contact';
import Footer from '../page/Footer';
import ResumeModal from './ResumeModal';
import Resume from '../../assets/about/AyleenPiteoTarpy_Resume.pdf';
import '../../styles/about/About.css';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="about">
      <Background />
      <Menu />
      <Bio />

      <div className="quote">
        <div className="quote-text">
          "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers; no time to be beginners."
        </div>
        <div className="credit">Margaret Hamilton</div>
      </div>

      <div className="artist-statement">
        <div className="statement-text">
          "i'm gonna put the artist statement here once I finish writing it :D For now, enjoy this latin.<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        </div>
      </div>

      <div className="resume-contact">
        <div className="resume-buttons">
          <button 
            className="resume-button view" 
            type="button" 
            onClick={() => setIsModalOpen(true)}
          >
            View Resume
          </button>

          <a className="download-resume-link" href={Resume} download="AyleenPiteoTarpy_Resume" target='_blank'>
            <button className="resume-button download" type="button">Download Resume</button>
          </a>
        </div>
        <Contact />
      </div>

      <Footer />

      {isModalOpen && <ResumeModal pdf={Resume} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default About;
