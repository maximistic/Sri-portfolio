import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './app';
import FrontApp from './FrontApp';

import ParallaxScene from './components/parallax/ParallaxScene';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FrontApp />
  </React.StrictMode>
);