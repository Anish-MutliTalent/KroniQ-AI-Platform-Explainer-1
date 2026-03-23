import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';

export function Scene6CTA() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      variants={sceneTransitions.fadeBlur}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }} // Fade to black for loop
    >
      <div className="relative flex flex-col items-center z-10">
        <motion.div
          className="absolute inset-0 bg-green-500/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src={`${import.meta.env.BASE_URL}kroniq-logo.png`}
          alt="KroniQ Logo"
          className="w-[15vw] mb-[8vh] relative z-10"
          initial={{ scale: 0, rotate: 180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        />

        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="text-[4vw] font-body text-white mr-[1vw]">Try free at</span>
          <br/>
          <motion.span 
            className="text-[6vw] font-display font-bold text-green-500"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            kroniqai.com
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
