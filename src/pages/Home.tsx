import React from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Requirements from '../components/Requirements';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Process />
      <Projects />
      <Requirements />
      <Contact />
    </>
  );
};

export default Home;
