import { motion } from 'framer-motion';
import { sceneTransitions, staggerConfigs, easings, charContainerVariants, charVariants } from '@/lib/video';

export function Scene1Hook() {
  const text1 = "Stop juggling 6 AI tools.";
  const text2 = "Use one instead.";

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      variants={sceneTransitions.wipe}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="text-center px-8">
        <motion.div
          className="text-[6vw] font-bold font-display leading-tight tracking-tight text-white mb-4"
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
          className="text-[7vw] font-bold font-display text-gradient-accent mt-4"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 1.5, duration: 0.8, ease: easings.easeOut.ease }}
        >
          {text2}
        </motion.div>
      </div>
    </motion.div>
  );
}
