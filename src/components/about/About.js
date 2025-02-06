import { useState, useEffect } from 'react';
import Background from "../page/Background";
import Menu from '../page/Menu';
import Name from '../home/Name';
import Footer from '../page/Footer';
import Headshot from '../../assets/about/Headshot.jpg';
import NameStyles from "../../styles/home/NameStyles.module.css";
import '../../styles/about/About.css';

function About() {
  const headshot =
    <img
      className="headshot"
      src={ Headshot }
      alt="headshot"
    />

  const name =
    <Name
      nameClass={ NameStyles.aboutAlign }
      letterClass={ NameStyles.aboutLetter }
    />

  const bio = 
    <div className="bio-text">
      I’ve had separate passions for creativity and mathematics since I was old enough to understand those concepts. In college I discovered software development as a conjunction between the two, leveraging my creative ability and logical thinking skills to excel academically and professionally. I completed a six month internship as a backend engineer in 2024, developing my confidence with full scale development and preparing me for a career in tech. I enjoy creating art with my engineering skills through making fun, interactive web apps that demonstrate my technical and artistic abilities. I will graduate from the University of Washington in June 2025, and I look forward to beginning my career as a software engineer.
    </div>

  const [bioContents, setBioContents] = useState(window.innerWidth > 1000 ? [name, bio] : [name]);
  const [bioAfterContents, setBioAfterContents] = useState(window.innerWidth < 1000 ? [bio] : []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setBioContents([name, bio]);
        setBioAfterContents([]);
      } else {
        setBioContents([name]);
        setBioAfterContents([bio]);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Call it once to set the initial state correctly in case the window size changes before rendering
    handleResize();

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="about">
      <Background />
      <Menu />
      <div className="bio-container">
        { headshot }
        <div className="bio">
          { bioContents }
        </div>
      </div>
      <div className="bio-after">
        { bioAfterContents }
      </div>
      <Footer />
    </div>
  );
}

export default About;
