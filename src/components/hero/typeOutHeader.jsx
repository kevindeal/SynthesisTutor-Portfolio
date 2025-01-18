import  { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const TypeOutHeader = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span 
    initial={{opacity: 0}} 
    animate={{ opacity: 1 }} 
    className="bg-[#6f66ff]"
    >
      {displayText}
    </motion.span>
  )
}

TypeOutHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

