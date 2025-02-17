import Thumbnail from '../../../assets/projects/notestoself/Thumbnail.png';
import Wood from '../../../assets/projects/notestoself/Wood.png';
import '../../../styles/projects/notestoself/Storefront.css';

function Storefront() {
  return (
    <div className="storefront-wrapper">

      <div className="storefront">
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
          <div className="purchase-button" />
        </div>
      </div>
      <div className="storefront-text">
        <text>Online storefront to purchase merchandise and votes</text>
      </div>
    </div>
  );
}

export default Storefront;