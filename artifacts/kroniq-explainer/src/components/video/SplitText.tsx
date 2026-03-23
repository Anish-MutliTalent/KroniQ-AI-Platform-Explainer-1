import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  containerVariants?: Variants;
  charVariants?: Variants;
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: customDelay,
    },
  }),
};

const defaultCharVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  containerVariants = defaultContainerVariants,
  charVariants = defaultCharVariants,
}) => {
  // Split handling spaces safely to keep word wrapping intact
  const words = text.split(' ');

  return (
    <motion.div
      className={`inline-block w-full ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {words.map((word, i) => (
        <span key={`word-${i}`} className="inline-block whitespace-nowrap">
          {word.split('').map((char, j) => (
            <motion.span
              key={`char-${i}-${j}`}
              variants={charVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after word unless it's the last word */}
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.div>
  );
};
