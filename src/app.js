import React from 'react';
 import "./app.css"
import Header from './components/header/header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Anims from './components/Animations/Anims.tsx';
import Qualification from './components/Qualifications/Qualification.jsx';

function App() {
  return (
    <>
    <Header/>
    <Anims />
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
    </main>
    </>
  );
}

export default App;