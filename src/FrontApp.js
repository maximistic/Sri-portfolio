import React, { useState } from 'react';
import FrontPage from './components/FrontPage/FrontPage';
import App from './app';

function FrontApp() {
  const [showFrontPage, setShowFrontPage] = useState(true);

  const handleAnimationComplete = () => {
    setShowFrontPage(false);
  };

  return (
    <>
      {showFrontPage ? (
        <FrontPage onAnimationComplete={handleAnimationComplete} />
      ) : (
        <App />
      )}
    </>
  );
}

export default FrontApp;