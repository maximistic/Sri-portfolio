import React from 'react';
// import "./index.css"
import Header from './components/header/header';
import Home from './components/Home/Home';


function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
    </main>
    </>
  );
}

export default App;