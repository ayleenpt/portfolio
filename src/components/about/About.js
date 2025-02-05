import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';
import Name from '../home/Name';
import Footer from '../page/Footer';
import Headshot from '../../assets/about/Headshot.jpg';
import NameStyles from "../../styles/home/NameStyles.module.css";
import '../../styles/about/About.css';

function About() {
  return (
    <div className="about">
      <Background />
      <Menu />
      <div className="bio-container">
        <img className="headshot" src={ Headshot } alt="headshot"></img>
        <div className="bio">
          <Name
            nameClass={ NameStyles.aboutAlign }
            letterClass={ NameStyles.aboutLetter }
          />
          <div className="bio-text">
          I'm a senior at UW Bothell, graduating in June 2025 with a B.S. in Computer Science and Software Engineering. Beyond academics, I’ve tutored pre-major students through UW Bothell’s State Academic Rising Scholars (STARS) program and interned at Chewy as a backend software developer. In my free time I enjoy doing crafts with my friends, crocheting outfits for my cats, playing video games, and trying new food around Seattle.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
