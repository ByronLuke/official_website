import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="App">
      <Header />
        <About />
        <Projects />
        <Contact />
        <Skills/>
      <Footer />
    </div>
    </>
    
  );
}

export default App;