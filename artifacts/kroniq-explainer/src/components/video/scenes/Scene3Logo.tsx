import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';

export function Scene3Logo() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      variants={sceneTransitions.clipCircle}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow behind logo */}
        <motion.div
          className="absolute top-[10vh] w-[40vw] h-[40vw] bg-green-500/30 rounded-full blur-[100px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <motion.img
          src={`${import.meta.env.BASE_URL}kroniq-logo.png`}
          alt="KroniQ Logo"
          className="w-[20vw] relative z-10"
          initial={{ y: -500, opacity: 0, rotate: -15 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 12,
            delay: 0.2
          }}
        />

        <div className="mt-[10vh] text-center z-10">
          <motion.h2
            className="text-[6vw] font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            70+ models.
          </motion.h2>
          
          <motion.p
            className="text-[3vw] font-body text-green-400 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Your one-stop AI platform
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
