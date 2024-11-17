import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Projects from './components/Projects';
import Requirements from './components/Requirements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Process />
      <Projects />
      <Requirements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;