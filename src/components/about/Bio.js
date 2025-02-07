import { useState, useEffect } from 'react';
import Name from '../home/Name';
import Headshot from '../../assets/about/Headshot.png';
import NameStyles from "../../styles/home/NameStyles.module.css";
import '../../styles/about/About.css';
import '../../styles/about/Bio.css';

function Bio() {
  const headshot =
    <div className="headshot">
      <img
        src={ Headshot }
        alt="headshot"
      />
    </div>

  const name =
    <Name
      nameClass={ NameStyles.aboutAlign }
      letterClass={ NameStyles.aboutLetter }
    />

  const bio = 
    <div className="bio-text">
      I’ve had separate passions for creativity and mathematics since I was old enough to understand those concepts. In college I discovered software development as a conjunction between the two, leveraging my creative ability and logical thinking skills to excel academically and professionally. I completed a six month internship as a backend engineer in 2024, developing my confidence with full scale development and preparing me for a career in tech. I enjoy creating art with my engineering skills through making fun, interactive web apps that demonstrate my technical and artistic abilities. I will graduate from the University of Washington in June 2025, and I look forward to beginning my career as a software engineer.
    </div>

  const quoteText =
    <div className="quote-text">
      "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers; no time to be beginners."
    </div>

  const location = 
    <div className="location">
      Seattle &bull; WA &bull; USA
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

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="bio-container">
          <div className="left">
            { headshot }
            { location }
          </div>
          <div className="right">
            { bioContents }
          </div>
        </div>
        <div className="bio-after">
          { bioAfterContents }
      </div>
    </div>
  );
}

export default Bio;