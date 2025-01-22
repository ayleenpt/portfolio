import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/home/Homepage';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Aurora from './components/projects/Aurora';
import IconMaker from './components/projects/IconMaker';
import MaskiMinigames from './components/projects/MaskiMinigames';
import NotesToSelf from './components/projects/NotesToSelf';
import TicTacToe from './components/projects/TicTacToe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/aurora" element={<Aurora />} />;
          <Route path="/projects/icon-maker" element={<IconMaker />} />;
          <Route path="/projects/maski-minigames" element={<MaskiMinigames />} />;
          <Route path="/projects/notes-to-self" element={<NotesToSelf />} />;
          <Route path="/projects/tic-tac-toe" element={<TicTacToe />} />;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
