import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          <main className="Background">
            <HomePage />
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
