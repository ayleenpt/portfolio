import React, { useState } from 'react';
import Background from '../../../assets/projects/notestoself/LongBG.png';
import '../../../styles/projects/notestoself/ProgressBar.css';

function ProgressBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar image-wrapper">
        <img src={Background} alt="progress bar" />
        <input
          type="range"
          value={value}
          onChange={handleChange}
          className="custom-slider"
        />
      </div>
      <text>Dynamic progress bar</text>
    </div>
  );
}

export default ProgressBar;