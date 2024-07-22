import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';
import styles from './MouseAnimation.module.scss';

const MouseAnimation = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </div>
      </motion.div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MouseAnimation;