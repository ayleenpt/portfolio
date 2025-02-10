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
      I'm based in Seattle, Washington, and I'm a senior in Computer Science and Software Engineering at the University of Washington. I have professional and independent experience with front and backend development, including a six month internship as a software developer on a database team at Chewy. I'll be graduating with my Bachelor of Science in June, 2025, and in July I plan to return to Chewy to begin my career as a full time engineer.
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