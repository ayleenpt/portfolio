import React from 'react';
import A from '../../assets/name/A.png';
import Y from '../../assets/name/Y.png';
import L from '../../assets/name/L.png';
import E from '../../assets/name/E.png';
import N from '../../assets/name/N.png';
import '../../styles/home/Name.css';

function Name({ nameStyle, letterStyle }) {
  return (
    <div className="name" style={ nameStyle }>
      <div className="text intro">hello, my name is</div>
      <div className="letters">
        <div className="letter one" style={ letterStyle } >
          <img src={A} alt="A" />
        </div>
        <div className="letter two" style={ letterStyle } >
          <img src={Y} alt="Y" />
        </div>
        <div className="letter three" style={ letterStyle } >
          <img src={L} alt="L" />
        </div>
        <div className="letter one" style={ letterStyle } >
          <img src={E} alt="E" />
        </div>
        <div className="letter three" style={ letterStyle } >
          <img src={E} alt="E" />
        </div>
        <div className="letter two" style={ letterStyle } >
          <img src={N} alt="N" />
        </div>
      </div>
      <div className="text pronunciation">i &bull; leen</div>
    </div>
  );
}

export default Name;
