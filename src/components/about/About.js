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
        My projects combine technology and art to create interactive, artistic web applications that are as engaging as they are visually appealing. My goal for each project is always to challenge myself to learn something new, whether by mastering some complex functionality, experimenting with new graphic techniques, or exploring client collaborations. My work is driven by curiosity and a desire to create.
        <br/><br/>
        Professionally and educationally, I work mostly with back-end technologies, so I find front-end and application development to be a fun challenge, and a chance to expand my skills. My artistic influences stem from artists with unique aesthetics, and those who engage technology in their art. I take a lot of inspiration from Meow Wolf especially, drawing from their immersive art installations that incorporate technology, user engagement, storytelling, and classical art combined effortlessly. My passion for computer science is inspired by the many women who helped build the tech world, including Ada Lovelace, Grace Hopper, Annie Easley, and Margaret Hamilton.
        <br/><br/>
        Moving forward, I am focused on my upcoming graduation and transition to the tech field as a full time developer. I hope to continue experimenting and pushing my technical and creative skills throughout my career, and finding ways to engage my engineering skills through art.
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

          <a className="download-resume-link" href={Resume} download="AyleenPiteoTarpy_Resume" target='_blank' rel='noreferrer'>
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
