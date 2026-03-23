import { motion } from 'framer-motion';
import { charContainerVariants, charVariants } from '@/lib/video';

const entrance = {
  initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
  animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
  exit: { scale: 1.5, opacity: 0, filter: 'blur(30px)' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function Scene1Hook() {
  const text1 = "Stop juggling 6 AI tools.";
  const text2 = "Use one instead.";

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={entrance}
    >
      <div className="text-center px-8 flex flex-col gap-4">
        <motion.div
          className="text-[7vw] font-bold font-display leading-tight tracking-tight text-white"
          variants={charContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {text1.split(' ').map((word, wordIndex) => (
            <span key={`word-${wordIndex}`} className="inline-block mr-[2vw] whitespace-nowrap">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`char-${charIndex}`}
                  variants={charVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>
        
        <motion.div
          className="text-[8vw] font-bold font-display text-[#22c55e]"
          variants={charContainerVariants}
          initial="hidden"
          animate="visible"
        >
           {text2.split(' ').map((word, wordIndex) => (
            <span key={`word2-${wordIndex}`} className="inline-block mr-[2vw] whitespace-nowrap">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`char2-${charIndex}`}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: -40, transformPerspective: 800 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transformPerspective: 800,
                      transition: { type: 'spring', stiffness: 400, damping: 25, delay: 0.8 + (wordIndex * 0.1) + (charIndex * 0.02) }
                    }
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
