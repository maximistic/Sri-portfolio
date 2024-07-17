import React from 'react';
 import "./app.css"
import Header from './components/header/header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualifications/Qualification.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer';
import Scrollup from './components/scrollup/ScrollUp';
import Work from './components/Work/Work';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work />
      <Contact />
    </main>
    <Footer />
    <Scrollup/>
    </>
  );
}

export default App;