import React from 'react';
import '../styles/Name.css';
import A from '../assets/A.png';
import Y from '../assets/Y.png';
import L from '../assets/L.png';
import E from '../assets/E.png';
import N from '../assets/N.png';

function Name() {
  return (
    <div className="name">
      <div className="letter">
        <img src={A} alt="A" />
      </div>
      <div className="letter">
        <img src={Y} alt="Y" />
      </div>
      <div className="letter">
        <img src={L} alt="L" />
      </div>
      <div className="letter">
        <img src={E} alt="E" />
      </div>
      <div className="letter">
        <img src={E} alt="E" />
      </div>
      <div className="letter">
        <img src={N} alt="N" />
      </div>
    </div>
  );
}

export default Name;
