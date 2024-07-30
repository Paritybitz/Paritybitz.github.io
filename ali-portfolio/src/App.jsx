import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
