import React from 'react';
import '../../styles/page/Background.scss';
import Glass from './Glass';

const Background = () => {
  return (
    <div className="background">
      <Glass />
      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 30 -10"
          />
        </filter>
      </svg>
      <div className="blob-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>
      </div>
    </div>
  );
};

export default Background;
