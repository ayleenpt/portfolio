import { useState, useEffect } from 'react';
import Thumbnail from '../../../assets/projects/notestoself/Thumbnail.png';
import WideBG from '../../../assets/projects/notestoself/WideBG.png';
import TallBG from '../../../assets/projects/notestoself/TallBG.png';
import '../../../styles/projects/notestoself/Storefront.css';

function Storefront() {
  const [background, setBackground] = useState(TallBG);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setBackground(WideBG);
      } else {
        setBackground(TallBG);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="storefront-wrapper">

      <div className="storefront image-wrapper">
        <img src={background} alt="storefront" />

        <div className="storefront-content">
          <div className="thumbnail">
            <img src={ Thumbnail } alt="Notes to Self EP" />
          </div>

          <div className="item-title">
            DIGITAL DOWNLOAD - Notes to Self EP
            <br /><br />
            Worth 2 votes
          </div>

          <div className="item-description">
            Acoustic demos of each track on the "Notes to Self" project, as well as an exclusive voice memo track.
          </div>

          <div className="price">
            $10
            <div className="purchase-button">Add to cart</div>
          </div>
        </div>
      </div>

      <div className="storefront-text">
        <text>Online storefront to purchase merchandise and votes</text>
      </div>
    </div>
  );
}

export default Storefront;