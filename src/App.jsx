import React from 'react';
import Hero from './components/Hero/Hero';  // Correct path for Hero.jsx
import MainLayout from './components/MainLayout/MainLayout';  // Correct path for MainLayout.jsx
import Card from "./components/Card/Card"
// File: src/index.js or App.js
import './App.css'; // Make sure the CSS for centering is applied globally

function App() {
  return (
    <MainLayout>
      <Hero />
      <Card />
    </MainLayout>
  );
}

export default App;
