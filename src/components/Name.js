import React from 'react';
import '../styles/Name.css';
import A from '../assets/name/A.png';
import Y from '../assets/name/Y.png';
import L from '../assets/name/L.png';
import E from '../assets/name/E.png';
import N from '../assets/name/N.png';

function Name() {
  return (
    <div className="name">
      <div className="letter one">
        <img src={A} alt="A" />
      </div>
      <div className="letter two">
        <img src={Y} alt="Y" />
      </div>
      <div className="letter three">
        <img src={L} alt="L" />
      </div>
      <div className="letter one">
        <img src={E} alt="E" />
      </div>
      <div className="letter three">
        <img src={E} alt="E" />
      </div>
      <div className="letter two">
        <img src={N} alt="N" />
      </div>
    </div>
  );
}

export default Name;
