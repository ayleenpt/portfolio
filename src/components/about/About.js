import React from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';
import '../../styles/about/About.css';

function About() {
  return (
    <div className="about">
      <Background />
      <a className="link" href="https://en.wikipedia.org/wiki/The_Witch_(2015_film)">learn about ayleen here</a>
      <Menu />
    </div>
  );
}

export default About;
