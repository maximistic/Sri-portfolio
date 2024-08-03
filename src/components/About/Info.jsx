import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about__info grid">
      {[
        { icon: "bx-award", title: "Experience", subtitle: "Fresh Perspective" },
        { icon: "bx-briefcase-alt", title: "Completed", subtitle: "15+ Projects" },
        { icon: "bx-support", title: "Work Mode", subtitle: "Flexible Adaptor" },
      ].map((item, index) => (
        <motion.div 
          className="about__box"
          key={index}
          variants={infoVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <i className={`bx ${item.icon} about__icon`}></i>
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;