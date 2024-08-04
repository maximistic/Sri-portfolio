// ParallaxScene.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ParallaxScene.css';

// Import your images
import forestImage from '../../assets/parallax-bg.jpg';
import manImage from '../../assets/parallax5-person.png';

gsap.registerPlugin(ScrollTrigger);

const ParallaxScene = () => {
  const sceneRef = useRef(null);
  const forestRef = useRef(null);
  const manRef = useRef(null);

  useEffect(() => {
    const forest = forestRef.current;
    const man = manRef.current;

    gsap.to(forest, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: sceneRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(man, {
      y: "50%",
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: sceneRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Coffee cup rotation animation
    gsap.to(man, {
      rotationY: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

  }, []);

  return (
    <div className="parallax-container" ref={sceneRef}>
      <div className="forest-layer" ref={forestRef}></div>
      <div className="fog-layer"></div>
      <div className="man-layer" ref={manRef}>
        <img src={manImage} alt="Man with coffee" />
      </div>
    </div>
  );
};

export default ParallaxScene;