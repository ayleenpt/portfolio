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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus neque sit amet ultricies pretium. Vivamus vestibulum elit mattis turpis sodales, convallis euismod leo congue. Nunc a elit non ligula ultrices ullamcorper viverra eget massa. Maecenas feugiat nunc vel mi dignissim varius. Nulla non arcu convallis, commodo nulla a, faucibus ex. Donec hendrerit nulla non vehicula cursus. Sed ut volutpat purus, nec condimentum augue. Sed non pharetra leo.
          <br/><br />Aliquam sed fringilla nibh, eu mattis nisi. Integer scelerisque vel nunc non bibendum. Nulla tincidunt dolor vel diam condimentum, ac tincidunt ligula auctor. Donec luctus metus in sollicitudin congue. Etiam venenatis egestas tortor, ultrices ullamcorper lorem lobortis id. Mauris finibus felis id lectus ultrices tincidunt. Nam ut massa euismod, euismod ante sed, efficitur ante.
          <br/><br />Praesent in turpis non est porttitor semper id iaculis ligula. Nunc aliquet, ante nec maximus eleifend, dui dui viverra elit, in facilisis nulla orci nec nisl. Quisque at lectus vel leo fringilla mattis in et eros. Vestibulum turpis dolor, iaculis eget feugiat non, imperdiet vel sem. Maecenas facilisis arcu mattis magna auctor, in dignissim ipsum tincidunt. Aliquam sit amet ex quis felis imperdiet convallis eget nec quam. Aliquam a tellus magna. Fusce eget fermentum leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus convallis rhoncus commodo. Aenean eget faucibus sem. Nullam erat odio, pharetra non euismod vel, hendrerit et ante. Donec semper tortor nulla, eu aliquet libero vestibulum ac. Pellentesque vehicula congue luctus. Sed a dictum turpis, in auctor sapien. "
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
