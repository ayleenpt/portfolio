import React from 'react';
import PlayButtonStatic from '../../../assets/projects/notestoself/PlayButton.png';
import Background from '../../../assets/projects/notestoself/SquareBG.png';
import PlayButtonActive from '../../../assets/projects/notestoself/PlayButtonActiveBG.png'
import '../../../styles/projects/notestoself/PlayButton.css';

function PlayButton() {
  const handleHover = () => {
    const playButtonActive = document.querySelector('.play-button-active');
    playButtonActive.style.backgroundImage = `url(${PlayButtonActive})`;
  };

  const handleLeave = () => {
    const playButtonActive = document.querySelector('.play-button-active');
    playButtonActive.style.backgroundImage = "";
  };

  return (
    <div className="play-button-wrapper">
      <text>Custom play buttons with responsive active state.</text>
      <div className="play-button image-wrapper">
        <img src={Background} alt="play button" />
        <div className="play-button-active" />
        <img className="play-button-img" src={PlayButtonStatic} alt="play button" />
        <div className="play-button-active-area" onMouseEnter={handleHover} onMouseLeave={handleLeave} />
      </div>
    </div>
  );
}

export default PlayButton;