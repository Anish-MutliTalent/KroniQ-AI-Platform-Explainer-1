import { motion } from 'framer-motion';
import { charContainerVariants, charVariants } from '@/lib/video';

export function Scene1Hook() {
  const text1 = "Stop juggling 6 AI tools.";
  const text2 = "Use one instead.";

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ scale: 1.4, opacity: 0, filter: 'blur(40px)', transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-center px-8 flex flex-col gap-[2vh]">
        <motion.div
          className="text-[7.5vw] font-bold font-display leading-[1.05] tracking-[-0.03em] text-white"
          variants={charContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {text1.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block mr-[1.8vw] whitespace-nowrap">
              {word.split('').map((char, ci) => (
                <motion.span key={ci} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="text-[8.5vw] font-bold font-display tracking-[-0.03em] leading-[1.05] text-[#22c55e]"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.02, delayChildren: 0.55 } }
          }}
          initial="hidden"
          animate="visible"
        >
          {text2.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block mr-[1.8vw] whitespace-nowrap">
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -50, transformPerspective: 900 },
                    visible: {
                      opacity: 1, y: 0, rotateX: 0, transformPerspective: 900,
                      transition: { type: 'spring', stiffness: 450, damping: 22 }
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

      {/* Subtle accent line */}
      <motion.div
        className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '30vw', opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
