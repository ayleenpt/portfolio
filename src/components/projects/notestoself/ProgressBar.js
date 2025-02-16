import React, { useState } from 'react';
import '../../../styles/projects/notestoself/ProgressBar.css';

function ProgressBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="progress-bar">
      <input
        type="range"
        value={value}
        onChange={handleChange}
        className="custom-slider"
      />
      <text>Dynamic progress bar</text>
    </div>
  );
}

export default ProgressBar;